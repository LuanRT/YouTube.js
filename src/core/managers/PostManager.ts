import type { Actions } from '../index.js';
import type Innertube from '../../Innertube.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { BotGuardSolver } from '../../types/BotGuard.js';
import { RunAttestationCommand } from '../../parser/nodes.js';
import { encodeCreateBackstagePostParams } from '../../utils/ProtoUtils.js';
import type { CreatePostImage, CreatePostOptions, CreatePostPayload, ImagesAttachment_PostImageData, PollAttachmentData_Option, CreatePostPayloadBase } from '../../types/CreatePost.ts';

export default class PostManager {
  readonly #innertube: Innertube;
  readonly #actions: Actions;
  readonly #botguard_solver: BotGuardSolver<string>;

  constructor(innertube: Innertube, actions: Actions, botguard_solver: BotGuardSolver<string>) {
    this.#innertube = innertube;
    this.#actions = actions;
    this.#botguard_solver = botguard_solver;
  }

  async #uploadImage(image: CreatePostImage, channel_id: string){
    const base_url = 'https://www.youtube.com/';
    const image_get_upload_url_response = await this.#actions.session.http.fetch('/channel_image_upload/posts', { 
      baseURL: base_url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'x-goog-upload-command': 'start',
        'x-goog-upload-header-content-length': String(image.reader.size),
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
      body: image.reader.body
    });
    const image_upload_json = await image_upload_response.json() as { encryptedBlobId: string };
    return image_upload_json.encryptedBlobId;
  }
  async #buildPost(comment_text: string, channel_id: string, options?: CreatePostOptions): Promise<CreatePostPayload> {
    const base_post: CreatePostPayloadBase = {
      commentText: comment_text,
      createBackstagePostParams: encodeCreateBackstagePostParams(channel_id)
    };
    if (!options) return base_post;
    switch (options.type) {
      case 'VIDEO': return {
        ...base_post,
        videoAttachment: { videoId: options.video_id } 
      };
      case 'POLL': return {
        ...base_post,
        pollAttachment: { choices: options.choices } 
      };
      case 'QUIZ': return {
        ...base_post,
        quizAttachmentData: { options: options.choices.map((choice) => (
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
          options.images.map(async(image) => (
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
          options.options.map(async(opt, index) => (
            {
              image: {
                encryptedBlobId: await this.#uploadImage(opt.image, channel_id),
                id: index,
                imageBlob: {},
                localImageSrc: {
                  privateDoNotAccessOrElseWrappedUrl: opt.image.reader.base64
                },
                naturalHeight: opt.image.reader.height,
                naturalWidth: opt.image.reader.width,
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

  async create(comment_text: string, channel_id: string, options?: CreatePostOptions) {
    if (!this.#actions.session.logged_in) throw new InnertubeError('You must be signed in to perform this operation.');
    const create_post_response = await this.#actions.execute('/backstage/create_post', {
      parse: true,
      ...(await this.#buildPost(comment_text, channel_id, options))
    });
    if (!create_post_response.actions?.is_array) throw new InnertubeError('create_post_response doesn\'t have any actions');
    const attestation_command = create_post_response.actions.array()[0].as(RunAttestationCommand);
    const attestation_run_response = await attestation_command.run(this.#innertube, this.#botguard_solver, undefined, `https://www.youtube.com/channel/${channel_id}/posts`);
    const attestation_log_response = this.#actions.execute('/att/log', {
      challenge: attestation_run_response.challenge.challenge,
      engagementType: attestation_command.engagement_type,
      ids: attestation_command.raw_ids,
      webResponse: attestation_run_response.web_response
    });
    return { create_post_response, attestation_log_response };
  }
}