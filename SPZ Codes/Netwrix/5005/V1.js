(function () {
  //DEV 1/8. Put asana task URL here
  const asana_URL = `https://app.asana.com/0/1206002187116436/1209090991523465/f`
  //DEV 2/8. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
  const heroSelector = `.homepage_main_top`;
  //DEV 3/8. Choose where redesigned hero section should appear
  const position = "beforebegin" //"beforebegin","afterbegin", "beforeend", "afterend"
  //DEV 4/8. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
  const formSelector = ``;
  //DEV 5/8. Fill hero content values. See comments below
  const heroContent = {
    //[1] Hero form heading
    customHTMLBefore: '',
    //[2] Hero form prozac
    customHTMLAfter: ``,
    //[3] Content eyebrow
    contentSuperHeading: "Netwrix Endpoint Protector",
    //[4] Content trustBadge
    trustBadge: '',
    //[6] Hero pills
    contentPills: '',
    //[7] Hero subheading
    contentSubHeading: "",
    //[8] Arrow image between the form and content
    //Alt value for arrow
    middleArrowAlt: "arrow",
    //[9] Hero bullets
    features: [
      {
        checkmarkImage:
          "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
        featureItemContent:
          "<strong>Device Control.</strong> Comprehensive USB & peripheral port control to lock down, monitor, and manage devices.",
      },
      {
        checkmarkImage:
          "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
        featureItemContent:
          "<strong>Content-Aware Protection.</strong> Detailed monitoring, control, and blocking of file transfers through content and context inspection.",
      },
      {
        checkmarkImage:
          "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
        featureItemContent:
          "<strong>Enforce USB Encryption.</strong> Efficient encryption, management, and security of USB storage devices, safeguarding data in transit.",
      },
    ],
  };
  const additionalSection = '';

  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ************************/

  //Helper function to animate labels for inputs
  function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
    const formTemplate = `
		<div class="spz5003-bg-wrap product_top second_type">
	        <div class="spz-form-wrap">
			  <div class="content-section">
	            ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                : ""
              }
	            ${formData.trustBadge.length !== 0
                ? `<div class="trust-badge">
                      <picture>
                        ${formData.trustBadge.map(
                          (item) =>
                            `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                            )
                          .join("")
                        }
                        <img src="${formData.trustBadge[0].url}" alt="trust badge" />
                      </picture>
                    </div>`
                : ""
              }
	            ${formData.contentPills.length !== 0
        ? `<div class="pills-wrap">
		              ${formData.contentPills.map(
          (item) =>
            `<div class="pill-item">${item}</div>`
        )
          .join("")}
	            	</div>`
        : ""
      }
	            ${formData.contentSubHeading.replace(/\s/g, "").length !== 0
        ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
        : ""
      }
              <div class="button-wrapper">
                <a class="button-request-demo spz-5005-requst-demo-cta" href="#">REQUEST DEMO</a>
                <div class="free-trial-wrapper">
                  <a class="button-free-trial spz-5005-free-trial-cta" href="#">FREE TRIAL</a>
                  <div class="desc">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/windows.svg" alt="Microsoft Windows Icon" width="32" height="32">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/apple.svg" alt="Apple Icon" width="32" height="32">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/linux.svg" alt="Linux Icon" width="32" height="32">
                  </div>
                </div>
              </div>
	          </div>
	          <div class="hero-image">
                <picture>
                 <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5003/image.webp">
                 <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5002/tablet-hero2.png">
                 <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5002/image_4.webp" alt="endpoint_protector_ui_image" width="1522" 
                height="1038" >
                </picture>
	          </div>
	        </div>
          <div class="logo-section">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514174/netwrix/5002/svg_3.svg" alt="Samsung Electronics Icon" width="173 height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/svg.svg" alt="ING Icon" width="124" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514170/netwrix/5002/svg_1.svg" alt="Allianz SE Icon" width="162" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514172/netwrix/5002/svg_2.svg" alt="Western Union Icon" width="132" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514177/netwrix/5002/svg_4.svg" alt="eBay Icon" width="133 " height="70">
           </div>
	    </div>`;

    let bodyLoaded = setInterval(() => {
      if (document.querySelector('body') && !document.querySelector('.spz-5003') && document.querySelector(heroSelector)) {
        clearInterval(bodyLoaded)
        document.querySelector('body').classList.add("spz-5003")

        document
          .querySelector(heroSelector)
          .insertAdjacentHTML(whereToPut, formTemplate)
        var heroDetail = document.querySelector('.product_top_box');
        document.querySelector('.content-superheading').insertAdjacentElement('afterend', heroDetail);
        //hidden value
        // Variation Hidden Field Name
        var spzHiddenFieldName = setInterval(() => {
          if (document.querySelectorAll('input[name="SPZ_Test"]').length > 0) {
            clearInterval(spzHiddenFieldName);
            setTimeout(() => {
              document.querySelectorAll('input[name="SPZ_Test"]')[0].value = 'variant_5005';
            }, 1000);
          }
        }, 100);
        // Variation Hidden Field Name over

        document.querySelector('.spz-form-wrap .button-wrapper').addEventListener("click", function (e) {
          if (e.target.closest('a') == document.querySelector('.spz-form-wrap .button-wrapper .button-request-demo')) {
            e.preventDefault();
            document.querySelector('.request_demo_button').click();
          }
          if (e.target.closest('a') == document.querySelector('.spz-form-wrap .button-wrapper .free-trial-wrapper .button-free-trial')) {
            e.preventDefault();
            document.querySelector('.free_trial_button').click()
          }
        })

      }
    })

  }
  addBaseline(
    heroContent, //object with the data
    position, //any value you pass using insertAdjacentHTML
    formSelector, // control form selector
    heroSelector,
    additionalSection
  );
})();


function runCode5005() {
  if (!document.body.classList.contains('spz_5005')) {
    document.body.classList.add('spz_5005');
    let meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute("content", meta.getAttribute("content") + ", user-scalable=no");
    }
    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const template_formUniqueSelector = "#modal-custom-form"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const template_inputsSelectors = ["#modal-custom-form #firstname", "#modal-custom-form #lastname", "#modal-custom-form #email", "#modal-custom-form #phone"]

    //DEV 5/6. Add Form labels below
    const template_labelValues = ["First Name", "Last Name", "Work Email", "Phone"]

    const formLoaded = setInterval(() => {
      if (document.querySelector(template_formUniqueSelector) && document.querySelectorAll(`${template_formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(template_formUniqueSelector);
        animateLabels(template_inputsSelectors, template_labelValues)
      }
    })

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
        checkError();
      });
      input.addEventListener("blur", function () {
        if (input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.remove("focused");
          input.closest(".spz-input-wrap").classList.add("has-value");
        } else {
          input.closest(".spz-input-wrap").classList.remove("focused");
        }
        checkError();
      });
      if (input.value.length < 0) {
        input.closest(".spz-input-wrap").classList.remove("has-value");
      }
    }
    //Helper function to animate labels for inputs
    function animateLabels(inputs, template_labelValues) {
      inputs.forEach((item, index) => {
        const parentDiv = findParent(item);
        if (!parentDiv) return; // Skip if we can't find a suitable parent

        let input = document.querySelector(item);

        // Check if the input is wrapped in another div (e.g., for error states)
        if (input.parentElement !== parentDiv) {
          input = input.parentElement; // Use the wrapper as our insertion point
        }

        // Check if we've already added our custom label
        if (parentDiv.querySelector('.label-spz')) return;

        const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
        if (existingLabel) existingLabel.style.display = 'none';

        const label = document.createElement('label');
        label.innerText = template_labelValues[index];
        label.classList.add('label-spz');
        label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
        label.style.width = '';
        parentDiv.classList.add('spz-input-wrap');

        // Check if the input is a select and the first option has an empty value
        if (input.tagName === 'SELECT' && input.options[0].value === '') {
          parentDiv.classList.add('has-value');
        } else if (input.value) {
          parentDiv.classList.add('has-value');
        }

        label.addEventListener('click', function (e) {
          const actualInput = parentDiv.querySelector('input, select, textarea');
          if (actualInput) actualInput.focus();
        });

        parentDiv.insertBefore(label, input);

        addInputListener(document.querySelector(item));
        document.querySelector(item).setAttribute('placeholder', '');
      });
    }
    function findParent(inputSelector) {
      const input = document.querySelector(inputSelector);
      if (!input) return null;

      let currentElement = input;

      while (currentElement && currentElement.tagName !== 'BODY') {
        // Check if this element contains a label (including hidden ones)
        const label = currentElement.querySelector('label');

        // Check if this element contains the input or its wrapper
        const containsInput = currentElement.contains(input);

        // If we have both a label and the input, this is likely our target
        if (label && containsInput) {
          return currentElement;
        }

        currentElement = currentElement.parentElement;
      }

      // If no suitable parent is found, return the immediate parent
      return input.parentElement;
    }

    // This is the code to generate the form over UI section do no edit it
    function addForm(formSelector) {
      const formTemplate = `
        <div class="spz-form-wrap">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
          <div class="form-section">
\            <div class="the-form"></div>
          </div>
        </div>
        `;
      document.querySelector("#modalFormRequestContainer .contact_request").insertAdjacentHTML(
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
    window.addEventListener("click", function (e) {
      if (e.target.matches('.spz-form-wrap .spz-5005-free-trial-cta')) {
        document.querySelector('#productDTModal .get_demo_title').textContent = 'Get Your Free Trial';
        document.querySelector('#modalFormRequestContainer .spz-form-wrap form .cf-button').value = 'Get my free trial';
        document.querySelector('#modalFormRequestContainer .spz-form-wrap form .cf-button').textContent = 'Get my free trial';
        document.querySelectorAll('.spz-form-wrap .the-form .spz-input-wrap').forEach(wrapper => {
          const input = wrapper.querySelector('input');
          if (input && input.value.length === 0) {
            wrapper.classList.remove("has-value", "focused", "has-error");
          }
        });
      } else if (e.target.matches('.homepage_main_top .request_demo_button') || e.target.matches('#menu_concept_list .product_epp_buttons_button_link_menu') || e.target.matches('.homepage_testimonials .product_call_to_action_wrapper .product_epp_buttons_button_demo') || e.target.matches('.homepage_testimonials .product_call_to_action_wrapper .product_epp_buttons_button_demo a') || e.target.matches('.spz-5005-requst-demo-cta') || e.target.matches('.spz-5005-free-trial-cta') || e.target.matches('.product_epp_buttons_button_link_menu')) {
        updateStates();
      }
    });
    function updateStates() {
      document.querySelector('#productDTModal .get_demo_title').textContent = 'Request Demo';
      document.querySelector('#modalFormRequestContainer .spz-form-wrap form .cf-button').value = 'Request Demo';
      document.querySelector('#modalFormRequestContainer .spz-form-wrap form .cf-button').textContent = 'Request Demo';
      setTimeout(() => {
        document.querySelectorAll('.spz-form-wrap .the-form .spz-input-wrap').forEach(wrapper => {
          const input = wrapper.querySelector('input');
          if (input && input.value.length === 0) {
            wrapper.classList.remove("has-value", "focused", "has-error");
          }
        });
      }, 50);
    }
    function checkError() {
      document.querySelectorAll('.spz-form-wrap .the-form .spz-input-wrap').forEach(wrapper => {
        const input = wrapper.querySelector('input');
        setTimeout(() => {
          if (input && input.style.borderColor === 'rgb(249, 125, 125)') {
            wrapper.classList.add("has-error");
          } else {
            wrapper.classList.remove("has-error");
          }
        }, 100);
      });
    }
    setTimeout(() => {
      document.querySelector('.product_dt_modal_c_form_container .form_request_container').insertAdjacentElement('afterbegin', document.querySelector('.product_dt_modal_h_close'));
      document.querySelector('#productDTModal .cf-privacy-policy-notice').innerHTML = `*Your privacy is important to us. <br> Check out our <a href="https://www.endpointprotector.com/legal/privacy-policy" target="_blank">Privacy Policy</a> for more information.`;
    }, 500);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '5005';
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

// Check condition and initialize the code
const checkCondition5005 = setInterval(() => {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(checkCondition5005);
    runCode5005();
  }
}, 100);
