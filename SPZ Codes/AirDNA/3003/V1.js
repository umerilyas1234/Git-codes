//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz3007Test() {
  if (!document.querySelector('body').classList.contains('spz_3003')) {
    document.querySelector('body').classList.add('spz_3003');
    if(document.querySelector('img[alt="site logo white"]')){
      document.querySelector('img[alt="site logo white"]').srcset = '//res.cloudinary.com/spiralyze/image/upload/v1738242081/airdna/3003/airdna_logo.svg';
    }
    if( document.querySelector('.spz_3003 main > section:first-child')){
      document.querySelector('.spz_3003 main > section:first-child').insertAdjacentHTML('afterbegin', '<video src="//res.cloudinary.com/spiralyze/video/upload/v1745592795/airdna/3003/vid/3003_AirDNA.mp4" autoplay muted playsinline></video>');
    }
    // Put your test code here
    if (document.querySelector('.spz_3003 main > section')) {
    }


    console.log('Time 2 > ' + new Date().getTime() / 1000);

  }
}

function removeTest() {
  document.body.classList.remove('spz_3003');
  document.querySelector('.hero_section')?.remove();
}

const selector3007 = 'main > section:first-child';
function waitForElement(selector3007, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector3007);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector3007);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector3007}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector3007)
    .then((element) => {
      if (element) {
        spz3007Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
const targetUrl = "https://www.airdna.co/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      executeTest();
    } else {
      removeTest();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
