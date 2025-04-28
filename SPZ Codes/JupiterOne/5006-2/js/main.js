// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "https://res.cloudinary.com/spiralyze/raw/upload/v1707830303/JupiterOne/5006/src/style.css";
if (
  !document.querySelector(
    'link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1707830303/JupiterOne/5006/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
  console.log("stepssss 2222222");
  if (!document.querySelector("body").classList.contains("spz_50061")) {
    console.log("stepssss 3333333333");
    document.querySelector("body").classList.add("spz_50061");
    console.log("stepssss 4444444");
    document
      .querySelector(".section-hs-lp-hero .hs-lp-hero_columns")
      .classList.add("form_modal");

    console.log("stepssss 5555");
    var heroHtml = `<div class="hero-right">
            <div class="hero-right__content">
                <h3>Cyber Defense Matrix</h3>
                <h2>Build, analyze, and optimize your cybersecurity strategy</h2>
            </div>
            <div class="review_list">
                <ul>
                    <li>
                        <figure>
                            <img
                            src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/5006/amazon_svg.svg"
                            alt="Amazon"
                            />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img
                            src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/5006/frame_1171275544.svg"
                            alt="Review Stars"
                            />
                        </figure>
                    </li>
                    <li>
                        <p>4.6 <strong>(76 reviews)</strong></p>
                    </li>
                </ul>
            </div>
            <div class="her_right__list">
                <ul>
                    <li>
                        <p>
                            <strong>Analysis.</strong> Understand the various cybersecurity
                            offerings. Evaluate your current asset coverage and spot gaps.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Strategy.</strong> Determine which solutions you need and
                            when. Easily communicate your strategy to teams.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Research.</strong> Compare capabilities of tools in minutes.
                            See how teams should best handle assets and handoffs.
                        </p>
                    </li>
                </ul>
            </div>
        </div>`;

    var heroRight = document.querySelector(".form_modal .hs-lp-hero_text_col");
    heroRight.insertAdjacentHTML("afterBegin", heroHtml);

    console.log("stepssss 6666666");

    var buttonInterval = setInterval(() => {
      if (document.querySelectorAll(".form_modal .hs-button").length > 0) {
        clearInterval(buttonInterval);
        console.log("stepssss 777777");
        document.querySelector(
          ".form_modal .white-box-form-v2 .hs_cos_wrapper_type_form .form-title"
        ).innerText = "Get a free digital copy";

        document
          .querySelectorAll(
            ".hs-lp-hero_wrapper .field input.hs-input[required]"
          )
          .forEach(function (input) {
            var placeholderText = input.getAttribute("placeholder");
            var newPlaceholderText = placeholderText.replace(/\*/g, " ");

            input.setAttribute("placeholder", newPlaceholderText);
            input.closest(".hs-form-field").querySelector("label").innerHTML =
              newPlaceholderText;
            input.after(input.closest(".hs-form-field").querySelector("label"));
          });

        // insert submit btn
        if (document.querySelectorAll(".form_modal .actionBtn").length == 0) {
          document
            .querySelector(".form_modal .hs_submit")
            .insertAdjacentHTML(
              "afterEnd",
              '<div class="hs-button primary large actionBtn" id="actionBtn">Download now</div>'
            );
        }
      }
    }, 100);

    // submit form
    document.addEventListener("click", function (e) {
      if (e.target.id === "actionBtn") {
        document
          .querySelector(".form_modal form .hs-submit .actions .hs-button")
          .click();
      }
    });

    // email filled
    document.addEventListener("input", function (e) {
      if (e.target.tagName === "INPUT" && e.target.closest(".hs-email")) {
        var inputValue = e.target.value;
        if (inputValue.trim() !== "") {
          e.target.parentNode.classList.add("filled");
        } else {
          e.target.parentNode.classList.remove("filled");
        }
      }
    });

    document.addEventListener("blur", function (e) {
      if (e.target.tagName === "INPUT" && e.target.closest(".hs-email")) {
        var inputValue = e.target.value;
        if (inputValue.trim() !== "") {
          e.target.parentNode.classList.add("filled");
        } else {
          e.target.parentNode.classList.remove("filled");
        }
      }
    });
  }
}

var bodyInterval = setInterval(() => {
  if (
    document.querySelectorAll(".section-hs-lp-hero .hs-lp-hero_columns")
      .length > 0
  ) {
    clearInterval(bodyInterval);
    console.log("stepssss 111111");
    loadTestCode();
  }
}, 100);
