import { type InnerTubeClient } from './Misc.js';

export interface GetVideoInfoOptions {
  /**
   * InnerTube client.
   */
  client?: InnerTubeClient;
  /**
   * Proof of Origin token, bound to the video ID being requested.
   * If not provided, session bound token will be used.
   */
  po_token?: string;
}