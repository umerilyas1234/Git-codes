var testID = '4007',
	testClass = 'spz_t' + testID;
var uiTestLoaded = false;
var bodyInterval = setInterval(function () {
	if (document.querySelector('body')) {
		clearInterval(bodyInterval)
		if (!document.querySelector('body').classList.contains(testClass)) {
			document.querySelector('body').classList.add(testClass);
			load4002Test();
		}
	}
})
function load4002Test() {
	console.log('Code running');
	//#4005 changes
	document.querySelector('.spz_t4007 .sb-hero-section').insertAdjacentHTML('afterbegin', `<div class="logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1712934647/shipbob/4005/main_logo_2.svg" alt="Shipbob"></div>`)

	var logoInterval = setInterval(function () {
		if (document.querySelector('.spz_t4007 .sb-hero-section div.logo img')) {
			clearInterval(logoInterval)
			document.querySelector('.spz_t4007 .sb-hero-section div.logo img').addEventListener('click', function () {
				window.location.href = 'https://www.shipbob.com';
			})
			document.querySelector('.spz_t4007 .logo-container svg').addEventListener('click', function () {
				window.location.href = 'https://www.shipbob.com';
			})
		}
	})

	// Phone field country flag setup
	// Dynamically load the required scripts and styles
	function loadScript(src, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src;
		script.onload = callback;
		document.head.appendChild(script);
	}

	function loadStylesheet(href, callback) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		link.onload = callback;
		document.head.appendChild(link);
	}

	var phoneInterval = setInterval(function () {
		if (document.querySelector('.spz_t4007 .hs-form-field.hs-phone input.hs-input')) {
			clearInterval(phoneInterval);
			if (document.querySelector(".form-card .hs-main-font-element p")) {
				document.querySelector(".form-card .hs-main-font-element p").innerHTML = `A fullfillment expert will get back to you shortly. <span style="text-decoration: underline;"><a href="https://www.shipbob.com/privacy-policy/website-interacting/" rel="noopener" target="_blank">Privacy policy</a></span>`;
			}
			// Load intlTelInput library
			loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js', function () {
				// Load intlTelInput styles
				loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css', function () {
					// Phone Field Control Bug correction
					var countryDropdown = document.querySelector('.spz_t4007 .hs-form-field.hs-phone input.hs-input')
					var countrySelect = document.querySelector('.spz_t4007 .hs-form .hs-field-phone select');
					var iti = window.intlTelInput(countryDropdown, {
						showSelectedDialCode: true,
						utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@20.3.0/build/js/utils.js",
						dropdownContainer: document.querySelector('.hs-input.hs-fieldtype-intl-phone'),
					});
					iti.isMobile = false;

					countryDropdown.addEventListener('countrychange', function () {
						console.log("Country changed");
						// Capitalize the iso2 value
						var capitalizedIso2 = iti.getSelectedCountryData().iso2.toUpperCase();
						console.log(capitalizedIso2);

						// Find the option with the capitalized iso2 value and select it
						var optionToSelect = countrySelect.querySelector('option[value="' + capitalizedIso2 + '"]');
						if (optionToSelect) {
							optionToSelect.selected = true;
							var event = new Event('change', { bubbles: true });
							countrySelect.dispatchEvent(event); // Trigger the change event manually on the select element
						}
					});
				})
			})
		}
	})


	// 4002 test changes 
	document.querySelector(".sb-hero-section .sb-hero-section-form-container").setAttribute("id", "event_hero");

	document.querySelector('.spz_t4007 .section-stats-container ul li:first-child .stat-copy').textContent = 'Of orders ship on time'
	var footerTextElement = document.querySelector(".footer_section p");
	if (footerTextElement) {
		var footerText = footerTextElement.textContent;
		var updatedText = footerText.replace(/2023/g, "2024");
		footerTextElement.textContent = updatedText;
	}
	setTimeout(() => {
		document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_name__c"]').value = "#4007 | ShipBob | One LP | Review Ribbon";
		document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_treatment__c"]').value = "True Control";
	}, 5000);
	var isOnceperseession = localStorage.getItem("Onceperseession");
	if (!isOnceperseession) {

		const elements = document.querySelectorAll('.row-number-6, .row-number-7, .row-number-8, .row-number-9, .row-number-10, .row-number-13');
		elements.forEach(element => {
			element.classList.add('first_hide');
		});
		document.querySelector('.spz_t4007 .row-number-3.dnd-section .client-logo').insertAdjacentHTML('beforeEnd', `<div class="lock-herowrap">
             <div class="lock-hero"><p>Learn more</p><img src="//res.cloudinary.com/spiralyze/image/upload/v1701858348/shipbob/4002/chevrons-down.svg" alt="chevrons-down">
         </div></div>`);
		document.querySelector('body').classList.add('page-locked');
	}

	// page unlock 
	$('.lock-herowrap .lock-hero').on('click', function () {
		$(this).hide()
		$('body').removeClass('page-locked');
		// scroll to the next section 
		scrollToSection('.shipbob_service_section');
		// refresh the slider 
		const elements = document.querySelectorAll('row-number-6, .row-number-7, .row-number-8, .row-number-9, .row-number-10, .row-number-13');
		elements.forEach(element => {
			element.classList.remove('first_hide');
		});
		// scroll to the next section 
		scrollToSection('.listing_services_heading_wrap');
		scrollToSection('.section-feature-accordion');
		$('.customer_slider').slick('refresh');

		// set localstorage value true 
		localStorage.setItem("Onceperseession", "true");
	});

	function scrollToSection(sectionclass) {
		const section = document.querySelector(sectionclass);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	var shipFieldInterval = setInterval(function () {
		if (document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist')) {
			clearInterval(shipFieldInterval)
			document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist label').innerHTML = "Shipments / month"
			document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist option:first-child').innerHTML = "Shipments / month"
			document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist select').setAttribute('placeholder', "Shipments / month")
		}
	})
	const selectInterval = setInterval(function () {
		if (document.querySelectorAll('.spz_t4007 .hs-form-field input.hs-input, .spz_t4007 .hs-form-field select.hs-input').length > 1) {
			clearInterval(selectInterval)

			document.querySelectorAll('.spz_t4007 .hs-form-field input, .spz_t4007 .hs-form-field select').forEach(field => {
				if (field.value != "") {
					field.closest('.hs-form-field').classList.add('filled')
				}
			})

			// Input States 
			document.querySelector('.spz_t4007 .hs-form-field.hs_phone').classList.add("active", "filled")
			document.querySelector('.spz_t4007 .hs-form-field.hs_phone input').setAttribute('autocomplete', 'off')
			const inputs = document.querySelectorAll('.spz_t4007 .hs-form-field input.hs-input, .spz_t4007 .hs-form-field select.hs-input');
			inputs.forEach(input => {
				input.addEventListener('focus', function () {
					this.closest('.hs-form-field').classList.add('active');
					this.closest('.hs-form-field').classList.add('typing');

				});
				input.addEventListener('blur', function () {
					this.closest('.hs-form-field').classList.remove('typing');
					if (this.tagName.toLowerCase() === 'select' && this.id.indexOf('phone_ext') == -1) {
						if (!this.value) {
							this.closest('.hs-form-field').classList.remove('active');
						}
					}
					if (this.value) {
						this.closest('.hs-form-field').classList.add('filled');
					} else {
						this.closest('.hs-form-field').classList.remove('filled');
					}
					if (input.classList.contains('invalid')) {
						input.closest('.hs-form-field').classList.add('error');
					} else {
						input.closest('.hs-form-field').classList.remove('error');
					}
				});
				input.addEventListener('keyup', function () {
					if (this.value) {
						this.closest('.hs-form-field').classList.add('filled');
					} else {
						this.closest('.hs-form-field').classList.remove('filled');
					}
				});
				input.addEventListener('change', function () {
					if (input.tagName.toLowerCase() === 'select' && this.id.indexOf('phone_ext') == -1) {
						if (!input.value) {
							input.closest('.hs-form-field').classList.remove('active');
						}
					}
					if (this.value) {
						this.closest('.hs-form-field').classList.add('filled');
					} else {
						this.closest('.hs-form-field').classList.remove('filled');
					}
				});
			});

			var labelInterval = setInterval(function () {
				if (document.querySelector('.hs-form-field.hs_ib_picklist_eecommerce_platform')) {
					clearInterval(labelInterval)
					const selectBoxes = document.querySelectorAll('.hs-form-field select.hs-input')
					selectBoxes.forEach(selectBox => {
						selectBox.querySelector('option:first-child').innerHTML = ""
						selectBox.setAttribute('placeholder', '')
					})
					document.querySelector('.hs-form-field.hs_ib_picklist_eecommerce_platform label').innerHTML = "Ecommerce platform"
					document.querySelector('.hs_ib_shipments_per_month_picklist label').innerHTML = "Shipments / month"
				}
			})
		}
	}, 10)
}