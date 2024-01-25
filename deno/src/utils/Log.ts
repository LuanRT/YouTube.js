export default class Log {
  private static YTJS_TAG = 'YOUTUBEJS';

  public static Level = {
    NONE: 0,
    ERROR: 1,
    WARNING: 2,
    INFO: 3,
    DEBUG: 4
  };

  private static log_map_ = {
    [Log.Level.ERROR]: (...args: any[]) => console.error(...args),
    [Log.Level.WARNING]: (...args: any[]) => console.warn(...args),
    [Log.Level.INFO]: (...args: any[]) => console.info(...args),
    [Log.Level.DEBUG]: (...args: any[]) => console.debug(...args)
  };

  private static log_level_ = [ Log.Level.WARNING ];
  private static one_time_warnings_issued_ = new Set<string>();

  static warnOnce = (id: string, ...args: any[]) => {
    if (this.one_time_warnings_issued_.has(id))
      return;
    this.doLog(Log.Level.WARNING, id, args);
    this.one_time_warnings_issued_.add(id);
  };

  static warn = (tag?: string, ...args: any[]) => this.doLog(Log.Level.WARNING, tag, args);
  static error = (tag?: string, ...args: any[]) => this.doLog(Log.Level.ERROR, tag, args);
  static info = (tag?: string, ...args: any[]) => this.doLog(Log.Level.INFO, tag, args);
  static debug = (tag?: string, ...args: any[]) => this.doLog(Log.Level.DEBUG, tag, args);

  private static doLog(level: number, tag?: string, args?: any[]) {
    if (!this.log_map_[level] || !this.log_level_.includes(level))
      return;

    const tags = [ `[${this.YTJS_TAG}]` ];

    if (tag)
      tags.push(`[${tag}]`);

    this.log_map_[level](`${tags.join('')}:`, ...(args || []));
  }

  static setLevel(...args: number[]) {
    this.log_level_ = args;
  }
}