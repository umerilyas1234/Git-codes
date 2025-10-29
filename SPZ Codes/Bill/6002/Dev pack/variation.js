const bodyInterval6002 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_6002')) {
		clearInterval(bodyInterval6002)
		document.querySelector('body').classList.add("spz_6002")

		localStorage.setItem('bdcAbTest12', '6002-v1');

		const loadJS = (url, implementationCode, location) => {
			var scriptTag = document.createElement('script');
			scriptTag.src = url;
			scriptTag.onload = implementationCode;
			scriptTag.onreadystatechange = implementationCode;

			location.appendChild(scriptTag);
		};
		const gb_load_css = (path) => {
			let css = document.createElement('link');
			css.rel = 'stylesheet';
			css.media = 'all';
			css.href = path;

			document.getElementsByTagName('head')[0].appendChild(css);
		}
		gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
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
		//DEVELOPER - STEP 1 of 5 - Put your asana task URL here
		const asana_URL = `https://app.asana.com/0/1206002187116436/1208084662749694/f`
		//DEVELOPER - STEP 2 of 5 - This adds content inside the box.
		const formElements = {
			customHTMLBefore: `
        ${ /*This html goes is inserted before the form */''}
          <div class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div class="form heading">
            <h2>Get started</h2>
          </div>
        `,
			customHTMLAfter: ``,
		};

		//DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
		const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

		//content different for each page
		let image;
		let bigTitle;
		let list;
		image = `
      <picture>
        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6002/hero_image-tablet_1.webp">
        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6002/hero_image-mobile_2.webp">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6002/hero_image-desktop_2.webp" alt="Hero Image" width="1346" height="1038">
      </picture>
      `;
		bigTitle = 'Get business credit and corporate cards.';
		list = `
       <div class="list">
          <div><strong>Fast application. </strong> Apply online in minutes by entering a few details about your business. No effect on your credit rating.</div>
          <div><strong>Credit Lines. </strong> Get approved for $1K - 5M. Corporate cards with up to 7x rewards, cash back, and no annual fees.<sup>1</sup>  </div>
          <div><strong>Spend Tracking. </strong> Track card spend in real time. Automatic spend controls.  Alerts for rogue spend. </div>
        </div>
      `

		//add new hero section 
		document.querySelector('.spz_6002 #formjumplink').insertAdjacentHTML("afterend", `
        <div class="new-hero-section">
          <div class="new-hero-section-wrapper">
            <div class="left">
              <a class="logo" href="/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logotype-bill.svg" alt="BILL Logo" width="50" height="32"></a>
              <div class="review-star">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728130/bill/4002/rating-stars.svg" alt="Rating Stars" width="108" height="20">
                <div class="text"><strong>4.4</strong> (2,700+ reviews)</div>
              </div>
              <div class="title">${bigTitle}</div>
             ${list}
              <div class="form">
                <div class="hero-form-wrapper">
                  <input type="text" id="new-input-text" autocomplete="new-input-text" placeholder="Work Email">
                  <div class="spz-6002-hero-cta custom_cta">Get Started</div>
                </div>
                <div class="desc">
                  <div class="button-disclaimer">
                    By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
                  </div>
                </div>
              </div>
              <div class="hero_leftBttom">
                <p>
                  The BILL Divvy Corporate Card is issued by Cross River Bank, member FDIC
                </p>
                <p><sup>1</sup> Credit lines and the advertised range are not guaranteed and will be determined upon application approval.</p>
              </div>
            </div>
            <div class="right">
              ${image}
            </div>
          </div>
        </div>
        <div class="slider-wrapper-4002">
          <div class="slider-title">Integrations to connect with the tools you use daily</div>
          <section class="splide splide4002">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <div class="img-wrapper">
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sap_success_factors.svg">  
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sap_success_factors.svg" alt="SAP SuccessFactors Logo" width="200" height="56"/>
                    </picture>  
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-oracle_netsuite.svg"> 
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-oracle_netsuite.svg" alt="NetSuite Logo" width="97" height="56"/>
                    </picture> 
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sage.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sage.svg" alt="Sage Intacct Logo" width="73" height="56"/>
                      </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-yardi.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-yardi.svg" alt="Yardi Logo" width="114" height="56"/>
                      </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-quickbooks.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-quickbooks.svg" alt="QuickBooks Logo" width="50" height="56"/>
                    </picture>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-workday.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-workday.svg" alt="Workday Logo" width="107" height="56"/>  
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-gusto.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-gusto.svg" alt="Gusto, Inc. Logo" width="89" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-trinet.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-trinet.svg" alt="TriNet Logo" width="103" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-microsoft.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-microsoft.svg" alt="Microsoft Logo" width="138" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-xero.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723826258/bill/5001/logo-xero.svg" alt="Xero Logo" width="50" height="56"/>
                    </picture>
                  </div>
                </li>
                <li class="splide__slide">
                 <div class="img-wrapper">
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sap_success_factors.svg">  
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sap_success_factors.svg" alt="SAP SuccessFactors Logo" width="200" height="56"/>
                    </picture>  
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-oracle_netsuite.svg"> 
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-oracle_netsuite.svg" alt="NetSuite Logo" width="97" height="56"/>
                    </picture> 
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sage.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sage.svg" alt="Sage Intacct Logo" width="73" height="56"/>
                      </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-yardi.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-yardi.svg" alt="Yardi Logo" width="114" height="56"/>
                      </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-quickbooks.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-quickbooks.svg" alt="QuickBooks Logo" width="50" height="56"/>
                    </picture>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-workday.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-workday.svg" alt="Workday Logo" width="107" height="56"/>  
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-gusto.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-gusto.svg" alt="Gusto, Inc. Logo" width="89" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-trinet.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-trinet.svg" alt="TriNet Logo" width="103" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-microsoft.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-microsoft.svg" alt="Microsoft Logo" width="138" height="56"/>
                    </picture>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-xero.svg">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-xero.svg" alt="Xero Logo" width="50" height="56"/>
                    </picture>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      `)
		if (document.querySelector('.spz_6002 .static-logos') && document.querySelector('.spz_6002 .static-logos').closest('section')) {
			document.querySelector('.spz_6002 .static-logos').closest('section').classList.add("spz-d-none")
		}
		document.querySelector('.spz_6002 .new-hero-section .left .form .custom_cta').addEventListener("click", function () {
			document.querySelector('.spz_6002 .popup-wrapper').classList.add("show")
			document.querySelector('html').classList.add("scroll-hidden")
			document.querySelector('.spz_6002 .spz-input-wrapper.email input').value = document.querySelector('.spz_6002 .new-hero-section .left .form input').value;
			trigger(document.querySelector('.spz_6002 .spz-input-wrapper.email input'), 'change')
		})
		document.querySelector('.spz_6002 .new-hero-section .left .form input').addEventListener("keypress", function (e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				document.querySelector('.spz_6002 .new-hero-section .left .form .custom_cta').click()
			}
		});

		loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
			var splide4002 = new Splide('.spz_6002 .slider-wrapper-4002 .splide4002', {
				type: 'loop',
				autoWidth: true,
				arrows: false,
				pagination: false,
				focus: 'center',
				drag: false,
				speed: 20000,
				easing: 'linear',
				waitForTransition: true,
				autoplay: true,
				interval: 0,
				pauseOnHover: false,
				pauseOnFocus: false,
				direction: 'rtl',
			});
			setTimeout(function () {
				splide4002.mount();
				window.dispatchEvent(new Event('resize'));
			}, 200)
			window.dispatchEvent(new Event('resize'));
			window.addEventListener('resize', function () {
				splide4002.refresh()
				splide4002.destroy()
				splide4002.mount();
			})
		}, document.body);

		//form code
		const formLoaded = setInterval(() => {
			if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
				clearInterval(formLoaded);
				addForm(formElements, formUniqueSelector);
				//form modification
				//adding wrapper
				for (let i = 0; i < document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select').length; i++) {
					let target = document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i];
					let wrapper = document.createElement('div');
					wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].getAttribute("id"));
					target.parentNode.insertBefore(wrapper, target);
					wrapper.appendChild(target);
				}
				//adding label
				for (let i = 0; i < document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select').length; i++) {
					let label = document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].getAttribute("placeholder")
					if (!label && document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].querySelector('option')) {
						label = document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].querySelector('option').textContent;
					}
					document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].insertAdjacentHTML("afterend", `
              <label for="${document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6002 form select')[i].getAttribute("id")}">${label}</label> 
           `)
				}
				// change position
				document.querySelector('.spz_6002 .spz-input-wrapper.firstName').insertAdjacentElement('beforebegin', document.querySelector('.spz_6002 .spz-input-wrapper.email'))
				document.querySelector('.spz_6002 .spz-input-wrapper.email').insertAdjacentElement('afterend', document.querySelector('.spz_6002 .spz-input-wrapper.name'))
				//  document.querySelector('.spz_6002 .popup-wrapper ').insertAdjacentElement("beforeend",document.querySelector('.spz_6002 .g-recaptcha'))

				//select condition checking
				const checkSelectCondition = () => {
					for (let i = 0; i < document.querySelectorAll('.spz_6002 .spz-input-wrapper').length; i++) {
						if (document.querySelectorAll('.spz_6002 .spz-input-wrapper')[i].querySelector('.hide')) {
							document.querySelectorAll('.spz_6002 .spz-input-wrapper')[i].classList.add('hide')
						} else {
							document.querySelectorAll('.spz_6002 .spz-input-wrapper')[i].classList.remove('hide')
						}

					}
				}
				checkSelectCondition()
				//select arrow
				for (let x = 0; x < document.querySelectorAll('.spz_6002 form select').length; x++) {
					document.querySelectorAll('.spz_6002 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
              <div class="arrow"></div>  
              `)
				}
				//submit button 
				document.querySelector('.spz_6002 #se-form-button').value = "Submit";
				document.querySelector('.spz_6002 #se-form-button').classList.add("spz-submitcta-6002")
				// adding Business Type
				document.querySelector('.spz_6002 .spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("afterend", `
						<div class="spz-input-wrapper business-type">
						<label for="businessType">Business Type</label> 
						<div class="arrow"></div>
						</div>
				`);
				document.querySelector('.spz_6002 .spz-input-wrapper.business-type').insertAdjacentElement("afterbegin", document.querySelector('.spz_6002 select#signupType'));

				//disclaimer 
				document.querySelector('.spz_6002 .button-disclaimer').innerHTML = `
            By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
            `
				//input even listerer
				const allInput = document.querySelectorAll('.spz_6002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), .spz_6002 form select');
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
				document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
					// Replace any non-digit character with an empty string
					this.value = this.value.replace(/\D/g, '');
				});
				//remove unecessary select
				for (let x = 0; x < document.querySelectorAll('.spz_6002 #accountingSoftwareContainer select').length; x++) {
					document.querySelectorAll('.spz_6002 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
				}
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
				document.querySelector('.spz_6002').classList.add(browser);

				document.querySelector('.spz_6002 .spz-form-wrap .close-button').addEventListener("click", function () {
					document.querySelector('.spz_6002 .popup-wrapper').classList.remove("show")
					document.querySelector('html').classList.remove("scroll-hidden")
				})
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
            <div class="popup-wrapper"> 
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
}, 10)
