function loadTestCode9001() {
  if (!document.querySelector("body").classList.contains("spz_t9001")) {
    document.querySelector("body").classList.add("spz_t9001");
    setTimeout(() => {
      var formTitle;
      if (window.location.href.includes("product_online_demo.html")) {
        formTitle = "Netwrix Auditor";
      } else if (window.location.href.includes("netwrix_data_classification_online_demo.html")) {
        document.querySelector("body").classList.add("data_classification");
        formTitle = "Netwrix Data Classification";
      } else if (window.location.href.includes("netwrix-usercube-product-tour.html")) {
        document.querySelector("body").classList.add("usercube");
        formTitle = "Netwrix Usercube";
      } else if (window.location.href.includes("data_access_governance_online_demo.html")) {
        document.querySelector("body").classList.add("data_access");
        formTitle = "Netwrix Enterprise Auditor";
      } else if (window.location.href.includes("password_policy_product_tour.html")) {
        document.querySelector("body").classList.add("password_policy");
        formTitle = "Password Policy Enforcer </br>";
      }
      //DEV 2/6. Add content inside the box
      const formElements = {
        customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form_heading">
          <h2> ${formTitle} Online Demo</h2>
        </div> 
      `,
        customHTMLAfter: `
        ${ /*This html goes after the form button. To make empty, set as. */''}
        <div class="securityInfo">  
          We care about the security of your data.
          <a href="https://www.netwrix.com/privacy.html" target="_blank" class="privacyLink"> Privacy Policy</a>
        </div>
        `,
      };

      //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. ".form-horizontal_123456" or ".form_123456"
      const formUniqueSelector = ".form-horizontal"
      let inputsSelectors = [];
      let labelValues = [];
      //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
      if (window.location.href.includes("password_policy_product_tour.html") || window.location.href.includes("netwrix-usercube-product-tour.html")) {
        inputsSelectors = ["#ModalForm_nwf_fname", "#ModalForm_nwf_lname", "#ModalForm_nwf_email", "#ModalForm_account_type", "#ModalForm_nwf_nsrv", "#ModalForm_nwf_phone"]

        //DEV 5/6. Add Form labels below
        labelValues = ["First Name", "Last Name", "Work Email", "Organization Type", "# of Employees", "Phone"]
      } else if (window.location.href.includes("product_online_demo.html") || window.location.href.includes("netwrix_data_classification_online_demo.html") || window.location.href.includes("data_access_governance_online_demo.html")) {
        inputsSelectors = ["#ModalForm_nwf_fname", "#ModalForm_nwf_lname", "#ModalForm_nwf_email", "#ModalForm_nwf_phone"]

        //DEV 5/6. Add Form labels below
        labelValues = ["First Name", "Last Name", "Work Email", "Phone"]
      }

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
        document.querySelector('.overlay-form').insertAdjacentHTML(
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
            let input = item.querySelector('input');
            let select = item.querySelector('select');
            if ((input && input.value.length > 0) || (select && select.value !== "")) {
              item.classList.add('has-value');
            }
          }
        });
      }
      function updateStates() {
        document.querySelectorAll('.spz-form-wrap .the-form .spz-input-wrap').forEach(wrapper => {
          const input = wrapper.querySelector('input');
          if (input && input.value.length === 0) {
            wrapper.classList.remove("has-value", "focused", "has-error");
          }
        });
      }

      setTimeout(() => {
        updateStates();
        if (document.querySelector('.form-horizontal input[type="submit"]')) {
          document.querySelector('.form-horizontal input[type="submit"]').value = 'Instant Access';
        }
        if (document.querySelector("#ModalForm_account_type")) {
          console.log('Account type found');
          document.querySelector("#ModalForm_account_type").options[0].text = "Organization Type";
        } else {
          console.log('No account type found');
        }
      }, 100);



      // obeserv the form error class 
      const targetNode = document.querySelector('.form-horizontal');
      const config = { attributes: true, childList: true, subtree: true, attributeFilter: ['value'] };

      const callback = (mutationList, observer) => {
        addClass();
        console.log('observer');
        const submitButton = document.querySelector('.form-horizontal input[type="submit"]');
        if (submitButton) {
          if (submitButton.value === "Launch In-Browser Tour") {
            submitButton.classList.add('spz_9001_v1');
            submitButton.value = "Instant Access";
          }
        }
        if (document.querySelector('html').classList.contains('is-clipped')) {
          document.querySelector('html').classList.remove('is-clipped');
        }
      };

      // Observe the form for changes
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);

      // Also observe the submit button's value changes
      const submitButton = document.querySelector('.form-horizontal input[type="submit"]');
      if (submitButton) {
        const buttonObserver = new MutationObserver(callback);
        buttonObserver.observe(submitButton, { attributes: true, attributeFilter: ['value'] });
      }

      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      //exptName should be #1001, #1002, #1003 etc.
      const expName = '9001';
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
    }, 300);
  }
}

var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode9001();
  }
}, 100);
