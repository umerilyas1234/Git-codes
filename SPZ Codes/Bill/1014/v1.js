const testimonialsByIndustry = {
  "Financial Services": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/mark-cuban-companies.webp",
    title: "Streamline AP, AR, and <br class='show-desktop'> expense management for <span>Financial Services</span>",
    quote: "“We manage 100 entities with one Account Payables clerk. The savings in time and money have been immediate. BILL is the gold standard.”",
    name: "Josh Hull, Director of Finance",
    company: "Mark Cuban Companies",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Josh Hull"
  },
  "Construction": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/westland.webp",
    title: "Streamline financial operations for <span>Construction</span>",
    quote: "“What used to take 90 hours a month, takes 2. Click some buttons, you’re done.”",
    name: "James Streeter, AP Manager",
    company: "Westland Construction",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "James Streeter"
  },
  "Education": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/chattanooga-christian-schools.webp",
    title: "Streamline financial operations for <span>Education</span>",
    quote: "“We can approve checks from anywhere— even sitting on the beach. We’ve cut time spent on AP by 25%.”",
    name: "Tara Bryant, Accounting Manager",
    company: "Chattanooga Christian Schools",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Tara Bryant"
  },
  "Software and Technology": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/calendly.webp",
    title: "Streamline financial operations for <span>Software and Tech</span>",
    quote: "“We’ve saved 7-10 hours a month on expense reporting since switching to BILL.”",
    name: "Jonathan Rue, Senior Finance/<br class='desktop-hide'>Accounting Analyst",
    company: "Calendly",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Jonathan Rue"
  },
  "Healthcare and Medical": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/ignite-medical-resorts.webp",
    title: "Streamline financial operations for <span>Healthcare and Medical</span>",
    quote: "“Allows us to easily manage 23 separate medical centers (each a separate legal entity) on just one platform. Pure gold!”",
    name: "Shonna Hanscom, Assistant Controller",
    company: "Ignite Medical Resorts",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Shonna Hanscom"
  },
  "Manufacturing": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/protomet.webp",
    title: "Streamline financial operations for <span>Manufacturing</span>",
    quote: "“It’s cut expense reporting from 15-20 hours a month down to 15 minutes a month.”",
    name: "Matt Hensley, Director of Finance",
    company: "Protomet",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Protomet"
  },
  "Real Estate": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/lindsay-leasing.webp",
    title: "Streamline financial operations for <span>Real Estate</span>",
    quote: "“Gives us a competitive advantage. We can pay our owners faster than any other property management company in the area.”",
    name: "Mark Lindsay, Founder",
    company: "Lindsay Leasing",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Lindsay Leasing"
  },
  "Government": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/redford-township-district-library.webp",
    title: "Streamline financial operations for <span>Government</span>",
    quote: "“It used to take us a week to get our expenses in order. Now at the end of the month, everything has already been entered. That saves us seven days.”",
    name: "Garrett Hungerford, Director",
    company: "Redford Township District Library",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Garrett Hungerford"
  },
  "Business Services": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/chaney-and-associates.webp",
    title: "Streamline financial operations for <span>Business Services</span>",
    quote: "“Thanks to BILL, closing the books for a client, regardless of their size, takes five minutes.”",
    name: "Steve Chaney, Managing Partner",
    company: "Chaney & Associates",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Steve Chaney"
  },
  "None / Other Industry": {
    logo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/1014/cchc.webp",
    title: "Streamline AP, AR, and Expense Management",
    quote: "“If you are spending too much time on payables, BILL is a no-brainer. We’re saving both time and money. It really blew us away.”",
    name: "Sean Saunders, Deputy Director",
    company: "Church Community Housing Corporation",
    profileImg: "//res.cloudinary.com/spiralyze/image/upload/bill/1014/avatar-general.svg",
    profileImgAltText: "Sean Saunders"
  }
};

const data = JSON.parse(localStorage.getItem('_6senseCompanyDetails'));
const userIndustry = data?.company?.industry?.trim() || "None / Other Industry";

// Fallback if industry not found
const testimonial = testimonialsByIndustry[userIndustry] || testimonialsByIndustry["None / Other Industry"];

const testimonialHTML = `
  <div class="spz-client-info">
      <img src="${testimonial.logo}" alt="${testimonial.company}" class="spz-client-logo" width="180" />
      <h3>${testimonial.title}</h3>
      <p>${testimonial.quote}</p>
      <div class="spz-client-details">
          <img src="${testimonial.profileImg}" alt="${testimonial.profileImgAltText}" /> 
          <div class="spz-client-details-text">
              <h4>${testimonial.name}</h4>
              <p>${testimonial.company}</p>
          </div>
      </div>
  </div>
`;

const startTime = Date.now()
function getTimestamp() {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ` +
    `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.` +
    `${now.getMilliseconds().toString().padStart(3, '0')}`;
}

console.log("Script start at:", getTimestamp());

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded (event):', getTimestamp());
  });
} else {
  console.log('DOM already loaded (no event):', getTimestamp());
}
console.log('Current document.readyState:', document.readyState);

window.addEventListener("load", function () {
  const endTime = Date.now()
  const loadTimeInSeconds = ((endTime - startTime) / 1000).toFixed(2);
  console.log('Page fully load in ' + loadTimeInSeconds + ' seconds')
})

const bodyInterval1014 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-1014')) {
    console.log("modify the body: " + getTimestamp())
    clearInterval(bodyInterval1014)
    document.querySelector('body').classList.add("spz-1014")
    localStorage.setItem('bdcAbTest12', '1014-v1');
    //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1202262047779255/1207982584862002/f`
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
      <div class="form heading">
        <h2>Start using <span class="orange">BILL</span> today</h2>
      </div>
      `,
      customHTMLAfter: ``,
    };
    const setHTMLHeight = () => {
      document.querySelector('html').removeAttribute("style");
      if (document.body.offsetHeight > screen.height) {
        document.querySelector('html').style.minHeight = document.body.offsetHeight + "px";
      }
    }

    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        console.log("modify the form: " + getTimestamp())
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for (let i = 0; i < document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select').length; i++) {
          let target = document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label & error
        for (let i = 0; i < document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select').length; i++) {
          let label = document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].getAttribute("placeholder")
          if (!label && document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].querySelector('option')) {
            label = document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].insertAdjacentHTML("afterend", `
          <label for="${document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select')[i].getAttribute("id")}">${label}</label> 
      `)
        }
        document.querySelector('.spz-1014 .spz-input-wrapper.phone input').setAttribute("placeholder", "Phone Number")
        document.querySelector('.spz-1014 .spz-input-wrapper.phone label').textContent = "Phone Number"
        // change position
        document.querySelector('.spz-1014 .spz-input-wrapper.firstName').closest('.form-field-columns').insertAdjacentElement('beforebegin', document.querySelector('.spz-1014 .spz-input-wrapper.email'))
        // document.querySelector('.spz-1014 .spz-input-wrapper.phone').insertAdjacentElement('afterend', document.querySelector('.spz-1014 .spz-input-wrapper.name'))
        // console.log("position changed: " + getTimestamp())

        // adding Business Type
        /*
        document.querySelector('.spz-1014 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("beforebegin", `
          <div class="spz-input-wrapper business-type">
            <select class="business-type" id="businessType" required>
            <option value="" disabled="">Business Type</option>
            </select>
            <label for="businessType">Business Type</label> 
          </div>   
         `)
         document.querySelector('.spz-1014 #businessType').selectedIndex = 0;
         document.querySelector('.spz-1014 #direct').checked=false
        for (let i = 0; i < document.querySelectorAll('.spz-1014 #signupType .form-option-field span').length; i++) {
          document.querySelector('.spz-1014 #businessType').insertAdjacentHTML("beforeend", `
              <option value="${document.querySelectorAll('.spz-1014 #signupType .form-option-field')[i].querySelector('span').textContent}" >${document.querySelectorAll('.spz-1014 #signupType .form-option-field')[i].querySelector('span').textContent}</option>  
            `)
        }
        document.querySelector('.spz-1014 #businessType').addEventListener("change", function () {
          document.querySelectorAll('.spz-1014 #signupType .form-option-field')[document.querySelector('.spz-1014 #businessType').selectedIndex-1].querySelector('input').click();
          sessionStorage.setItem("businessType", document.querySelector('.spz-1014 #businessType').selectedIndex);
        })
        */
        //move form option
        document.querySelector('.spz-1014 .spz-input-wrapper.numberOfEmployees').insertAdjacentElement("beforebegin", document.querySelector('.spz-1014 .spz-input-wrapper.signupType'))
        document.querySelector('.spz-1014 .spz-input-wrapper.signupType select option').disabled = true;
        /*
        //trigger click based on selected radiobutton
        //document.querySelector('.spz-1014 #signupType .form-option-field [name="formoptions"]:checked').value
        if(sessionStorage.getItem("businessType") &&  document.querySelector('#firstName').value){
          if (sessionStorage.getItem("businessType") == 1) {
            document.querySelectorAll('.spz-1014 #signupType .form-option-field')[0].querySelector('input').click()
            document.querySelectorAll('.spz-1014 #businessType option')[0].selected = 'selected'
            document.querySelector('.spz-1014 #businessType').selectedIndex = 1
          } else {
            document.querySelectorAll('.spz-1014 #signupType .form-option-field')[0].querySelector('input').click()
            document.querySelectorAll('.spz-1014 #signupType .form-option-field')[1].querySelector('input').click()
            document.querySelectorAll('.spz-1014 #businessType option')[1].selected = 'selected'
            document.querySelector('.spz-1014 #businessType').selectedIndex = 2
          }
        }
        
        */

        //products style
        document.querySelector('.spz-1014 #form-panel-3 .text-size-tiny').textContent = "(Check all that apply)"

        //select arrow
        for (let x = 0; x < document.querySelectorAll('.spz-1014 form select').length; x++) {
          document.querySelectorAll('.spz-1014 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
          <div class="arrow"></div>  
          `)
        }
        //submit button 
        document.querySelector('.spz-1014 .submit-button.button-signup-2').classList.add("spz_1014_v1")
        document.querySelector('.spz-1014 .submit-button.button-signup-2').disabled = false

        // existiing account
        document.querySelector('.spz-1014 .button-disclaimer').insertAdjacentHTML("afterend", `<div class="existiing_account">Already have an account? <a href="https://login.us.bill.com/neo/login" class="spz_1014_v1">Log in</a></div>`);

        //  form bottom text
        document.querySelector('.form-wrapper').insertAdjacentElement('beforeend', document.querySelector('.form-wrapper.is-sub-wrapper .text-size-small:nth-child(2)'));
        document.querySelectorAll('.spz-1014 .form-wrapper .text-size-small.is-form ').forEach(el => {
          el.innerHTML = el.innerHTML.replace(/&nbsp;/g, ' ');
        });

        //input even listerer
        const allInput = document.querySelectorAll('.spz-1014 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1014 form select');
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
        for (let x = 0; x < document.querySelectorAll('.spz-1014 #accountingSoftwareContainer select').length; x++) {
          document.querySelectorAll('.spz-1014 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
        }
        //change label and option on mobile and desktop 
        const checkSelectLabel = () => {
          let labelText;
          if (window.matchMedia("(max-width: 767.98px)").matches) {
            labelText = "Your accounting software?"
          } else {
            labelText = "Which accounting software do you use?"
          }
          document.querySelector('.spz-1014 .spz-input-wrapper.accountingSoftware label').textContent = labelText;
          document.querySelector('.spz-1014 .spz-input-wrapper.accountingSoftware select option').textContent = labelText;
        }
        checkSelectLabel();
        window.addEventListener("resize", function () {
          checkSelectLabel();
          setHTMLHeight();
        })

        const targetNode = document.querySelector("body");
        const config = { childList: true, subtree: true };
        const callback = (mutationList, observer) => {
          setHTMLHeight()
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        //onlynumber 
        function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }
          return true;
        }

        const NOEInterval = setInterval(function () {
          if (document.querySelector('.spz-1014 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input')) {
            clearInterval(NOEInterval)
            document.querySelector('.spz-1014 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input').addEventListener('keypress', function (event) {
              if (!isNumber(event)) event.preventDefault();
            }, false);

          }
        }, 10)


        //browser detection
        let userAgent = navigator.userAgent;
        let browser;
        if (userAgent.match(/edg/i)) {
          browser = "edge";
        } else if (userAgent.match(/firefox|fxios/i)) {
          browser = "firefox";
        } else if (userAgent.match(/opr\//i)) {
          browser = "opera";
        } else if (userAgent.match(/chrome|chromium|crios/i)) {
          browser = "chrome";
        } else if (userAgent.match(/safari/i)) {
          browser = "safari";
        } else {
          //alert("Other browser");
        }
        document.querySelector('.spz-1014').classList.add(browser);
        console.log("Vwo test ended: " + getTimestamp())
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
          <div class="spz-modal-wrap">
              <div class="spz-form-wrap">
                  <div class="form-section">
                      ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
          ? formData.customHTMLBefore
          : ""
        }
                  </div>
                  <div class="the-form"></div>
                      ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
          ? formData.customHTMLAfter
          : ""
        }
              </div>
              ${testimonialHTML}
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
}, 10);
