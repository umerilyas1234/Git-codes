setTimeout(() => {
  if (document.querySelector('.demo_form .hs_email input[type="email"]')) {
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
      document.querySelector('.demo_form .hs_email input[type="email"]').value = storedEmailSPZ;
    }
  }
}, 6000);



if(document.querySelector(".j1-navwrapper .j1-header-form-error.w-form-fail.error")){
  document.querySelector(".j1-header-form-input[type='email']").classList.remove("error");
  document.querySelector(".j1-navwrapper .j1-header-form-error.w-form-fail.error").style.display = 'none';
}
var emailInput = document.querySelector('.j1-header-form #HeaderEmail-3');