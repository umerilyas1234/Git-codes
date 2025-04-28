// Wait for element
function waitForElement(cssSelector, callback) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector);

        if (stop) return;

        if (elementCached) {
          callback(elementCached);
          clearTimeout(timeout);
        } else {
          window.requestAnimationFrame(check);
        }
      } catch (err) {
        console.log(err);
      }
    };

  window.requestAnimationFrame(check);

  timeout = setTimeout(function () {
    stop = true;
  }, 5000);
}

waitForElement('#___gatsby main', runObserverOnMain);

function runObserverOnMain() {
  const targetNode = document.querySelector("#___gatsby main");
  const config = { attributes: true, childList: true, subtree: false };
  const callback = (mutationList, observer) => {
    loadTestCode5001();
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  loadTestCode5001();
}

const loadJS_SPZ = (url, implementationCode, location) => {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
const loadCSS_SPZ = (path) => {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  document.getElementsByTagName("head")[0].appendChild(css);
};

const smoothScrollJSURL = "//res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js";
const splideCSSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
const splideJSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";


loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
loadCSS_SPZ(splideCSSURL);

document.addEventListener("click", function (e) {
  if (window.location.href.indexOf('/pricing') == -1) {
    return;
  }
  if (e.target.id === "close_modal") {
    document.querySelector("#feature_modal").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  }
});

document.addEventListener("click", function (e) {
  if (window.location.href.indexOf('/pricing') == -1) {
    return;f
  }
  let targetElement = e.target;
  while (targetElement) {
    if (targetElement.id === "feature_btn") {
      document.querySelector("#feature_modal").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      if (document.querySelectorAll("#feature_modal").length > 0) {
        const accordionItemHeaders = document.querySelectorAll(
          ".accordion-item-header"
        );
        function expandAccordionItem(accordionItemHeader) {
          accordionItemHeader.classList.add("active");
          const accordionItemBody =
            accordionItemHeader.nextElementSibling;
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        }
        function collapseAccordionItem(accordionItemHeader) {
          accordionItemHeader.classList.remove("active");
          const accordionItemBody =
            accordionItemHeader.nextElementSibling;
          accordionItemBody.style.maxHeight = 0;
        }
        // Function to expand the first accordion item
        function expandFirstAccordionItem() {
          const firstAccordionItemHeader = accordionItemHeaders[0];
          if (firstAccordionItemHeader) {
            expandAccordionItem(firstAccordionItemHeader);
          }
        }
        const currentlyActiveAccordionItemHeader = document.querySelector(
          ".accordion-item-header.active"
        );
        if (
          currentlyActiveAccordionItemHeader &&
          currentlyActiveAccordionItemHeader !== accordionItemHeaders
        ) {
          collapseAccordionItem(currentlyActiveAccordionItemHeader);
        }
        expandFirstAccordionItem();
      }
      return;
    }
    targetElement = targetElement.parentElement;
  }
});


let autoAccordionInterval;
let splide;
function loadTestCode5001() {
  if (window.location.href.indexOf('/pricing') == -1) {
    document.querySelector("body").classList.remove("spz_5001");
    return;
  }
  console.log("Test loading");
  document.querySelector("body").classList.add("spz_5001");


  var pricingSection = document.querySelector("#pricing-page-product-details");

  pricingSection.querySelector(".banner-simple h1").innerHTML = "Pricing";

  var fisrtPricingType = pricingSection.querySelector(".swiper-slide:first-child > div:last-child>p + div");
  var secondPricingType = pricingSection.querySelector(".swiper-slide:nth-child(2) > div:last-child>p + div");
  var thirdPricingType = pricingSection.querySelector(".swiper-slide:nth-child(3) > div:last-child>p + div");

  fisrtPricingType.innerHTML = "The essentials for optimizing matter management and improving efficiency";
  secondPricingType.innerHTML = "Supercharge your Neos experience with premium document management";
  thirdPricingType.innerHTML = "Experience fully loaded document management, automations, and advanced intake features";

  if(pricingSection.querySelector(".swiper-slide:last-child>div:last-child>div:first-child")){
    pricingSection.querySelector(".swiper-slide:last-child>div:last-child>div:first-child").remove();
  }
  pricingSection.querySelectorAll(".swiper-slide>div:last-child div:nth-of-type(3) div p:last-child").forEach(function (element) {
      element.innerHTML = "(billed annually)";
    });

    pricingSection.querySelectorAll("button[aria-label='Contact Us']>span:first-child").forEach(function (text) {
      text.innerHTML = "Get a Demo";
    });

    var swiperSlideFirstDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>span>div");
    if (swiperSlideFirstDiv) {
      swiperSlideFirstDiv.setAttribute('id', 'swiperFirstDivHTML');
    }


    var swiperSlideSecondDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>span>div");
    if (swiperSlideSecondDiv) {
      swiperSlideSecondDiv.setAttribute('id', 'swiperSecondDiveHTML');
    }


    var swiperSlideThirdDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>span>div");
    if (swiperSlideThirdDiv) {
      swiperSlideThirdDiv.setAttribute('id', 'swiperThirdDivHTML');
    }


    if (!document.querySelector('.feature_btnOuter')) {
      document.querySelector("#pricing-page-product-details>div>div:nth-child(2)").insertAdjacentHTML("afterend", '<div id="featureModalHTML"></div>');
    }
    // feature section
    document.querySelector(".spz_5001 #pricing-page-product-details").insertAdjacentHTML("afterend", '<div id="featureIntegraionTestimonialSectionHTML"></div>');

    // feature section eneded


    // Load content via json
    fetch('https://res.cloudinary.com/spiralyze/raw/upload/v1714116829/assembly/5001/jsonCode/5001_json.js').then(response => response.text()).then(data => {
      eval(data); 
      Object.entries(htmlJson).forEach(([key, value]) => {
        const element = document.querySelector('.' + key);
        if (element) {
          element.innerHTML = value;
        } else {
          console.error('Selector .' + key + ' not found on the page.');
        }
      });
    }).catch(error => console.error('Error fetching HTML JSON:', error));
    // Load content via json end

    document.querySelector(
      "div[data-testid='contact__container'] h4"
    ).innerHTML = "Ask us about our all-inclusive and custom pricing";
    document.querySelector(
      "div[data-testid='contact__container']  p span:nth-of-type(2)"
    ).innerHTML = " or (410) 873-9512";

    // accordion
    if (document.querySelectorAll("#feature_modal").length > 0) {
      const accordionItemHeaders = document.querySelectorAll(
        ".accordion-item-header"
      );
      function expandAccordionItem(accordionItemHeader) {
        accordionItemHeader.classList.add("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      }
      function collapseAccordionItem(accordionItemHeader) {
        accordionItemHeader.classList.remove("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight = 0;
      }
      // Function to expand the first accordion item
      function expandFirstAccordionItem() {
        const firstAccordionItemHeader = accordionItemHeaders[0];
        if (firstAccordionItemHeader) {
          expandAccordionItem(firstAccordionItemHeader);
        }
      }
      accordionItemHeaders.forEach((accordionItemHeader, index) => {
        if (!accordionItemHeader.classList.contains("registed-click-event")) {
          accordionItemHeader.classList.add("registed-click-event");
          accordionItemHeader.addEventListener("click", (event) => {
            const currentlyActiveAccordionItemHeader = document.querySelector(
              ".accordion-item-header.active"
            );
            if (
              currentlyActiveAccordionItemHeader &&
              currentlyActiveAccordionItemHeader !== accordionItemHeader
            ) {
              collapseAccordionItem(currentlyActiveAccordionItemHeader);
            }
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
              accordionItemBody.style.maxHeight =
                accordionItemBody.scrollHeight + "px";
            } else {
              accordionItemBody.style.maxHeight = 0;
            }
          });
          if (index === 0) {
            expandAccordionItem(accordionItemHeader);
          }
        }
      });
      expandFirstAccordionItem();
    }

    document.querySelector("#pricing-page-plan-enhancements>div>div:first-child>div:first-child").innerHTML = "Plan Addons";
    function initializeAddonsParagph() {
      const addonCheck = document.querySelector(
        "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:nth-child(2) ~ .addons_paragraph"
      );
      const addonsParagph = document.querySelectorAll(
        "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:last-child"
      );
      addonsParagph.forEach(function (data) {
        if (!addonCheck) {
          data.insertAdjacentHTML(
            "afterend",
            "<div class='addons_paragraph'><p></p></div>"
          );
          console.log("activeFeatures added");
        }
      });
    }
    function loadSwiperCode() {
      var activeFeatures = document.querySelector(
        "#pricing-page-plan-enhancements>div>div>div>div>div>div:first-child"
      );
      if (activeFeatures) {
        var addonCheck = document.querySelector(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:nth-child(2) ~ .addons_paragraph"
        );
        console.log("activeFeatures");
        initializeAddonsParagph();
        function modifySlideText(selector, newText) {
          var slideText = document.querySelector(selector);
          if (slideText) {
            slideText.innerHTML = newText;
          }
        }
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:first-child .addons_paragraph p",
          "Accept online credit card and ACH payments. Send clients secure payment links. Reduce billing time."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(2) .addons_paragraph p",
          "Send and receive text messages directly through the Neos platform. Organize and store conversations."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3) .addons_paragraph p",
          "Track costs for printing, scanning, phone usage document management, and more."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(4) .addons_paragraph p",
          "Make phone calls, send messages, host video meetings, and manage contacts, all on one dashboard."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(5) .addons_paragraph p",
          "Sync your Neos contacts and mailing list with Mailchimp. Send automated bulk campaigns to leads and clients."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(6) .addons_paragraph p",
          "Bulk import case documents into Neos and auto-assign to the right cases."
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(7) .addons_paragraph p",
          "Sync Neos contacts, expenses, billable hours, invoices, and more with QuickBooks. "
        );
        modifySlideText(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(8) .addons_paragraph p",
          "Get dedicated support through every phase of cloud transition. Onboard in just a few days."
        );
        function modifySlideHeading(selector, searchText, replacementHTML) {
          var slideText = document.querySelector(selector);
          if (slideText) {
            var text = slideText.innerHTML;
            text = text.replace(searchText, replacementHTML);
            slideText.innerHTML = text;
          }
        }
        modifySlideHeading(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3) > div > div:first-child > div",
          "Cost Recovery -",
          '<span class="bold">Cost Recovery - </span>'
        );
      }
    }
    loadSwiperCode();
    var planTab1 = document.querySelector(
      "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:first-child"
    );
    planTab1.addEventListener("click", function () {
      const addonsData = document.querySelectorAll(
        "#pricing-page-plan-enhancements .swiper-wrapper"
      );
      addonsData.forEach(function (paragraph) {
        paragraph.classList.remove("hide");
      });
      loadSwiperCode();
      initializeAddonsParagph();
      console.log("Button clicked 1");
    });
    var planTab2 = document.querySelector(
      "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:last-child"
    );
    planTab2.addEventListener("click", function () {
      const addonsData = document.querySelectorAll(
        "#pricing-page-plan-enhancements .swiper-wrapper"
      );
      addonsData.forEach(function (paragraph) {
        paragraph.classList.add("hide");
      });
      loadSwiperCode();
      initializeAddonsParagph();
      console.log("Button clicked 2");
    });
    if (
      document.querySelector(
        ".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
      )
    ) {
      document.querySelector(
        ".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
      ).src =
        "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp";
      document.querySelector(
        "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
      ).srcset =
        "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp";
      document.querySelector(
        "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture source"
      ).srcset =
        "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp";
    }
    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:first-child h4"
    ).innerHTML = "How will you help me cut costs?";


    const targetNode = document.querySelector("[data-testid='accordion__wrapper']");
    const config = { attributes: true, childList: true, subtree: false };
    const callback = (mutationList, observer) => {
      loadTestCode5001();
    };
    const observer = new MutationObserver(function () {

    });
    observer.observe(targetNode, config);
    loadTestCode5001();

    setInterval(function () {
      const accordionData = [
        {
          selector: "#panel_0",
          content: `
            <div class="accordion_content">
              <title>
                Assembly Neos helps reduce costs in many ways:
              </title>
              <ul>
                <li>
                  <p>
                    <strong>Automation.</strong> Automated document generation and population,
                    lead intake, invoicing, and other workflows reduces time spent on other
                    manual tasks.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Organization.</strong> Complete platform search including PDF and
                    Word document text, image info, and more, reduces time spent searching for
                    information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Storage & Maintenance.</strong> Assembly Neos is 100% cloud-based,
                    removing the need for physical storage, paper usage, expensive on-site
                    servers, and dedicated IT staff.
                  </p>
                </li>
              </ul>
            </div>
          `,
        },
        {
          selector: "#panel_1",
          content: `<p>Subscriptions can be paid through credit card or ACH.</p>`,
        },
        {
          selector: "#panel_2",
          content: `<p>Our dedicated migration and onboarding team can help you get set up and running in as little as 1 week. </p>`,
        },
      ];
      accordionData.forEach(({ selector, content }, index) => {
        const accordion = document.querySelector(
          `${selector} ~ .MuiCollapse-root .MuiAccordion-region`
        );
        if (accordion) {
          // console.log(`accordion ${index + 1} working`);
          document.querySelector(
            `${selector} div[data-testid=rich-text__container]`
          ).innerHTML = content;
        }
      });
    });
    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(2) h4"
    ).innerHTML = "How do I pay my subscription fee?";
    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(3) h4"
    ).innerHTML = "How quickly can I get Neos set up and running?";
    if (window.innerWidth < 767) {
      document.querySelector("#feature_modal").classList.add("first_active");
      document.addEventListener("click", function (e) {
        if (e.target.id === "essential") {
          const anchorElements = document.querySelectorAll(
            ".pricing_nav ul li a"
          );
          if (anchorElements.length > 0) {
            anchorElements.forEach(function (anchorElement) {
              anchorElement.classList.remove("active");
            });
          }
          e.target.classList.add("active");
          console.log("click 1");
          document
            .querySelector(".custom_modal")
            .classList.remove("second_active");
          document
            .querySelector(".custom_modal")
            .classList.remove("third_active");
          document
            .querySelector(".custom_modal")
            .classList.add("first_active");
        } else if (e.target.id === "premium") {
          const anchorElements = document.querySelectorAll(
            ".pricing_nav ul li a"
          );
          if (anchorElements.length > 0) {
            anchorElements.forEach(function (anchorElement) {
              anchorElement.classList.remove("active");
            });
          }
          e.target.classList.add("active");
          console.log("click 2");
          document
            .querySelector(".custom_modal")
            .classList.add("second_active");
          document
            .querySelector(".custom_modal")
            .classList.remove("third_active");
          document
            .querySelector(".custom_modal")
            .classList.remove("first_active");
        } else if (e.target.id === "pro") {
          const anchorElements = document.querySelectorAll(
            ".pricing_nav ul li a"
          );
          if (anchorElements.length > 0) {
            anchorElements.forEach(function (anchorElement) {
              anchorElement.classList.remove("active");
            });
          }
          console.log("click 2");
          e.target.classList.add("active");
          document
            .querySelector(".custom_modal")
            .classList.remove("second_active");
          document
            .querySelector(".custom_modal")
            .classList.remove("first_active");
          document
            .querySelector(".custom_modal")
            .classList.add("third_active");
        }
      });
    }

    const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(
        ".spz_5001 .section2_5001 .accordion-wrapper .child .title > .text span"
      );
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].classList.contains("two-line")) {
          spans[i].classList.remove("two-line");
        }
        if (spans[i].offsetHeight > 30) {
          spans[i].classList.add("two-line");
        }
      }
    };

    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text").addEventListener("click", function (e) {
        if (
          e.target.closest(".title") &&
          !e.target.closest(".child").classList.contains("active") &&
          !document.querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper .animate"
          )
        ) {
          // remove active
          const prevElement = document.querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper .text .child.active"
          );
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
          if (
            document.querySelector(
              ".spz_5001 .section2_5001 .accordion-wrapper .child.no-border"
            )
          ) {
            document
              .querySelector(
                ".spz_5001 .section2_5001 .accordion-wrapper .child.no-border"
              )
              .classList.remove("no-border");
          }
          if (
            e.target.closest(".child").getAttribute("data-index") != "1"
          ) {
            document
              .querySelector(
                '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
                (parseInt(
                  e.target.closest(".child").getAttribute("data-index")
                ) -
                  1) +
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
          document
            .querySelector(
              ".spz_5001 .section2_5001 .accordion-wrapper .image .hero.active"
            )
            .classList.remove("active");
          document
            .querySelector(
              '.spz_5001 .section2_5001 .accordion-wrapper .image .hero[data-index="' +
              e.target.closest(".child").getAttribute("data-index") +
              '"]'
            )
            .classList.add("active");
          //change scroll position
          if (
            window.matchMedia("(max-width: 1079.98px)").matches &&
            document.querySelector(
              ".spz_5001 .section2_5001 .accordion-wrapper.stop"
            )
          ) {
            setTimeout(function () {
              var scroll = new SmoothScroll();
              scroll.animateScroll(
                document
                  .querySelector(
                    ".spz_5001 .section2_5001 .accordion-wrapper .child.active"
                  )
                  .getBoundingClientRect().y + scrollY,
                null,
                {
                  easing: "easeOutQuad",
                }
              );
            }, 302);
          }
        }
    });

    //autoplay
    let i = 0;
    autoAccordionInterval = setInterval(function () {
      document
        .querySelector(
          ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
        )
        .removeAttribute("style");
      document.querySelector(
        ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
      ).style.width = "" + (i / timer) * 100 + "%";
      if (i > timer) {
        document
          .querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
          )
          .removeAttribute("style");
        let curIndex = parseInt(
          document
            .querySelector(
              ".spz_5001 .section2_5001 .accordion-wrapper .child.active"
            )
            .getAttribute("data-index")
        );
        if (curIndex != 5) {
          curIndex = curIndex + 1;
        } else {
          curIndex = 1;
        }
        document
          .querySelector(
            '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
            curIndex +
            '"] .title'
          )
          .click();
        i = 0;
      }
      i += 200;
    }, 200);
    document
      .querySelector(".spz_5001 .section2_5001 .accordion-wrapper .image")
      .addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document
          .querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
          )
          .removeAttribute("style");
        if (
          !document.querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper.stop"
          )
        ) {
          document
            .querySelector(".spz_5001 .section2_5001 .accordion-wrapper")
            .classList.add("stop");
        }
      });
    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text").addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document
          .querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
          )
          .removeAttribute("style");
        if (
          !document.querySelector(
            ".spz_5001 .section2_5001 .accordion-wrapper.stop"
          )
        ) {
          document
            .querySelector(".spz_5001 .section2_5001 .accordion-wrapper")
            .classList.add("stop");
        }
    });
    checkFeatureTitleHeight();


    function loadSplideSlider() {
      splide = new Splide(".spz_5001 .section4_5001 .splide1", {
        type: "loop",
        autoplay: false,
        arrows: true,
        autoHeight: true,
        pagination: true,
        focus: "center",
        autoWidth: true,
        breakpoints: {
          1079.98: {
            perPage: 1,
            focus: "center",
            autoWidth: true,
          },
        },
      });
      setTimeout(function () {
        splide.mount();
        splide.on("move", function (e) {
          document
            .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
            .classList.remove("active1", "active2", "active3");
          document
            .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
            .classList.add("active" + (parseInt(splide.index) + 1));
        });
        window.addEventListener("resize", function () {
          splide.refresh();
        });
        document
          .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
          .classList.add("active1");
      }, 200);
    }
    loadJS_SPZ("//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", loadSplideSlider, document.body);
}