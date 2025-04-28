import compareFeatureHtml from "./compare-feature.html";
import css from "!!raw-loader!/temp/main.css";
let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles);

let autoAccordionInterval;
let splide;
function loadTestCode4004() {
  if (!document.querySelector("body").classList.contains("spz_5001")) {
    document.querySelector("body").classList.add("spz_5001");
    console.log("111111");

    document.querySelector(
      "#pricing-page-product-details .banner-simple h1"
    ).innerHTML = "Pricing";
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>p + div"
    ).innerHTML = "Best for solo practitioners and small law firms";
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>p + div"
    ).innerHTML = "Best for medium-sized law firms";
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>p + div"
    ).innerHTML = "Best for large law firms";
    document
      .querySelector(
        "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>div:first-child"
      )
      .remove();
    var elements = document.querySelectorAll(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3) div p:last-child"
    );

    elements.forEach(function (element) {
      element.innerHTML = "(billed annually)";
    });

    var btnTxt = document.querySelectorAll(
      ".spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button>span:first-child"
    );
    btnTxt.forEach(function (text) {
      text.innerHTML = "Get a Demo";
    });

    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>span>div"
    ).innerHTML = `
        <ul class="css-ykvzw5 efpjilz7 pricing_terms">
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Basic customizable intake forms
              </span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0">Auto-populate documents with case info</span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Batch document generation</span
              >
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0">Document editing and storage</span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Task checklists</span
              >
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div><span class="css-throse efpjilz0">Custom case types, workflows, and calendaring</span></div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Communication and eSignature integrations</span
              >
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Basic reporting</span
              >
            </div>
          </li>
        </ul>
    `;
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>span>div"
    ).innerHTML = `
        <title>Everything in Neos Essentials plus:</title>
        <ul class="css-ykvzw5 efpjilz7 pricing_terms">
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Turn scanned images into editable documents
              </span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0">PDF editing, highlighting, redacting, and more</span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Bates stamping</span
              >
            </div>
          </li>
        </ul>
    `;
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>span>div"
    ).innerHTML = `
        <title>Everything in Neos Premium plus:</title>
        <ul class="css-ykvzw5 efpjilz7 pricing_terms">
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Fully customizable, responsive intake forms
              </span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0">Automated workflows</span>
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >Marketing campaigns and leads tracking</span
              >
            </div>
          </li>
          <li class="css-wm8ru efpjilz5">
            <div>
              <span class="css-throse efpjilz0"
                >In-depth reporting including lead ROI and revenue tracking</span
              >
            </div>
          </li>
        </ul>
    `;
    document
      .querySelector("#pricing-page-product-details>div>div:nth-child(2)")
      .insertAdjacentHTML("afterend", compareFeatureHtml);
    document.querySelector(
      "div[data-testid='contact__container'] h4"
    ).innerHTML = "Looking for enterprise pricing?";
    document.querySelector(
      "div[data-testid='contact__container']  p span:nth-of-type(2)"
    ).innerHTML = " or (410) 873-9512";
    document.addEventListener("click", function (e) {
      if (e.target.id === "close_modal") {
        document.querySelector("#feature_modal").style.display = "none";
        document.querySelector("body").style.overflow = "visible";
      }
    });
    document.addEventListener("click", function (e) {
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
      });

      expandFirstAccordionItem();
    }

    document.querySelector(
      "#pricing-page-plan-enhancements>div>div:first-child>div:first-child"
    ).innerHTML = "Plan Addons";

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
          "Sync Neos contacts, expenses, billable hours, invoices, and more with QuickBooks. "
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
    setInterval(function () {
      const accordionData = [
        {
          selector: "#panel_0",
          content: `
            <div class="accordion_content">
              <title>
                Assembly Neos helps reduce costs and increase billable hours in many ways:
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
          content: `<p>We accept payments through ACH transfer, credit and debit cards, Zelle, PayPal, and Venmo.</p>`,
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
          console.log(`accordion ${index + 1} working`);
          document.querySelector(
            `${selector} div[data-testid=rich-text__container]`
          ).innerHTML = content;
        }
      });
    });

    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(2) h4"
    ).innerHTML = "What payment methods do you accept?";
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
          document.querySelector(".custom_modal").classList.add("first_active");
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
          document.querySelector(".custom_modal").classList.add("third_active");
        }
      });
    }

    const bodyInnerInterval = setInterval(function () {
      if (document.querySelector("body")) {
        const timer = 3000;
        clearInterval(bodyInnerInterval);
        const loadJS = (url, implementationCode, location) => {
          var scriptTag = document.createElement("script");
          scriptTag.src = url;

          scriptTag.onload = implementationCode;
          scriptTag.onreadystatechange = implementationCode;

          location.appendChild(scriptTag);
        };
        const gb_load_css = (path) => {
          let css = document.createElement("link");
          css.rel = "stylesheet";
          css.media = "all";
          css.href = path;

          document.getElementsByTagName("head")[0].appendChild(css);
        };
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
        loadJS(
          "https://res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js",
          function () {},
          document.body
        );
        gb_load_css(
          "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
        );

        document
          .querySelector(".spz_5001 #pricing-page-product-details")
          .insertAdjacentHTML(
            "afterend",
            `
            <div class="section2_5001">
              <div class="auto_container">
                <div class="section2_inner">
                  <div class="wrapper">
                    <div class="title">Features</div>
                    <div class="accordion-wrapper">
                      <div class="text">
                        <div class="child active" data-index="1">
                          <div class="bar"><div class="line"></div></div>
                          <div class="title">
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286904/assembly/3001/frame_13.svg" alt="Case Management Icon" width="30" height="30" /><span>Case Management</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">View case info from anywhere via the cloud platform. Case overviews, client information, legal documents, calendars, billing, and more.</div>
                            <a href="https://assemblysoftware.com/case-management" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-tablet.png" alt="Case Management" width="688" height="404">
                            </picture>
                          </div>
                        </div>
                        <div class="child" data-index="2">
                          <div class="bar"><div class="line"></div></div>
                          <div class="title">
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286886/assembly/3001/icons_2.svg" alt="Task Management Icon" width="30" height="30" /><span>Task Management</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Checklists, calendars, case statuses, deadlines, and more are available at your fingertips. Neos keeps you organized and on task.</div>
                            <a href="https://assemblysoftware.com/increased-efficiency" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-tablet.png" alt="Task Management" width="688" height="404">
                            </picture>
                          </div>
                        </div>
                        <div class="child" data-index="3">
                          <div class="bar"><div class="line"></div></div>
                          <div class="title">
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286888/assembly/3001/frame_10.svg" alt="Client Intake Icon" width="30" height="30" /><span>Client Intake</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Automatically capture leads 24/7 from forms and chatbots. Leverage dynamic forms to capture required info in less time.</div>
                            <a href="https://assemblysoftware.com/neos/intake" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-tablet.png" alt="Client Intake" width="688" height="404">
                            </picture>
                          </div>
                        </div>
                        <div class="child" data-index="4">
                          <div class="bar"><div class="line"></div></div>
                          <div class="title">
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286891/assembly/3001/frame_12.svg" alt="Document Management Icon" width="30" height="30" /><span>Document Management</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Mass-generate and file documents (even for multiple cases), edit PDFs. Enjoy case-specific document tagging, Bates stamping, and bulk-import files.</div>
                            <a href="https://assemblysoftware.com/document-management" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-tablet.png" alt="Document Management" width="688" height="404">
                            </picture>
                          </div>
                        </div>
                        <div class="child" data-index="5">
                          <div class="bar"><div class="line"></div></div>
                          <div class="title">
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286889/assembly/3001/frame_11.svg" alt="AI Data Analysis Icon" width="30" height="30" /><span>AI Data Analysis</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Embedded AI: Elevate efficiency with document generation, intelligent extraction, and advanced summarization capabilities.</div>
                            <a href="https://assemblysoftware.com/neos-ai" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-tablet.png" alt="AI Data Analysis" width="688" height="404">
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div class="image">
                        <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">
                        <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">
                        <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__task_management.webp" alt="Task Management" width="632" height="464">
                        <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_intake.webp" alt="Client Intake" width="632" height="464">
                        <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__document_management.webp" alt="Document Management" width="632" height="464">
                        <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__ai_data_analysis.webp" alt="AI Data Analysis" width="632" height="464">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
          );
        document
          .querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text")
          .addEventListener("click", function (e) {
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
        document
          .querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text")
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
        checkFeatureTitleHeight();
        // section 3
        document.querySelector(".spz_5001 .section2_5001").insertAdjacentHTML(
          "afterend",
          `
          <div class="section3_5001">
            <div class="auto_container">
              <div class="section3_inner">
                <div class="title">Integrations</div>
                <picture class="logo">
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_12.svg">
                  <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_11.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_9.svg" alt="Company Logo" width="1240" height="171">
                </picture>
                <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        `
        );
        //section 4
        document.querySelector(".spz_5001 .section3_5001").insertAdjacentHTML(
          "afterend",
          `
        <div class="section4_5001">
          <div class="section4_inner">
            <div class="title">Why our customers love us</div>
            <div class="slider1-wrapper">
              <section class="splide splide1">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <div class="child child1">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__derrick_l_williams_1.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__derrick_l_williams.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__derrick_l_williams.webp" alt="Derrick L. Williams" width="196" height="196"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“Neos is just easy to understand, even if you’re not tech savvy. If you know how to use the internet and access websites, I think you can use Neos.”</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Derrick L. Williams</div><div class="border"></div>
                              <div class="title">Williams & Roche</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child2">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__scott_marshall_1.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__scott_marshall.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__scott_marshall.webp" alt="Scott Marshall" width="196" height="196"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“Neos can run circles around our previous practice management platform because it took five times longer to do anything with the old platform. With Neos, the way it’s set up, the actual interface, is fantastic.”</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Scott Marshall</div><div class="border"></div>
                              <div class="title">Scott Marshall Injury Attorneys</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child3">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__jessica_l_voto_1.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__jessica_l_voto.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__jessica_l_voto.webp" alt="Jessica L. Voto" width="196" height="196"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">Being able to conduct intake directly in the platform and have it save to a case has cut file set-up time in half.</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Jessica L. Voto</div><div class="border"></div>
                              <div class="title">Voto & Cavalli Attorneys at Law, PC</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        `
        );
        loadJS(
          "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
          function () {
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
          },
          document.body
        );
      }
    }, 10);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);

    const targetNode = document.querySelector("body");
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (
          // if test start from zero
          (!document.querySelector(".spz_5001") &&
            document.querySelector("#pricing-page-product-details")) ||
          // test from back buttonW
          (document.querySelector(".spz_5001") &&
            !document.querySelector(".spz_5001 .section2_5001"))
        ) {
          console.log("Interval Working");
          loadTestCode4004();
        }
        // not the target page remove all element
        if (!document.querySelector("#pricing-page-product-details")) {
          console.log("not same");

          // remove all element and reset splide and clear interval
          if (document.querySelector(".spz_5001 .section2_5001")) {
            console.log("not same 1");
            document.querySelector(".spz_5001 .section2_5001").remove();
          }
          if (document.querySelector(".spz_5001 .section3_5001")) {
            console.log("not same 2");
            clearInterval(autoAccordionInterval);
            document.querySelector(".spz_5001 .section3_5001").remove();
          }
          if (document.querySelector(".spz_5001 .section4_5001")) {
            console.log("not same 3");
            document.querySelector(".spz_5001 .section4_5001").remove();
          }
          if (document.querySelector(".spz_5001")) {
            document.querySelector("body").classList.remove("spz_5001");
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
}, 1000);
