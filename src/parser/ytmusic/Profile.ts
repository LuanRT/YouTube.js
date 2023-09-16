import Parser from '../index.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
//import { InnertubeError } from '../../utils/Utils.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';

class Profile {
    #page: IBrowseResponse;
    #actions: Actions;

    constructor(response: ApiResponse, actions: Actions) {
        this.#page = Parser.parseResponse<IBrowseResponse>(response.data);
        this.#actions = actions;
    
        //this.header = this.page.header?.item().as(MusicImmersiveHeader, MusicVisualHeader, MusicHeader);
    
        //const music_shelf = this.#page.contents_memo?.getType(MusicShelf) || [];
        //const music_carousel_shelf = this.#page.contents_memo?.getType(MusicCarouselShelf) || [];
    
        //this.sections = [ ...music_shelf, ...music_carousel_shelf ];
      }

    get page(): IBrowseResponse {
        return this.#page;
    }      
}

export default Profile;