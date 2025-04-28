function runCode() {
  if (!document.body.classList.contains('spz-6009')) {
    document.body.classList.add('spz-6009');

    // Check if the URL matches one of the given URLs and execute the corresponding code
    var newHero = `<div class="new-hero audit">
              <div class="hero-container">
                  <div class="hero-flex">
                      <div class="hero-title-contain">
                          <div class="hero-product-name">NETWRIX AUDITOR</div>
                          <div class="hero-main-title">Ease the burden of IT auditing</div>
                          <p>Identify risks, detect security threats, automate compliance reporting, increase IT team efficiency with IT audit software from Netwrix.</p>
                          <div class="hero-buttons head-cont">
                          </div>
                      </div>
                      <div class="hero-image-contain">
                          <picture>
                            <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739964631/netwrix/6001/Frame_tablet.png">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1739964631/netwrix/6001/Frame_tablet.png" alt="auditor_ui_image">
                          </picture>	
                      </div>
                  </div>
              </div>
              <div class="hero-organiza-container">
                  <div class="hero-organiza-content">
                      <p>Trusted by 13,500+ organizations</p>
                      <ul>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                      </ul>
                  </div>
              </div>
      </div>`;
    document.querySelector('.spz-6009 main .navbar').insertAdjacentHTML('afterend', newHero);


    document.querySelector('.hero-buttons.head-cont').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));
    document.querySelectorAll('.spz-6009 .hero-buttons .nwx-btn').forEach((item) => {
      item.classList.add('spz_6009_v1');
    });
    document.querySelectorAll('.spz-6009 .hero-buttons button.nwx-btn').forEach((item) => {
      item.classList.add('get-demo');
      item.textContent = 'Download Free Trial';
    });

    document.querySelector('.spz-6009 main .navbar').insertAdjacentHTML('afterend', `<div class="new-head-cont head-cont"></div>`);
    const breadcrumbs = document.querySelector('.spz-6009 .head-cont .breadcrumbs');
    document.querySelector('.spz-6009 .new-head-cont').insertAdjacentElement('beforeend', breadcrumbs);

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('get-demo')) {
        console.log('button clicked');
        setTimeout(() => {
          updateFormAndButton();
        }, 100);
      }
    });

    if (document.querySelector('.spz-6009 .hero-buttons .product-tour')) {
      document.querySelector('.spz-6009 .hero-buttons .product-tour').addEventListener('click', function () {
        document.querySelector('.head-cont .nwx-red-btn').click();
      });
    }

    var button = document.querySelector(".one-field-form-button-test [id^='app-']");
    var buttonID = button.id;
    const formId = `form-${buttonID}`;
    const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
    formContainer.classList.add('spz_modal');

    function updateFormAndButton() {
      console.log('updating states');
      document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Auditor";
      document.querySelector(`.spz_modal #ModalForm_leadType`).value = "Evaluation";
      document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
      document.querySelector(`.spz_modal form #SPZ_Test`).value = 'variant1_6009';
      console.log('updated states');
    }


    const targetNode = formContainer.querySelector(`.spz_modal form .modelFormSubmit`);
    const config = { attributes: true, attributeFilter: ['value', 'class'] };
    const callback = (mutationList, observer) => {
      mutationList.forEach(mutation => {
        if (mutation.type === 'attributes') {
          const newValue = mutation.target.getAttribute(mutation.attributeName);
          const oldValue = mutation.oldValue;

          if (newValue !== oldValue) {
            updateFormAndButton();
          }
        }
      });
    };
    const observer = new MutationObserver(callback);
    if (targetNode) {
      observer.observe(targetNode, { ...config, attributeOldValue: true });
    }
  

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '6009';
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
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
  if (document.querySelectorAll('main .navbar').length > 0) {
    clearInterval(checkCondition);
    runCode();
  }
}, 500);
