if (window.location.href.includes("/product/credit") || window.location.href.includes("/product/spend-and-expense") || window.location.href.includes("product/virtual-cards")) {
  const bodyInterval7004 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7004')) {
      clearInterval(bodyInterval7004)
      document.querySelector('body').classList.add("spz_7004")

      localStorage.setItem('bdcAbTest15', '7004-V1');

      function trigger(el, eventType) {
        if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
          el[eventType]();
        } else {
          const event =
            typeof eventType === 'string'
              ? new Event(eventType, { bubbles: true })
              : eventType;
          el.dispatchEvent(event);
        }
      }
      //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
      const asana_URL = `https://app.asana.com/0/1206002187116436/1208183167201368/f`
      //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
      const formElements = {
        customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <div class="form heading">
          <h2>Get a demo</h2>
        </div>
      `,
        customHTMLAfter: ``,
      };

      //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
      const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

      //content different for each page
      let image;
      let bigTitle;
      let paragraph;
      image = `
    <picture>
      <img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/64d476515281ca5553f689d2_prod-bill-all-phone-card-left.webp" alt="Hero Image" width="1346" height="1038">
    </picture>
    `;
      bigTitle = 'The all-in-one expense management solution';
      paragraph = `
     <p>BILL Spend & Expense, formerly Divvy, offers access to credit limits from $500-$5M1 and automated expense management software that's free.</p>
    `

      //add new hero section 
      document.querySelector('.spz_7004 #formjumplink').insertAdjacentHTML("afterend", `
      <div class="new-hero-section">
        <div class="new-hero-section-wrapper">
          <div class="left">
            <div class="title">${bigTitle}</div>
           ${paragraph}
            <div class="form">
              <div class="hero-form-wrapper">
                <input type="text" id="new-input-text" autocomplete="new-input-text" placeholder="Work Email">
                <div class="spz-6002-hero-cta custom_cta">Get Started</div>
              </div>
              <div class="desc">No credit card required.</div>
            </div>
          </div>
          <div class="right">
            ${image}
          </div>
        </div>
      </div>
    `)

      document.querySelector('.spz_7004 .new-hero-section .left .form .custom_cta').addEventListener("click", function () {
        document.querySelector('.spz_7004 .popup-wrapper').classList.add("show")
        document.querySelector('html').classList.add("scroll-hidden")
        document.querySelector('.spz_7004 .spz-input-wrapper.email input').value = document.querySelector('.spz_7004 .new-hero-section .left .form input').value;
        trigger(document.querySelector('.spz_7004 .spz-input-wrapper.email input'), 'change')
      })
      document.querySelector('.spz_7004 .new-hero-section .left .form input').addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          document.querySelector('.spz_7004 .new-hero-section .left .form .custom_cta').click()
        }
      });

      //form code
      const formLoaded = setInterval(() => {
        if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
          clearInterval(formLoaded);
          addForm(formElements, formUniqueSelector);
          //form modification
          // adding reviews
          document.querySelector('.form.heading').insertAdjacentHTML('afterend', `<div class="ratings">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/logo-g2.svg" alt="G2 logo">
          <small>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/rating-stars.svg" alt="Rating stars">
            <span><b>4.4 </b> (2,521 reviews)</span>
          </small>
        </div>`);
          //adding wrapper
          for (let i = 0; i < document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select').length; i++) {
            let target = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i];
            let wrapper = document.createElement('div');
            wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("id"));
            target.parentNode.insertBefore(wrapper, target);
            wrapper.appendChild(target);
          }
          //adding label
          for (let i = 0; i < document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select').length; i++) {
            let label = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("placeholder")
            if (!label && document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].querySelector('option')) {
              label = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].querySelector('option').textContent;
            }
            document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("id")}">${label}</label> 
         `)
          }
          // change position
          document.querySelector('#lastName').closest('.spz-input-wrapper').insertAdjacentElement('afterend', document.querySelector('#email').closest('.spz-input-wrapper'));
          document.querySelector('#email').closest('.spz-input-wrapper').insertAdjacentElement('afterend', document.querySelector('#name').closest('.spz-input-wrapper'));

          //  document.querySelector('.spz_7004 .popup-wrapper ').insertAdjacentElement("beforeend",document.querySelector('.spz_7004 .g-recaptcha'))

          //select condition checking
          const checkSelectCondition = () => {
            for (let i = 0; i < document.querySelectorAll('.spz_7004 .spz-input-wrapper').length; i++) {
              if (document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].querySelector('.hide')) {
                document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].classList.add('hide')
              } else {
                document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].classList.remove('hide')
              }

            }
          }
          checkSelectCondition()
          //select arrow
          for (let x = 0; x < document.querySelectorAll('.spz_7004 form select').length; x++) {
            document.querySelectorAll('.spz_7004 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
          }
          //submit button 
          document.querySelector('.spz_7004 #se-form-button').value = "Submit";
          document.querySelector('.spz_7004 #se-form-button').classList.add("spz-submitcta-7004");

          // adding Business Type
          document.querySelector('.spz_7004 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("afterend", `
          <div class="spz-input-wrapper business-type">
            <select class="business-type" id="businessType" required></select>
            <label for="businessType">Business Type</label> 
            <div class="arrow"></div>
          </div>
        `)
          for (let i = 0; i < document.querySelectorAll('.spz_7004 #signupType .form-option-field span').length; i++) {
            document.querySelector('.spz_7004 #businessType').insertAdjacentHTML("beforeend", `
            <option value="${document.querySelectorAll('.spz_7004 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz_7004 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
          `)
          }
          document.querySelector('.spz_7004 #businessType').addEventListener("change", function () {
            document.querySelectorAll('.spz_7004 #signupType .form-option-field')[document.querySelector('.spz_7004 #businessType').selectedIndex].querySelector('input').click()
          })
          //disclaimer 
          document.querySelector('.spz_7004 .button-disclaimer').innerHTML = `
          By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
          `
          //input even listerer
          const allInput = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), .spz_7004 form select');
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
          document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
            // Replace any non-digit character with an empty string
            this.value = this.value.replace(/\D/g, '');
          });
          //remove unecessary select
          for (let x = 0; x < document.querySelectorAll('.spz_7004 #accountingSoftwareContainer select').length; x++) {
            document.querySelectorAll('.spz_7004 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
          }
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
          document.querySelector('.spz_7004').classList.add(browser);

          document.querySelector('.spz_7004 .spz-form-wrap .close-button').addEventListener("click", function () {
            document.querySelector('.spz_7004 .popup-wrapper').classList.remove("show")
            document.querySelector('html').classList.remove("scroll-hidden")
          });

          // hide fields on start
          const fieldsToHide = ['#jobTitle-2', '#phone', '#numberOfEmployees', '#businessType'];
          fieldsToHide.forEach(selector => {
            document.querySelector(selector).closest('.spz-input-wrapper').classList.add('hide');
          });
          document.querySelectorAll('.spz_7004 form.form-wrapper .spz-input-wrapper input').forEach(input => {
            console.log('sadsadasd');
            input.addEventListener('keyup', function () {
              const firstName = document.querySelector('#firstName').value;
              const lastName = document.querySelector('#lastName').value;
              const email = document.querySelector('#email').value;
              const name = document.querySelector('#name').value;
              console.log(firstName, lastName, email, name);
              // Validate email format
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
              const emailValid = emailPattern.test(email);

              // Check if all required fields are filled and email is valid
              if (firstName !== '' && lastName !== '' && email !== '' && name !== '' && emailValid) {
                // Select the elements to unhide
                const fieldsToShow = ['#jobTitle-2', '#phone', '#numberOfEmployees', '#businessType'];
                console.log(firstName, lastName, email, name);

                fieldsToShow.forEach(selector => {
                  const fieldWrap = document.querySelector(selector).closest('.spz-input-wrapper');
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
          <div class="popup-wrapper"> 
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
  }, 10)
}
if (window.location.href.includes("/product/accounts-payable")) {
  const bodyInterval7004 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7004')) {
      clearInterval(bodyInterval7004)
      document.querySelector('body').classList.add("spz_7004", "V1_2")

      localStorage.setItem('bdcAbTest15', '7004-V1');

      const loadJS = (url, implementationCode, location) => {
        var scriptTag = document.createElement('script');
        scriptTag.src = url;
        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;

        location.appendChild(scriptTag);
      };
      const gb_load_css = (path) => {
        let css = document.createElement('link');
        css.rel = 'stylesheet';
        css.media = 'all';
        css.href = path;

        document.getElementsByTagName('head')[0].appendChild(css);
      }
      gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
      function trigger(el, eventType) {
        if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
          el[eventType]();
        } else {
          const event =
            typeof eventType === 'string'
              ? new Event(eventType, { bubbles: true })
              : eventType;
          el.dispatchEvent(event);
        }
      }
      //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
      const asana_URL = `https://app.asana.com/0/1206002187116436/1208183167201368/f`
      //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
      const formElements = {
        customHTMLBefore: `
        ${ /*This html goes is inserted before the form */''}
          <div class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div class="form heading">
            <h2>Get a demo</h2>
          </div>
        `,
        customHTMLAfter: ``,
      };

      //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
      const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

      //content different for each page
      let image;
      let bigTitle;
      let paragraph;
      image = `
      <picture>
        <img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/64d476515281ca5553f689d2_prod-bill-all-phone-card-left.webp" alt="Hero Image" width="1346" height="1038">
      </picture>
      `;
      bigTitle = 'The all-in-one expense management solution';
      paragraph = `
       <p>BILL Spend & Expense, formerly Divvy, offers access to credit limits from $500-$5M1 and automated expense management software that's free.</p>
      `

      //add new hero section 
      document.querySelector('.spz_7004 #formjumplink').insertAdjacentHTML("afterend", `
        <div class="new-hero-section">
          <div class="new-hero-section-wrapper">
            <div class="left">
              <div class="title">${bigTitle}</div>
             ${paragraph}
              <div class="form">
                <div class="hero-form-wrapper">
                  <input type="text" id="new-input-text" autocomplete="new-input-text" placeholder="Work Email">
                  <div class="spz-6002-hero-cta custom_cta">Get Started</div>
                </div>
                <div class="desc">No credit card required.</div>
              </div>
            </div>
            <div class="right">
              ${image}
            </div>
          </div>
        </div>
      `)

      document.querySelector('.spz_7004 .new-hero-section .left .form .custom_cta').addEventListener("click", function () {
        document.querySelector('.spz_7004 .popup-wrapper').classList.add("show")
        document.querySelector('html').classList.add("scroll-hidden")
        document.querySelector('.spz_7004 .spz-input-wrapper.email input').value = document.querySelector('.spz_7004 .new-hero-section .left .form input').value;
        trigger(document.querySelector('.spz_7004 .spz-input-wrapper.email input'), 'change')
      })
      document.querySelector('.spz_7004 .new-hero-section .left .form input').addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          document.querySelector('.spz_7004 .new-hero-section .left .form .custom_cta').click()
        }
      });

      //form code
      const formLoaded = setInterval(() => {
        if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
          clearInterval(formLoaded);
          addForm(formElements, formUniqueSelector);
          //form modification
          // adding reviews
          document.querySelector('form .heading-style-h4').insertAdjacentHTML('afterend', `<div class="ratings">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/logo-g2.svg" alt="G2 logo">
            <small>
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1725007090/bill/7001/rating-stars.svg" alt="Rating stars">
              <span><b>4.4 </b> (2,521 reviews)</span>
            </small>
          </div>`);
          //adding wrapper
          for (let i = 0; i < document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select').length; i++) {
            let target = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i];
            let wrapper = document.createElement('div');
            wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("id"));
            target.parentNode.insertBefore(wrapper, target);
            wrapper.appendChild(target);
          }
          //adding label
          for (let i = 0; i < document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select').length; i++) {
            let label = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("placeholder")
            if (!label && document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].querySelector('option')) {
              label = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].querySelector('option').textContent;
            }
            document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].insertAdjacentHTML("afterend", `
              <label for="${document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_7004 form select')[i].getAttribute("id")}">${label}</label> 
           `)
          }
          // change position
          document.querySelector('#lastName').closest('.spz-input-wrapper').insertAdjacentElement('afterend', document.querySelector('#email').closest('.spz-input-wrapper'));
          document.querySelector('#email').closest('.spz-input-wrapper').insertAdjacentElement('afterend', document.querySelector('#name').closest('.spz-input-wrapper'));
          //  document.querySelector('.spz_7004 .popup-wrapper ').insertAdjacentElement("beforeend",document.querySelector('.spz_7004 .g-recaptcha'))

          //select condition checking
          const checkSelectCondition = () => {
            for (let i = 0; i < document.querySelectorAll('.spz_7004 .spz-input-wrapper').length; i++) {
              if (document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].querySelector('.hide')) {
                document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].classList.add('hide')
              } else {
                document.querySelectorAll('.spz_7004 .spz-input-wrapper')[i].classList.remove('hide')
              }

            }
          }
          checkSelectCondition()
          //select arrow
          for (let x = 0; x < document.querySelectorAll('.spz_7004 form select').length; x++) {
            document.querySelectorAll('.spz_7004 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
              <div class="arrow"></div>  
              `)
          }
          //submit button 
          if (document.querySelector('#directSignup .button-signup-2')) {
            document.querySelector('#directSignup .button-signup-2').classList.add('spz-submitcta-7004', 'spz_7001_v1');
            document.querySelector('#directSignup .button-signup-2').value = 'Submit';
          }

          // adding Business Type
          document.querySelector('.spz_7004 .form-options').insertAdjacentHTML("afterend", `
            <div class="spz-input-wrapper business-type">
              <select class="business-type" id="businessType" required></select>
              <label for="businessType">Business Type</label> 
              <div class="arrow"></div>
            </div>
          `)
          for (let i = 0; i < document.querySelectorAll('.spz_7004 #signupType .form-option-field span').length; i++) {
            document.querySelector('.spz_7004 #businessType').insertAdjacentHTML("beforeend", `
              <option value="${document.querySelectorAll('.spz_7004 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz_7004 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
            `)
          }
          document.querySelector('.spz_7004 #businessType').addEventListener("change", function () {
            document.querySelectorAll('.spz_7004 #signupType .form-option-field')[document.querySelector('.spz_7004 #businessType').selectedIndex].querySelector('input').click()
          })
          //disclaimer 
          document.querySelector('.spz_7004 .button-disclaimer').innerHTML = `
            By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
            `
          //input even listerer
          const allInput = document.querySelectorAll('.spz_7004 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), .spz_7004 form select');
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
          });
          if (document.querySelector('.spz_7004 #numberOfEmployees')) {
            document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
              // Replace any non-digit character with an empty string
              this.value = this.value.replace(/\D/g, '');
            });
          }
          //remove unecessary select
          for (let x = 0; x < document.querySelectorAll('.spz_7004 #accountingSoftwareContainer select').length; x++) {
            document.querySelectorAll('.spz_7004 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
          }
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
          document.querySelector('.spz_7004').classList.add(browser);

          document.querySelector('.spz_7004 .spz-form-wrap .close-button').addEventListener("click", function () {
            document.querySelector('.spz_7004 .popup-wrapper').classList.remove("show")
            document.querySelector('html').classList.remove("scroll-hidden")
          });

          // hide fields on start
          const fieldsToHide = ['#phone', '#accountingSoftware', '#businessType'];
          fieldsToHide.forEach(selector => {
            document.querySelector(selector).closest('.spz-input-wrapper').classList.add('hide');
          });
          document.querySelectorAll('.spz_7004 form.form-wrapper .spz-input-wrapper input').forEach(input => {
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
                const fieldsToShow = ['#phone', '#accountingSoftware', '#businessType'];

                fieldsToShow.forEach(selector => {
                  const fieldWrap = document.querySelector(selector).closest('.spz-input-wrapper');
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
            <div class="popup-wrapper"> 
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
  }, 10)
}
