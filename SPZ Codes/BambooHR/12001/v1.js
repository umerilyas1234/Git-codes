(function () {
  const bodyInterval7022 = setInterval(function () {
    if (document.querySelector('body') && document.querySelector('.logos-container .logos-wrapper') && !document.querySelector('.spz-12001')) {
      clearInterval(bodyInterval7022)
      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      const expName = '#12001'; //experiment name should be #1001, #1002, #1003 etc.
      const variantName = expName + `_Variant`; //variantName should be _V1, _V2, _TC etc.
      const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com

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
          document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
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
        var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

        if (!ExistingExperimentName) {

          setCookie('ExperimentName', currentExperimentName, 1);
          setCookie('ExperimentValue', currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {

          setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
          setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {

          var existingNames = ExistingExperimentName.split(',');
          var existingValues = ExistingExperimentValue.split(',');

          var index = existingNames.indexOf(currentExperimentName);
          existingValues[index] = currentExperimentValue;

          setCookie('ExperimentName', existingNames.join(','), 1);
          setCookie('ExperimentValue', existingValues.join(','), 1);
        }
      }

      document.querySelector('body').classList.add("spz-12001")
      const timer = 10000;
      let autoSlideInterval;
      const HTMLStructure = `
        <div class="tabs_outer">
          <div class="spz-12001-tabs-custom-container">
            <div class="title">Pay your US-based employees on time, every time <img src="//res.cloudinary.com/spiralyze/image/upload/v1749131828/bamboohr/12001/elements.svg" alt="pay on time"></div>
            <div class="tabs-custom-wrapper">
              <div class="tabs-custom-header">
                <div class="child active" data-index="1">
                  <div class="text">State & Federal Tax Filing</div>
                  <div class="border"></div>
                  <div class="active-border"></div>
                </div>
                <div class="child" data-index="2">
                  <div class="text">Employee Self-service</div>
                  <div class="border"></div>
                  <div class="active-border"></div>
                </div>
                <div class="child" data-index="3">
                  <div class="text">Custom Journal Entry</div>
                  <div class="border"></div>
                  <div class="active-border"></div>
                </div>
                <div class="child" data-index="4">
                  <div class="text">Multi-rate Payroll</div>
                  <div class="border"></div>
                  <div class="active-border"></div>
                </div>
                <div class="padding-right"></div>
              </div>

              <div class="tabs-custom-content">
                <div class="child active" data-index="1">
                  <div class="tab_data">
                    <div class="text_section">
                      <h2>No more filing taxes — we do it for you</h2>
                      <p>Say goodbye to forgotten forms, miscalculations, and expensive penalties. We take care of all federal, state,
                        and local taxes for your US-based workers.</p>
                      <div class="cta_list">
                        <ul>
                          <li>
                            <a href="https://www.bamboohr.com/demo" class="custom_cta">Get a Demo</a>
                          </li>
                          <li>
                            <a href="https://www.bamboohr.com/signup/" class="custom_cta outline">Start Free Trial</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="image">
                      <video src="//res.cloudinary.com/spiralyze/video/upload/v1753181002/bamboohr/12001/assets/video/Tab_1.mp4" autoplay loop muted
                        playsinline></video>
                    </div>
                  </div>
                </div>
                <div class="child" data-index="2">
                  <div class="tab_data">
                    <div class="text_section">
                      <h2>Empower employees to manage their own information</h2>
                      <p>BambooHR payroll software prioritizes the employee experience. Employees can easily find pay stubs and edit information like withholdings and direct deposit in their BambooHR profile or the mobile app. This means less work for HR and a better experience for everyone.</p>
                      <div class="cta_list">
                        <ul>
                          <li>
                            <a href="https://www.bamboohr.com/demo" class="custom_cta">Get a Demo</a>
                          </li>
                          <li>
                            <a href="https://www.bamboohr.com/signup/" class="custom_cta outline">Start Free Trial</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="image">
                      <video src="//res.cloudinary.com/spiralyze/video/upload/v1753181002/bamboohr/12001/assets/video/Tab_2.mp4" autoplay loop muted
                        playsinline></video>
                    </div>
                  </div>
                </div>
                <div class="child" data-index="3">
                  <div class="tab_data">
                    <div class="text_section">
                      <h2>Sync payroll data with your accounting software</h2>
                      <p>Take full control of your accounting data with the Custom Journal Entry Report Builder. Effortlessly create and customize journal entries to fit your organization’s unique needs.</p>
                      <div class="cta_list">
                        <ul>
                          <li>
                            <a href="https://www.bamboohr.com/demo" class="custom_cta">Get a Demo</a>
                          </li>
                          <li>
                            <a href="https://www.bamboohr.com/signup/" class="custom_cta outline">Start Free Trial</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="image">
                      <video src="//res.cloudinary.com/spiralyze/video/upload/v1753181003/bamboohr/12001/assets/video/Tab_3.mp4" autoplay loop muted
                        playsinline></video>
                    </div>
                  </div>
                </div>
                <div class="child" data-index="4">
                  <div class="tab_data">
                    <div class="text_section">
                      <h2>Create flexible pay rates for different roles and tasks</h2>
                      <p>Create as many different project pay rates and classification types as you need, and let your employees track their own hours. Whether you have full-time, part-time, or contracted workers, you can relax while the data flows effortlessly into payroll.</p>
                      <div class="cta_list">
                        <ul>
                          <li>
                            <a href="https://www.bamboohr.com/demo" class="custom_cta">Get a Demo</a>
                          </li>
                          <li>
                            <a href="https://www.bamboohr.com/signup/" class="custom_cta outline">Start Free Trial</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="image">
                      <video src="//res.cloudinary.com/spiralyze/video/upload/v1753181003/bamboohr/12001/assets/video/Tab_4.mp4" autoplay loop muted
                        playsinline></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `

      // add content
      document.querySelector('.spz-12001 .cards-container .cards-wrapper').insertAdjacentHTML("afterend", HTMLStructure)
      const tabsChild = document.querySelectorAll('.spz-12001-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header > .child')
      // check if has scroll bar
      function hasScrollBar() {
        if (document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').clientWidth < document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').scrollWidth) {
          return true
        }
        return false
      }

      // or set child height so it will looks nice
      function getQuoteMinHeight() {
        let maxHeight = 0;
        for (let i = 0; i < tabsChild.length; i += 1) {
          if (maxHeight < document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].offsetHeight) {
            maxHeight = document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].offsetHeight
          }
        }
        return maxHeight;
      }

      // for set parent height so there will be no jumping animation on parent height
      function getContentWrapperHeight() {
        document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').removeAttribute("style")
        let maxHeight = 0;
        for (let i = 0; i < tabsChild.length; i += 1) {
          if (maxHeight < document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].offsetHeight) {
            maxHeight = document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].offsetHeight
          }
        }
        return maxHeight;
      }

      // setting the parent and child of the content
      function setQuoteMinHeight() {
        if (window.matchMedia("(max-width:1024.98px)").matches) {
          for (let i = 0; i < tabsChild.length; i++) {
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].removeAttribute("style")
          }
          // for (let i = 0; i < tabsChild.length; i++) {
          //   document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].style.height = '' + getQuoteMinHeight() + 'px';
          // }
          // document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').style.height = '' + getContentWrapperHeight() + 'px';
        }
        else {
          for (let i = 0; i < tabsChild.length; i++) {
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].removeAttribute("style")
          }
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').removeAttribute("style")
        }
      }

      // function to centering the title
      function moveTheTitle(index) {
        if (hasScrollBar()) {
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollTo({
            left: document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="' + index + '"]').getBoundingClientRect().left + document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft - parseInt(window.getComputedStyle(document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header'), null).getPropertyValue('padding-left'), 10),
            behavior: 'smooth'
          });
        }
      }

      function runAutoSlider() {
        console.log("runAutoSlider called")
        let i = 0;
        let width;
        autoSlideInterval = setInterval(() => {
          // reset from 0
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
          if ((i / timer) * 100 > 100) {
            width = "100%";
          } else {
            width = ((i / timer) * 100) + "%";
          }
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.width = width;

          // if more than timer
          if (i > timer) {
            // next active slide
            let curIndex = parseInt(document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').getAttribute("data-index"), 10);
            if (curIndex !== tabsChild.length) {
              curIndex = curIndex + 1;
            } else {
              curIndex = 1;
            }

            // change animation
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity = "0";
            const currActive = document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border');
            setTimeout(() => {
              currActive.style.width = "0px";
            }, 400)

            // remove active
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove('active')
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')

            // move to next tabs
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="' + curIndex + '"]').classList.add("active")
            document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="' + curIndex + '"]').classList.add("active")
            clearInterval(autoSlideInterval);
            runAutoSlider()

            // adjust scrollbar position for auto slider
            moveTheTitle(curIndex)

          }
          i += 200;
        }, 200)
      }

      function headerScrollBarCalculation() {
        // check if has scrollbar
        if (hasScrollBar()) {
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("show-gradient")
        } else {
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove('show-gradient')
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-listener-added")
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
        }

        // check reach end or no to show/hide gradient
        if (!document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.contains("scroll-listener-added")) {
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-listener-added")
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').addEventListener("scroll", () => {
            // check if reach end
            if (document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollWidth - document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft === document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').clientWidth) {
              document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-reach-end")
            } else {
              document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
            }
            // check if not at the beginning
            if (document.querySelector('.tabs-custom-wrapper').querySelector('.tabs-custom-header').scrollLeft > 0) {
              document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-not-at-start")
            }
            else {
              document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-not-at-start")
            }
          })
        }
      }

      // event listener  
      document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header').addEventListener("click", (event) => {
        if (event.target.closest('.child')) {
          clearInterval(autoSlideInterval);

          // set header current active
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').classList.add("no-transition")
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity = "0";
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove("active")
          event.target.closest('.child').classList.add("active")
          // event.target.closest('.child').querySelector('.active-border').classList.add("no-transition")
          // event.target.closest('.child').querySelector('.active-border').style.width='100%';
          // event.target.closest('.child').querySelector('.active-border').style.opacity=1;
          // runAutoSlider();
          moveTheTitle(event.target.closest('.child').getAttribute("data-index"))

          // set content current active
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')
          let index = event.target.closest('.child').getAttribute("data-index");
          document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="' + index + '"]').classList.add("active")
        }
      })

      // document.querySelector('.spz-12001-tabs-custom-container .spz-12001-get-demo-cta').addEventListener("click",function(){
      //   const formEl = document.querySelector('.form-wrapper');
      //   formEl.scrollIntoView({
      //     behavior: 'smooth',
      //   });
      //   if (!/Mobi/.test(navigator.userAgent)) formEl.querySelector('input:not([type=hidden])').focus();
      // })

      // dragging functionality using normal mouse
      const scrollableDiv = document.querySelector('.spz-12001-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header');
      let startMouseX = 0;
      let startScrollX = 0;
      let isDragging = false;

      // Mouse events for drag detection
      scrollableDiv.addEventListener('mousedown', (event) => {
        // Track where the mouse started
        startMouseX = event.pageX;
        startScrollX = scrollableDiv.scrollLeft;
        isDragging = true;
        // Prevent text selection and other default behaviors while dragging
        event.preventDefault();
      });

      scrollableDiv.addEventListener('mousemove', (event) => {
        if (isDragging) {
          // Calculate the change in mouse position
          const deltaX = event.pageX - startMouseX;
          // Adjust scroll position based on mouse movement
          scrollableDiv.scrollLeft = startScrollX - deltaX;
        }
      });

      scrollableDiv.addEventListener('mouseup', () => {
        isDragging = false;
      });

      scrollableDiv.addEventListener('mouseleave', () => {
        isDragging = false;
      });


      // autoslider animation on page load
      runAutoSlider()

      // needed delay
      let i = 0;
      const pageLoadInterval = setInterval(() => {
        headerScrollBarCalculation()
        setQuoteMinHeight()
        if (i >= 50) {
          clearInterval(pageLoadInterval)
        }
        i += 1;
      }, 200)
      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout)
        headerScrollBarCalculation()
        setQuoteMinHeight()
        resizeTimeout = setTimeout(function () {
          headerScrollBarCalculation()
          setQuoteMinHeight()
        }, 500)
      })
    }
  }, 10)
  setTimeout(function () {
    clearInterval(bodyInterval7022)
  }, 7000)
})();
