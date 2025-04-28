var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1729776381/JupiterOne/7013/src/style.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1729776381/JupiterOne/7013/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}
function loadTestCode7013() {
  if (!document.querySelector("body").classList.contains("spz_t7013")) {
    document.querySelector("body").classList.add("spz_t7013");

    // Variation Hidden Field Name
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]').length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]')[0].value = 'variant_#7013';
        }, 1000);
      }
    }, 100);
    // Variation Hidden Field Name over

    //DEV 1/3. Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208352267821355/f`

    //DEV 2/3. Fill content for the sticky footer
    const stickyFooterContent = {
      trustImage: [
        {
          breakPoint: 992,
          url: "https://res.cloudinary.com/spiralyze/image/upload/v1729840305/jupiterone/7013/desktop_rating_2.svg",
        },
        {
          breakPoint: 767,
          url: "https://res.cloudinary.com/spiralyze/image/upload/v1729840357/jupiterone/7013/mobile_rating_2.svg",
        },
        {
          breakPoint: 320,
          url: "https://res.cloudinary.com/spiralyze/image/upload/v1729840357/jupiterone/7013/mobile_rating_2.svg",
        },
      ],
      alt: "Gartner logos",
      heading: "Well managed assets with JupiterOne and easy Query Builder",
      CTAs: [
        {
          ctaText: "Get a Demo",
          ctaURL: "https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management",
        }
      ]
    };

    addStickyFooter(stickyFooterContent);

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function hideShowStickyBar() {
      if (window.scrollY > 100) {
        // User has scrolled down more than 100px from the top
        document.querySelector("body").classList.add("goUp");
      } else {
        // User is within 100px from the top
        document.querySelector("body").classList.remove("goUp");
      }
    }

    document.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("sticky_close") ||
        e.target.classList.contains("footerBtn")
      ) {
        document.querySelector(".spz-sticky-footer").remove();
        localStorage.setItem("footerHidden", "true");
      }
    });

    window.addEventListener("scroll", hideShowStickyBar);

    function addStickyFooter(footerData) {
      const formTemplate = `
        <div class="spz-sticky-footer">
          <div class="spz-footer-container">
            <div class="spz-trust-logos-wrap">
              <picture>
                ${stickyFooterContent.trustImage.map((item) => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")}
                <img src="${stickyFooterContent.trustImage[0].url}" alt="${stickyFooterContent.alt}">
              </picture>
              <div class="spz-copy-wrap">
                <div class="spz-copy-heading">${stickyFooterContent.heading}</div>
              </div>
            </div>
            <div class="spz-ctas-wrap">
              ${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz-primary spz-cta-7013">${item.ctaText}</a>`).join("")}
            </div>
          </div>
        </div>
        `;
      document.body.insertAdjacentHTML("beforeend", formTemplate);
    }

  }
}
var bodyInterva7013 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterva7013);
    loadTestCode7013();
  }
}, 100);