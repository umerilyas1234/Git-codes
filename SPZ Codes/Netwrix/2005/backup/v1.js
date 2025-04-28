function loadTestCode2002() {
  if (!document.querySelector("body").classList.contains("spz_t2005")) {
    document.querySelector("body").classList.add("spz_t2005");
    const containerIndex = document.querySelector('.cookie-information-cont') ? 6 : 5;
    document.querySelector(`.spz_t2005 > div:nth-of-type(${containerIndex}) form`).classList.add("spz_form");

    //DEV 1/6. Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208168040022966/f`;
    //DEV 2/6. Add content inside the box
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form_heading">
          <h2>Get a demo</h2>
        </div> 
      `,
      customHTMLAfter: `
        ${ /*This html goes after the form button. To make empty, set as. */''}
        <div class="securityInfo">  
          We care about the security of your data.        
          <br class="visible-xs-inline"> 
          <a href="/privacy.html" target="_blank" class="privacyLink">Privacy Policy</a>
        </div>
        `,
    };

    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".spz_form"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const inputsSelectors = [".spz_form #ModalForm_nwf_fname", ".spz_form #ModalForm_nwf_lname", ".spz_form #ModalForm_nwf_email", ".spz_form #ModalForm_account_type", ".spz_form #ModalForm_nwf_nsrv", ".spz_form #ModalForm_nwf_phone"]

    //DEV 5/6. Add Form labels below
    const labelValues = ["First Name", "Last Name", "Business Email", "User Type", "Number of Employees", "Direct Phone"]

    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        animateLabels(inputsSelectors, labelValues);
      }
    })

    // DEV 6/6. Delete function below pushing code to A/B testing platform. It's needed only for internal purposes.

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    //Helper function to add input listeners like focus, blur and add class to parent div
    function addInputListener(input) {
      input.placeholder = "";
      input.addEventListener("focus", function () {
        input.closest(".spz-input-wrap").classList.remove("has-value");
        input.closest(".spz-input-wrap").classList.add("focused");
      });
      input.addEventListener("blur", function () {
        if (input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.remove("focused");
          input.closest(".spz-input-wrap").classList.add("has-value");
        } else {
          input.closest(".spz-input-wrap").classList.remove("focused");
        }
      });
      input.addEventListener("change", function () {
        if (input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.remove("focused");
          input.closest(".spz-input-wrap").classList.add("has-value");
        } else {
          input.closest(".spz-input-wrap").classList.remove("focused");
        }
      });
      if (input.value.length > 0) {
        input.closest(".spz-input-wrap").classList.remove("focused");
        input.closest(".spz-input-wrap").classList.add("has-value");
      } else {
        input.closest(".spz-input-wrap").classList.remove("focused");
      }
    }
    //Helper function to animate labels for inputs
    function animateLabels(inputs, labelValues) {
      inputs.map((item, index) => {
        const parentDiv = findParent(inputs[index]);

        const label = document.createElement("label");
        const input = document.querySelector(inputs[index]);

        label.innerText = labelValues[index];
        label.classList.add(`label-spz`);

        label.classList.add(`label-spz-${item.replace(".spz_form #", "")}`);
        label.style.width = "";
        parentDiv.classList.add("spz-input-wrap");

        label.addEventListener("click", function (e) {
          e.target.nextElementSibling.focus();
        });
        parentDiv.insertBefore(label, input);
        addInputListener(input);
        input.setAttribute('placeholder', '');
        if (input.value.length > 0) {
          parentDiv.classList.add("has-value");
        }
      });
    }
    //Helper function to find parent div of input or select element
    function findParent(elementSelector) {
      let element = document.querySelector(elementSelector);
      let wrapper = element.closest("div"); //define parent's tag name
      if (
        (wrapper.innerHTML.includes("<input") ||
          wrapper.innerHTML.includes("<select"))
      ) {
        return wrapper;
      } else if (
        wrapper.parentElement.innerHTML.includes("<input")
      ) {
        return wrapper.parentElement;
      } else {
        console.log("something is wrong");
      }
    }

    // This is the code to generate the form over UI section do no edit it
    function addForm(formData, formSelector) {
      const formTemplate = `
          <div class="form_outer form-wrapper-2">
            <div class="form_main">
              <div class="spz-form-wrap">
                <div class="left">
                  <div class="form-section">
                    ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
          ? formData.customHTMLBefore
          : ""
        }
                  </div>
                  <div class="the-form"></div>
                  ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
          ? formData.customHTMLAfter
          : ""
        }
                </div>
                <div class="right">
                  <div class="right_inner">
                    <div class="subheading">
                      <div class="rating"><img src="//res.cloudinary.com/spiralyze/image/upload/v1729855208/netwrix/2002/frame_3.svg" alt="Gartner"><strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1738832907/netwrix/2005/stars-45.svg" alt="Rating stars"><span><b>4.5 </b> (186 reviews)<sup>*</sup></span></strong></div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
      document.body.insertAdjacentHTML(
        "beforeend",
        formTemplate
      ); /*Insert spz-form-wrap before closing body tag*/
      if (!document.querySelector(formSelector)) {
        document
          .querySelector(".spz-form-wrap .the-form")
          .insertAdjacentHTML(
            "beforeend",
            "<div style='color:red;'>Add proper form selector in code to load form</div>"
          );
      } else {
        const formLoaded = setInterval(() => {
          if (
            document.querySelector(formSelector) &&
            document.querySelectorAll(`${formSelector} input`).length > 0
          ) {
            clearInterval(formLoaded);
            document
              .querySelector(".spz-form-wrap .the-form")
              .appendChild(
                document.querySelector(formSelector)
              ); /*Apply form to spz form wrapper*/
          }
        });
      }
    }
    function addClass() {
      document.querySelectorAll('.spz_form > div:not(.modelFormError)').forEach((item) => {
        if (!item.classList.contains('spz-input-wrap')) {
          item.classList.add('spz-input-wrap');
          let input = item.querySelector('input');
          let select = item.querySelector('select');
          if ((input && input.value.length > 0) || (select && select.value !== "")) {
            item.classList.add('has-value');
          }
        }
      });
    }

    setTimeout(() => {
      document.querySelector('.form_outer').style.display = 'flex';
      document.querySelector('.form_outer #ModalForm_product').value = '';
      document.querySelector('.form_outer #ModalForm_product').setAttribute('value', '');
      document.querySelector('.form_outer').insertAdjacentHTML('beforeend', '<div class="spz_caption"><p>* Result is as of 01/23/2025. 4.5 rating is based on 186 reviews in the File Analysis Software market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.</p></div>');
      reviewSlider();
    }, 100);

    function reviewSlider() {
      // review slider
      const sliderSettings = {
        type: 'loop',
        autoplay: true,
        gap: 20,
        perPage: 1,
        perMove: 1,
        speed: 3000,
        breakpoints: {
          991: {
            perPage: 1,
          },
          767: {
            perPage: 1,
          },
        },
        arrowPath:
          'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
      };
      //DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
      const ratingInfo = {
        ratingCompany:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1731316437/netwrix/1006/frame_3.svg" alt="Gartner Logo" width="155">',
        ratingStars:
          '<img src="//res.cloudinary.com/spiralyze/image/upload/v1732805123/netwrix/8002/rating_47.svg" alt="Stars rating">',
        rating: '4.5',
        reviewsCount: '<span>(143 reviews)</span><sup>*</sup>',
      };
      //DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J
      const slides = [
        {
          starRating:
            '//res.cloudinary.com/spiralyze/image/upload/v1738832907/netwrix/2005/quotation.svg',
          reviewCopy:
            '“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource.”',
          authorPic: 'IT Manager',
          authorName: 'IT Manager',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560',
        },
        {
          starRating:
            '//res.cloudinary.com/spiralyze/image/upload/v1738832907/netwrix/2005/quotation.svg',
          reviewCopy:
            `“My experience with Netwrix Auditor has been highly positive. It stands out as a robust and comprehensive solution for IT auditing and security.”`,
          authorPic: 'Systems Engineer',
          authorName: 'Systems Engineer',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928',
        },
        {
          starRating:
            '//res.cloudinary.com/spiralyze/image/upload/v1738832907/netwrix/2005/quotation.svg',
          reviewCopy:
            '“It just works once set-up. Setting it up is easy as always supported on call.”',
          authorPic: 'Lead System Admin',
          authorName: 'Lead System Admin',
          ReadFullReviewURL: 'https://www.gartner.com/reviews/market/identity-governance-administration/vendor/netwrix/product/netwrix-groupid/review/view/5733154',
        }
      ];
      //DEV 5/7. Set unique selector of target setion where you want review ribbon to appear
      const sectionSelector = `.spz-form-wrap .right .subheading`

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
            <div class="review-right">
                <div class="splide review_slider" role="group">
                  <div class="splide__track">
                    <ul class="splide__list">
                      ${slides.map((slide) => {
          return `
                        <li class="splide__slide">
                          <div class="review-content">
                            <div class="review-heading">
                            ${slide.starRating.replace(/\s/g, '')
              .length !== 0
              ? `<img src="${slide.starRating}" alt="Quotation mark" />`
              : ``
            }
                            </div>
                            ${slide.reviewCopy.replace(/\s/g, '')
              .length !== 0
              ? `<div class="review-copy">${slide.reviewCopy}</div>`
              : ``
            }
                            
                            <div class="review-author">
                            ${slide.authorPic.replace(/\s/g, '')
              .length !== 0
              ? `<div class="author-pic">${slide.authorPic}</div>`
              : ``
            }
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

        new Splide('.review_slider', sliderSettings).mount();
      }
      splideScript.onload = function () {
        addReviewRibbon(sliderSettings, ratingInfo, slides, placement, sectionSelector);
      };

    }

    //obeserv the form error class 
    const targetNode = document.querySelector('.spz_form');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      addClass();
      //button
      if (document.querySelector('.spz_form .btn-red-fill').value == "Schedule Demo") {
        document.querySelector('.spz_form .btn-red-fill').classList.add('spz2002-cta-submit');
        document.querySelector('.spz_form .btn-red-fill').value = "Submit";
      }
      if (document.querySelector('html').classList.contains('is-clipped')) {
        document.querySelector('html').classList.remove('is-clipped')
      }

    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '2005';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant_` + expName;

    hiddenValue(expName, variantName);

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

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2002();
  }
}, 100);
