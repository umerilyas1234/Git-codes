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
                      <button type="submit" class="mktoButton">Book a demo </button>
                  </div>
              </div>
          </form>
      </div>  
    `);
    document.querySelector('.hero').insertAdjacentHTML('afterend', `
      <div class="benifits">
        <div class="wrap">
            <div class="benifits_inner">
                <div class="benifits_cards">
                    <ul>
                        <li>
                            <div class="benifits_detail">
                                <div class="benifits_top">
                                    <h2>x10</h2>
                                    <h4>Increase in Approval Speed</h4>
                                </div>
                                <div class="benifits_image">
                                    <figure>
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5004/logo_4.webp"
                                            alt="Blue Ridge Academy">
                                    </figure>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="benifits_detail">
                                <div class="benifits_top">
                                    <h2>70%</h2>
                                    <h4>Saved in procurement costs</h4>
                                </div>
                                <div class="benifits_image">
                                    <figure>
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1720531583/procurify/5004/logo-proudfoot.svg"
                                            alt="Proudfoot">
                                    </figure>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="benifits_detail">
                                <div class="benifits_top">
                                    <h2>$18M+</h2>
                                    <h4>Saved annually in inventory costs</h4>
                                </div>
                                <div class="benifits_image">
                                    <figure>
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1720531583/procurify/5004/logo-hyper-fiber.svg"
                                            alt="HyperFiber">
                                    </figure>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="benifits_detail">
                                <div class="benifits_top">
                                    <h2>96%</h2>
                                    <h4>Reduced requisition time</h4>
                                </div>
                                <div class="benifits_image">
                                    <figure>
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/5004/logo-canal-barge.webp"
                                            alt="Canal Barge">
                                    </figure>
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
        document.querySelector('.spz_t5004 .form_button button').textContent = "Book Demo & Pricing";
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

    // remove the value on refresh
    window.onload = function() {
        if (!sessionStorage.getItem('inputRefreshed')) {
            document.querySelector('#demo_form .form_input input[type="email"]').value = '';
            sessionStorage.setItem('inputRefreshed', 'true');
        } else {
            var emailPrefilled = getCookie('AutoFillEmailSPZ');
            if (emailPrefilled) {
                document.querySelector('#demo_form .form_input input[type="email"]').value = emailPrefilled;
            }
        }
    };

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

    hiddenValue('#5004 | Procurify | PDPs | Email + CTA + Social Proof', '5004_Variant_1');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);


