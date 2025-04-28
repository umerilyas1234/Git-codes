var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1721035513/procurify/2003/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1721035513/procurify/2003/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}
const loadJS_SPZ = (url, implementationCode, location) => {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;
  location.appendChild(scriptTag);
};
const smoothScrollJSURL = "//res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js";
loadJS_SPZ(smoothScrollJSURL, function () {}, document.body);
let autoAccordionInterval;
let splide;
let autoAccordionTimer = 0;
const autoAccordionTimeout = 8000;
function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_2003")) {
    document.querySelector("body").classList.add("spz_2003");

    // features section
    if (!document.querySelector('.section2_2003')) {
      document
        .querySelector("#logo-slider")
        .insertAdjacentHTML("afterend",
        `
        <section class="section2_2003" data-testid="component-wrapper__container">
          <div class="auto_container">
              <div class="section2_inner">
                  <div class="wrapper">
                      <div class="title">Reduce spend while automating procurement & AP</div>
                      <div class="accordion-wrapper">
                          <div class="text">
                              <div class="child active" data-index="1">
                                <div class="child_inner">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <span>Increase spend visibility</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 18L16 12L10 18" stroke="#8D959E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 14L16 20L10 14" stroke="#31936A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Track spend across departments, vendors, and projects. Get real-time visibility so you can proactively control spend.&nbsp;See exactly where money is being spent - office supplies, IT equipment, etc. Monitor the impact of each purchase
                                            <br> on your budget.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-01.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-768-step-01.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-01.webp"  alt="Increase spend visibility" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="2">
                                <div class="child_inner">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <span>Control all spend types</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 18L16 12L10 18" stroke="#8D959E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 14L16 20L10 14" stroke="#31936A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Set budgets for departments, projects, vendors, purchase orders, spend categories, and more. Automated multi-level approval workflows.</p>
                                            <p>Get real-time spend insights. Identify opportunities to eliminate spend or switch to lower-cost alternatives.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-02.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-768-step-02.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-02.webp" alt="Control all spend types" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="3">
                                <div class="child_inner">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <span>Auto-sync invoices and purchase orders</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                          <path d="M22 18L16 12L10 18" stroke="#8D959E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                          <path d="M22 14L16 20L10 14" stroke="#31936A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Auto-match purchase orders, vendor invoices, and receiving reports. No more digging through all your accounting platforms to compare POs and invoices.</p>
                                            <p>Sync purchasing data with ERPs. Reduce reconciliation time 90%.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-03.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-768-step-03.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-03.webp" alt="Auto-sync invoices and purchase orders" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="4">
                                <div class="child_inner">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                        <span>Consolidate solutions</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 18L16 12L10 18" stroke="#8D959E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 14L16 20L10 14" stroke="#31936A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Manage purchasing, contracts, vendor relationships, and invoicing in one place. No more toggling between windows and double-entering data. Streamline financial operations. </p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-04.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-768-step-04.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-04.webp" alt="Consolidate solutions" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="5">
                                <div class="child_inner">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <span>Speed up purchase cycles</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 18L16 12L10 18" stroke="#8D959E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M22 14L16 20L10 14" stroke="#31936A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                        <p>Automate requests, approvals, and purchase orders. Let procurement teams, approvers, and suppliers communicate in real-time. Streamline vendor management with preferred vendors and pre-negotiated terms.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-05.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-768-step-05.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-360-step-05.webp"alt="Speed up purchase cycles" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                          </div>
                          <div class="image">
                              <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-01_1.webp" alt="Increase spend visibility" width="632" height="464" loading="lazy">

                              <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-01_1.webp" alt="Increase spend visibility" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-02_1.webp" alt="Control all spend types" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-03_1.webp" alt="Auto-sync invoices and purchase orders" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-04_1.webp" alt="Consolidate solutions" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2003/ui-v1-1440-step-05_1.webp" alt="Speed up purchase cycles" width="632" height="464" loading="lazy">
                          </div>
                      </div>
                      <div class="cta_outer">
                          <a href="https://www.procurify.com/get-started/" class="cta">
                              <span>Book a demo</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        `
        );

      var section2AccordianWrapper = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper > .text");
      function resetProgressBar() {
        autoAccordionTimer = 0; // Reset the timer
        document.querySelectorAll(".spz_2003 .section2_2003 .accordion-wrapper .child .bar .line").forEach(line => {
          line.removeAttribute("style"); // Reset the progress bar style
        });
      }
      if (!section2AccordianWrapper.classList.contains('spz-click-registered')) {
        section2AccordianWrapper.classList.add('spz-click-registered');
        section2AccordianWrapper.addEventListener("click", function (e) {
          if (
            e.target.closest(".child_inner") &&
            !e.target.closest(".child").classList.contains("active") &&
            !document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .animate")
          ) {
            resetProgressBar();
            stopSection2AccordionAutoPlay();
            // remove active
            const prevElement = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .text .child.active");
            const prevActiveHeight = prevElement.offsetHeight;
            prevElement.classList.remove("active");
            const afterActiveHeight = prevElement.offsetHeight;
            prevElement.classList.add("active");
            prevElement.style.height = "" + prevActiveHeight + "px";
            prevElement.classList.remove("active");
            setTimeout(function () {
              prevElement.style.height = "" + afterActiveHeight + "px";
              prevElement.classList.add("animate");
            }, 1);
            setTimeout(function () {
              prevElement.removeAttribute("style");
              prevElement.classList.remove("animate");
            }, 301);
            //remove border
            var accordionChild = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .child.no-border");
            if (accordionChild) {
              accordionChild.classList.remove("no-border");
            }
            if (e.target.closest(".child").getAttribute("data-index") != "1") {
              document
                .querySelector(
                  '.spz_2003 .section2_2003 .accordion-wrapper .child[data-index="' +
                  (parseInt(e.target.closest(".child").getAttribute("data-index")) - 1) +
                  '"]'
                )
                .classList.add("no-border");
            }
            //adding active
            const nextElement = e.target.closest(".child");
            const prevTargetHeight = nextElement.offsetHeight;
            nextElement.classList.add("active");
            const nextTargetHeight = nextElement.offsetHeight;
            nextElement.classList.remove("active");
            nextElement.style.height = "" + prevTargetHeight + "px";
            nextElement.classList.add("active");
            setTimeout(function () {
              nextElement.style.height = "" + nextTargetHeight + "px";
              nextElement.classList.add("animate");
            }, 1);
            setTimeout(function () {
              nextElement.removeAttribute("style");
              nextElement.classList.remove("animate");
            }, 301);
            //image animation
            document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .image .hero.active").classList.remove("active");
            document
              .querySelector(
                '.spz_2003 .section2_2003 .accordion-wrapper .image .hero[data-index="' +
                e.target.closest(".child").getAttribute("data-index") +
                '"]'
              )
              .classList.add("active");
            //change scroll position
            if (
              window.matchMedia("(max-width: 1023.98px)").matches &&
              document.querySelector(
                  ".spz_2003 .section2_2003 .accordion-wrapper.stop"
              )
            ) {
              setTimeout(function () {
                var scroll = new SmoothScroll();
                var targetElement = document.querySelector(
                    ".spz_2003 .section2_2003 .accordion-wrapper .child.active"
                );
                var targetPosition = targetElement.getBoundingClientRect().y + scrollY - 90; 
                scroll.animateScroll(targetPosition, null, {
                    easing: "easeOutQuad",
                });
              }, 302);
            }
          }
        });
      }
    }

    // Function to check if an element is in view
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const inViewport = (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
      return inViewport;
    }
    
    // Function to run the auto accordion code
    function runAutoAccordion() {
      if (!autoAccordionInterval) {
        autoAccordionInterval = setInterval(function () {
          var accordionWrapperEle = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper");
          if (!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')) {
            return;
          }
          document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
          document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .child.active .bar .line").style.width = "" + (autoAccordionTimer / autoAccordionTimeout) * 100 + "%";
          if (autoAccordionTimer > autoAccordionTimeout) {
            document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
            let curIndex = parseInt(
              document
                .querySelector(".spz_2003 .section2_2003 .accordion-wrapper .child.active")
                .getAttribute("data-index")
            );
            curIndex < 5 ? curIndex++ : curIndex = 1;
            document
              .querySelector(
                '.spz_2003 .section2_2003 .accordion-wrapper .child[data-index="' +
                curIndex +
                '"] .title'
              )
              .click();
            autoAccordionTimer = 0;
          }
          autoAccordionTimer += 200;
        }, 200);
      }
    }

    // Add scroll event listener to run the code when "DevOne" is in view
    document.addEventListener('scroll', function() {
      const featureSection = document.querySelector('.section2_2003');
      console.log(featureSection);
      if (featureSection && isInViewport(featureSection)) {
        runAutoAccordion();
        document.removeEventListener('scroll', arguments.callee);
      }
    });


    function stopSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper");
      accordionWrapperEle.classList.add("stop");
    }

    function startSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper");
      accordionWrapperEle.classList.remove("stop");
    }

    const accordionWrapper = document.querySelector(".spz_2003 .section2_2003 .accordion-wrapper");

    accordionWrapper.addEventListener("mouseenter", function(event) {
        if (event.target.matches(".child.active")) {
            stopSection2AccordionAutoPlay();
        }
    }, true);

    accordionWrapper.addEventListener("mouseleave", function(event) {
        if (event.target.matches(".child.active")) {
            startSection2AccordionAutoPlay();
        }
    }, true);
    
    const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(".spz_2003 .section2_2003 .accordion-wrapper .child .title > .text span");
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].classList.contains("two-line")) {
          spans[i].classList.remove("two-line");
        }
        if (spans[i].offsetHeight > 30) {
          spans[i].classList.add("two-line");
        }
      }
    };
    checkFeatureTitleHeight();

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

    // Use this and change value according to the experiment
    hiddenValue('#2003 | Procurify | Home | Features Accordion', '2003_Variant_1');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
