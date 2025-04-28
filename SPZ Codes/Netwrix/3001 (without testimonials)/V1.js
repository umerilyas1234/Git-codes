function loadTestCode3001() {
  if (!document.querySelector("body").classList.contains("spz_t3001")) {
    document.querySelector("body").classList.add("spz_t3001");

    document.querySelector('.desktop-navigation .navbar-brand img').src = '//res.cloudinary.com/spiralyze/image/upload/v1729527323/netwrix/3001/logo__white.svg';
    document.querySelector('.navbar-item img[alt="Select language"]').src = '//res.cloudinary.com/spiralyze/image/upload/v1729527363/netwrix/3001/language_icon.svg';
    document.querySelector('#main_cont').insertAdjacentHTML('afterbegin', `
      <div class="hero_section">
        <div class="auto_container">
          <div class="hero_inner">
            <div class="new-hero-3001">
              <div class="wrapper">
                <div class="progress_bar step_1">
                  <span></span>
                </div>
                <div class="hero_heading">
                  <h1>Get pricing</h1>
                  <h3>Which solution(s) are you interested in?</h3>
                </div>
                <div class="cards">
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/data-discovery_icon.svg"
                        alt="Data Discovery & Classification Icon" height="41" width="40"></span>
                    <div class="card-text">Data Discovery & Classification</div>
                  </div>
                  <div class="card">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/data-access_icon.svg"
                        alt="Data Security Posture Management Icon" height="41" width="40"></span>
                    <div class="card-text">Data Security Posture Management</div>
                  </div>
                  <div class="card">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/data-loss_icon.svg"
                        alt="Data Loss Prevention Icon" height="41" width="40"></span>
                    <div class="card-text">Data Loss <br> Prevention</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/endpoint-security_icon.svg"
                        alt="Endpoint Security & Management Icon" height="41" width="40"></span>
                    <div class="card-text">Endpoint Security & Management</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/security-configuration_icon.svg"
                        alt="Security Configuration Management Icon" height="41" width="40"></span>
                    <div class="card-text">Security Configuration Management</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/identity-governance_icon.svg"
                        alt="Identity Governance & Administration Icon" height="41" width="40"></span>
                    <div class="card-text">Identity Governance & Administration</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/privileged-access_icon.svg"
                        alt="Privileged Access Management Icon" height="41" width="40"></span>
                    <div class="card-text">Privileged Access Management</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527183/netwrix/3001/active-directory_icon.svg"
                        alt="Active Directory Security Icon" height="41" width="40"></span>
                    <div class="card-text">Active Directory Security</div>
                  </div>
                  <div class="card">
                    <span><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1729527184/netwrix/3001/password_security-icon.svg"
                        alt="Password Security & Management Icon" height="41" width="40"></span>
                    <div class="card-text">Password Security & Management</div>
                  </div>
                </div>
                <div class="form">
                  <div class="cta next-question cta-spz-3001-hero">Next</div>
                </div>
              </div>
              <div class="wrapper spz-hidden wrapper_two">
                <div class="progress_bar step_2">
                  <span></span>
                </div>
                <div class="hero_heading">
                  <h1>Get pricing</h1>
                </div>
                <div class="main_form">
                  
                </div>
              </div>
            </div>
            <div class="hero_bottom">
              <ul>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1731053557/netwrix/3001/gartner_logo_2.svg" alt="Gartner"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527270/netwrix/3001/rating_45.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527280/netwrix/3001/capterra_logo_1.svg" alt="Capterra"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527270/netwrix/3001/rating_5.svg" alt="Review stars"> <i>5.0</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/g2_logo.svg" alt="G2"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527270/netwrix/3001/rating_44.svg" alt="Review stars"> <i>4.4</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/getapp_logo.svg" alt="Getapp"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527270/netwrix/3001/rating_45.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/trustradius_logo.svg" alt="Trustradius"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527270/netwrix/3001/rating_45.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `);

    document.querySelector('.new-hero-3001 .cards').addEventListener("click", function (e) {
      if (e.target.closest(".new-hero-3001 .card")) {
        e.target.closest(".new-hero-3001 .card").classList.toggle('active');
      }
    })

    document.querySelectorAll('.next-question').forEach((item, index) => {
      item.addEventListener('click', (e) => {
        const cards = document.querySelectorAll('.cards .card');
        const isActivePresent = Array.from(cards).some(card => card.classList.contains('active'));

        // Check if none of the cards have the 'active' class
        if (!isActivePresent) {
          document.querySelector('body').classList.add('step_two');
          showError('Please select at least one solution');

          return;
        } else {
          removeError();
        }

        const selectedText = Array.from(cards)
          .filter(card => card.classList.contains('active'))
          .map(card => card.querySelector('.card-text').innerText)
          .join(', ');

        document.querySelector('#exp_product_spz').value = selectedText;
        console.log(document.querySelector('#exp_product_spz').value);

        // Hide current element and show next element
        item.parentElement.parentElement.classList.add('spz-hidden');
        item.parentElement.parentElement.nextElementSibling.classList.remove('spz-hidden');

        const activeCards = document.querySelectorAll('.spz_t3001 .new-hero-3001 .card.active .card-text');
        const activeCardTexts = Array.from(activeCards).map(card => card.textContent.trim());
        const joinedTexts = activeCardTexts.join(', ');
        const targetElement = document.querySelector('.form_outer #ModalForm_product');
        if (targetElement) {
          targetElement.value = joinedTexts;
        }

      });
    });

    function showError(message) {
      let errorMsg = document.querySelector('.error-message');
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_24125_685)">
          <path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_24125_685">
            <rect width="16" height="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`;

      if (!errorMsg) {
        console.log('asdsadsadas');
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
        document.querySelector('.cards').insertAdjacentElement("afterend", errorMsg);

      }
    }

    function removeError() {
      const errorMsg = document.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }

    document.querySelector('#footer_cont').insertAdjacentHTML('beforeend', `
      <div class="footer_data">
        <div class="footer_top">
          <p>© 2024 Netwrix Corporation</p>
          <div class="footer_nav">
            <ul>
              <li>
                <a href="https://www.netwrix.com/privacy.html">Privacy Policy </a>
              </li>
              <li>
                <a href="https://www.netwrix.com/privacy_eu.html">EU Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.netwrix.com/eula.html">EULA</a>
              </li>
              <li>
                <a href="https://www.netwrix.com/download/documents/Modern_Slavery_Policy.pdf">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    `);



    // form
    setTimeout(() => {
      document.querySelector("body > div:nth-of-type(6) form").classList.add("spz_form");
      //DEV 1/6. Put your asana task URL here
      const asana_URL = `https://app.asana.com/0/1206002187116436/1208168040022966/f`;
      //DEV 2/6. Add content inside the box
      const formElements = {
        customHTMLAfter: `
          ${ /*This html goes after the form button. To make empty, set as. */''}
          <div class="securityInfo">  
            Your privacy is important to us. See our 
            <br class="visible-xs-inline"> 
            <a href="/privacy.html" target="_blank" class="privacyLink"> Privacy Policy</a>
            for more information.  
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
                  <div class="the-form"></div>
                  ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
            ? formData.customHTMLAfter
            : ""
          }
                </div>
              </div>
              </div>
            </div>
            `;
        document.querySelector('.main_form').insertAdjacentHTML(
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
        document.querySelector('.form_outer').style.display = 'none';
        animateLabels(inputsSelectors, labelValues);
      }, 100);

      // adding caption
      //obeserv the form error class 
      const targetNode = document.querySelector('.spz_form');
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationList, observer) => {
        addClass();
        //button
        if (document.querySelector('.spz_form .btn-red-fill').value == "Request Pricing") {
          document.querySelector('.spz_form .btn-red-fill').classList.add('spz3001-cta-submit');
          document.querySelector('.spz_form .btn-red-fill').value = "Submit";
        }
        if (document.querySelector('html').classList.contains('is-clipped')) {
          document.querySelector('html').classList.remove('is-clipped')
        }

      }
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);

    }, 1000);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #3001, #1002, #1003 etc.
    const expName = '3001';
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
    loadTestCode3001();
  }
}, 100);
