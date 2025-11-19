function hiddenValue(currentExperimentName, currentExperimentValue) {
  function setCookie(name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  var ExistingExperimentName = getCookie('ExperimentName')
  var ExistingExperimentValue = getCookie('ExperimentValue')

  if (!ExistingExperimentName) {
    setCookie('ExperimentName', currentExperimentName, 1)
    setCookie('ExperimentValue', currentExperimentValue, 1)
  } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {
    setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1)
    setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1)
  } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {
    var existingNames = ExistingExperimentName.split(',')
    var existingValues = ExistingExperimentValue.split(',')
    var index = existingNames.indexOf(currentExperimentName)
    existingValues[index] = currentExperimentValue
    setCookie('ExperimentName', existingNames.join(','), 1)
    setCookie('ExperimentValue', existingValues.join(','), 1)
  }
}
hiddenValue('#2004 | Constant Contact | Free Trial | Form Over UI', 'SPZ_2004_V1')

function waitForElement(cssSelector, callback) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector)

        if (stop) return

        if (elementCached) {
          callback(elementCached)
          clearTimeout(timeout)
        } else {
          window.requestAnimationFrame(check)
        }
      } catch (err) {
        console.log(err)
      }
    }

  window.requestAnimationFrame(check)

  timeout = setTimeout(function () {
    stop = true
  }, 5000)
}

//DEV 1/6. Put your asana task URL here
const asana_URL = `https://app.asana.com/1/77217210692853/project/1199937683692504/task/1211388351064864?focus=true`

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to animate labels for inputs

var template_formUniqueSelector
if (window.location.pathname.includes('/buynow/')) {
  template_formUniqueSelector = "#buy-form-em-pwd-v2-pricing";
} else {
  template_formUniqueSelector = "#sign-up-form";
}

const formLoaded = setInterval(() => {
  if (document.querySelector(template_formUniqueSelector) && document.querySelectorAll(`${template_formUniqueSelector} input`).length > 0) {
    clearInterval(formLoaded);
    addForm();
  }
});

// Debounce helper
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Debounced callback
const observerCallback = debounce(() => {

  if (document.querySelector('.main-grid #main') && !document.querySelector('.spz_modal_wrap')) {
    addForm();
  }
}, 300);

const observerConfig = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, observerConfig);

// This is the code to generate the form over UI section do no edit it
function addForm() {

  // Firefox
  function isFirefox() {
    return /firefox/i.test(navigator.userAgent);
  }

  // Usage
  if (isFirefox()) {
    document.body.classList.add('spz_firefox');
  }
  document.body.classList.add('spz_2004_v1');
  const formTemplate = `
            <div class="spz_modal_wrap">
                <div class="spz_modal_inner">
                    <div class="form_wrap">
                        <p class="login_copy">Already have an account? <a href="https://go.constantcontact.com/login">Log In</a></p>
                    </div>
                </div>
            </div>
        `;
  // Insert html template
  if (!document.querySelector('.spz_modal_wrap')) {
    document.querySelector('.main-grid #main').insertAdjacentHTML('beforebegin', formTemplate);
    // Form Append
    document.querySelector('.form_wrap').insertAdjacentElement('afterbegin', document.querySelector(template_formUniqueSelector));

    // Form update start
    var template_inputsSelectors, template_labelValues;
    if (window.location.pathname.includes('/buynow/')) {
      document.body.classList.add('spz_buynow_page');
      template_inputsSelectors = ["#email", "#new-password"];
      template_labelValues = ["Email", "Password"];
      document.querySelector('.form-headline').innerHTML = `Get Started`;
      document.querySelector('.form-headline').insertAdjacentHTML('beforebegin', `<img class="company_logo" src="https://res.cloudinary.com/spiralyze/image/upload/v1759488660/constantcontact/2004/costant_logo.svg" alt="Constant Contact Logo">`);
    } else {
      template_inputsSelectors = ["#email", "#new-password", "#given-name", "#family-name", "#tel"];
      template_labelValues = ["Email", "Password", "First Name", "Last Name", "Phone"];
      document.querySelector('.form-headline').innerHTML = `Free Trial`;
      document.querySelector('.form-headline').insertAdjacentHTML('afterend', `<p class="form-subheadline">No credit card required.</p>`);
      if (document.querySelector('.sign-up-form-visible-legal-t-cs')) {
        document.querySelector('.sign-up-form-visible-legal-t-cs').parentElement.classList.add('spz_privacy_policy');
        document.querySelector('.sign-up-form-visible-legal-t-cs p').style.display = 'none';
        document.querySelector('.sign-up-form-visible-legal-t-cs p').insertAdjacentHTML('beforebegin', `<p class="spz_dummy_text">By clicking "Instant Access", you agree to the <a class="spz_terms" href="javascript:void(0)">Terms of Service</a> and acknowledge receipt of our <a class="spz_privacy" href="javascript:void(0)">Privacy Notice</a>.</p>`)
        document.querySelector('.spz_dummy_text a.spz_terms').addEventListener('click', () => {
          document.querySelector('[title="Terms & Conditions - modal link"]').click();
        });
        document.querySelector('.spz_dummy_text a.spz_privacy').addEventListener('click', () => {
          document.querySelector('[title="/signup- Privacy Notice - Link"]').click();
        });
      }
    }


    // Add required to all inputs

    var checkInput = setInterval(() => {
      if (document.querySelectorAll('#sign-up-form input').length > 0 || document.querySelectorAll('#buy-form-em-pwd-v2-pricing input').length > 0) {
        clearInterval(checkInput);
        handleInput(template_inputsSelectors, template_labelValues);
      }
    }, 100);

    function handleInput(inputs, template_labelValues) {
      if (!document.querySelector('#main.main-pricing-signup-page')) {
        document.querySelector('[data-attr-form-field-id="email"]').insertAdjacentElement('beforebegin', document.querySelector('[data-attr-form-field-id="givenName"]'))
        document.querySelector('[data-attr-form-field-id="email"]').insertAdjacentElement('beforebegin', document.querySelector('[data-attr-form-field-id="familyName"]'))
      }
      inputs.forEach((item, index) => {
        const parentDiv = document.querySelector(item).parentElement;
        const input = document.querySelector(item);
        const existingLabel = parentDiv.parentElement.querySelector('label:not(.label-spz)');
        if (existingLabel) existingLabel.style.display = 'none';

        const label = document.createElement('label');
        label.innerText = template_labelValues[index];
        label.classList.add('label-spz');
        label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
        label.style.width = '';

        label.addEventListener('click', function (e) {
          const actualInput = parentDiv.querySelector('input, select, textarea');
          if (actualInput) actualInput.focus();
        });
        //inserting labels after input.
        parentDiv.insertBefore(label, input.nextSibling);
        label.parentElement.classList.add('spz-input-wrap')
        //adding placeholder to all inputs
        input.setAttribute('placeholder', template_labelValues[index]);
        if (input.tagName === 'SELECT') {
          input.addEventListener('change', () => {
            if (input.value.length > 0) {
              input.closest(".spz-input-wrap").classList.add("has-value")
              input.setAttribute('style', 'color:')
            } else {
              input.closest(".spz-input-wrap").classList.remove("has-value")
              input.setAttribute('style', 'color:rgba(0,0,0,0)!important')
            }
          })
          if (input.value !== '') {
            parentDiv.classList.add('has-value');
            input.setAttribute('style', 'color:')
          } else {
            input.setAttribute('style', 'color:rgba(0,0,0,0)!important')
          }
        }
      });
    }
    // Form update end
  }
}