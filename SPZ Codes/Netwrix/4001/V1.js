function loadTestCode4001() {
  if (!document.querySelector("body").classList.contains("spz_t4001")) {
    document.querySelector("body").classList.add("spz_t4001");
    //DEV 2/6. Add content inside the box
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form_heading">
          <h2>Contact Us</h2>
        </div> 
      `,
      customHTMLAfter: `
        ${ /*This html goes after the form button. To make empty, set as. */''}
        <div class="securityInfo">  
          Visit our 
          <a href="https://www.netwrix.com/support.html" class="privacyLink"> Technical Support </a> page.
        </div>
        `,
    };

    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = "#contactUsForm"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const inputsSelectors = ["#ContactUsForm_nwf_fname", "#ContactUsForm_nwf_lname", "#ContactUsForm_nwf_email", "#ContactUsForm_category", "#ContactUsForm_nwf_phone", "#ContactUsForm_nwf_nsrv", "#ContactUsForm_message"]

    //DEV 5/6. Add Form labels below
    const labelValues = ["First Name", "Last Name", "Email", "Inquiry Type", "Phone", "# of Employees", "Comments"]

    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        animateLabels(inputsSelectors, labelValues);
        formUpdates();
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

        label.classList.add(`label-spz-${item}`);
        label.style.width = "";
        parentDiv.classList.add("spz-input-wrap");

        label.addEventListener("click", function (e) {
          e.target.nextElementSibling.focus();
        });
        parentDiv.appendChild(label, input);
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
      let wrapper = document.createElement("div");
      element.insertAdjacentElement("afterend", wrapper);
      wrapper.appendChild(element);

      if (
        (wrapper.innerHTML.includes("<input") ||
          wrapper.innerHTML.includes("<select") ||
          wrapper.innerHTML.includes("<textarea"))
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
            </div>
            </div>
          </div>
          `;
      document.querySelector('.contact-cont>.container').insertAdjacentHTML(
        "afterend",
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
      document.querySelectorAll('#contactUsForm .inner-wrapper > div:not(.modelFormError, .inner-wrapper, .g-recaptcha)').forEach((item) => {
        if (!item.classList.contains('spz-input-wrap')) {
          item.classList.add('spz-input-wrap');
          console.log(item);
          let input = item.querySelector('input');
          let select = item.querySelector('select');
          if ((input && input.value.length > 0) || (select && select.value !== "")) {
            item.classList.add('has-value');
          }
        }
      });
    }

    function formUpdates() {


      // animateLabels(inputsSelectors, labelValues);
      let selectBox = document.querySelector("#ContactUsForm_category");
      if (selectBox && selectBox.options.length > 0) {
        selectBox.options[0].text = "Inquiry Type"; // Change text of first option
      }

      const fieldsToHide = ['#ContactUsForm_nwf_phone', '#ContactUsForm_nwf_nsrv', '#ContactUsForm_message'];
      fieldsToHide.forEach(selector => {
        document.querySelector(selector).closest('.spz-input-wrap').classList.add('hide');
      });

      // Function to handle validation and field visibility
      function handleValidation() {
        const firstName = document.querySelector('#ContactUsForm_nwf_fname').value;
        const lastName = document.querySelector('#ContactUsForm_nwf_lname').value;
        const email = document.querySelector('#ContactUsForm_nwf_email').value;
        const category = document.querySelector('#ContactUsForm_category').value;

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        // Check if all required fields are filled and email is valid
        if (firstName !== '' && lastName !== '' && email !== '' && category !== '') {
          // Select the elements to unhide
          const fieldsToShow = ['#ContactUsForm_nwf_phone', '#ContactUsForm_nwf_nsrv', '#ContactUsForm_message'];

          fieldsToShow.forEach(selector => {
            const fieldWrap = document.querySelector(selector).closest('.spz-input-wrap');
            if (fieldWrap.classList.contains('hide')) {
              fieldWrap.classList.remove('hide');
              document.querySelector('.spz-input-wrap').classList.add('formProgressive');
            }
          });
          if (!emailValid && email !== '' && email.includes('@')) {
            showError('Valid email required.');
          } else if (emailValid) {
            removeError();
          }
          console.log('all fields filled');
        }
      }
      document.querySelector('#ContactUsForm_nwf_email').addEventListener('blur', function () {
        const email = this.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        if (!emailValid && email !== '') {
          // If the email is invalid, keep showing the error
          showError('Valid email required.');
        } else {
          removeError();
        }
      });

      // Attach event listeners to input and select elements
      document.querySelectorAll('.spz-input-wrap input, .spz-input-wrap select').forEach(input => {
        input.addEventListener('keyup', handleValidation);
        input.addEventListener('change', handleValidation);
      });
      handleValidation();

      if (document.querySelector('input#SPZ_Test')) {
        document.querySelectorAll('input#SPZ_Test').forEach((input) => {
          input.value = 'variant_4001';
        });
      }
      // change position
      document.querySelector('#ContactUsForm_nwf_email').closest('.spz-input-wrap').insertAdjacentElement('afterend', document.querySelector('#ContactUsForm_category').closest('.spz-input-wrap'));
      document.querySelector('#ContactUsForm_nwf_phone').closest('.spz-input-wrap').insertAdjacentElement('afterend', document.querySelector('#ContactUsForm_nwf_nsrv').closest('.spz-input-wrap'));
    }

    function showError(message, item) {
      document.querySelector('#ContactUsForm_nwf_email').classList.add('email_error');
      let errorMsg = document.querySelector('.error-message');
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.67481 13.9453H13.3267C13.4997 13.9453 13.6697 13.9004 13.8202 13.815C13.9706 13.7296 14.0964 13.6066 14.1851 13.458C14.2738 13.3095 14.3224 13.1405 14.3263 12.9675C14.3301 12.7946 14.289 12.6236 14.207 12.4712L8.88137 2.58062C8.50356 1.87937 7.49793 1.87937 7.12012 2.58062L1.7945 12.4712C1.71248 12.6236 1.67139 12.7946 1.67523 12.9675C1.67908 13.1405 1.72773 13.3095 1.81644 13.458C1.90514 13.6066 2.03086 13.7296 2.18132 13.815C2.33177 13.9004 2.5018 13.9453 2.67481 13.9453Z" stroke="#DF0000" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7.82043 6.10636L7.99981 9.91886L8.17887 6.10792C8.17998 6.08356 8.1761 6.05922 8.16749 6.03641C8.15887 6.01359 8.14569 5.99278 8.12876 5.97523C8.11182 5.95768 8.09149 5.94377 8.06899 5.93434C8.0465 5.92492 8.02232 5.92018 7.99793 5.92042C7.97397 5.92065 7.9503 5.92569 7.92832 5.93522C7.90634 5.94475 7.88649 5.95859 7.86994 5.97593C7.8534 5.99326 7.84049 6.01373 7.83199 6.03613C7.82348 6.05853 7.81956 6.08241 7.82043 6.10636Z" stroke="#DF0000" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 12.4141C7.87639 12.4141 7.75555 12.3774 7.65277 12.3087C7.54999 12.2401 7.46988 12.1424 7.42258 12.0282C7.37527 11.914 7.36289 11.7884 7.38701 11.6671C7.41113 11.5459 7.47065 11.4345 7.55806 11.3471C7.64547 11.2597 7.75683 11.2002 7.87807 11.1761C7.99931 11.152 8.12497 11.1643 8.23918 11.2116C8.35338 11.2589 8.45099 11.339 8.51967 11.4418C8.58834 11.5446 8.625 11.6654 8.625 11.7891C8.625 11.9548 8.55915 12.1138 8.44194 12.231C8.32473 12.3482 8.16576 12.4141 8 12.4141Z" fill="#DF0000"></path>
        </svg>`;


      if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
        document.querySelector('#ContactUsForm_nwf_email').closest('.spz-input-wrap').insertAdjacentElement("beforeend", errorMsg);
      }
    }

    function removeError() {
      document.querySelector('#ContactUsForm_nwf_email').classList.remove('email_error');
      const errorMsg = document.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }

    document.querySelectorAll('#contactUsForm select').forEach(select => {
      if (select.options.length > 0) {
        select.options[0].disabled = true;
      }
    });

    // obeserv the form error class 
    const targetNode = document.querySelector('#contactUsForm');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      addClass();
      //button
      if (document.querySelector('#contactUsForm .btn_filled_dark_blue').value == "Send Message") {
        document.querySelector('#contactUsForm .btn_filled_dark_blue').classList.add('spz2002-cta-submit');
        document.querySelector('#contactUsForm .btn_filled_dark_blue').value = "Submit";
      }

      if (document.querySelector('#contactUsForm .modelFormError').textContent == "Category cannot be blank.") {
        var errorElement = document.querySelector('#contactUsForm .modelFormError');
        var errorText = errorElement.textContent;
        var updatedErrorText = errorText.replace(/Category/i, "Inquiry Type");
        errorElement.textContent = updatedErrorText;
      }
      if (document.querySelector('html').classList.contains('is-clipped')) {
        document.querySelector('html').classList.remove('is-clipped')
      }

    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    setTimeout(() => {
      document.querySelector('.main-container').insertAdjacentHTML('afterend', `<div class="hero_main"></div>`);
      document.querySelector('.hero_main').insertAdjacentElement('beforeend', document.querySelector('.main-container'));
      var privacyElement = document.querySelector('.the-form .privacy');
      var updatedHTML = privacyElement.innerHTML.replace(/about security(?![^<]*>)/i, "about the security");
            if (!updatedHTML.trim().endsWith(".")) {
        updatedHTML += ".";
      }
      privacyElement.innerHTML = updatedHTML;    
    }, 100);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '4001';
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

var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0 && document.querySelectorAll("#contactUsForm").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode4001();
  }
}, 10);
