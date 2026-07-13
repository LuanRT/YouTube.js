import * as Constants from '../../../utils/Constants.js';
import type { RawNode } from '../../types/RawResponse.js';
import Thumbnail from './Thumbnail.js';

export default class Collaborator {
  id: string;
  name: string;
  thumbnails: Thumbnail[];
  url: string;
  channel_info: string;

  constructor(data: RawNode) {
    this.id = data.renderer_context?.command_context?.on_tap?.payload?.browseId || 'N/A';
    this.name = data.title?.text || 'N/A';
    this.thumbnails = Thumbnail.fromResponse(data.leading_accessory);
    const urlPath = data.renderer_context?.command_context?.on_tap?.metadata?.url;
    this.url = urlPath ? `${Constants.URLS.YT_BASE}${urlPath}` : 'N/A';
    this.channel_info = data.subtitle?.text || 'N/A';
  }
}