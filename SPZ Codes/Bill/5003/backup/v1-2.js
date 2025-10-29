function bill5003() {
  if (!document.body.classList.contains("spz_5003_v1")) {
    document.body.classList.add("spz_5003_v1");

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
        triageCode();
      }
    })

    function updateTrackingField() {
      const key = 'bdcAbTest13';
      const value = '5003-v1';
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
        const submitButton = document.querySelector('.spz_5003_v1 .spz-form-wrap .form-wrapper .submit-button.button-signup-2');
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

    function triageCode() {
      //DEVELOPER - STEP 2 of 7 Fill triageData array with appropriate data. 1 question equals to 1 object in array. See example below
      const triageData = [
        //Question 1 start
        {
          questionSuperHeading: "Get a Demo",
          questionHeading: "What do you want to see in the demo?",
          answers: [
            {
              answerText: 'Accounts Receivable',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-accounts_receivable_3.svg',
              answerAlt: 'Accounts Receivable'
            },
            {
              answerText: 'Accounts Payable',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019909/bill/5003/icon-accounts_payable_3.svg',
              answerAlt: 'Accounts Payable'
            },
            {
              answerText: 'Spend & Expense',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-spend_and_expense_3.svg',
              answerAlt: 'Spend & Expense'
            },
            {
              answerText: 'Business Credit',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-business_credit_3.svg',
              answerAlt: 'Business Credit'
            },
            {
              answerText: 'Corporate Cards',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-corporate_cards_3.svg',
              answerAlt: 'Corporate Cards'
            },
            {
              answerText: 'Cashflow Forcasting',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-cashflow_forecasting_3.svg',
              answerAlt: 'Cashflow Forcasting'
            }
          ]
        },
        //Question 1 end
        //Question 2 start
        {
          questionSuperHeading: "Get a Demo",
          questionHeading: "What is your industry?",
          questionSubHeading: "",
          answers: [
            {
              answerText: 'Education',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019909/bill/5003/icon-education_3.svg',
              answerAlt: 'Education'
            },
            {
              answerText: 'Business Services',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-business_services_3.svg',
              answerAlt: 'Business Services'
            },
            {
              answerText: 'Financial Services',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-financia_services_3.svg',
              answerAlt: 'Financial Services'
            },
            {
              answerText: 'Software & Tech',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-software_tech_3.svg',
              answerAlt: 'Software & Tech'
            },
            {
              answerText: 'Construction',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-construction_3.svg',
              answerAlt: 'Construction'
            },
            {
              answerText: 'Healthcare',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-healthcare_3.svg',
              answerAlt: 'Healthcare'
            },
            {
              answerText: 'Government',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-government_3.svg',
              answerAlt: 'Government'
            },
            {
              answerText: 'Manufacturing',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-manufacturing_3.svg',
              answerAlt: 'Manufacturing'
            },
            {
              answerText: 'Other',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1758019908/bill/5003/icon-other_3.svg',
              answerAlt: 'Other'
            }
          ]
        }
        //Question 2 end
      ]

      //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
      const sectionSelector = `.spz-form-overlay`
      //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
      const position = "afterbegin" //"beforebegin", "beforeend", "afterend"
      //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
      const formUniqueSelectorTwo = ".spz-form-wrap" //<--- form uqniue selector goes here. e.g.

      addTriage(triageData, formUniqueSelectorTwo)

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      function addTriage(triageData, formSelectorTwo) {
        const triageTemplate = `
        <div class="spz-triage-wrap">
        	<div class="questions-wrap">
	            ${triageData.length !== 0
          &&
          triageData.map((item, index) => {
            return `
                <div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''}">
                  <div class="question-superheading">${item.questionSuperHeading}</div>
                    <div class="question-heading">${item.questionHeading}</div>
                      <div class="answers-wrap">
                        ${item.answers.map((itemm, indexx) => {
              return `
                        <div class="answer-item">
                          ${itemm.answerImage.length !== 0 ?
                  `<img src="${itemm.answerImage}" alt="${itemm.answerAlt}" class="answer-image"/>` :
                  ``
                }
                          <div class="answer-text">${itemm.answerText}</div>
                          <div class="answer-checkbox"></div>
                        </div>
                        `
            }).join('')
              }
                    </div>
                    <div class="next-question">Next <span>→</span></div>
                </div>
                `
          }).join('')
          }
            <div class="question-form spz-hidden">
              <div class="question-superheading">Start using BILL Today</div>
            </div>
          </div>
            
        </div>
        `;
        //Append triage section
        document.querySelector(sectionSelector).insertAdjacentHTML(
          position,
          triageTemplate,
        );

        document.querySelector('.question-1 .next-question').classList.add('step_one');
        document.querySelector('.question-2 .next-question').classList.add('step_two');
        var question_twoItem = document.querySelectorAll('.question-2 .answer-item');
        function removeCheckedClass() {
          question_twoItem.forEach(item => {
            item.classList.remove('selected');
          });
        }

        // Function to store selections in localStorage
        function storeSelection(key, value) {
          localStorage.setItem(key, value);
        }

        // Function to retrieve selections from localStorage
        function retrieveSelection(key) {
          return localStorage.getItem(key);
        }

        // Function to store selected answer texts
        function storeAnswerSelections() {
          const question1Selections = [];
          const question2Selections = [];
          
          // Get question 1 selections
          document.querySelectorAll('.question-1 .answer-item.selected').forEach(item => {
            const answerText = item.querySelector('.answer-text').textContent.trim();
            question1Selections.push(answerText);
          });
          
          // Get question 2 selections
          document.querySelectorAll('.question-2 .answer-item.selected').forEach(item => {
            const answerText = item.querySelector('.answer-text').textContent.trim();
            question2Selections.push(answerText);
          });
          
          localStorage.setItem('question1Selections', JSON.stringify(question1Selections));
          localStorage.setItem('question2Selections', JSON.stringify(question2Selections));
        }

        // Checking answers listener
        document.querySelectorAll('.answer-item').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            if (e.target.classList.contains('answer-item')) {
              if (e.target.closest('.question-2')) {
                removeCheckedClass();
              }
              e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected');
            } else {
              if (e.target.parentElement.closest('.question-2')) {
                removeCheckedClass();
              }
              e.target.parentElement.classList.contains('selected') ? e.target.parentElement.classList.remove('selected') : e.target.parentElement.classList.add('selected')
            }

            // Check the text inside .answer-text and update checkboxes
            let answerText = item.querySelector('.answer-text').textContent.trim();
            let isChecked = item.classList.contains('selected');

            // First step: multi-select OS options
            if (answerText === "Accounts Receivable" || answerText === "Accounts Payable") {
              document.querySelector('#productInterestAP').click();
              document.querySelector('#productInterestAP').checked = isChecked;
              storeSelection('apChecked', isChecked);
            } else if (answerText === "Spend & Expense") {
              document.querySelector('#productInterestSE').click();
              document.querySelector('#productInterestSE').checked = isChecked;
              storeSelection('seChecked', isChecked);
            }

            const businessTypeSelect = document.querySelector('select#signupType');
            if (answerText === "Financial operations for one business.") {
              businessTypeSelect.selectedIndex = 0;
              document.querySelector('select#signupType').value = 'direct';
              document.querySelector('select#signupType').dispatchEvent(new Event('change', { bubbles: true }));
              storeSelection('businessType', businessTypeSelect.value);
            } else if (answerText === "Accounting services for multiple clients.") {
              businessTypeSelect.selectedIndex = 1;
              document.querySelector('select#signupType').value = 'console';
              document.querySelector('select#signupType').dispatchEvent(new Event('change', { bubbles: true }));
              storeSelection('businessType', businessTypeSelect.value);
            }
          });
        });

        // Function to retrieve selections on page load and apply the checked state
        function loadSelections() {

          document.querySelectorAll('.answer-item').forEach(item => {
            let answerText = item.querySelector('.answer-text').textContent.trim();
            console.log('Checking answer:', answerText);
            // Check for AP
            if (retrieveSelection('apChecked') === 'true' && answerText === "Accounts Receivable") {
              console.log('AP is checked');

              if (!document.querySelector('#productInterestAP').checked) {
                document.querySelector('#productInterestAP + span').click();
                // console.log('AP checkbox was not checked, checking it now');
                // document.querySelector('#productInterestAP').checked = true;
              }
              item.classList.add('selected');
            }

            // Check for SE
            if (retrieveSelection('seChecked') === 'true' && answerText === "Accounts Payable") {
              if (!document.querySelector('#productInterestSE').checked) {
                document.querySelector('#productInterestSE + span').click();
                console.log('SE checkbox was not checked, checking it now');
                // document.querySelector('#productInterestSE').checked = true;
              }
              item.classList.add('selected');
            }

          });

          // Retrieve the businessType from localStorage
          let businessType = retrieveSelection('businessType');

          // If businessType exists in localStorage, match the corresponding .answer-item
          if (businessType) {
            const rangeMapping = {
              "Small or midsize business": "Small or midsize business",
              "Business Services": "Business Services"
            };

            // Loop through the answer items and add 'selected' class to the matching one
            document.querySelectorAll('.question-2 .answer-item').forEach(item => {
              let answerText = item.querySelector('.answer-text').textContent.trim();
              if (answerText === rangeMapping[businessType]) {
                item.classList.add('selected');
              }
            });
          }
          // If no businessType is found, add 'selected' class to the first .answer-item
          const firstItem = document.querySelector('.question-2 .answers-wrap .answer-item:first-child');
          if (firstItem) {
            (document.querySelector('select#signupType').value = 'direct', document.querySelector('#signupType').dispatchEvent(new Event('change', { bubbles: true })));
            firstItem.classList.add('selected');
          }

        }

        loadSelections();

        //Next question click listener
        document.querySelectorAll('.next-question').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            if (item.classList.contains('step_one')) {
              document.querySelector('body').classList.add('step_two');
              if (!document.querySelector('#productInterestAP').checked &&
                !document.querySelector('#productInterestSE').checked) {
                showError('Please select an option.', item);
                return;
              }
              else {
                removeError();
              }
            } else if (item.classList.contains('step_two')) {
              document.querySelector('body').classList.remove('step_two');
              document.querySelector('body').classList.add('step_three');
            }
            item.parentElement.classList.add('spz-hidden')
            item.parentElement.nextElementSibling.classList.remove('spz-hidden')
          })
        })

        if (!document.querySelector(formSelectorTwo)) {
          document
            .querySelector(".spz-form-wrap")
            .insertAdjacentHTML(
              "beforeend",
              "<div style='color:red;'>Add proper form selector in code to load form</div>"
            );
        } else {
          const formLoaded = setInterval(() => {
            if (
              document.querySelector(formSelectorTwo) &&
              document.querySelectorAll(`${formSelectorTwo} input`).length > 0
            ) {
              clearInterval(formLoaded);
              document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelectorTwo));
            }
          });
        }
      }

      function showError(message, item) {
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
          errorMsg = document.createElement('div');
          errorMsg.className = 'error-message';
          errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
          if (item.classList.contains('step_one')) {
            document.querySelector('.step_one').insertAdjacentElement("beforebegin", errorMsg);
          } else if (item.classList.contains('step_two')) {
            document.querySelector('.step_two').insertAdjacentElement("beforebegin", errorMsg);
          }
        }
      }

      function removeError() {
        const errorMsg = document.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      }

      // document.querySelector('.spz-triage-wrap .questions-wrap').insertAdjacentElement('afterend', document.querySelector('.is-sub-wrapper'));

      // existiing account
      // document.querySelector('.spz .button-disclaimer').insertAdjacentHTML("afterend", `
      //   <div class="existiing_account">Already have an account? <a href="https://login.us.bill.com/neo/login"
      //   class="spz_1012_v1">Login</a></div>
      //   <div class="disclaimer_2">
      //     <p><a href="https://app-signup.us.bill.com/onboarding/flow/signup">Click here </a>if you’ve been invited to be paid by
      //       a BILL customer, or if you only want to receive payments with a BILL account.</p>
      //   </div> 
      // `);
    }
    

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    bill5003();
  }
}, 50);
