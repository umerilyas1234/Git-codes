function loadTestCode8003b() {
    if (!document.querySelector("body").classList.contains("spz_8003")) {
      document.querySelector("body").classList.add("spz_8003");
      //Developer STEP 1 of 5 Fill Obejct values with the content from Figma
      const modalData = {
        modalHeading: '<strong>Voted #1 </strong>  for lease accounting <br> 3 years running.',
        modalContent: '<ul><li><strong>Lease Accounting.</strong> Auto-generate error-free amortization schedules, journal entries, and disclosure reports.</li><li><strong> Compliance.</strong> Create compliance documents including ASC 842, GASB 87 and 96, IFRS 16, and SFFAS 54. </li><li><strong>Dashboard. </strong>  Monitor your portfolio from one dashboard. Track payments. Alerts for expiring leases and due dates.</li></ul>',
        ctaHref: 'https://leasequery.com/free-demo/',
        ctaText: `get a demo <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M2 2L8 8L2 14" stroke="white" stroke-width="2.3" stroke-linecap="round"/>
                  </svg>`,
        closeModalText: '<img class="close-modals" src="//res.cloudinary.com/spiralyze/image/upload/v1721719137/finquery/8003/close-icon.svg" alt="Close">', //you can pass <img /> tag if you have specific close button
      };
  
      //Developer STEP 2 of 5 Set the delay time in seconds for the modal to appear. Must be number. If you want modal to appear instantly set to 0
      const modalDelay = 0;
  
      //Developer STEP 3 of 5 Set if modal should appear on page leave event. Can be only true or false.
      const pageLeaveEvent = true;
  
      //Developer STEP 4 of 5 Set how many times modal should appear. 'once' - will show modal only once per lifetime. 'session' - will show modal only once per session. 'dev' - for development purposes will show every time page refresh
      const timesToAppear = 'once';
  
  
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
          <div class="spz-modal-wrap">
            <div class="modal-wrap">
  
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
                    ? `<a class="modal_cta" href="${modalData.ctaHref}">${modalData.ctaText}</a>`
                    : ''
                  }
                  
                  <div class="close-modal">${modalData.closeModalText}</div>
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
            document.body.classList.add('hidden');
            document.querySelector(modalWrapSelector).addEventListener('click', handleModalClick);
          }
        }
  
        function handleModalClick(e) {
          if (e.target.classList.contains('spz-modal-wrap') || e.target.className === 'close-modals' || e.target.className === 'modal_cta') {
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
  
        if ((timesToAppear === 'once')) {
          const today = new Date().toISOString().split('T')[0];
          const storedDate = localStorage.getItem('modalShownDate');
          const modalShownCount = localStorage.getItem('modalShownCount') || 0;
          if (storedDate !== today && modalShownCount < 3) {
            modalLogic();
            // Update the stored date to today's date
            localStorage.setItem('modalShownDate', today);
  
            // Increment the counter and update the storage
            localStorage.setItem('modalShownCount', Number(modalShownCount) + 1);
          }
        }
      }
    }
  }
  
  var bodyInterval = setInterval(() => {
    if (document.querySelectorAll("body").length > 0) {
      clearInterval(bodyInterval);
      loadTestCode8003b();
    }
  }, 100);
  