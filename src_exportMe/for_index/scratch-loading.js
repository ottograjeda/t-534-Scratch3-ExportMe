function loadNoShow() {
  console.log('done loading')
  document.getElementById('loadMe').style.display = "none"
  //alert("done");
}

function loadShow() {
  console.log('loading...')
  //alert("loading");
  document.getElementById('loadMe').style.display = "block"
}
