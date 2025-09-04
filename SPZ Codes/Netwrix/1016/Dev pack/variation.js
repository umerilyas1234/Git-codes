const bodyInterval1008 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_1016')) {
    clearInterval(bodyInterval1008)
    document.querySelector('body').classList.add("spz_1008")


    const run1008Test = () => {
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


  }
}, 10)
