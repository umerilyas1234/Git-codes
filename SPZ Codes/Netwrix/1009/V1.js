const bodyInterval1009 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_1009')) {
    clearInterval(bodyInterval1009)

    // TC 1016 code
    setTimeout(() => {
      if(!document.querySelector('header .navbar-end .contact-item .getDemo_cta')){
        document.querySelector('header .navbar-end .contact-item').insertAdjacentHTML('afterbegin', `<a href="https://www.netwrix.com/one-to-one.html" class="getDemo_cta spz_1009_v1">Get Demo</a>`);
      }
    }, 300);

    const run1009Test = () => {
      document.querySelector('body').classList.add("spz_1009")
      for (let i = 0; i < document.querySelectorAll('[action="/contact.html"]').length; i++) {
        const formParent = document.querySelectorAll('[action="/contact.html"]')[i].closest('.v-modal-container')
        formParent.classList.add("popup-wrapper-1008")
        formParent.querySelector('.form-title').textContent = "Contact Us";

        //change html
        const addingClass = () => {
          const inputParent = formParent.querySelectorAll('.form-wrapper-3 form > div:not(.modelFormError):not(.g-recaptcha)')
          for (let x = 0; x < inputParent.length; x++) {
            if (!inputParent[x].classList.contains("width50") && !inputParent[x].querySelector('textarea')) {
              inputParent[x].classList.add("input-wrapper", "width50");
            }
            if (inputParent[x].querySelector('textarea') && !inputParent[x].classList.contains("input-wrapper")) {
              inputParent[x].classList.add("input-wrapper");
            }
          }
        }
        const inputParent = formParent.querySelectorAll('.form-wrapper-3 form > div:not(.modelFormError):not(.g-recaptcha)')
        for (let x = 0; x < inputParent.length; x++) {
          //add label
          if (inputParent[x].querySelector('input')) {
            inputParent[x].querySelector('input').insertAdjacentHTML("afterend", `<label for="${inputParent[x].querySelector('input').getAttribute("id")}">${inputParent[x].querySelector('input').getAttribute("placeholder")}</label>`)
          }
          if (inputParent[x].querySelector('select')) {
            inputParent[x].querySelector('select').insertAdjacentHTML("afterend", `<label for="${inputParent[x].querySelector('select').getAttribute("id")}">${inputParent[x].querySelector('option:first-child').innerHTML}</label>`)
          }
          if (inputParent[x].querySelector('textarea')) {
            inputParent[x].querySelector('textarea').insertAdjacentHTML("afterend", `<label for="${inputParent[x].querySelector('textarea').getAttribute("id")}">${inputParent[x].querySelector('textarea').getAttribute("placeholder")}</label>`)
          }
        }
        addingClass()
        // adding additional error
        formParent.querySelector('.modelFormError').insertAdjacentHTML("afterend", `
              <div class="modelFormError"></div>  
            `)
        // change label for phone and unit type
        formParent.querySelector('#ModalForm_nwf_phone').closest('.input-wrapper').querySelector('label').textContent = "Phone";
        formParent.querySelector('#ModalForm_nwf_email').closest('.input-wrapper').querySelector('label').textContent = "Work Email";

        //adding arrow
        for (let x = 0; x < formParent.querySelectorAll('.form-wrapper-3 .width50 select').length; x++) {
          formParent.querySelectorAll('.form-wrapper-3 .width50 select')[x].parentNode.insertAdjacentHTML('beforeend', '<div class="arrow"></div>')
        }

        //security input
        formParent.querySelector('.form-wrapper-3 .securityInfo').innerHTML = `We care about the security of your data. <a href="/privacy.html" target="_blank" class="privacyLink">Privacy Policy</a>.`
        formParent.querySelector('.form-wrapper-3 .securityInfo').insertAdjacentHTML("afterend", `
              <div class="securityInfo">Visit our <a href="/support.html" target="_blank" class="spz_1009-tech-support-link">Technical Support</a> page.</div>
              <div class="clearboth"></div>      
            `)


        //button 
        formParent.querySelector('.form-wrapper-3 input.btn').value = "Submit";
        formParent.querySelector('.form-wrapper-3 input.btn').classList.add('spz-1009-v1')

        //input even listerer
        const allInput = formParent.querySelectorAll('.form-wrapper-3 .width50 input,.form-wrapper-3 .width50 select,.form-wrapper-3 textarea');

        const labelChange = (e) => {
          if (e.value == '' || e.value == null) {
            e.closest(".input-wrapper").classList.remove("hasValue");
          } else if (e.value != '' || e.value != null) {
            e.closest(".input-wrapper").classList.add("hasValue");
          }
        }

        allInput.forEach(function (e) {
          e.addEventListener('blur', () => {
            labelChange(e);
          }, true);
          e.addEventListener('change', () => {
            labelChange(e);
            // check4Input(e);
          }, true);
          e.addEventListener('keyup', () => {
            // check4Input(e);
          }, true);
          labelChange(e);
          // check4Input(e);
        })

        function updatedText() {
          const errMsg = document.querySelector('.spz-form-wrap form .modelFormError');
          if (errMsg) {
            let html = errMsg.innerHTML;
  
            if (html.includes('Direct Phone cannot be blank.')) {
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.add('er_1');
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.remove('er_2', 'er_3', 'er_4');
            }  else if (html.includes('Email cannot be blank')) {
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.add('er_2');
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.remove('er_1', 'er_3', 'er_4');
            } else if (html.includes('e-mail')) {
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.add('er_3');
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.remove('er_1', 'er_2', 'er_4');
            } else if (html.includes('Please enter a valid Direct Phone.')) {
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.add('er_4');
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.remove('er_1', 'er_3', 'er_2');
            } else {
              errMsg.closest('.spz-form-wrap form .modelFormError').classList.remove('er_1', 'er_2', 'er_3', 'er_4');
            }
          }
        }
  
        //button click check label
        const targetNode3 = formParent.querySelector('.form-wrapper-3 input.btn');
        const config3 = { attributes: true, childList: true, subtree: true };
        const callback3 = (mutationList, observer) => {
          updatedText();
          let x = 0;
          const labelInterval = setInterval(function () {
            allInput.forEach(function (e) {
              labelChange(e);
            })
            if (formParent.querySelector('.form-wrapper-3 input.btn').value != "Submit") {
              formParent.querySelector('.form-wrapper-3 input.btn').value = "Submit"
            }
            if (formParent.classList.contains('expanded')) {
              if (
                formParent.querySelector('#ModalForm_nwf_phone').closest(".input-wrapper").classList.contains("error") && formParent.querySelectorAll('.modelFormError')[0].textContent.trim() == "Direct Phone cannot be blank.") {
                formParent.querySelectorAll('.modelFormError')[0].classList.add("hide")
                formParent.querySelectorAll('.modelFormError')[1].classList.add("v-show")
                formParent.querySelectorAll('.modelFormError')[1].textContent = "Phone cannot be blank."
              } else if (
                formParent.querySelector('#ModalForm_nwf_phone').closest(".input-wrapper").classList.contains("error") && formParent.querySelectorAll('.modelFormError')[0].textContent.trim() == "Please enter a valid Direct Phone."

              ) {
                formParent.querySelectorAll('.modelFormError')[0].classList.add("hide")
                formParent.querySelectorAll('.modelFormError')[1].classList.add("v-show")
                formParent.querySelectorAll('.modelFormError')[1].textContent = "Please enter a valid Phone."
              }
              else if (formParent.querySelectorAll('.modelFormError')[0].classList.contains("hide") && formParent.querySelectorAll('.modelFormError')[0].textContent.trim() != "Please enter a valid Direct Phone."
              ) {
                formParent.querySelectorAll('.modelFormError')[0].classList.remove("hide")
                formParent.querySelectorAll('.modelFormError')[1].classList.remove("v-show")
              }
            }
            x++;
            if (x > 200) {
              clearInterval(labelInterval)
            }
          }, 10)

        }
        const observer3 = new MutationObserver(callback3);
        observer3.observe(targetNode3, config3);
        //obeserv the form error class 
        const targetNode = formParent.querySelector('.form-wrapper-3 form');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutationList, observer) => {
          addingClass()
        }
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        if (formParent.querySelector('#SPZ_Test').value == "") {
          formParent.querySelector('#SPZ_Test').value = "variant_1009"
        } else {
          formParent.querySelector('#SPZ_Test').value = formParent.querySelector('#SPZ_Test').value + ",variant_1009";
        }
      }
      traige1009();
    }

    let runTestTimeout;
    //body observer because the form previously removed
    const targetNode2 = document.querySelector('body');
    const config2 = { childList: true, subtree: true };
    const callback2 = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (!document.querySelector('body').classList.contains('spz_1009')) {
          clearTimeout(runTestTimeout)
          runTestTimeout = setTimeout(function () {
            run1009Test()
          }, 1000)
        }
      }

    }
    const observer2 = new MutationObserver(callback2);
    observer2.observe(targetNode2, config2);


    // 1009 code
    function traige1009() {
      //DEVELOPER - STEP 1 of 7 - Put your asana task URL here
      const asana_URL = `https://app.asana.com/1/77217210692853/project/1206002187116436/task/1209167655914920?focus=true`
      //DEVELOPER - STEP 2 of 7 Fill template_triageData array with appropriate data. 1 question equals to 1 object in array. See example below
      const template_triageData = [
        //Question 1 start
        {
          questionSuperHeading: "",
          questionHeading: "Contact Us",
          questionSubHeading: "How can we help?",
          answers: [
            {
              answerText: 'Product Inquiry/Sales',
              answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_default_05.svg',
              answerImageHover: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_pressed_05.svg'
            },
            {
              answerText: 'Channel/Partner <br> Portal Support',
              answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_default_01.svg',
              answerImageHover: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_pressed_01.svg'
            },
            {
              answerText: 'Website Support',
              answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_default_02.svg',
              answerImageHover: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_pressed_02.svg'
            },
            {
              answerText: 'Professional Services',
              answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_default_03.svg',
              answerImageHover: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_pressed_03.svg'
            },
            {
              answerText: 'Referral Program',
              answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_default_04.svg',
              answerImageHover: 'https://res.cloudinary.com/spiralyze/image/upload/v1738230195/netwrix/4002/icon_pressed_04.svg'
            }
          ]
        },
        //Question 1 end
        //Question 2 start
        {
          questionSuperHeading: "",
          questionHeading: "Contact Us",
          questionSubHeading: "How many employees are in your company?",
          answers: [
            {
              answerText: '1-150',
              answerImage: '',
              answerImageHover: ''
            },
            {
              answerText: '151-500',
              answerImage: '',
              answerImageHover: ''
            },
            {
              answerText: '501-2,000',
              answerImage: '',
              answerImageHover: ''
            },
            {
              answerText: '2,001-7,500',
              answerImage: '',
              answerImageHover: ''
            },
            {
              answerText: '7,501-25,000',
              answerImage: '',
              answerImageHover: ''
            },
            {
              answerText: '25,000+',
              answerImage: '',
              answerImageHover: ''
            }
          ]
        }
        //Question 2 end
      ]
      //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
      const template_sectionSelector = `body`
      //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
      const template_position = "beforeend" //"beforebegin", "beforeend", "afterend"
      //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
      const template_formUniqueSelector = 'form[action="/contact.html"]' //<--- form uqniue selector goes here. e.g.

      // Create modal overlay and trigger
      function createContactModal() {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'spz-modal-overlay';
        modalOverlay.innerHTML = `
          <div class="spz-modal-container">
            <div class="spz-modal-close">✕</div>
            <div class="spz-modal-content">
              ${addTriage(template_triageData, template_formUniqueSelector)}
            </div>
          </div>
        `;

        document.querySelector('.popup-wrapper-1008').insertAdjacentElement("beforebegin", modalOverlay);

        // Event listeners
        // modalOverlay.addEventListener('click', (e) => {
        //   if (e.target === modalOverlay) {
        //     closeModal();
        //   }
        // });

        const closeBtn = modalOverlay.querySelector('.spz-modal-close');
        closeBtn.addEventListener('click', closeModal);

        function closeModal() {
          document.querySelector('.popup-wrapper-1008 .close').click();
          document.querySelector('.question-1.spz-hidden')?.classList.remove('spz-hidden');
          document.querySelector('.question-2:not(.spz-hidden)')?.classList.add('spz-hidden');
          document.querySelector('.spz-form-wrap:not(.spz-hidden)')?.classList.add('spz-hidden');
          document.querySelectorAll('.questions-progress .progress-item').forEach((item, index) => {
            item.classList.remove('active', 'completed');
            if (index === 0) {
              item.classList.add('active');
            }
          })
        }
      }

      // Initialize modal
      createContactModal();

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      function addTriage(template_triageData, formSelector) {
        const triageTemplate = `
        <div class="spz-triage-wrap">
        	<div class="questions-progress">
        		${template_triageData.length !== 0
          &&
          template_triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')
          }
        		<div class="progress-item"></div>
        	</div>
        	<div class="questions-wrap">
            ${template_triageData.length !== 0
          &&
          template_triageData.map((item, index) => {
            return `
                      <div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''}">
                        <div class="question-heading">${item.questionHeading}</div>
                        <div class="question-subheading">${item.questionSubHeading}</div>
                        <div class="answers-wrap">
                          ${item.answers.map((itemm, indexx) => {
              return `
                            <div class="answer-item" data-value="${itemm.answerText}">
                              ${itemm.answerImage.length !== 0 ?
                  `<img src="${itemm.answerImage}" alt="${itemm.answerText}" class="answer-image"/>` :
                  ``
                }
                              ${itemm.answerImage.length !== 0 ?
                  `<img src="${itemm.answerImageHover}" alt="${itemm.answerText}" class="answer-imageActive"/>` :
                  ``
                }
                              <div class="answer-text">${itemm.answerText}</div>
                              <div class="answer-checkbox"></div>
                            </div>
                            `
            }).join('')
              }
                      </div>
                      <div class="button-container">
                        ${index > 0 ? `<div class="back-question"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                          <path d="M20.5 7H2.03849" stroke="#464646" stroke-width="1.5"></path>
                          <path d="M8.19141 0.846191L2.03756 7.00004L8.19141 13.1539" stroke="#464646" stroke-width="1.5"></path>
                        </svg>
                        Back</div>` : ''}
                        <div class="next-question">Next</div>
                      </div>
                    </div>
                        `
          }).join('')
          }
            <div class="question-form spz-hidden spz-form-wrap">
              <div class="form-heading">Contact Us</div>
              <div class="form-subheading">Get in touch with our team</div>
              <div class="button-container">
                <div class="back-question">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                    <path d="M20.5 7H2.03849" stroke="#464646" stroke-width="1.5"></path>
                    <path d="M8.19141 0.846191L2.03756 7.00004L8.19141 13.1539" stroke="#464646" stroke-width="1.5"></path>
                  </svg>
                  Back
                </div>
                <div class="next-question">Submit</div>
              </div>
            </div>
        	</div>
        </div>
        `;
        return triageTemplate;
      }

      // Initialize triage functionality after modal is created
      function initializeTriage() {
        // Checking answers listener
        document.querySelectorAll('.answer-item').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            // Remove checked from all items in current question
            const currentQuestion = item.closest('.question-item');
            currentQuestion.querySelectorAll('.answer-item').forEach(answer => {
              answer.classList.remove('checked');
            });
            // Add checked to clicked item
            item.classList.add('checked');


            setTimeout(() => {
              const isQ1 = e.target.closest('.question-1') || e.target.parentElement.closest('.question-1');
              const isQ2 = e.target.closest('.question-2') || e.target.parentElement.closest('.question-2');

              // Only update Q1 storage if Q1 item was clicked
              if (isQ1) {
                const q1Selected = document.querySelector('.question-1 .answer-item.checked');
                if (q1Selected) {
                  storeSelection('question-1-selection', q1Selected.getAttribute('data-value'));
                }
              }

              if (isQ2) {
                const q2Selected = document.querySelector('.question-2 .answer-item.checked');
                if (q2Selected) {
                  storeSelection('question-2-selection', q2Selected.getAttribute('data-value'));
                }
              }
            }, 0);
          })
        })
        function showError() {
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
            errorMsg.innerHTML = `${svgIcon} <span>Please select an option</span>`;

            document.querySelector('.question-item:not(.spz-hidden) .answers-wrap').insertAdjacentElement("afterend", errorMsg);
          }
        }
        function removeError() {
          const errorMsg = document.querySelector('.error-message');
          if (errorMsg) {
            errorMsg.remove();
          }
        }
        //Next question click listener
        document.querySelectorAll('.next-question').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            const currentQuestion = item.closest('.question-item, .question-form');
            const nextQuestion = currentQuestion.nextElementSibling;

            // Check if we're in a question step
            if (currentQuestion.classList.contains('question-item')) {
              // Check if an answer is selected
              const selectedAnswer = currentQuestion.querySelector('.answer-item.checked');
              if (!selectedAnswer) {
                showError();
                return;
              } else {
                removeError();
              }
            }

            // Check if we're submitting the form
            if (item.textContent.trim() === 'Submit') {
              // Handle form submission
              const form = document.querySelector(template_formUniqueSelector);
              if (form) {
                form.submit();
              } else {
                showError();
                // Close modal after submission
                document.querySelector('.spz-modal-overlay').classList.add('spz-hidden');
              }
              return;
            }

            currentQuestion.classList.add('spz-hidden');
            nextQuestion.classList.remove('spz-hidden');

            // Update progress
            const activeProgress = document.querySelector('.progress-item.active');
            if (activeProgress) {
              activeProgress.classList.add('completed');
              activeProgress.classList.remove('active');
              activeProgress.nextElementSibling.classList.add('active');
            }
          })
        })

        // Back button functionality
        document.querySelectorAll('.back-question').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            const currentQuestion = item.closest('.question-item, .question-form');
            const prevQuestion = currentQuestion.previousElementSibling;

            currentQuestion.classList.add('spz-hidden');
            prevQuestion.classList.remove('spz-hidden');

            // Update progress
            const activeProgress = document.querySelector('.progress-item.active');
            if (activeProgress) {
              activeProgress.classList.remove('active');
              activeProgress.previousElementSibling.classList.add('active');
              activeProgress.previousElementSibling.classList.remove('completed');
            }
          })
        })

        document.querySelector('.question-form').appendChild(document.querySelector('.popup-wrapper-1008'));

        function storeSelection(key, value) {
          localStorage.setItem(key, value);
        }

        // Function to retrieve selections from localStorage
        function retrieveSelection(key) {
          return localStorage.getItem(key);
        }

        // Function to retrieve selections on page load and apply the checked state
        function loadSelections() {
          const q1Selection = retrieveSelection('question-1-selection');
          if (q1Selection) {
            document.querySelectorAll('.question-1 .answer-item').forEach(item => {
              if (item.getAttribute('data-value') === q1Selection) {
                item.classList.add('checked');
              }
            });
          }

          const q2Selection = retrieveSelection('question-2-selection');
          if (q2Selection) {
            document.querySelectorAll('.question-2 .answer-item').forEach(item => {
              if (item.getAttribute('data-value') === q2Selection) {
                item.classList.add('checked');
              }
            });
          }
        }


        setTimeout(() => {
          loadSelections();
        }, 200);

      }

      // Initialize triage after DOM is ready
      initializeTriage();
    }

  }
}, 10)
