function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_t6002')) {
    document.querySelector('body').classList.add('spz_t6002');

    document.querySelectorAll('.head-cont')[0].classList.add('heroSection');

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
      gap: 12,
      perPage: 3,
      slidperMove: 1,
      speed: 3000,
      breakpoints: {
        991: {
          slidperMove: 2,
          perPage: 2,
        },
        767: {
          slidperMove: 1,
          perPage: 1,
        },
      },
      arrowPath:
        'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
    };
    let ratingInfo = {};
    let slides = [];

    // Get the current URL
    var currentUrl = window.location.href.split('?')[0].split('#')[0];
    if (currentUrl === 'https://www.netwrix.com/auditor.html') {
      console.log('auditor');
      document.querySelector('.spz_t6002').classList.add('auditor');
      // Tc 6007 code
      var newHero = `<div class="new-hero audit">
        <div class="hero-container">
            <div class="hero-flex">
                <div class="hero-title-contain">
                    <div class="hero-product-name">NETWRIX AUDITOR</div>
                    <div class="hero-main-title">Ease the burden of IT auditing</div>
                    <p>Identify risks, detect security threats, automate compliance reporting, increase IT team efficiency with IT audit software from Netwrix.</p>
                    <div class="hero-buttons head-cont">
                    </div>
                </div>
                <div class="hero-image-contain">
                    <picture>
                        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webp" alt="auditor_ui_image">
                    </picture>	
                </div>
            </div>
        </div>
        <div class="hero-organiza-container">
            <div class="hero-organiza-content">
                <p>Trusted by 13,500+ organizations</p>
                <ul>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                </ul>
            </div>
          </div>  
        </div>`;
      document.querySelector('.spz_t6002 main .navbar').insertAdjacentHTML('afterend', newHero);


      //DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
      ratingInfo = {
        ratingCompany:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1729152023/netwrix/6002/peer-insights-r-tm-rgb-for-white-bkgrnd_1.svg" alt="Gartner Logo">',
        ratingStars:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1741851883/netwrix/6002/stars_8.svg" alt="Stars rating"/>',
        rating: '4.5',
        reviewsCount: '<span>(186 reviews)*</span>',
      };
      //DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J

      slides = [
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“It does exactly what it's advertised to do. Overall the product provides some of the best SharePoint..”`,
          authorName: 'Systems Engineering Manager',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928?step=register'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource...”`,
          authorName: 'IT Manager',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“A reasonable price for what is offered. The product does what it says. Empowers Information Security and Governance in order to reduce...”`,
          authorName: 'Engineering Manager',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5334748'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“The product is quite easy to use and straight forward and very robust for our company's needs. It is easy to train new staff on the use...”`,
          authorName: 'IT Administrator',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5514524'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `"Help to provide evidences to IT Audit and monitor activities for Compliance..."`,
          authorName: 'IT Associate',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713590'
        }
      ];
      document.querySelector('#footer_cont').insertAdjacentHTML('beforeend', `<div class="informationText"><p>* Result is as of 01/23/2025. 4.5 rating is based on 186 reviews in the File Analysis Software market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.</p></div>`);

    } else if (currentUrl === 'https://www.netwrix.com/endpoint-dlp-solution.html') {

      // Tc 6007 code
      var newHero = `<div class="new-hero endpointProtector-spz">
        <div class="hero-container">
            <div class="hero-flex">
                <div class="hero-title-contain">
                    <div class="hero-product-name">Netwrix Endpoint Protector</div>
                    <div class="hero-main-title">Protect sensitive data</div>
                    <p>Endpoint Protector’s advanced multi-OS DLP is complete with granular device and USB control, content-aware protection, enforced encryption, and multiple deployment options.</p>
                    <div class="hero-buttons head-cont"></div>
                </div>
                <div class="hero-image-contain">
                  <picture>
                    <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webpp" alt="auditor_ui_image">
                  </picture>	
                </div>
            </div>
        </div>
        <div class="hero-organiza-container">
            <div class="hero-organiza-content">
                <p>Trusted by 13,500+ organizations</p>
                <ul>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                </ul>
            </div>
        </div>
      </div>`;
      document.querySelector('.spz_t6002 main .navbar').insertAdjacentHTML('afterend', newHero);


      //DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
      ratingInfo = {
        ratingCompany:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1729152023/netwrix/6002/peer-insights-r-tm-rgb-for-white-bkgrnd_1.svg" alt="Gartner Logo">',
        ratingStars:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1741851883/netwrix/6002/stars_8.svg" alt="Stars rating"/>',
        rating: '4.5',
        reviewsCount: '<span>(186 reviews)*</span>',
      };
      //DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J
      slides = [
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `"Easy to use product and user friendly. You can fetch required reports immediately..."`,
          authorName: 'Director of IT',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5148734'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `"This is the best endpoint DLP solution because it supports all channels and exit points of the...”`,
          authorName: 'Security & Risk Management Associate',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5554604'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“Powerful Device Control, Content Aware Protection, Cross Platform Support, Cloud and SaaS protection, support Windows, Mac and Linux...”`,
          authorName: 'Manager of IT Services',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5942446'
        },
        {
          starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
          reviewCopy: `“Best endpoint protection, peripheral control, lightweight agent...”`,
          authorName: 'IT Associate',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5620066'
        }
      ];
      document.querySelector('#footer_cont').insertAdjacentHTML('beforeend', `<div class="informationText"><p>* Result is as of 01/23/2025. 4.5 rating is based on 186 reviews in the Data Loss Prevention market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.</p></div>`);

    }


    //DEV 5/7. Set unique selector of target setion where you want review ribbon to appear
    const sectionSelector = `.new-hero`

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
        ${ratingInfo.ratingCompany.replace(/\s/g, '').length !== 0
          ? ratingInfo.ratingCompany
          : ``
        }
        <span class="line"></span>
        <div class="reviewRating">
        ${ratingInfo.ratingStars.replace(/\s/g, '').length !== 0
          ? ratingInfo.ratingStars
          : ``
        }
        ${ratingInfo.rating.replace(/\s/g, '').length !== 0
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
                      ${slide.starRating.replace(/\s/g, '')
              .length !== 0
              ? `<img src="${slide.starRating}" alt="5 Star rating" />`
              : ``
            }
                      </div>
                      ${slide.reviewCopy.replace(/\s/g, '')
              .length !== 0
              ? `<div class="review-copy">${slide.reviewCopy}</div>`
              : ``
            }
                      
                      <div class="review-author">
                      ${slide.authorName.replace(/\s/g, '')
              .length !== 0
              ? `<div class="author-name">${slide.authorName}</div>`
              : ``
            }
                      <a href="${slide.ReadFullReviewURL}" target="_blank">Read Full Review</a>

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


    // TC 6009 code
    document.querySelector('.hero-buttons.head-cont').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));
    document.querySelectorAll('.spz_t6002 .hero-buttons .nwx-btn').forEach((item) => {
      item.classList.add('spz_6002_v1');
    });
    document.querySelectorAll('.spz_t6002 .hero-buttons button.nwx-btn').forEach((item) => {
      item.classList.add('get-demo');
      item.textContent = 'Download Free Trial';
      if (window.location.href.includes('netwrix.com/enterprise-auditor')) {
        item.textContent = 'Request Free Trial';
      }
    });

    document.querySelector('.spz_t6002 main .navbar').insertAdjacentHTML('afterend', `<div class="new-head-cont head-cont"></div>`);
    const breadcrumbs = document.querySelector('.spz_t6002 .head-cont .breadcrumbs');
    document.querySelector('.spz_t6002 .new-head-cont').insertAdjacentElement('beforeend', breadcrumbs);

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('get-demo')) {
        setTimeout(() => {
          updateFormAndButton();
        }, 100);
      }
    });

    if (document.querySelector('.spz_t6002 .hero-buttons .product-tour')) {
      document.querySelector('.spz_t6002 .hero-buttons .product-tour').addEventListener('click', function () {
        document.querySelector('.head-cont .nwx-red-btn').click();
      });
    }
    if (document.querySelector('input#SPZ_Test')) {
      document.querySelectorAll('input#SPZ_Test').forEach((input) => {
        input.value = 'variation_6002';
      });
    }
    var button = document.querySelector(".one-field-form-button-test [id^='app-']");
    var buttonID = button.id;
    const formId = `form-${buttonID}`;
    const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
    formContainer.classList.add('spz_modal');

    function updateFormAndButton() {
      document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Auditor";
      document.querySelector(`.spz_modal #ModalForm_leadType`).value = "Evaluation";
      if (!window.location.href.includes('netwrix.com/enterprise-auditor')) {
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
      } else if (window.location.href.includes('netwrix.com/enterprise-auditor')) {
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Request Free Trial';
      }
      console.log('updated states');
    }
    updateFormAndButton();

    const targetNode = formContainer.querySelector(`.spz_modal form .modelFormSubmit`);
    const config = { attributes: true, attributeFilter: ['value', 'class'] };
    const callback = (mutationList, observer) => {
      mutationList.forEach(mutation => {
        if (mutation.type === 'attributes') {
          const newValue = mutation.target.getAttribute(mutation.attributeName);
          const oldValue = mutation.oldValue;

          if (newValue !== oldValue) {
            updateFormAndButton();
          }
        }
      });
    };
    const observer = new MutationObserver(callback);
    if (targetNode) {
      observer.observe(targetNode, { ...config, attributeOldValue: true });
    }



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
        for (var i = 0; i < ca.length; i++) {
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
  if (document.querySelectorAll('.head-cont').length > 0) {
    loadTestCode();
  }
}, 120);








