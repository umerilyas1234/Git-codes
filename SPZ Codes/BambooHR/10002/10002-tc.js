const waitForHiddenInput = setInterval(function () {
  if (document.querySelector('input[name="LPV1__c"]')) {
    clearInterval(waitForHiddenInput);
    document.querySelector('input[name="LPV1__c"]').value = "#10002_Control";

    MktoForms2.whenReady(function (form) {
      // For safari - Browser Back
      window.onpageshow = function (event) {
        if (event.persisted) {
          var selector = document.querySelector('main .form .mktoForm .mktoButton');
          selector.textContent = "Get Free Demo";
          selector.removeAttribute("disabled");
        }
      };

    });
  }
}, 100);