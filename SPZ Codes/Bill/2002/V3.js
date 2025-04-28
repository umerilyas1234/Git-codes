function loadTestCode2002V3() {
  if (!document.querySelector("body").classList.contains("spz_2002")) {
    document.querySelector("body").classList.add("spz_2002", "v3");

    document.querySelector(".hero-full-width-left").classList.add("v3");

    var rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path d="M7.5 15.2L12.5 10.2L7.5 5.19995" stroke="#1B0EB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    var getDemoCTA = document.querySelector('.hero-left-wrapper > .flex-horizontal .button-link');
    getDemoCTA.innerHTML = `Get a Demo & Pricing ${rightArrow}`;

    var emailBtn = document.querySelector('.spz_2002 .hero-full-width-left .form-email form #homepage-form-button');

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
    localStorage.setItem('bdcAbTest9','2002-V3');

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2002V3();
  }
}, 100);
