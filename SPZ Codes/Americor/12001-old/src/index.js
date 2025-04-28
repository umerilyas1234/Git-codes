import mainHtml from "./index.html";
import css from "!!raw-loader!/temp/main.css";
let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles);

function loadTestCode12001() {
  if (!document.querySelector("body").classList.contains("spz_12001")) {
    document.querySelector("body").classList.add("spz_12001");
    var heroRight = document.querySelector(".spz_12001");
    heroRight.insertAdjacentHTML("afterBegin", mainHtml);

    var formInterval = setInterval(() => {
      if (document.querySelectorAll("#form-w4-alt").length > 0) {
        function updateMyDiv() {
          var newValue = document
            .querySelector(".get-started-number")
            .innerText.trim();
          var myDivElement = document.querySelector(".custom_btn");
          myDivElement.innerText = newValue;
          myDivElement.setAttribute(
            "href",
            "tel:" + newValue.replace(/\D/g, "")
          );
        }
        updateMyDiv();
        // Monitor changes in .get-started-number
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === "childList") {
              updateMyDiv();
            }
          });
        });
        // Configure the observer to watch for changes in .get-started-number
        var targetNode = document.querySelector(".get-started-number");
        var config = { childList: true };
        observer.observe(targetNode, config);
        console.log("button text updated");

        clearInterval(formInterval);
        // insert form
        var heroForm = document.querySelector("#form-w4-alt");
        document
          .querySelector(".hero_main")
          .insertAdjacentElement("afterbegin", heroForm);
        console.log("form loaded");

        //  insert footer text
        var formNote = document.querySelector(".form__note");
        document
          .querySelector(".hero_footer")
          .insertAdjacentElement("afterbegin", formNote);
        console.log("Text inserted");

        // remove placeholder
        var placeholders = document.querySelectorAll(
          ".form-group input",
          formNote
        );
        placeholders.forEach(function (input) {
          input.placeholder = "";
          input.required = "required";
        });
        console.log("Required added");

        // add labels
        document
          .querySelector("#contactinfozipform-firstname")
          .insertAdjacentHTML(
            "afterend",
            '<label for="First Name">First Name</label>'
          );
        document
          .querySelector("#contactinfozipform-lastname")
          .insertAdjacentHTML(
            "afterend",
            '<label for="Last Name">Last Name</label>'
          );
        document
          .querySelector("#contactinfozipform-phone")
          .insertAdjacentHTML(
            "afterend",
            '<label for="Phone Number">Phone Number</label>'
          );
        document
          .querySelector("#contactinfozipform-email")
          .insertAdjacentHTML(
            "afterend",
            '<label for="Email Address">Email Address</label>'
          );
        document
          .querySelector("#addressform-street")
          .insertAdjacentHTML("afterend", '<label for="Street">Street</label>');
        document
          .querySelector("#addressform-city")
          .insertAdjacentHTML("afterend", '<label for="City">City</label>');
        document
          .querySelector("#contactinfozipform-zipcode")
          .insertAdjacentHTML(
            "afterend",
            '<label for="ZIP Code">ZIP Code</label>'
          );
        console.log("labels added");

        // email filled
        document.addEventListener("input", function (e) {
          if (e.target.id === "contactinfozipform-email") {
            var inputValue = e.target.value;
            if (inputValue.trim() !== "") {
              e.target.parentNode.classList.add("filled");
            } else {
              e.target.parentNode.classList.remove("filled");
            }
          }
        });
        document.addEventListener("blur", function (e) {
          if (e.target.id === "contactinfozipform-email") {
            var inputValue = e.target.value;
            if (inputValue.trim() !== "") {
              e.target.parentNode.classList.add("filled");
            } else {
              e.target.parentNode.classList.remove("filled");
            }
          }
        });
        // update text
        var paragraphs = document.querySelectorAll(
          ".hero_footer .form__note p:first-child"
        );
        paragraphs.forEach(function (paragraph) {
          var paragraphText = paragraph.innerText;
          var newParagraphText = paragraphText.replace(/Continue/g, "Submit");

          paragraph.innerText = newParagraphText;
        });
        // add class to button
        var submitBtn = document.querySelector("#form-w4-alt .form__next");
        submitBtn.classList.add("form_btn");
        submitBtn.insertAdjacentHTML(
          "beforeend",
          '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none"> <path d="M4.5 2.69354C4.5 2.41404 4.82331 2.25865 5.04157 2.43325L9.17464 5.73971C9.34144 5.87315 9.34144 6.12685 9.17464 6.26029L5.04157 9.56675C4.82331 9.74135 4.5 9.58596 4.5 9.30646V2.69354Z" fill="#fff"/></svg>'
        );

        // show step two
        document.addEventListener("click", function (e) {
          if (e.target.id === "step_two") {
            document.querySelector(".hero_formOuter").style.display = "none";
            document.querySelector(".step_two").style.display = "block";
            document.querySelector(".hero_footer").style.display = "block";
            document.querySelector(".spz_hero").classList.add("hero_two");
          }
        });
      }
    }, 100);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    console.log("interval working");
    clearInterval(bodyInterval);

    loadTestCode12001();
  }
}, 100);
