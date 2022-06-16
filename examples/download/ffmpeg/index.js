/**
 * Mux audio and video into a single stream.
 * 
 * This example requires ffmpeg-static package or some other ffmpeg binary installed on your system.
 */

// import Innertube from 'youtubei.js';
const Innertube = require('../../../lib/Innertube');
const ffmpeg = require('ffmpeg-static');

const fs = require('fs');
const cp = require('child_process');
const readline = require('readline');


(async () => {
    // instantiate the library
    const yt = await new Innertube();

    // get video info
    const info = await yt.getInfo('bUHZ2k9DYHY');

    // get the best video stream
    const video = info.download({
        quality: 'bestefficiency',
        format: 'any',
        type: 'video',
    });

    // get the best audio stream
    const audio = info.download({
        quality: 'bestefficiency',
        format: 'any',
        type: 'audio',
    });

    // create a ffmpeg instance
    const ffmpeg_process = cp.spawn(ffmpeg, [
        // remove ffmpeg's banner spam
        '-hide_banner',
        // inputs
        '-i', 'pipe:3',
        '-i', 'pipe:4',
        // map the streams
        '-map', '0:a',
        '-map', '1:v',
        // keep the original encodings
        '-c', 'copy',
        // output format
        '-f', 'matroska',
        // force write to file 
        '-y', 'stream.mkv'
    ], {
        windowsHide: true,
        stdio: [
            // inherit stdio, stdin and stdout
            'inherit', 'inherit', 'inherit',
            // pipe:3, pipe:4
            'pipe', 'pipe'
        ]
    });

    // pipe the streams to ffmpeg
    audio.pipe(ffmpeg_process.stdio[3]);
    video.pipe(ffmpeg_process.stdio[4]);
})();