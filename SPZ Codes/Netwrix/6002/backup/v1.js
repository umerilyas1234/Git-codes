function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_t6002')) {
      document.querySelector('body').classList.add('spz_t6002');

  document.querySelectorAll('.head-cont')[0].classList.add('heroSection');
  console.log(document.querySelectorAll('.heroSection').length)

  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  //exptName should be #1001, #1002, #1003 etc.
  const expName = '6002';
  //variantName should be _V1, _V2, _TC etc.
  const variantName = `variant_` + expName;

  hiddenValue(expName, variantName);
      

  //DEV 2/7. Set splide slider settings.
  const sliderSettings = {
    type: 'loop',
    autoplay: true,
    gap: 15,
    perPage: 3,
    slidperMove : 1,
    speed: 3000,
    breakpoints: {
      991: {
        slidperMove : 2,
        perPage: 2,
      },
      767: {
        slidperMove : 1,
        perPage: 1,
      },
    },
    arrowPath:
      'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
  };
  //DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
  const ratingInfo = {
    ratingCompany:
      '<img src="//res.cloudinary.com/spiralyze/image/upload/v1729152023/netwrix/6002/peer-insights-r-tm-rgb-for-white-bkgrnd_1.svg" alt="Gartner Logo">',
    ratingStars:
      '<img src="//res.cloudinary.com/spiralyze/image/upload/v1728891074/netwrix/6002/stars_2.svg" alt="Stars rating"/>',
    rating: '4.4',
    reviewsCount: '<span>(142 reviews)*</span>',
  };
  //DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J
  const slides = [
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“One of the best security solutions I ever used! The comprehensive auditing and real-time alerting are the aspects I like most.”',
      authorPic: 'Matic K.',
      authorName: 'Security Engineer',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“Invaluable for IT security and compliance. Its real-time alerts and detailed reports make monitoring network environments much easier.”',
      authorPic: 'Bakeer J.',
      authorName: 'System Administrator',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“Used it for 5 years on an on-premise VM. Works extremely well, low maintenance and the search functionality is great.”',
      authorPic: 'Jesse M.',
      authorName: 'Chief Information Officer',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“Allows a small team to monitor an entire infrastructure with ease. 10/10, would use it again!”',
      authorPic: 'Tory L.',
      authorName: 'IT Manager',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: 
      '“Great software. Breaks event logs down into reports that you can easily understand.”',
      authorPic: 'Richard W.',
      authorName: 'IT Manager',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“Netwrix Auditor is very consistent. It helped my company receive numerous accreditations for performing auditing properly.”',
      authorPic: 'Glenn J.',
      authorName: 'Sr. Systems and Security Architect',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“We’ve been able to easily produce evidence, something that used to take a considerable amount of time.”',
      authorPic: 'Jack B.',
      authorName: 'Chief Technology Officer',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“Very powerful tool. It helps us find sensitive data spanning across our network within many different types of systems.”',
      authorPic: 'James D.',
      authorName: 'System Administrator',
    },
    {
      starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
      reviewCopy: '“It will serve as your eyes for monitoring your surroundings. You can keep track of all changes and receive instant notifications.”',
      authorPic: 'Ovi H.',
      authorName: 'Network System Administrator',
    }
  ];
  //DEV 5/7. Set unique selector of target setion where you want review ribbon to appear
  const sectionSelector = `.heroSection`

  //DEV 6/7. Choose where reviews ribbon should appear.  Set "before" or "after".
  const placement = 'after'

  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ************************/
  var splideScript = document.createElement('script');
  splideScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  var splideStyle = document.createElement('link');
  splideStyle.rel = 'stylesheet';
  splideStyle.type = 'text/css';
  splideStyle.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
  document.body.appendChild(splideScript);
  document.body.appendChild(splideStyle);
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
  }
  function addReviewRibbon(
    sliderSettings,
    ratingInfo,
    slides,
    whereToAdd,
    selector
  ) {
    var reviewRibbon = document.createElement('div');
    reviewRibbon.classList.add('spz-review-ribbon');
    reviewRibbon.innerHTML = `
    <div class="review-container">
      <div class="review-left">
        ${
          ratingInfo.ratingCompany.replace(/\s/g, '').length !== 0
            ? ratingInfo.ratingCompany
            : ``
        }
        <span class="line"></span>
        <div class="reviewRating">
        ${
          ratingInfo.ratingStars.replace(/\s/g, '').length !== 0
            ? ratingInfo.ratingStars
            : ``
        }
        ${
          ratingInfo.rating.replace(/\s/g, '').length !== 0
            ? `<div class="reviews-count">${ratingInfo.rating} ${ratingInfo.reviewsCount}</div>`
            : ``
        }
        </div>
        
      </div>
      <div class="review-right">
          <div class="splide" role="group">
            <div class="splide__track">
              <ul class="splide__list">
                ${slides.map((slide) => {
                  return `
                  <li class="splide__slide">
                    <div class="review-content">
                      <div class="review-heading">
                      ${
                        slide.starRating.replace(/\s/g, '')
                          .length !== 0
                          ? `<img src="${slide.starRating}" alt="5 Star rating" />`
                          : ``
                      }
                      </div>
                      ${
                        slide.reviewCopy.replace(/\s/g, '')
                          .length !== 0
                          ? `<div class="review-copy">${slide.reviewCopy}</div>`
                          : ``
                      }
                      
                      <div class="review-author">
                      ${
                        slide.authorPic.replace(/\s/g, '')
                          .length !== 0
                          ? `<div class="author-pic">${slide.authorPic}</div>`
                          : ``
                      }
                      ${
                        slide.authorName.replace(/\s/g, '')
                          .length !== 0
                          ? `<div class="author-name">${slide.authorName}</div>`
                          : ``
                      }
                    </div>
                  </div>
                </li>
                `;
                }).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
    if (whereToAdd === 'after') insertAfter(reviewRibbon, document.querySelector(selector));
    if (whereToAdd === 'before') insertBefore(reviewRibbon, document.querySelector(selector));
      
    new Splide('.splide', sliderSettings).mount();
  }
  splideScript.onload = function () {
    addReviewRibbon(sliderSettings, ratingInfo, slides, placement, sectionSelector);
  };

  document.querySelector('#footer_cont').insertAdjacentHTML('beforeend',`<div class="informationText"><p>*Result is as of 10/08/2024. 4.4 rating is based on 142 reviews in the File Analysis Software market. Gartner and Peer Insights are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.</p></div>`);


  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ************************/
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {

      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');

      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;

      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }
  }
}

setInterval(() => {
if(document.querySelectorAll('.head-cont').length > 0) {
  loadTestCode();
}
}, 100);
