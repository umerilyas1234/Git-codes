const bodyInterval5002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_5002')) {
    clearInterval(bodyInterval5002)
    document.querySelector('body').classList.add("spz_5002")
    localStorage.setItem('bdcAbTest13', '5002-v1');
    //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208038099059166/f`
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form heading">
          <div>Reduce workloads 20% by automating routine financial operations</div>
        </div>
      `,
      customHTMLAfter: ``,
    };

    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-demo-request" //<--- form uqniue selector goes here. e.g.



    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for (let i = 0; i < document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select').length; i++) {
          let target = document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label
        for (let i = 0; i < document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select').length; i++) {
          let label = document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].getAttribute("placeholder")
          if (!label && document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].querySelector('option')) {
            label = document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select')[i].getAttribute("id")}">${label}</label> 
         `)
        }
        // adding Business Type

        document.querySelector('.spz_5002 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("beforebegin", `
            <div class="spz-input-wrapper business-type">
              <select class="business-type" id="businessType" required></select>
              <label for="businessType">Business Type</label> 
            </div>   
          `)
        for (let i = 0; i < document.querySelectorAll('.spz_5002 #signupType .form-option-field span').length; i++) {
          document.querySelector('.spz_5002 #businessType').insertAdjacentHTML("beforeend", `
                <option value="${document.querySelectorAll('.spz_5002 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz_5002 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
              `)
        }
        document.querySelector('.spz_5002 #businessType').addEventListener("change", function () {
          document.querySelectorAll('.spz_5002 #signupType .form-option-field')[document.querySelector('.spz_5002 #businessType').selectedIndex].querySelector('input').click()
        })
        //trigger click based on selected radiobutton
        if (document.querySelector('.spz_5002 #signupType .form-option-field [name="formoptions"]:checked').value == 'direct') {
          document.querySelectorAll('.spz_5002 #signupType .form-option-field')[0].querySelector('input').click()
          document.querySelectorAll('.spz_5002 #businessType option')[0].selected = 'selected'
        } else {
          document.querySelectorAll('.spz_5002 #signupType .form-option-field')[0].querySelector('input').click()
          document.querySelectorAll('.spz_5002 #signupType .form-option-field')[1].querySelector('input').click()
          document.querySelectorAll('.spz_5002 #businessType option')[1].selected = 'selected'
        }

        // change position
        document.querySelector('.spz_5002 .spz-input-wrapper.email').insertAdjacentElement('afterend', document.querySelector('.spz_5002 .spz-input-wrapper.name'))
        document.querySelector('.spz_5002 .spz-input-wrapper.phone').insertAdjacentElement('afterend', document.querySelector('.spz_5002 .spz-input-wrapper.business-type'))
        document.querySelector('.spz_5002 .spz-input-wrapper.business-type').insertAdjacentElement('afterend', document.querySelector('.spz_5002 .spz-input-wrapper.numberOfEmployees'))
        //products style
        document.querySelector('.spz_5002 #form-panel-3 .text-size-tiny').textContent = "(Check all that apply)"
        //checbox listener
        const checkboxListener = () => {
          for (let x = 0; x < document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select').length; x++) {
            if (document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select')[x].classList.contains("hide")) {
              document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.add("hide")
            }
            else {
              document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.remove("hide")
            }
          }
        }
        checkboxListener()
        for (let i = 0; i < document.querySelectorAll('.spz_5002 [name="productInterestCheckbox"]').length; i++) {
          document.querySelectorAll('.spz_5002 [name="productInterestCheckbox"]')[i].addEventListener("change", function () {
            checkboxListener()
          })
        }
        //select arrow
        for (let x = 0; x < document.querySelectorAll('.spz_5002 form select').length; x++) {
          document.querySelectorAll('.spz_5002 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
        }
        //submit button 
        document.querySelector('.spz_5002 .submit-button.button-signup-2').value = "Get Started";
        document.querySelector('.spz_5002 .submit-button.button-signup-2').classList.add("spz-submitcta-5002")
        //disclaimer 
        document.querySelector('.spz_5002 .disclaimer').innerHTML = `
          By continuing, you agree to BILL <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
          `
        //input even listerer
        const allInput = document.querySelectorAll('.spz_5002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_5002 form select');
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
        for (let x = 0; x < document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select').length; x++) {
          document.querySelectorAll('.spz_5002 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
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
        document.querySelector('.spz_5002').classList.add(browser);
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
          <div class="spz-form-wrapper">
            <div class="left-side">
              <a href="/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logotype-bill.svg" alt="BILL Logo" width="50" height="32" /></a>
              <div class="spz-form-wrap">
                <div class="eyelash">Request a demo</div>
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
                <div class="bottom-part">
                    <div class="text"><strong>1,000+</strong> integrations to connect with the tools you use daily.</div>
                    <div class="logo-section">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-xero.svg" alt="Xero Logo" width="29" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-microsoft.svg" alt="Microsoft Logo" width="79" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-trinet.svg" alt="TriNet Logo" width="59" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-yardi.svg" alt="Yardi Logo" width="65" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-quickbooks.svg" alt="QuickBooks Logo" width="29" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-gusto.svg" alt="Gusto, Inc. Logo" width="51" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-workday.svg" alt="Workday Logo" width="61" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-sage.svg" alt="Sage Intacct Logo" width="42" height="32"/>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-oracle_netsuite.svg" alt="NetSuite Logo" width="55" height="32"/>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            `;
      document.body.insertAdjacentHTML(
        "beforeend",
        formTemplate
      );
      // scroll at the same time
      const div1 = document.querySelector('.spz_5002');
      const div2 = document.querySelector('.left-side');

      // Function to sync scroll position
      function syncScroll(source, target) {
        target.scrollTop = source.scrollTop;
        target.scrollLeft = source.scrollLeft;
      }

      // Add event listeners to both divs
      div1.addEventListener('scroll', function () {
        syncScroll(div1, div2);
      });

      div2.addEventListener('scroll', function () {
        syncScroll(div2, div1);
      });

      /*Insert spz-form-wrap before closing body tag*/
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
              );
            /*Apply form to spz form wrapper*/
          }
        });
      }

    }

  }

  localStorage.setItem('bdcAbTest13','5002-v1');
}, 10)
