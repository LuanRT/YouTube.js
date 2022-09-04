import { Parser } from 'youtubei.js';

import SectionList from 'youtubei.js/dist/src/parser/classes/SectionList';
import SingleColumnBrowseResults from 'youtubei.js/dist/src/parser/classes/SingleColumnBrowseResults';

import MusicVisualHeader from 'youtubei.js/dist/src/parser/classes/MusicVisualHeader';
import MusicImmersiveHeader from 'youtubei.js/dist/src/parser/classes/MusicImmersiveHeader';
import MusicCarouselShelf from 'youtubei.js/dist/src/parser/classes/MusicCarouselShelf';
import MusicDescriptionShelf from 'youtubei.js/dist/src/parser/classes/MusicDescriptionShelf';
import MusicShelf from 'youtubei.js/dist/src/parser/classes/MusicShelf';

import { readFileSync } from 'fs';

// Artist page response from YouTube Music
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header.item().as(MusicImmersiveHeader, MusicVisualHeader);

console.info('Header:', header);

// The parser encapsulates all arrays in a proxy object.
// A proxy intercepts access to the actual data, allowing
// the parser to add type safety and many utility methods
// that make working with InnerTube much easier.
const tab = page.contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: false });

if (!tab)
  throw new Error('Target tab not found');

if (!tab.content)
  throw new Error('Target tab appears to be empty');
  
const sections = tab.content?.as(SectionList).contents.array().as(MusicCarouselShelf, MusicDescriptionShelf, MusicShelf);

console.info('Sections:', sections);