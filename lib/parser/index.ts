import { InnertubeError, observe, ParsingError, Observed } from "../utils/Utils";
import Format from "./classes/misc/Format.js";
import VideoDetails from "./classes/misc/VideoDetails.js";
import GetParserByName from "./map";
import package_json from '../../package.json';
import PlayerMicroformat from "./classes/PlayerMicroformat";
import PlaylistSidebar from "./classes/PlaylistSidebar";
import PlayerOverlay from "./classes/PlayerOverlay";

export const ParserTypeSymbol = Symbol('youtubei.parsertype');
export class YTNode {
    static [ParserTypeSymbol] = 'YTNode';
    type: string;
    constructor() {
        this.type = (this.constructor as YTNodeConstructor)[ParserTypeSymbol];
    }
    static get type() {
        return this[ParserTypeSymbol];
    }
}

export interface YTNodeConstructor {
    new(data: any): YTNode;
    readonly [ParserTypeSymbol]: string;
    get type(): string;
}

class AppendContinuationItemsAction extends YTNode {
    static [ParserTypeSymbol] = 'appendContinuationItemsAction';;

    contents: Observed<YTNode[]> | null;

    constructor(data: any) {
        super();
        this.contents = Parser.parse(data.continuationItems, true);
    }
}
class ReloadContinuationItemsCommand extends YTNode {
    static [ParserTypeSymbol] = 'reloadContinuationItemsCommand';
    target_id: string;
    contents: Observed<YTNode[]> | null;
    constructor(data: any) {
        super();
        this.target_id = data.targetId;
        this.contents = Parser.parse(data.continuationItems, true);
    }
}
class SectionListContinuation extends YTNode {
    static [ParserTypeSymbol] = 'sectionListContinuation';
    continuation: string;
    contents: Observed<YTNode[]> | null;
    constructor(data: any) {
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = data.continuations[0].nextContinuationData.continuation;
    }
}
class TimedContinuation extends YTNode {
    static [ParserTypeSymbol] = 'timedContinuationData';
    timeout_ms: number; // TODO: is this a number or a string?
    token: string;
    constructor(data: any) {
        super();
        this.timeout_ms = data.timeoutMs || data.timeUntilLastMessageMsec;
        this.token = data.continuation;
    }
}
class LiveChatContinuation extends YTNode {
    static [ParserTypeSymbol] = 'liveChatContinuation';;
    actions: Observed<YTNode[]>;
    action_panel: YTNode | null;
    item_list: YTNode | null;
    header: YTNode | null;
    participants_list: YTNode | null;
    popout_message: YTNode | null;
    emojis: any[] | null; // TODO: give this an actual type
    continuation: TimedContinuation;
    viewer_name: string;
    constructor(data: any) {
        super();
        this.actions = Parser.parse(data.actions?.map((action: any) => {
            delete action.clickTrackingParams;
            return action;
        }), true) || observe<YTNode[]>([]);
        this.action_panel = Parser.parseItem(data.actionPanel);
        this.item_list = Parser.parseItem(data.itemList);
        this.header = Parser.parseItem(data.header);
        this.participants_list = Parser.parseItem(data.participantsList);
        this.popout_message = Parser.parseItem(data.popoutMessage);
        this.emojis = data.emojis?.map((emoji: any) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: emoji.image,
            is_custom_emoji: emoji.isCustomEmoji
        })) || null;
        this.continuation = new TimedContinuation(data.continuations?.[0].timedContinuationData ||
            data.continuations?.[0].invalidationContinuationData ||
            data.continuations?.[0].liveChatReplayContinuationData);
        this.viewer_name = data.viewerName;
    }
}

export default class Parser {
    static #memo: Map<string, YTNode[]> | null = null;
    static #clearMemo() {
        Parser.#memo = null;
    }
    static #createMemo() {
        Parser.#memo = new Map();
    }
    static #addToMemo(classname: string, result: YTNode) {
        if (!Parser.#memo)
            return;
        if (!Parser.#memo.has(classname))
            return Parser.#memo.set(classname, [result]);
        Parser.#memo.get(classname)!.push(result);
    }
    /**
     * Parses InnerTube response.
     */
    static parseResponse(data: any) {
        // Memoize the response objects by classname
        this.#createMemo();
        const contents = Parser.parse(data.contents);
        const contents_memo = Parser.#memo;
        // End of memoization
        this.#clearMemo();
        this.#createMemo();
        const on_response_received_actions = data.onResponseReceivedActions ? Parser.parseRR(data.onResponseReceivedActions) : null;
        const on_response_received_actions_memo = Parser.#memo;
        this.#clearMemo();
        this.#createMemo();
        const on_response_received_endpoints = data.onResponseReceivedEndpoints ? Parser.parseRR(data.onResponseReceivedEndpoints) : null;
        const on_response_received_endpoints_memo = Parser.#memo;
        this.#clearMemo();
        this.#createMemo();
        const on_response_received_commands = data.onResponseReceivedCommands ? Parser.parseRR(data.onResponseReceivedCommands) : null;
        const on_response_received_commands_memo = Parser.#memo;
        this.#clearMemo();
        this.#createMemo();
        const actions = data.actions ? Parser.parseActions(data.actions) : null;
        const actions_memo = Parser.#memo;
        this.#clearMemo();
        return {
            actions,
            actions_memo,
            contents,
            contents_memo,
            on_response_received_actions,
            on_response_received_actions_memo,
            on_response_received_endpoints,
            on_response_received_endpoints_memo,
            on_response_received_commands,
            on_response_received_commands_memo,
            continuation: data.continuation ? Parser.parseC(data.continuation) : null,
            continuation_contents: data.continuationContents ? Parser.parseLC(data.continuationContents) : null,
            metadata: Parser.parse(data.metadata),
            header: Parser.parse(data.header),
            microformat: data.microformat && Parser.parseItem<PlayerMicroformat>(data.microformat, PlayerMicroformat.type),
            sidebar: Parser.parseItem<PlaylistSidebar>(data.sidebar, PlaylistSidebar.type),
            overlay: Parser.parseItem<PlayerOverlay>(data.overlay, PlayerOverlay.type),
            refinements: data.refinements || null,
            estimated_results: data.estimatedResults || null,
            player_overlays: Parser.parse(data.playerOverlays),
            playability_status: data.playabilityStatus && {
                status: parseFloat(data.playabilityStatus.status),
                error_screen: Parser.parse(data.playabilityStatus.errorScreen),
                embeddable: !!data.playabilityStatus.playableInEmbed || false,
                reason: ''+data.reason || ''
            },
            streaming_data: data.streamingData && {
                expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
                /** @type {import('./classes/Format')[]} */
                formats: Parser.parseFormats(data.streamingData.formats),
                /** @type {import('./classes/Format')[]} */
                adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
                dash_manifest_url: data.streamingData?.dashManifestUrl || null,
                dls_manifest_url: data.streamingData?.dashManifestUrl || null
            },
            captions: Parser.parse(data.captions),
            /** @type {import('./classes/VideoDetails')} */
            video_details: data.videoDetails && new VideoDetails(data.videoDetails),
            annotations: Parser.parse(data.annotations),
            storyboards: Parser.parse(data.storyboards),
            /** @type {import('./classes/Endscreen')} */
            endscreen: Parser.parse(data.endscreen),
            /** @type {import('./classes/CardCollection')} */
            cards: Parser.parse(data.cards)
        };
    }
    static parseC(data: any) {
        if (data.timedContinuationData)
            return new TimedContinuation(data.timedContinuationData);
    }
    static parseLC(data: any) {
        if (data.sectionListContinuation)
            return new SectionListContinuation(data.sectionListContinuation);
        if (data.liveChatContinuation)
            return new LiveChatContinuation(data.liveChatContinuation);
    }
    static parseRR(actions: any[]) {
        return observe(actions.map<YTNode | undefined>((action: any) => {
            if (action.reloadContinuationItemsCommand)
                return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
            if (action.appendContinuationItemsAction)
                return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
        }).filter((item) => item) as YTNode[]);
    }
    static parseActions(data: any): YTNode | Observed<YTNode[]> | null {
        if (Array.isArray(data)) {
            return Parser.parse(data.map((action) => {
                delete action.clickTrackingParams;
                return action;
            }));
        }
        return Parser.parseItem(data) || null;
    }
    static parseFormats(formats: any[]) {
        return observe(formats?.map((format) => new Format(format)) || []);
    }

    static parseItem<T extends YTNode = YTNode>(data: any, validateType?: string | string[]) {
        const keys = Object.keys(data);
        const classname = this.sanitizeClassName(keys[0]);
        if (!this.shouldIgnore(classname)) {
            try {
                const TargetClass = GetParserByName(classname);
                if (validateType) {
                    if (Array.isArray(validateType)) {
                        if (!validateType.includes(TargetClass.type))
                            throw new ParsingError('Type mismatch');
                    } else if (TargetClass.type !== validateType)
                        throw new ParsingError('Type mismatch');
                }
                const result = new TargetClass(data[keys[0]]);
                this.#addToMemo(classname, result);
                return result as T;
            }
            catch (err) {
                this.formatError({ classname, classdata: data[keys[0]], err });
                return null;
            }
        }
        return null;
    }

    static parse<T extends YTNode = YTNode>(data: any, requireArray: true, validateType?: string | string[]) : Observed<T[]> | null;
    static parse<T extends YTNode = YTNode>(data: any, requireArray?: false | undefined, validateType?: string | string[]) : T | Observed<T[]> | null;
    /**
     * Parses the `contents` property of the response.
     */
    static parse<T extends YTNode = YTNode>(data: any, requireArray?: boolean, validateType?: string | string[]) {
        if (!data)
            return null;
        if (Array.isArray(data)) {
            const results: T[] = [];
            for (const item of data) {
                const result = this.parseItem<T>(item, validateType);
                if (result) {
                    results.push(result);
                }
            }
            return observe<T[]>(results as T[]);
        } else if (requireArray) {
            throw new ParsingError('Expected array but got a single item');
        }
        return this.parseItem<T>(data, validateType);
    }

    static formatError({ classname, classdata, err }: { classname: string, classdata: any, err: any }) {
        if (err.code == 'MODULE_NOT_FOUND') {
            return console.warn(new InnertubeError(`${classname} not found!\n` +
                `This is a bug, please report it at ${package_json.bugs.url}`, classdata));
        }
        console.warn(new InnertubeError(`Something went wrong at ${classname}!\n` +
            `This is a bug, please report it at ${package_json.bugs.url}`, { stack: err.stack }));
    }
    static sanitizeClassName(input: string) {
        return (input.charAt(0).toUpperCase() + input.slice(1))
            .replace(/Renderer|Model/g, '')
            .replace(/Radio/g, 'Mix').trim();
    }
    static ignore_list = new Set<string>([
        'DisplayAd',
        'SearchPyv',
        'MealbarPromo',
        'BackgroundPromo',
        'PromotedSparklesWeb',
        'RunAttestationCommand',
        'StatementBanner'
    ])
    static shouldIgnore(classname: string) {
        return this.ignore_list.has(classname);
    }
}
