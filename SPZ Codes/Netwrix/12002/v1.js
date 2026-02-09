function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_12002_v1')) {
    document.querySelector('body').classList.add('spz_12002_v1');


    //DEV 1/5. Put asana task URL here
    const asana_URL = `https://app.asana.com/1/77217210692853/project/1208325668183449/task/1211968580704203`;

    // Allowed pages
    const allowedPages = [
      "/en/lp/sharepoint-admin-toolkit/",
      "/en/lp/windows-server-admin-toolkit/",
      "/en/lp/microsoft-entra-id-security-toolkit/",
      "/en/lp/ntfs-permissions-management-toolkit/",
      "/en/lp/active-directory-admin-toolkit/",
    ];
    var svgArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2"/>
      </svg>`;
    // Check if page is allowed
    function isAllowedPage() {
      return allowedPages.some((page) => window.location.pathname.includes(page));
    }

    // Add unlock button after second section
    function addUnlockButton() {
      const sections = document.querySelectorAll("main section");
      if (sections.length < 2) return false;

      const unlockBtn = document.createElement("div");
      unlockBtn.className = "spz-learn-more-btn-12002";
      unlockBtn.innerHTML = `<div class="spz-btn-inner spz12002_v1">Learn more ${svgArrow}</div>`;

      sections[1].parentNode.insertBefore(unlockBtn, sections[1].nextSibling);
      return true;
    }

    // Setup unlock functionality
    function setupUnlockButton() {
      const btnInner = document.querySelector(".spz-btn-inner");
      if (!btnInner) return;

      btnInner.addEventListener("click", () => {
        document.querySelector(".spz-learn-more-btn-12002").classList.add("spz-hidden-12002");
        document.body.classList.remove("spz-locked-12002");
        localStorage.setItem("spz-hero-unlocked-12002", "true");

        const nextSection = document.querySelector(".spz-learn-more-btn-12002").nextElementSibling;
        if (nextSection) nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    // Initialize
    function init() {
      if (!isAllowedPage()) return;

      const isUnlocked = localStorage.getItem("spz-hero-unlocked-12002") === "true";

      const waitForSections = setInterval(() => {
        const sections = document.querySelectorAll("main section");

        if (sections.length >= 2) {
          clearInterval(waitForSections);

          if (!addUnlockButton()) return;

          if (!isUnlocked) {
            document.body.classList.add("spz-locked-12002");
            setupUnlockButton();
          } else {
            document.querySelector(".spz-learn-more-btn-12002").classList.add("spz-hidden-12002");
          }
        }
      }, 100);
    }

    // Start
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      setTimeout(init, 100);
    }
 


    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '12002';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant_` + expName;

    hiddenValue(expName, variantName);

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
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
        for (var i = 0; i < ca.length; i++) {
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
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body main").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);

