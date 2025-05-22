//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz3007Test() {
  if (!document.querySelector('body').classList.contains('spz_3003')) {
    document.querySelector('body').classList.add('spz_3003');
    if (document.querySelector('.spz_3003 main > section:first-child')) {
      document.querySelector('.spz_3003 main > section:first-child').insertAdjacentHTML('afterbegin', `
        <video src="//res.cloudinary.com/spiralyze/video/upload/v1747753409/airdna/3003/vid/Desktop_Bg_1.mp4" class="desktop_vid" id="myVideo" autoplay muted playsinline></video>
        <video src="//res.cloudinary.com/spiralyze/video/upload/v1747753398/airdna/3003/vid/360_BG_1.mp4" class="mobile_vid" id="myVideo" autoplay muted playsinline></video>
        `);
    }

    console.log('Time 2 > ' + new Date().getTime() / 1000);

    // need to check condition on page scroll.
    let headerTimeout;
    window.addEventListener('scroll', function () {
      this.clearTimeout(headerTimeout)
      headerTimeout = setTimeout(() => {
        if (document.querySelector('.spz_3003 a[aria-label="Go to homepage"] img')) {
          console.log('header changed');
          document.querySelector('.spz_3003 #header').classList.add('normalHeader');

          if (document.querySelectorAll('.header-logo-color').length === 0) {
            document.querySelector('.spz_3003 a[aria-label="Go to homepage"] img').insertAdjacentHTML('beforebegin', '<img class="header-logo-color" src="https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg?fit=max&w=384" alt="site logo">');
          }
        } else {
          document.querySelector('.spz_3003 #header')?.classList.remove('normalHeader');
          console.log('header not changed');
        }
      }, 10);
    });
    window.dispatchEvent(new Event('scroll'));

  }
}

window.onpageshow = function (event) {
  const video = document.querySelector('.spz_3003 main > section:first-child video');
  if (video) {
    video.play();
  }
};

function removeTest() {
  document.querySelector('.spz_3003 main > section:first-child video.desktop_vid')?.remove();
  document.querySelector('.spz_3003 main > section:first-child video.mobile_vid')?.remove();
  document.body.classList.remove('spz_3003');
  document.querySelector('.header-logo-color')?.remove();
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
    }, 50);

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


