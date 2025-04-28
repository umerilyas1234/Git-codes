const setCookieTest = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
const getCookieTest = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
const combineWord = (wordArray) => {
  let myString = "";
  myString = wordArray.join(", ")
  if (wordArray.length == 2) {
    myString = myString.replace(", ", " and ");
  }
  if (wordArray.length > 2) {
    myString = myString.replace(", " + wordArray[wordArray.length - 1], ", and " + wordArray[wordArray.length - 1]);
  }
  return myString;
}

function loadTestCode2006() {
  if (!document.querySelector("body").classList.contains("spz_t2008")) {
    document.querySelector("body").classList.add("spz_t2008");
    setTimeout(() => {
      const containerIndex = document.querySelector('.cookie-information-cont') ? 6 : 5;
      document.querySelector(`.spz_t2008 > div:nth-of-type(${containerIndex}) form`).classList.add("spz_form");
      //DEV 1/6. Put your asana task URL here
      const asana_URL = `https://app.asana.com/0/1199937683692504/1208707507041619/f`;
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
								<div class="qlf-form">
										<h2 class="qlf-title">Get a demo</h2>
										<p class="qlf-subtitle">Which solution(s) are you interested in?</p>
										<div class="step-inner-wrapper">
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle1" name="checkbox_item1" id="checkbox_item_1" value="Data Discovery & Classification">
														<label for="checkbox_item_1">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/data-discovery_icon.svg" alt="Data Discovery & Classification">
																<span>Data Discovery & Classification</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle2" name="checkbox_item2" id="checkbox_item_2" value="Data Security Posture Management">
														<label for="checkbox_item_2">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623251/netwrix/2006/data-security_icon.svg" alt="Data Security Posture Management">
																<span>Data Security Posture Management</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle3" name="checkbox_item3" id="checkbox_item_3" value="Data Loss Prevention">
														<label for="checkbox_item_3">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/data-loss_icon.svg" alt="Data Loss Prevention">
																<span>Data Loss <br> Prevention</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle4" name="checkbox_item4" id="checkbox_item_4" value="Endpoint Security & Management">
														<label for="checkbox_item_4">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/endpoint-security_icon.svg" alt="Endpoint Security & Management">
																<span>Endpoint Security & Management</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle5" name="checkbox_item5" id="checkbox_item_5" value="Security Configuration Management">
														<label for="checkbox_item_5">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/security-configuration_icon.svg" alt="Security Configuration Management">
																<span>Security Configuration Management</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6" id="checkbox_item_6" value="Identity Governance & Administration">
														<label for="checkbox_item_6">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/identity-governance_icon.svg" alt="Identity Governance & Administration">
																<span>Identity Governance & Administration</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle7" name="checkbox_item7" id="checkbox_item_7" value="Privileged Access Management">
														<label for="checkbox_item_7">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/privileged-access_icon.svg" alt="Privileged Access Management">
																<span>Privileged Access Management</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle8" name="checkbox_item8" id="checkbox_item_8" value="Active Directory Security">
														<label for="checkbox_item_8">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/active-directory_icon.svg" alt="Active Directory Security">
																<span>Active Directory Security</span>
														</label>
												</div>
												<div class="steps-control">
														<input type="checkbox" class="SPZ_QualifyingQuestionsTitle9" name="checkbox_item9" id="checkbox_item_9" value="Password Security & Management">
														<label for="checkbox_item_9">
																<img src="//res.cloudinary.com/spiralyze/image/upload/v1732623252/netwrix/2006/password_security-icon.svg" alt="Password Security & Management">
																<span>Password Security & Management</span>
														</label>
												</div>
										</div>
										<div class="error-message"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<g clip-path="url(#clip0_24125_685)">
												<path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</g>
												<defs>
												<clipPath id="clip0_24125_685">
														<rect width="16" height="16" fill="white"></rect>
												</clipPath>
												</defs>
										</svg> <span>Please select at least one solution</span></div>
										<div class="qlf-cta SPZ_QualifyingQuestionsCTA">Next</div>
								</div>
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
        document.body.insertAdjacentHTML(
          "beforeend",
          formTemplate
        ); /*Insert spz-form-wrap before closing body tag*/

        if (document.cookie.includes('Data Security Posture Management')) {
          document.querySelector('#checkbox_item_2').click();
        }
        if (document.cookie.includes('Endpoint Data Loss Prevention')) {
          document.querySelector('#checkbox_item_3').click();
        }
        if (document.cookie.includes('Active Directory Security')) {
          document.querySelector('#checkbox_item_8').click();
        }
        if (document.cookie.includes('Privileged Access Management')) {
          document.querySelector('#checkbox_item_7').click();
        }
        if (document.cookie.includes('Identity Governance  & Administration')) {
          document.querySelector('#checkbox_item_6').click();
        }
        if (document.cookie.includes('Endpoint Management & Security')) {
          document.querySelector('#checkbox_item_4').click();
        }
        if (document.cookie.includes('Password Management & Security')) {
          document.querySelector('#checkbox_item_9').click();
        }

        document.querySelector('.qlf-cta').addEventListener('click', () => {
          if (document.querySelectorAll('.step-inner-wrapper input:checked').length > 0) {
            document.querySelector('body').classList.add('step-2-hide');
            const checkBoxValue = [];
            document.querySelectorAll('.steps-control input[type="checkbox"]:checked').forEach((e) => {
              checkBoxValue.push("" + e.value);
            });
            setCookieTest("spz2006CheckBoxValue", combineWord(checkBoxValue), 1)
            if (getCookieTest("spz2006CheckBoxValue")) {
              for (let i = 0; i < document.querySelectorAll('.form-wrapper-2 #exp_product_spz').length; i++) {
                document.querySelectorAll('.form-wrapper-2 #exp_product_spz')[i].value = getCookieTest("spz2006CheckBoxValue");
              }
            }
          } else {
            document.querySelector('.error-message').classList.add('active');
          }
        });
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


      // hide fields on start
      function formUpdates() {

        const fieldsToHide = ['.spz_form #ModalForm_nwf_nsrv', '.spz_form #ModalForm_nwf_phone'];
        fieldsToHide.forEach(selector => {
          document.querySelector(selector).classList.add('hide');
        });

        // Function to handle validation and field visibility
        function handleValidation() {
          const firstName = document.querySelector('.spz_form #ModalForm_nwf_fname').value;
          const lastName = document.querySelector('.spz_form #ModalForm_nwf_lname').value;
          const email = document.querySelector('.spz_form #ModalForm_nwf_email').value;
          const accountType = document.querySelector('.spz_form #ModalForm_account_type').value;

          // Validate email format
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          const emailValid = emailPattern.test(email);

          // Check if all required fields are filled and email is valid
          if (firstName !== '' && lastName !== '' && email !== '' && accountType !== '' && emailValid) {
            // Select the elements to unhide
            const fieldsToShow = ['.spz_form #ModalForm_nwf_nsrv', '.spz_form #ModalForm_nwf_phone'];
            // const filedToRemoveError = ['.spz_form #ModalForm_nwf_nsrv', '.spz_form #ModalForm_nwf_phone'];

            fieldsToShow.forEach(selector => {
              const fieldWrap = document.querySelector(selector);
              if (fieldWrap.classList.contains('hide')) {
                fieldWrap.classList.remove('hide');
                document.querySelector('.spz_form').classList.add('formProgressive');
              }
              // filedToRemoveError.forEach(selector => {
              // 	const field = document.querySelector(selector);
              // 	if (field) {
              // 		const inputWrap = field.closest('.spz-input-wrap');
              // 		if (inputWrap && inputWrap.classList.contains('error')) {
              // 			inputWrap.classList.remove('error');
              // 		}
              // 	}
              // });
            });
          }
        }
        document.querySelector('.spz_form #ModalForm_nwf_email').addEventListener('blur', function () {
          if (!document.querySelector('.formProgressive')) {
            const email = this.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            const emailValid = emailPattern.test(email);

            if (!emailValid && email !== '') {
              // If the email is invalid, keep showing the error
              showError('Valid email required.');
            } else {
              console.log('Valid email');
              removeError();
            }
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
            input.value = 'variant_2008';
          });
        }
      }
      window.addEventListener('click', function (e) {
        if (e.target.matches('.spz_form .modelFormSubmit')) {
          setTimeout(() => {
            const errorElem = document.querySelector('.form_outer .modelFormError');
            const formEl = document.querySelector('.spz_form');
            const accountType = formEl.querySelector('.spz_form #ModalForm_account_type')?.value || '';
            const nsrvSelect = formEl.querySelector('.spz_form #ModalForm_nwf_nsrv');
            const phoneInput = formEl.querySelector('.spz_form #ModalForm_nwf_phone').value;
            const selectedValue = nsrvSelect.value.trim().toLowerCase();
            if (!formEl.classList.contains('formProgressive') && errorElem && errorElem.textContent.includes('Number of Employees')) {
              errorElem.textContent = errorElem.textContent.replace('Number of Employees', 'Email');
            } else if (!formEl.classList.contains('formProgressive') && accountType === '' && errorElem && errorElem.textContent.includes('Email')) {
              errorElem.textContent = errorElem.textContent.replace('Email', 'User type');
            } else if (formEl.classList.contains('formProgressive') && nsrvSelect && selectedValue === '' || selectedValue.includes('select')) {
              errorElem.textContent = 'Number of employees cannot be blank.';
            } else if (formEl.classList.contains('formProgressive') && document.querySelector('.spz_form #ModalForm_nwf_phone').value == '') {
              errorElem.textContent = 'Direct phone cannot be blank.';
            }
          }, 900);
        }
      });

      function showError(message, item) {
        document.querySelector('.spz_form #ModalForm_nwf_email').classList.add('email_error');
        let errorMsg = document.querySelector('.spz_form .error-message');
        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M2.67481 13.9453H13.3267C13.4997 13.9453 13.6697 13.9004 13.8202 13.815C13.9706 13.7296 14.0964 13.6066 14.1851 13.458C14.2738 13.3095 14.3224 13.1405 14.3263 12.9675C14.3301 12.7946 14.289 12.6236 14.207 12.4712L8.88137 2.58062C8.50356 1.87937 7.49793 1.87937 7.12012 2.58062L1.7945 12.4712C1.71248 12.6236 1.67139 12.7946 1.67523 12.9675C1.67908 13.1405 1.72773 13.3095 1.81644 13.458C1.90514 13.6066 2.03086 13.7296 2.18132 13.815C2.33177 13.9004 2.5018 13.9453 2.67481 13.9453Z" stroke="#DF0000" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M7.82043 6.10636L7.99981 9.91886L8.17887 6.10792C8.17998 6.08356 8.1761 6.05922 8.16749 6.03641C8.15887 6.01359 8.14569 5.99278 8.12876 5.97523C8.11182 5.95768 8.09149 5.94377 8.06899 5.93434C8.0465 5.92492 8.02232 5.92018 7.99793 5.92042C7.97397 5.92065 7.9503 5.92569 7.92832 5.93522C7.90634 5.94475 7.88649 5.95859 7.86994 5.97593C7.8534 5.99326 7.84049 6.01373 7.83199 6.03613C7.82348 6.05853 7.81956 6.08241 7.82043 6.10636Z" stroke="#DF0000" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M8 12.4141C7.87639 12.4141 7.75555 12.3774 7.65277 12.3087C7.54999 12.2401 7.46988 12.1424 7.42258 12.0282C7.37527 11.914 7.36289 11.7884 7.38701 11.6671C7.41113 11.5459 7.47065 11.4345 7.55806 11.3471C7.64547 11.2597 7.75683 11.2002 7.87807 11.1761C7.99931 11.152 8.12497 11.1643 8.23918 11.2116C8.35338 11.2589 8.45099 11.339 8.51967 11.4418C8.58834 11.5446 8.625 11.6654 8.625 11.7891C8.625 11.9548 8.55915 12.1138 8.44194 12.231C8.32473 12.3482 8.16576 12.4141 8 12.4141Z" fill="#DF0000"></path>
					</svg>`;


        if (!errorMsg) {
          errorMsg = document.createElement('div');
          errorMsg.className = 'error-message active';
          errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
          document.querySelector('.spz_form #ModalForm_nwf_email').closest('.spz-input-wrap').insertAdjacentElement("beforeend", errorMsg);
        }
      }

      function removeError() {
        document.querySelector('.spz_form #ModalForm_nwf_email').classList.remove('email_error');
        const errorMsg = document.querySelector('.spz_form .error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      }

      setTimeout(() => {
        document.querySelector('.form_outer').style.display = 'flex';
        document.querySelector('.form_outer #ModalForm_product').value = '';
        document.querySelector('.form_outer #ModalForm_product').setAttribute('value', '');
        // animateLabels(inputsSelectors, labelValues);
        // document.querySelector('.spz_form #SPZ_Test').value = 'variant_2006';
      }, 1000);

      // adding caption
      //obeserv the form error class 
      const targetNode = document.querySelector('.spz_form');
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationList, observer) => {
        addClass();
        // hideFields();
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
      const expName = '2008';
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

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2006();
  }
}, 100);
