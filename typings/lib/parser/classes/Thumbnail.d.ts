export = Thumbnail;
declare class Thumbnail {
    /**
     * Get thumbnails from response object
     *
     * @param {object} data - response object
     * @returns {Thumbnail[]} sorted array of thumbnails
     */
    static fromResponse(data: object): Thumbnail[];
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
