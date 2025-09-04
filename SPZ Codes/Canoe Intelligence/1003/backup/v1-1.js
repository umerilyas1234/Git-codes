function spz1003() {
  if (!document.querySelector('body').classList.contains('spz_1003')) {
    document.querySelector('body').classList.add('spz_1003');

    document.querySelector('.demo-request').classList.add('hero_section');
    document.querySelector('.demo_form').classList.add('heroContent');
    document.querySelector('.form_bg').parentElement.classList.add('hero-form-wrapper');
    document.querySelector('.form_bg').parentElement.classList.remove('col-lg-8', 'col-md-12');
    document.querySelector('.form_bg').parentElement.parentElement.classList.add('heroRight');
    document.querySelector('.form_bg').parentElement.parentElement.classList.remove('row');
    document.querySelector('.heroRight .hero-form-wrapper').classList.add('spz-hidden');

    document.querySelector('.heroContent').insertAdjacentHTML('beforebegin', `<div class="container">
          <a href="https://canoeintelligence.com/" title="Canoe" class="site-logo">
              <img width="120" height="27" src="https://canoeintelligence.com/wp-content/uploads/2024/05/brand-canoe-white.svg" alt="Canoe">
          </a>
      </div>`);

    document.querySelector('.heroContent').insertAdjacentHTML('afterbegin', `<div class="heroLeft">
          <h1>Streamline every step of alts management</h1>
          <ul>
            <li><strong>Never miss a document.</strong> Automatically retrieve docs from 500+ portals and inboxes. Focus on strategy, not logistics.</li>
            <li><strong>Transform raw data.</strong> Extract crucial data points and manage cap calls, distributions, fund metrics, and more with industrial-grade AI.</li>
            <li><strong>Power better decisions.</strong> Unlock portfolio insights and deliver clean data wherever you need it.</li>
          </ul>
      </div>`);

    document.querySelector('.hero-form-wrapper').insertAdjacentHTML('afterend', `<ul>
          <li><strong>Never miss a document.</strong> Automatically retrieve docs from 500+ portals and inboxes. Focus on strategy, not logistics.</li>
          <li><strong>Transform raw data.</strong> Extract crucial data points and manage cap calls, distributions, fund metrics, and more with industrial-grade AI.</li>
          <li><strong>Power better decisions.</strong> Unlock portfolio insights and deliver clean data wherever you need it.</li>
      </ul>`);

    document.querySelector('.heroContent').insertAdjacentHTML('afterend', `<div class="container">
          <h3>Trusted by over 400 clients, from single family offices to large institutions</h3>
          <div class="logo_list">
            <ul>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890296/canoeintelligence/1003/blackstone-logo_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/blackstone-logo.svg" alt="blackstone">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890297/canoeintelligence/1003/icon_7.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884538/canoeintelligence/1003/icon_3.svg" alt="cambridge associates">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890296/canoeintelligence/1003/icon_6.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884540/canoeintelligence/1003/icon_4.svg" alt="hamilton lane">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/prime-quadrant-logo_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/prime-quadrant-logo.svg" alt="prime quadrant">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/provenio-capital_idj2lhoel1_1-1_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/provenio-capital_idj2lhoel1_1-1.svg" alt="provenio capital">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/swancap-logo_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/swancap-logo.svg" alt="swancap">
                  </picture>
                </div>
              </li>
            </ul>
          </div>
        </div>`);

    document.querySelector('.form_bg').insertAdjacentHTML('afterbegin', `<h3>Get a demo</h3>`);
    // Footer code
    document.querySelector('button#hs_show_banner_button')?.removeAttribute('style');


    // Form visual changes code
    function formModification() {

      // Add Label dynamically
      document.querySelectorAll('.hero_section .gfield.gfield_visibility_visible:not(.gform_hidden)').forEach(function (el) {
        const label = el.querySelector('label');
        const inputElement = el.querySelector('input, select, textarea');

        if (inputElement && label) {
          if (label && label.innerText.includes('Company Type*')) {
            label.innerText = 'Company type*';
          }
          if (label && label.innerText.toLowerCase().includes('country / region')) {
            console.log('label text is = ' + label.innerText + "'");
            label.innerText = 'Country*';
          }
          if (inputElement.tagName === 'TEXTAREA') {
            label.innerText = 'Message (optional)';
          }
          inputElement.setAttribute('placeholder', label.innerText);
          inputElement.setAttribute('autocomplete', 'no-fill');
        }
      });

      // Reorder fields
      const field16 = document.querySelector('.hero_section #field_3_16');
      const field2 = document.querySelector('.hero_section #field_3_2');
      const field9 = document.querySelector('.hero_section #field_3_9');
      const footer = document.querySelector('.hero_section .gform_footer');
      field9.innerHTML = `Canoe Intelligence uses your contact information to inform you about our products and services. You can unsubscribe anytime. For details on opting out and our privacy practices, see our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.`;
      if (field16 && field2) field16.after(field2);
      if (footer && field9) footer.after(field9);

      // Input/Select/Textarea focus/blur/change logic
      const allInputs = document.querySelectorAll('.hero_section .gform_fields .gfield.gfield_visibility_visible input, .hero_section .gform_fields .gfield.gfield_visibility_visible select, .hero_section .gform_fields .gfield.gfield_visibility_visible textarea');

      function labelChange(el) {
        const field = el.closest('.gfield');
        if (!field) return;

        if (el.tagName === 'SELECT') {
          const label = field.querySelector('label');
          const selectValue = el.value;

          if (label && selectValue === '') {
            const firstOption = el.querySelector('option');
            if (firstOption) {
              firstOption.innerText = label.innerText;
            }
          }
        }

        if (!el.value) {
          field.classList.remove('active', 'focused');
        } else {
          field.classList.add('active');
          field.classList.remove('focused');
        }
      }

      allInputs.forEach(function (el) {
        el.addEventListener('focus', () => {
          el.closest('.gfield')?.classList.add('active', 'focused');
        });

        el.addEventListener('blur', () => {
          labelChange(el);
        });

        el.addEventListener('change', () => {
          labelChange(el);

          // Reset state field class if hidden
          const stateField = document.querySelector('#field_3_18');
          if (stateField?.style.display === 'none') {
            stateField.classList.remove('active');
          }
        });

        // Initial check
        labelChange(el);
      });

      document.querySelector('.hero_section .gform-footer.gform_footer button')?.classList.add('spz_1003_v1');
    }


    // Call the function to modify the form on page load
    setTimeout(() => {
      formModification();
      traigeform();
    }, 500);

    // Call the function to modify the form on gform_post_render event
    jQuery(document).on('gform_post_render', function (event, formId) {
      // Only select the form inside .hero_section
      const $heroForm = jQuery('.hero_section form#gform_3');

      if ($heroForm.length && !$heroForm.data('modified')) {
        $heroForm.data('modified', true);
        console.log('form rendered');
        document.querySelector('body').classList.add('removeAnimation');
        formModification();
        // Remove the animation class after a short delay       
        setTimeout(() => {
          document.querySelector('body').classList.remove('removeAnimation');
        }, 2000);
        const validationMessage = document.querySelector('.hero_section .gfield--input-type-email .validation_message');
        if (validationMessage) {
          validationMessage.innerHTML = validationMessage.innerHTML.replace(
            'The email address entered is invalid, please check the formatting (e.g. email@domain.com).',
            'Invalid email format.'
          );
        }
      }
    });


    function traigeform() {
      //DEVELOPER - STEP 1 of 7 - Put your asana task URL here
      const asana_URL = `https://app.asana.com/1/77217210692853/project/1206002187116436/task/1209983275989966?focus=true`
      //DEVELOPER - STEP 2 of 7 Fill template_triageData array with appropriate data. 1 question equals to 1 object in array. See example below
      const template_triageData = [
        //Question 1 start
        {
          questionHeading: "Get a demo",
          questionSubHeading: "What kind of investment professional are you?",
          answers: [
            {
              dataValue: 'Wealth Manager',
              alt: 'Wealth Manager',
              answerText: 'Wealth<br>Manager',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884533/canoeintelligence/1003/frame.svg'
            },
            {
              dataValue: 'Institutional Investor',
              alt: 'Institutional Investor',
              answerText: 'Institutional<br>Investor',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884535/canoeintelligence/1003/icon_1.svg'
            },
            {
              dataValue: 'Family Office',
              alt: 'Family Office',
              answerText: 'Family<br>Office',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/icon_2.svg'
            },
            {
              dataValue: 'Capital Allocator',
              alt: 'Capital Allocator',
              answerText: 'Capital<br>Allocator',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884534/canoeintelligence/1003/layer_1.svg'
            },
            {
              dataValue: 'Global Asset Servicer',
              alt: 'Global Asset Servicer',
              answerText: 'Global Asset<br>Servicer',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/frame_1.svg'
            },
            {
              dataValue: 'Other',
              alt: 'Other',
              answerText: 'Other',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1748884543/canoeintelligence/1003/icon_5.svg'
            }
          ]
        },
        //Question 1 end
        //Question 2 start
        {
          questionHeading: "Get a demo",
          questionSubHeading: "What would you like to accomplish?",
          answers: [
            {
              dataValue: 'Enhance Data Accuracy',
              alt: 'Enhance Data Accuracy',
              answerText: 'Enhance Data<br>Accuracy',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652093/canoeintelligence/1003/search-zoom-in.svg'
            },
            {
              dataValue: 'Automate Data Extraction',
              alt: 'Automate Data Extraction',
              answerText: 'Automate Data<br>Extraction',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652093/canoeintelligence/1003/database.svg'
            },
            {
              dataValue: 'Centralize Data & Documents',
              alt: 'Centralize Data & Documents',
              answerText: 'Centralize Data<br>& Documents',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652102/canoeintelligence/1003/icon_13.svg'
            },
            {
              dataValue: 'Optimize Workflows & Ops',
              alt: 'Optimize Workflows & Ops',
              answerText: 'Optimize<br>Workflows & Ops',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652097/canoeintelligence/1003/icon_10.svg'
            },
            {
              dataValue: 'Get Insights & Analysis',
              alt: 'Get Insights & Analysis',
              answerText: 'Get Insights &<br>Analysis',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652101/canoeintelligence/1003/icon_12.svg'
            },
            {
              dataValue: 'Other',
              alt: 'Other',
              answerText: 'Other',
              answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1749652099/canoeintelligence/1003/icon_11.svg'
            }
          ]
        }
        //Question 2 end
      ]
      //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
      const template_sectionSelector = `.heroRight`
      //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
      const template_position = "afterbegin" //"beforebegin", "beforeend", "afterend"
      //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
      const template_formUniqueSelector = ".heroRight .form_bg" //<--- form uqniue selector goes here. e.g.
      //DEVELOPER - STEP 6 of 7 Find the class or ID of the control inputs and place it below in

      addTriage(template_triageData, template_formUniqueSelector)

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      function addTriage(template_triageData, formSelector) {
        const triageTemplate = `
        <div class="spz-triage-wrap">
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
                            <div class="answer-item"  data-value="${itemm.dataValue}">
                              <div class="answer-checkbox"></div>
                              ${itemm.answerImage.length !== 0 ?
                  `<img src="${itemm.answerImage}" alt="${itemm.alt}" class="answer-image"/>` :
                  ``
                }
                              <div class="answer-text">${itemm.answerText}</div>
                            </div>
                          `
            }).join('')
              }
                      </div>
                      <div class="next-question spz_1003_v1">Next</div>
                    </div>
                    `
          }).join('')
          }
	          <div class="question-form spz-hidden spz-form-wrap">
            </div>
				  </div>
        </div>  
        `;
        //Append triage section
        document.querySelector(template_sectionSelector).insertAdjacentHTML(
          template_position,
          triageTemplate,
        );
        // Checking answers listener
        document.querySelectorAll('.answer-item').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            if (e.target.classList.contains('answer-item')) {
              if (e.target.closest('.question-1')) {
                removeCheckedClass();
                e.target.classList.contains('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked');
              } else if (e.target.closest('.question-2')) {
                e.target.classList.contains('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked');
              }
            } else {
              if (e.target.parentElement.closest('.question-1')) {
                removeCheckedClass();
                e.target.parentElement.classList.contains('checked') ? e.target.parentElement.classList.remove('checked') : e.target.parentElement.classList.add('checked')
              } else if (e.target.parentElement.closest('.question-2')) {
                e.target.parentElement.classList.contains('checked') ? e.target.parentElement.classList.remove('checked') : e.target.parentElement.classList.add('checked');
              }
            }

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
                const selectedValues = Array.from(document.querySelectorAll('.question-2 .answer-item.checked'))
                  .map(el => el.getAttribute('data-value'));
                if (selectedValues.length > 0) {
                  storeSelection('question-2-selection', JSON.stringify(selectedValues));
                } else {
                  localStorage.removeItem('question-2-selection');
                }
              }
            }, 0);


          })
        })

        document.querySelector('.question-1 .next-question').classList.add('step_one');
        document.querySelector('.question-2 .next-question').classList.add('step_two');
        var question_oneItem = document.querySelectorAll('.question-1 .answer-item');
        function removeCheckedClass() {
          question_oneItem.forEach(item => {
            item.classList.remove('checked');
          });
        }


        //Next question click listener
        document.querySelectorAll('.next-question').forEach((item, index) => {
          item.addEventListener('click', (e) => {
            item.parentElement.classList.add('spz-hidden')
            item.parentElement.nextElementSibling.classList.remove('spz-hidden')

            const inputField = document.querySelector('.heroRight #input_3_31');
            const values = [];

            if (item.classList.contains('step_one')) {
              document.querySelector('.heroRight #input_3_31').value = '';
              const q1Selected = document.querySelector('.question-1 .answer-item.checked');
              if (q1Selected) {
                values.push(q1Selected.getAttribute('data-value') || q1Selected.innerText.trim());
              }
            }

            if (item.classList.contains('step_two')) {
              const q2Selected = document.querySelectorAll('.question-2 .answer-item.checked');
              q2Selected.forEach(el => {
                values.push(el.getAttribute('data-value') || el.innerText.trim());
              });
              document.querySelector('.spz-triage-wrap').classList.add('spz-hidden');
              document.querySelector('.heroRight .hero-form-wrapper').classList.remove('spz-hidden');
            }

            if (inputField) {
              const currentValue = inputField.value.trim();
              const newValue = [...new Set([...currentValue.split(',').map(v => v.trim()).filter(Boolean), ...values])].join(', ');
              inputField.value = newValue;
            }

          })
        });

        // Function to store selections in localStorage
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

          const q2SelectionRaw = retrieveSelection('question-2-selection');
          if (q2SelectionRaw) {
            try {
              const q2Selections = JSON.parse(q2SelectionRaw);
              document.querySelectorAll('.question-2 .answer-item').forEach(item => {
                if (q2Selections.includes(item.getAttribute('data-value'))) {
                  item.classList.add('checked');
                }
              });
            } catch (e) {
              console.warn('Invalid JSON in question-2-selection', e);
            }
          }

          // ✅ Update field
          const inputField = document.querySelector('.heroRight #input_3_31');
          console.log('Field found:', inputField);
          const values = [];

          if (q1Selection) values.push(q1Selection);

          if (q2SelectionRaw) {
            try {
              const q2Selections = JSON.parse(q2SelectionRaw);
              values.push(...q2Selections);
            } catch (e) { }
          }

          if (inputField) {
            inputField.value = values.join(', ');
            console.log('Input value set to:', inputField.value);
          }
        }


        setTimeout(() => {
          loadSelections();
        }, 200);

        // if (!document.querySelector(formSelector)) {
        //   document
        //     .querySelector(".spz-form-wrap")
        //     .insertAdjacentHTML(
        //       "beforeend",
        //       "<div style='color:red;'>Add proper form selector in code to load form</div>"
        //     );
        // } else {
        //   const formLoaded = setInterval(() => {
        //     if (
        //       document.querySelector(formSelector) &&
        //       document.querySelectorAll(`${formSelector} input`).length > 0
        //     ) {
        //       clearInterval(formLoaded);
        //       document.querySelector('.question-form').appendChild(document.querySelector(template_formUniqueSelector))
        //     }
        //   });
        // }
      }

    }
  }
}

spz1003();



(function () {

  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  const expName = '1003'; //experiment name should be #1001, #1002, #1003 etc.
  const variantName = `#` + expName + `_spz_var`; //variantName should be _V1, _V2, _TC etc.
  const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com

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
      document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
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
    var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

    if (!ExistingExperimentName) {

      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {

      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {

      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');

      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;

      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }
}());
