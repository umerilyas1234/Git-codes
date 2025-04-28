import exitModal from "./some.html";
import css from "!!raw-loader!/temp/main.css";

let spzStyles = document.createElement("style");
spzStyles.id = "spz-styles";
spzStyles.innerHTML = css;
document.body.appendChild(spzStyles);
console.log("11111111");

const sessionModalShown = sessionStorage.getItem("modalShownInSession");
if (!sessionModalShown) {
  function loadTestCode6001() {
    var bodyEle = document.querySelector("body");
    if (!bodyEle.classList.contains("spz_6001")) {
      bodyEle.classList.add("spz_6001");
      document
        .querySelector(".spz_6001")
        .insertAdjacentHTML("beforeend", exitModal);
      var close = document.querySelector(".close-modal");
      var cta = document.querySelector(".custom_cta");
      var modalExitHide = document.querySelector(".modal-exit-cover");
      close.addEventListener("click", function () {
        document.body.classList.remove("spz_6001");
        modalExitHide.remove();
      });
      cta.addEventListener("click", function () {
        document.body.classList.remove("spz_6001");
        modalExitHide.remove();
      });
      var modalBody = document.querySelector(".modal-exit-inner-wrapper");
      modalBody.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      modalExitHide.style.display = "block";
      document
        .querySelector(".modal-exit-cover .close-modal")
        .addEventListener("click", function () {
          if (
            document
              .querySelector(".modal-exit-cover")
              ?.classList.contains("open")
          ) {
            document
              .querySelector(".modal-exit-cover")
              .classList.remove("open");
            document.querySelector("html").style.overflow = "auto";
            document.querySelector("body").classList.remove("page_exit_modal");
          }
        });
    }
  }

  const modalCount = parseInt(localStorage.getItem("modalCount")) || 0;
  if (modalCount < 3) {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      var mouseY = 0;
      var mouseX = 0;
      var topValue = 50;
      var leftValue = 50;
      var bottomValue = window.outerHeight - 50;
      var rightValue = window.outerWidth - 50;
      console.log("aa");

      window.addEventListener(
        "mouseout",
        function (e) {
          mouseY = e.clientY;
          mouseX = e.clientX;
          if (
            mouseY < topValue ||
            mouseY > bottomValue ||
            mouseX < leftValue ||
            mouseX > rightValue
          ) {
            if (!sessionStorage.getItem("ExistingUser")) {
              sessionStorage.setItem("ExistingUser", "true");
              console.log("bb");
              loadTestCode6001();

              localStorage.setItem("modalCount", modalCount + 1);
            }
          }
        },
        false
      );
    }
  }

  sessionStorage.setItem("modalShownInSession", "true");
}
