var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "https://res.cloudinary.com/spiralyze/raw/upload/v1722853666/procurify/6002/src/styles.css";
if (
  !document.querySelector(
    'link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1722853666/procurify/6002/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode6002() {
  if (!document.querySelector("body").classList.contains("spz_t6002")) {
    document.querySelector("body").classList.add("spz_t6002");

    var paragraph = document.querySelector('.hero .hero__content .list ul li:nth-child(2) p');
    paragraph.innerHTML = paragraph.innerHTML.replace(/procure to pay/g, 'procure-to-pay');    
    setTimeout(() => {
      var footerLogo = document.querySelector('.footer__brand .company__logo');
      if(footerLogo){
        document.querySelector('.footer__secondary .footer__secondary__layout').insertAdjacentElement('afterbegin', footerLogo);
      }
      if(document.querySelector('.footer__secondary .footer__secondary__layout .social-icons-list')){
        document.querySelector('.footer__secondary .footer__secondary__layout .social-icons-list').insertAdjacentHTML('beforebegin', `<div class="footer__cta-text">Our social networks</div>`);
      }
      if(document.querySelector('#header .cta__links .cta-link:last-of-type .link-style')){
        document.querySelector('#header .cta__links .cta-link:last-of-type .link-style').href = 'javascript:void(0);';
      }
      if(document.querySelector('.section__cta__links .link-style')){ 
        document.querySelector('.section__cta__links .link-style').href = 'javascript:void(0);';
      }
    } , 1000);
    var demoBtn = document.querySelectorAll('.block__link a');
    demoBtn.forEach(function (btn) {
      btn.textContent = 'Book a demo';
      btn.href = 'javascript:void(0);';
    });

    document.querySelector('.spz_t6002').addEventListener('click', handleBtnlClick);

    function handleBtnlClick(e) {
      console.log('Modal wrap clicked:', e.target.className);
      if (e.target.closest('.block__link') || (e.target.matches('#header .cta__links .cta-link:last-of-type .link-style')) || (e.target.matches('.section__cta__links .link-style'))) {
        document.getElementById('modal_form').scrollIntoView({ behavior: 'smooth' });
      }
    }

    var heroMedia = document.querySelector('.spz_t6002 .hero__media');
    heroMedia.insertAdjacentHTML("afterbegin", `<h4>Book a demo </h4>`);
    jQuery('.spz_t6002 .hero__media h4').after(`<div class="rating">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718369609/procurify/1002/g2_logo.svg" alt="G2 logo" class="g2Logo">
        <div class="reviewWrapper">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1718358985/procurify/1001/Ratestars.svg" alt="Stars Image">
            <div class="review">
                <span>
                    <strong>4.6</strong> (215 reviews)
                </span>
            </div>
        </div>
    </div>`);
    var modalHtml = `<div class="modal_form_wrapper">
      <div id="modal_form" class="modal_form"></div>
      </div>
    </div>`;


    document.querySelector('.hero__content').insertAdjacentHTML('afterend', modalHtml);
    document.querySelector('.modal_form').append(document.querySelector('section.hero .hero__media'));

    jQuery('.spz_t6002 .hero__media > br').after('<span> </span>');


    const formInterval = setInterval(function () {
      if (typeof MktoForms2 !== 'undefined') {
        clearInterval(formInterval);
        MktoForms2.whenReady(function (form) {

          document.querySelector('.spz_t6002 .hero__media').insertAdjacentHTML("beforeend", `<p>By clicking “Submit” you agree to our <a href="https://www.procurify.com/terms/">Terms of use</a> and <a href="https://www.procurify.com/privacy/">Privacy Policy</a></p>`);
          
          // Do not add it in function, as we have to run it only once
          jQuery('.mktoFormRow #Email').closest('.mktoFormRow').addClass('collapsedForm');
          jQuery('.spz_t6002 form#mktoForm_3891').css('opacity', '1');

          // add expanded text field for how did you hear about us
          if (jQuery('#How_Did_You_Find_Us__c').length > 0 && jQuery('#about_us').length == 0) {
            jQuery('#How_Did_You_Find_Us__c').closest('.mktoFormRow').addClass('mktoFindfildRow');
            jQuery('#How_Did_You_Find_Us__c').closest('.mktoFormRow').prepend(`<a href="javascript:;" id="about_us">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2.5V9.5M2.5 6H9.5" stroke="#64AE8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span> How did you hear about us?</a>`);
          }

          // Add Class to form row
          function customFormElements() {
            jQuery('.mktoFormRow .mktoPlaceholderLastName').closest('.mktoFormRow').addClass('mktoLastNameRow');
            jQuery('.mktoFormRow #Phone').closest('.mktoFormRow').addClass('mktoPhoneRow');
            jQuery('.mktoFormRow #diallingCode').closest('.mktoFormCol').addClass('mktoDiallingCodeCol');
            jQuery('.mktoFormRow #Email').closest('.mktoFormRow').addClass('mktoEmailRow');
          }

          // Remove Country First Option
          function removeCountryOptionText() {
            if (jQuery(".spz_t6002 form#mktoForm_3891 #Country option[value='']").length > 0) {
              jQuery(".spz_t6002 form#mktoForm_3891 #Country option[value='']").html('');
            }
          }

          function removePhoneCodeOptionText() {
            if (jQuery(".spz_t6002 form#mktoForm_3891 #diallingCode option[value='']").length > 0) {
              jQuery(".spz_t6002 form#mktoForm_3891 #diallingCode option[value='']").remove();
              jQuery(".spz_t6002 form#mktoForm_3891 #diallingCode option[value='+1']").prop('selected', true);
              jQuery(".spz_t6002 form#mktoForm_3891 #LbldiallingCode").text('US');
            }
          }
          //some changes in fields
          function changesInFields() {
            document.querySelector('.spz_t6002 form#mktoForm_3891 .mktoButtonRow .mktoButton').textContent = 'Submit';
            if (document.querySelector('#mktoForm_3891 .mktoEmailRow .mktoFormCol:nth-of-type(2)')) {
              var firstName = document.querySelector('#mktoForm_3891 .mktoEmailRow .mktoFormCol:nth-of-type(2)');
              document.querySelector('.mktoFormRow #Email').closest('.mktoFormRow').insertAdjacentHTML('afterend', `<div class="mktoFormRow mktoFirstNameRow hidden"></div>`);
              var firstNameDiv = document.querySelector('.mktoFirstNameRow');
              firstNameDiv.insertAdjacentElement("afterbegin", firstName);
            }
            if (document.querySelector('#mktoForm_3891 .mktoLastNameRow .mktoPlaceholderCompany')) {
              var mktoCompany = document.querySelector('#mktoForm_3891 .mktoLastNameRow .mktoPlaceholderCompany');
              document.querySelector('.mktoLastNameRow').insertAdjacentHTML('afterend', `<div class="mktoFormRow mktoCompanyRow hidden"></div>`);
              var companyDiv = document.querySelector('.mktoCompanyRow');
              companyDiv.insertAdjacentElement("afterbegin", mktoCompany);
            }
          }

          function hiddenFieldClass() {

            var i = 0;
            var checkField = setInterval(() => {
              jQuery('body form .mktoFormRow').each(function () {
                if (jQuery(this).find('.mktoPlaceholder').length > 0) {
                  jQuery(this).addClass('hidden');
                } else if (jQuery(this).hasClass('hidden')) {
                  jQuery(this).removeClass('hidden');
                }
              });

              i++;
              if (i == 30) {
                clearInterval(checkField);
              }
            }, 100);
          }

          function selectBoxRow() {
            jQuery('.mktoFormRow select').each(function () {
              jQuery(this).closest('.mktoFormRow').addClass('selectBoxRow');
            });
          }

          function checkValidation() {
            setTimeout(() => {
              jQuery('.spz_t6002 form#mktoForm_3891 .mktoField').each(function () {
                if (jQuery(this).closest('.mktoFieldWrap').find('.mktoError').is(':visible')) {
                  jQuery(this).closest('.mktoFieldWrap').addClass('error');
                } else {
                  jQuery(this).closest('.mktoFieldWrap').removeClass('error');
                }
              });
            }, 100);
          }

          function runAllCondition() {
            customFormElements();
            hiddenFieldClass();
            removeCountryOptionText();
            removePhoneCodeOptionText();
            selectBoxRow();
            checkValidation();
            changesInFields();
          }
          runAllCondition();

          // Mapping of dialling codes to short country names
          const countryCodes = {
            "+1": "US",
            "+52": "MX",
            "+44": "UK",
            "+93": "AF",
            "+355": "AL",
            "+213": "DZ",
            "+1-684": "AS",
            "+376": "AD",
            "+244": "AO",
            "+1-264": "AI",
            "+672": "AQ",
            "+1-268": "AG",
            "+54": "AR",
            "+374": "AM",
            "+297": "AW",
            "+61": "AU",
            "+43": "AT",
            "+994": "AZ",
            "+1-242": "BS",
            "+973": "BH",
            "+880": "BD",
            "+1-246": "BB",
            "+375": "BY",
            "+32": "BE",
            "+501": "BZ",
            "+229": "BJ",
            "+1-441": "BM",
            "+975": "BT",
            "+591": "BO",
            "+387": "BA",
            "+267": "BW",
            "+55": "BR",
            "+246": "IO",
            "+1-284": "VG",
            "+673": "BN",
            "+359": "BG",
            "+226": "BF",
            "+257": "BI",
            "+855": "KH",
            "+237": "CM",
            "+238": "CV",
            "+1-345": "KY",
            "+236": "CF",
            "+235": "TD",
            "+56": "CL",
            "+86": "CN",
            "+61": "CX",
            "+61": "CC",
            "+57": "CO",
            "+269": "KM",
            "+682": "CK",
            "+506": "CR",
            "+385": "HR",
            "+53": "CU",
            "+599": "CW",
            "+357": "CY",
            "+420": "CZ",
            "+243": "CD",
            "+45": "DK",
            "+253": "DJ",
            "+1-767": "DM",
            "+1-809": "DO",
            "+1-829": "DO",
            "+1-849": "DO",
            "+670": "TL",
            "+593": "EC",
            "+20": "EG",
            "+503": "SV",
            "+240": "GQ",
            "+291": "ER",
            "+372": "EE",
            "+251": "ET",
            "+500": "FK",
            "+298": "FO",
            "+679": "FJ",
            "+358": "FI",
            "+33": "FR",
            "+689": "PF",
            "+241": "GA",
            "+220": "GM",
            "+995": "GE",
            "+49": "DE",
            "+233": "GH",
            "+350": "GI",
            "+30": "GR",
            "+299": "GL",
            "+1-473": "GD",
            "+1-671": "GU",
            "+502": "GT",
            "+44-1481": "GG",
            "+224": "GN",
            "+245": "GW",
            "+592": "GY",
            "+509": "HT",
            "+504": "HN",
            "+852": "HK",
            "+36": "HU",
            "+354": "IS",
            "+91": "IN",
            "+62": "ID",
            "+98": "IR",
            "+964": "IQ",
            "+353": "IE",
            "+44-1624": "IM",
            "+972": "IL",
            "+39": "IT",
            "+225": "CI",
            "+1-876": "JM",
            "+81": "JP",
            "+44-1534": "JE",
            "+962": "JO",
            "+7": "KZ",
            "+254": "KE",
            "+686": "KI",
            "+383": "XK",
            "+965": "KW",
            "+996": "KG",
            "+856": "LA",
            "+371": "LV",
            "+961": "LB",
            "+266": "LS",
            "+231": "LR",
            "+218": "LY",
            "+423": "LI",
            "+370": "LT",
            "+352": "LU",
            "+853": "MO",
            "+389": "MK",
            "+261": "MG",
            "+265": "MW",
            "+60": "MY",
            "+960": "MV",
            "+223": "ML",
            "+356": "MT",
            "+692": "MH",
            "+222": "MR",
            "+230": "MU",
            "+262": "YT",
            "+691": "FM",
            "+373": "MD",
            "+377": "MC",
            "+976": "MN",
            "+382": "ME",
            "+1-664": "MS",
            "+212": "MA",
            "+258": "MZ",
            "+95": "MM",
            "+264": "NA",
            "+674": "NR",
            "+977": "NP",
            "+31": "NL",
            "+599": "AN",
            "+687": "NC",
            "+64": "NZ",
            "+505": "NI",
            "+227": "NE",
            "+234": "NG",
            "+683": "NU",
            "+850": "KP",
            "+1-670": "MP",
            "+47": "NO",
            "+968": "OM",
            "+92": "PK",
            "+680": "PW",
            "+970": "PS",
            "+507": "PA",
            "+675": "PG",
            "+595": "PY",
            "+51": "PE",
            "+63": "PH",
            "+64": "PN",
            "+48": "PL",
            "+351": "PT",
            "+1-787": "PR",
            "+1-939": "PR",
            "+974": "QA",
            "+242": "CG",
            "+262": "RE",
            "+40": "RO",
            "+7": "RU",
            "+250": "RW",
            "+590": "BL",
            "+290": "SH",
            "+1-869": "KN",
            "+1-758": "LC",
            "+590": "MF",
            "+508": "PM",
            "+1-784": "VC",
            "+685": "WS",
            "+378": "SM",
            "+239": "ST",
            "+966": "SA",
            "+221": "SN",
            "+381": "RS",
            "+248": "SC",
            "+232": "SL",
            "+65": "SG",
            "+1-721": "SX",
            "+421": "SK",
            "+386": "SI",
            "+677": "SB",
            "+252": "SO",
            "+27": "ZA",
            "+82": "KR",
            "+211": "SS",
            "+34": "ES",
            "+94": "LK",
            "+249": "SD",
            "+597": "SR",
            "+47": "SJ",
            "+268": "SZ",
            "+46": "SE",
            "+41": "CH",
            "+963": "SY",
            "+886": "TW",
            "+992": "TJ",
            "+255": "TZ",
            "+66": "TH",
            "+228": "TG",
            "+690": "TK",
            "+676": "TO",
            "+1-868": "TT",
            "+216": "TN",
            "+90": "TR",
            "+993": "TM",
            "+1-649": "TC",
            "+688": "TV",
            "+1-340": "VI",
            "+256": "UG",
            "+380": "UA",
            "+971": "AE",
            "+598": "UY",
            "+998": "UZ",
            "+678": "VU",
            "+379": "VA",
            "+58": "VE",
            "+84": "VN",
            "+681": "WF",
            "+212": "EH",
            "+967": "YE",
            "+260": "ZM",
            "+263": "ZW"
          };

          function changeCountryCode() {
            var getAttributes = jQuery('#diallingCode').val();
            if (getAttributes in countryCodes) {
              jQuery('#LbldiallingCode').text(countryCodes[getAttributes]);
            }
          }

          jQuery(document).on('focus', '.spz_t6002 form#mktoForm_3891 .mktoField', function () {
            jQuery(this).closest('.mktoFieldWrap').addClass("typing");

          });

          jQuery(document).on('blur', '.spz_t6002 form#mktoForm_3891 .mktoField', function () {
            jQuery(this).closest('.mktoFieldWrap').removeClass("typing");
          });

          jQuery(document).on('focus blur keyup keydown change', '.spz_t6002 form#mktoForm_3891 .mktoField', function () {

            var i = 0;
            var checkField = setInterval(() => {
              jQuery(this).closest('form').find('.mktoField').each(function () {
                var field = jQuery(this);
                field.parent().addClass("focus");
                if (field.val() == '' || field.val() == null) {
                  field.parent().removeClass("focus");
                } else {
                  field.parent().addClass("focus");
                }
              });

              runAllCondition();

              if (jQuery(this).attr('id') == "diallingCode") {
                changeCountryCode();
              }

              // To show entire form
              if (jQuery(this).attr('id') == 'Email' && jQuery(this).hasClass('mktoValid')) {
                setTimeout(() => {
                  var email = jQuery(this).val();
                  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

                  if (emailPattern.test(email)) {
                    jQuery('.mktoFormRow.mktoEmailRow').removeClass('collapsedForm');
                    jQuery('.hero').addClass('hero_two');
                  }
                }, 500);
              }
              // To show entire form end

              i++;
              if (i == 10) {
                clearInterval(checkField);
              }
            }, 100);
          });

          // To show expanded field on click of about us
          jQuery(document).on("click", "#about_us", function () {
            jQuery('#about_us').css('display', 'none');
            jQuery('#about_us + .mktoFormCol').css('display', 'block');
          });

          var selectElement = document.querySelector('#diallingCode');
          if (selectElement) {
            createCustomSelect(selectElement);
          }


          function createCustomSelect(selectElement) {
            var customSelectContainer = document.createElement("div");
            customSelectContainer.classList.add("custom-select-container");
        
            var selectedDiv = document.createElement("div");
            selectedDiv.classList.add("custom-select-selected");
            selectedDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
        
            var itemsDiv = document.createElement("div");
            itemsDiv.classList.add("custom-select-items");
        
            for (var i = 0; i < selectElement.options.length; i++) {
              var itemDiv = document.createElement("div");
              itemDiv.classList.add("custom-select-item");
              itemDiv.innerHTML = selectElement.options[i].innerHTML;
              itemDiv.addEventListener("click", function () {
                selectElement.selectedIndex = Array.from(selectElement.options).findIndex(option => option.innerHTML === this.innerHTML);
                selectedDiv.innerHTML = this.innerHTML;
                itemsDiv.style.display = "none";
              });
              itemsDiv.appendChild(itemDiv);
            }
        
            customSelectContainer.appendChild(selectedDiv);
            customSelectContainer.appendChild(itemsDiv);
            selectElement.parentNode.insertBefore(customSelectContainer, selectElement);
            selectElement.style.display = "none";
        
            selectedDiv.addEventListener("click", function () {
              itemsDiv.style.display = itemsDiv.style.display === "none" ? "block" : "none";
            });
        
            document.addEventListener("click", function (event) {
              if (!customSelectContainer.contains(event.target)) {
                itemsDiv.style.display = "none";
              }
            });
          }

        });
      }
    }, 10);
  }
  // hidden values
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

    if (!ExistingExperimentName) {

      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');

      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;

      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }

  hiddenValue('#6002', '6002_Variant');

  function getCookieForHiddenValue(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  // Variation Hidden Field Name
  var spzHiddenFieldName = setInterval(() => {
    if (document.querySelectorAll('input[name="Spiralyze_Form_Field__c"]').length > 0) {
      clearInterval(spzHiddenFieldName);
      setTimeout(() => {
        document.querySelectorAll('input[name="Spiralyze_Form_Field__c"]')[0].value = getCookieForHiddenValue('ExperimentValue');
      }, 1000);
    }
  }, 100);
  // Variation Hidden Field Name over
}


var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode6002();
  }
}, 100);