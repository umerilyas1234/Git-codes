console.log('variant 2');
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1720166634/JupiterOne/2045/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1720166634/JupiterOne/2045/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode2045() {
  if (!document.querySelector("body").classList.contains("spz_t2045")) {
    document.querySelector("body").classList.add("spz_t2045");

    // Set cookie function
    function setCookie(name, value, days, domain) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      var domainString = domain ? "; domain=" + domain : "";
      document.cookie = name + "=" + (value || "") + expires + "; path=/" + domainString;
    }

    window.addEventListener("click", function (e) {
      
      const anchor = e.target.closest('.j1-header-form, .hero-btn-wrapper, #headerPopupShow');
      
      if (!anchor) return;
      e.preventDefault();

      if (e.target.id === 'headerFormButton' || e.target.id === 'headerPopupShow') {
        if(document.querySelector(".j1-navwrapper .j1-header-form-error")){
          document.querySelector(".j1-header-form-input[type='email']").classList.remove("error");
        }
        var emailInput = document.querySelector(".j1-header-form .j1-header-form-input[type='email']");
        var emailAddress = emailInput.value;
        
        // Set the cookie for the parent domain
        setCookie("AutoFillEmailSPZ", emailAddress, 1, ".jupiterone.com");

        console.log(document.cookie);

        window.location.href = 'https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management';
      }
      if (e.target.classList.contains('button-tile')) {
        // Set the cookie for the parent domain
        setCookie("AutoFillEmailSPZ", '', 1, ".jupiterone.com");
        window.location.href = 'https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management';
      }
      if (e.target.classList.contains('hero-btn-spacing')) {
        // Set the cookie for the parent domain
        setCookie("AutoFillEmailSPZ", '', 1, ".jupiterone.com");
        window.location.href = 'https://www.jupiterone.com/learn-more';
      }
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2045();
  }
}, 100);

function loadTestCode7014() {
  if (!document.querySelector("body").classList.contains("spz_t7014")) {
    document.querySelector("body").classList.add("spz_t7014");
    document.querySelector('.j1-navmenu .j1-dropdown-option:nth-child(3)').style.display = 'none';
    var bussinessCase = document.querySelector('.j1-navmenu .j1-dropdown-option:nth-child(3) .j1-dropdown-list-inner .j1-dropdown-link-wrapper:nth-child(2)');
    var ROI = document.querySelector('.j1-navmenu .j1-dropdown-option:nth-child(3) .j1-dropdown-list-inner .j1-dropdown-link-wrapper:nth-child(3)');
    document.querySelector('.j1-navmenu .j1-dropdown-option:nth-child(4) .j1-dropdown-list-inner').insertAdjacentElement('beforeend', bussinessCase);
    document.querySelector('.j1-navmenu .j1-dropdown-option:nth-child(4) .j1-dropdown-list-inner').insertAdjacentElement('beforeend', ROI);
  }
}

var bodyInterval2 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval2);
    loadTestCode7014();
  }
}, 100);
