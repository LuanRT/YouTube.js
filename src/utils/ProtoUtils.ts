import { base64ToU8, u8ToBase64 } from './Utils.js';
import { VisitorData, PeformCommentActionParams, NextParams } from '../../protos/generated/misc/params.js';

export function encodeVisitorData(id: string, timestamp: number): string {
  const writer = VisitorData.encode({ id, timestamp });
  return encodeURIComponent(u8ToBase64(writer.finish()).replace(/\+/g, '-').replace(/\//g, '_'));
}

export function decodeVisitorData(visitor_data: string): VisitorData {
  const data = VisitorData.decode(base64ToU8(decodeURIComponent(visitor_data).replace(/-/g, '+').replace(/_/g, '/')));
  return data;
}

export function encodeCommentActionParams(type: number, args: {
  comment_id?: string,
  video_id?: string,
  text?: string,
  target_language?: string
} = {}): string {
  const data: PeformCommentActionParams = {
    type,
    commentId: args.comment_id || ' ',
    videoId: args.video_id || ' ',
    channelId: ' ',
    unkNum: 2
  };

  if (args.hasOwnProperty('text')) {
    if (typeof args.target_language !== 'string')
      throw new Error('target_language must be a string');

    if (args.comment_id)
      delete data.unkNum;

    data.translateCommentParams = {
      params: {
        comment: {
          text: args.text as string
        }
      },
      commentId: args.comment_id || ' ',
      targetLanguage: args.target_language
    };
  }

  const writer = PeformCommentActionParams.encode(data);
  return encodeURIComponent(u8ToBase64(writer.finish()));
}

export function encodeNextParams(video_ids: string[]): string {
  const writer = NextParams.encode({ videoId: video_ids });
  return encodeURIComponent(u8ToBase64(writer.finish()).replace(/\+/g, '-').replace(/\//g, '_'));
}