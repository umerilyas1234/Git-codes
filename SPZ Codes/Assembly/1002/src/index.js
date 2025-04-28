import heroHtml from "./hero.html";
import css from "!!raw-loader!/temp/main.css";
let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles);
console.log("intervallllll");

function loadTestCode1002() {
  document.querySelector("body").classList.add("spz_1002");
  var mainHero = document.querySelector(".spz_1002 header");
  mainHero.insertAdjacentHTML("afterend", heroHtml);
  setTimeout(function () {
    console.log("aa");
    if (!document.querySelector(".hero_input .hero-section-CTA") > 0) {
      console.log("bb");

      var newEmail = document.querySelector(
        "body.spz_1002 div[data-testid='hero-banner__container'] .hero-section-CTA"
      );
      document
        .querySelector(".hero_input")
        .insertAdjacentElement("afterbegin", newEmail);
      var learnMore = document.querySelector(".lean-more-div");
      document
        .querySelector(".hero-section-CTA")
        .insertAdjacentElement("afterend", learnMore);
    }
  }, 1000);
}

// var bodyInterval = setInterval(() => {
//   console.log("interval working");
//   if (document.querySelectorAll("body").length > 0) {
//     clearInterval(bodyInterval);
//     console.log("aaaaa");
//     loadTestCode1002();
//   }
// }, 100);

const targetNode = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList, observer) => {
  if (
    (!document.querySelector(".spz_1002") &&
      document.querySelector("#bltb1188604a2092f89")) ||
    (document.querySelector(".spz_1002") &&
      !document.querySelector(".spz_1002 .main_hero"))
  ) {
    console.log("interval working");
    loadTestCode1002();
  }
  if (!document.querySelector("#bltb1188604a2092f89")) {
    console.log("not same");
    if (document.querySelector(".spz_1002 .main_hero")) {
      document.querySelector(".spz_1002 .main_hero").remove();
    }
    if (document.querySelector(".spz_1002")) {
      document.querySelector("body").classList.remove("spz_1002");
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
