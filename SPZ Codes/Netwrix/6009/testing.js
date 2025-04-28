    var button = document.querySelector(".one-field-form-button-test [id^='app-']");
    var buttonID = button.id;
    const formId = `form-${buttonID}`;
    console.log(formId);

    const checkForm = setInterval(() => {
        console.log('interval running');
        if (document.querySelector(`#${formId}`).querySelectorAll('form').length > 0) {
          console.log('interval found');
  
          clearInterval(checkForm);
          console.log("form length 111111=", document.querySelector(`#${formId}`).querySelectorAll('form'));

        }
      }, 300);