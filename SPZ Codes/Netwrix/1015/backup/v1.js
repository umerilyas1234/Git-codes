const bodyInterval1012 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_1015')) {
    clearInterval(bodyInterval1012);
    document.querySelector('body').classList.add("spz_1015")

    setTimeout(() => {
      document.querySelector('.shifter-wrapper .cta-links-wrapper').insertAdjacentHTML('afterend', `
				<div class="performance">
        <div class="auto_container">
          <div class="performance_inner">
            <div class="performance_list">
              <ul>
                <li>
                  <div class="performance_data">
                    <strong>
                      85%
                      <span>less time <br>
                        auditing</span>
                    </strong>
                    <p>Extremely helpful. I can investigate an incident in a few clicks, whereas before it would take hours to dig through logs.</p>
                    <small>
                      <span>
                        <strong>Boytcho Boytchev</strong>
                        <i>Information Security Officer</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1015/logo-credissimo.webp" alt="credissimo" width="81" height="48">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      90%
                      <span>faster <br>
                        compliance</span>
                    </strong>
                    <p>The best tool. It provides quality reporting to help us comply with regulations and decrease the time spent.</p>
                    <small>
                      <span>
                        <strong>Predrag Škundrić</strong>
                        <i>CISO</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-api-bank.svg" alt="API bank" width="59" height="45">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      6X
                      <span>faster <br>
                        audits</span>
                    </strong>
                    <p>Netwrix Auditor gathers all the data we need for internal audits while taking the usual 2–3 hours down to 30 minutes.</p>
                    <small>
                      <span>
                        <strong>Cody Lavallee</strong>
                        <i>IT Infra Manager</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-progress-residential.svg" alt="progress residential" width="111" height="48">
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
		`);

      document.querySelector('.head-cont .shifter-wrapper .cta-links-wrapper .cta-links-block img').src = "//res.cloudinary.com/spiralyze/image/upload/v1751030697/netwrix/1015/all-logos-desktop.svg"
      document.querySelectorAll('.head-cont .shifter-wrapper .cta-links-wrapper .cta-links-block picture source').forEach(function (source) {
        source.srcset = "//res.cloudinary.com/spiralyze/image/upload/v1751030698/netwrix/1015/all-logos-mobile.svg";
      });
    }, 500);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '1015';
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
}, 100);
