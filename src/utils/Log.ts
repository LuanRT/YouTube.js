const YTJS_TAG = 'YOUTUBEJS';

export const Level = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4
};

const log_map = {
  [Level.ERROR]: (...args: any[]) => console.error(...args),
  [Level.WARNING]: (...args: any[]) => console.warn(...args),
  [Level.INFO]: (...args: any[]) => console.info(...args),
  [Level.DEBUG]: (...args: any[]) => console.debug(...args)
};

let log_level = [ Level.WARNING ];
const one_time_warnings_issued = new Set<string>();

function doLog(level: number, tag?: string, args?: any[]) {
  if (!log_map[level] || !log_level.includes(level))
    return;

  const tags = [ `[${YTJS_TAG}]` ];

  if (tag)
    tags.push(`[${tag}]`);

  log_map[level](`${tags.join('')}:`, ...(args || []));
}

export const warnOnce = (id: string, ...args: any[]) => {
  if (one_time_warnings_issued.has(id))
    return;
  
  doLog(Level.WARNING, id, args);
  one_time_warnings_issued.add(id);
};

export const warn = (tag?: string, ...args: any[]) => doLog(Level.WARNING, tag, args);
export const error = (tag?: string, ...args: any[]) => doLog(Level.ERROR, tag, args);
export const info = (tag?: string, ...args: any[]) => doLog(Level.INFO, tag, args);
export const debug = (tag?: string, ...args: any[]) => doLog(Level.DEBUG, tag, args);

export function setLevel(...args: number[]) {
  log_level = args;
}
