function loadTestCode204() {
  // main css
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://res.cloudinary.com/spiralyze/raw/upload/v1706104169/Tenable/204/src/style.css";
  if (
    !document.querySelector(
      'link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1706104169/Tenable/204/src/style.css"]'
    )
  ) {
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  // fonts
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap";
  if (
    !document.querySelector(
      'link[href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap"]'
    )
  ) {
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  var bodyEle = document.querySelector("body");
  if (!bodyEle.classList.contains("spz-tenable-204")) {
    bodyEle.classList.add("spz-tenable-204");
    const cloudinary = "//res.cloudinary.com/spiralyze/image/upload";
    var modalHtml = `<div class="modal-exit-cover" style="display:none">
          <div class="modal-exit-inner-cover">
              <div class="modal-exit-inner-wrapper">
                  <a class="close-modal" href="javascript:;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20277 2.20277C2.47314 1.93241 2.91148 1.93241 3.18184 2.20277L8 7.02093L12.8182 2.20277C13.0885 1.93241 13.5269 1.93241 13.7972 2.20277C14.0676 2.47314 14.0676 2.91148 13.7972 3.18184L8.97907 8L13.7972 12.8182C14.0676 13.0885 14.0676 13.5269 13.7972 13.7972C13.5269 14.0676 13.0885 14.0676 12.8182 13.7972L8 8.97907L3.18184 13.7972C2.91148 14.0676 2.47314 14.0676 2.20277 13.7972C1.93241 13.5269 1.93241 13.0885 2.20277 12.8182L7.02093 8L2.20277 3.18184C1.93241 2.91148 1.93241 2.47314 2.20277 2.20277Z" fill="#C7CCD5"/>
                      </svg>
                  </a>
                  <div class="modal-exit-content">
                      <div class="modal-exit-left">
                          <picture>
                            <source media="(max-width: 767px)" srcset="${cloudinary}/f_auto/tenable/204/tenable_vulnerability_management_tenableio_webp_1.webp">
                            <source media="(max-width: 991px)" srcset="${cloudinary}/f_auto/tenable/204/tenable_vulnerability_management_tenableio_webp_1.webp">
                            <source srcset="${cloudinary}/f_auto/tenable/204/tenable_vulnerability_management_tenableio_webp.webp">
                            <img class="exit-logo" src="${cloudinary}/f_auto/tenable/204/tenable_vulnerability_management_tenableio_webp.webp" alt="Tenable Vulnerability Management" />
                          </picture>
                          <h2 class="exit-title"><strong>#1</strong> Cloud-Based Vulnerability Management Tool</h2>
                          <ul>
                              <li><img src="${cloudinary}/tenable/204/icon_-_scan_listen_monitor.svg" alt="See Everything" /><strong>See Everything.</strong> Monitor your entire attack surface - from IT to cloud to OT, containers, and more. All from one solution.</li>
                              <li><img src="${cloudinary}/tenable/204/icon_-_secure_alert.svg" alt="Prioritize Vulnerabilities" /><strong>Prioritize Vulnerabilities.</strong> Scan for 81,000+ CVEs. Assessed based on risk, severity, and number of public exploits. </li>
                              <li><img src="${cloudinary}/tenable/204/icon_-_scan_scope.svg" alt="Automated Visibility" /><strong>Automated Visibility.</strong> Scan assets 24/7. Enable alerts for zero-day events, overdue patches, misconfigurations, and more. </li>
                          </ul>
                          <a class="cta" href="javascript:void(0);" data-target=".hero-section">Try for Free <img src="${cloudinary}/tenable/204/navigation__5_-_navigation_arrow_arrows_direction_right_icon.svg" alt="Icon"></a>
                      </div>
                      <div class="modal-exit-right">
                          <picture>
                              <source media="(max-width: 767px)" srcset="${cloudinary}/f_auto/tenable/204/img-mobile.webp">
                              <source media="(max-width: 991px)" srcset="${cloudinary}/f_auto/tenable/204/img-tablet.webp">
                              <source srcset="${cloudinary}/f_auto/tenable/204/img-desktop.webp">
                              <img src="${cloudinary}/f_auto/tenable/204/img-desktop.webp" alt="Tenable">
                          </picture>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    document
      .querySelector("#tenable-io-page")
      .insertAdjacentHTML("beforeend", modalHtml);
    var close = document.querySelector(".close-modal");
    var modalExitHide = document.querySelector(".modal-exit-cover");
    var exitingLightbox = document.querySelector(".lightbox-opened");
    close.addEventListener("click", function () {
      document.body.classList.add("modal-closed");
      document.querySelector("body").style.overflow = "inherit";
      modalExitHide.remove();
      if (exitingLightbox) {
        document.querySelector("html").classList.add("no-scroll");
      }
    });
    modalExitHide.addEventListener("click", function () {
      document.body.classList.add("modal-closed");
      document.querySelector("body").style.overflow = "inherit";
      modalExitHide.remove();
      if (exitingLightbox) {
        document.querySelector("html").classList.add("no-scroll");
      }
    });

    var cta = document.querySelector(
      ".spz-tenable-204 .modal-exit-inner-wrapper .cta"
    );
    cta.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("modal-closed");
      document.querySelector("body").style.overflow = "inherit";
      modalExitHide.remove();
    });

    var modalBody = document.querySelector(".modal-exit-inner-wrapper");
    modalBody.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    document.querySelectorAll(".cta").forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        var targetSelector = this.getAttribute("data-target");
        var targetElement = document.querySelector(targetSelector);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    document.querySelector("html").classList.remove("no-scroll");
    document.querySelector("body").style.overflow = "hidden";
    modalExitHide.style.display = "block";
    document
      .querySelector(
        ".modal-exit-cover .close-modal",
        ".modal-exit-cover .modal-exit-inner-cover"
      )
      .addEventListener("click", function () {
        if (
          document
            .querySelector(".modal-exit-cover")
            ?.classList.contains("open")
        ) {
          document.querySelector(".modal-exit-cover").classList.remove("open");
          document.querySelector("html").style.overflow = "auto";
          document.querySelector("body").classList.remove("page_exit_modal");
        }
      });
  }
}
if (window.matchMedia("(min-width: 1025px)").matches) {
  var mouseY = 0;
  var mouseX = 0;
  var topValue = 50;
  var leftValue = 50;
  var bottomValue = window.outerHeight - 50;
  var rightValue = window.outerWidth - 50;
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
          loadTestCode204();
        }
      }
    },
    false
  );
} else {
  setTimeout(function () {
    if (!sessionStorage.getItem("ExistingUser")) {
      sessionStorage.setItem("ExistingUser", "true");
      loadTestCode204();
    }
  }, 30000);
}
