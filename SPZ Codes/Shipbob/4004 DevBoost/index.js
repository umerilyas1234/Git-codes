var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/shipbob/4004/src/style.css";

if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/shipbob/4004/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}
function loadTestCode4004() {
  if (!document.querySelector("body").classList.contains("spz_4004")) {
    document.querySelector("body").classList.add("spz_4004");

    console.log("111111");
    document
      .querySelector(".sb-hero-section .sb-hero-section-form-container")
      .setAttribute("id", "event_hero");

    document.querySelector(".row-number-10").insertAdjacentHTML(
      "beforebegin",
      `
      <div class="accordion_section">
        <div class="container">
            <div class="accordion_inner">
            <div class="main_heading">
                <h2>Features</h2>
            </div>
            <div class="accordion_main">
                <div class="accorion_left">
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>2-day express shipping</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-01_2.webp"
                        alt="2-day express shipping"
                        class="accordion_image"
                    />
                    <p>
                        Offer 2-day shipping coverage across 100% of the continental US,
                        even from just one fulfillment center. Have a Shopify store?
                        Display 2-day badges and estimated delivery dates on product
                        pages.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Order fulfillment</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-02.webp"
                        alt="Order fulfillment"
                        class="accordion_image"
                    />
                    <p>
                        Leverage our 50+ fulfillment centers across the US, Canada,
                        Europe, and Australia, where we'll pick, pack, and ship your
                        orders the way you want. Stay updated every step of the way with
                        real-time tracking.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Warehouse management</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-03_1.webp"
                        alt="Warehouse management"
                        class="accordion_image"
                    />
                    <p>
                        Our proprietary WMS is used within all of our fulfillment
                        centers, offering an exact picture of what's happening outside
                        of your four walls. Have your own warehouse? Use ShipBob’s WMS
                        yourself.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Inventory management</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-04.webp"
                        alt="Inventory management"
                        class="accordion_image"
                    />
                    <p>
                        View your on hand inventory counts, know when to proactively
                        rebalance your stock levels, and even send all of your products
                        to one location and let us distribute it across our network for
                        you.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Reporting and analytics</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-05_2.webp"
                        alt="Reporting and analytics"
                        class="accordion_image"
                    />
                    <p>
                        Get optimal, data-driven fulfillment center location
                        recommendations to improve delivery speeds and reduce shipping
                        costs, and leverage other demand forecasting tools in the
                        ShipBob dashboard.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Global shipping</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-05.webp"
                        alt="Global shipping"
                        class="accordion_image"
                    />
                    <p>
                        Ship to 200+ countries, unlock DDP shipping to improve the
                        cross-border experience with fewer delays and issues at customs,
                        and expand across our globally distributed fulfillment network.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion_intro">
                    <h4>Integrations</h4>
                    </div>
                    <div class="accordion_content">
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/img-mobile-06.webp"
                        alt="Integrations"
                        class="accordion_image"
                    />
                    <p>
                        Install 40+ integrations in a few clicks from the ShipBob App
                        Store, tap into hot new sales channels like TikTok, and have
                        ShipBob fulfill EDI-compliant B2B/wholesale orders for 100+
                        retailers.
                    </p>
                    <a href="#event_hero" class="custom_btn">Get pricing</a>
                    </div>
                </div>
                </div>

                <div class="accordion_right">
                <div class="accordion_images">
                    <picture>
                    <source
                        media="(max-width: 1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop01_2.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop01.webp"
                        alt="2-day express shipping"
                    />
                    </picture>

                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet02_1.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop02.webp"
                        alt="Order fulfillment"
                    />
                    </picture>

                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet03_2.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop03_1.webp"
                        alt="Warehouse management"
                    />
                    </picture>
                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet04_1.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop04.webp"
                        alt="Inventory management"
                    />
                    </picture>
                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet05_1.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop05.webp"
                        alt="Reporting and analytics"
                    />
                    </picture>
                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet06_1.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop06.webp"
                        alt="Global shipping"
                    />
                    </picture>
                    <picture>
                    <source
                        media="(max-width:1023px)"
                        srcset="
                        //res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_tablet07_1.webp
                        "
                    />
                    <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4004/image_desktop07.webp"
                        alt="Integrations"
                    />
                    </picture>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="integrations_section">
        <div class="container">
            <div class="integrations_inner">
            <div class="main_heading">
                <h2>Integrations</h2>
                <p>
                We can do it all. Get started today and power your business with our
                best-in-class logistics.
                </p>
            </div>
            <div class="integration_list">
                <ul>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-01.svg"
                        alt="Shopify"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-02.svg"
                        alt="Amazon"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-03.svg"
                        alt="Tik Tok"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-04.svg"
                        alt="Integrate Tool"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-05.svg"
                        alt="Woocommerce"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-06.svg"
                        alt="Bigcommerce"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-07.svg"
                        alt="Magento"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-08.svg"
                        alt="Salesforce"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-09_1.svg"
                        alt="Walmart"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-10.svg"
                        alt="Squarespace"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-11.svg"
                        alt="WIX"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-12.svg"
                        alt="eBay"
                    /></span>
                    </div>
                </li>
                </ul>
                <ul>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-01.svg"
                        alt="Shopify"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-06.svg"
                        alt="Bigcommerce"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-05.svg"
                        alt="Woocommerce"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-11.svg"
                        alt="WIX"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-10.svg"
                        alt="Squarespace"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-09_1.svg"
                        alt="Walmart"
                    /></span>
                    </div>
                </li>
                <li>
                    <div class="integration_data">
                    <span
                        ><img
                        src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4004/logo-07.svg"
                        alt="Magento"
                    /></span>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
      `
    );
    document
      .querySelector(".row-fluid-wrapper.row-number-13.dnd-section")
      .insertAdjacentHTML(
        "afterbegin",
        `
      <div class="join_section">
        <div class="container">
            <div class="join_inner">
            <div class="join_data">
                <div class="join_left">
                <p>
                    Join thousands of companies who’ve partnered with ShipBob to power
                    their order fulfillment.
                </p>
                </div>
                <div class="join_right">
                <a href="#event_hero" class="custom_btn">Get a quote</a>
                </div>
            </div>
            </div>
        </div>
    </div>`
      );

    // update text
    var customerHeading = document.querySelector(
      ".shipbob_customer_section .shipbob_customer_heading h2"
    );
    customerHeading.innerText =
      "Don’t just take our word for it. See why ShipBob is trusted by thousands of merchants";
    var texts = [
      {
        text: "Everything <span>just <br> works</span>!",
        selector:
          ".slick-track .customer_box[data-slick-index='0'] .customer_content h3",
      },
      {
        text: "It changed <span>the game <br> for us</span>.",
        selector:
          ".slick-track .customer_box[data-slick-index='1'] .customer_content h3",
      },
      {
        text: "An <span>extension of our brand</span>.",
        selector:
          ".slick-track .customer_box[data-slick-index='2'] .customer_content h3",
      },
    ];
    if (
      document.querySelector(
        ".slick-track .customer_box[data-slick-index='0'] .customer_img img"
      )
    ) {
      document.querySelector(
        ".slick-track .customer_box[data-slick-index='0'] .customer_img img"
      ).alt = "Sergio Tache";
    }
    if (
      document.querySelector(
        ".slick-track .customer_box[data-slick-index='1'] .customer_img img"
      )
    ) {
      document.querySelector(
        ".slick-track .customer_box[data-slick-index='1'] .customer_img img"
      ).alt = "Nathan Garrison";
    }
    var footerTextElement = document.querySelector(".footer_section p");

    if (footerTextElement) {
      var footerText = footerTextElement.textContent;
      var updatedText = footerText.replace(/2023/g, "2024");
      footerTextElement.textContent = updatedText;
    }
    texts.forEach(function (item) {
      var element = document.querySelector(item.selector);
      if (element) {
        element.innerHTML = item.text;
      }
    });

    var textInterval = setInterval(() => {
      if (document.querySelectorAll(".customer_content .title p").length > 0) {
        function replaceTextWithSpan(selector, textToReplace) {
          var paragraph = document.querySelector(selector);
          if (paragraph) {
            var textNodes = paragraph.childNodes;
            textNodes.forEach(function (node) {
              if (node.nodeType === Node.TEXT_NODE) {
                var newText = node.textContent.replace(
                  textToReplace,
                  '<span class="role">' + textToReplace + "</span>"
                );
                var newNode = document.createElement("span");
                newNode.innerHTML = newText;
                paragraph.replaceChild(newNode, node);
              }
              clearInterval(textInterval);
              console.log("text interval working");
            });
          }
        }

        replaceTextWithSpan(
          ".slick-track .customer_box[data-slick-index='0'] .customer_box_wrap .customer_content .title p",
          "CEO"
        );
        replaceTextWithSpan(
          ".slick-track .customer_box[data-slick-index='1'] .customer_box_wrap .customer_content .title p",
          "Co-Founder and CEO"
        );
        replaceTextWithSpan(
          ".slick-track .customer_box[data-slick-index='2'] .customer_box_wrap .customer_content .title p",
          "CEO"
        );
      }
    }, 100);

    var paragraphMain = document.querySelectorAll(
      ".customer_box_wrap .customer_content .title p"
    );

    paragraphMain.forEach(function (paragraph) {
      var paragraphText = paragraph.textContent;
      var newParagraphText = paragraphText.replace(/,/g, "");

      paragraph.textContent = newParagraphText;
    });
    const anchorLinks = document.querySelectorAll(
      '.accordion_content a[href^="#"], .join_right a[href^="#"]'
    );

    anchorLinks.forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").slice(1);

        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // accodion js
    const accordions = document.querySelectorAll(".accordion");
    const accordionImages = document.querySelector(".accordion_images");

    const openAccordion = (accordion) => {
      const content = accordion.querySelector(".accordion_content");
      accordion.classList.add("accordion_active");
    };

    const closeAccordion = (accordion) => {
      const content = accordion.querySelector(".accordion_content");
      accordion.classList.remove("accordion_active");
      content.style.maxHeight = null;
    };

    const activateImages = (index) => {
      const images = accordionImages.querySelectorAll("picture");
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    };

    accordions.forEach((accordion, index) => {
      const intro = accordion.querySelector(".accordion_intro h4");
      const content = accordion.querySelector(".accordion_content");

      intro.onclick = () => {
        if (content.style.maxHeight) {
          closeAccordion(accordion);
          activateImages(-1);
        } else {
          accordions.forEach((accordion) => closeAccordion(accordion));
          openAccordion(accordion);
          activateImages(index);
        }
      };
    });
    const firstAccordion = document.querySelectorAll(".accordion_intro h4")[0];
    firstAccordion.click();

    // slick js
    $(".customer_slider").slick("unslick");
    customSlickSlider();
    function customSlickSlider() {
      $(".customer_slider").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "24.5%",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              dots: true,
            },
          },
        ],
      });
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    console.log("Interval Working");
    loadTestCode4004();
  }
}, 100);
