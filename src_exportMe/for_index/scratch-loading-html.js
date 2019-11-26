function loadIt() {
  //console.clear();
  // new
  loadShow();

  var chkReadyState = setInterval(function() {
      console.log('checking...') 
      if (document.readyState == "complete") {
          clearInterval(chkReadyState);
          // (finally) page is loaded
          loadNoShow();
          console.log('page loaded');
      }
  }, 100);
}

window.onload = loadIt(); // call function on page load
