function loadTestCode9005() {
  if (!document.querySelector("body").classList.contains("spz_9005_v1")) {
    document.querySelector("body").classList.add("spz_9005_v1");
    setTimeout(() => {
      var formTitle;
      if (window.location.href.includes("product_online_demo.html")) {
        document.querySelector("body").classList.add("product_demo");
        formTitle = "Start";
        modalLeftContent = `
        <h3>NETWRIX Auditor</h3>
        <h2>Experience next-gen IT auditing <br> and compliance reporting</h2>
        <ul>
          <li>
            <p><strong>No Installation.</strong> Launch this demo instantly. Explore features, configure password rules, and set up alerts for compromised credentials.</p>
          </li>
          <li>
            <p><strong>Run Scenarios.</strong> Get hands-on with threats such as data theft and malware injection. Roll back configs, revoke user access, etc.</p>
          </li>
          <li>
            <p><strong>Sample Reports.</strong> See reports for compliance, user activity, <br> and AD changes. Drill down and see who did what, where, and when.</p>
          </li>
        </ul>
      `
      } else if (window.location.href.includes("netwrix_data_classification_online_demo.html")) {
        document.querySelector("body").classList.add("data_classification");
        formTitle = "Netwrix Data Classification";
        modalLeftContent = `
          <h3>NETWRIX DATA CLASSIFICATION</h3>
          <h2>Get hands on with next-gen data discovery and cleanup software</h2>
          <ul>
            <li>
              <p><strong>Instant Access.</strong>  Launch in your browser. Explore features, configure alerts, and set up data security rules. No installation.</p>
            </li>
            <li>
              <p><strong>Data Cleanup.</strong>  Identify sensitive, redundant, and outdated files. Auto-delete or secure exposed files.</p>
            </li>
            <li>
              <p><strong>Automations.</strong> Create custom workflows. Includes DSAR processing, record declaration, info redaction, and more.</p>
            </li>
          </ul>
        `
      } else if (window.location.href.includes("netwrix-identity-manager-product-tour.html")) {
        document.querySelector("body").classList.add("usercube");
        formTitle = "Netwrix Identity Manager";
        modalLeftContent = `
        <h3>NETWRIX identity manager</h3>
        <h2>Get hands on with next-gen identity governance</h2>
        <ul>
          <li>
            <p><strong>No Installation.</strong>  Launch instantly. Explore features, manage user identities, and create access rules all from your browser.</p>
          </li>
          <li>
            <p><strong>Identity Management.</strong> Create user, guest, and non-human identities. Define roles and access policies. Auto-assign rights.</p>
          </li>
          <li>
            <p><strong>Automations.</strong> Build custom workflows. Includes user access reviews, rights reprovisioning, and certification campaigns.</p>
          </li>
        </ul>
      `
      } else if (window.location.href.includes("data_access_governance_online_demo.html")) {
        document.querySelector("body").classList.add("data_access");
        formTitle = "Netwrix Access Analyzer";
        modalLeftContent = `
        <h3>NETWRIX access analyzer</h3>
        <h2>Get hands-on with next-gen data access risk management</h2>
        <ul>
          <li>
            <p><strong>Interactive Demo. </strong> Launch instantly in your browser and explore Netwrix Access Analyzer with no setup required.</p>
          </li>
          <li>
            <p><strong>Identify Data Security Risks.</strong> Uncover excessive permissions, shadow admins, and sensitive data exposure before attackers do.</p>
          </li>
          <li>
            <p><strong>Access Reviews & Compliance Reporting. </strong> Delegate reviews to resource owners, remediate overexposed access, and generate the reports auditors demand.</p>
          </li>
        </ul>
      `
      } else if (window.location.href.includes("password_policy_product_tour.html")) {
        document.querySelector("body").classList.add("password_policy");
        formTitle = "Netwrix Password Policy </br> Enforcer  ";
        modalLeftContent = `
        <h3>NETWRIX password policy enforcer</h3>
        <h2>Get hands on with next-gen password control and policy automation </h2>
        <ul>
          <li>
            <p><strong>No Installation.</strong> Launch this demo instantly. Explore features, configure password rules, and set up alerts for compromised credentials.</p>
          </li>
          <li>
            <p><strong>Policies.</strong> Create password policies. Complexity, length, repetition, etc. Auto-check against public breach data.</p>
          </li>
          <li>
            <p><strong>Enforcement.</strong> Apply rules per user & role. Enforce Windows GPO & FGPP. Automate resets with guided password creation.</p>
          </li>
        </ul>
      `
      }
      //DEV 2/6. Add content inside the box
      const formElements = {
        customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
        <div class="form_heading">
          <h2> ${formTitle}  Interactive Demo</h2>
        </div> 
      `,
        customHTMLAfter: `
        ${ /*This html goes after the form button. To make empty, set as. */''}
        <div class="securityInfo">  
          We care about the security of your data.
          <a href="https://www.netwrix.com/privacy.html" target="_blank" class="privacyLink"> Privacy Policy</a>
        </div>
        `,
      };

      //DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. ".form-horizontal_123456" or ".form_123456"
      const formUniqueSelector = ".form-horizontal"
      let inputsSelectors = [];
      let labelValues = [];
      //DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
      inputsSelectors = ["#ModalForm_nwf_fname", "#ModalForm_nwf_lname", "#ModalForm_nwf_email", "#ModalForm_nwf_phone"]

      //DEV 5/6. Add Form labels below
      labelValues = ["First Name", "Last Name", "Work Email", "Phone"]


      const formLoaded = setInterval(() => {
        if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
          clearInterval(formLoaded);
          addForm(formElements, formUniqueSelector);
          animateLabels(inputsSelectors, labelValues);
        }
      })


      // DEV 6/6. Delete function below pushing code to A/B testing platform. It's needed only for internal purposes.

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      //Helper function to add input listeners like focus, blur and add class to parent div
      function addInputListener(input) {
        input.placeholder = "";
        input.addEventListener("focus", function () {
          input.closest(".spz-input-wrap").classList.remove("has-value");
          input.closest(".spz-input-wrap").classList.add("focused");
        });
        input.addEventListener("blur", function () {
          if (input.value.length > 0) {
            input.closest(".spz-input-wrap").classList.remove("focused");
            input.closest(".spz-input-wrap").classList.add("has-value");
          } else {
            input.closest(".spz-input-wrap").classList.remove("focused");
          }
        });
        input.addEventListener("change", function () {
          if (input.value.length > 0) {
            input.closest(".spz-input-wrap").classList.remove("focused");
            input.closest(".spz-input-wrap").classList.add("has-value");
          } else {
            input.closest(".spz-input-wrap").classList.remove("focused");
          }
        });
        if (input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.remove("focused");
          input.closest(".spz-input-wrap").classList.add("has-value");
        } else {
          input.closest(".spz-input-wrap").classList.remove("focused");
        }
      }
      //Helper function to animate labels for inputs
      function animateLabels(inputs, labelValues) {
        inputs.map((item, index) => {
          const parentDiv = findParent(inputs[index]);

          const label = document.createElement("label");
          const input = document.querySelector(inputs[index]);

          label.innerText = labelValues[index];
          label.classList.add(`label-spz`);

          label.classList.add(`label-spz-${item}`);
          label.style.width = "";
          parentDiv.classList.add("spz-input-wrap");

          label.addEventListener("click", function (e) {
            e.target.nextElementSibling.focus();
          });
          parentDiv.appendChild(label, input);
          addInputListener(input);
          input.setAttribute('placeholder', '');
          if (input.value.length > 0) {
            parentDiv.classList.add("has-value");
          }
        });
      }
      //Helper function to find parent div of input or select element
      function findParent(elementSelector) {
        let element = document.querySelector(elementSelector);
        let wrapper = document.createElement("div");
        element.insertAdjacentElement("afterend", wrapper);
        wrapper.appendChild(element);

        if (
          (wrapper.innerHTML.includes("<input") ||
            wrapper.innerHTML.includes("<select") ||
            wrapper.innerHTML.includes("<textarea"))
        ) {
          return wrapper;
        } else if (
          wrapper.parentElement.innerHTML.includes("<input")
        ) {
          return wrapper.parentElement;
        } else {
          console.log("something is wrong");
        }
      }

      // This is the code to generate the form over UI section do no edit it
      function addForm(formData, formSelector) {
        const formTemplate = `
          <div class="form_outer form-wrapper-2">
            <div class="form_main">
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
            </div>
            </div>
          </div>
          `;
        document.querySelector('.overlay-form').insertAdjacentHTML(
          "afterend",
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

      function addClass() {
        document.querySelectorAll('#contactUsForm .inner-wrapper > div:not(.modelFormError, .inner-wrapper, .g-recaptcha)').forEach((item) => {
          if (!item.classList.contains('spz-input-wrap')) {
            item.classList.add('spz-input-wrap');
            let input = item.querySelector('input');
            let select = item.querySelector('select');
            if ((input && input.value.length > 0) || (select && select.value !== "")) {
              item.classList.add('has-value');
            }
          }
        });
      }
      function updateStates() {
        document.querySelectorAll('.spz-form-wrap .the-form .spz-input-wrap').forEach(wrapper => {
          const input = wrapper.querySelector('input');
          if (input && input.value.length === 0) {
            wrapper.classList.remove("has-value", "focused", "has-error");
          }
        });
      }

      setTimeout(() => {
        updateStates();
        if (document.querySelector('.form-horizontal input[type="submit"]')) {
          document.querySelector('.form-horizontal input[type="submit"]').value = 'Instant Access';
          document.querySelector('.form-horizontal input[type="submit"]').classList.add('spz_9005_v1');
        }
        if (document.querySelector("#ModalForm_account_type")) {
          console.log('Account type found');
          document.querySelector("#ModalForm_account_type").options[0].text = "Organization Type";
        } else {
          console.log('No account type found');
        }
      }, 100);

      function updatedText() {
        const errMsg = document.querySelector('.spz-form-wrap form .error-summary');
        if (errMsg) {
          let html = errMsg.innerHTML;

          if (html.includes('Direct Phone cannot be blank.')) {
            errMsg.closest('.spz-form-wrap form .error-summary').classList.add('er_1');
            errMsg.closest('.spz-form-wrap form .error-summary').classList.remove('er_2', 'er_3', 'er_4');
          } else if (html.includes('Email cannot be blank')) {
            errMsg.closest('.spz-form-wrap form .error-summary').classList.add('er_2');
            errMsg.closest('.spz-form-wrap form .error-summary').classList.remove('er_1', 'er_3', 'er_4');
          } else if (html.includes('e-mail')) {
            errMsg.closest('.spz-form-wrap form .error-summary').classList.add('er_3');
            errMsg.closest('.spz-form-wrap form .error-summary').classList.remove('er_1', 'er_2', 'er_4');
          } else if (html.includes('Please enter a valid Direct Phone.')) {
            errMsg.closest('.spz-form-wrap form .error-summary').classList.add('er_4');
            errMsg.closest('.spz-form-wrap form .error-summary').classList.remove('er_1', 'er_3', 'er_2');
          } else {
            errMsg.closest('.spz-form-wrap form .error-summary').classList.remove('er_1', 'er_2', 'er_3', 'er_4');
          }
        }
      }

      // obeserv the form error class 
      const targetNode = document.querySelector('.form-horizontal input.btn');
      const config = { attributes: true, childList: true, subtree: true, attributeFilter: ['value'] };
      const callback = (mutationList, observer) => {
        addClass();
        updatedText();
        console.log('observer');
        const submitButton = document.querySelector('.form-horizontal input[type="submit"]');
        if (submitButton) {
          if (submitButton.value === "Launch In-Browser Tour") {
            submitButton.classList.add('spz_9005_v1');
            submitButton.value = "Instant Access";
          }
        }
        if (document.querySelector('html').classList.contains('is-clipped')) {
          document.querySelector('html').classList.remove('is-clipped');
        }
      };

      // Observe the form for changes
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);

      // Also observe the submit button's value changes
      const submitButton = document.querySelector('.form-horizontal input[type="submit"]');
      if (submitButton) {
        const buttonObserver = new MutationObserver(callback);
        buttonObserver.observe(submitButton, { attributes: true, attributeFilter: ['value'] });
      }

      // varianrt code 9005

      document.querySelector('body').insertAdjacentHTML("beforeend", `
        <div class="spz_modal">
          <div class="spz_modalOuter">
            <div class="spz_modalLeft">
              <div class="modal_leftInner">
                <div class="modal_logo">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1753095517/netwrix/9005/logo__white.svg" alt="Netwrix">
                </div>
                <div class="modal_content">
                  ${modalLeftContent}
                </div>
                <div class="logos">
                  <ul>
                    <li>
                      <div class="logos_main">
                        <figure>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1753096013/netwrix/9005/logo-airbus.svg" alt="Airbus" width="85">
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div class="logos_main">
                        <figure>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1753096015/netwrix/9005/logo-virgin.svg" alt="Virgin" width="54.8">
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div class="logos_main">
                        <figure>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1753096014/netwrix/9005/logo-denso.svg" width="83.8" alt="Denso">
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div class="logos_main">
                        <figure>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/9005/logo-allianz.webp" width="107.064" alt="Allianz">
                        </figure>
                      </div>
                    </li>
                    <li>
                      <div class="logos_main">
                        <figure>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/9005/logo-geneva_1.webp" width="109.3" alt="Geneva">
                        </figure>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="spz_modalRight">
              <div class="modal_rightInner">
                
              </div>
            </div>
          </div>
        </div>
        `);
      setTimeout(() => {
        document.querySelector('.modal_rightInner').insertAdjacentElement("afterbegin", document.querySelector('.spz-form-wrap'));
        if (document.querySelector('input#SPZ_Test').value == "") {
          document.querySelector('input#SPZ_Test').value = "variant_9005"
        } else {
          document.querySelector('input#SPZ_Test').value = document.querySelector('input#SPZ_Test').value + ",variant_9005";
        }
      }, 1000);

    }, 300);
  }
}


var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode9005();
  }
}, 100);
