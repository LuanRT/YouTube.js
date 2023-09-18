import { Innertube } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ generate_session_locally: true });

  const info = await yt.getInfo('hePb00CqvP0');

  const defaultTranscriptInfo = await info.getTranscript();

  console.log(`Got ${defaultTranscriptInfo.selectedLanguage} transcript with ${defaultTranscriptInfo.transcript.content.body.initial_segments.length} lines.`);

  console.log("Fetching Hebrew transcript...");

  const heTranscriptInfo = await defaultTranscriptInfo.selectLanguage('Hebrew');
  console.log(`Got ${heTranscriptInfo.selectedLanguage} transcript with ${heTranscriptInfo.transcript.content.body.initial_segments.length} lines.`);
})();