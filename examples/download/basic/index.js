// import Innertube from 'youtubei.js';
const { createWriteStream } = require('fs');
const Innertube = require('../../../lib/Innertube');

(async () => {
    // instantiate the library
    const yt = await new Innertube();

    // download the video
    // the default options are to download with 360p quality
    // with both audio and video in an mp4 container
    yt.download('bUHZ2k9DYHY')
        .pipe(createWriteStream('./stream.mp4'))
        .on('progress', progress => {
            console.log(`Downloaded ${progress.percent}%`);
        })
        .on('finish', () => {
            console.log('Download finished');
        });
})();
