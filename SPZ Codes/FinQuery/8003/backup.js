// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "https://res.cloudinary.com/spiralyze/raw/upload/v1707830303/JupiterOne/5006/src/style.css";
if (
  !document.querySelector(
    'link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1707830303/JupiterOne/5006/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_8003")) {
    document.querySelector("body").classList.add("spz_8003");
    //Developer STEP 1 of 5 Fill Obejct values with the content from Figma
    const modalData = {
      modalHeading: '<strong>Streamline forecasting </strong> and budgeting with visibility across contracts.',
      modalSubHeading: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      modalContent: '<ul><li><strong>Software Inventory.</strong> Automated software discovery. Monitor usage across your organization. Track renewals.</li><li><strong>Employee Provisioning.</strong> Onboard and offboard employees across all applications with 1-click. Customizable by employee type.</li><li><strong>Cost Reduction.</strong> Uncover zombie subscriptions, unused apps, and shadow IT. Easily find and eliminate hidden expenses.</li></ul>',
      ctaHref: 'https://leasequery.com/free-demo/',
      ctaText: `get a demo <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M2 2L8 8L2 14" stroke="white" stroke-width="2.3" stroke-linecap="round"/>
                </svg>`,
      closeModalText: '<img src="//res.cloudinary.com/spiralyze/image/upload/v1718891129/finquery/8003/cross-icon.svg" alt="Close">', //you can pass <img /> tag if you have specific close button
    };

    //Developer STEP 2 of 5 Set the delay time in seconds for the modal to appear. Must be number. If you want modal to appear instantly set to 0
    const modalDelay = 0;

    //Developer STEP 3 of 5 Set if modal should appear on page leave event. Can be only true or false.
    const pageLeaveEvent = false;

    //Developer STEP 4 of 5 Set how many times modal should appear. 'once' - will show modal only once per lifetime. 'session' - will show modal only once per session. 'dev' - for development purposes will show every time page refresh
    const timesToAppear = 'dev';

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
            <div class="spz-modal-wrap contract_management">
              <div class="modal-wrap">
                <div class="close-modal">${modalData.closeModalText}</div>
                <div class="modal-right">
                  ${modalData.modalHeading.trim().length !== 0
                  ? `<div class="modal-heading">${modalData.modalHeading}</div>`
                      : ''
                    }
                      ${modalData.modalContent.trim().length !== 0
                      ? `<div class="modal-content">${modalData.modalContent}</div>`
                      : ''
                    }
                      <div class="modal-ctas">
                                ${modalData.ctaHref.trim().length !== 0
                      ? `<a href="${modalData.ctaHref}">${modalData.ctaText}</a>`
                      : ''
                    }
                                  
                      </div>
                      
                  </div>
                </div>
              </div>
            </div>
            `;

      let mouseLeaveFired = false;
      const modalWrapSelector = '.spz-modal-wrap';

      function appendModal() {
        if (!document.querySelector(modalWrapSelector)) {
          document.body.insertAdjacentHTML('beforeend', modalTemplate);
          document.querySelector(modalWrapSelector).addEventListener('click', handleModalClick);
        }
      }

      function handleModalClick(e) {
        if (e.target.className === 'spz-modal-wrap' || e.target.className === 'close-modal') {
          console.log('clicked');
          document.querySelector(modalWrapSelector).style.display = 'none';
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
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
