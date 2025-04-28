var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1723205740/procurify/2006/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1723205740/procurify/2006/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode5005() {
  if (!document.querySelector("body").classList.contains("spz_t2006")) {
    document.querySelector("body").classList.add("spz_t2006");

    document.querySelector("#logo-slider").insertAdjacentHTML("afterend", `
      <section class="customer_rate v2">
        <div class="section__layout section__layout--auto">
          <div class="customer_inner">
            <div class="coustomer_left">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/procurify/2006/ui_v2.webp" alt="Customers rate image"></figure>
            </div>
            <div class="customer_right">
              <h2>Customers rate Procurify #1 <br>
              mid-market purchasing software</h2>
              <div class="g2_logos">
                <ul>
                  <li>
                    <div class="g2_logoMain">
                      <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935810/procurify/2006/g2_leader.svg" alt="G2 leader"></span>
                    </div>
                  </li>
                  <li>
                    <div class="g2_logoMain">
                      <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935810/procurify/2006/g2_best_results.svg" alt="G2 best results"></span>
                    </div>
                  </li>
                  <li>
                    <div class="g2_logoMain">
                      <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935811/procurify/2006/g2_best_usability_1.svg" alt="G2 best usability"></span>
                    </div>
                  </li>
                  <li>
                    <div class="g2_logoMain">
                      <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935813/procurify/2006/g2_leader_2.svg" alt="G2 leader"></span>
                    </div>
                  </li>
                  <li>
                  <div class="g2_logoMain">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935813/procurify/2006/g2_best_usability_2.svg" alt="G2 best relationship"></span>
                  </div>
                  </li>
                </ul>
              </div>
              <div class="customer_bottom">
                <a href="https://procurify.com/get-started" class="demo_btn">Book a demo</a>
                <div class="review">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1722935810/procurify/2006/icon-g2.svg" alt="G2">
                  <small>
                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1722935810/procurify/2006/rate_stars.svg" alt="Review stars"></figure>
                    <span>4.6/5 based on 216 reviews</span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
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

    hiddenValue('#2006', '2006_Variant_2');
  }

}


var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode5005();
  }
}, 100);
