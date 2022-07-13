import { InnertubeError, ObservedArray } from "../../utils/Utils";
import Parser, { YTNode } from "../index.js";
import LiveChat from "./LiveChat.js";
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
import MetadataRowHeader from "../classes/MetadataRowHeader";
import MetadataRow from "../classes/MetadataRow";
import Text from "../classes/misc/Text";
import ContinuationItem from "../classes/ContinuationItem";

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
    watch_next_feed: ObservedArray<YTNode> | null | undefined;
    player_overlays;
    comments_entry_point_header;
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
        const two_col = Parser.cast_response(next.contents, TwoColumnWatchNextResults, false);
        const results = two_col?.results;
        const secondary_results = two_col?.secondary_results;
        if (results && secondary_results) {
            this.primary_info = Parser.cast_response(results.get({ type: 'VideoPrimaryInfo' }), VideoPrimaryInfo, false);
            this.secondary_info = Parser.cast_response(results.get({ type: 'VideoSecondaryInfo' }), VideoSecondaryInfo, false);
            this.merchandise = Parser.cast_response(results?.get({ type: 'MerchandiseShelf' }), MerchandiseShelf, false);
            this.related_chip_cloud = Parser.cast_response(
                Parser.cast_response(
                    secondary_results?.get({ type: 'RelatedChipCloud' }), 
                    RelatedChipCloud, 
                    false)?.content, 
                ChipCloud, 
                false
            );
            this.watch_next_feed = Parser.cast_response(secondary_results?.get({ type: 'ItemSection' }), ItemSection, false)?.contents;
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed)) 
                this.#watch_next_continuation = Parser.cast_response(this.watch_next_feed?.pop(), ContinuationItem, false);
            this.player_overlays = Parser.cast_response(next.player_overlays, PlayerOverlay);
            this.basic_info.like_count = Parser.cast_response(this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'LIKE' }), ToggleButton, false)?.like_count;
            this.basic_info.is_liked = Parser.cast_response(this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'LIKE' }), ToggleButton, false)?.is_toggled;
            this.basic_info.is_disliked = Parser.cast_response(this.primary_info?.menu?.top_level_buttons?.get({ icon_type: 'DISLIKE' }), ToggleButton, false)?.is_toggled;
            const comments_entry_point = Parser.cast_response(results.get({ target_id: 'comments-entry-point' }), ItemSection, false);
            this.comments_entry_point_header = Parser.cast_response(comments_entry_point?.contents?.get({ type: 'CommentsEntryPointHeader' }), CommentsEntryPointHeader, false);
            /**
             * @type {import('../classes/LiveChat')}
             */
            // TODO: this makes no sense, LiveChat is not in the parsers list
            // this.livechat = next.contents_memo.getType(LiveChat)?.[0] || null;
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
        this.#watch_next_continuation = Parser.cast_response(this.watch_next_feed?.pop(), ContinuationItem, false);
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
        const button = this.primary_info.menu.top_level_buttons.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_LIKE' });
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
        const button = this.primary_info.menu.top_level_buttons.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_DISLIKE' });
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
        const button = this.primary_info.menu.top_level_buttons.get({ is_toggled: true });
        if (!button)
            throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
        const response = await button.toggled_endpoint.call(this.#actions);
        return response;
    }
    /**
     * Retrieves Live Chat if available.
     * @param {string} [mode] - livechat mode
     * @returns {Promise.<LiveChat>}
     */
    async getLiveChat(mode) {
        if (!this.livechat)
            throw new InnertubeError('Live Chat is not available', { video_id: this.id });
        return new LiveChat(this, mode);
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
    chooseFormat(options) {
        const formats = [
            ...(this.streaming_data.formats || []),
            ...(this.streaming_data.adaptive_formats || [])
        ];
        const requires_audio = options.type.includes('audio');
        const requires_video = options.type.includes('video');
        let best_width = -1;
        const is_best = ['best', 'bestefficiency'].includes(options.quality);
        const use_most_efficient = options.quality !== 'best';
        let candidates = formats.filter((format) => {
            if (requires_audio && !format.has_audio)
                return false;
            if (requires_video && !format.has_video)
                return false;
            if (options.format !== 'any' && !format.mime_type.includes(options.format))
                return false;
            if (!is_best && format.quality_label !== options.quality)
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
     * @param {object} options - download options.
     * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
     * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
     * @param {string} [options.format] - file format, use 'any' to download any format.
     * @param {object} [options.range] - download range, indicates which bytes should be downloaded.
     * @param {number} options.range.start - the beginning of the range.
     * @param {number} options.range.end - the end of the range.
     * @param {import('stream').PassThrough} [_stream]
     * @returns {import('stream').PassThrough}
     */
    async download(options = {}, _stream) {
        if (this.playability_status === 'UNPLAYABLE')
            throw new InnertubeError('Video is unplayable', { video: this, error_type: 'UNPLAYABLE' });
        if (this.playability_status === 'LOGIN_REQUIRED')
            throw new InnertubeError('Video is login required', { video: this, error_type: 'LOGIN_REQUIRED' });
        if (!this.streaming_data)
            throw new InnertubeError('Streaming data not available.', { video: this, error_type: 'NO_STREAMING_DATA' });
        const opts = {
            quality: '360p',
            type: 'videoandaudio',
            format: 'mp4',
            range: undefined,
            ...options
        };

        const format = this.chooseFormat(opts);
        const format_url = format.decipher(this.#player);

        // If we're not downloading the video in chunks, we just use fetch once.
        if (opts.type === 'videoandaudio' && !options.range) {
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
