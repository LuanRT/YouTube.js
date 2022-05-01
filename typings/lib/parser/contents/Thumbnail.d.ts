export = Thumbnail;
declare class Thumbnail {
    /**
       * Get thumbnails from response object
       * @param {*} response response object
       * @returns {Thumbnail[]} sorted array of thumbnails
       */
    static fromResponse({ thumbnails }: any): Thumbnail[];
    constructor({ url, width, height }: {
        url: any;
        width: any;
        height: any;
    });
    /**
       * @type {string}
       */
    url: string;
    /**
       * @type {number}
       */
    width: number;
    /**
       * @type {number}
       */
    height: number;
}
