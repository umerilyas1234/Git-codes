function spz3003() {
  if (!document.querySelector('body').classList.contains('spz_3003') && document.querySelector('#sg-popup-content-wrapper-6993 .sgpb-main-html-content-wrapper')) {
    clearInterval(bodyInterval3001);
    document.querySelector('body').classList.add('spz_3003', 'small-form');

    // Select the element you want to wrap
    const formBg = document.querySelector('#sg-popup-content-wrapper-6993 .sgpb-main-html-content-wrapper');
    const wrapper = document.createElement('div');
    wrapper.className = 'form_wrapper'; // (optional)
    formBg.parentNode.insertBefore(wrapper, formBg);
    wrapper.appendChild(formBg);
    if (document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6993"]')) {
      document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6993"]').textContent = "GET A DEMO";
    }
    document.querySelector('.spz_3003 .btn-header a').textContent = "GET A DEMO";
    if (document.querySelector('.spz_3003 .cta-cont [href="/demo-request/"]')) {
      document.querySelector('.spz_3003 .cta-cont [href="/demo-request/"]').textContent = "GET A DEMO"
    }
    if (document.querySelector('.spz_3003 .cta-cont [href="#sg-popup-id-6993"]')) {
      document.querySelector('.spz_3003 .cta-cont [href="#sg-popup-id-6993"]').textContent = "GET A DEMO"
    }
    document.querySelector('#sg-popup-content-wrapper-6993 .sgpb-main-html-content-wrapper').insertAdjacentHTML('afterbegin', `
        <h3>Get a demo</h3>
      `);

    if (location.href.includes('solutions/canoe-intelligence/')) {
      const formBg2 = document.querySelector('#sg-popup-content-wrapper-6998 .sgpb-main-html-content-wrapper');
      const wrapper = document.createElement('div');
      wrapper.className = 'form_wrapper'; // (optional)
      formBg2.parentNode.insertBefore(wrapper, formBg2);
      wrapper.appendChild(formBg2);
      document.querySelector('#sg-popup-content-wrapper-6998 .sgpb-main-html-content-wrapper').insertAdjacentHTML('afterbegin', `
        <h3>Download brochure</h3>
      `);
      setTimeout(() => {
        if (document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6998"]')) {
          document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6998"]').click()
        }
        setTimeout(() => {
          document.querySelector('.heroRight #sgpb-popup-dialog-main-div-wrapper').insertAdjacentElement('afterend', document.querySelector('#sg-popup-content-wrapper-6998').closest('#sgpb-popup-dialog-main-div-wrapper'));
          document.querySelector('#sg-popup-content-wrapper-6998').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }, 1000);
      }, 500);
    } else if (location.href.includes('solutions/canoe-connect/')) {
      const formBg2 = document.querySelector('#sg-popup-content-wrapper-7500 .sgpb-main-html-content-wrapper');
      const wrapper = document.createElement('div');
      wrapper.className = 'form_wrapper'; // (optional)
      formBg2.parentNode.insertBefore(wrapper, formBg2);
      wrapper.appendChild(formBg2);
      document.querySelector('#sg-popup-content-wrapper-7500 .sgpb-main-html-content-wrapper').insertAdjacentHTML('afterbegin', `
        <h3>Download brochure</h3>
      `);
      setTimeout(() => {
        if (document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-7500"]')) {
          document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-7500"]').click()
        }
        setTimeout(() => {
          document.querySelector('.heroRight #sgpb-popup-dialog-main-div-wrapper').insertAdjacentElement('afterend', document.querySelector('#sg-popup-content-wrapper-7500').closest('#sgpb-popup-dialog-main-div-wrapper'));
          document.querySelector('#sg-popup-content-wrapper-7500').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }, 1000);
      }, 500);
    } else if (location.href.includes('solutions/canoe-asset-data/')) {
      const formBg2 = document.querySelector('#sg-popup-content-wrapper-6959 .sgpb-main-html-content-wrapper');
      const wrapper = document.createElement('div');
      wrapper.className = 'form_wrapper'; // (optional)
      formBg2.parentNode.insertBefore(wrapper, formBg2);
      wrapper.appendChild(formBg2);
      document.querySelector('#sg-popup-content-wrapper-6959 .sgpb-main-html-content-wrapper').insertAdjacentHTML('afterbegin', `
        <h3>Download brochure</h3>
      `);
      setTimeout(() => {
        if (document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6959"]')) {
          document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6959"]').click()
        }
        setTimeout(() => {
          document.querySelector('.heroRight #sgpb-popup-dialog-main-div-wrapper').insertAdjacentElement('afterend', document.querySelector('#sg-popup-content-wrapper-6959').closest('#sgpb-popup-dialog-main-div-wrapper'));
          document.querySelector('#sg-popup-content-wrapper-6959').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }, 1000);
      }, 500);
    }

    if (location.href.includes('solutions/canoe-intelligence/') || location.href.includes('solutions/canoe-connect/') || location.href.includes('solutions/canoe-asset-data/')) {
      document.querySelectorAll('.form_wrapper .sgpb-main-html-content-wrapper h3').forEach(el => {
        el.insertAdjacentHTML('beforebegin', `
          <div class="form_nav">
            <div class="form_navOuter">
              <div class="form_navItem">
                <a href="javascript:void();" class="form_navDemo active">demo</a>
              </div>
              <div class="form_navItem">
                <a href="javascript:void();" class="form_navBrochure">Brochure</a>
              </div>
            </div>
          </div>
          `);
      });
    }

    function trigger(el, eventType) {
      if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
        el[eventType]();
      } else {
        const event =
          typeof eventType === 'string'
            ? new Event(eventType, { bubbles: true })
            : eventType;
        el.dispatchEvent(event);
      }
    }

    // Form visual changes code
    function formModification() {
      // Add Label dynamically
      document.querySelectorAll('.form_wrapper .gfield.gfield_visibility_visible:not(.gform_hidden)').forEach(function (el) {
        const label = el.querySelector('label');
        const inputElement = el.querySelector('input, select, textarea');

        if (inputElement && label) {
          if (label && label.innerText.includes('Country / Region')) {
            label.innerText = 'Country*';
          }
          if (inputElement.tagName === 'TEXTAREA') {
            label.innerText = 'Message (optional)';
          }
          inputElement.setAttribute('placeholder', label.innerText);
          inputElement.setAttribute('autocomplete', 'no-fill');
        }
      });

      // hide + showing
      const hiddenField = ['.form_wrapper  #field_3_5', '.form_wrapper  #field_3_23']
      hiddenField.forEach(elmt => {
        document.querySelector(elmt).classList.add("hide")
      })

      if (document.querySelector('.form_wrapper #field_3_18').getAttribute("data-conditional-logic") == "visible") {
        document.querySelector('.form_wrapper #field_3_18').classList.add("hide")
      }
      const checkingFields = ['.form_wrapper  #input_3_15', '.form_wrapper  #input_3_16', '.form_wrapper  #input_3_2', '.form_wrapper  #input_3_4'];

      const checkNotEmpty = (inputs, removeError) => {
        let notEmpty = true;
        inputs.forEach(elmt => {
          if (document.querySelector(elmt).value == "")
            notEmpty = false;
        })
        if (notEmpty) {
          hiddenField.forEach(elmt => {
            document.querySelector(elmt).classList.remove("hide")
          })
          if (document.querySelector('.form_wrapper #field_3_18').getAttribute("data-conditional-logic") == "visible") {
            document.querySelector('.form_wrapper #field_3_18').classList.remove("hide")
          }
          if (removeError == "yes") {
            if (document.querySelector('#input_3_5').closest('.gfield').querySelector('.gfield_validation_message')) {
              document.querySelector('#input_3_5').closest('.gfield').querySelector('.gfield_validation_message').remove();
            }
            if (document.querySelector('#input_3_23').closest('.gfield').querySelector('.gfield_validation_message')) {
              document.querySelector('#input_3_23').closest('.gfield').querySelector('.gfield_validation_message').remove();
            }
            if (document.querySelector('#input_3_18').closest('.gfield').querySelector('.gfield_validation_message')) {
              document.querySelector('#input_3_18').closest('.gfield').querySelector('.gfield_validation_message').remove();
            }
          }

        }
      }
      checkingFields.forEach(elemt => {
        document.querySelector(elemt).addEventListener('keyup', function () {
          checkNotEmpty(checkingFields, "yes")
        })
        document.querySelector(elemt).addEventListener('change', function () {
          checkNotEmpty(checkingFields, "yes")
        })
      })

      checkNotEmpty(checkingFields, "no")
      // Reorder fields
      const field16 = document.querySelector('.form_wrapper #field_3_16');
      const field2 = document.querySelector('.form_wrapper #field_3_2');
      const field9 = document.querySelector('.form_wrapper #field_3_9');
      const footer = document.querySelector('.sgpb-popup-builder-content-6993 .form_wrapper .gform_footer');

      const field6_2 = document.querySelector('.form_wrapper #field_6_2');
      const field18 = document.querySelector('.form_wrapper #field_6_18');
      const footerTwo = document.querySelector('.sgpb-popup-builder-content-6998 .form_wrapper .gform_footer');

      const field15_2 = document.querySelector('.form_wrapper #field_15_2');
      const field15_17 = document.querySelector('.form_wrapper #field_15_17');
      const field15_5 = document.querySelector('.form_wrapper #field_15_5');
      const footerThree = document.querySelector('.sgpb-popup-builder-content-6998 .form_wrapper .gform_footer');

      const field4_2 = document.querySelector('.form_wrapper #field_4_2');
      const field14_18 = document.querySelector('.form_wrapper #field_4_18');
      const footerFour = document.querySelector('.sgpb-popup-builder-content-6959 .form_wrapper .gform_footer');

      if (field16 && field2) field16.after(field2);
      if (field6_2 && field18) field18.after(field6_2);
      if (field15_2 && field15_17) field15_17.after(field15_2);
      if (field15_5 && field15_2) field15_2.after(field15_5);
      if (field4_2 && field14_18) field14_18.after(field4_2);
      if (footer && field9) footer.after(field9);
      if (footerTwo && field15_2) footerTwo.after(field15_2);
      if (footerTwo) {
        footerTwo.insertAdjacentHTML('afterend', `
          <div id="field_3_9" class="gfield gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
          `);
      }
      if (footerThree) {
        footerTwo.insertAdjacentHTML('afterend', `
          <div id="field_3_9" class="gfield gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
          `);
      }
      if (footerFour) {
        footerFour.insertAdjacentHTML('afterend', `
          <div id="field_3_9" class="gfield gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
          `);
      }


      // Input/Select/Textarea focus/blur/change logic
      const allInputs = document.querySelectorAll('.form_wrapper .gform_fields .gfield.gfield_visibility_visible input, .form_wrapper .gform_fields .gfield.gfield_visibility_visible select, .form_wrapper .gform_fields .gfield.gfield_visibility_visible textarea');

      function labelChange(el) {
        const field = el.closest('.gfield');
        if (!field) return;

        if (el.tagName === 'SELECT') {
          const label = field.querySelector('label');
          const selectValue = el.value;

          if (label && selectValue === '') {
            const firstOption = el.querySelector('option');
            if (firstOption) {
              firstOption.innerText = label.innerText;
            }
          }
        }

        if (!el.value) {
          field.classList.remove('active', 'focused');
        } else {
          field.classList.add('active');
          field.classList.remove('focused');
        }
      }

      allInputs.forEach(function (el) {
        el.addEventListener('focus', () => {
          el.closest('.gfield')?.classList.add('active', 'focused');
        });

        el.addEventListener('blur', () => {
          labelChange(el);
        });

        el.addEventListener('change', () => {
          labelChange(el);

          // Reset state field class if hidden
          const stateField = document.querySelector('#field_3_18');
          if (stateField?.style.display === 'none') {
            stateField.classList.remove('active');
          }
        });

        // Initial check
        labelChange(el);
      });

      let x = 0;
      const checkInputInterval = setInterval(function () {
        x++;
        allInputs.forEach(function (el) {
          el.addEventListener('focus', () => {
            el.closest('.gfield')?.classList.add('active', 'focused');
          });

          el.addEventListener('blur', () => {
            labelChange(el);
          });

          el.addEventListener('change', () => {
            labelChange(el);

            // Reset state field class if hidden
            const stateField = document.querySelector('#field_3_18');
            if (stateField?.style.display === 'none') {
              stateField.classList.remove('active');
            }
          });

          // Initial check
          labelChange(el);
        });
        checkNotEmpty(checkingFields, "no")
        if (x > 3) {
          clearInterval(checkInputInterval)
        }
      }, 1000)
    }

    // Call the function to modify the form on page load
    formModification();

    // Call the function to modify the form on gform_post_render event
    jQuery(document).on('gform_post_render', function (event, formId) {
      // Only select the form inside .form_wrapper
      const $heroForm = jQuery('.form_wrapper form#gform_3');

      if ($heroForm.length && !$heroForm.data('modified')) {
        $heroForm.data('modified', true);
        console.log('form rendered');
        formModification();
        const validationMessage = document.querySelector('.form_wrapper .gfield--input-type-email .validation_message');
        if (validationMessage) {
          validationMessage.innerHTML = validationMessage.innerHTML.replace(
            'The email address entered is invalid, please check the formatting (e.g. email@domain.com).',
            'Invalid email format.'
          );
        }
      }
    });

    // 1004 code

    document.querySelector('.hero-title3').classList.add('hero_section');
    document.querySelector('.hero-title3 .container').classList.add('heroContent');
    setTimeout(function () {
      if (document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6993"]')) {
        document.querySelector('.spz_3003 #row1 [href="#sg-popup-id-6993"]').click()
      }
      setTimeout(() => {
        document.querySelector('.heroRight').insertAdjacentElement('afterbegin', document.querySelector('#sgpb-popup-dialog-main-div-wrapper'));
        document.querySelector('body').classList.remove('sgpb-overflow-hidden-body')
        document.querySelector('html').classList.remove('sgpb-overflow-hidden')
      }, 100);
    }, 200);

    // document.querySelector('.heroContent').insertAdjacentElement('afterbegin', document.querySelector('#sgpb-popup-dialog-main-div-wrapper'));
    // document.querySelector('.form_bg').parentElement.classList.add('hero-form-wrapper');
    // document.querySelector('.form_bg').parentElement.classList.remove('col-lg-8', 'col-md-12');
    // document.querySelector('.form_bg').parentElement.parentElement.classList.add('heroRight');
    // document.querySelector('.form_bg').parentElement.parentElement.classList.remove('row');

    document.querySelector('.heroContent').insertAdjacentHTML('afterend', `<div class="container">
          <h3></h3>
          <div class="logo_list">
            <ul>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3003/blackstone-logo_webp.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3003/frame_webp.webp" alt="blackstone" width="136" height="54">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890297/canoeintelligence/1003/icon_7.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1750665289/canoeintelligence/3003/ca_logo.svg" alt="cambridge associates">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890296/canoeintelligence/1003/icon_6.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884540/canoeintelligence/1003/icon_4.svg" alt="hamilton lane">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/prime-quadrant-logo_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/prime-quadrant-logo.svg" alt="prime quadrant">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/provenio-capital_idj2lhoel1_1-1_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/provenio-capital_idj2lhoel1_1-1.svg" alt="provenio capital">
                  </picture>
                </div>
              </li>
              <li>
                <div class="logo_main">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/swancap-logo_1.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748884536/canoeintelligence/1003/swancap-logo.svg" alt="swancap">
                  </picture>
                </div>
              </li>
            </ul>
          </div>
      </div>`);

    if (location.href === 'https://canoeintelligence.com/solutions/') {
      console.log('Solutions page');
      document.querySelector('.heroContent').insertAdjacentHTML('afterbegin', `<div class="heroLeft">
          <h4>Canoe Intelligence</h4>
          <h1>Spend 75% less time on alts administration</h1>
          <ul>
              <li><strong>Document management.</strong> Auto-retrieve investment & tax docs from email inboxes & 500+ GP portals. Auto-categorize. Track in one place.</li>
              <li><strong>Data extraction.</strong> Instantly extract & normalize key data points. Manage cap calls, distributions, fund metrics, and more with AI.</li>
              <li><strong>Insights & reports.</strong> Drill down into each investment. Get exposure and risk analysis. 100% data accuracy. Optimize your investment strategy. </li>
          </ul>
      </div>
      <div class="heroRight"></div>
      `);
      document.querySelector('.heroRight').insertAdjacentHTML('beforeend', `
          <ul>
              <li><strong>Document management.</strong> Auto-retrieve investment & tax docs from email inboxes & 500+ GP portals. Auto-categorize. Track in one place.</li>
              <li><strong>Data extraction.</strong> Instantly extract & normalize key data points. Manage cap calls, distributions, fund metrics, and more with AI.</li>
              <li><strong>Insights & reports.</strong> Drill down into each investment. Get exposure and risk analysis. 100% data accuracy. Optimize your investment strategy. </li>
          </ul>
      `);
      document.querySelector('.heroContent + .container h3').textContent = "Trusted by over 400 clients, from single family offices to large institutions"
    } else if (location.href.includes('solutions/canoe-intelligence/') || location.href.includes('solutions/canoe-connect/') || location.href.includes('solutions/canoe-asset-data/')) {
      document.body.classList.add('canoe_intelligence');
      document.querySelector('.heroContent').insertAdjacentHTML('afterbegin', `<div class="heroLeft">
        <h4>Canoe Intelligence</h4>
        <h1>Cut manual admin 75% by automating alts workflows</h1>
        <ul>
            <li><strong>Document retrieval.</strong>  Auto-retrieve alts docs from inboxes & 500+ GP portals. Track in one place. Get alerts for late & missing docs.</li>
            <li><strong>Data extraction.</strong> Auto-extract, map, and normalize key data. Manage cap calls, distributions, fund metrics, and more.</li>
            <li><strong>Downstream reports.</strong>  Drill down into investments & sync with downstream accounting. Addepar, Fundamatic, Dynamo, etc. </li>
        </ul>
    </div>
    <div class="heroRight"></div>
    `);
      document.querySelector('.heroRight').insertAdjacentHTML('beforeend', `
        <ul>
          <li><strong>Document retrieval.</strong>  Auto-retrieve alts docs from inboxes & 500+ GP portals. Track in one place. Get alerts for late & missing docs.</li>
          <li><strong>Data extraction.</strong> Auto-extract, map, and normalize key data. Manage cap calls, distributions, fund metrics, and more.</li>
          <li><strong>Downstream reports.</strong>  Drill down into investments & sync with downstream accounting. Addepar, Fundamatic, Dynamo, etc. </li>
        </ul>
    `);
      document.querySelector('.heroContent + .container h3').textContent = "Join 400+ investors & advisors streamlining alts management"
    } 

    window.addEventListener('click', function (e) {
      if (e.target.classList.contains('form_navDemo')) {
        console.log('Demo clicked');
        e.preventDefault();
        document.querySelectorAll('.form_wrapper .form_navDemo').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.form_wrapper .form_navBrochure').forEach(el => el.classList.remove('active'));
        document.querySelector('#sg-popup-content-wrapper-6993').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'block';
        if (location.href.includes('solutions/canoe-intelligence/')) {
          document.querySelector('#sg-popup-content-wrapper-6998').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }
        if (location.href.includes('solutions/canoe-connect/')) {
          document.querySelector('#sg-popup-content-wrapper-7500').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }
        if (location.href.includes('solutions/canoe-asset-data/')) {
          document.querySelector('#sg-popup-content-wrapper-6959').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
        }
      }
      if (e.target.classList.contains('form_navBrochure')) {
        console.log('Brochure clicked');
        e.preventDefault();
        document.querySelectorAll('.form_wrapper .form_navBrochure').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.form_wrapper .form_navDemo').forEach(el => el.classList.remove('active'));
        if (location.href.includes('solutions/canoe-intelligence/')) {
          document.querySelector('#sg-popup-content-wrapper-6998').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'block';
        }
        if (location.href.includes('solutions/canoe-connect/')) {
          document.querySelector('#sg-popup-content-wrapper-7500').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'block';
        }
        if (location.href.includes('solutions/canoe-asset-data/')) {
          document.querySelector('#sg-popup-content-wrapper-6959').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'block';
        }
        document.querySelector('#sg-popup-content-wrapper-6993').closest('.sgpb-popup-dialog-main-div-wrapper').style.display = 'none';
      }
    });

  }
  setTimeout(function () {
    clearInterval(bodyInterval3001);
  }, 5000)
}
const bodyInterval3001 = setInterval(spz3003, 10);


(function () {

  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  const expName = '3003'; //experiment name should be #1001, #1002, #1003 etc.
  const variantName = `#` + expName + `_spz_var`; //variantName should be _V1, _V2, _TC etc.
  const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com

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
      document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
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
    var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

    if (!ExistingExperimentName) {

      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {

      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {

      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');

      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;

      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }
}());
