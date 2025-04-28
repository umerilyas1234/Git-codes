// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/11001/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/11001/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode11001() {
  if (!document.querySelector("body").classList.contains("spz_11001")) {
    document.querySelector("body").classList.add("spz_11001");
    document.querySelector('.right-column-case-study .case-study-sidebar-upper').insertAdjacentHTML('afterend', `
      <div class="sidebar-news-cta">
        <div class="sidebar_newsData">
            <strong>GET A DEMO</strong>
            <p>Complete asset visibility. Detailed and diverse asset data.</p>
            <ul>
                <li>
                    <p>Comprehensive asset inventory out-of-the-box.</p>
                </li>
                <li>
                    <p>Real-time alerts for missing security agents or controls.</p>
                </li>
                <li>
                    <p>Tagging to prioritize vulnerabilities on critical business assets.</p>
                </li>
            </ul>
        </div>
        <div class="sidebar-news-form-block w-form">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" class="sidebar-news-form" aria-label="Email Form 2" data-hs-cf-bound="true">
              <input class="sidebar-news-email-field w-input" maxlength="256" name="email" data-name="Email Address" placeholder="Email Address" type="email" id="Email-Address" required="true">
              <input type="submit" data-wait="Please wait..." class="sidebar-news-button w-button" value="Get a Demo" placeholder="Get a Demo">
            </form>
            <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form 2 success">
                <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail j1-header-form-error" tabindex="-1" role="region" aria-label="Email Form 2 failure">
                <div class="j1-header-form-error-arrow"></div>
                <div>Please enter a valid email address</div>
            </div>
            <div data-lastpass-icon-root=""
                style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
            </div>
        </div>
    </div>
    `);
    // Get a demo - Header
    function openModal() {
      var modalElements = document.querySelectorAll('.j1-modal, .j1-modal-overlay');
      modalElements.forEach(function (element) {
        element.classList.add('fade');
        element.style.display = 'block';
      });
      document.body.classList.add('j1-modal-open');

      setTimeout(function () {
        var modal = document.querySelector('.j1-modal');
        modal.classList.add('open');
      }, 75);
    }

    // Open Modal Code
    document.addEventListener('click', function (event) {
      if (event.target && (event.target.classList.contains('j1-modal') || event.target.classList.contains('j1-modal-inner') || event.target.classList.contains('j1-modal-close'))) {
        var modalElements = document.querySelectorAll('.j1-modal, .j1-modal-overlay');
        modalElements.forEach(function (element) {
          element.classList.remove('fade');
        });
        document.body.classList.remove('j1-modal-open');
        var modal = document.querySelector('.j1-modal');
        modal.classList.remove('open');

        setTimeout(function () {
          modalElements.forEach(function (element) {
            element.style.display = 'none';
          });
        }, 75);
      }
    });


    const ValidateEmail = (input) => {
      var validRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

      if (input.value.match(validRegex)) {
        openModal();
        return true;
      } else {
        return false;
      }
    }

    var J1HeaderInput = document.querySelector('.spz_11001 #email-form-2 input[name="email"]');
    var J1HeaderInputError = document.querySelector('.spz_11001 .sidebar-news-form-block .j1-header-form-error');
    const checkEmail = () => {
      if (!ValidateEmail(J1HeaderInput)) {
        J1HeaderInputError.classList.add('error');
        J1HeaderInput.classList.add('error');
        J1HeaderInputError.style.display = 'block';
      } else {
        J1HeaderInputError.classList.remove('error');
        J1HeaderInput.classList.remove('error');
        J1HeaderInputError.style.display = 'none';
      }
    }

    document.querySelector('.spz_11001 #email-form-2 .sidebar-news-button').addEventListener('click', function (e) {
      e.preventDefault();
      setTimeout(function () {
        var J1HeaderInputValue = document.querySelector('#j1-header-form .hs-form-field input[name="email"]');
        J1HeaderInputValue.value = J1HeaderInput.value;
        J1HeaderInputValue.focus();
        J1HeaderInputValue.blur();
      }, 100);
      checkEmail();
    });
    J1HeaderInput.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        checkEmail()
      }
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode11001();
  }
}, 100);
