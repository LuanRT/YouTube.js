import { InnertubeError } from "../../utils/Utils";
import Parser, { YTNode } from "../index.js";
import LiveChat from "../classes/LiveChat";
import Constants from "../../utils/Constants.js";
import Actions from "../../core/Actions";
import Player from "../../core/Player";
import TwoColumnWatchNextResults from "../classes/TwoColumnWatchNextResults";
import VideoPrimaryInfo from "../classes/VideoPrimaryInfo";
import MerchandiseShelf from "../classes/MerchandiseShelf";
import VideoSecondaryInfo from "../classes/VideoSecondaryInfo";
import RelatedChipCloud from "../classes/RelatedChipCloud";
import ChipCloud from "../classes/ChipCloud";
import ItemSection from "../classes/ItemSection";
import PlayerOverlay from "../classes/PlayerOverlay";
import ToggleButton from "../classes/ToggleButton";
import CommentsEntryPointHeader from "../classes/comments/CommentsEntryPointHeader";
import ContinuationItem from "../classes/ContinuationItem";
import LiveChatWrap from './LiveChat';

export interface FormatOptions {
    /**
     * video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
     */
    quality?: string;
    /**
     * download type, can be: video, audio or video+audio
     */
    type?: 'video' | 'audio' | 'video+audio';
    /**
     * file format, use 'any' to download any format
     */
    format?: string;
}

export interface DownloadOptions extends FormatOptions {
    /**
     * download range, indicates which bytes should be downloaded.
     */
    range?: {
        start: number;
        end: number;
    }
}

class VideoInfo {
    #page;
    #actions;
    #player;
    #cpn;
    #watch_next_continuation;
    basic_info;
    streaming_data;
    playability_status;
    annotations;
    storyboards; 
    endscreen;
    captions;
    cards;
    primary_info;
    secondary_info;
    merchandise;
    related_chip_cloud;
    watch_next_feed;
    player_overlays;
    comments_entry_point_header;
    livechat;
    /**
     * @param data - API response.
     * @param actions
     * @param player
     * @param cpn - Client Playback Nonce
     */
    constructor(data: any, actions: Actions, player: Player, cpn: string) {
        this.#actions = actions;
        this.#player = player;
        this.#cpn = cpn;
        const info = Parser.parseResponse(data[0]);
        const next = Parser.parseResponse(data[1].data || {});
        this.#page = [info, next];
        if (info.playability_status?.status === 'ERROR')
            throw new InnertubeError('This video is unavailable', info.playability_status);
        this.basic_info = { // this type is inferred so no need for an explicit type
            ...info.video_details,
            ...{
                /**
                 * Microformat is a bit redundant, so only
                 * a few things there are interesting to us.
                 */
                embed: info.microformat?.embed,
                channel: info.microformat?.channel,
                is_unlisted: info.microformat?.is_unlisted,
                is_family_safe: info.microformat?.is_family_safe,
                has_ypc_metadata: info.microformat?.has_ypc_metadata
            },
            like_count: undefined as number | undefined,
            is_liked: undefined as boolean | undefined,
            is_disliked: undefined as boolean | undefined,
        };
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        const two_col = next.contents.item().as(TwoColumnWatchNextResults);
        const results = two_col.results;
        const secondary_results = two_col.secondary_results;
        if (results && secondary_results) {
            this.primary_info = results.get({ type: 'VideoPrimaryInfo' })?.as(VideoPrimaryInfo);
            this.secondary_info = results.get({ type: 'VideoSecondaryInfo' })?.as(VideoSecondaryInfo);
            this.merchandise = results.get({ type: 'MerchandiseShelf' })?.as(MerchandiseShelf);
            this.related_chip_cloud = secondary_results?.get({ type: 'RelatedChipCloud' })?.as(RelatedChipCloud)?.content.item().as(ChipCloud);
            this.watch_next_feed = secondary_results?.get({ type: 'ItemSection' })?.as(ItemSection)?.contents;
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed)) 
                this.#watch_next_continuation = this.watch_next_feed?.pop()?.as(ContinuationItem);
            this.player_overlays = next.player_overlays.array().filterType(PlayerOverlay);
            this.basic_info.like_count = this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'LIKE' })?.as(ToggleButton)?.like_count;
            this.basic_info.is_liked = this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'LIKE' })?.as(ToggleButton)?.is_toggled;
            this.basic_info.is_disliked = this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'DISLIKE' })?.as(ToggleButton)?.is_toggled;
            const comments_entry_point = results.get({ target_id: 'comments-entry-point' })?.as(ItemSection);
            this.comments_entry_point_header = comments_entry_point?.contents?.get({ type: 'CommentsEntryPointHeader' })?.as(CommentsEntryPointHeader);
            this.livechat = next.contents_memo.getType(LiveChat)?.[0];
        }
    }
    /**
     * Applies given filter to the watch next feed.
     *
     * @param {string} name
     * @returns {Promise.<VideoInfo>}
     */
    async selectFilter(name: string) {
        if (!this.filters.includes(name))
            throw new InnertubeError('Invalid filter', { available_filters: this.filters });
        const filter = this.related_chip_cloud?.chips?.get({ text: name });
        if (filter?.is_selected)
            return this;
        const response = await filter?.endpoint?.call(this.#actions);
        const data = response.on_response_received_endpoints.get({ target_id: 'watch-next-feed' });
        this.watch_next_feed = data.contents;
        return this;
    }
    /** @typedef {import('../classes/CompactVideo')} CompactVideo */
    /** @typedef {import('../classes/CompactMix')} CompactMix */
    /**
     * Retrieves watch next feed continuation.
     *
     * @returns {Promise.<CompactVideo[] | CompactMix[]>}
     */
    async getWatchNextContinuation() {
        const response = await this.#watch_next_continuation?.endpoint.call(this.#actions);
        const data = response.on_response_received_endpoints.get({ type: 'appendContinuationItemsAction' });
        this.watch_next_feed = data.contents;
        this.#watch_next_continuation = this.watch_next_feed?.pop()?.as(ContinuationItem);
        return this.watch_next_feed;
    }
    /**
     * API response.
     *
     * @typedef {{ success: boolean, status_code: number, data: object }} Response
     */
    /**
     * Likes the video.
     *
     * @returns {Promise.<Response>}
     */
    async like() {
        const button = this.primary_info?.menu?.top_level_buttons?.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_LIKE' })?.as(ToggleButton);
        if (!button)
            throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });
        if (button.is_toggled)
            throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });
        const response = await button.endpoint.call(this.#actions);
        return response;
    }
    /**
     * Dislikes the video.
     *
     * @returns {Promise.<Response>}
     */
    async dislike() {
        const button = this.primary_info?.menu?.top_level_buttons?.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_DISLIKE' })?.as(ToggleButton);
        if (!button)
            throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });
        if (button.is_toggled)
            throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });
        const response = await button.endpoint.call(this.#actions);
        return response;
    }
    /**
     * Removes like/dislike.
     *
     * @returns {Promise.<Response>}
     */
    async removeLike() {
        const button = this.primary_info?.menu?.top_level_buttons?.get({ is_toggled: true })?.as(ToggleButton);
        if (!button)
            throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
        const response = await button.toggled_endpoint.call(this.#actions);
        return response;
    }
    /**
     * Retrieves Live Chat if available.
     * @param {string} [mode] - livechat mode
     */
    getLiveChat(mode) {
        if (!this.livechat)
            throw new InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
        return new LiveChatWrap(this, mode);
    }
    get filters() {
        return this.related_chip_cloud?.chips?.map((chip) => chip.text.toString()) || [];
    }
    get actions() {
        return this.#actions;
    }
    get page() {
        return this.#page;
    }
    /**
     * Get songs used in the video.
     */
    // TODO: this seems to be broken with the new UI, further investigation needed
    get music_tracks() {
        /*
        const metadata = this.secondary_info?.metadata;
        if (!metadata)
            return [];
        const songs = [];
        let current_song: Record<string, Text[]> = {};
        let is_music_section = false;
        for (let i = 0; i < metadata.rows.length; i++) {
            const row = metadata.rows[i];
            if (row.is(MetadataRowHeader)) {
                if (row.content.toString().toLowerCase().startsWith('music')) {
                    is_music_section = true;
                    i++; // Skip the learn more link
                }
                continue;
            }
            if (!is_music_section)
                continue;
            if (row.is(MetadataRow)) 
                current_song[row.title.toString().toLowerCase().replace(/ /g, '_')] = row.contents;
            // TODO: this makes no sense, we continue above when 
            if (row.has_divider_line) {
                songs.push(current_song);
                current_song = {};
            }
            
        }
        if (is_music_section)
            songs.push(current_song);
        return songs;
        */
       return [];
    }
    chooseFormat(options: FormatOptions) {
        if (!this.streaming_data)
            throw new InnertubeError('Streaming data not available', { video_id: this.basic_info.id });
        const formats = [
            ...(this.streaming_data.formats || []),
            ...(this.streaming_data.adaptive_formats || [])
        ];
        const requires_audio = options.type ? options.type.includes('audio') : true;
        const requires_video = options.type ? options.type.includes('quality') : true;
        const quality = options.quality || '360p';
        let best_width = -1;
        const is_best = ['best', 'bestefficiency'].includes(quality);
        const use_most_efficient = quality !== 'best';
        let candidates = formats.filter((format) => {
            if (requires_audio && !format.has_audio)
                return false;
            if (requires_video && !format.has_video)
                return false;
            if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
                return false;
            if (!is_best && format.quality_label !== quality)
                return false;
            if (best_width < format.width)
                best_width = format.width;
            return true;
        });
        if (candidates.length === 0) {
            throw new InnertubeError('No matching formats found', {
                options
            });
        }
        if (is_best && requires_video)
            candidates = candidates.filter((format) => format.width === best_width);
        if (requires_audio && !requires_video) {
            const audio_only = candidates.filter((format) => !format.has_video);
            if (audio_only.length > 0) {
                candidates = audio_only;
            }
        }
        if (use_most_efficient) {
            // Sort by bitrate (lower is better)
            candidates.sort((a, b) => a.bitrate - b.bitrate);
        }
        else {
            // Sort by bitrate (higher is better)
            candidates.sort((a, b) => b.bitrate - a.bitrate);
        }
        return candidates[0];
    }

    /**
     *
     * @param options - download options.
     */
    async download(options: DownloadOptions = {}) {
        if (this.playability_status?.status === 'UNPLAYABLE')
            throw new InnertubeError('Video is unplayable', { video: this, error_type: 'UNPLAYABLE' });
        if (this.playability_status?.status === 'LOGIN_REQUIRED')
            throw new InnertubeError('Video is login required', { video: this, error_type: 'LOGIN_REQUIRED' });
        if (!this.streaming_data)
            throw new InnertubeError('Streaming data not available.', { video: this, error_type: 'NO_STREAMING_DATA' });
        const opts: DownloadOptions = {
            quality: '360p',
            type: 'video+audio',
            format: 'mp4',
            range: undefined,
            ...options
        };

        const format = this.chooseFormat(opts);
        const format_url = format.decipher(this.#player);

        // If we're not downloading the video in chunks, we just use fetch once.
        if (opts.type === 'video+audio' && !options.range) {
            const response = await fetch(`${format_url}&cpn=${this.#cpn}`, {
                method: 'GET',
                headers: Constants.STREAM_HEADERS,
                redirect: "follow"
            });

            // throw if the response is not 2xx
            if (!response.ok)
                throw new InnertubeError('The server responded with a non 2xx status code', { video: this, error_type: 'FETCH_FAILED', response });

            const body = response.body;

            if (!body) 
                throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });

            return body;
        }
        // we need to download in chunks using 'Range' header.
        else {
            const chunk_size = 1048576 * 10; // 10MB
            let chunk_start = (options.range ? options.range.start : 0);
            let chunk_end = (options.range ? options.range.end : chunk_size);
            let must_end = false;

            let cancel: AbortController;
            const readableStream = new ReadableStream<Uint8Array>({
                start() {},
                pull: async (controller) => {
                    if (must_end) {
                        controller.close();
                        return;
                    }
                    if ((chunk_end >= format.content_length) || options.range) {
                        must_end = true;
                    }
                    return new Promise(async (resolve, reject) => {
                        try {
                            cancel = new AbortController();
                            const response = await fetch(`${format_url}&cpn=${this.#cpn}`, {
                                method: 'GET',
                                headers: {
                                    ...Constants.STREAM_HEADERS,
                                    Range: `bytes=${chunk_start}-${chunk_end}`
                                },
                                signal: cancel.signal,
                            });
                            const body = response.body;
                            if (!body) {
                                throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });
                            }

                            async function* streamToIterable(stream: ReadableStream<Uint8Array>) {
                                const reader = stream.getReader();
                                try {
                                  while (true) {
                                    const {done, value} = await reader.read();
                                    if (done) {
                                      return;
                                      }
                                    yield value;
                                  }
                                }
                                finally {
                                  reader.releaseLock();
                                }
                            }

                            for await (const chunk of streamToIterable(body)) {
                                controller.enqueue(chunk);
                            }

                            chunk_start = chunk_end + 1;
                            chunk_end += chunk_size;
                            resolve();
                            return;
                        } catch (e: any) {
                            reject(e);
                        }
                    });
                },
                async cancel(reason) {
                    cancel.abort(reason);
                }
            }, {
                highWaterMark: 1, // TODO: better value?
                size(chunk) {
                    return chunk.byteLength;
                }
            });

            return readableStream;
        };
    }
}
export default VideoInfo;