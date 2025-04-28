if (window.location.href.includes("/product/credit") || window.location.href.includes("/product/spend-and-expense") || window.location.href.includes("product/virtual-cards")) {
  function loadTestCode7001() {
    if (!document.querySelector('body').classList.contains('spz_t7001')) {
      document.querySelector('body').classList.add('spz_t7001', 'v2');
      // Insert the new hero section
      localStorage.setItem('bdcAbTest15', '7001-v2');

      var formHeading = document.querySelector('form .heading-style-h4');
      formHeading.textContent = 'Get a demo';
      formHeading.insertAdjacentHTML('afterend', `<div class="ratings">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/logo-g2.svg" alt="G2 logo">
          <small>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/rating-stars.svg" alt="Rating stars">
            <span><b>4.4 </b> (2,700 reviews)</span>
          </small>
        </div>`);

      document.querySelectorAll('input[placeholder]').forEach(function (inputEl) {
        var wrapper = document.createElement('div');
        wrapper.className = 'form-field-wrap';
        inputEl.parentNode.insertBefore(wrapper, inputEl);
        wrapper.appendChild(inputEl);

        // Insert the label before the input element
        inputEl.insertAdjacentHTML('afterend', '<label for="' + inputEl.id + '">' + inputEl.placeholder + '</label>');
      });
      if (document.querySelector('form.form-wrapper #numberOfEmployees + label')) {
        document.querySelector('form.form-wrapper #numberOfEmployees + label').innerHTML = document.querySelector('#numberOfEmployees + label').innerHTML.replace('Number Of', 'Number of');
      }

      //input even listerer
      const allInput = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), form select');
      function labelChange(e) {
        if (e.value == '' || e.value == null) {
          e.closest(".form-field-wrap").classList.remove("hasValue");
        } else if (e.value != '' || e.value != null) {
          e.closest(".form-field-wrap").classList.add("hasValue");
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
      document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
        // Replace any non-digit character with an empty string
        this.value = this.value.replace(/\D/g, '');
      });
      // change position
      document.querySelector('#lastName').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#email').closest('.form-field-wrap'));
      document.querySelector('#email').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#name').closest('.form-field-wrap'));

      // adding Business Type 
      document.querySelector('.form-options').insertAdjacentHTML("beforebegin", `<div class="form-field-wrap business-type hasValue">
        <select class="business-type" id="businessType" required></select>
            <label for="businessType">Business Type</label> 
        </div>`);

      for (let i = 0; i < document.querySelectorAll('#signupType .form-option-field span').length; i++) {
        document.querySelector('#businessType').insertAdjacentHTML("beforeend", `
            <option value="${document.querySelectorAll('#signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('#signupType .form-option-field')[i].querySelector('span').textContent}</option>  
        `)
      }
      document.querySelector('#businessType').addEventListener("change", function () {
        document.querySelectorAll('#signupType .form-option-field')[document.querySelector('#businessType').selectedIndex].querySelector('input').click()
      })

      //select arrow
      for (let x = 0; x < document.querySelectorAll('form.form-wrapper select').length; x++) {
        document.querySelectorAll('form.form-wrapper select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div> `)
      }
      //submit button 
      if (document.querySelector('#se-form-button')) {
        document.querySelector('#se-form-button').classList.add('spz-submitcta-1002', 'spz_7001_v1');
        document.querySelector('#se-form-button').value = 'Submit';
      }

      //disclaimer 
      document.querySelector('.button-disclaimer').innerHTML = ` By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.`

      const fieldsToHide = ['#jobTitle-2', '#phone', '#numberOfEmployees', '#businessType'];
      fieldsToHide.forEach(selector => {
        document.querySelector(selector).closest('.form-field-wrap').classList.add('hide');
      });



      document.querySelectorAll('.spz_t7001 form.form-wrapper .form-field-wrap input').forEach(input => {
        input.addEventListener('keyup', function () {
          const firstName = document.querySelector('#firstName').value;
          const lastName = document.querySelector('#lastName').value;
          const email = document.querySelector('#email').value;
          const name = document.querySelector('#name').value;

          // Validate email format
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          const emailValid = emailPattern.test(email);

          // Check if all required fields are filled and email is valid
          if (firstName !== '' && lastName !== '' && email !== '' && name !== '' && emailValid) {
            // Select the elements to unhide
            const fieldsToShow = ['#jobTitle-2', '#phone', '#numberOfEmployees', '#businessType'];

            fieldsToShow.forEach(selector => {
              const fieldWrap = document.querySelector(selector).closest('.form-field-wrap');
              if (fieldWrap.classList.contains('hide')) {
                fieldWrap.classList.remove('hide');
                document.querySelector('.form-wrapper').classList.add('formProgressive');
              }
            });
            removeError(); // Remove error if all conditions are met
          } else if (!emailValid && email.includes('@')) {
            // If email format is incorrect after user has typed "@"
            showError('Valid email required.');
          }
        });
      });

      document.querySelector('#email').addEventListener('blur', function () {
        const email = this.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        if (!emailValid && email !== '') {
          // If the email is invalid, keep showing the error
          showError('Valid email required.');
        } else {
          removeError();
        }
      });

      function showError(message) {
        let errorMsg = document.querySelector('.error-message');
        const svgIcon = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_9232_488)">
                        <path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_9232_488">
                            <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>`;

        const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

        if (!errorMsg) {
          errorMsg = document.createElement('div');
          errorMsg.className = 'error-message';
          errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
          document.querySelector('#email').after(errorMsg);
        }
      }

      function removeError() {
        const email = document.querySelector('#email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        // Only remove error if the email is valid
        if (emailValid) {
          const errorMsg = document.querySelector('.error-message');
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      }

      if (window.location.href.includes("/product/credit")) {
        document.querySelector('body').classList.add('credit');
      }

    }
  }


  // Check condition to load test code
  var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
      clearInterval(checkCondition);
      loadTestCode7001();
    }
  }, 100);
}

if (window.location.href.includes("/product/accounts-payable")) {
  function loadTestCode7001() {
    if (!document.querySelector('body').classList.contains('spz_t7001')) {
      document.querySelector('body').classList.add('spz_t7001', 'V1_2', 'v2');
      // Insert the new hero section
      localStorage.setItem('bdcAbTest15', '7001-V2');

      var formHeading = document.querySelector('form .heading-style-h4');
      formHeading.textContent = 'Get a demo';
      formHeading.insertAdjacentHTML('afterend', `<div class="ratings">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/logo-g2.svg" alt="G2 logo">
              <small>
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/rating-stars.svg" alt="Rating stars">
                <span><b>4.4 </b> (2,700 reviews)</span>
              </small>
            </div>`);

      document.querySelectorAll('input[placeholder], select').forEach(function (inputEl) {
        var wrapper = document.createElement('div');
        wrapper.className = 'form-field-wrap';
        inputEl.parentNode.insertBefore(wrapper, inputEl);
        wrapper.appendChild(inputEl);

        // Insert the label before the input element
        inputEl.insertAdjacentHTML('afterend', '<label for="' + inputEl.id + '">' + inputEl.placeholder + '</label>');
      });
      if (document.querySelector('form.form-wrapper #numberOfEmployees + label')) {
        document.querySelector('form.form-wrapper #numberOfEmployees + label').innerHTML = document.querySelector('#numberOfEmployees + label').innerHTML.replace('Number Of', 'Number of');
      }
      if (document.querySelector('form.form-wrapper #accountingSoftware + label')) {
        document.querySelector('form.form-wrapper #accountingSoftware + label').innerHTML = "Which accounting software do you use?";
      }
      if (document.querySelector('form.form-wrapper #msDynamicsOption + label')) {
        document.querySelector('form.form-wrapper #msDynamicsOption + label').innerHTML = "Select your MS Dynamics solution:";
      }

      //input even listerer
      const allInput = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), form select');
      function labelChange(e) {
        if (e.value == '' && e.value != "APAR" || e.value == null && e.value != "APAR") {
          console.log("taggggg", e)
          e.closest(".form-field-wrap").classList.remove("hasValue");
        } else if (e.value != '' && e.value != "APAR" || e.value != null && e.value != "APAR") {
          e.closest(".form-field-wrap").classList.add("hasValue");
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
      document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
        // Replace any non-digit character with an empty string
        this.value = this.value.replace(/\D/g, '');
      });


      // adding Business Type 
      document.querySelector('.form-options').insertAdjacentHTML("beforebegin", `<div class="form-field-columns">
          <div class="form-field-wrap business-type hasValue">
            <select class="business-type" id="businessType" required></select>
                <label for="businessType">Business Type</label> 
            </div>
        </div>`);

      // change position
      document.querySelector('#lastName').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#email').closest('.form-field-wrap'));
      document.querySelector('#email').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#name').closest('.form-field-wrap'));
      document.querySelector('#phone').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#numberOfEmployees').closest('.form-field-wrap'));
      document.querySelector('#businessType').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#accountingSoftware').closest('.form-field-wrap'));

      for (let i = 0; i < document.querySelectorAll('#signupType .form-option-field span').length; i++) {
        document.querySelector('#businessType').insertAdjacentHTML("beforeend", `
                <option value="${document.querySelectorAll('#signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('#signupType .form-option-field')[i].querySelector('span').textContent}</option>  
            `)
      }
      document.querySelector('#businessType').addEventListener("change", function () {
        document.querySelectorAll('#signupType .form-option-field')[document.querySelector('#businessType').selectedIndex].querySelector('input').click()
      })

      //select arrow
      for (let x = 0; x < document.querySelectorAll('form.form-wrapper select').length; x++) {
        document.querySelectorAll('form.form-wrapper select')[x].parentNode.insertAdjacentHTML("beforeend", `
                <div class="arrow"></div> `)
      }
      //submit button 
      if (document.querySelector('#se-form-button')) {
        document.querySelector('#se-form-button').classList.add('spz-submitcta-1002', 'spz_7001_v1');
        document.querySelector('#se-form-button').value = 'Submit';
      }
      if (document.querySelector('#directSignup .button-signup-2')) {
        document.querySelector('#directSignup .button-signup-2').classList.add('spz-submitcta-1002', 'spz_7001_v1');
        document.querySelector('#directSignup .button-signup-2').value = 'Submit';
      }

      //disclaimer 
      document.querySelector('.button-disclaimer').innerHTML = ` By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.`

      const fieldsToHide = ['#phone', '#accountingSoftware', '#businessType', "#numberOfEmployees"];
      fieldsToHide.forEach(selector => {
        document.querySelector(selector).closest('.form-field-wrap').classList.add('hide');
      });



      document.querySelectorAll('.spz_t7001 form.form-wrapper .form-field-wrap input').forEach(input => {
        input.addEventListener('keyup', function () {
          const firstName = document.querySelector('#firstName').value;
          const lastName = document.querySelector('#lastName').value;
          const email = document.querySelector('#email').value;
          const name = document.querySelector('#name').value;

          // Validate email format
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          const emailValid = emailPattern.test(email);

          // Check if all required fields are filled and email is valid
          if (firstName !== '' && lastName !== '' && email !== '' && name !== '' && emailValid) {
            // Select the elements to unhide
            const fieldsToShow = ['#phone', '#accountingSoftware', '#businessType', "#numberOfEmployees"];

            fieldsToShow.forEach(selector => {
              const fieldWrap = document.querySelector(selector).closest('.form-field-wrap');
              if (fieldWrap.classList.contains('hide')) {
                fieldWrap.classList.remove('hide');
                document.querySelector('.form-wrapper').classList.add('formProgressive');
              }
            });
            removeError(); // Remove error if all conditions are met
          } else if (!emailValid && email.includes('@')) {
            // If email format is incorrect after user has typed "@"
            showError('Valid email required.');
          }
        });
      });

      document.querySelector('#email').addEventListener('blur', function () {
        const email = this.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        if (!emailValid && email !== '') {
          // If the email is invalid, keep showing the error
          showError('Valid email required.');
        } else {
          removeError();
        }
      });

      function showError(message) {
        let errorMsg = document.querySelector('.error-message');
        const svgIcon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_9232_488)">
                            <path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_9232_488">
                                <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>`;

        const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

        if (!errorMsg) {
          errorMsg = document.createElement('div');
          errorMsg.className = 'error-message';
          errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
          document.querySelector('#email').after(errorMsg);
        }
      }

      function removeError() {
        const email = document.querySelector('#email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        // Only remove error if the email is valid
        if (emailValid) {
          const errorMsg = document.querySelector('.error-message');
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      }
    }
  }

  // Check condition to load test code
  var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
      clearInterval(checkCondition);
      loadTestCode7001();
    }
  }, 100);

}
