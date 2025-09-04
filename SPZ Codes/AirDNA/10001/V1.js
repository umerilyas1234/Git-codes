//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz5002Test() {

  if (!document.querySelector('body').classList.contains('spz_10001')) {
    document.querySelector('body').classList.add('spz_10001');
    // Put your test code here

    //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const template_formUniqueSelector = ".form-wrapper"

    //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    const template_inputsSelectors = [".form-wrapper >.mb-3:nth-of-type(1) input", ".form-wrapper >.multi-column-row > .col-md-4 .ember-view", ".form-wrapper >.multi-column-row > .col-md-8 input ", "#ember23-field"]

    //DEV 5/6. Add Form labels below
    const template_labelValues = ["How many properties do you manage?", "Country", "Country code", "Phone"]

    document.querySelector('body').insertAdjacentHTML('beforeend', `
        <div class="spz-form-wrap">
          <div class="form-section">
            <div class="form_top">
              <h3>Finalize Your Account</h3>
            </div>
            <div class="the-form"></div>
          </div>
        </div>  
    `);
    document.querySelector('.the-form').insertAdjacentElement('beforeend', document.querySelector('.form-wrapper'));
  }

}

function removeTest() {
  document.querySelector('.case_studySection')?.remove();
  document.querySelector('body').classList.remove('spz_10001');
}

const selector10001 = 'main .auth-section';
function waitForElement(selector10001, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector10001);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector10001);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector10001}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector10001)
    .then((element) => {
      if (element) {
        spz5002Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout;
const targetUrl = "https://app.uplisting.io/register/info";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      executeTimeout = setTimeout(function () {
        executeTest();
      }, 100)
    } else {
      removeTest();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
