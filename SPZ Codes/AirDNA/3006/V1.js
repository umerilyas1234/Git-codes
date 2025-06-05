//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz5002Test() {

  if (!document.querySelector('body').classList.contains('spz_3006')) {
    document.querySelector('body').classList.add('spz_3006');
    // Put your test code here
    if (document.querySelector('.spz_3006 main > section:first-child')) {
      document.querySelector('.spz_3006 main > section:first-child').insertAdjacentHTML('afterend', `
          <div class="case_studySection">
            <div class="splide caseStudySlider" id="logo_slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="slider_main">
                      <ul>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/venture-rei-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/venture-rei-desktop_1.webp"
                                  alt="venture rei" width="147" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">350%</strong>
                              <span>Owner lead <br>
                                conversions</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/kissimmee-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/kissimmee-desktop_1.webp"
                                  alt="kissimmee" width="91" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">100%</strong>
                              <span> More <br>
                                market data</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/stay-marquis-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/stay-marquis-desktop_1.webp"
                                  alt="stay marquis" width="133" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">67%</strong>
                              <span>Number of <br>
                                properties</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/easy-street-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/easy-street-desktop_1.webp"
                                  alt="easy street" width="120" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">100%</strong>
                              <span>Lower default rate <br>
                                than industry average</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/guestable-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/guestable-desktop_1.webp"
                                  alt="guestable" width="142" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">20%</strong>
                              <span>Revenue year <br>
                                over year</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="slider_main">
                      <ul>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/venture-rei-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/venture-rei-desktop_1.webp"
                                  alt="venture rei" width="147" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">350%</strong>
                              <span>Owner lead <br>
                                conversions</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/kissimmee-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/kissimmee-desktop_1.webp"
                                  alt="kissimmee" width="91" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">100%</strong>
                              <span> More <br>
                                market data</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/stay-marquis-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/stay-marquis-desktop_1.webp"
                                  alt="stay marquis" width="133" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">67%</strong>
                              <span>Number of <br>
                                properties</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/easy-street-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/easy-street-desktop_1.webp"
                                  alt="easy street" width="120" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">100%</strong>
                              <span>Lower default rate <br>
                                than industry average</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="slider_data">
                            <div class="slider_left">
                              <picture>
                                <source
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/guestable-mobile_1.webp"
                                  type="image/webp" media="(max-width: 767px)">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3006/guestable-desktop_1.webp"
                                  alt="guestable" width="142" height="38">
                              </picture>
                            </div>
                            <div class="slideR_right">
                              <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1747906826/airdna/3006/arrow-up.svg"
                                  alt="arrow up">20%</strong>
                              <span>Revenue year <br>
                                over year</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>  
          </div>
        `);


      console.log('Time 2 > ' + new Date().getTime() / 1000);

      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
      document.head.appendChild(link);

      const loadJS = (url, implementationCode, location) => {
        var scriptTag = document.createElement('script');
        scriptTag.src = url;
        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;
        location.appendChild(scriptTag);
      };

      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
        var caseStudySlider = new Splide('.caseStudySlider', {
          type: 'loop',
          autoWidth: true,
          arrows: false,
          pagination: false,
          drag: false,
          speed: 20000,
          easing: 'linear',
          waitForTransition: true,
          autoplay: true,
          interval: 0,
          pauseOnHover: false,
          pauseOnFocus: false,

        });

        setTimeout(function () {
          caseStudySlider.mount();
        }, 500);
        window.dispatchEvent(new Event('resize'));
      }, document.body);
    
    }
  }
  
}

function removeTest() {
  document.querySelector('.case_studySection')?.remove();
  document.querySelector('body').classList.remove('spz_3006');
}

const selector5002 = 'main > section:first-child h1';
function waitForElement(selector5002, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector5002);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector5002);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector5002}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector5002)
    .then((element) => {
      if (element) {
        spz5002Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout;
const targetUrl = "https://www.airdna.co/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      executeTimeout = setTimeout(function () {
        executeTest();
      }, 800)
    } else {
      removeTest();
    }
    const tabButton = document.querySelector('[role="tablist"] > button:nth-child(2)');
    if (tabButton && tabButton.classList.contains("Mui-selected")) {
      location.reload();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
