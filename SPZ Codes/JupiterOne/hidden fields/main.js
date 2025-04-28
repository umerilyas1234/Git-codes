function loadTestCodeHiddenFields() {
  if (!document.querySelector("body").classList.contains("spz_hidden")) {
    document.querySelector("body").classList.add("spz_hidden");
    document.querySelector('body').insertAdjacentHTML('beforeend', `
      <input id="firstName"  type="hidden" name="spz_firstName" value="">
      <input id="lastName" type="hidden" name="spz_lastName" value="">
    `);
    var firstName = document.querySelector("#j1-header-form .hs-form-field input[name='firstname']").value();
    var lastName = document.querySelector("#j1-header-form .hs-form-field input[name='firstname']").value();
    document.querySelector("#firstName").value = firstName;
    document.querySelector("#lastName").value = lastName;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    alert('body found');
    clearInterval(bodyInterval);
    loadTestCodeHiddenFields();
  }
}, 100);
