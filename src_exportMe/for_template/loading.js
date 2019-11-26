function loadingNoShow() {
  console.log('done loading')
  alert("done");
}

function loadingShow() {
  console.log('loading...')
  alert("loading");
  document.getElementById('loadMe').style.display = "none"
}

function myFunction()
{
    console.clear();
    var chkReadyState = setInterval(function() {
        console.log('loading...') 
        if (document.readyState == "complete") {
            clearInterval(chkReadyState);
            // (finally) page is loaded
        }
    }, 100);
}
