const fs = require('fs');
function fmtTime(s) {
  const h = Math.floor(s/3600);
  const m = Math.floor((s%3600)/60);
  const sec = Math.floor(s%60);
  if (h > 0) return h+':'+String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
  return m+':'+String(sec).padStart(2,'0');
}
function processTranscript(inputFile, videoId, outputFile) {
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const segs = data.data.segments;
  console.log(videoId, 'segments count:', segs.length);
  let transcript = '';
  let paraSegs = [];
  for (let i = 0; i < segs.length; i++) {
    paraSegs.push(segs[i]);
    if (paraSegs.length >= 5 || i === segs.length - 1) {
      const startSec = Math.floor(paraSegs[0].start);
      const ts = fmtTime(startSec);
      const text = paraSegs.map(s => s.text).join(' ');
      transcript += '[' + ts + '](https://www.youtube.com/watch?v=' + videoId + '&t=' + startSec + 's) ' + text + '\n\n';
      paraSegs = [];
    }
  }
  fs.writeFileSync(outputFile, transcript);
  console.log('Wrote', outputFile, 'length:', transcript.length);
}
const baseDir = '/Users/wschenk/.claude/projects/-Users-wschenk-The-Focus-AI-youtube-feed/dfcbadee-221b-420d-b967-6542cb397b49/tool-results';
const outDir = '/Users/wschenk/The-Focus-AI/youtube-feed';
processTranscript(baseDir + '/toolu_01GvC3MmRJYcZxgdh6tMK2Lr.txt', 'ZPUtA3W-7_I', outDir + '/modi_transcript.md');
processTranscript(baseDir + '/toolu_01L5xaBeNQN1Hc3SvJyJpCZ7.txt', '_1f-o0nqpEI', outDir + '/deepseek_transcript.md');
processTranscript(baseDir + '/toolu_01QwnpwHepB7JnMhZKncAFBQ.txt', 'OHWnPOKh_S0', outDir + '/andreessen_transcript.md');
