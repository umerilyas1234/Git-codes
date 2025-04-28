const bodyInterval1002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-1002')) {
    clearInterval(bodyInterval1002)
    document.querySelector('body').classList.add("spz-1002")
    localStorage.setItem('bdcAbTest12', '4001-v1');
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
        document.querySelector('.spz-1002 .submit-button.button-signup-2').classList.add("spz-submitcta-1004")

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
      document.querySelector("#formjumplink .text-image-hero >div:last-child").insertAdjacentHTML(
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
}, 450);



// variant 1004
function loadTestCode4001() {
  if (!document.querySelector("body").classList.contains("spz_t4001")) {
    document.querySelector("body").classList.add("spz_t4001");

    var checkIcon = `
      <img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/checkmark.svg" alt="checkmark">
    `;
    var currentCheckIcon = document.querySelectorAll('.call_to_action_products_text .cta_pt_icon');
    currentCheckIcon.forEach((icon) => {
      icon.innerHTML = checkIcon;
    });


    //DEVELOPER - STEP 2 of 7 Fill triageData array with appropriate data. 1 question equals to 1 object in array. See example below
    const triageData = [
      //Question 1 start
      {
        questionSuperHeading: "Create Free Account",
        questionHeading: "Which one are you?",
        answers: [
          {
            answerTextTwo: 'Small / Midsize Business',
            answerText: "We want to use BILL for ourself",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133999/bill/4001/icon-small_midsize_business_1.svg',
            answerAlt: 'Small / Midsize Business'
          },
          {
            answerTextTwo: 'Accounting Firm',
            answerText: "We want to use BILL for clients",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133999/bill/4001/icon-accounting_firm_1.svg',
            answerAlt: 'Accounting Firm'
          }
        ]
      },
      //Question 1 end
      //Question 2 start
      {
        questionSuperHeading: "Create Free Account",
        questionHeading: "What is your industry?",
        questionSubHeading: "",
        answers: [
          {
            answerTextTwo: 'Professional Services',
            answerText: "Professional Services",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-professional_services.svg',
            answerAlt: 'Professional Services'
          },
          {
            answerTextTwo: 'Healthcare',
            answerText: "Healthcare",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-health_care.svg',
            answerAlt: 'Healthcare'
          },
          {
            answerTextTwo: 'Wealth Management',
            answerText: "Wealth Management",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-wealth_management.svg',
            answerAlt: 'Wealth Management'
          },
          {
            answerTextTwo: 'Construction',
            answerText: "Construction",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-construction.svg',
            answerAlt: 'Construction'
          },
          {
            answerTextTwo: 'Nonprofits',
            answerText: "Nonprofits",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-non_profit.svg',
            answerAlt: 'Nonprofits'
          },
          {
            answerTextTwo: 'Manufacturing',
            answerText: "Manufacturing",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-manufacturing.svg',
            answerAlt: 'Manufacturing'
          },
          {
            answerTextTwo: 'Retail & Commerce',
            answerText: "Retail & Commerce",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-ecommerce.svg',
            answerAlt: 'Retail & Commerce'
          },
          {
            answerTextTwo: 'Other',
            answerText: "Other",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133998/bill/4001/icon-other.svg',
            answerAlt: 'Other'
          }
        ]
      }
      //Question 2 end
    ]
    //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
    const sectionSelector = `.hero_right`
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
            <div class="question-form spz-hidden">
              <div class="question-superheading">Create Free Account</div>
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
      var question_oneItem = document.querySelectorAll('.question-1 .answer-item');
      var question_twoItem = document.querySelectorAll('.question-2 .answer-item');
      function removeCheckedClass() {
        question_oneItem.forEach(item => {
          item.classList.remove('selected');
        });
      }
      function removeCheckedClassTwo() {
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
            if (e.target.closest('.question-1')) {
              removeCheckedClass();
              e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected');
            } else if (e.target.closest('.question-2')) {
              if (e.target.classList.contains('selected')) {
                e.target.classList.remove('selected');
                storeSelection('industry', '');
              } else {
                removeCheckedClassTwo();
                e.target.classList.add('selected');
              }
            }
          } else {
            if (e.target.parentElement.closest('.question-1')) {
              removeCheckedClass();
              e.target.parentElement.classList.contains('selected') ? e.target.parentElement.classList.remove('selected') : e.target.parentElement.classList.add('selected')
            } else if (e.target.parentElement.closest('.question-2')) {
              if (e.target.parentElement.classList.contains('selected')) {
                e.target.parentElement.classList.remove('selected');
                storeSelection('industry', '');
              } else {
                removeCheckedClassTwo();
                e.target.parentElement.classList.add('selected');
              }
            }
          }

          // Check the text inside .answer-text and update checkboxes
          let answerTextTwo = item.querySelector('.answer-textTwo').textContent.trim();
          let answerTextOne = item.querySelector('.answer-text').textContent.trim();
          let isChecked = item.classList.contains('selected');

          const businessTypeMapping = {
            "Small / Midsize Business": '#direct',
            "Accounting Firm": '#console'
          };

          if (businessTypeMapping[answerTextTwo]) {
            document.querySelector(businessTypeMapping[answerTextTwo]).click();
            storeSelection('businessType', answerTextTwo);
          }

          const validIndustries = [
            "Professional Services",
            "Healthcare",
            "Wealth Management",
            "Construction",
            "Nonprofits",
            "Manufacturing",
            "Retail & Commerce",
            "Other"
          ];

          if (validIndustries.includes(answerTextOne)) {
            storeSelection('industry', answerTextOne);
          }

        });
      });

      // Function to retrieve selections on page load and apply the checked state
      function loadSelections() {

        document.querySelectorAll('.answer-item').forEach(item => {
          let answerText = item.querySelector('.answer-text').textContent.trim();

          const industryMapping = {
            "Professional Services": "#professionalServices",
            "Healthcare": "#healthcare",
            "Wealth Management": "#wealthManagement",
            "Construction": "#construction",
            "Nonprofits": "#nonprofits",
            "Manufacturing": "#manufacturing",
            "Retail & Commerce": "#retailCommerce",
            "Other": "#other"
          };

          if (retrieveSelection('industry') === answerText && industryMapping[answerText]) {
            item.classList.add('selected');
          }

        });


        // If no businessType is found, add 'selected' class to the first .answer-item
        const firstItem = document.querySelector('.question-1 .answers-wrap .answer-item:first-child');
        if (firstItem) {
          document.querySelector('#direct').click();
          firstItem.classList.add('selected');
        }

      }

      loadSelections();

      //Next question click listener
      document.querySelectorAll('.next-question').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          if (item.classList.contains('step_one')) {
            document.querySelector('body').classList.add('step_two');
          } else if (item.classList.contains('step_two')) {
            document.querySelector('body').classList.remove('step_two');
            document.querySelector('body').classList.add('step_three');
            const answerItems = document.querySelectorAll('.question-2 .answer-item');
            const hasSelected = Array.from(answerItems).some(item => item.classList.contains('selected'));
            if (!hasSelected) {
              showError('Please select an option.', item);
              return;
            } else {
              removeError();
            }
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

  }
}


var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0 && document.querySelectorAll(".hero_right").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode4001();
  }
}, 500);
