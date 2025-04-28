var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1719863936/procurify/5004/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1719863936/procurify/5004/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_t5004")) {
    document.querySelector("body").classList.add("spz_t5004");

    // add alt tag value to logo
    var siteLogos = document.querySelectorAll("#header .img-logo");
    siteLogos.forEach(function(logo) {
        logo.alt = "Procurify Logo";
    });
    if (document.querySelector('.hero .hero__image img')){
        document.querySelector('.hero .hero__image img').alt = "Hero Image";
    }

    document.querySelector('main > .hero .hero__links').insertAdjacentHTML('afterend', `
      <div class="get_a_demoForm">
          <form id="demo_form">
              <div class="form_outer">
                  <div class="form_input">
                      <input type="email" name="email" placeholder="Email" valid>
                      <label>Email</label>
                  </div>
                  <div class="form_button">
                      <button type="submit" class="mktoButton">Get a demo </button>
                  </div>
              </div>
          </form>
      </div>  
    `);
    document.querySelector('.hero').insertAdjacentHTML('afterend', `
     <div class="reviews">
        <div class="wrap">
            <div class="reviews_inner">
                <div class="reviews_top">
                    <div class="reviews_topInner">
                      <figure>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1719395962/procurify/5004/logo-capterra.svg"
                            alt="Capterra">
                      </figure>
                      <small>
                        <span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719395962/procurify/5004/stars.svg"
                                alt="Rating stars">
                        </span>
                        <strong>4.6/5 <i> based on 170 reviews </i> <b> (170 reviews)</b></strong>
                      </small>
                    </div>
                </div>
                <div class="reviews_list">
                    <ul>
                        <li>
                            <div class="review_data">
                                <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1720609730/procurify/5004/Rate.svg" alt-"Rating stars"></figure>
                                <p>Intuitive interface that makes it easy. Just  paste links for orders and it autofills </br>
                                    details. </p>
                                <div class="review_bottom">
                                  <span><img
                                          src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5004/jeffrey_santoso.webp"
                                          alt="Jeffrey Santoso"></span>
                                  <small>
                                      <strong>Jeffrey Santoso</strong>
                                      <span>Miltenyi Biotec</span>
                                  </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="review_data">
                                <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1720609730/procurify/5004/Rate.svg" alt-"Rating stars"></figure>
                                <p>Saves time for the Finance Department and meets the burden
                                    of Internal Controls for the Board
                                    of Directors.</p>
                                <div class="review_bottom">
                                  <span><img
                                          src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5004/ryan_thatcher.webp"
                                          alt="Ryan Thatcher"></span>
                                  <small>
                                      <strong>Ryan Thatcher</strong>
                                      <span>Blue Medora</span>
                                  </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="review_data">
                                <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1720609730/procurify/5004/Rate.svg" alt-"Rating stars"></figure>
                                <p>Procurify is the best software system we have bought in our 25-year history. Highly
                                    recommended.</p>
                                <div class="review_bottom">
                                  <span><img
                                          src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5004/ed_fineran.webp"
                                          alt="Ed Fineran"></span>
                                  <small>
                                      <strong>Ed Fineran</strong>
                                      <span>Atlantech Online</span>
                                  </small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `);
    if (window.innerWidth < 768) {
      document.querySelector('.spz_t5004 .form_button button').textContent = "Get Demo & Pricing";
    }
    // on submit
    document.getElementById('demo_form').addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Invalid email');

      const emailInput = document.querySelector('#demo_form .form_input input[type="email"]');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailPattern.test(emailInput.value)) {
          emailInput.classList.remove('error');
          var emailAddress = emailInput.value;

          // set cookie
          function setCookie(name, value, days) {
            var expires = "";
            if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
          }

          setCookie("AutoFillEmailSPZ", emailAddress, 1);

          console.log(document.cookie);

          window.location.href = 'https://www.procurify.com/get-started/';

      } else {
        console.log('Invalid email');
        emailInput.classList.add('error');
      }
    });

    // if cookies exist
    if (document.querySelector('#demo_form .form_input input[type="email"]')) {
      function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
      var storedEmailSPZ = getCookie("AutoFillEmailSPZ");
      if (storedEmailSPZ) {
        document.querySelector('#demo_form .form_input input[type="email"]').value = storedEmailSPZ;
      }
    }

    // hidden values
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
          for(var i = 0; i < ca.length; i++) {
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
    hiddenValue('#5004 | Procurify | PDPs | Email + CTA + Social Proof', '5004_Variant_2');
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
