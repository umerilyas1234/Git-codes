var testID = '4002',
	testClass = 'spz_t' + testID;
var uiTestLoaded = false;
var formTestLoaded = false;
if (!document.querySelector('body').classList.contains(testClass)) {
	document.querySelector('body').classList.add(testClass);
	window.addEventListener('message', event => {
	    loadUiTest();
        switch(event.data.eventName) {
            case 'onFormReady':
              loadFormTest();
              onFormFailedValidation();
              break;
            case 'onFormFailedValidation':
                onFormFailedValidation();
              break;
            case 'onFormError':
                onFormFailedValidation();
             break;
          }
	});
    loadUiTest();
    loadFormTest();
}
function loadUiTest() {
    if (uiTestLoaded || !document.querySelector('#event_hero')) return;
    uiTestLoaded = true;
    console.log('run UI function');
    document.querySelector('.event_hero_section .hero_content_box h1').insertAdjacentHTML('beforebegin',`<a class="logo" href="https://www.shipbob.com/">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701803281/shipbob/4001/main_logo.svg" alt="Shipbob Logo">
    </a>`);
    document.querySelector('.spz_t4002 .event_hero_section .hero_content_box h1').textContent = "Do it all with one fulfillment partner";
    // hero-section changes 
	document.querySelector('.spz_t4002 .hero_content_boxContent').insertAdjacentHTML('afterend', `<div class="baseline-wrap">
    <ul class="baseline-points">
        <li><b>Omnichannel.</b> Fulfill DTC and B2B orders on all ecommerce platforms, marketplaces, social media apps, and EDI retailers.</li>
        <li><b>Global expansion.</b> Fulfillment centers across the US, Canada, the UK, EU, and Australia for cross-border scalability.</li>
        <li><b>Customer experience.</b> Create memorable unboxing experiences. 2-day shipping across the continental US.</li>
    </ul> 
    </div>`);
    
    // tablet/mob bullets
    document.querySelector('.hero_form_box_wrap').insertAdjacentHTML('afterend', `<div class="tab-mob baseline-wrap">
    <ul class="baseline-points">
        <li><b>Omnichannel.</b> Fulfill DTC and B2B orders on all ecommerce platforms, marketplaces, social media apps, and EDI retailers.</li>
        <li><b>Global expansion.</b> Fulfillment centers across the US, Canada, the UK, EU, and Australia for cross-border scalability.</li>
        <li><b>Customer experience.</b> Create memorable unboxing experiences. 2-day shipping across the continental US.</li>
    </ul> 
    </div>`);
    // baseline text 
    document.querySelector('.event_hero_section .baseline-wrap').insertAdjacentHTML('afterend',`<div class="client-testinomial">
        <div class="author-info">
                <div class="img-wrap"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4001/frame_1171275230.webp" alt="Courtney Lee"></div>
                <div class="author-details">
                    <p class="author-name">Courtney Lee</p>
                    <p class="author-designation">Founder of Prymal</p>
                </div>
            </div>
        <p class="author-para">
            “We reduced our fulfillment costs by 10% and reinvested that into other parts of the business.”
        </p>
    </div>`)
            
    // Form blue Arrow 
    document.querySelector('.hero_content_box .down_arrow img').setAttribute('src','//res.cloudinary.com/spiralyze/image/upload/v1701803281/shipbob/4001/arrow.svg')
    
    // client logo 
    document.querySelector('.shipbob_service_section.milestone_section').insertAdjacentHTML('beforebegin',`<div class="client-logo-section">
        <div class="client-logo">
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/1001/logo-01_1.webp" alt="Spike Ball">
                </div>
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1704986257/shipbob/4001/logo-02_2.webp" alt="dossier">
                </div>
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/1001/logo-03_1.webp" alt="The adventure Challenge">
                </div>
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/1001/logo-04_1.webp" alt="T2">
                </div>  
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/1001/logo-06_1.webp" alt="PetLab Co.">
                </div>
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/1001/logo-05_1.webp" alt="Chamberlain Coffee">
                </div>
                <div class="img-wrap">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4001/logo-07.webp" alt="100 Thieves">
                </div>
            </div>
    </div>`);
    document.querySelector('.shipbob_service_section.milestone_section .row').insertAdjacentHTML('afterbegin',`<div class="col-lg-3 col-sm-6">
        <div class="shipbob_service_box">
            <div class="shipbob_service_boxContent">
                <h3>99.96%</h3>
                <h6>Of orders ship <br>on time</h6>
                <p>within SLA</p>
            </div>
        </div>
    </div>`);
    // shipbob_service_section text updates 
    document.querySelector('.shipbob_service_section.milestone_section .row .col-lg-3:nth-child(4) .shipbob_service_boxContent h6').textContent = "Fulfillment centers";
    document.querySelector('.shipbob_service_section.milestone_section .row .col-lg-3:nth-child(4) .shipbob_service_boxContent p').textContent = "across 6 countries";
    document.querySelector('.shipbob_service_section.milestone_section .row .col-lg-3:nth-child(5) .shipbob_service_boxContent h6').textContent = "Best fulfillment technology";
    
    // CUSTOMER STORIES Improvement 
    document.querySelector('.customer_box:nth-child(2) .customer_content h3 span').append('.');
    // footer year improvment 
    document.querySelector('.footer_section p').innerHTML = "© 2024 ShipBob, Inc. All Rights Reserved. 120 N Racine Ave. Suite 100 Chicago, IL 60607";
     // 4002 test changes 
     var isOnceperseession = localStorage.getItem("Onceperseession");
     if (!isOnceperseession) {
 
         document.querySelector('.spz_t4002 .client-logo-section').insertAdjacentHTML('beforeEnd',`<div class="lock-herowrap">
             <div class="lock-hero"><p>Learn more</p><img src="//res.cloudinary.com/spiralyze/image/upload/v1701858348/shipbob/4002/chevrons-down.svg" alt="chevrons-down">
         </div></div>`);
 
         document.querySelector('body').classList.add('page-locked');
     }
 
     // page unlock 
     $('.lock-herowrap .lock-hero').on('click',function() {
         $('body').removeClass('page-locked');
        // scroll to the next section 
        scrollToSection('.shipbob_service_section');
        // refresh the slider 
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
 
}
function loadFormTest() {
    if (formTestLoaded || !document.querySelector('#event_hero .hero_form_box form')) return;
    formTestLoaded = true;
    // Check field value on load 
    document.querySelectorAll('#event_hero .hs-form-field input.hs-input, #event_hero .hs-form-field select.hs-input').forEach(e => {
        // console.log(e, '::::::::::::::::');
        if (e.value) {
            e.closest('.hs-form-field').classList.add('active');
            e.closest('.hs-form-field').classList.add('filled');
        }
    });
	// Form changes 
	document.querySelector('#event_hero .hs-firstname label span').textContent = "First name";
	document.querySelector('#event_hero .hs_lastname label span').textContent = "Last name";
	document.querySelector('#event_hero .hs_email label span').textContent = "Email";
	document.querySelector('#event_hero .hs_phone  label span').textContent = "Phone";
	document.querySelector('#event_hero .hs_company  label span').textContent = "Company name";
	document.querySelector('#event_hero .hs_ib_picklist_eecommerce_platform label span').textContent = "Ecommerce platform";
	document.querySelector('#event_hero .hs_ib_shipments_per_month_picklist label span').textContent = "Shipments / month";
	document.querySelector('#event_hero .hs_website span').textContent = "Company website";
    // document.querySelector('.hs-richtext.hs-main-font-element h3 span').textContent = "Get 3PL fulfillment pricing";
    document.querySelector('#event_hero .hero_form_box_wrap .hero_form_box>h2 span').textContent = "Get 3PL fulfillment pricing";
    // remove placeholder 
    const hsInputs = document.querySelectorAll('.hero_section .input .hs-input');
    hsInputs.forEach(input => {
        if (input.hasAttribute('id')) {
            input.removeAttribute('placeholder');
        }
    });
	// tab Index
	document.querySelector('#event_hero .hs_firstname input').setAttribute("tabindex", "1");
	document.querySelector('#event_hero .hs_lastname input').setAttribute("tabindex", "2");
	document.querySelector('#event_hero .hs_email input').setAttribute("tabindex", "3");
	document.querySelector('#event_hero .hs_company input').setAttribute("tabindex", "4");
	document.querySelector('#event_hero .hs_ib_picklist_eecommerce_platform select').setAttribute("tabindex", "5");
	document.querySelector('#event_hero .hs_ib_shipments_per_month_picklist select').setAttribute("tabindex", "6");
	document.querySelector('#event_hero .hs_phone input').setAttribute("tabindex", "7");
	document.querySelector('#event_hero .hs_website input').setAttribute("tabindex", "8");
	// dummny CTA for form 
	if (!document.querySelector('#event_hero .actions .cta')) {
		document.querySelector('#event_hero .hs_submit .actions').insertAdjacentHTML('beforeend', `<button class="cta">Submit</button>`)
	}
	// cta click 
	document.querySelector('#event_hero .hs_submit .cta').addEventListener('click', function () {
		document.querySelector(' #event_hero .hs_submit .actions .hs-button').click();
	});
	// Input States 
	const inputs = document.querySelectorAll('#event_hero .hs-form-field input.hs-input, #event_hero .hs-form-field select.hs-input');
	inputs.forEach(input => {
		input.addEventListener('focus', function () {
			this.closest('.hs-form-field').classList.add('active');
			this.closest('.hs-form-field').classList.add('typing');
       
		});
		input.addEventListener('blur', function () {
			this.closest('.hs-form-field').classList.remove('typing');
            
			if (this.value) {
				this.closest('.hs-form-field').classList.add('filled');
			} else {
				this.closest('.hs-form-field').classList.remove('filled');
			}
            // Here setTimeout is added to sync with invalid add/removeclass 
            setTimeout(() => {
                onFormFailedValidation();
                console.log('blurrrrrr');
            }, 100);
            // var emailInput = document.querySelector('#event_hero input[name="email"]');
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
			onFormFailedValidation();
            console.log('Key up');
		});
		input.addEventListener('change', function () {
	
			if (this.value) {
				this.closest('.hs-form-field').classList.add('filled');
			} else {
				this.closest('.hs-form-field').classList.remove('filled');
			}
			onFormFailedValidation();
            console.log('Changeeee');
		});
        
    });
	   // Hidden fields 
    document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_name__c"]').value = "#4004 | ShipBob | Quote LP | Below the Fold ";
    document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_treatment__c"]').value = "Variation 1";
    // empty select's placeholder 
    document.querySelector('#event_hero .input select[name="ib_picklist_eecommerce_platform"] option[disabled]').textContent = '';
    document.querySelector('#event_hero .input select[name="ib_shipments_per_month_picklist"] option[disabled]').textContent = '';
    // form field order
    document.querySelector('#event_hero .hs_email').insertAdjacentElement('afterend', document.querySelector('.hs_company'))
    document.querySelector('#event_hero .hs_website').insertAdjacentElement('beforebegin', document.querySelector('.hs_phone'));
    // privacy policy 
    if(!document.querySelector('#event_hero .policy-text')) {
        document.querySelector('#event_hero .hs-submit').insertAdjacentHTML('afterend',`<div class="policy-wrap"><p class="policy-text">A fulfillment expert will get back to you shortly. </p>
        <a href="https://www.shipbob.com/privacy-policy/website-interacting/" rel="noopener" target="_blank"> Privacy policy</a></div>`);
    }
	// Phone field country flag setup
    // Dynamically load the required scripts and styles
	function loadScript(src, callback){
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = src;
	    script.onload = callback;
	    document.head.appendChild(script);
	}
	
	function loadStylesheet(href, callback){
	    var link = document.createElement('link');
	    link.rel = 'stylesheet';
	    link.href = href;
	    link.onload = callback;
	    document.head.appendChild(link);
	}
	
	// Load intlTelInput library
	loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js', function(){
	    // Load intlTelInput styles
	    loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css', function(){
	        // Initialize intlTelInput on the countryDropdown select element
	        var countryDropdown = document.querySelector('.hs-form-field.hs-phone input');
	        var countrySelect = document.querySelector('.hs-form-field.hs-phone select');
	        var iti = window.intlTelInput(countryDropdown, {
	            showSelectedDialCode: true,
	            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
	            dropdownContainer: document.querySelector('.hs-input.hs-fieldtype-intl-phone'),
	        });
	        iti.isMobile= false;
	        
	        var phoneValue = 
	        countryDropdown.addEventListener("blur", function(){
	        	
	        })
	        
	        countryDropdown.addEventListener('countrychange', function() {
	            // Capitalize the iso2 value
	            var capitalizedIso2 = iti.getSelectedCountryData().iso2.toUpperCase();
	
	            // Find the option with the capitalized iso2 value and select it
	            var optionToSelect = countrySelect.querySelector('option[value="' + capitalizedIso2 + '"]');
	            if (optionToSelect) {
	                optionToSelect.selected = true;
	                var event = new Event('change', { bubbles: true });
                	countrySelect.dispatchEvent(event);
	            }
	        });
	    });
    });
}
function onFormFailedValidation() {
    const inputs = document.querySelectorAll('#event_hero .hs-form-field input, #event_hero .hs-form-field select');
    inputs.forEach(input => {
        if (input.classList.contains('invalid')) {
            input.closest('.hs-form-field').classList.add('error');
        } else {
            input.closest('.hs-form-field').classList.remove('error');
        }
    });
    const phonefield = document.querySelector('#event_hero input[type="tel"]');
    if (phonefield.classList.contains('invalid')) {
        phonefield.closest('.hs-form-field').classList.add('error');
        phonefield.closest('.hs-form-field').classList.remove('filled');
    }
    
    const phoneValuefield = document.querySelector('#event_hero input[name="phone"]');
    if (phoneValuefield.value.length > 0) {
        phoneValuefield.closest('.hs-form-field').classList.add('filled');
    }
    document.querySelector('#event_hero .hs_email').addEventListener('click', function () {
        //Here setTimeout is added to sync email field changes (detect invalid add/removeclass) 
        setTimeout(function(){
            var emailInput = document.querySelector('#event_hero input[name="email"]');
    
            if (emailInput.classList.contains('invalid')) {
                emailInput.closest('.hs-form-field').classList.add('error');
            } else {
                emailInput.closest('.hs-form-field').classList.remove('error');
            }
        }, 1500); 
    });
    
}