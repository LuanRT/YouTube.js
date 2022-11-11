import { Parser, YTNodes } from 'youtubei.js';
import { readFileSync } from 'fs';

// Artist page response from YouTube Music
const data = readFileSync('./artist.json').toString();
const page = Parser.parseResponse(JSON.parse(data));

const header = page.header?.item().as(YTNodes.MusicImmersiveHeader, YTNodes.MusicVisualHeader);

console.info('Header:', header);

// The parser encapsulates all arrays in a proxy object.
// A proxy intercepts access to the actual data, allowing
// the parser to add type safety and many utility methods
// that make working with InnerTube much easier.
const tab = page.contents.item().as(YTNodes.SingleColumnBrowseResults).tabs.firstOfType(YTNodes.Tab);

if (!tab)
  throw new Error('Target tab not found');

if (!tab.content)
  throw new Error('Target tab appears to be empty');

const sections = tab.content?.as(YTNodes.SectionList).contents.array().as(YTNodes.MusicCarouselShelf, YTNodes.MusicDescriptionShelf, YTNodes.MusicShelf);

console.info('Sections:', sections);