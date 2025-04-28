var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1720008709/procurify/5003/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1720008709/procurify/5003/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode5003() {
  if (!document.querySelector("body").classList.contains("spz_t5003")) {
    document.querySelector("body").classList.add("spz_t5003");

    const stickyFooterContent = {
        sectionLeftHTML: `
          <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1721718262/procurify/5003/procurify_logo.svg" alt="Logo"></figure>
          <p>#1 Rated Purchasing Software</p>
        `,
        sectionMiddleHTML: `
            <div class="review_list">
                <ul>
                    <li>
                        <div class="review_data">
                            <span>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719404793/procurify/5003/g2-logo.svg"
                                    alt="G2">
                            </span>
                            <span>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719404794/procurify/5003/g2-logo_1.svg"
                                    alt="Cuterrs">
                            </span>
                            <i>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719404793/procurify/5003/stars-row.svg"
                                    alt="Review stars">
                            </i>
                            <strong><b>4.6</b>(216 reviews)</strong>
                        </div>
                    </li>
                    <li>
                        <div class="review_data">
                            <span>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719404794/procurify/5003/g2-logo_1.svg"
                                    alt="Cuterrs">
                            </span>
                            <i>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719994858/procurify/5003/Stars.svg"
                                    alt="Review stars">
                            </i>
                            <strong><b>4.5</b>(170 reviews)</strong>
                        </div>
                    </li>
                </ul>
            </div>
        `,
        sectionRightHTML: `<a href="https://www.procurify.com/get-started/" class="custom_btn">Book a demo</a>`,
    };
    
    addStickyFooter(stickyFooterContent);
    
      
    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    // This is the code to generate the sticky footer section do not edit it
    var scrollPosition = window.innerHeight;
    function hideShowStickyBar() {
      if (window.scrollY > scrollPosition) {
        document.querySelector("body").classList.add("goUp");
      } else {
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
    window.addEventListener(
      "scroll",
      function () {
        hideShowStickyBar();
      },
      true
    );
    function addStickyFooter(footerData) {
      const formTemplate = `
      <div class="spz-sticky-footer v2">
        <div class="spz-footer-container wrap">
          ${
            footerData.sectionLeftHTML.replace(/\s/g, "").length !== 0
              ? `<div class="section-left">${footerData.sectionLeftHTML}</div>`
              : ""
          }
          ${
            footerData.sectionMiddleHTML.replace(/\s/g, "").length !== 0
              ? `<div class="middle-section">${footerData.sectionMiddleHTML}</div>`
              : ""
          }
          ${
            footerData.sectionRightHTML.replace(/\s/g, "").length !== 0
              ? `<div class="section-right">${footerData.sectionRightHTML}</div>`
              : ""
          }
        </div>
        <div class="close_wrapper">
          <a href="javascript:;" class="sticky_close"></a>
        </div>
      </div>
      `;
      document.body.insertAdjacentHTML("beforeend", formTemplate);
    }

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

    hiddenValue('#5003 | Procurify | PDPs | Sticky CTA', '5003_Variant_2');


  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode5003();
  }
}, 100);
