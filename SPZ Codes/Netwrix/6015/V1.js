function getTimestamp() {
	return new Date().toISOString();
}

function injectBrowserClass() {
	let userAgent = navigator.userAgent;
	if (userAgent.match(/edg/i)) return "edge";
	if (userAgent.match(/firefox|fxios/i)) return "firefox";
	if (userAgent.match(/opr\//i)) return "opera";
	if (userAgent.match(/chrome|chromium|crios/i)) return "chrome";
	if (userAgent.match(/safari/i)) return "safari";
	return 'unknown';
}

function firstButtonClick(e) {
	e.preventDefault();
	const button = document.body.querySelector('section.c--hero-e .c--hero-e__wrapper__content__list-group button:nth-child(1)');
	if (button) {
		button.click();
	}
}

function secondButtonClick(e) {
	e.preventDefault();
	const button = document.body.querySelector('section.c--hero-e .c--hero-e__wrapper__content__list-group button:nth-child(2)');
	if (button) {
		button.click();
	}
}

function injectVariant6015() {
	console.log('injectVariant6015 called');
	if (document.body.classList.contains('spz_6015_v1')) return;
	document.body.classList.add('spz_6015_v1');
	document.body.classList.add(injectBrowserClass());

	const main = document.querySelector('main#swup');
	if (!main) return;

	const heroSection = main.querySelector('section.c--hero-e');
	if (heroSection) {
		heroSection.classList.add('spz__hidden');
	}

	const subMenu = main.querySelector('section.c--subnav-a');
	main.insertAdjacentHTML('afterbegin', `
			<section id="spz__6015_v1_hero" class="spz__hero">
					<div class="spz__hero__container">
							<div class="spz__hero__inner">
									<div class="spz__hero__content">
											<a href="/en/products/" class="c--hero-e__wrapper__btn" target="_self" _type="pages" icon="[object Object]" index_image="[object Object]" slug="products" title="Products">  <span style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">See all products</span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"> <path d="M0 5L4.11261 10H5.87929L2.42122 5.80162H10V4.19839H2.42122L5.87929 0H4.11261L0 5Z" fill="black"></path> </svg> </a>
											<p class="spz__hero__content__pretitle">Entra ID & Active <br> Directory Security Assessment</p>
											<h1 class="spz__hero__content__title">Netwrix PingCastle</h1>
											<p class="spz__hero__content__description">Find and fix AD and Entra ID security gaps fast with the leading hybrid Active Directory security assessment tool.</p>
											<div class="spz__hero__ctas">
													<button class="spz__hero__ctas__button c--hero-e__wrapper__content__list-group__item spz6015_v1">Free download</button>
													<button class="spz__hero__ctas__button c--hero-e__wrapper__content__list-group__item spz6015_v1">Launch in-browser demo</button>
											</div>
									</div>
									<div class="spz__hero__image">
											<picture>
													<source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/hero_image_360.webp" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
													<source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/hero_image_768.webp" type="image/webp" media="(max-width: 767px)">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/frame_2095584680.webp" alt="Netwrix Hero Image">
											</picture>
									</div>
							</div>
					</div>
			</section>
	`);

	main.querySelector('#spz__6015_v1_hero .spz__hero__ctas button:nth-child(1)').addEventListener('click', firstButtonClick);

	main.querySelector('#spz__6015_v1_hero .spz__hero__ctas button:nth-child(2)').addEventListener('click', secondButtonClick);

	// Function to set AB_Testing__c field value
	function setABTestingValue() {
		const inputs = document.querySelectorAll('input[name="AB_Testing__c"]');
		if (inputs.length > 0) {
			inputs.forEach(input => {
				input.value = 'Variation1_6015';
				// Trigger change event to ensure the value is properly set
				input.dispatchEvent(new Event('change', { bubbles: true }));
				input.dispatchEvent(new Event('input', { bubbles: true }));
			});
			return true;
		}
		return false;
	}

	// Try to set immediately if element exists
	setABTestingValue();

	// Watch for the element to be injected later using MutationObserver
	const abTestingObserver = new MutationObserver(() => {
		if (setABTestingValue()) {
			// Element found and value set, can optionally disconnect observer
			// But keep it running in case more inputs are added later
		}
	});

	// Start observing the document for changes
	abTestingObserver.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: false
	});


	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

	// Set the value of the squeezePage variable as needed:
	// true  – if you are using a squeeze page (i.e., the page contains a form)
	// false – if you are not using a squeeze page (i.e., the page does not contain a form)
	// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

	const squeezePage = 'both'; // true / false / 'both'
	const expName = '6015'; //experiment name should be 1001, 1002, 1003 etc.
	const variantName = `Variation1_` + expName; //variantName should be variant_, true_control_ etc.
	const clientDomain = '.netwrix.com'; //domain should be .spiralyze.com


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
}

function removeVariant6015() {
	if (!document.body.classList.contains('spz_6015_v1')) return;
	document.body.classList.remove('spz_6015_v1');

	if (document.body.classList.contains(injectBrowserClass())) document.body.classList.remove(injectBrowserClass());
	console.log("6015-v1 removed: " + getTimestamp());
}

let injectionTimeout = null;

if (!document.body.classList.contains('spz_6015_v1_observed')) {
	const bodyObserver = new MutationObserver(() => {
		clearTimeout(injectionTimeout);
		if (!document.body.classList.contains('spz__invisible')) document.body.classList.add('spz__invisible');
		if (/\/en\/products\/pingcastle\/?$/.test(window.location.pathname)) {
			injectionTimeout = setTimeout(() => {
				document.body.classList.remove('spz__invisible');
				injectVariant6015();
			}, 500);
		} else {
			document.body.classList.remove('spz__invisible');
			removeVariant6015();
		}
	});
	bodyObserver.observe(document.body, {
		childList: true,
		subtree: true
	});
	document.body.classList.add('spz_6015_v1_observed');
}
