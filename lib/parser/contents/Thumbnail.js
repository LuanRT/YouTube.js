class Thumbnail {
    constructor ({ url, width, height }) {
        this.url = url;
        this.width = width;
        this.height = height;
    }

    static fromResponse({ thumbnails }) {
        if (!thumbnails) {
            return;
        }
        return thumbnails.map(x => new Thumbnail(x)).sort((a, b) => b.width - a.width);
    }
}

module.exports = Thumbnail;