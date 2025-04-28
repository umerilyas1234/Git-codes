function loadTestCode3007() {
  if (!document.querySelector("body").classList.contains("spz_t3007")) {
    document.querySelector("body").classList.add("spz_t3007");
    setTimeout(() => {

      const selectors = [
        ".spz_t3007 .product-list .product-item-lifted .cta button",
        ".spz_t3007 .product-list .product-item-lifted .cta a.cta-link",
        ".spz_t3007 .product-list .product-item .cta button",
        ".spz_t3007 .product-list .product-item .cta a.cta-link"
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.classList.add("spz_3007_cta"));
      });

      document.querySelectorAll("#SPZ_Test").forEach(field => {
        field.value = "variant_3007"
      });

      function updateFormButton() {
        document.querySelectorAll(".v-modal-mask .modelFormSubmit").forEach(btn => {
          btn.value = "Request a Quote"
        });
        console.log('updated states');
      }
      updateFormButton();

      const targetNodes = document.querySelectorAll('.v-modal-mask .modelFormSubmit');
      const previousValues = new WeakMap();
      
      targetNodes.forEach(node => {
        previousValues.set(node, node.value);
      
        // Poll every 200ms — adjust if needed
        setInterval(() => {
          const currentValue = node.value;
          const previousValue = previousValues.get(node);
      
          if (currentValue !== previousValue) {
            previousValues.set(node, currentValue);
            updateFormButton(); // Your custom function
          }
        }, 10);
      });
      
      


      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      //exptName should be #1001, #1002, #1003 etc.
      const expName = '3007';
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
    }, 300);
  }
}

var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode3007();
  }
}, 100);
