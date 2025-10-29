function bill5004() {
  if (!document.body.classList.contains("spz_5004_v1")) {
      document.body.classList.add("spz_5004_v1");

      const template_formElements = {
          customHTMLBefore: `<h2 class="spz__form-title">Get a demo</h2>`, customHTMLAfter: `
              <div class="spz__form-disclaimer">
                  By continuing, you agree to BILL&apos;s 
                  <a class="spz__form-disclaimer__link" href="/legal/terms-of-service" target="_blank">Terms of Service</a> 
                  and 
                  <a class="spz__form-disclaimer__link" href="/privacy" target="_blank">Privacy Notice</a>.
              </div>
          `,
      };

      const template_formUniqueSelector = "#wf-form-Demo-Product-Interest"

      const template_inputsSelectors = ["#firstName", "#lastName", "#email", "#phone", "#name", "#numberOfEmployees", "select#signupType", "#accountingSoftware", "#msDynamicsOption"];

      const template_labelValues = ["First Name", "Last Name", "Work Email", "Phone Number", "Company Name", "Number of Employees", "Business Type", "Which accounting software do you use?", "Select your MS Dynamics solution"];

      const formLoaded = setInterval(() => {
          if (document.querySelector(template_formUniqueSelector) && document.querySelectorAll(`${template_formUniqueSelector} input`).length > 0) {
              clearInterval(formLoaded);
              addForm(template_formElements, template_formUniqueSelector);
              animateLabels(template_inputsSelectors, template_labelValues)
              prepareInitialFormState();
          }
      })

      function updateTrackingField() {
          const key = 'bdcAbTest13';
          const value = '5003-con';
          localStorage.setItem(key, value);
      }

      function wrapInputInParent(input) {
          const parent = document.createElement('div');
          input.parentElement.insertAdjacentElement('beforeend', parent);
          parent.appendChild(input);
      }

      function showEmailErrorMessage(message) {
          const warningIcon = `
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.29308 7.34616C9.49661 7.54154 9.75305 7.63924 10.0624 7.63924C10.3718 7.63924 10.6242 7.53747 10.8195 7.33394C11.0231 7.13041 11.1248 6.87804 11.1248 6.57682C11.1248 6.25932 11.0231 6.00287 10.8195 5.80748C10.6242 5.6121 10.3718 5.5144 10.0624 5.5144C9.75305 5.5144 9.49661 5.6121 9.29308 5.80748C9.09769 6.00287 9 6.25932 9 6.57682C9 6.88618 9.09769 7.14263 9.29308 7.34616ZM9.07327 14.4778C9.10583 14.5022 9.14247 14.5144 9.18318 14.5144H10.9172C10.9579 14.5144 10.9905 14.5022 11.0149 14.4778C11.0475 14.4452 11.0638 14.4086 11.0638 14.3679V8.34751C11.0638 8.30681 11.0475 8.27424 11.0149 8.24982C10.9905 8.21725 10.9579 8.20097 10.9172 8.20097H9.18318C9.14247 8.20097 9.10583 8.21725 9.07327 8.24982C9.04885 8.27424 9.03663 8.30681 9.03663 8.34751V14.3679C9.03663 14.4086 9.04885 14.4452 9.07327 14.4778Z" fill="#B32820"></path>
                                          </svg>
                                      `;
          const arrowIcon = `
                                          <svg fill="none" height="6" viewBox="0 0 12 6" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#EEF0F1"></path></svg>
                                    `;
          const emailField = document.querySelector('#email');
          if (!emailField) return;
          const parentDiv = emailField.parentElement;
          let errorMessage = parentDiv.querySelector('.spz__error-message');
          if (!errorMessage) {
              errorMessage = document.createElement('div');
              errorMessage.classList.add('spz__error-message');
              parentDiv.appendChild(errorMessage);
          }
          errorMessage.innerHTML = `${warningIcon} <span>${message}</span> ${arrowIcon}`;
          emailField.style.border = '1px solid #B32820';

      }

      function removeEmailErrorMessage() {
          const emailField = document.querySelector('#email');
          if (!emailField) return;
          emailField.style.border = '';
          if (emailField.parentElement.querySelector('.spz__error-message')) {
              emailField.parentElement.querySelector('.spz__error-message').remove();
          }
      }

      function shouldHideForm() {
          const localStorageItem = localStorage.getItem('bdcUserData');
          if (localStorageItem) {
              const userData = JSON.parse(localStorageItem);
              return !userData && !userData.firstName && !userData.lastName && !userData.name && !userData.email;
          }
          return true;
      }

      function prepareInitialFormState() {
          // interchange the company name and phoneNumber inputs
          const companyNameInput = document.querySelector("#name");
          const phoneNumberInput = document.querySelector("#phone");
          if (companyNameInput && phoneNumberInput) {
              const companyNameParent = companyNameInput.parentElement.parentElement;
              const phoneNumberParent = phoneNumberInput.parentElement.parentElement;
              companyNameParent.insertAdjacentElement('afterbegin', phoneNumberInput.parentElement);
              phoneNumberParent.insertAdjacentElement('beforeend', companyNameInput.parentElement);
          }

          // hide form sections
          const sectionToHideOne = document.querySelector("#phone").parentElement.parentElement;
          const sectionToHideTwo = document.querySelector(".form-wrapper > .form-options");
          const sectionToHideThree = document.querySelector('#form-panel-3');
          const inputEmailPattern = document.querySelector('#email').getAttribute('pattern');
          if (sectionToHideOne && sectionToHideTwo && shouldHideForm()) {
              sectionToHideOne.style.display = "none";
              sectionToHideTwo.style.display = "none";
              sectionToHideThree.style.display = "none";
              document.querySelector('#email').removeAttribute('pattern');
              document.querySelector('#email').setAttribute('type', 'text');
              // temporarily ignore validations for some inputs
              document.querySelectorAll('#phone,#numberOfEmployees,select#signupType').forEach(el => {
                  el.addEventListener('invalid', ignoreInvalidInputs);
              });
          }

          function emailFieldBlurValidator() {
              const email = this.value;
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
              const emailValid = emailPattern.test(email);

              if (!emailValid && email.length > 0) showEmailErrorMessage('Valid email required.'); else removeEmailErrorMessage();
          }

          function ignoreInvalidInputs(event) {
              event.preventDefault();
          }

          // add event listener to email input
          document.querySelector('#email').addEventListener('blur', emailFieldBlurValidator);

          // add event listeners to inputs
          document.querySelectorAll('#firstName,#lastName,#email,#name').forEach(el => {
              el.addEventListener('input', function (event) {
                  const firstNameValue = document.querySelector('#firstName').value.trim();
                  const lastNameValue = document.querySelector('#lastName').value.trim();
                  const emailValue = document.querySelector('#email').value.trim();
                  const companyNameValue = document.querySelector('#name').value.trim();
                  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                  const emailValid = emailPattern.test(emailValue);
                  if (firstNameValue && lastNameValue && emailValue && companyNameValue && emailValid) {
                      sectionToHideOne.style.display = "";
                      sectionToHideTwo.style.display = "";
                      sectionToHideThree.style.display = "";
                      document.querySelector('#email').setAttribute('pattern', inputEmailPattern);
                      document.querySelector('#email').setAttribute('type', 'email');
                      document.querySelector('#email').removeEventListener('blur', emailFieldBlurValidator);
                      removeEmailErrorMessage();
                      document.querySelectorAll('#phone,#numberOfEmployees,select#signupType').forEach(el => {
                          el.removeEventListener('invalid', ignoreInvalidInputs);
                      });
                  }
              });
          });

          const submitButtonAvailabilityCheck = setInterval(() => {
              const submitButton = document.querySelector('.spz_5004_v1 .spz-form-wrap .form-wrapper .submit-button.button-signup-2');
              if (submitButton) {
                  clearInterval(submitButtonAvailabilityCheck);
                  submitButton.value = "Get Started";
              }
          }, 50);
      }

      /***********************************
       ************************************
       DO NOT TOUCH
       BEYOND THIS LINE
       ******************************
       ************************/
      // Helper function to animate labels for inputs
      function animateLabels(inputs, template_labelValues) {
          inputs.forEach((item, index) => {
              let input = document.querySelector(item);
              if (!input) return; // Skip if input is not found
              wrapInputInParent(input);
              input = document.querySelector(item); // Re-select input after wrapping
              const parentDiv = document.querySelector(item).parentElement;
              const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
              if (existingLabel) existingLabel.style.display = 'none';

              const label = document.createElement('label');
              label.innerText = template_labelValues[index];
              label.classList.add('label-spz');
              label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
              label.style.width = '';

              label.addEventListener('click', function (e) {
                  const actualInput = parentDiv.querySelector('input, select, textarea');
                  if (actualInput) actualInput.focus();
              });
              //inserting labels after input.
              parentDiv.insertBefore(label, input.nextSibling);
              label.parentElement.classList.add('spz-input-wrap')
              //adding placeholder to all inputs
              input.setAttribute('placeholder', template_labelValues[index]);
              if (input.tagName === 'SELECT') {
                  input.addEventListener('change', (event) => {
                      if (input.value.length > 0) {
                          input.closest(".spz-input-wrap").classList.add("has-value")
                      } else {
                          input.closest(".spz-input-wrap").classList.remove("has-value")
                      }
                      event.target.blur();
                  })
                  if (input.value !== '') {
                      parentDiv.classList.add('has-value');
                  } else {
                      parentDiv.classList.remove('has-value');
                  }
              }
          });
      }

      // This is the code to generate the form over UI section do no edit it
      function addForm(formData, formSelector) {
          const formTemplate = `
                      <div class="spz-form-overlay">
                          <div class="spz-form-wrap">
                            <div class="form-section">
                              ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0 ? formData.customHTMLBefore : ""}
                              </div>
                              <div class="the-form"></div>
                              ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0 ? formData.customHTMLAfter : ""}
                              </div>
                          </div>
                      </div>
                                  `;
          document.body.insertAdjacentHTML("beforeend", formTemplate); /*Insert spz-form-wrap before closing body tag*/
          if (!document.querySelector(formSelector)) {
              document
                  .querySelector(".spz-form-wrap .the-form")
                  .insertAdjacentHTML("beforeend", "<div style='color:red;'>Add proper form selector in code to load form</div>");
          } else {
              const formLoaded = setInterval(() => {
                  if (document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                      clearInterval(formLoaded);
                      document
                          .querySelector(".spz-form-wrap .the-form")
                          .appendChild(document.querySelector(formSelector)); /*Apply form to spz form wrapper*/
                  }
              });
          }
      }

      // update the local storage with tracking field
      updateTrackingField();
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
      clearInterval(bodyInterval);
      bill5004();
  }
}, 50);
