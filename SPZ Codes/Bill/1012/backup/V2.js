const bodyInterval1002 = setInterval(function(){
  if(document.querySelector('body') && !document.querySelector('.spz-1012')){
    clearInterval(bodyInterval1002)
    document.querySelector('body').classList.add("spz-1012", "v2");
    localStorage.setItem('bdcAbTest12','1012-v2');
    //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1202262047779255/1207982584862002/f`
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */'' }
        <div class="form heading">
          <h2>Start using BILL Today</h2>
        </div>
      `,
      customHTMLAfter: ``,
    };
    
    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.



    const formLoaded = setInterval(() => {
      if(document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0){
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for(let i=0;i<document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select').length;i++){
          let target = document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper',document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label
        for(let i=0;i<document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select').length;i++){
            let label = document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].getAttribute("placeholder")== "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].getAttribute("placeholder")
            if(!label && document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].querySelector('option')) {
              label=document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].querySelector('option').textContent;
            }
            document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].insertAdjacentHTML("afterend",`
            <label for="${document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select')[i].getAttribute("id")}">${label}</label> 
         `)
          }
         // change position
         document.querySelector('.spz-1012 .spz-input-wrapper.email').insertAdjacentElement('afterend',document.querySelector('.spz-1012 .spz-input-wrapper.name'))
        // adding Business Type
          
         document.querySelector('.spz-1012 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("beforebegin",`
          <div class="spz-input-wrapper business-type">
            <select class="business-type" id="businessType" required></select>
            <label for="businessType">Business Type</label> 
          </div>   
         `)
          for(let i=0;i<document.querySelectorAll('.spz-1012 #signupType .form-option-field span').length;i++){
            document.querySelector('.spz-1012 #businessType').insertAdjacentHTML("beforeend",`
              <option value="${document.querySelectorAll('.spz-1012 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz-1012 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
            `)
          }
          document.querySelector('.spz-1012 #businessType').addEventListener("change",function(){
            document.querySelectorAll('.spz-1012 #signupType .form-option-field')[document.querySelector('.spz-1012 #businessType').selectedIndex].querySelector('input').click()
          })
          //trigger click based on selected radiobutton
          if(document.querySelector('.spz-1012 #signupType .form-option-field [name="formoptions"]:checked').value=='direct'){
            document.querySelectorAll('.spz-1012 #signupType .form-option-field')[0].querySelector('input').click()
            document.querySelectorAll('.spz-1012 #businessType option')[0].selected='selected'
          } else {
            document.querySelectorAll('.spz-1012 #signupType .form-option-field')[0].querySelector('input').click()
            document.querySelectorAll('.spz-1012 #signupType .form-option-field')[1].querySelector('input').click()
            document.querySelectorAll('.spz-1012 #businessType option')[1].selected='selected'
          }
          //products style
          document.querySelector('.spz-1012 #form-panel-3 .text-size-tiny').textContent="(Check all that apply)"
          //checbox listener
          const checkboxListener=()=>{
            for(let x=0;x<document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select').length;x++){
              if(document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select')[x].classList.contains("hide")){
                document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.add("hide")
              }
              else{
                document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.remove("hide")
              }
            }
          }
          checkboxListener()
          for(let i=0;i<document.querySelectorAll('.spz-1012 [name="productInterestCheckbox"]').length;i++){
            document.querySelectorAll('.spz-1012 [name="productInterestCheckbox"]')[i].addEventListener("change",function(){
              checkboxListener()
            })
          }
          //select arrow
          for(let x=0;x<document.querySelectorAll('.spz-1012 form select').length;x++){
            document.querySelectorAll('.spz-1012 form select')[x].parentNode.insertAdjacentHTML("beforeend",`
            <div class="arrow"></div>  
            `)
          }
          //submit button 
          document.querySelector('.spz-1012 .submit-button.button-signup-2').classList.add("spz_1012_v2")
          document.querySelector('.spz-1012 .submit-button.button-signup-2').disabled=false
          /*
          //disclaimer 
          document.querySelector('.spz-1012 .button-disclaimer').innerHTML=`
          By continuing, you agree to BILL <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
          ` 
          */
          document.querySelector('.spz-1012 .form-section').insertAdjacentHTML("beforebegin",`<div class="existiing_account">Already have an account? <a href="https://login.us.bill.com/neo/login" class="spz_1012_v2">Login</a></div>`);

          //input even listerer
          const allInput = document.querySelectorAll('.spz-1012 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1012 form select');
          function labelChange(e) {
            if (e.value == '' || e.value == null) {
                e.closest(".spz-input-wrapper").classList.remove("hasValue");
            } else if (e.value != '' || e.value != null) {
                e.closest(".spz-input-wrapper").classList.add("hasValue");
            }
          }
          allInput.forEach(function (e) {
            e.addEventListener('blur', () => {
              labelChange(e);
            }, true);
            e.addEventListener('change', () => {
                labelChange(e);
            }, true);
            labelChange(e);
          })
          //remove unecessary select
          for(let x=0;x<document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select').length;x++){
            document.querySelectorAll('.spz-1012 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
          }
          //change label and option on mobile and desktop 
          const checkSelectLabel = () =>{
            let labelText;
            if(window.matchMedia("(max-width: 767.98px)").matches) {
              labelText= "Your accounting software?"
            } else {
              labelText= "Which accounting software do you use?"
            }
            document.querySelector('.spz-1012 .spz-input-wrapper.accountingSoftware label').textContent=labelText;
            document.querySelector('.spz-1012 .spz-input-wrapper.accountingSoftware select option').textContent=labelText;  
          }
          checkSelectLabel();
          window.addEventListener("resize",function(){
            checkSelectLabel();
          })

          //onlynumber 
          function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }
            return true;
          }
          const NOEInterval = setInterval(function(){
            if(document.querySelector('.spz-1012 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input')){
              clearInterval(NOEInterval)
              document.querySelector('.spz-1012 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input').addEventListener('keypress', function(event) {
                if(!isNumber(event)) event.preventDefault();
              }, false);
            }
          },10)
           //browser detection
           let userAgent = navigator.userAgent;
           let browser;
           if(userAgent.match(/edg/i)){
           browser = "edge";
           }else if(userAgent.match(/firefox|fxios/i)){
           browser = "firefox";
           }else if(userAgent.match(/opr\//i)){
           browser = "opera";
           }else if(userAgent.match(/chrome|chromium|crios/i)){
           browser = "chrome";
           }else if(userAgent.match(/safari/i)){
           browser = "safari";
           }else{
           //alert("Other browser");
           }
           document.querySelector('.spz-1012').classList.add(browser);
      }
    })



    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    
   
    // This is the code to generate the form over UI section do no edit it
    function addForm(formData, formSelector) {
      const formTemplate = `
            <div class="spz-form-wrap">
              <div class="form-section">
                ${
                  formData.customHTMLBefore.replace(/\s/g, "").length !== 0
                    ? formData.customHTMLBefore
                    : ""
                }
                </div>
                <div class="the-form"></div>
                ${
                  formData.customHTMLAfter.replace(/\s/g, "").length !== 0
                    ? formData.customHTMLAfter
                    : ""
                }
              </div>
            </div>
            `;
      document.body.insertAdjacentHTML(
        "beforeend",
        formTemplate
      ); /*Insert spz-form-wrap before closing body tag*/
      if (!document.querySelector(formSelector)) {
        document
          .querySelector(".spz-form-wrap .the-form")
          .insertAdjacentHTML(
            "beforeend",
            "<div style='color:red;'>Add proper form selector in code to load form</div>"
          );
      } else {
        const formLoaded = setInterval(() => {
          if (
            document.querySelector(formSelector) &&
            document.querySelectorAll(`${formSelector} input`).length > 0
          ) {
            clearInterval(formLoaded);
            document
              .querySelector(".spz-form-wrap .the-form")
              .appendChild(
                document.querySelector(formSelector)
              ); /*Apply form to spz form wrapper*/
          }
        });
      }
      
    }
    
  }
},10)
