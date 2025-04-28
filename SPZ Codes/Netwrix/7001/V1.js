console.log("1001 running")
const bodyInterval1001 = setInterval(function(){
  if(document.querySelector('body') && !document.querySelector('.spz-1001') && document.querySelector('.gradient')){
    clearInterval(bodyInterval1001)

    document.querySelector('body').classList.add("spz-1001")
    const setCookieTest=(name, value, days)=> {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }



      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      //exptName should be #1001, #1002, #1003 etc.
      const expName = '7001';
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
              for(var i = 0; i < ca.length; i++) {
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


      const checkBoxValue=[];
      Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
      };
      const combineWord = (wordArray)=>{
        let myString="";
        myString=wordArray.join(", ")
        if(wordArray.length==2){
          myString=myString.replace(", "," and ");
        }
        if(wordArray.length>2){
          myString=myString.replace(", "+wordArray[wordArray.length-1],", and "+wordArray[wordArray.length-1]);
        }
        return myString;
      }
      
      document.querySelector('.spz-1001 .gradient').insertAdjacentHTML('beforebegin',`
      <div class="new-hero-1001">
        <div class="wrapper">
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1729049525/netwrix/1001/gartner.svg" alt="Gartner Logo" width="75" height="27" >
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726132797/netwrix/1001/stars.svg" alt="Stars Icon" width="89" height="16" >
            <span>4.4</span>
            <span>(142 reviews)</span>
            <sup>*</sup>
          </div>
          <div class="title">Identify Threats. Secure Data. Reduce Risk.</div>
          <div class="subtitle">Which solution(s) are you interested in?</div>
          <div class="cards">
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709383/netwrix/1001/password.svg" alt="Data Security Posture Management Icon" height="41" width="40">
              <div class="card-text">Data Security Posture Management</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709383/netwrix/1001/data__loss_prevention.svg" alt="Endpoint Data Loss Prevention Icon" height="41" width="40">
              <div class="card-text">Endpoint Data Loss Prevention</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709383/netwrix/1001/frame_1171276189.svg" alt="Active Directory Security Icon" height="41" width="40">
              <div class="card-text">Active Directory Security</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709383/netwrix/1001/frame_1171276125.svg" alt="Privileged Access Management Icon" height="41" width="40">
              <div class="card-text">Privileged Access Management</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709385/netwrix/1001/data__loss_prevention_1.svg" alt="Identity Governance & Administration Icon" height="41" width="40">
              <div class="card-text">Identity Governance <span class="desktop-break"></span> & Administration</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709383/netwrix/1001/frame_1171276127.svg" alt="Endpoint Management & Security Icon" height="41" width="40">
              <div class="card-text">Endpoint Management & Security</div>
            </div>
            <div class="card">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1726709385/netwrix/1001/password_1.svg" alt="Password Management & Security Icon" height="41" width="40">
              <div class="card-text">Password Management & Security</div>
            </div> 
          </div>
          <div class="form">
            <input type="text" placeholder="Work Email">
            <div class="cta cta-spz1001-hero">Get Demo</div> 
          </div>
          <div class="link gtm-home-page-header-link">
            <span class="gtm-home-page-header-link">Chat With Our Experts</span>
            <img class="gtm-home-page-header-link" src="//res.cloudinary.com/spiralyze/image/upload/v1726001139/netwrix/1001/icon_right.svg" alt="Right Arrow Icon" width="20" height="20">
          </div>
        </div>
        <div class="hero-image">
          <picture>
            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage-mobile.png">
            <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage-tablet.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage.png" alt="Hero Image" width="1607" height="430" >
          </picture>
        </div>
      </div>  
      `)
      const footerInterval = setInterval(function(){
        if(document.querySelector('.spz-1001 .footer .information')){
          clearInterval(footerInterval);
          document.querySelector('.spz-1001 .footer .information').insertAdjacentHTML("afterend",`
            <div class="footer-note">
              * Result is as of 10/08/2024. 4.4 rating is based on 142 reviews in the File Analysis Software market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.
            </div>  
          `)
        }
      },100)
      
      document.querySelector('.spz-1001 .new-hero-1001 .cards').addEventListener("click",function(e){
        if(e.target.closest(".spz-1001 .new-hero-1001 .card")){
          e.target.closest(".spz-1001 .new-hero-1001 .card").classList.toggle('active');
          if( e.target.closest(".spz-1001 .new-hero-1001 .card").classList.contains("active")){
            checkBoxValue.push(""+e.target.closest(".spz-1001 .new-hero-1001 .card").querySelector('.card-text').textContent)
          } else {
            checkBoxValue.remove(''+e.target.closest(".spz-1001 .new-hero-1001 .card").querySelector('.card-text').textContent)
          }
        }
      })
      document.querySelector('.spz-1001 .new-hero-1001 .form .cta').addEventListener("click",function(){
        
        if(document.querySelector('.spz-1001 .new-hero-1001 .form input').value){
          setCookieTest("spz1001EmailValue",document.querySelector('.spz-1001 .new-hero-1001 .form input').value,1)
          //localStorage.setItem("spz1001EmailValue", document.querySelector('.spz-1001 .new-hero-1001 .form input').value);          
        }
          setCookieTest("spz1001CheckBoxValue",combineWord(checkBoxValue),1)
          //localStorage.setItem("spz1001CheckBoxValue",  combineWord(checkBoxValue));
          setCookieTest("spz1001Source","yes",1)
          window.location.href = "https://www.netwrix.com/one-to-one.html";
      })
      document.querySelector('.spz-1001 .new-hero-1001 .link').addEventListener("click",function(){
        document.querySelectorAll('.spz-1001 #ModalForm_nwf_email')[1].value=document.querySelector('.spz-1001 .new-hero-1001 .form input').value;
        document.querySelector('.spz-1001 .spz_formOuter .form-message-modal textarea').value= combineWord(checkBoxValue);
        //change html
        document.querySelector('.spz-1001 .navbar-item.contact-item button').click();
              
        if (document.querySelector('.spz_form #ModalForm_message').value.length > 0) {
          document.querySelector('.spz_form #ModalForm_message').closest(".spz-input-wrap").classList.add("has-value");
        }
      })  
      document.querySelector('.spz-1001 .new-hero-1001 .form input').addEventListener("keypress",function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.querySelector('.spz-1001 .new-hero-1001 .form .cta').click()
            document.querySelector('.spz-1001 .new-hero-1001 .form input').blur();
        }
      });

      document.querySelector('.spz-1001 .gradient .head-cont h1 + p + .cta-links-block + .cta-links-block').insertAdjacentHTML("beforebegin",`
        <div class="trusted">Trusted by 13,500+ organizations</div>  
      `)
  }
},10)






function loadTestCode7001() {
  if (!document.querySelector("body").classList.contains("spz_t7001")) {
    document.querySelector("body").classList.add("spz_t7001");
    
    document.querySelector('body > div[style="display: none;"]').classList.add("spz_formOuter");
    document.querySelector('body > div[style="display: none;"] form').classList.add("spz_form");
    setTimeout(() => {
      document.querySelector(".spz_formOuter .form-title").textContent = "Contact Us";
    }, 100);
    //DEV 1/6. Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208168040022966/f`;
    //DEV 2/6. Add content inside the box


    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".spz_form"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const inputsSelectors = [".spz_form #ModalForm_nwf_fname", ".spz_form #ModalForm_nwf_lname", ".spz_form #ModalForm_nwf_email", ".spz_form #ModalForm_account_type", ".spz_form #ModalForm_nwf_nsrv", ".spz_form #ModalForm_nwf_phone", ".spz_form #ModalForm_message"]

    //DEV 5/6. Add Form labels below
    const labelValues = ["First Name", "Last Name", "Business Email", "User Type", "Number of Employees", "Direct Phone", "What is your business or technical challenge?"]

    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        animateLabels(inputsSelectors, labelValues);
      }
    });

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
        input.setAttribute('placeholder', '')
      });
    }
    //Helper function to find parent div of input or select element
    function findParent(elementSelector) {
      let element = document.querySelector(elementSelector);
      let wrapper = element.closest("div"); //define parent's tag name
      if (
        (wrapper.innerHTML.includes("<input") ||
          wrapper.innerHTML.includes("<select")) ||
        wrapper.innerHTML.includes("<textarea")
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
    function addClass() {
      window.addEventListener('click', (e) => {
        if (e.target.matches(('.head-cont h1 + p + .cta-links-block .btn-red-outline') || e.target.matches('header .navbar-item .btn-red-outline'))) {
          e.preventDefault();
          document.querySelector('body').classList.add('show');
          document.querySelector('.spz_formOuter').style.display = 'block';
        }
      });
      document.querySelectorAll('.spz_form > div:not(.modelFormError)').forEach((item) => {
        if (!item.classList.contains('spz-input-wrap')) {
          item.classList.add('spz-input-wrap');
        }
        const input = item.querySelector('input, textarea, select');
        if (input && input.value.length > 0) {
          if (!item.classList.contains("has-value")) {
            item.classList.add("has-value");
          }
        } else {
          if (item.classList.contains("has-value")) {
            item.classList.remove("has-value");
          }
        }
      });
    }

    setTimeout(() => {
      document.querySelector('.spz_formOuter .close').insertAdjacentHTML('afterbegin', `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="12" fill="#66BCFF" fill-opacity="0.14"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.3808L16.149 7.23179C16.4581 6.92274 16.9591 6.92274 17.2682 7.23179C17.5773 7.54085 17.5773 8.04194 17.2682 8.351L13.1192 12.5L17.2682 16.649C17.5773 16.9581 17.5773 17.4591 17.2682 17.7682C16.9591 18.0773 16.4581 18.0773 16.149 17.7682L12 13.6192L7.851 17.7682C7.54194 18.0773 7.04085 18.0773 6.73179 17.7682C6.42274 17.4591 6.42274 16.9581 6.73179 16.649L10.8808 12.5L6.73179 8.351C6.42274 8.04194 6.42274 7.54085 6.73179 7.23179C7.04085 6.92274 7.54194 6.92274 7.851 7.23179L12 11.3808Z" fill="#66BCFF"/>
        </svg>
      `);

      // change positions 
      // document.querySelector('.spz_form #ModalForm_nwf_fname').closest('.spz-input-wrap').insertAdjacentElement('beforebegin', document.querySelector('.spz_form #ModalForm_account_type').closest('.spz-input-wrap'));
      // document.querySelector('.spz_form #ModalForm_account_type').closest('.spz-input-wrap').insertAdjacentElement('afterend', document.querySelector('.spz_form #ModalForm_nwf_nsrv').closest('.spz-input-wrap'));

      // hide fields
      const fieldsToHide = ['.spz_formOuter #ModalForm_nwf_nsrv', '.spz_formOuter #ModalForm_nwf_phone', '.spz_formOuter #ModalForm_message', '.spz_formOuter .g-recaptcha'];
      fieldsToHide.forEach(selector => {
        document.querySelector(selector).closest('.spz-input-wrap').classList.add('hide');
      });

      document.querySelectorAll('.spz_formOuter .spz-input-wrap input, .spz_formOuter .spz-input-wrap select')
        .forEach(field => {
          // Use `input` event for text inputs and `change` event for selects
          const eventType = field.tagName === 'SELECT' ? 'change' : 'input';
          field.addEventListener(eventType, handleFormFields);
        });

      // check if all required fields are filled
      function handleFormFields() {
        const userType = document.querySelector('.spz_formOuter #ModalForm_account_type').value;
        const email = document.querySelector('.spz_formOuter #ModalForm_nwf_email').value;
        const firstName = document.querySelector('.spz_formOuter #ModalForm_nwf_fname').value;
        const lastName = document.querySelector('.spz_formOuter #ModalForm_nwf_lname').value;

        // Check if all required fields are filled and select fields have values
        if (userType !== '' && email !== '' && firstName !== '' && lastName !== '') {
          // Select the elements to unhide
          const fieldsToShow = ['.spz_formOuter #ModalForm_nwf_nsrv', '.spz_formOuter #ModalForm_nwf_phone', '.spz_formOuter #ModalForm_message', '.spz_formOuter .g-recaptcha'];

          fieldsToShow.forEach(selector => {
            const fieldWrap = document.querySelector(selector).closest('.spz-input-wrap');
            if (fieldWrap.classList.contains('hide')) {
              fieldWrap.classList.remove('hide');
              document.querySelector('.spz_formOuter').classList.add('formProgressive');
            }
          });
        }
      }
      handleFormFields();
      document.querySelector('.spz_formOuter .securityInfo').insertAdjacentHTML('afterend', `
        <div class="securityInfo support_info">
        This form is for product inquiries only. For support, visit the
        <a href="https://www.netwrix.com/support.html" class="privacyLink">Support Portal.</a>
        </div>
      `);
    }, 1500);


    document.querySelector('.spz_form .modelFormSubmit').classList.add('spz7001-cta-submit');
    document.querySelector('header .navbar-item .btn-red-outline').classList.add('spz7001-cta-submit');
    document.querySelector('.spz_form .spz7001-cta-submit').value = "Submit";
    window.addEventListener('click', (e) => {
      if (e.target.matches('.head-cont h1 + p + .cta-links-block .btn-red-outline') || e.target.matches('header .navbar-item .btn-red-outline')) {
        e.preventDefault();
        document.querySelector('body').classList.add('show');
        document.querySelector('.spz_formOuter').style.display = 'block';
      }
      if (e.target.matches(('.spz_formOuter .close')) || e.target.matches('.v-modal-wrapper') || e.target.matches('body')) {
        document.querySelector('body').classList.remove('show');
        document.querySelector('.spz_formOuter').style.display = 'none';
      }
    });

    //obeserv the form error class 
    const targetNode = document.querySelector('.spz_form');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      addClass();
      //button
      if (document.querySelector('.spz_form .spz7001-cta-submit').value == "Contact Our Experts") {
        document.querySelector('.spz_form .spz7001-cta-submit').value = "Submit"
      }
      if (document.querySelector('html').classList.contains('is-clipped')) {
        document.querySelector('html').classList.remove('is-clipped')
      }
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '7001';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant_` + expName;

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
}

var bodyInterval7001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval7001);
    loadTestCode7001();
  }
}, 300);
