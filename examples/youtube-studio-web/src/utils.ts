import { BotGuardClient } from "bgutils-js/botguard";
import { USER_AGENT } from "bgutils-js/utils";
import { JSDOM, VirtualConsole } from "jsdom";
import Innertube, { type Types } from 'youtubei.js';
import path from "path";
import fs from 'fs/promises';
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

export async function get_channel_id(yt: Innertube, index?: number): Promise<string> {
  const account_info = await yt.account.getInfo(true);
  const account = account_info[index ?? 0];
  if (account === undefined) throw new Error("No accounts found");
  const resolve_url = `https://www.youtube.com/${account.channel_handle.text}`;
  const resolved = await yt.resolveURL(resolve_url);
  const channel_id = resolved.payload.browseId as string;
  return channel_id;
}

export async function get_file_named_buffer_reader(file_path: string): Promise<Types.FileNamedBufferReader> {
  const stats = await fs.stat(file_path);
  return {
    file_name: path.basename(file_path),
    source: {
      total_bytes: stats.size,
      read_chunk: async (position: number, length: number) => {
        let handle: fs.FileHandle | undefined = undefined;
        try {
          handle = await fs.open(file_path, "r");
          const buffer = Buffer.allocUnsafe(length);
          const { bytesRead } = await handle.read(buffer, 0, length, position);
          return new Uint8Array(buffer.buffer, buffer.byteOffset, bytesRead);
        } finally {
          await handle?.close();
        }
      }
    }
  };
}

export async function get_file_named_buffer_base64(file_path: string): Promise<Types.FileNamedBufferBase64> {
  return {
    file_name: path.basename(file_path),
    source: {
      base64: (await fs.readFile(file_path, { encoding: "base64" })).toString()
    }
  };
}

export async function youtube_cookies(): Promise<string|undefined> {
  const HOST_NAME = '.youtube.com';
  const cookies_map = await get_cookies([HOST_NAME]);
  const cookies = cookies_map?.[HOST_NAME].toString() ?? undefined;
  
  if(cookies) console.log(`Successfully found ${cookies_map?.[HOST_NAME].getCookies().length} cookies`);
  return cookies;
}