export interface DashOptions {
  /**
   * Include the storyboards in the DASH manifest when YouTube provides them.
   * Not all players support parsing and displaying storyboards.
   * If the player you are using doesn't support them you can leave this option disabled.
   * They don't get included by default, as this requires making some extra requests while generating the manifest, which can slow down the manifest generation.
   */
  include_thumbnails?: boolean
}
