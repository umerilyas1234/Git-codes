function runCode() {
	if (!document.body.classList.contains('spz_6011')) {
		document.body.classList.add('spz_6011');

		// Check if the URL matches one of the given URLs and execute the corresponding code
		var newHero = `<div class="new-hero audit">
              <div class="hero-container">
                  <div class="hero-flex">
                      <div class="hero-title-contain">
                          <div class="hero-product-name">NETWRIX AUDITOR</div>
                          <div class="hero-main-title">Ease the burden of IT auditing</div>
                          <p>Identify risks, detect security threats, automate compliance reporting, increase IT team efficiency with IT audit software from Netwrix.</p>
                          <div class="hero-buttons head-cont">
                          </div>
                      </div>
                      <div class="hero-image-contain">
                          <picture>
                            <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/image_4.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/image_4.webp" alt="auditor_ui_image">
                          </picture>	
                      </div>
                  </div>
              </div>
              <div class="hero-organiza-container">
                  <div class="hero-organiza-content">
                      <p>Trusted by 13,500+ organizations</p>
                      <ul>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                      </ul>
                  </div>
              </div>
      </div>`;

		document.querySelector('.spz_6011 main .navbar').insertAdjacentHTML('afterend', newHero);


		document.querySelector('.hero-buttons.head-cont').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));
		document.querySelectorAll('.spz_6011 .hero-buttons .nwx-btn').forEach((item) => {
			item.classList.add('spz_6011_v1');
		});
		document.querySelectorAll('.spz_6011 .hero-buttons button.nwx-btn').forEach((item) => {
			item.classList.add('get-demo');
			item.textContent = 'Download Free Trial';
		});

		document.querySelector('.spz_6011 main .navbar').insertAdjacentHTML('afterend', `<div class="new-head-cont head-cont"></div>`);
		const breadcrumbs = document.querySelector('.spz_6011 .head-cont .breadcrumbs');
		document.querySelector('.spz_6011 .new-head-cont').insertAdjacentElement('beforeend', breadcrumbs);

		document.addEventListener('click', function (e) {
			if (e.target.classList.contains('get-demo')) {
				setTimeout(() => {
					updateFormAndButton();
				}, 100);
			}
			if (e.target.classList.contains('hyperLink')) {
				e.preventDefault();
				document.querySelector('.one-field-form-button-test button.nwx-btn').click();
			}
		});

		if (document.querySelector('.spz_6011 .hero-buttons .product-tour')) {
			document.querySelector('.spz_6011 .hero-buttons .product-tour').addEventListener('click', function () {
				document.querySelector('.head-cont .nwx-red-btn').click();
			});
		}

		var button = document.querySelector(".one-field-form-button-test [id^='app-']");
		var buttonID = button.id;
		const formId = `form-${buttonID}`;
		const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
		formContainer.classList.add('spz_modal');

		function updateFormAndButton() {
			document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Auditor";
			document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
			document.querySelector(`.spz_modal #ModalForm_leadType`).value = "Evaluation";
			document.querySelector(`.spz_modal form #SPZ_Test`).value = 'variant_6011';
			console.log('updated states');
		}
		updateFormAndButton();



		// variant 6011

		document.querySelector('.applications').insertAdjacentHTML('afterend', `
			<section class="buy_now">
				<div class="auto_container">
					<div class="buy_nowInner">
						<div class="buy_nowTop">
							<div class="buy_nowHeading">
								<h1>Pricing</h1>
							</div>
							<div class="buy_nowList">
								<ul>
									<li>
										<div class="buy_nowData">
											<div class="data_top">
												<span><img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/nwx-auditor.svg" alt="Netwrix Auditor – Essentials Edition"></span>
												<div class="buy_topHeading">
													<h2>Netwrix Auditor – Essentials Edition</h2>
													<h4>Built for businesses under 150 employees</h4>
												</div>
												<div class="btn_outer">
													<a href="https://buy.netwrix.com/1902/purl-netwrixessentials?tracking=gtm" class="custom_btn btn_red spz_6011_v1">Buy Now</a>
													<a href="javascript:void(0);" class="hyperLink spz_6011_v1">Or start a free trial</a>
												</div>
											</div>
											<div class="data_bottom">
												<div class="data_list">
													<ul>
														<li>
															<p>Covers Active Directory, Entra ID, SharePoint, SharePoint Online, OneDrive for Business, Teams, Windows File Servers, and Windows Server</p>
														</li>
														<li>
															<p>Community Supported</p>
														</li>
														<li>
															<p>Risk Assessment</p>
														</li>
														<li>
															<p>Monitoring + Alerts</p>
														</li>
														<li>
															<p>Visibility into Permissions</p>
														</li>
														<li>
															<p>State-in-Time Reporting</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="buy_nowData">
											<div class="data_top">
												<span><img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/nwx-netwrix-1secure.svg" alt="Netwrix Auditor"></span>
												<div class="buy_topHeading">
													<h2>Netwrix Auditor</h2>
													<h4>For organizations of all sizes</h4>
												</div>
												<div class="btn_outer">
													<a href="javascript:void(0);" class="custom_btn btn_blue contact_me spz_6011_v1">Request Pricing</a>
												</div>
											</div>
											<div class="data_bottom">
												<div class="data_list">
													<ul>
														<li>
															<p>Comprehensive auditing across data, identity, and systems infrastructure, on-premises and in the cloud</p>
														</li>
														<li>
															<p>Full Netwrix Support</p>
														</li>
														<li>
															<p>Risk Assessment</p>
														</li>
														<li>
															<p>Monitoring + Alerts</p>
														</li>
														<li>
															<p>Visibility into Permissions</p>
														</li>
														<li>
															<p>State-in-Time Reporting</p>
														</li>
														<li>
															<p>And much more!</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			`);


		// sticky footer

		//DEV 1/3. Put your asana task URL here
		const asana_URL = `https://app.asana.com/1/77217210692853/project/1206002187116436/task/1210175828129964?focus=true`

		//DEV 2/3. Fill content for the sticky footer
		const template_stickyFooterContent = {
			heading: "Netwrix Auditor Essentials—built for under 150 employees and available for immediate purchase.",
			CTAs: [
				{
					ctaText: "Buy Now",
					ctaURL: "https://buy.netwrix.com/1902/purl-netwrixessentials?tracking=gtm",
				}
			]
		};

		if (sessionStorage.getItem("footerHidden") !== "true") {
			addStickyFooter(template_stickyFooterContent);
		}

		/***********************************
		************************************
		DO NOT TOUCH
		BEYOND THIS LINE
		******************************
		************************/
		// This is the code to generate the sticky footer section do not edit it

		const scrollPosition = window.innerHeight;
		function hideShowStickyBar() {
			const footer = document.querySelector('#footer_cont');
			const body = document.querySelector('body');
			const isFooterInView = footer && isElementInViewport(footer);
			if (isFooterInView) {
				body.classList.remove('goUp');
			} else if (window.scrollY > scrollPosition) {
				body.classList.add('goUp');
			} else {
				body.classList.remove('goUp');
			}
		}

		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return rect.top < window.innerHeight && rect.bottom > 0;
		}

		document.addEventListener("click", function (e) {
			if (
				e.target.classList.contains("sticky_close") ||
				e.target.classList.contains("footerBtn")
			) {
				document.querySelector(".spz-sticky-footer").remove();
				sessionStorage.setItem("footerHidden", "true");
			}
			if (e.target.classList.contains('cookie-allow-btn')) {
				const isHidden = window.getComputedStyle(document.querySelector('.cookie-information-cont')).display === 'none';
				if (isHidden) {
					showFooter();
				}
			}

		});

		function showFooter() {
			window.addEventListener(
				"scroll",
				function () {
					hideShowStickyBar();
				},
				true
			);
		}

		if (!document.querySelector('.cookie-information-cont')) {
			showFooter();
		}

		function addStickyFooter(footerData) {
			const formTemplate = `
			<div class="spz-sticky-footer">
				<div class="spz-footer-container">
					<div class="spz-trust-logos-wrap">
						<div class="spz-copy-wrap">
							<div class="spz-copy-heading">${template_stickyFooterContent.heading}</div>
						</div>
					</div>
					<div class="spz-ctas-wrap">
						${template_stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL}
							class="custom_btn btn_red spz_6011_v1">${item.ctaText}</a>`).join("")}
					</div>
				</div>
				<div class="close_wrapper">
					<a href="javascript:;" class="sticky_close"></a>
				</div>
			</div>
  		`;
			document.body.insertAdjacentHTML("beforeend", formTemplate);
		}


		const targetNode = formContainer.querySelector(`.spz_modal form .modelFormSubmit`);
		const config = { attributes: true, attributeFilter: ['value', 'class'] };
		const callback = (mutationList, observer) => {
			mutationList.forEach(mutation => {
				if (mutation.type === 'attributes') {
					const newValue = mutation.target.getAttribute(mutation.attributeName);
					const oldValue = mutation.oldValue;

					if (newValue !== oldValue) {
						updateFormAndButton();
					}
				}
			});
		};
		const observer = new MutationObserver(callback);
		if (targetNode) {
			observer.observe(targetNode, { ...config, attributeOldValue: true });
		}


		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '6011';
		//variantName should be _V1, _V2, _TC etc.
		const variantName = `variant_` + expName;

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
	}
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
	if (document.querySelectorAll('main .navbar').length > 0) {
		clearInterval(checkCondition);
		runCode();
	}
}, 500);
