import type { Actions } from '../index.js';
import type Innertube from '../../Innertube.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { BotGuardLogBinding, BotGuardSolver } from '../../types/BotGuard.js';
import { AddBackstagePostAction, BackstagePost, RunAttestationCommand } from '../../parser/nodes.js';
import { encodeCreateBackstagePostParams } from '../../utils/ProtoUtils.js';
import type { CreatePostImage, CreatePostExtraOptions, CreatePostPayload, ImagesAttachment_PostImageData, PollAttachmentData_Option, CreatePostPayloadBase, CreatePostBaseOptions } from '../../types/CreatePost.ts';
import type BotGuardManager from './BotGuardManager.js';

export interface CreatePostResponse {
  post_id: string;
  post?: BackstagePost;
}

export default class PostManager {
  readonly #innertube: Innertube;
  readonly #actions: Actions;
  readonly #botguard_solver: BotGuardSolver<BotGuardLogBinding>;
  readonly #botguard: BotGuardManager;

  constructor(innertube: Innertube, actions: Actions, botguard_solver: BotGuardSolver<BotGuardLogBinding>) {
    this.#innertube = innertube;
    this.#actions = actions;
    this.#botguard_solver = botguard_solver;
    this.#botguard = this.#innertube.botguard;
  }

  async #uploadImage(image: CreatePostImage, channel_id: string){
    const base_url = 'https://www.youtube.com/';
    const image_get_upload_url_response = await this.#actions.session.http.fetch('/channel_image_upload/posts', { 
      baseURL: base_url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'x-goog-upload-command': 'start',
        'x-goog-upload-header-content-length': String(image.source.size),
        'x-goog-upload-protocol': 'resumable',
        'x-youtube-channelid': channel_id
      }
    });

    const upload_url = image_get_upload_url_response.headers.get('x-goog-upload-url');
    if (!upload_url) throw new InnertubeError('Failed to get image upload url.');

    const image_upload_response = await this.#actions.session.http.fetch(upload_url, { 
      baseURL: base_url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'x-goog-upload-command': 'upload, finalize',
        'x-goog-upload-offset': '0',
        'x-youtube-channelid': channel_id
      },
      body: image.source.body
    });
    const image_upload_json = await image_upload_response.json() as { encryptedBlobId: string };
    return image_upload_json.encryptedBlobId;
  }
  async #buildPost(opts: CreatePostBaseOptions, channel_id: string, extra_opts?: CreatePostExtraOptions): Promise<CreatePostPayload> {
    if (opts.scheduled_publish_time_seconds && !Number.isInteger(Number(opts.scheduled_publish_time_seconds)))
      throw new Error('opts.scheduled_publish_time_seconds must be an integer');
    const base_post: CreatePostPayloadBase = {
      commentText: opts.comment_text,
      scheduledPublishTimeSec: opts.scheduled_publish_time_seconds,
      createBackstagePostParams: encodeCreateBackstagePostParams(channel_id)
    };
    if (!extra_opts) return base_post;
    switch (extra_opts.type) {
      case 'VIDEO': return {
        ...base_post,
        videoAttachment: { videoId: extra_opts.video_id } 
      };
      case 'POLL': return {
        ...base_post,
        pollAttachment: { choices: extra_opts.choices } 
      };
      case 'QUIZ': return {
        ...base_post,
        quizAttachmentData: { options: extra_opts.choices.map((choice) => (
          {
            pollOption: {
              text: choice.text,
              explanation: choice.explanation
            },
            isCorrect: choice.is_correct
          }))
        } 
      };
      case 'IMAGE': {
        const images_data: ImagesAttachment_PostImageData[] = await Promise.all(
          extra_opts.images.map(async(image) => (
            {
              encryptedBlobId: await this.#uploadImage(image, channel_id),
              previewCoordinates: image.preview_coordinates
            }
          )));
        return {
          ...base_post,
          imagesAttachment: { imagesData: images_data } 
        };
      }
      case 'IMAGE_POLL': {
        const data: PollAttachmentData_Option[] = await Promise.all(
          extra_opts.options.map(async(opt, index) => (
            {
              image: {
                encryptedBlobId: await this.#uploadImage(opt.image, channel_id),
                id: index,
                imageBlob: {},
                localImageSrc: {
                  privateDoNotAccessOrElseWrappedUrl: opt.image.source.base64
                },
                naturalHeight: opt.image.source.height,
                naturalWidth: opt.image.source.width,
                previewCoordinates: opt.image.preview_coordinates
              },
              text: opt.text
            }
          )));
        return {
          ...base_post,
          pollAttachmentData: { options: data } 
        };
      }
      default: throw new Error('Unknown CreatePostOptions type');
    }
  }

  async create(opts: Omit<CreatePostBaseOptions, 'scheduled_publish_time_seconds'>, channel_id: string, extra_opts?: CreatePostExtraOptions): Promise<Required<CreatePostResponse>>
  async create(opts: Required<CreatePostBaseOptions>, channel_id: string, extra_opts?: CreatePostExtraOptions): Promise<Omit<CreatePostResponse, 'post'>>
  async create(opts: CreatePostBaseOptions, channel_id: string, extra_opts?: CreatePostExtraOptions): Promise<CreatePostResponse> {
    if (!this.#actions.session.logged_in) throw new InnertubeError('You must be signed in to perform this operation.');
    const create_post_response = await this.#actions.execute('/backstage/create_post', {
      parse: true,
      ...(await this.#buildPost(opts, channel_id, extra_opts))
    });
    if (!create_post_response.actions?.is_array) throw new InnertubeError('create_post_response doesn\'t have any actions');
    const attestation_command = create_post_response.actions.array().firstOfType(RunAttestationCommand);
    if (!attestation_command) throw new InnertubeError('Post didn\'t send an attestation command');
    
    this.#botguard.log(this.#botguard_solver, {run_attestation_command: attestation_command, atn_page_url: `https://www.youtube.com/channel/${channel_id}/posts`});
    const add_backstage_post_action = create_post_response.actions.array().firstOfType(AddBackstagePostAction);

    return {
      post_id: attestation_command.ids?.[0].external_post_id ?? '',
      post: add_backstage_post_action?.renderer?.post.as(BackstagePost)
    };
  }
}