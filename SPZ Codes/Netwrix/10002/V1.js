function loadTestCode10002() {
  if (!document.querySelector("body").classList.contains("spz_t10002")) {
    document.querySelector("body").classList.add("spz_t10002");

    var btn = document.querySelector(".form-cont button.btn_filled_red");
    if (btn) {
      btn.classList.add("spz_10002_v1");
    }

    window.addEventListener('click', function (e) {
      if (e.target.matches('.form-cont button.btn_filled_red')) {
        e.preventDefault();
        window.location.href = 'https://www.netwrix.com/one-to-one.html';
      }
    });

    var button = document.querySelector(".form-cont [id^='app-']");
    var buttonID = button.id;
    const formId = `form-${buttonID}`;
    const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-mask');
    formContainer.classList.add('spz_modal');

    // setTimeout(() => {
    //   if (document.querySelector('input#SPZ_Test')) {
    //     document.querySelectorAll('input#SPZ_Test').forEach((input) => {
    //       input.value = 'variant_10002';
    //     });
    //   }
    // }, 1000);


    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '10002';
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

var bodyInterval10002 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval10002);
    loadTestCode10002();
  }
}, 100);
