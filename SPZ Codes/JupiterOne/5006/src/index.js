import someHtml from "./index.html";
import css from "!!raw-loader!/temp/main.css";
let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles); // choose selector where you want to apply styles tag

function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_5006")) {
    document.querySelector("body").classList.add("spz_5006");

    var heroRight = document.querySelector(
      ".section-hs-lp-hero .hs-lp-hero_text_col"
    );
    heroRight.insertAdjacentHTML("afterBegin", someHtml);

    window.addEventListener("message", (event) => {
      if (
        event.data.type === "hsFormCallback" &&
        event.data.eventName === "onFormReady"
      ) {
        var formInterval = setInterval(() => {
          if (
            document.querySelectorAll(".section-hs-lp-hero .hs-button").length >
            0
          ) {
            clearInterval(formInterval);

            // input lable pair
            var firstName = document.querySelector(
              ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_firstname label"
            );

            if (firstName) {
              document
                .querySelector(
                  ".section-hs-lp-hero .hs-lp-hero_form_col .hs_firstname .input"
                )
                .insertAdjacentElement(
                  "beforeend",
                  document.querySelector(
                    ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_firstname label"
                  )
                );
              document.querySelector(
                ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_firstname label"
              ).innerText = "First Name";
              document.querySelector(
                ".section-hs-lp-hero .hs-lp-hero_form_col .hs_firstname .input"
              ).placeholder = "";
            }

            var lastName = document.querySelector(
              ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_lastname label"
            );
            if (lastName) {
              document
                .querySelector(
                  ".section-hs-lp-hero .hs-lp-hero_form_col .hs_lastname .input"
                )
                .insertAdjacentElement(
                  "beforeend",
                  document.querySelector(
                    ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_lastname label"
                  )
                );
              document.querySelector(
                ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_lastname label"
              ).innerText = "Last Name";
              document.querySelector(
                ".section-hs-lp-hero .hs-lp-hero_form_col .hs_lastname .input"
              ).placeholder = "";
            }

            var email = document.querySelector(
              ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_email label"
            );
            if (email) {
              document
                .querySelector(
                  ".section-hs-lp-hero .hs-lp-hero_form_col .hs_email .input"
                )
                .insertAdjacentElement(
                  "beforeend",
                  document.querySelector(
                    ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_email label"
                  )
                );
              document.querySelector(
                ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_email .input label"
              ).innerText = "Email Address";
            }

            var company = document.querySelector(
              ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_company label"
            );
            if (company) {
              document
                .querySelector(
                  ".section-hs-lp-hero .hs-lp-hero_form_col .hs_company .input"
                )
                .insertAdjacentElement(
                  "beforeend",
                  document.querySelector(
                    ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_company label"
                  )
                );
              document.querySelector(
                ".spz_5006 .section-hs-lp-hero .hs-lp-hero_form_col .hs_company label"
              ).innerText = "Company";
              document.querySelector(
                ".section-hs-lp-hero .hs-lp-hero_form_col .hs_company .input"
              ).placeholder = "";
            }

            // change text
            var headingElement = document.querySelector(
              ".section-hs-lp-hero .white-box-form-v2 .hs_cos_wrapper_type_form .form-title"
            );
            headingElement.innerText = "Get a free digital copy";

            var submitButton = document.querySelector(
              ".section-hs-lp-hero .hs-lp-hero_form_col form .hs-submit input"
            );
            if (submitButton) {
              submitButton.value = "Download now";
            }

            // change placeholder text
            // var placeholders = document.querySelectorAll(
            //   ".section-hs-lp-hero .input input"
            // );
            // placeholders.forEach(function (input) {
            //   input.placeholder = "";
            // });
            console.log("Button text 1");
            document.querySelector(
              ".section-hs-lp-hero .hs-lp-hero_form_col .hs_email .input input"
            ).placeholder = "Email Address";

            console.log("Button text 2");
            // insert submit btn
            document
              .querySelector(".spz_5006 .section-hs-lp-hero .actions")
              .insertAdjacentHTML(
                "beforeend",
                '<div class="hs-button primary large actionBtn" id="actionBtn">Download now</div>'
              );

            // submit form
            document.addEventListener("click", function (e) {
              if (e.target.id === "actionBtn") {
                var actionsDiv = e.target.closest(".actions");

                if (actionsDiv) {
                  // Find the submit button within the .actions div
                  var submitButton = actionsDiv.querySelector(
                    'input[type="submit"]'
                  );

                  if (submitButton) {
                    // Trigger a click on the submit button
                    submitButton.click();
                  }
                }
              }
            });

            // email filled
            document.addEventListener("input", function (e) {
              if (
                e.target.tagName === "INPUT" &&
                e.target.closest(".hs-email")
              ) {
                var inputValue = e.target.value;
                if (inputValue.trim() !== "") {
                  e.target.parentNode.classList.add("filled");
                } else {
                  e.target.parentNode.classList.remove("filled");
                }
              }
            });
            document.addEventListener("blur", function (e) {
              if (
                e.target.tagName === "INPUT" &&
                e.target.closest(".hs-email")
              ) {
                var inputValue = e.target.value;
                if (inputValue.trim() !== "") {
                  e.target.parentNode.classList.add("filled");
                } else {
                  e.target.parentNode.classList.remove("filled");
                }
              }
            });
            console.log("Form Submitted! Event data: ");
          }
        }, 100);
      }
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll(".section-hs-lp-hero").length > 0) {
    clearInterval(bodyInterval);

    loadTestCode();
  }
}, 100);

var jQLoaded = setInterval(() => {
  console.log("interval working");

  if (typeof jQuery !== "undefined") {
    clearInterval(jQLoaded);
  }
});
