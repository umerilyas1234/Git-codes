const bodyInterval1008 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_1016')) {
    clearInterval(bodyInterval1008)
    document.querySelector('body').classList.add("spz_1008")

    // 1016 code
    document.querySelector('header .navbar-end .contact-item').insertAdjacentHTML('afterbegin', `<a href="https://www.netwrix.com/one-to-one.html" class="getDemo_cta spz_1016_v1">Get Demo</a>`)

    function validateEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const run1008Test = () => {
      document.querySelector('body').classList.add("spz_1016")
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
        // const checkExpanded = () => {
        //   if (!formParent.classList.contains('expanded') && !formParent.querySelector('.form-wrapper-3 #ModalForm_nwf_nsrv').closest('.input-wrapper.hide')) {
        //     // hide initial form
        //     formParent.querySelector('.form-wrapper-3 #ModalForm_nwf_nsrv').closest('.input-wrapper').classList.add("hide")
        //     formParent.querySelector('.form-wrapper-3 #ModalForm_nwf_phone').closest('.input-wrapper').classList.add("hide")
        //     formParent.querySelector('.form-wrapper-3 #ModalForm_message').closest('.input-wrapper').classList.add("hide")
        //   }
        // }
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
        // checkExpanded()
        // adding additional error
        formParent.querySelector('.modelFormError').insertAdjacentHTML("afterend", `
              <div class="modelFormError"></div>  
            `)
        // change label for phone and unit type
        formParent.querySelector('#ModalForm_nwf_phone').closest('.input-wrapper').querySelector('label').textContent = "Phone";
        formParent.querySelector('#ModalForm_nwf_email').closest('.input-wrapper').querySelector('label').textContent = "Work Email";
        // formParent.querySelector('#ModalForm_account_type').closest('.input-wrapper').querySelector('label').textContent = "Inquiry Type";
        // formParent.querySelector('#ModalForm_account_type option:first-child').textContent = "Inquiry Type"
        //adding arrow
        for (let x = 0; x < formParent.querySelectorAll('.form-wrapper-3 .width50 select').length; x++) {
          formParent.querySelectorAll('.form-wrapper-3 .width50 select')[x].parentNode.insertAdjacentHTML('beforeend', '<div class="arrow"></div>')
        }

        //security input
        formParent.querySelector('.form-wrapper-3 .securityInfo').innerHTML = `We care about the security of your data. <a href="/privacy.html" target="_blank" class="privacyLink">Privacy Policy</a>.`
        formParent.querySelector('.form-wrapper-3 .securityInfo').insertAdjacentHTML("afterend", `
              <div class="securityInfo">Visit our <a href="/support.html" target="_blank" class="spz_1016-tech-support-link">Technical Support</a> page.</div>
              <div class="clearboth"></div>      
            `)


        //button 
        formParent.querySelector('.form-wrapper-3 input.btn').value = "Submit";
        formParent.querySelector('.form-wrapper-3 input.btn').classList.add('spz1008-cta-submit')
        // formParent.querySelector('.form-wrapper-3 input.btn').classList.add('spz1008-cta-submit', 'hide')
        // formParent.querySelector('.form-wrapper-3 input.btn').disabled = true

        // formParent.querySelector('.form-wrapper-3 input.btn').insertAdjacentHTML("beforebegin", `
        //       <span class="btn spz1008-cta-fake-submit">Submit</span>  
        //     `)

        // formParent.querySelector('.form-wrapper-3 .spz1008-cta-fake-submit').addEventListener("click", function () {


        //   if (formParent.querySelector('#ModalForm_nwf_fname').value != "") {
        //     formParent.querySelector('#ModalForm_nwf_fname').closest(".input-wrapper").classList.remove("error")
        //   } else {
        //     formParent.querySelector('#ModalForm_nwf_fname').closest(".input-wrapper").classList.add("error")
        //   }
        //   if (formParent.querySelector('#ModalForm_nwf_lname').value != "") {
        //     formParent.querySelector('#ModalForm_nwf_lname').closest(".input-wrapper").classList.remove("error")
        //   } else {
        //     formParent.querySelector('#ModalForm_nwf_lname').closest(".input-wrapper").classList.add("error")
        //   }
        //   if (validateEmail(formParent.querySelector('#ModalForm_nwf_email').value)) {
        //     formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.remove("error")
        //   } else {
        //     formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.add("error")
        //   }
        //   if (formParent.querySelector('#ModalForm_account_type').value != "") {
        //     formParent.querySelector('#ModalForm_account_type').closest(".input-wrapper").classList.remove("error")
        //   } else {
        //     formParent.querySelector('#ModalForm_account_type').closest(".input-wrapper").classList.add("error")
        //   }

        //   //show hiding error
        //   if (formParent.querySelector('.error')) {
        //     formParent.querySelectorAll('.modelFormError')[1].classList.add('v-show')
        //   } else {
        //     formParent.querySelectorAll('.modelFormError')[1].classList.remove('v-show')
        //   }
        //   // error message
        //   if (formParent.querySelector('#ModalForm_nwf_fname').value == "") {
        //     formParent.querySelectorAll('.modelFormError')[1].textContent = `First Name cannot be blank.`
        //   } else if (formParent.querySelector('#ModalForm_nwf_lname').value == "") {
        //     formParent.querySelectorAll('.modelFormError')[1].textContent = `Last Name cannot be blank.`
        //   } else if (!validateEmail(formParent.querySelector('#ModalForm_nwf_email').value)) {
        //     formParent.querySelectorAll('.modelFormError')[1].textContent = `Valid email required.`
        //   } else if (formParent.querySelector('#ModalForm_account_type').value == "") {
        //     formParent.querySelectorAll('.modelFormError')[1].textContent = `Inquiry Type cannot be blank.`
        //   }

        // })

        //hidden field
        // if (formParent.querySelector('#SPZ_Test').value == "") {
        //   formParent.querySelector('#SPZ_Test').value = "variant_1016"
        // } else {
        //   formParent.querySelector('#SPZ_Test').value = formParent.querySelector('#SPZ_Test').value + ",variant_1016";
        // }


        //event listener


        //input even listerer
        const allInput = formParent.querySelectorAll('.form-wrapper-3 .width50 input,.form-wrapper-3 .width50 select,.form-wrapper-3 textarea');
        // custome listener for 4
        // formParent.querySelector('#ModalForm_nwf_email').addEventListener("blur", function (e) {
        //   if (!validateEmail(e.target.value) && !formParent.classList.contains('expanded')) {
        //     formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.add("error")
        //     formParent.querySelectorAll('.modelFormError')[1].classList.add('v-show')
        //     formParent.querySelectorAll('.modelFormError')[1].textContent = `Valid email required.`
        //   }
        //   /*  
        //   else{
        //     formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.remove("error")
        //     if(formParent.querySelectorAll('.modelFormError')[1].textContent==`Valid email required.`) {
        //       formParent.querySelectorAll('.modelFormError')[1].classList.remove('v-show')
        //     }
        //   }
        //   */
        // })
        // formParent.querySelector('#ModalForm_nwf_email').addEventListener('keydown', function (event) {
        //   if (!formParent.classList.contains('expanded')) {
        //     if (event.key === 'Enter' || event.keyCode === 13) {
        //       formParent.querySelector('.form-wrapper-3 .spz1008-cta-fake-submit').click()
        //     }
        //   }
        // });
        // formParent.querySelector('#ModalForm_nwf_fname').addEventListener('keydown', function (event) {
        //   if (!formParent.classList.contains('expanded')) {
        //     if (event.key === 'Enter' || event.keyCode === 13) {
        //       formParent.querySelector('.form-wrapper-3 .spz1008-cta-fake-submit').click()
        //     }
        //   }
        // });
        // formParent.querySelector('#ModalForm_nwf_lname').addEventListener('keydown', function (event) {
        //   if (!formParent.classList.contains('expanded')) {
        //     if (event.key === 'Enter' || event.keyCode === 13) {
        //       formParent.querySelector('.form-wrapper-3 .spz1008-cta-fake-submit').click()
        //     }
        //   }
        // });

        const labelChange = (e) => {
          if (e.value == '' || e.value == null) {
            e.closest(".input-wrapper").classList.remove("hasValue");
          } else if (e.value != '' || e.value != null) {
            e.closest(".input-wrapper").classList.add("hasValue");
          }
        }

        // const check4Input = (target) => {
        //   if (
        //     target.closest('.v-modal-container').querySelector('#ModalForm_nwf_fname').value != "" &&
        //     target.closest('.v-modal-container').querySelector('#ModalForm_nwf_lname').value != "" &&
        //     validateEmail(target.closest('.v-modal-container').querySelector('#ModalForm_nwf_email').value) &&
        //     target.closest('.v-modal-container').querySelector('#ModalForm_account_type').value != "" &&
        //     target.closest('.v-modal-container').querySelector('.input-wrapper.hide')
        //   ) {
        //     target.closest('.v-modal-container').classList.add("expanded")
        //     formParent.querySelector('.form-wrapper-3 input.btn').disabled = false
        //     target.closest('.v-modal-container').querySelector('.form-wrapper-3 #ModalForm_nwf_nsrv').closest('.input-wrapper').classList.remove("hide")
        //     target.closest('.v-modal-container').querySelector('.form-wrapper-3 #ModalForm_nwf_phone').closest('.input-wrapper').classList.remove("hide")
        //     target.closest('.v-modal-container').querySelector('.form-wrapper-3 #ModalForm_message').closest('.input-wrapper').classList.remove("hide")
        //     target.closest('.v-modal-container').querySelector('.form-wrapper-3 .spz1008-cta-fake-submit').classList.add("hide")
        //     target.closest('.v-modal-container').querySelector('.form-wrapper-3 input.btn').classList.remove("hide")
        //     for (let x = 0; x < target.closest('.v-modal-container').querySelectorAll('.input-wrapper').length; x++) {
        //       target.closest('.v-modal-container').querySelectorAll('.input-wrapper')[x].classList.remove("error")
        //     }
        //     target.closest('.v-modal-container').querySelectorAll('.modelFormError')[0].classList.add("hide")
        //     target.closest('.v-modal-container').querySelectorAll('.modelFormError')[1].classList.remove("v-show")
        //   }
        // }
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
        //button click check label
        const targetNode3 = formParent.querySelector('.form-wrapper-3 input.btn');
        const config3 = { attributes: true, childList: true, subtree: true };
        const callback3 = (mutationList, observer) => {
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
              }
              else if (
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
          // checkExpanded()
          //button         
          /*
          // error email
          if(
            formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.contains("error") && formParent.querySelector('#ModalForm_nwf_email').value!="" && formParent.querySelectorAll('.modelFormError')[1].textContent!="Valid email required." 
            && !formParent.querySelector('#ModalForm_nwf_fname').closest(".input-wrapper").classList.contains("error")  && !formParent.querySelector('#ModalForm_nwf_lname').closest(".input-wrapper").classList.contains("error")
          ){
            console.log("here1",formParent.querySelectorAll('.modelFormError')[1].textContent)
            formParent.querySelectorAll('.modelFormError')[1].textContent="Valid email required." 
            formParent.querySelectorAll('.modelFormError')[0].classList.add("hide")
            formParent.querySelectorAll('.modelFormError')[1].classList.add("v-show")
            
            
          } else if
          (
            formParent.querySelector('#ModalForm_account_type').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.contains("error") && formParent.querySelectorAll('.modelFormError')[1].textContent!="Inquiry Type cannot be blank."  
            && !formParent.querySelector('#ModalForm_nwf_fname').closest(".input-wrapper").classList.contains("error")  && !formParent.querySelector('#ModalForm_nwf_lname').closest(".input-wrapper").classList.contains("error")
          ) {
            console.log("here2")
            formParent.querySelectorAll('.modelFormError')[0].classList.add("hide")
            formParent.querySelectorAll('.modelFormError')[1].classList.add("v-show")
            formParent.querySelectorAll('.modelFormError')[1].textContent="Inquiry Type cannot be blank." 
            
          } 
          //change phone error message
          else if(
            formParent.querySelector('#ModalForm_nwf_phone').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_account_type').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_nwf_fname').closest(".input-wrapper").classList.contains("error")  && !formParent.querySelector('#ModalForm_nwf_lname').closest(".input-wrapper").classList.contains("error") &&
            formParent.querySelectorAll('.modelFormError')[1].textContent!="Phone cannot be blank." && formParent.querySelectorAll('.modelFormError')[0].textContent.trim()=="Direct Phone cannot be blank."){
            console.log("here3")
            formParent.querySelectorAll('.modelFormError')[0].classList.add("hide")
            formParent.querySelectorAll('.modelFormError')[1].classList.add("v-show")
            formParent.querySelectorAll('.modelFormError')[1].textContent="Phone cannot be blank."
          }
          else if(formParent.querySelectorAll('.modelFormError')[0].classList.contains("hide") && !formParent.querySelector('#ModalForm_nwf_email').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_account_type').closest(".input-wrapper").classList.contains("error") && !formParent.querySelector('#ModalForm_nwf_phone').closest(".input-wrapper").classList.contains("error") && formParent.querySelector('.error')) {
            console.log("here4")
            formParent.querySelectorAll('.modelFormError')[0].classList.remove("hide")
            formParent.querySelectorAll('.modelFormError')[1].classList.remove("v-show")
          }
          */
        }
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      }
    }

    let runTestTimeout;
    //body observer because the form previously removed
    const targetNode2 = document.querySelector('body');
    const config2 = { childList: true, subtree: true };
    const callback2 = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (!document.querySelector('body').classList.contains('spz_1016')) {
          clearTimeout(runTestTimeout)
          runTestTimeout = setTimeout(function () {
            run1008Test()
          }, 1000)
        }
      }

    }
    const observer2 = new MutationObserver(callback2);
    observer2.observe(targetNode2, config2);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '1016';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant1_` + expName;

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

  }
}, 10)