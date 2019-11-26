const scratchURLs = [ 
  ''
  //'./scratch-vm-otto.min.js' // file does NOT need to be included
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
  console.log('@ downloadAsHTML')

  return runBenchmark(id).then(({assets, projectJSON}) => {
    log('Getting assets...');

    return Promise.all([
     
      // o.note: blank.html is for backend developer = you can add extra code to each exported file (footer, sponsorship, etc.)
      Promise.all((noVM ? ['blank.html'] : scratchURLs).map(url => fetch(url).then(r => r.text()))).then(scripts => {
        console.log('Scratch scripts obtained')
        log('Scratch scripts obtained...');
        return scripts.join('\n');
      }),
     
      fetch(noVM ? './template-quick.html' : './template.html')
        .then(r => r.text()),
      getDataURL(projectJSON)
        .then(data => projectJSON = data),
        ...Object.keys(assets).map(assetId => getDataURL(assets[assetId]).then(data => assets[assetId] = data))
      ])
    .then(async ([scripts, html]) => {
      scripts = `const PROJECT_JSON = "${projectJSON}";\nconst ASSETS = ${JSON.stringify(assets)};\nconst DESIRED_USERNAME = ${JSON.stringify(userId)};\n` + scripts.replace('</scr' + 'ipt>', ''); // dumb </ script> in a comment
     
      log('Done!');
      console.log('Done!')
      return html.replace('{TITLE}', () => title).replace('{SCRIPTS}', () => scripts);
        // using function because $& will get set to '{SCRIPTS}' >:(
    }); // end (main) promise
  }); // end benchmark
  
}

const loadBtn = document.getElementById('load-all'); // this is only button
const buttons = [loadBtn];
const title = document.getElementById('title');
const id = document.getElementById('id');
const error = document.getElementById('error');

loadBtn.addEventListener('click', e => {
  console.clear();
  console.log('@ loadBtn')
  buttons.forEach(btn => btn.disabled = true);
  error.value = '';
  downloadAsHTML(id.value, {title: title.value, username: userId, noVM: true, log: output => error.value += output + '\n'}) // noVM does not work
    .then(html => {
      download(html, 'project.html', 'text/html');
      buttons.forEach(btn => btn.disabled = false);
    }).catch(err => {
      console.log(err);
      error.value = err.message;
      buttons.forEach(btn => btn.disabled = false);
    });
});