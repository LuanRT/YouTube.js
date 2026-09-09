import { readFile } from 'node:fs/promises';
import { BotGuardClient } from "bgutils-js/botguard";
import { USER_AGENT } from "bgutils-js/utils";
import { imageSize } from 'image-size';
import { JSDOM, VirtualConsole } from "jsdom";
import Innertube, { type Types } from 'youtubei.js';
import { get_cookies } from 'cookie-eater';

export const botguard_solver: Types.BotGuardSolver<string> = {
  solve: async(botguard_challenge, binding) => {
    const virtual_console = new VirtualConsole();
    const dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><title></title></head><body></body></html>', { url: "https://www.youtube.com", referrer: "https://www.youtube.com/", userAgent: USER_AGENT, resources: "usable", runScripts: "dangerously", virtualConsole: virtual_console });

    Object.assign(globalThis, { window: dom.window, document: dom.window.document, location: dom.window.location, origin: dom.window.origin });

    if (!("navigator" in globalThis)) {
      Object.defineProperty(globalThis, "navigator", { value: dom.window.navigator });
    }

    Object.defineProperty(dom.window.HTMLCanvasElement.prototype, "getContext", { value: () => null, writable: true });

    let interpreter_url = botguard_challenge.interpreter_url.private_do_not_access_or_else_safe_script_wrapped_value ?? botguard_challenge.interpreter_url.private_do_not_access_or_else_trusted_resource_url_wrapped_value ?? "";

    if (interpreter_url.startsWith("//")) interpreter_url = `https:${interpreter_url}`;

    const bg_script_response = await fetch(interpreter_url);
    const interpreter_javascript = await bg_script_response.text();

    new Function(interpreter_javascript)();

    const botguard = await BotGuardClient.create({ program: botguard_challenge.program, globalName: botguard_challenge.global_name, globalObject: globalThis });

    const botguard_response = await botguard.snapshot({ contentBinding: { atr_challenge: binding } });
    return botguard_response;
  }
};

export async function get_channel_id(yt: Innertube, index?: number): Promise<string> {
  const account_info = await yt.account.getInfo(true);
  const account = account_info[index ?? 0];
  if (account === undefined) throw new Error("No accounts found");
  const resolve_url = `https://www.youtube.com/${account.channel_handle.text}`;
  const resolved = await yt.resolveURL(resolve_url);
  const channel_id = resolved.payload.browseId as string;
  return channel_id;
}

export async function image_path_to_post_image(image_path: string): Promise<Types.PostImage> {
  const body = await readFile(image_path);
  const { width, height, type } = imageSize(body);
  return {
    body,
    size: body.length,
    width,
    height,
    base64: `data:image/${type ?? 'png'};base64,${body.toString('base64')}`
  };
}

export async function youtube_cookies(): Promise<string|undefined> {
  const HOST_NAME = '.youtube.com';
  const cookies_map = await get_cookies([HOST_NAME]);
  const cookies = cookies_map?.[HOST_NAME].toString() ?? undefined;
  
  if(cookies) console.log(`Successfully found ${cookies_map?.[HOST_NAME].getCookies().length} cookies`);
  return cookies;
}