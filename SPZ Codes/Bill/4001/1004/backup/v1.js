const bodyInterval1002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-1002')) {
    clearInterval(bodyInterval1002)
    document.querySelector('body').classList.add("spz-1002")
    localStorage.setItem('bdcAbTest12', '1002-v1');
    //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1202262047779255/1207982584862002/f`
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form heading">
          <h2>Start using BILL Today</h2>
        </div>
      `,
      customHTMLAfter: ``,
    };

    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.



    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for (let i = 0; i < document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select').length; i++) {
          let target = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label
        for (let i = 0; i < document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select').length; i++) {
          let label = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("placeholder")
          if (!label && document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].querySelector('option')) {
            label = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("id")}">${label}</label> 
         `)
        }
        // change position
        document.querySelector('.spz-1002 .spz-input-wrapper.email').insertAdjacentElement('afterend', document.querySelector('.spz-1002 .spz-input-wrapper.name'));
        document.querySelector('.spz-1002 .spz-input-wrapper.phone').insertAdjacentElement('afterend', document.querySelector('.spz-1002 .spz-input-wrapper.numberOfEmployees'));

        // adding Business Type

        document.querySelector('.spz-1002 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("beforebegin", `
          <div class="spz-input-wrapper business-type">
            <select class="business-type" id="businessType" required></select>
            <label for="businessType">Business Type</label> 
          </div>   
         `)
        for (let i = 0; i < document.querySelectorAll('.spz-1002 #signupType .form-option-field span').length; i++) {
          document.querySelector('.spz-1002 #businessType').insertAdjacentHTML("beforeend", `
              <option value="${document.querySelectorAll('.spz-1002 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz-1002 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
            `)
        }
        document.querySelector('.spz-1002 #businessType').addEventListener("change", function () {
          document.querySelectorAll('.spz-1002 #signupType .form-option-field')[document.querySelector('.spz-1002 #businessType').selectedIndex].querySelector('input').click()
        })
        //trigger click based on selected radiobutton
        if (document.querySelector('.spz-1002 #signupType .form-option-field [name="formoptions"]:checked').value == 'direct') {
          document.querySelectorAll('.spz-1002 #signupType .form-option-field')[0].querySelector('input').click()
          document.querySelectorAll('.spz-1002 #businessType option')[0].selected = 'selected'
        } else {
          document.querySelectorAll('.spz-1002 #signupType .form-option-field')[0].querySelector('input').click()
          document.querySelectorAll('.spz-1002 #signupType .form-option-field')[1].querySelector('input').click()
          document.querySelectorAll('.spz-1002 #businessType option')[1].selected = 'selected'
        }
        //products style
        document.querySelector('.spz-1002 #form-panel-3 .text-size-tiny').textContent = "(Check all that apply)"
        //checbox listener
        const checkboxListener = () => {
          for (let x = 0; x < document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select').length; x++) {
            if (document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].classList.contains("hide")) {
              document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.add("hide")
            }
            else {
              document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.remove("hide")
            }
          }
        }
        checkboxListener()
        for (let i = 0; i < document.querySelectorAll('.spz-1002 [name="productInterestCheckbox"]').length; i++) {
          document.querySelectorAll('.spz-1002 [name="productInterestCheckbox"]')[i].addEventListener("change", function () {
            checkboxListener()
          })
        }
        //select arrow
        for (let x = 0; x < document.querySelectorAll('.spz-1002 form select').length; x++) {
          document.querySelectorAll('.spz-1002 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
        }
        //submit button 
        document.querySelector('.spz-1002 .submit-button.button-signup-2').classList.add("spz-submitcta-1002")
        /*
        //disclaimer 
        document.querySelector('.spz-1002 .button-disclaimer').innerHTML=`
        By continuing, you agree to BILL <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
        ` 
        */
        //input even listerer
        const allInput = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select');
        function labelChange(e) {
          if (e.value == '' || e.value == null) {
            e.closest(".spz-input-wrapper").classList.remove("hasValue");
          } else if (e.value != '' || e.value != null) {
            e.closest(".spz-input-wrapper").classList.add("hasValue");
          }
        }
        allInput.forEach(function (e) {
          e.addEventListener('blur', () => {
            labelChange(e);
          }, true);
          e.addEventListener('change', () => {
            labelChange(e);
          }, true);
          labelChange(e);
        })
        //remove unecessary select
        for (let x = 0; x < document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select').length; x++) {
          document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
        }
        //change label and option on mobile and desktop 
        const checkSelectLabel = () => {
          let labelText;
          if (window.matchMedia("(max-width: 767.98px)").matches) {
            labelText = "Your accounting software?"
          } else {
            labelText = "Which accounting software do you use?"
          }
          document.querySelector('.spz-1002 .spz-input-wrapper.accountingSoftware label').textContent = labelText;
          document.querySelector('.spz-1002 .spz-input-wrapper.accountingSoftware select option').textContent = labelText;
        }
        checkSelectLabel();
        window.addEventListener("resize", function () {
          checkSelectLabel();
        })

        //onlynumber 
        function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }
          return true;
        }
        const NOEInterval = setInterval(function () {
          if (document.querySelector('.spz-1002 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input')) {
            clearInterval(NOEInterval)
            document.querySelector('.spz-1002 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input').addEventListener('keypress', function (event) {
              if (!isNumber(event)) event.preventDefault();
            }, false);
          }
        }, 10)
        //browser detection
        let userAgent = navigator.userAgent;
        let browser;
        if (userAgent.match(/edg/i)) {
          browser = "edge";
        } else if (userAgent.match(/firefox|fxios/i)) {
          browser = "firefox";
        } else if (userAgent.match(/opr\//i)) {
          browser = "opera";
        } else if (userAgent.match(/chrome|chromium|crios/i)) {
          browser = "chrome";
        } else if (userAgent.match(/safari/i)) {
          browser = "safari";
        } else {
          //alert("Other browser");
        }
        document.querySelector('.spz-1002').classList.add(browser);
      }
    })



    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/


    // This is the code to generate the form over UI section do no edit it
    function addForm(formData, formSelector) {
      const formTemplate = `
            <div class="hero_right">
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

  }
}, 10);







// variant
function loadTestCode5001() {
  if (!document.querySelector("body").classList.contains("spz_t1004")) {
    document.querySelector("body").classList.add("spz_t1004");
    localStorage.setItem('bdcAbTest12', '1004-v1');
    setTimeout(function () {
      document.querySelector('.signup-column .signup-left').insertAdjacentElement('afterend', document.querySelector('.spz-triage-wrap'));
    }, 100);
    var checkIcon = `
      <img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/checkmark.svg" alt="checkmark">
    `;
    var currentCheckIcon = document.querySelectorAll('.call_to_action_products_text .cta_pt_icon');
    currentCheckIcon.forEach((icon) => {
      icon.innerHTML = checkIcon;
    });

    //DEVELOPER - STEP 1 of 7 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208504602565141/f`
    //DEVELOPER - STEP 2 of 7 Fill triageData array with appropriate data. 1 question equals to 1 object in array. See example below
    const triageData = [
      //Question 1 start
      {
        questionSuperHeading: "Start using BILL Today",
        questionHeading: "What product(s) are you interested in?",
        answers: [
          {
            answerText: 'Accounts Payable & Receivable',
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1728899581/bill/1004/icon-accounts_receivable.svg'
          },
          {
            answerText: 'Spend & Expense',
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1728899582/bill/1004/icon-spend_expense.svg'
          }
        ]
      },
      //Question 1 end
      //Question 2 start
      {
        questionSuperHeading: "Start using BILL Today",
        questionHeading: "What type of business are you?",
        questionSubHeading: "",
        answers: [
          {
            answerTextTwo: 'Small / Midsize Business',
            answerText: "We want to use BILL for ourself",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1728899595/bill/1004/icon-small_midsize_business.svg'
          },
          {
            answerTextTwo: 'Accounting Firm',
            answerText: "We want to use BILL for clients",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1728899595/bill/1004/icon-accounting_firm.svg'
          }
        ]
      }
      //Question 2 end
    ]
    //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
    const sectionSelector = `.hero_right`
    //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
    const position = "afterend" //"beforebegin", "beforeend", "afterend"
    //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".spz-form-wrap" //<--- form uqniue selector goes here. e.g.

    addTriage(triageData, formUniqueSelector)


    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function addTriage(triageData, formSelector) {
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
                `<img src="${itemm.answerImage}" class="answer-image"/>` :
                ``
              }
                          <div class="answer-textTwo">${itemm.answerTextTwo}</div>
                          <div class="answer-text">${itemm.answerText}</div>
                          <div class="answer-checkbox"></div>
                        </div>
                        `
          }).join('')
            }
                    </div>
                    <div class="next-question">Next <img src="//res.cloudinary.com/spiralyze/image/upload/v1728899617/bill/1004/arrow-right.svg" alt="arrow"></div>
                </div>
                `
        }).join('')
        }
            <div class="question-form spz-hidden spz-form-wrap">
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
          if (answerText === "Accounts Payable & Receivable") {
            document.querySelector('#productInterestAP').click();
            document.querySelector('#productInterestAP').checked = isChecked;
            storeSelection('apChecked', isChecked);
          } else if (answerText === "Spend & Expense") {
            document.querySelector('#productInterestSE').click();
            document.querySelector('#productInterestSE').checked = isChecked;
            storeSelection('seChecked', isChecked);
          }

          const businessTypeSelect = document.querySelector('#businessType');
          if (answerText === "We want to use BILL for ourself") {
            businessTypeSelect.selectedIndex = 0;
            document.querySelectorAll('.spz-1002 #signupType .form-option-field')[0].querySelector('input').click();
            storeSelection('businessType', businessTypeSelect.value);
          } else if (answerText === "We want to use BILL for clients") {
            businessTypeSelect.selectedIndex = 1;
            document.querySelectorAll('.spz-1002 #signupType .form-option-field')[1].querySelector('input').click();
            storeSelection('businessType', businessTypeSelect.value);
          }

        });
      });

      // Function to retrieve selections on page load and apply the checked state
      function loadSelections() {

        document.querySelectorAll('.answer-item').forEach(item => {
          let answerText = item.querySelector('.answer-text').textContent.trim();

          // Check for AP
          if (retrieveSelection('apChecked') === 'true' && answerText === "Accounts Payable & Receivable") {
            document.querySelector('#productInterestAP').click();
            document.querySelector('#productInterestAP').checked = true;
            item.classList.add('selected');
          }

          // Check for SE
          if (retrieveSelection('seChecked') === 'true' && answerText === "Spend & Expense") {
            document.querySelector('#productInterestSE').click();
            document.querySelector('#productInterestSE').checked = true;
            item.classList.add('selected');
          }

        });

        // Retrieve the businessType from localStorage
        let businessType = retrieveSelection('businessType');

        // If businessType exists in localStorage, match the corresponding .answer-item
        if (businessType) {
          const rangeMapping = {
            "Small or midsize business": "Small or midsize business",
            "Accounting Firm": "Accounting Firm"
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
          document.querySelectorAll('.spz-1002 #signupType .form-option-field')[0].querySelector('input').click();
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
              showError('Please select at least one option.', item);
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

      if (!document.querySelector(formSelector)) {
        document
          .querySelector(".spz-form-wrap")
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
            document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelector))
          }
        });
      }
    }

    function showError(message, item) {
      let errorMsg = document.querySelector('.error-message');
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11.8209 3.57789C11.893 3.6389 11.9696 3.72364 12.0499 3.82981L12.055 3.83998L12.062 3.85218L15.2116 9.35481L15.2117 9.35489L18.345 14.8268L18.348 14.8327L18.348 14.8327C18.4634 15.0635 18.5055 15.3018 18.4994 15.5229C18.4851 15.7618 18.4047 15.9874 18.2796 16.1718C18.1498 16.363 17.9764 16.5132 17.7871 16.6016L17.787 16.6014L17.7749 16.6075C17.6153 16.6873 17.4211 16.7284 17.2185 16.7217L17.2102 16.7214H17.2019H10.9952H4.75147H4.75088C4.54635 16.7137 4.35848 16.6611 4.18411 16.5779C3.97423 16.4721 3.79902 16.3084 3.68315 16.1088L3.68319 16.1088L3.6795 16.1026C3.56218 15.9071 3.49396 15.6681 3.50042 15.402C3.50724 15.206 3.55934 14.9978 3.6717 14.7648L3.67307 14.762L6.77858 9.34587L6.77886 9.34539L9.94444 3.81024L9.94474 3.80975C10.046 3.69957 10.1546 3.6047 10.2673 3.51954C10.533 3.34025 10.8122 3.26602 11.0727 3.27873C11.3471 3.29212 11.6083 3.39195 11.8146 3.57248L11.8146 3.57253L11.8209 3.57789Z" stroke="#E51B00"/>
        <path d="M11.005 12.7124C11.1316 12.7124 11.2502 12.7361 11.3531 12.7836C11.4638 12.831 11.5587 12.8943 11.6457 12.9813C11.7327 13.0683 11.8039 13.1712 11.8434 13.2819C11.8909 13.3926 11.9146 13.5113 11.9146 13.6378C11.9146 13.7644 11.8909 13.883 11.8434 13.9858C11.796 14.0966 11.7327 14.1915 11.6457 14.2785C11.5587 14.3655 11.4559 14.4367 11.3531 14.4762C11.2423 14.5237 11.1237 14.5474 11.005 14.5474C10.8785 14.5474 10.7677 14.5237 10.657 14.4762C10.5463 14.4288 10.4514 14.3655 10.3564 14.2785C10.2694 14.1915 10.1983 14.0887 10.1587 13.9858C10.1113 13.8751 10.0875 13.7565 10.0875 13.6378C10.0875 13.5113 10.1113 13.4005 10.1587 13.2898C10.2062 13.1791 10.2694 13.0842 10.3564 12.9971C10.4435 12.9101 10.5463 12.839 10.657 12.7915C10.7677 12.744 10.8864 12.7203 11.0129 12.7203L11.005 12.7124Z" fill="#E51B00"/>
        <path d="M11.1014 11.832H10.9115H10.7217L10.7138 11.6421C10.7059 11.476 10.6822 11.2941 10.6505 11.0885C10.6189 10.8828 10.5714 10.6614 10.524 10.4241L10.3025 9.43537C10.2392 9.13481 10.1839 8.8817 10.1522 8.66024C10.1206 8.43877 10.0969 8.25685 10.0969 8.11448C10.0969 7.98001 10.1206 7.85346 10.1601 7.73482C10.1997 7.61618 10.263 7.51335 10.35 7.41844C10.437 7.32352 10.5398 7.25234 10.6505 7.21279C10.7613 7.16533 10.8878 7.1416 11.0144 7.1416C11.1409 7.1416 11.2675 7.16533 11.3782 7.21279C11.4889 7.26024 11.5918 7.33143 11.6788 7.41844C11.7658 7.50544 11.8291 7.61618 11.8765 7.72691C11.9161 7.84555 11.9398 7.9642 11.9398 8.09866C11.9398 8.22521 11.924 8.39922 11.8844 8.62069C11.8449 8.83425 11.7974 9.10317 11.7183 9.42746L11.4889 10.4162C11.4494 10.5823 11.4178 10.7721 11.3861 10.9698C11.3545 11.1676 11.3308 11.389 11.3149 11.6342L11.2991 11.8241H11.1093L11.1014 11.832Z" fill="#E51B00"/>
      </svg>`;

      const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

      if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
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

    // Clear saved values after form submission
    document.querySelector('form.form-wrapper').addEventListener('submit', function () {
      localStorage.clear();
    });

    document.querySelector('.spz-triage-wrap .questions-wrap').insertAdjacentElement('afterend', document.querySelector('.is-sub-wrapper'));

  }
}

var bodyInterval5001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval5001);
    loadTestCode5001();
  }
}, 100);

















