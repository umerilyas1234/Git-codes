// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1737541046/techsmithcamtasia/310/src/styles.css';

// if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1737541046/techsmithcamtasia/310/src/styles.css"]')) {
//   document.getElementsByTagName('head')[0].appendChild(link);
// }

function loadTestCode231() {
  if (!document.querySelector("body").classList.contains("spz_231")) {
    document.querySelector("body").classList.add("spz_231");
    
  }
}

var bodyInterval231 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval231);
    loadTestCode231();
  }
}, 100);
