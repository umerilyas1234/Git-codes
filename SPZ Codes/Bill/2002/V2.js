function loadTestCode2002V2() {
  if (!document.querySelector("body").classList.contains("spz_2002")) {
    document.querySelector("body").classList.add("spz_2002");

    var getDemoCTA = document.querySelector('.hero-left-wrapper > .flex-horizontal .button-link');
    getDemoCTA.innerHTML = 'Get a Demo';
    document.querySelector('.spz_2002 .form-email form #homepage-form-button').insertAdjacentElement('afterend', getDemoCTA);

    var emailBtn = document.querySelector('.spz_2002 .hero-full-width-left .form-email form #homepage-form-button')
    emailBtn.value = 'Start Trial';

    window.addEventListener('click', function(e) {
      var emailField = document.querySelector('.spz_2002 .hero-full-width-left .form-email form .form_input');

      if (e.target == getDemoCTA || e.target == emailBtn) {
        // save incorrect email as well
        var emailValue = emailField.value;
        var bdcUserData = {
            email: emailValue
        };
        var bdcUserDataString = JSON.stringify(bdcUserData);
        localStorage.setItem('bdcUserData', bdcUserDataString);
      }
      if (e.target == emailBtn) {
        event.preventDefault();
        const form = emailField.closest('form'); 
        form.submit();
        window.location.href = 'https://www.bill.com/signup';  
      } 

    });
    // hidden values
    localStorage.setItem('bdcAbTest9','2002-V2');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2002V2();
  }
}, 100);
