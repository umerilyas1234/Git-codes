import someHtml from "./some.html";
import joinHtml from "./join.html";
import css from "!!raw-loader!/temp/main.css";
let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles); // choose selector where you want to apply styles tag

function loadTestCode4004() {
  if (!document.querySelector("body").classList.contains("spz_4004")) {
    document.querySelector("body").classList.add("spz_4004");

    console.log("111111");
    document
      .querySelector(".sb-hero-section .sb-hero-section-form-container")
      .setAttribute("id", "event_hero");

    document
      .querySelector(".row-number-10")
      .insertAdjacentHTML("beforebegin", someHtml);
    document
      .querySelector(".row-fluid-wrapper.row-number-13.dnd-section")
      .insertAdjacentHTML("afterbegin", joinHtml);

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
