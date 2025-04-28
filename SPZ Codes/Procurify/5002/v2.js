var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1721820509/procurify/5002/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1721820509/procurify/5002/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode5002() {
  if (!document.querySelector("body").classList.contains("spz_t5002")) {
    document.querySelector("body").classList.add("spz_t5002");

    //Developer STEP 1 of 5 Fill Obejct values with the content from Figma
    const modalData = {
      leftImage: '//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5002/ui_v2.webp',
	    leftImageAlt: 'Exit_Modal_UI',
      modalHeading: 'Reduce Spend while <br> Streamlining Purchase Cycles',
      modalContent: '<ul><li>Automate requests, approvals, and purchase orders.</li><li>Set spend limits & get alerts for rogue spend.</li><li>Integrates with QuickBooks, NetSuite, and 25+ more.</li></ul>',
      formData: `
        <div class="get_a_demoFormModal">
          <form id="demo_formModal">
              <div class="form_outerModal">
                  <div class="form_inputModal">
                      <input type="email" name="email" placeholder="Email">
                  </div>
                  <div class="form_buttonModal">
                      <button type="submit" class="mktoButton">Get a demo </button>
                  </div>
              </div>
          </form>
        </div>  
      `,
      closeModalText: `<img class="close-modals" src="//res.cloudinary.com/spiralyze/image/upload/v1721727405/procurify/5002/close.svg" alt="Close">`, //you can pass <img /> tag if you have specific close button
    };

    //Developer STEP 2 of 5 Set the delay time in seconds for the modal to appear. Must be number. If you want modal to appear instantly set to 0
    const modalDelay = 0;

    //Developer STEP 3 of 5 Set if modal should appear on page leave event. Can be only true or false.
    const pageLeaveEvent = true;

    //Developer STEP 4 of 5 Set how many times modal should appear. 'once' - will show modal only once per lifetime. 'session' - will show modal only once per session. 'dev' - for development purposes will show every time page refresh
    const timesToAppear = 'session';


    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/

    let modalPresent = setInterval(function () {
      if (!document.querySelector('.spz-modal-wrap')) {
        clearInterval(modalPresent)
        addModal(
          modalData,
          modalDelay,
          pageLeaveEvent,
          timesToAppear
        );
      }
    })

    function addModal(modalData, modalDelay, leavePage, timesToAppear) {
      const modalTemplate = `
        <div class="spz-modal-wrap v2">
          <div class="modal-wrap">
            <div class="modal-left">
              ${modalData.modalHeading.trim().length !== 0
                ? `<div class="modal-heading">${modalData.modalHeading}</div>`
                : ''
              }
              ${modalData.modalContent.trim().length !== 0
                ? `<div class="modal-content">${modalData.modalContent}</div>`
                : ''
              }
              <div class="modal-ctas">
                ${modalData.formData.trim().length !== 0
                  ? `<div class="get_a_demoFormModal">${modalData.formData}</div>`
                  : ''
                }
                <div class="close-modal">${modalData.closeModalText}</div>
              </div>
        
            </div>
            <div class="modal-right">
        		${
              modalData.leftImage.trim().length !== 0
                ? `<img src="${modalData.leftImage}" alt="${modalData.leftImageAlt}"/>`
                : ''
            }
        	</div>
          </div>
        </div>
      `;

      let mouseLeaveFired = false;
      const modalWrapSelector = '.spz-modal-wrap';

      function appendModal() {
        if (!document.querySelector(modalWrapSelector)) {
          document.body.insertAdjacentHTML('beforeend', modalTemplate);
          document.body.classList.add('hidden');
          document.querySelector(modalWrapSelector).addEventListener('click', handleModalClick);
          // on submit
          document.querySelector('.form_buttonModal').addEventListener('click', function(event) {
            event.preventDefault();
            const emailInput = document.querySelector('#demo_formModal .form_inputModal input[type="email"]');
            var emailAddress = emailInput.value;

            // set cookie
            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/";
            }

            setCookie("AutoFillEmailSPZ", emailAddress, 1);

            window.location.href = 'https://www.procurify.com/get-started/';
          });
        }
      }

      function handleModalClick(e) {
        console.log('Modal wrap clicked:', e.target.className);
        if (e.target.className === 'close-modals') {
          document.querySelector(modalWrapSelector).style.display = 'none';
          document.body.classList.remove('hidden');
        }
      }

      function modalLogic() {
        if (typeof modalDelay === 'number' && !leavePage) {
          setTimeout(appendModal, modalDelay * 1000);
        } else if (leavePage) {
          let mouseY = 0;
          let topValue = 0;
          window.addEventListener('mouseout', function (e) {
            mouseY = e.clientY;
            if (mouseY < topValue && !mouseLeaveFired) {
              mouseLeaveFired = true;
              appendModal();
            }
          });
        } else {
          appendModal();
        }
      }

      if ((timesToAppear === 'once' && !localStorage.getItem('modalShown')) ||
        (timesToAppear === 'session' && !sessionStorage.getItem('modalShown')) ||
        timesToAppear === 'dev') {
        modalLogic();
        if (timesToAppear === 'once') {
          localStorage.setItem('modalShown', '1');
        } else if (timesToAppear === 'session') {
          sessionStorage.setItem('modalShown', '1');
        }
      }
    }

    // hidden values
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

    hiddenValue('#5002 | Procurify | PDPs | Exit Modal', '5002_Variant_2');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode5002();
  }
}, 100);
