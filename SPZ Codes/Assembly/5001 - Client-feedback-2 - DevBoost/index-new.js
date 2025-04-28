console.log("#5001 - console 11111111");

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
    ).innerHTML =
      "The essentials for optimizing matter management and improving efficiency";
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>p + div"
    ).innerHTML =
      "Supercharge your Neos experience with premium document management";
    document.querySelector(
      "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>p + div"
    ).innerHTML =
      "Experience fully loaded document management, automations, and advanced intake features";
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
    setTimeout(() => {
      var pricingTitleSelectors = [
        "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2) > div:last-child > span > div title",
        "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child > div:last-child > span > div title",
      ];
      pricingTitleSelectors.forEach(function (selector) {
        var pricingTitle = document.querySelector(selector);
        if (pricingTitle) {
          var pricingText = pricingTitle.textContent;
          var updatedText = pricingText
            .replace(/Essentials/g, "Essentials,")
            .replace(/Premium/g, "Premium,");
          pricingTitle.textContent = updatedText;
        }
      });
      var pricingDataThird = document.querySelector(
        "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child .pricing_terms li:nth-child(3) > div > span"
      );
      if (pricingDataThird) {
        var pricingDataThirdText = pricingDataThird.textContent;
        var updatedThirdText = pricingDataThirdText.replace(/leads/g, "lead");
        pricingDataThird.textContent = updatedThirdText;
      }
    }, 1000);
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
      .insertAdjacentHTML(
        "afterend",
        `<div class="feature_btnOuter">
      <a class="feature_btn" id="feature_btn" href="javascript:void(0);"
        >Compare All Features
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="7"
          viewBox="0 0 18 7"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.925 1.17037e-06L13.5 1.575L8.25 6.75L3 1.575L4.575 2.06536e-07L8.25 3.6L11.925 1.17037e-06Z"
            fill="#1A1A1A"
          ></path>
        </svg>
      </a>
    </div>
    <div class="custom_modal" id="feature_modal">
      <div class="modal_inner">
        <div class="modal_main">
          <div class="modal_top">
            <a href="javascript:void(0);" class="close_modal"
              >
              <svg id="close_modal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 5.71967C6.01256 5.42678 6.48744 5.42678 6.78033 5.71967L12 10.9393L17.2197 5.71967C17.5126 5.42678 17.9874 5.42678 18.2803 5.71967C18.5732 6.01256 18.5732 6.48744 18.2803 6.78033L13.0607 12L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L12 13.0607L6.78033 18.2803C6.48744 18.5732 6.01256 18.5732 5.71967 18.2803C5.42678 17.9874 5.42678 17.5126 5.71967 17.2197L10.9393 12L5.71967 6.78033C5.42678 6.48744 5.42678 6.01256 5.71967 5.71967Z" fill="#757575"></path>
              </svg>
            </a>
            <strong>Pricing <b> Plans</b></strong>
            <span><b>Neos </b> Essentials</span>
            <span><b>Neos </b> Premium</span>
            <span><b>Neos </b> Pro</span>
            <div class="pricing_nav">
              <ul>
                <li>
                  <a id="essential" class="active" href="javascript:void(0);"></a>
                </li>
                <li>
                  <a id="premium" href="javascript:void(0);"></a>
                </li>
                <li>
                  <a id="pro" href="javascript:void(0);"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal_bottom">
            <div class="accordion">
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <h3>Practice Management</h3>
                </div>
                <!-- /.accordion-item-header -->
                <div class="accordion-item-body">
                  <div class="accordion-item-body-content">
                    <div class="pricing_checklistTable">
                      <ul>
                        <li>
                          <div class="checklist_data">
                            <strong>Access from anywhere</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Customer relationship database</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Document assembly & management</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Reports, dashboards & analytics</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Automated checklists</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Dynamic intake questionnaire</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Customizable intake forms</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Expense tracking</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Invoice generation, editing, and approvals</strong
                            >
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Workflows & process automation</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- /.accordion-item-body -->
              </div>
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <h3>Document Management</h3>
                </div>
                <!-- /.accordion-item-header -->
                <div class="accordion-item-body">
                  <div class="accordion-item-body-content">
                    <div class="pricing_checklistTable">
                      <ul>
                        <li>
                          <div class="checklist_data">
                            <strong>Multi-document generation</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Secure document sharing and storage</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Optical Character Recognition (OCR)</strong>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >PDF Editing, highlighting, redacting, <br />
                              and more</strong
                            >
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Bates stamping</strong>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Create, preview, and edit documents in <br />
                              real time
                            </strong>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Combine, reorder, and insert documents</strong>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Automated document creation</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- /.accordion-item-body -->
              </div>
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <h3>Communication</h3>
                </div>
                <div class="accordion-item-body">
                  <div class="accordion-item-body-content">
                    <div class="pricing_checklistTable">
                      <ul>
                        <li>
                          <div class="checklist_data">
                            <strong>Messaging</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Phone</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>SMS and email automation</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Communicate with clients directly from <br />
                              case file</strong
                            >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Internal communication with in-product <br />
                              alerts</strong
                            >
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Integrated Dialer and Call Tracking <br />
                              (RingCentral)
                              <span
                                class="tooltipstyles__TooltipStyled-sc-out8hf-0 hGHym tooltip"
                                tabindex="0"
                                ><svg
                                  width="24"
                                  height="24"
                                  role="img"
                                  accessibilitySvg="[object Object]"
                                  class="question-mark-icon"
                                >
                                  <title id="2_5_tooltip">
                                    Premium features through RingCentral
                                  </title>
                                  <path
                                    d="M6.3 11.2H7.7V9.8H6.3V11.2ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 2.8C5.453 2.8 4.2 4.053 4.2 5.6H5.6C5.6 4.83 6.23 4.2 7 4.2C7.77 4.2 8.4 4.83 8.4 5.6C8.4 7 6.3 6.825 6.3 9.1H7.7C7.7 7.525 9.8 7.35 9.8 5.6C9.8 4.053 8.547 2.8 7 2.8Z"
                                    fill="#A4A4A4"
                                  ></path>
                                </svg>
                                <span
                                  role="tooltip"
                                  id="2_5_tooltip_desc"
                                  class="tooltipstyles__TooltipContainerStyled-sc-out8hf-1 borXVz"
                                  >Premium features through RingCentral</span
                                ></span
                              >
                            </strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Communication Center
                              <span
                                class="tooltipstyles__TooltipStyled-sc-out8hf-0 hGHym tooltip"
                                tabindex="0"
                                ><svg
                                  width="24"
                                  height="24"
                                  role="img"
                                  accessibilitySvg="[object Object]"
                                  class="question-mark-icon"
                                >
                                  <title id="2_6_tooltip">
                                    Track all incoming and outgoing calls
                                  </title>
                                  <path
                                    d="M6.3 11.2H7.7V9.8H6.3V11.2ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 2.8C5.453 2.8 4.2 4.053 4.2 5.6H5.6C5.6 4.83 6.23 4.2 7 4.2C7.77 4.2 8.4 4.83 8.4 5.6C8.4 7 6.3 6.825 6.3 9.1H7.7C7.7 7.525 9.8 7.35 9.8 5.6C9.8 4.053 8.547 2.8 7 2.8Z"
                                    fill="#A4A4A4"
                                  ></path>
                                </svg>
                                <span
                                  role="tooltip"
                                  id="2_6_tooltip_desc"
                                  class="tooltipstyles__TooltipContainerStyled-sc-out8hf-1 borXVz"
                                  >Track all incoming and outgoing calls</span
                                ></span
                              >
                            </strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <h3>Intake</h3>
                </div>
                <div class="accordion-item-body">
                  <div class="accordion-item-body-content">
                    <div class="pricing_checklistTable">
                      <ul>
                        <li>
                          <div class="checklist_data">
                            <strong>Intake forms</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Intake CRM</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Automated lead emails & texts</strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Lead tracking</strong>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Lead ROI and revenue tracking dashboards</strong
                            >
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Customizable Intake Forms </strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >Dynamic Intake Forms with Required <br />
                              Questions
                            </strong>
                            <span> </span>
                            <span> </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <h3>Support</h3>
                </div>
                <div class="accordion-item-body">
                  <div class="accordion-item-body-content">
                    <div class="pricing_checklistTable">
                      <ul>
                        <li>
                          <div class="checklist_data">
                            <strong
                              >US-based weekday phone support <br />
                              (8:30AM ET to 5:30PM ET)</strong
                            >
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Email support</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>Self-serve portal (Knowledge base)</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="checklist_data">
                            <strong>On-demand training videos</strong>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                            <span
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z"
                                  fill="#2BC1E9"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
      );
    document.querySelector(
      "div[data-testid='contact__container'] h4"
    ).innerHTML = "Ask us about our all-inclusive and custom pricing";
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
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">View case info from anywhere via the cloud platform. Case overviews, client information, legal documents, calendars, billing, and more.</div>
                            <a href="https://assemblysoftware.com/case-management" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
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
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Checklists, calendars, case statuses, deadlines, and more are available at your fingertips. Neos keeps you organized and on task.</div>
                            <a href="https://assemblysoftware.com/increased-efficiency" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
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
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Automatically capture leads 24/7 from forms and chatbots. Leverage dynamic forms to capture required info in less time.</div>
                            <a href="https://assemblysoftware.com/neos/intake" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
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
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Mass-generate and file documents (even for multiple cases), edit PDFs. Enjoy case-specific document tagging, Bates stamping, and bulk-import files.</div>
                            <a href="https://assemblysoftware.com/document-management" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
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
                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286889/assembly/3001/frame_11.svg" alt="Integrated Artificial Intelligence Icon" width="30" height="30" /><span>Integrated Artificial Intelligence</span></div>
                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                            </svg>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                            </svg>
                          </div>
                          <div class="content">
                            <div class="text">Embedded AI: Elevate efficiency with document generation, intelligent extraction, and advanced summarization capabilities.</div>
                            <a href="https://assemblysoftware.com/neos-ai" class="cta">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                              </svg>
                            </a>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-mobile.png">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-tablet.png" alt="Integrated Artificial Intelligence" width="688" height="404">
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
                        <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__ai_data_analysis.webp" alt="Integrated Artificial Intelligence" width="632" height="464">
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
          if (
            document.querySelector(
              ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
            )
          ) {
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
          }
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
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_13.svg">
                  <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_14.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_15.svg" alt="Company Logo" width="1240" height="171">
                </picture>
                <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
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
              if (
                document.querySelector(
                  ".spz_5001 .section4_5001 .slider1-wrapper"
                )
              ) {
                document
                  .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
                  .classList.add("active1");
              }
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
    console.log("console 2222");
    function runtest() {
      
        if (
          // if test start from zero
          (!document.querySelector(".spz_5001") &&
            document.querySelector("#pricing-page-product-details")) ||
          // test from back buttonW
          (document.querySelector(".spz_5001") &&
            !document.querySelector(".spz_5001 .section2_5001"))) {
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

      
    // Set Initial URL
    var initialURL = window.location.href;
    window.addEventListener('click', function (e) {
        if (initialURL !== window.location.href) {
            initialURL = window.location.href;
            runtest();
        }
    });

    window.addEventListener('popstate', runtest);

    runtest();
  }
}, 1000);
