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
  if (!document.querySelector("body").classList.contains("spz_2013_v1")) {
    document.querySelector("body").classList.add("spz_2013_v1");
    setTimeout(() => {
      const containerIndex = document.querySelector('.cookie-information-cont') ? 6 : 5;
      document.querySelector(`.spz_2013_v1 > div:nth-of-type(${containerIndex}) form`).classList.add("spz_form");
      document.querySelector('.spz_form #ModalForm_nwf_phone').closest('div').insertAdjacentHTML('afterend', `
        <div class="w_100">
          <input placeholder="" value="" name="ModalForm[nwf_demo]" id="ModalForm_nwf_demo" type="text" class="control">
        </div>
      `);
      //DEV 1/6. Put your asana task URL here
      const asana_URL = `https://app.asana.com/0/1199937683692504/1208707507041619/f`;
      //DEV 2/6. Add content inside the box
      const formElements = {
        customHTMLBefore: `
                ${ /*This html goes is inserted before the form */''}
                  <div class="form_heading">
                    <h2>Get a demo</h2>
                    <div class="rating"><img src="//res.cloudinary.com/spiralyze/image/upload/v1754901989/netwrix/2013/logo.svg" alt="Capterra logo"><strong><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/2013/stars_1.webp" alt="Rating stars"><span><b>4.7 </b> (206 reviews)</span></strong></div>
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
      const inputsSelectors = [".spz_form #ModalForm_nwf_fname", ".spz_form #ModalForm_nwf_lname", ".spz_form #ModalForm_nwf_email", ".spz_form #ModalForm_nwf_phone", ".spz_form #ModalForm_nwf_demo"]

      //DEV 5/6. Add Form labels below
      const labelValues = ["First Name", "Last Name", "Business Email", "Phone", "What would you like to demo?"]

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
        if (document.querySelector('.spz_form #SPZ_Test').value == "") {
          document.querySelector('.spz_form #SPZ_Test').value = "variant_2013"
        } else {
          document.querySelector('.spz_form #SPZ_Test').value = document.querySelector('.spz_form #SPZ_Test').value + ",variant_2013";
        }

      }, 1000);

      document.querySelector('.spz_2013_v1 .spz_form .btn-red-fill').insertAdjacentHTML('beforebegin', `
        <span class="btn btn_filled_red btn-red-fill form_btnTwo show spz_2013_v1">Submit</span>
      `);

      function updatedText() {
        const errMsg = document.querySelector('.spz_2013_v1 .spz-form-wrap form .modelFormError');
        if (errMsg) {
          let html = errMsg.innerHTML;

          if (html.includes('Direct Phone cannot be blank.')) {
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.add('er_1');
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.remove('er_2');
          } else if (html.includes('Please enter a valid Direct Phone')) {
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.remove('er_1');
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.add('er_2');
          } else {
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.remove('er_1');
            errMsg.closest('.spz_2013_v1 .spz-form-wrap form .modelFormError').classList.remove('er_2');
          }
        }
      }

      window.addEventListener('click', function (e) {
        if (e.target.classList.contains('form_btnTwo')) {
          const firstName = document.querySelector('.spz_form #ModalForm_nwf_fname')?.value.trim() || "";
          const lastName = document.querySelector('.spz_form #ModalForm_nwf_lname')?.value.trim() || "";
          const phone = document.querySelector('.spz_form #ModalForm_nwf_phone')?.value.trim() || "";
          const demo = document.querySelector('.spz_form #ModalForm_nwf_demo')?.value.trim() || "";
          const email = document.querySelector('.spz_form #ModalForm_nwf_email')?.value;

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          const emailValid = emailPattern.test(email);
          if (emailValid) {
            document.querySelector('.spz_form #ModalForm_nwf_email').closest('.spz-input-wrap').classList.add('email_valid');
          } else {
            document.querySelector('.spz_form #ModalForm_nwf_email').closest('.spz-input-wrap').classList.remove('email_valid');
          }

          // Extract digits from phone
          // const phoneDigits = phone.replace(/\D/g, "");

          if (firstName == "" || lastName == "" || phone == "" || !emailValid) {
            console.log("Form submitted with errors");
            document.querySelector('.spz_form .modelFormSubmit').click();
            setTimeout(() => {
              removeError();
            }, 1000);
            return;
          } else {
            console.log("Form submitted successfully 2");
            setTimeout(() => {
              showError();
            }, 1000);
          }

          // Check if all required fields are filled and phone number is valid
          if (firstName !== "" && lastName !== "" && phone !== "" && emailValid && demo !== "") {
            console.log("Form submitted successfully 3");

            setTimeout(() => {
              removeError();
            }, 1000);
            // e.target.classList.remove('show');
            document.querySelector('.spz_form .modelFormSubmit').click();
          }
        }
      });

      function showError() {
        removeError();
        let errorMsg = document.querySelector('.error-message');
        var fieldName = "";
        if (document.querySelector('#ModalForm_nwf_demo')?.value.trim() === "") {
          fieldName = "Message";
          // document.querySelector('#ModalForm_nwf_demo').closest('.spz-input-wrap').classList.add('error');
        }
        if (!errorMsg) {
          document.querySelector('.spz_form .modelFormError').insertAdjacentHTML('beforebegin',
            ` <div class="modelFormError v-show error-message">${fieldName} cannot be blank.</div>`
          );
        }
      }


      function removeError() {
        // document.querySelector('.spz_form #ModalForm_nwf_fname').closest('.spz-input-wrap').classList.remove('error');
        // document.querySelector('.spz_form #ModalForm_nwf_lname').closest('.spz-input-wrap').classList.remove('error');
        // document.querySelector('.spz_form #ModalForm_nwf_phone').closest('.spz-input-wrap').classList.remove('error');
        // document.querySelector('.spz_form #ModalForm_nwf_email').closest('.spz-input-wrap').classList.remove('error');
        const errorMsg = document.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      }

      // adding caption
      //obeserv the form error class 
      const targetNode = document.querySelector('.spz_form .modelFormSubmit');
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationList, observer) => {
        addClass();
        updatedText();
        //button
        if (document.querySelector('.spz_form .btn-red-fill').value == "Schedule Demo") {
          document.querySelector('.spz_form .btn-red-fill').classList.add('spz_2005_variant');
          document.querySelector('.spz_form .btn-red-fill').value = "Submit";
        }
        if (document.querySelector('html').classList.contains('is-clipped')) {
          document.querySelector('html').classList.remove('is-clipped')
        }

      }
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);

    }, 300);

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2006();
  }
}, 100);
