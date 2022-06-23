'use strict';

const { InnertubeError, observe } = require('../../utils/Utils');
const Format = require('./classes/Format');
const VideoDetails = require('./classes/VideoDetails');

class AppendContinuationItemsAction {
  type = 'appendContinuationItemsAction';
    
  constructor (data) {
    this.contents = Parser.parse(data.continuationItems);
  }
}

class ReloadContinuationItemsCommand {
  type = 'reloadContinuationItemsCommand';
    
  constructor (data) {
    this.target_id = data.targetId;
    this.contents = Parser.parse(data.continuationItems)
  }
}

class SectionListContinuation {
  type = 'sectionListContinuation';
  
  constructor(data) {
    this.contents = Parser.parse(data.contents);
    this.continuation = data.continuations[0].nextContinuationData.continuation;
  }
}

class LiveChatContinuation {
  type = 'liveChatContinuation';
  
  constructor(data) {
    this.actions = Parser.parse(data.actions.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }), 'actions');
    
    this.action_panel = Parser.parse(data.actionPanel);
    this.item_list = Parser.parse(data.itemList);
    this.header = Parser.parse(data.header);
    this.participants_list = Parser.parse(data.participantsList);
    this.popout_message = Parser.parse(data.popoutMessage);
    
    this.emojis = data.emojis.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: emoji.image,
      is_custom_emoji: emoji.isCustomEmoji
    }));
    
    this.viewer_name = data.viewerName;
  }
}

class Parser {
  static #memo = new Map();
  static #clearMemo() {
    Parser.#memo = null;
  }
  static #createMemo() {
    Parser.#memo = new Map();
  }
  static #addToMemo(classname, result) {
    if (!Parser.#memo) return;
    if (!Parser.#memo.has(classname)) return Parser.#memo.set(classname, [result]);
    Parser.#memo.get(classname).push(result);
  }

  static parseResponse(data) {
    // Memoize the response objects by classname
    this.#createMemo();
    const contents = Parser.parse(data.contents);
    const contents_memo = Parser.#memo;
    // End of memoization
    this.#clearMemo();

    this.#createMemo();
    const on_response_received_actions = data.onResponseReceivedActions && Parser.parseRR(data.onResponseReceivedActions) || null;
    const on_response_received_actions_memo = Parser.#memo;
    this.#clearMemo();

    this.#createMemo();
    const on_response_received_endpoints = data.onResponseReceivedEndpoints && Parser.parseRR(data.onResponseReceivedEndpoints) || null;
    const on_response_received_endpoints_memo = Parser.#memo;
    this.#clearMemo();
    
    this.#createMemo();
    const on_response_received_commands = data.onResponseReceivedCommands && Parser.parseRR(data.onResponseReceivedCommands) || null;
    const on_response_received_commands_memo = Parser.#memo;
    this.#clearMemo();
    
    return {
      contents,
      contents_memo,
      on_response_received_actions,
      on_response_received_actions_memo,
      on_response_received_endpoints,
      on_response_received_endpoints_memo,
      on_response_received_commands,
      on_response_received_commands_memo,
      /** @type {*} */
      continuation_contents: data.continuationContents && Parser.parseLC(data.continuationContents) || null,
      metadata: Parser.parse(data.metadata),
      header: Parser.parse(data.header),
      /** @type {import('./classes/PlayerMicroformat')} **/
      microformat: data.microformat && Parser.parse(data.microformat),
      sidebar: Parser.parse(data.sidebar),
      overlay: Parser.parse(data.overlay),
      refinements: data.refinements || null,
      estimated_results: data.estimatedResults || null,
      player_overlays: Parser.parse(data.playerOverlays),
      playability_status: data.playabilityStatus && {
        /** @type {number} */
        status: data.playabilityStatus.status,
        error_screen: Parser.parse(data.playabilityStatus.errorScreen),
        /** @type {boolean} */
        embeddable: data.playabilityStatus.playableInEmbed || null,
        /** @type {string} */
        reason: data.reason || ''
      },
      streaming_data: data.streamingData && {
        expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
        /** @type {import('./classes/Format')[]} */
        formats: Parser.parseFormats(data.streamingData.formats),
        /** @type {import('./classes/Format')[]} */
        adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
        dash_manifest_url: data.streamingData?.dashManifestUrl || null,
        dls_manifest_url: data.streamingData?.dashManifestUrl || null,
      },
      captions: Parser.parse(data.captions),
      video_details: data.videoDetails && new VideoDetails(data.videoDetails),
      annotations: Parser.parse(data.annotations),
      storyboards: Parser.parse(data.storyboards),
      /** @type {import('./classes/Endscreen')} */
      endscreen: Parser.parse(data.endscreen),
      /** @type {import('./classes/CardCollection')} */
      cards: Parser.parse(data.cards),
    }
  }
  
  static parseLC(data) {
    if (data.sectionListContinuation)
      return new SectionListContinuation(data.sectionListContinuation);
    if (data.liveChatContinuation) 
      return new LiveChatContinuation(data.liveChatContinuation);
  }
  
  static parseRR(actions) {
    return observe(actions.map((action) => {
      if (action.reloadContinuationItemsCommand)
        return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
      if (action.appendContinuationItemsAction)
        return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
    }).filter((item) => item)); 
  }
  
  static parseFormats(formats) {
    return observe(formats?.map((format) => new Format(format)) || []);
  }
  
  static parse(data, module) {
    if (!data)
      return null;
    
    if (Array.isArray(data)) {
      let results = [];

      for (let item of data) {
        const keys = Object.keys(item);
        const classname = this.sanitizeClassName(keys[0]);
        
        if (!this.shouldIgnore(classname)) {
          try {
            const path = module && module + '/' || '';
            const TargetClass = require('./classes/' + path + classname);
            const result = new TargetClass(item[keys[0]]);
            results.push(result);
            this.#addToMemo(classname, result);
          } catch (err) {
            this.formatError({ classname, classdata: item[keys[0]], err });
          }
        }
      }
      
      return observe(results);
    } else {
      const keys = Object.keys(data);
      const classname = this.sanitizeClassName(keys[0]);
      
      if (!this.shouldIgnore(classname)) {
        try {
          const path = module && module + '/' || '';
          const TargetClass = require('./classes/' + path + classname);
          const result = new TargetClass(data[keys[0]]);
          this.#addToMemo(classname, result);
          return result;
        } catch (err) {
          this.formatError({ classname, classdata: data[keys[0]], err });
          return null;
        }
      } 
    }
  }
  
  static formatError({ classname, classdata, err }) {
    if (err.code == 'MODULE_NOT_FOUND') 
      console.warn(
        new InnertubeError(classname + ' not found!\n' +
          'This is a bug, please report it at ' + require('../../../package.json').bugs.url,
          classdata)
        );
    else
      console.warn(
        new InnertubeError('Something went wrong at ' + classname + '!\n' +
          'This is a bug, please report it at ' + require('../../../package.json').bugs.url,
          { stack: err.stack })
        );
  }
  
  static sanitizeClassName(input) {
    return (input.charAt(0).toUpperCase() + input.slice(1))
        .replace(/Renderer|Model/g, '')
        .replace(/Radio/g, 'Mix').trim();
  }
  
  static shouldIgnore(classname) {
    return [
      'DisplayAd',
      'MealbarPromo',
      'PromotedSparklesWeb'
    ].includes(classname);
  }
}

module.exports = Parser;