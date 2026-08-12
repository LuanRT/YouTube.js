import { BotGuardClient } from "bgutils-js/botguard";
import { USER_AGENT } from "bgutils-js/utils";
import { JSDOM, VirtualConsole } from "jsdom";
import Innertube, { UniversalCache, type Types } from 'youtubei.js';

const botguard_solver: Types.BotGuardSolver<string> = {
  solve: async(botguard_challenge, binding) => {
    const virtual_console = new VirtualConsole();
    const dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><title></title></head><body></body></html>', { url: "https://www.youtube.com", referrer: "https://www.youtube.com/", userAgent: USER_AGENT, resources: "usable", runScripts: "dangerously", virtualConsole: virtual_console });

    Object.assign(globalThis, { window: dom.window, document: dom.window.document, location: dom.window.location, origin: dom.window.origin });

    if (!("navigator" in globalThis)) {
      Object.defineProperty(globalThis, "navigator", { value: dom.window.navigator });
    }

    Object.defineProperty(dom.window.HTMLCanvasElement.prototype, "getContext", { value: () => null, writable: true });

    let interpreter_url = botguard_challenge.interpreter_url ?? "";

    if (interpreter_url.startsWith("//")) interpreter_url = `https:${interpreter_url}`;

    const bg_script_response = await fetch(interpreter_url);
    const interpreter_javascript = await bg_script_response.text();

    new Function(interpreter_javascript)();

    const botguard = await BotGuardClient.create({ program: botguard_challenge.program, globalName: botguard_challenge.global_name, globalObject: globalThis });

    const botguard_response = await botguard.snapshot({ contentBinding: { atr_challenge: binding } });
    return botguard_response;
  }
};

async function get_channel_id(yt: Innertube, index?: number): Promise<string> {
  const account_info = await yt.account.getInfo(true);
  const account = account_info[index ?? 0];
  if (account === undefined) throw new Error("No accounts found");
  const resolve_url = `https://www.youtube.com/${account.channel_handle.text}`;
  const resolved = await yt.resolveURL(resolve_url);
  const channel_id = resolved.payload.browseId as string;
  return channel_id;
}

const COOKIES = ""; // ?? Place your YouTube cookies here

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false), cookie: COOKIES });

  // ?? Place your channel_ID here or use `await get_channel_id(yt)`
  const CHANNEL_ID = "";

  const yt_studio_web = yt.studioWeb;
  yt_studio_web.setBotGuardSolver(botguard_solver);
  const session_token = await yt_studio_web.getSessionToken(CHANNEL_ID);
  console.log(session_token);
})();