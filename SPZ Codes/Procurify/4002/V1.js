var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1720691654/procurify/4002/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1720691654/procurify/4002/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
  if (!document.querySelector("body").classList.contains("spz_4002")) {
    document.querySelector("body").classList.add("spz_4002");
    document.querySelector('#section--1').insertAdjacentHTML('afterend', `
     <div class="integrations_section">
        <div class="auto_container">
            <div class="integrations_inner">
                <div class="integration_left">
                    <h2>Integrations</h2>
                    <div class="btn_list">
                        <ul>
                            <li>
                                <a href="https://www.procurify.com/get-started/" class="custom_btn">Book a demo</a>
                            </li>
                            <li>
                                <a href="https://www.procurify.com/pricing/" class="custom_btn v2">Get pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="integration_right">
                    <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/4002/ui_v1_360.webp">
                        <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/4002/ui_v1_big.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/4002/ui_v1_big.webp" alt="procurify_integrations_ERPs_and_finance" width="1240" height="171" loading="lazy">
                    </picture>
                </div>
            </div>
        </div>
    </div> 
    `);

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
    hiddenValue('#5004 | Procurify | PDPs | Email + CTA + Social Proof', '4002_Variant_1');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
