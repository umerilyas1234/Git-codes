var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1716292472/JupiterOne/3012/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1716292472/JupiterOne/3012/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_3012")) {
    document.querySelector("body").classList.add("spz_3012");

    if (document.querySelector('.hero-platform-content h4')) {
      document.querySelector('.hero-platform-content h4').insertAdjacentHTML('afterend', `
      <div class="spzz_ratings">
          <div class="w-layout-blockcontainer container-large w-container">
              <div class="rating_list">
                  <ul>
                      <li>
                          <div class="rating_data">
                              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/3012/simple-iconsg2.svg" alt="G2" width="25" height="25"></figure>
                              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/3012/frame_1000003324.svg" alt="Rating stars" width="102" height="20.4"></figure>
                              <strong>4.9</strong>
                              <span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/3012/material-symbols_star_1.png" alt="Rating star"></span>
                          </div>
                      </li>
                      <li>
                          <div class="rating_data">
                              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/3012/gartner_logosvg.svg" alt="Gartner" width="80" height="18"></figure>
                              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/3012/frame_1000003325.svg" alt="Rating stars" width="108" height="22"></figure>
                              <strong>4.7</strong>
                              <span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/3012/material-symbols_star.png" alt="Rating star"></span>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      `);

      document.querySelector('.platform-hero-card-wrapper').insertAdjacentHTML('afterend', `
      
      <div class="demo_form">
        <form id="wf-form-Header-Form" name="wf-form-Header-Form" data-name="Header Form" method="get" class="j1-header-form">
            <input class="j1-header-form-input w-input" autocomplete="off" maxlength="256" name="HeaderEmail-3" data-name="Header Email 3" placeholder="Email" type="email" id="HeaderEmail-3">
            <label>Email</label>
            <input type="submit" data-wait="Get a Demo" id="headerFormButton" class="j1-header-form-btn w-button" value="Get a Demo">
        </form>
        <div class="j1-header-form-error w-form-fail error" tabindex="-1" role="region" aria-label="Header Form failure"">
          <div class="j1-header-form-error-arrow"></div>
          <div>Please enter a valid email address</div>
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

      var J1HeaderInput = document.querySelector('.demo_form .j1-header-form-input');
      var J1HeaderInputError = document.querySelector('.demo_form .j1-header-form-error');
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

      document.querySelector('.demo_form #headerFormButton').addEventListener('click', function (e) {
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
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
