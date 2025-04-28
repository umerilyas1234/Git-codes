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
  if (!document.querySelector("body").classList.contains("spz_t2006")) {
      document.querySelector("body").classList.add("spz_t2006");
      setTimeout(() => {
          const containerIndex = document.querySelector('.cookie-information-cont') ? 6 : 5;
          document.querySelector(`.spz_t2006 > div:nth-of-type(${containerIndex}) form`).classList.add("spz_form");
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
                  console.log("ahgjgdjhfgdhsak");
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
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle1" name="checkbox_item1" id="checkbox_item_1" value="Data Security Posture Management">
                            <label for="checkbox_item_1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                  <path d="M12.6152 19.132H26.8627" stroke="#4D7C7C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12.6152 24.9141V5.71439" stroke="#4D7C7C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M25.5671 5.63818H7.4339C6.71857 5.63818 6.13867 6.21808 6.13867 6.93341V25.0666C6.13867 25.7819 6.71857 26.3618 7.4339 26.3618H25.5671C26.2824 26.3618 26.8623 25.7819 26.8623 25.0666V6.93341C26.8623 6.21808 26.2824 5.63818 25.5671 5.63818Z" stroke="#4D7C7C" stroke-width="2.5"/>
                                </svg>
                                <span>Data Security <br> Posture Management</span>
                            </label>
                        </div>
                        <div class="steps-control">
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle2" name="checkbox_item2" id="checkbox_item_2" value="Identity Threat Detection & Response">
                            <label for="checkbox_item_2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                  <path d="M26.5189 8.33959C27.3777 8.71809 27.9502 9.52232 27.9502 10.4211C27.9502 22.7208 18.8374 28.5868 16.4518 28.5868C14.0662 28.5868 5.04883 22.6262 5.04883 10.4211C5.04883 9.52232 5.57365 8.71809 6.43245 8.33959L15.593 4.55507C15.8793 4.46045 16.1655 4.41315 16.4995 4.41315C16.7858 4.41315 17.072 4.46045 17.3583 4.55507L26.5189 8.33959ZM16.4995 26.3161C20.9367 24.4712 25.6601 18.6525 25.6601 10.4211L16.4995 6.63655L7.33897 10.4211C7.33897 18.4633 11.8238 24.4239 16.4995 26.3161Z" fill="#D22730" stroke="#D22730" stroke-width="0.5"/>
                                  <path d="M16.5 17.1902V19.7475" stroke="#D22730" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M16.5005 17.6512C18.1042 17.6512 19.4043 16.3511 19.4043 14.7474C19.4043 13.1437 18.1042 11.8436 16.5005 11.8436C14.8968 11.8436 13.5967 13.1437 13.5967 14.7474C13.5967 16.3511 14.8968 17.6512 16.5005 17.6512Z" fill="#D22730"/>
                                </svg>
                                <span>Identity Threat Detection & Response</span>
                            </label>
                        </div>
                        <div class="steps-control">
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle3" name="checkbox_item3" id="checkbox_item_3" value="Identity Management">
                            <label for="checkbox_item_3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <path d="M19.1289 16H28.0912" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M5.0459 16H14.0082" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M16.5576 13.4394V4.47708" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M16.5576 27.523V18.5607" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M26.1514 22.4017C27.3771 20.5707 28.0918 18.3688 28.0918 16C28.0918 9.63603 22.9327 4.47708 16.5688 4.47708C14.9794 4.47708 13.4652 4.79888 12.0877 5.38088M6.58746 10.2386C5.60704 11.9334 5.0459 13.9012 5.0459 16C5.0459 22.364 10.2048 27.523 16.5688 27.523C18.1582 27.523 19.6726 27.2012 21.05 26.6192" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M21.674 16C21.674 17.3692 21.1371 18.613 20.2625 19.5319C19.3304 20.5111 18.015 21.1213 16.5573 21.1213C13.7313 21.1213 11.4404 18.8284 11.4404 16C11.4404 13.1715 13.7313 10.8787 16.5573 10.8787C19.3832 10.8787 21.674 13.1715 21.674 16Z" stroke="#FF8200" stroke-width="2.5"/>
                                <path d="M8.71986 11.5934L7.47643 8.31802L4.40527 9.51346" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.251 21.1213L24.8733 24.5694L28.1114 23.9579" stroke="#FF8200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                                <span>Identity <br> Management</span>
                            </label>
                        </div>
                        <div class="steps-control">
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle4" name="checkbox_item4" id="checkbox_item_4" value="Privileged Access Management">
                            <label for="checkbox_item_4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                  <path d="M6.05762 11.1022L8.19961 8.84119" stroke="#E98CDA" stroke-width="3" stroke-linecap="round"/>
                                  <path d="M9.48047 14.753L11.6225 12.4921" stroke="#E98CDA" stroke-width="3" stroke-linecap="round"/>
                                  <path d="M5.83398 6.50012L15.2682 14.7783" stroke="#E98CDA" stroke-width="3" stroke-linecap="round"/>
                                  <path d="M14.6143 19.9028C14.6143 23.3713 17.426 26.1831 20.8944 26.1831C24.363 26.1831 27.1747 23.3713 27.1747 19.9028C27.1747 16.4344 24.363 13.6226 20.8944 13.6226C17.426 13.6226 14.6143 16.4344 14.6143 19.9028Z" stroke="#E98CDA" stroke-width="3"/>
                                </svg>
                              <span>Privileged Access Management</span>
                            </label>
                        </div>
                        <div class="steps-control">
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle5" name="checkbox_item5" id="checkbox_item_5" value="Directory Management">
                            <label for="checkbox_item_5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                  <g clip-path="url(#clip0_24284_12579)">
                                    <path d="M25.3125 29H8.6875C8.37256 29 8.07051 28.8736 7.84781 28.6485C7.62511 28.4235 7.5 28.1183 7.5 27.8V6.2C7.5 5.88174 7.62511 5.57652 7.84781 5.35147C8.07051 5.12643 8.37256 5 8.6875 5H20.1452C20.4122 5 20.6682 5.1068 20.856 5.2966L26.2108 10.7078C26.3961 10.895 26.5 11.1477 26.5 11.4111V27.8C26.5 28.1183 26.3749 28.4235 26.1522 28.6485C25.9295 28.8736 25.6274 29 25.3125 29Z" stroke="#0E6027" stroke-width="3"/>
                                    <path d="M13.5 19H20.5" stroke="#0E6027" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M13.5 23H20.5" stroke="#0E6027" stroke-width="2.5" stroke-linecap="round"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_24284_12579">
                                      <rect x="0.5" width="32" height="32" rx="8" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>Directory <br> Management</span>
                            </label>
                        </div>
                        <div class="steps-control">
                            <input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6" id="checkbox_item_6" value="Endpoint Management">
                            <label for="checkbox_item_6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <path d="M16.9307 19.5043V22.5208" stroke="#6929C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.9302 20.7362C18.5339 20.7362 19.834 19.4362 19.834 17.8324C19.834 16.2287 18.5339 14.9286 16.9302 14.9286C15.3264 14.9286 14.0264 16.2287 14.0264 17.8324C14.0264 19.4362 15.3264 20.7362 16.9302 20.7362Z" fill="#6929C4"/>
                                <path d="M16.8834 28.7275C16.9139 28.738 16.9465 28.7379 16.977 28.7271C21.8263 27.0037 26.9687 21.6511 27.0151 14.086C27.0154 14.0247 26.9766 13.9693 26.9187 13.9491L16.9778 10.4849C16.9471 10.4741 16.9137 10.4741 16.883 10.4849L6.94205 13.9491C6.88417 13.9693 6.84533 14.0246 6.84571 14.0858C6.89073 21.4793 11.7765 26.9609 16.8834 28.7275Z" stroke="#6929C4" stroke-width="2.5"/>
                                <path d="M11.168 11.909V6.14619C11.168 4.55483 12.458 3.26477 14.0494 3.26477H19.8122C21.4036 3.26477 22.6937 4.55483 22.6937 6.14619V7.58691" stroke="#6929C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <span>Endpoint <br> Management</span>
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
                document.querySelector('#checkbox_item_1').click();
              }
              if (document.cookie.includes('Identity Threat Detection & Response')) {
                document.querySelector('#checkbox_item_2').click();
              }
              if (document.cookie.includes('Identity Management')) {
                document.querySelector('#checkbox_item_3').click();
              }
              if (document.cookie.includes('Privileged Access Management')) {
                document.querySelector('#checkbox_item_4').click();
              }
              if (document.cookie.includes('Directory Management')) {
                document.querySelector('#checkbox_item_5').click();
              }
              if (document.cookie.includes('Endpoint Management')) {
                document.querySelector('#checkbox_item_6').click();
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

          setTimeout(() => {
              document.querySelector('.form_outer').style.display = 'flex';
              document.querySelector('.form_outer #ModalForm_product').value = '';
              document.querySelector('.form_outer #ModalForm_product').setAttribute('value', '');
              // animateLabels(inputsSelectors, labelValues);
              document.querySelector('.spz_form #SPZ_Test').value = 'control_2007';
          }, 1000);

          // adding caption
          //obeserv the form error class 
          const targetNode = document.querySelector('.spz_form');
          const config = { attributes: true, childList: true, subtree: true };
          const callback = (mutationList, observer) => {
              addClass();
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
          const expName = '2007';
          //variantName should be _V1, _V2, _TC etc.
          const variantName = `control_` + expName;

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
