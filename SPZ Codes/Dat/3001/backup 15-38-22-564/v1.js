function loadTestCode7001() {
  if (!document.querySelector("body").classList.contains("spz_t7001")) {
    document.querySelector("body").classList.add("spz_t7001");
    document.querySelector('body > div[style="display: none;"]').classList.add("spz_formOuter");
    document.querySelector('body > div[style="display: none;"] form').classList.add("spz_form");
    document.querySelector(".spz_formOuter .form-title").textContent = "Contact Us";
    //DEV 1/6. Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208168040022966/f`;
    //DEV 2/6. Add content inside the box


    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".spz_form"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const inputsSelectors = [".spz_form #ModalForm_nwf_fname", ".spz_form #ModalForm_nwf_lname", ".spz_form #ModalForm_nwf_email", ".spz_form #ModalForm_account_type", ".spz_form #ModalForm_nwf_nsrv", ".spz_form #ModalForm_nwf_phone", ".spz_form #ModalForm_message"]

    //DEV 5/6. Add Form labels below
    const labelValues = ["First Name", "Last Name", "Business Email", "User Type", "Number of Employees", "Direct Phone", "What is your business or technical challenge?"]

    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        animateLabels(inputsSelectors, labelValues);
      }
    });

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
        input.setAttribute('placeholder', '')
      });
    }
    //Helper function to find parent div of input or select element
    function findParent(elementSelector) {
      let element = document.querySelector(elementSelector);
      let wrapper = element.closest("div"); //define parent's tag name
      if (
        (wrapper.innerHTML.includes("<input") ||
          wrapper.innerHTML.includes("<select")) ||
        wrapper.innerHTML.includes("<textarea")
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
    function addClass() {
      window.addEventListener('click', (e) => {
        if (e.target.matches(('.head-cont h1 + p + .cta-links-block .btn-red-outline') || e.target.matches('header .navbar-item .btn-red-outline'))) {
          e.preventDefault();
          document.querySelector('body').classList.add('show');
          document.querySelector('.spz_formOuter').style.display = 'block';
        }
      });
      document.querySelectorAll('.spz_form > div:not(.modelFormError)').forEach((item) => {
        if (!item.classList.contains('spz-input-wrap')) {
          item.classList.add('spz-input-wrap');
        }
        const input = item.querySelector('input, textarea, select');
        if (input && input.value.length > 0) {
          if (!item.classList.contains("has-value")) {
            item.classList.add("has-value");
          }
        } else {
          if (item.classList.contains("has-value")) {
            item.classList.remove("has-value");
          }
        }
      });
    }
    document.querySelector('.spz_form #ModalForm_nwf_email').placeholder = "Email";

    // change positions 
    setTimeout(() => {
      document.querySelector('.spz_formOuter .close').insertAdjacentHTML('afterbegin', `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="12" fill="#66BCFF" fill-opacity="0.14"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.3808L16.149 7.23179C16.4581 6.92274 16.9591 6.92274 17.2682 7.23179C17.5773 7.54085 17.5773 8.04194 17.2682 8.351L13.1192 12.5L17.2682 16.649C17.5773 16.9581 17.5773 17.4591 17.2682 17.7682C16.9591 18.0773 16.4581 18.0773 16.149 17.7682L12 13.6192L7.851 17.7682C7.54194 18.0773 7.04085 18.0773 6.73179 17.7682C6.42274 17.4591 6.42274 16.9581 6.73179 16.649L10.8808 12.5L6.73179 8.351C6.42274 8.04194 6.42274 7.54085 6.73179 7.23179C7.04085 6.92274 7.54194 6.92274 7.851 7.23179L12 11.3808Z" fill="#66BCFF"></path>
        </svg>
      `);
      document.querySelector('.spz_form #ModalForm_nwf_fname').closest('.spz-input-wrap').insertAdjacentElement('beforebegin', document.querySelector('.spz_form #ModalForm_account_type').closest('.spz-input-wrap'));
      document.querySelector('.spz_form #ModalForm_account_type').closest('.spz-input-wrap').insertAdjacentElement('afterend', document.querySelector('.spz_form #ModalForm_nwf_nsrv').closest('.spz-input-wrap'));
    }, 1500);
    document.querySelector('.spz_form .modelFormSubmit').classList.add('spz7001-cta-submit');
    document.querySelector('header .navbar-item .btn-red-outline').classList.add('spz7001-cta-submit');
    document.querySelector('.spz_form .spz7001-cta-submit').value = "Submit";
    window.addEventListener('click', (e) => {
      if (e.target.matches('.head-cont h1 + p + .cta-links-block .btn-red-outline') || e.target.matches('header .navbar-item .btn-red-outline')) {
        e.preventDefault();
        document.querySelector('body').classList.add('show');
        document.querySelector('.spz_formOuter').style.display = 'block';
      }
      if (e.target.matches(('.spz_formOuter .close')) || e.target.matches('.v-modal-wrapper') || e.target.matches('body')) {
        document.querySelector('body').classList.remove('show');
        document.querySelector('.spz_formOuter').style.display = 'none';
      }
    });
    //obeserv the form error class 
    const targetNode = document.querySelector('.spz_form');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      addClass();
      //button
      if (document.querySelector('.spz_form .spz7001-cta-submit').value == "Contact Our Experts") {
        document.querySelector('.spz_form .spz7001-cta-submit').value = "Submit"
      }
      if (document.querySelector('html').classList.contains('is-clipped')) {
        document.querySelector('html').classList.remove('is-clipped')
      }
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '7001';
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
    loadTestCode7001();
  }
}, 100);
