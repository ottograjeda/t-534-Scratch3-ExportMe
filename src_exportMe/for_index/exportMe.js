const scratchURLs = [ 
  ''
];
function getDataURL(url) {
  console.log('@ getDataURL')
  return fetch(url).then(r => r.blob()).then(blob => new Promise(res => {
    const reader = new FileReader();
    reader.onload = e => res(e.target.result);
    reader.readAsDataURL(blob);
  }));
}
function downloadAsHTML(id, {title = 'Project', userId = 'ExportedFile', noVM = false, minify = false, log = console.log}) {
  document.getElementById('feedbackArea').innerHTML = ""; // clear div
  document.getElementById('feedbackArea').innerHTML += "Tool working ...<br>";
  document.body.style.cursor = 'wait'; // change cursor to spin per https://stackoverflow.com/questions/9681080/changing-cursor-to-waiting-in-javascript-jquery
  console.log('@ downloadAsHTML')

  return runBenchmark(id).then(({assets, projectJSON}) => {
    document.getElementById('feedbackArea').innerHTML += "Getting assets ...<br>";
    //log('Getting assets...');
    return Promise.all([
      Promise.all((noVM ? ['blank.html'] : scratchURLs).map(url => fetch(url).then(r => r.text()))).then(scripts => {
        console.log('Scratch scripts obtained')
        document.getElementById('feedbackArea').innerHTML += "Scratch scripts obtained ...<br>";
        document.getElementById('feedbackArea').innerHTML += "Creating file ...<br>";
        //log('Scratch scripts obtained...');
        return scripts.join('\n');
      }),
      fetch(noVM ? './template_a.html' : './template_b.html')
    // o.note: cannot add code here
    //document.getElementById('feedbackArea').innerHTML += "Creating file ...<br>";
      .then(r => r.text()),
      getDataURL(projectJSON)
        .then(data => projectJSON = data),
        ...Object.keys(assets).map(assetId => getDataURL(assets[assetId]).then(data => assets[assetId] = data))
      ])
    // o.note: cannot add code here
    //document.getElementById('feedbackArea').innerHTML += "Creating file ...<br>";
    .then(async ([scripts, html]) => {
      scripts = `const PROJECT_JSON = "${projectJSON}";\nconst ASSETS = ${JSON.stringify(assets)};\nconst DESIRED_USERNAME = ${JSON.stringify(userId)};\n` + scripts.replace('</scr' + 'ipt>', ''); // dumb </ script> in a comment
      document.getElementById('feedbackArea').innerHTML += "Export Done ! Click 'Save File'<br>";
      document.getElementById('feedbackArea').innerHTML += "- - - - - - - - - - - - - - - - - - - - - - - - <br>";
      document.getElementById('feedbackArea').innerHTML += "Tool done<br>";
      //log('- - - - - - - - - - - -');
      //log('Done!');
      console.log('Done!')
      document.body.style.cursor = 'default'; // change cursor to normal
      return html.replace('{TITLE}', () => title).replace('{SCRIPTS}', () => scripts);
      // using function because $& will get set to '{SCRIPTS}' >:(
    }); // end (main) promise
  }); // end benchmark  
}

const loadBtn = document.getElementById('load-all');
const buttons = [loadBtn];
const title = document.getElementById('title');
const id = document.getElementById('id');
const error = document.getElementById('error');

loadBtn.addEventListener('click', e => {
  console.log('prevent default = stop page from reloading (which is normal default form behavior) = allows file download for firefox')
  event.preventDefault(); // per https://stackoverflow.com/questions/45634088/how-to-prevent-page-from-reloading-after-form-submit-jquery
  console.clear(); // FIXME
  console.log('@ loadBtn')
  buttons.forEach(btn => btn.disabled = true);
  //error.value = '';
  //downloadAsHTML(id.value, {title: title.value, username: userId, noVM: true, log: output => error.value += output + '\n'})
  downloadAsHTML(id.value, {title: title.value, username: userId, noVM: true, log: output => error.value += output + '\n'})
    .then(html => {
      download(html, 'project.html', 'text/html');
      buttons.forEach(btn => btn.disabled = false);
    }).catch(err => {
      console.log(err);
      error.value = err.message;
      buttons.forEach(btn => btn.disabled = false);
    });
});