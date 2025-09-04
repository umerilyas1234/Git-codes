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

    const formConfigs = {
      'solutions/canoe-intelligence/': { id: '6998', delay: 1400 },
      'solutions/canoe-connect/': { id: '7500', delay: 1400 },
      'solutions/canoe-asset-data/': { id: '6959', delay: 1400 }
    };

    const currentUrl = location.href;
    const matchedPath = Object.keys(formConfigs).find(path => currentUrl.includes(path));

    if (matchedPath) {
      const { id: popupId, delay } = formConfigs[matchedPath];
      const popupWrapperSelector = `#sg-popup-content-wrapper-${popupId} .sgpb-main-html-content-wrapper`;
      const popupWrapper = document.querySelector(popupWrapperSelector);

      if (popupWrapper) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form_wrapper';
        popupWrapper.parentNode.insertBefore(wrapper, popupWrapper);
        wrapper.appendChild(popupWrapper);

        popupWrapper.insertAdjacentHTML('afterbegin', `<h3>Download brochure</h3>`);

        setTimeout(() => {
          const trigger = document.querySelector(`.spz_3003 #row1 [href="#sg-popup-id-${popupId}"]`);
          if (trigger) trigger.click();

          setTimeout(() => {
            const popupDialog = document.querySelector(`#sg-popup-content-wrapper-${popupId}`).closest('#sgpb-popup-dialog-main-div-wrapper');
            document.querySelector('.brochure_formOuter')?.insertAdjacentElement('afterbegin', popupDialog);
            popupDialog.style.display = 'none';
          }, delay);
        }, 500);
      }

      // Add tabbed navigation
      document.querySelectorAll('.form_wrapper .sgpb-main-html-content-wrapper h3').forEach(el => {
        el.insertAdjacentHTML('beforebegin', `
            <div class="form_nav">
              <div class="form_navOuter">
                <div class="form_navItem">
                  <a href="javascript:void(0);" class="form_navDemo active">demo</a>
                </div>
                <div class="form_navItem">
                  <a href="javascript:void(0);" class="form_navBrochure">Brochure</a>
                </div>
              </div>
            </div>
          `);
      });
    }

    // Form visual changes code
    function formModification() {
      // Add Label dynamically
      function toSentenceCase(str) {
        const trimmed = str.trim();
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
      }

      document.querySelectorAll('.form_wrapper .gfield.gfield_visibility_visible:not(.gform_hidden)').forEach(function (el) {
        const label = el.querySelector('label');
        const inputElement = el.querySelector('input, select, textarea');

        if (inputElement && label) {
          let labelText = label.innerText;

          if (labelText.includes('Country / Region')) {
            labelText = 'Country';
          } else if (inputElement.tagName === 'TEXTAREA') {
            labelText = 'Message (optional)';
          }

          const sentenceCasedLabel = toSentenceCase(labelText);
          label.innerText = sentenceCasedLabel;
          inputElement.setAttribute('placeholder', sentenceCasedLabel);
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
      const footerThree = document.querySelector('.sgpb-popup-builder-content-7500 .form_wrapper .gform_footer');

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
        if (!document.querySelector('.sgpb-popup-builder-content-6998 #field_3_9')) {
          footerTwo.insertAdjacentHTML('afterend', `
          <div id="field_3_9" class="gfield gfield_customTwo gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
          `);
        }
      }
      if (footerThree) {
        if (!document.querySelector('.sgpb-popup-builder-content-7500 #field_3_9')) {
          footerThree.insertAdjacentHTML('afterend', `
            <div id="field_3_9" class="gfield gfield_customThree gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
            `);
        }
      }
      if (footerFour) {
        if (!document.querySelector('.sgpb-popup-builder-content-6959 #field_3_9')) {
          footerFour.insertAdjacentHTML('afterend', `
              <div id="field_3_9" class="gfield gfield_customFour gfield--type-html gfield--input-type-html gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">Canoe Intelligence needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</div>
              `);
        }
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
        document.querySelector('.demo_formOuter').insertAdjacentElement('afterbegin', document.querySelector('#sgpb-popup-dialog-main-div-wrapper'));
        document.querySelector('body').classList.remove('sgpb-overflow-hidden-body')
        document.querySelector('html').classList.remove('sgpb-overflow-hidden')
      }, 300);
    }, 300);

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

    if (location.origin === 'https://canoeintelligence.com' &&
      location.pathname === '/solutions/') {
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
      <div class="heroRight">
        <div class="demo_formOuter">

        </div>
        <div class="brochure_formOuter">
          
        </div>
        <ul>
          <li><strong>Document management.</strong> Auto-retrieve investment & tax docs from email inboxes & 500+ GP portals. Auto-categorize. Track in one place.</li>
          <li><strong>Data extraction.</strong> Instantly extract & normalize key data points. Manage cap calls, distributions, fund metrics, and more with AI.</li>
          <li><strong>Insights & reports.</strong> Drill down into each investment. Get exposure and risk analysis. 100% data accuracy. Optimize your investment strategy. </li>
        </ul>
      </div>

      `);
      document.querySelector('.heroContent + .container h3').textContent = "Trusted by over 400 clients, from single family offices to large institutions"
    } else if (location.href.includes('solutions/canoe-intelligence/')) {
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
    <div class="heroRight">
      <div class="demo_formOuter">

      </div>
      <div class="brochure_formOuter">
        
      </div>
      <ul>
        <li><strong>Document retrieval.</strong>  Auto-retrieve alts docs from inboxes & 500+ GP portals. Track in one place. Get alerts for late & missing docs.</li>
        <li><strong>Data extraction.</strong> Auto-extract, map, and normalize key data. Manage cap calls, distributions, fund metrics, and more.</li>
        <li><strong>Downstream reports.</strong>  Drill down into investments & sync with downstream accounting. Addepar, Fundamatic, Dynamo, etc. </li>
      </ul>
    </div>

    `);

      document.querySelector('.heroContent + .container h3').textContent = "Join 400+ investors & advisors streamlining alts management"
    } else if (location.href.includes('solutions/canoe-connect/')) {
      document.body.classList.add('canoe_connect');
      document.querySelector('.heroContent').insertAdjacentHTML('afterbegin', `<div class="heroLeft">
        <h4>Canoe Connect</h4>
        <h1>Streamline alts document retrieval and management</h1>
        <ul>
            <li><strong>Document retrieval.</strong>  Auto-retrieve alts docs from inboxes & 500+ GP portals. PDFs, spreadsheets, etc. Automate secure GP logins.</li>
            <li><strong>Real-time tracking.</strong> Track what’s been collected & what’s still outstanding. Monitor portal connectivity, doc completeness, etc.</li>
            <li><strong> Alerts.</strong>  Get alerts for missing & late documents, connection issues, and more. Include secure links to documents, data, etc.</li>
        </ul>
    </div>
    <div class="heroRight">
      <div class="demo_formOuter">

      </div>
      <div class="brochure_formOuter">
        
      </div>
      <ul>
        <li><strong>Document retrieval.</strong>  Auto-retrieve alts docs from inboxes & 500+ GP portals. PDFs, spreadsheets, etc. Automate secure GP logins.</li>
        <li><strong>Real-time tracking.</strong> Track what’s been collected & what’s still outstanding. Monitor portal connectivity, doc completeness, etc.</li>
        <li><strong> Alerts.</strong>  Get alerts for missing & late documents, connection issues, and more. Include secure links to documents, data, etc.</li>
      </ul>
    </div>

    `);

      document.querySelector('.heroContent + .container h3').textContent = "Join 400+ investors & advisors streamlining alts management"
    } else if (location.href.includes('solutions/canoe-asset-data/')) {
      document.body.classList.add('canoe_assetData');
      document.querySelector('.heroContent').insertAdjacentHTML('afterbegin', `<div class="heroLeft">
        <h4>Canoe Asset Data</h4>
        <h1>Optimize strategy with deep GP insights</h1>
        <ul>
            <li><strong>Data extraction.</strong> Auto-extract, map, and standardize key data from inboxes & 500 GP portals. K-1s, quarterly reports, etc.</li>
            <li><strong>GP insights. </strong> Drill down into holdings, operating metrics, transaction attribution, etc. Validation done for you. </li>
            <li><strong> Downstream reports.</strong> Syncs with Addepar, Fundamatic, Tamarac, Black Diamond, Dynamo, etc. Plus access our open API.</li>
        </ul>
    </div>
    <div class="heroRight">
      <div class="demo_formOuter">

      </div>
      <div class="brochure_formOuter">
        
      </div>
      <ul>
        <li><strong>Data extraction.</strong> Auto-extract, map, and standardize key data from inboxes & 500 GP portals. K-1s, quarterly reports, etc.</li>
        <li><strong>GP insights. </strong> Drill down into holdings, operating metrics, transaction attribution, etc. Validation done for you. </li>
        <li><strong> Downstream reports.</strong> Syncs with Addepar, Fundamatic, Tamarac, Black Diamond, Dynamo, etc. Plus access our open API.</li>
      </ul>
    </div>

    `);
      document.querySelector('.heroContent + .container h3').textContent = "Join 400+ investors & advisors streamlining alts management"
    }

    document.querySelector('.heroContent').insertAdjacentHTML('afterend', `<div class="logo_outer"></div>`);
    document.querySelector('.logo_outer').insertAdjacentElement('beforeend', document.querySelector('.logo_list').closest('.container'));

    function updateFormSelectField() {
      document.querySelectorAll('.form_wrapper select').forEach((el) => {
        el.querySelector('option.gf_placeholder').setAttribute('disabled', 'disabled');
        el.querySelector('option.gf_placeholder').textContent = el.textContent.replace(/\*$/, '').trim();
        el.closest('.gfield').querySelector('label').textContent = el.closest('.gfield').querySelector('label').textContent.replace(/\*$/, '').trim();
      });
      document.querySelectorAll('.form_wrapper input').forEach((el) => {
        const gfield = el.closest('.gfield');
        if (gfield) {
          const label = gfield.querySelector('label');
          if (label) {
            label.textContent = label.textContent.replace(/\*$/, '').trim();
          }
        }
      });

    }
    setTimeout(() => {
      updateFormSelectField();
    }, 200);

    const demoBtn = document.querySelector('.cta-cont .btn-wrap a.btn-fill');
    const brochureBtn = document.querySelector('.cta-cont .btn-wrap a.btn-aurora');
    if (brochureBtn) {
      brochureBtn.insertAdjacentHTML('beforebegin', `
        <a class="btn btn-aurora btn_brochure" href="javascript:void(0);">DOWNLOAD BROCHURE</a>
      `);
    }
    if (demoBtn) {
      demoBtn.insertAdjacentHTML('beforebegin', `
        <a class="btn btn-fill btn_demo" href="javascript:void(0);">GET A DEMO</a>
      `);
    }

    window.addEventListener('click', function (e) {
      console.log('click', e.target);
      const formMap = {
        'solutions/canoe-intelligence/': { brochure: '6998' },
        'solutions/canoe-connect/': { brochure: '7500' },
        'solutions/canoe-asset-data/': { brochure: '6959' }
      };

      const demoId = '6993'; // Common for all
      const currentUrl = location.href;
      const matchedPath = Object.keys(formMap).find(path => currentUrl.includes(path));
      if (!matchedPath) return;
      const brochureId = formMap[matchedPath].brochure;

      function showDemoForm() {
        e.preventDefault();
        document.querySelectorAll('.form_wrapper .form_navDemo').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.form_wrapper .form_navBrochure').forEach(el => el.classList.remove('active'));
        // Show demo, hide brochure
        const demoPopup = document.querySelector(`#sg-popup-content-wrapper-${demoId}`)?.closest('.sgpb-popup-dialog-main-div-wrapper');
        const brochurePopup = document.querySelector(`#sg-popup-content-wrapper-${brochureId}`)?.closest('.sgpb-popup-dialog-main-div-wrapper');
        if (demoPopup) demoPopup.style.display = 'block';
        if (brochurePopup) brochurePopup.style.display = 'none';
      }
      function showBrochureForm() {
        e.preventDefault();
        document.querySelectorAll('.form_wrapper .form_navBrochure').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.form_wrapper .form_navDemo').forEach(el => el.classList.remove('active'));
        // Show brochure, hide demo
        const demoPopup = document.querySelector('.demo_formOuter');
        const brochurePopup = document.querySelector('.brochure_formOuter');
        if (demoPopup) demoPopup.style.display = 'none';
        if (brochurePopup) brochurePopup.style.display = 'block';
      }

      if (e.target.classList.contains('form_navDemo')) {
        showDemoForm();
      }

      if (e.target.classList.contains('form_navBrochure')) {
        showBrochureForm();
      }

      if (e.target.matches('.btn_demo')) {
        showDemoForm();
        document.querySelector('#page')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      if (e.target.matches('.btn_brochure')) {
        showBrochureForm();
        document.querySelector('#page')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
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
