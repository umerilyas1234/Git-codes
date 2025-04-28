var testID = '4007',
	testClass = 'spz_t' + testID;
var uiTestLoaded = false;
var bodyInterval = setInterval(function(){
	if(document.querySelector('body')){
		clearInterval(bodyInterval)
		if (!document.querySelector('body').classList.contains(testClass)) {
			document.querySelector('body').classList.add(testClass);
		    loadUiTest();
		    load4002Test();
		}
	}
})
function load4002Test() {
     console.log('Code running');
     //#4005 changes
     document.querySelector('.spz_t4007 .sb-hero-section').insertAdjacentHTML('afterbegin', `<div class="logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1712934647/shipbob/4005/main_logo_2.svg" alt="Shipbob"></div>`)
     
     var logoInterval = setInterval(function(){
	  	if(document.querySelector('.spz_t4007 .sb-hero-section div.logo img')){
	  		clearInterval(logoInterval)
	  		document.querySelector('.spz_t4007 .sb-hero-section div.logo img').addEventListener('click', function(){
	  			window.location.href = 'https://www.shipbob.com';
	  		})
	  		document.querySelector('.spz_t4007 .logo-container svg').addEventListener('click', function(){
	  			window.location.href = 'https://www.shipbob.com';
	  		})
	  	}
	  })
     
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
		
		var phoneInterval = setInterval(function(){
			if(document.querySelector('.spz_t4007 .hs-form-field.hs-phone input.hs-input')){
				clearInterval(phoneInterval)
				// Load intlTelInput library
				loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js', function(){
					// Load intlTelInput styles
					loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css', function(){
						// Phone Field Control Bug correction
						var countryDropdown = document.querySelector('.spz_t4007 .hs-form-field.hs-phone input.hs-input')
						var countrySelect = document.querySelector('.spz_t4007 .hs-form .hs-field-phone select');
						var iti = window.intlTelInput(countryDropdown, {
							showSelectedDialCode: true,
							utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@20.3.0/build/js/utils.js",
							dropdownContainer: document.querySelector('.hs-input.hs-fieldtype-intl-phone'),
						});
						iti.isMobile = false;
						
						countryDropdown.addEventListener('countrychange', function() {
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
		
      document.querySelector('.spz_t4007 .section-stats-container ul li:first-child .stat-copy').textContent='Of orders ship on time'
	  var footerTextElement = document.querySelector(".footer_section p");
	    if (footerTextElement) {
	      var footerText = footerTextElement.textContent;
	      var updatedText = footerText.replace(/2023/g, "2024");
	      footerTextElement.textContent = updatedText;
	    }
	    setTimeout(() => {
	  document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_name__c"]').value = "#4007 | ShipBob | One LP | Review Ribbon";
	  document.querySelector('#event_hero .hs-form .input .hs-input[name="vwo_test_treatment__c"]').value = "Variation 1";
	    }, 5000);
	  
	  var shipFieldInterval = setInterval(function(){
	  	if(document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist')){
	  		clearInterval(shipFieldInterval)
	  		document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist label').innerHTML = "Shipments / month"
				 document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist option:first-child').innerHTML = "Shipments / month"
				 document.querySelector('.spz_t4007 .hs-form-field.hs_ib_shipments_per_month_picklist select').setAttribute('placeholder', "Shipments / month")	
	  	}
	  })
	  const selectInterval = setInterval(function(){
	    if(document.querySelectorAll('.spz_t4007 .hs-form-field input.hs-input, .spz_t4007 .hs-form-field select.hs-input').length>1){
	      clearInterval(selectInterval)
	      
	      // 4002 test changes 
	      document.querySelector(".sb-hero-section .sb-hero-section-form-container").setAttribute("id", "event_hero");
	      if(document.querySelector(".form-card .hs-main-font-element p")){
	    	document.querySelector(".form-card .hs-main-font-element p").innerHTML =`A fullfillment expert will get back to you shortly. <span style="text-decoration: underline;"><a href="https://www.shipbob.com/privacy-policy/website-interacting/" rel="noopener" target="_blank">Privacy policy</a></span>`;
	      }
	      
	      document.querySelectorAll('.spz_t4007 .hs-form-field input, .spz_t4007 .hs-form-field select').forEach(field => {
	          if(field.value != ""){
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
				
				var labelInterval = setInterval(function(){
					if(document.querySelector('.hs-form-field.hs_ib_picklist_eecommerce_platform')){
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
  },10)
}
function loadUiTest() {
    // Add Swiper for slider
    var script = document.createElement('script');
    var style = document.createElement('link');
    script.type = 'text/javascript';
    style.rel = 'stylesheet';
    script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    style.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.head.appendChild(script);
    document.head.appendChild(style);
    var html = `
    <div class="g2-review-section">
            <div class="content-wrapper">
                <div class="review-wrapper">
                    <div class="g2-wrapper desktop">
                        <div class="review-img-wrapper">
                            <img class="g2-img1" alt="Trustpilot Logo" src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot_logo.svg" />
                        </div>
                            <img class="g2-img2" alt="Rating Star" src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars.svg" />
                            <p class="rating">TrustScore 4.3<span>(714 reviews)</span></p>
                    </div>
                    <div class="slider-parent">
                        <div id="splide" class=" splide splide slider-container">
                            <div class="splide__arrows">
                                <button class="splide__arrow splide__arrow--prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle opacity="0.1" cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="white"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0194 21.4142C17.2384 20.6332 17.2384 19.3668 18.0194 18.5858L21.9474 14.6578C22.2526 14.3526 22.2526 13.8578 21.9474 13.5526C21.6422 13.2474 21.1474 13.2474 20.8422 13.5526L15.809 18.5858C15.028 19.3668 15.028 20.6332 15.809 21.4142L20.8422 26.4474C21.1474 26.7526 21.6422 26.7526 21.9474 26.4474C22.2526 26.1422 22.2526 25.6474 21.9474 25.3422L18.0194 21.4142Z" fill="white"></path>
                                    </svg>
                                </button>
                                <button class="splide__arrow splide__arrow--next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle opacity="0.1" cx="20" cy="20" r="20" fill="white"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9806 21.4142C22.7616 20.6332 22.7616 19.3668 21.9806 18.5858L18.0526 14.6578C17.7474 14.3526 17.7474 13.8578 18.0526 13.5526C18.3578 13.2474 18.8526 13.2474 19.1578 13.5526L24.191 18.5858C24.972 19.3668 24.972 20.6332 24.191 21.4142L19.1578 26.4474C18.8526 26.7526 18.3578 26.7526 18.0526 26.4474C17.7474 26.1422 17.7474 25.6474 18.0526 25.3422L21.9806 21.4142Z" fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="splide__track">
                                <div class="splide__list">
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We saved money on our carrier rates, increased operational efficiency, and decreased labor hours.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">AH</p>
                                                </div>
                                                <p class="author-name">Adam Higgins</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">A game-changer. ShipBob has not only streamlined our operations but also driven cost savings and growth.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">SA</p>
                                                </div>
                                                <p class="author-name">Savannah A.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">The most reliable 3PL. Everything is always shipped, packed on time. We've grown 30x from 300 to over 9,000 monthly orders with ShipBob.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">WP</p>
                                                </div>
                                                <p class="author-name">Wookie Park</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We've used ShipBob for about 14 months, and have grown a lot during that time. They’ve really helped speed up deliveries. A huge win.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">MC</p>
                                                </div>
                                                <p class="author-name">Matt Crane</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We've exceeded customer expectations with faster delivery times. Saves us time and ensures accuracy and reliability in every shipment.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">AK</p>
                                                </div>
                                                <p class="author-name">Andrew King</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">ShipBob allowed us to fully automate our ecommerce business. It helped us focus strictly on marketing and growth, knowing that fulfillment was taken care of. Super helpful!</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">LM</p>
                                                </div>
                                                <p class="author-name">Luke M.</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    
    document.querySelector('.row-number-1.dnd-section').insertAdjacentHTML('afterend', html);
    
    document.querySelector('.row-number-5.dnd-section').insertAdjacentElement('afterend' , document.querySelector('.row-number-3.dnd-section'));
    
    document.querySelector('.row-number-3.dnd-section .client-logo-container').innerHTML = `
    <div class="img-wrap">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-01.webp" alt="Spike Ball">
    </div>
    <div class="img-wrap dossier">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-02_3.webp" alt="Dossier">
    </div>
    <div class="img-wrap adventure">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-03.webp" alt="The adventure Challenge">
    </div>
    <div class="img-wrap TB2">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-04.webp" alt="T2">
    </div>  
    <div class="img-wrap petlab">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-05-new.webp" alt="PetLab Co.">
    </div>
    <div class="img-wrap coffee">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/logo-05_1.webp" alt="Chamberlain Coffee">
    </div>
    <div class="img-wrap thieves">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/4007/image_399.webp" alt="100 Thieves">
    </div>`
    var isOnceperseession = localStorage.getItem("Onceperseession");
     if (!isOnceperseession) {
     	
     	  const elements = document.querySelectorAll('.row-number-3,.row-number-5,.row-number-7, .row-number-10, .row-number-13');
elements.forEach(element => {
    element.classList.add('first_hide');
});
    document.querySelector('.spz_t4007 .g2-review-section').insertAdjacentHTML('beforeEnd',`<div class="lock-herowrap">
             <div class="lock-hero"><p>Learn more</p><img src="//res.cloudinary.com/spiralyze/image/upload/v1723817361/shipbob/4007/chevrons-down.svg" alt="chevrons-down">
         </div></div>`);
    	document.querySelector('body').classList.add('page-locked');
    }
 
     // page unlock 
     $('.lock-herowrap .lock-hero').on('click',function() {
     	$(this).hide()
         $('body').removeClass('page-locked');
         
        const elements = document.querySelectorAll('.row-number-3,.row-number-5,.row-number-7, .row-number-10, .row-number-13');
        elements.forEach(element => {
            element.classList.remove('first_hide');
        });
        // scroll to the next section 
        scrollToSection('.section-stats');
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
    
    getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", function () {
            var splide = new Splide('.splide', {
                perPage: 3,
                perMove: 3,
                autoplay: true,
                pauseOnHover: true,
                pauseOnFocus: true,
                interval: 5000,
                type: 'loop',
                breakpoints: {
                    1199: { 
                        perPage: 1,
                        perMove: 1,
                    }
                }
            });
            splide.mount();
				
				    // Function to stop the slider and set the flag
				    function stopSlider() {
				        splide.Components.Autoplay.pause(99)
				    }
				
				    // Add event listeners to navigation arrows
				    document.querySelectorAll('.g2-review-section .splide__pagination__page').forEach(arrow => {
				        arrow.addEventListener('click', stopSlider);
				    });
				
				    // Add event listeners to testimonial cards
				    document.querySelectorAll('.g2-review-section .splide__slide').forEach(slide => {
				        slide.addEventListener('click', stopSlider);
				    });
				    
				    // Intersection Observer to detect when the slider section comes into view
				    const sliderSection = document.querySelector('.g2-review-section .splide');
				    const observer = new IntersectionObserver((entries) => {
				        entries.forEach(entry => {
				            if (entry.isIntersecting) {
				            		splide.Components.Autoplay.play(99)
				                console.log('Slider section is in view');
				            } else {
				                console.log('Slider section is out of view');
				            }
				        });
				    }, {
				        root: null,
				        rootMargin: '0px',
				        threshold: 0.1
				    });
				
				    observer.observe(sliderSection);
        }
    );
    
    deskpagination();
    tabpagination();
    
    window.addEventListener('resize' , function(){
    	deskpagination();
    	tabpagination();
    })
    
    function deskpagination(){
	    var waitforelem = setInterval(function(){
	    	if(document.querySelector('.spz_t4007 .splide__pagination') && window.innerWidth >= 1200){
	    		clearInterval(waitforelem)
	    		document.querySelector('.spz_t4007 .g2-review-section .g2-wrapper.desktop').insertAdjacentElement('beforeend' , document.querySelector('.spz_t4007 .splide__pagination'));
	    	}
	    })
    }
    function tabpagination(){
	    var waitforelem = setInterval(function(){
	    	if(document.querySelector('.spz_t4007 .splide__pagination') && window.innerWidth < 1200 && !document.querySelector('.spz_t4007 .g2-wrapper .splide__pagination')){
	    		clearInterval(waitforelem)
	    		document.querySelector('.spz_t4007 .splide__track').insertAdjacentElement('afterend' , document.querySelector('.spz_t4007 .splide__pagination'));
	    	}
	    })
    }
    
    function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
        
    }
}