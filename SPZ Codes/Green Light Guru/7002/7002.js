function spz3007() {
	if (!$('body').hasClass('spz_7002_v1')) {
		$('body').addClass('spz_7002_v1');


		$('.has-intro').closest('.hs_cos_wrapper').before(`
<div class="spz_hero">
  <div class="thank_youtBar">
    <div class="spz_container">
      <div class="spz_thankYouContent">
        <h3><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/7002/sent_webp_1.webp" alt="Thank you"> thank you!</h2>
        <p>Check your inbox for the material you requested</p>
      </div>
    </div>
  </div>
  <div class="spz_container">
    <div class="spz_heroInner">
      <div class="spz_heroLeft">
        <div class="spz_content">
          <h2>Looking to learn more?</h2>
          <p>See how to improve speed and compliance across the entire medical device lifecycle</p>
          <ul>
            <li>
              <p><strong>Medtech eQMS:</strong> Automate training, CAPAs, approvals, and document control - so your team
                stays audit-ready without getting buried in busywork.</p>
            </li>
            <li>
              <p><strong>Product + Quality:</strong> Build your design history file as you build your product - with
                connected design inputs, outputs, reviews, and risk management that keeps development moving.</p>
            </li>
            <li>
              <p><strong>Clinical Trial Management:</strong> Run faster, easier clinical trials with a secure platform
                for eConsent, mobile data capture, and real-time visibility into
                study progress.</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="spz_heroRight">
        <div class="spz_form"></div>
      </div>
    </div>
  </div>
</div>
			`)

		// Add and remove classes
		$('.form-wrap').addClass('form-wrapper');
		$('.form-wrapper').removeClass('form-wrap');

		if (window.innerWidth <= 1023) {
			setTimeout(() => {
				$('.spz_form').append($('.form-wrapper'));
			}, 1000);
		} else {
			$('.spz_form').append($('.form-wrapper'));
		}

		// remove and add form title
		$('h2').eq(1).closest('section').parent().hide();
		$('.form-wrapper h2').after(`<div class="form-title">Get a Demo</div>`);

		// HS form rearrange events
		var checkForm = setInterval(() => {
			if ($('main form .hs-button').length > 0) {
				clearInterval(checkForm);
				console.log('form loaded');

				// Move fieldsets
				$('.form-columns-2').before($('.hs_email').closest('fieldset'));
				$('.hs_company').closest('fieldset').before($('.hs_dropdown_country').closest('fieldset'));

				// label changed
				$('.hs_what_describes_your_organization_best_ label > span:first-child').text('Organization Type');
				$('.hs_phone label > span:first-child').text('Phone');
				$('.hs_dropdown_country label span:first-child').text('Country');


				// Clear disabled options
				function clearDisabledOptions() {
					$('select option[disabled]').each(function () {
						$(this).text('');
					});
				}
				clearDisabledOptions();

				// Run again whenever a select changes
				$('select').on('change', function () {
					setTimeout(() => {
						// if($('.hs-dependent-field .hs-form-field')) {
						//     $('.hs-dependent-field .hs-form-field:last-child:not(:first-child)').attr('style', 'width: calc(200% + 16px) !important');
						// }
						clearDisabledOptions();
					}, 50);
				});


				// Change button text
				$('main form .hs_submit').append('<button id="buttonSPZ" class="hs-button primary large spz7002_v1">Submit</button>');

				//update hidden country dropdown - when phone extension changes
				const phoneExtSelect = document.querySelector(".form-wrapper .hs-fieldtype-intl-phone select");
				const countrySelect = document.querySelector('.form-wrapper [name="dropdown_country"]');

				if (phoneExtSelect) {
					phoneExtSelect.addEventListener("change", function () {
						const selectedCode = this.value;
						const countryName = countryMap[selectedCode];

						if (!countryName) { return; }

						const optionToSelect = Array.from(countrySelect.options).find(opt => opt.value === countryName);
						if (optionToSelect) {
							countrySelect.value = countryName;
							countrySelect.focus();
							countrySelect.blur();
						}
						else {
							console.log(`No country found for code: ${selectedCode}`);
						}
					});
					setTimeout(() => {
						phoneExtSelect.dispatchEvent(new Event("change"));
					}, 500);

					const countryMap = { "AF": "Afghanistan", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "AD": "Andorra", "AO": "Angola", "AI": "Anguilla", "AG": "Antigua and Barbuda", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BR": "Brazil", "IO": "British Indian Ocean Territory", "VG": "British Virgin Islands", "BN": "Brunei", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "KH": "Cambodia", "CM": "Cameroon", "CA": "Canada", "CV": "Cape Verde", "BQ": "Caribbean Netherlands", "KY": "Cayman Islands", "CF": "Central African Republic", "TD": "Chad", "CL": "Chile", "CN": "China", "CO": "Colombia", "KM": "Comoros", "CD": "Congo, Democratic Republic of the", "CG": "Congo, Republic of the", "CK": "Cook Islands", "CR": "Costa Rica", "CI": "Côte d'Ivoire", "HR": "Croatia", "CU": "Cuba", "CW": "Curaçao", "CY": "Cyprus", "CZ": "Czech Republic", "DK": "Denmark", "DJ": "Djibouti", "DM": "Dominica", "DO": "Dominican Republic", "EC": "Ecuador", "EG": "Egypt", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "ET": "Ethiopia", "FK": "Falkland Islands", "FO": "Faroe Islands", "FJ": "Fiji", "FI": "Finland", "FR": "France", "GF": "French Guiana", "PF": "French Polynesia", "GA": "Gabon", "GM": "Gambia", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GI": "Gibraltar", "GR": "Greece", "GL": "Greenland", "GD": "Grenada", "GP": "Guadeloupe", "GU": "Guam", "GT": "Guatemala", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "HN": "Honduras", "HK": "Hong Kong", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran", "IQ": "Iraq", "IE": "Ireland", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KI": "Kiribati", "XK": "Kosovo", "KW": "Kuwait", "KG": "Kyrgyzstan", "LA": "Laos", "LV": "Latvia", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LI": "Liechtenstein", "LT": "Lithuania", "LU": "Luxembourg", "MO": "Macau", "MK": "Macedonia, Republic of", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "MV": "Maldives", "ML": "Mali", "MT": "Malta", "MH": "Marshall Islands", "MQ": "Martinique", "MR": "Mauritania", "MU": "Mauritius", "MX": "Mexico", "FM": "Micronesia, Federated States of", "MD": "Moldova", "MC": "Monaco", "MN": "Mongolia", "ME": "Montenegro", "MS": "Montserrat", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar", "NA": "Namibia", "NR": "Nauru", "NP": "Nepal", "NL": "Netherlands", "NC": "New Caledonia", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "NU": "Niue", "NF": "Norfolk Island", "KP": "North Korea", "MP": "Northern Mariana Islands", "NO": "Norway", "OM": "Oman", "PK": "Pakistan", "PW": "Palau", "PS": "Palestine", "PA": "Panama", "PG": "Papua New Guinea", "PY": "Paraguay", "PE": "Peru", "PH": "Philippines", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "RE": "Réunion", "RO": "Romania", "RU": "Russia", "RW": "Rwanda", "BL": "Saint Barthélemy", "SH": "Saint Helena", "KN": "Saint Kitts and Nevis", "LC": "Saint Lucia", "MF": "Saint Martin", "PM": "Saint Pierre and Miquelon", "VC": "Saint Vincent and the Grenadines", "WS": "Samoa", "SM": "San Marino", "ST": "Sao Tome and Principe", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "SC": "Seychelles", "SL": "Sierra Leone", "SG": "Singapore", "SX": "Sint Maarten", "SK": "Slovakia", "SI": "Slovenia", "SB": "Solomon Islands", "SO": "Somalia", "ZA": "South Africa", "KR": "South Korea", "SS": "South Sudan", "ES": "Spain", "LK": "Sri Lanka", "SD": "Sudan", "SR": "Suriname", "SZ": "Swaziland", "SE": "Sweden", "CH": "Switzerland", "SY": "Syria", "TW": "Taiwan", "TJ": "Tajikistan", "TZ": "Tanzania", "TH": "Thailand", "TL": "East Timor", "TG": "Togo", "TK": "Tokelau", "TO": "Tonga", "TT": "Trinidad and Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "TC": "Turks and Caicos Islands", "TV": "Tuvalu", "VI": "U.S. Virgin Islands", "UG": "Uganda", "UA": "Ukraine", "AE": "United Arab Emirates", "GB": "United Kingdom", "US": "United States", "UY": "Uruguay", "UZ": "Uzbekistan", "VU": "Vanuatu", "VA": "Vatican City", "VE": "Venezuela", "VN": "Vietnam", "WF": "Wallis and Futuna", "YE": "Yemen", "ZM": "Zambia", "ZW": "Zimbabwe" }
				}

				// focus events
				const inputSelector = 'input.hs-input, select.hs-input';
				function updateAll() {
					// setTimeout(() => {
					$(inputSelector).each(function () {
						const v = $(this).val();
						const $f = $(this).closest('.hs-form-field');
						if (v === '' || v == null) {
							$f.removeClass('focus typing');
						} else {
							$f.addClass('focus').removeClass('typing');
						}
					});
					// }, 50);
				}

				// Delegated events so new elements also work
				$(document).on('focus', inputSelector, function () {
					$(this).closest('.hs-form-field').addClass('focus typing');
				}).on('blur change input', inputSelector, updateAll);

				// Initialize already present fields after page load
				setTimeout(() => {
					$(inputSelector).each(function () {
						if ($(this).val() !== '' && $(this).val() != null) {
							$(this).closest('.hs-form-field').addClass('focus');
						}
					});

					// hide dependent fields wrapper if hidden
					$('.hs-dependent-field').each(function () {
						var $fields = $(this).find('.hs-form-field');
						var allHidden = $fields.length && $fields.filter(function () {
							return $(this).find('.hbspt-hide-field').length > 0;
						}).length === $fields.length;

						if (allHidden) {
							$(this).closest('fieldset').addClass('row-hidden');
						}
					});
				}, 500);

				$(document).on('click', '#buttonSPZ', function (e) {
					e.preventDefault();
					// Perform form submission or validation here
					$(this).closest('.hs_submit').find('input[type="submit"]').trigger('click');
				});
			}
		}, 100);

	}
}
spz3007();


(function () {
	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

	// Set the value of squeezePage variable as per your requirement:
	// true: if you are using squeeze page (If page has form)
	// false: if you are not using squeeze page (If page does not have form)
	// 'both': if you want to set cookie as well as hidden field value (If page has form and you also want to set cookie).

	const squeezePage = true; // true / false / 'both'
	const expName = '7002'; //experiment name should be 1001, 1002, 1003 etc.
	const variantName = `SPZ_#` + expName + `_variant`; //variantName should be _variant, _true_control etc.
	const clientDomain = '.greenlight.guru'; //domain should be .spiralyze.com


	/***********************************
	************************************
	DO NOT TOUCH
	BEYOND THIS LINE
	******************************
	******************************/
	const formHiddenValue = variantName;
	if (squeezePage === true) {
		window.squeezePageValue = formHiddenValue;
	} else if (squeezePage === false) {
		hiddenValue(expName, variantName);
	} else if (squeezePage === 'both') {
		hiddenValue(expName, variantName);
		window.squeezePageValue = formHiddenValue;
	}
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





// Prefill form
/**
 * HubSpot Thank You Page Form Prefilling System
 * 
 * This script handles prefilling thank you page forms with stored cookie values
 * Include this script ONLY on thank you pages
 */

// Cookie utility functions
const CookieManager = {
	// Get cookie value
	getCookie: function(name) {
			const nameEQ = name + "=";
			const ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++) {
					let c = ca[i];
					while (c.charAt(0) === ' ') c = c.substring(1, c.length);
					if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
	},

	// Delete cookie
	deleteCookie: function(name) {
			document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
	}
};

// Dynamic form field handling - no hardcoded field mapping needed

/**
* Prefill thank you page form with stored cookie values
*/
function prefillThankYouPageForm() {
	// Wait for HubSpot form to be fully loaded
	const checkFormLoaded = setInterval(() => {
			const $hubspotForm = $('form[id^="hsForm_"], .hs-form');
			if ($hubspotForm.length > 0) {
					clearInterval(checkFormLoaded);
					applyStoredValues();
			}
	}, 100);

	// Timeout after 10 seconds
	setTimeout(() => {
			clearInterval(checkFormLoaded);
	}, 10000);
}

function applyStoredValues() {
	const storedData = CookieManager.getCookie('hubspot_form_data');
	
	if (!storedData) {
			return;
	}

	try {
			const formData = JSON.parse(storedData);
			let fieldsPrefilled = 0;

			// Find the HubSpot form using jQuery
			const $hubspotForm = $('form[id^="hsForm_"], .hs-form');
			if (!$hubspotForm.length) return;

			// Get all form fields using jQuery
			const $allFields = $hubspotForm.find('input, select, textarea');
			
			$allFields.each(function() {
					const $field = $(this);
					
					// Skip hidden fields and submit buttons
					if ($field.attr('type') === 'hidden' || 
							$field.attr('type') === 'submit' || 
							$field.attr('type') === 'button') {
							return;
					}

					// Get field identifier (name, id, or class)
					let fieldKey = $field.attr('name') || $field.attr('id') || $field.attr('class');
					
					// Clean up the field key to match stored data
					if (fieldKey) {
							const originalKey = fieldKey;
							fieldKey = fieldKey.replace(/^hs_/, '').replace(/[^a-zA-Z0-9_]/g, '_');
							
							// Look for matching stored value
							let storedValue = formData[fieldKey];
							
							// If not found, try alternative field key variations
							if (!storedValue) {
									// Try with hs_ prefix
									storedValue = formData['hs_' + fieldKey];
									if (!storedValue) {
											// Try original key without cleaning
											storedValue = formData[originalKey];
									}
							}
							
							if (storedValue) {
									// Handle different input types
									if ($field.is('select')) {
											// For select elements, find matching option
											const $options = $field.find('option');
											let optionFound = false;
											
											// First try to match by exact value
											$options.each(function() {
													const $option = $(this);
													if ($option.val() === storedValue) {
															$field.val($option.val());
															optionFound = true;
															return false; // break
													}
											});
											
											// If not found by value, try to match by text content
											if (!optionFound) {
													$options.each(function() {
															const $option = $(this);
															if ($option.text().trim().toLowerCase() === storedValue.toLowerCase()) {
																	$field.val($option.val());
																	optionFound = true;
																	return false; // break
															}
													});
											}
											
											// If still not found, try partial text match
											if (!optionFound) {
													$options.each(function() {
															const $option = $(this);
															if ($option.text().trim().toLowerCase().includes(storedValue.toLowerCase()) || 
																	storedValue.toLowerCase().includes($option.text().trim().toLowerCase())) {
																	$field.val($option.val());
																	optionFound = true;
																	return false; // break
															}
													});
											}
											
											// Trigger events only if option was found and set
											if (optionFound) {
													// Trigger change event to ensure HubSpot recognizes the value
													$field.trigger('change').trigger('input');
													fieldsPrefilled++;
											}
									} else {
											// For input/textarea elements, set value directly
											$field.val(storedValue);
											
											// Trigger change event to ensure HubSpot recognizes the value
											$field.trigger('change').trigger('input');
											
											fieldsPrefilled++;
									}
							}
					}
			});

			// Optional: Clear cookies after successful prefill
			// CookieManager.deleteCookie('hubspot_form_data');
			
	} catch (error) {
			// Silent error handling
	}
}

/**
* Clear stored form data from cookies
*/
function clearStoredFormData() {
	CookieManager.deleteCookie('hubspot_form_data');
}

/**
* Debug function to check what's stored in cookies
*/
function debugStoredData() {
	const storedData = CookieManager.getCookie('hubspot_form_data');
	if (storedData) {
			return JSON.parse(storedData);
	}
	return null;
}

// Auto-initialize when DOM is loaded
$(document).ready(function(){
	prefillThankYouPageForm();
})


// Export functions for manual use if needed
window.ThankYouPageForm = {
	prefill: prefillThankYouPageForm,
	clear: clearStoredFormData,
	debug: debugStoredData
};
