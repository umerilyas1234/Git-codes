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

function getImageSet(dataAccordianControl) {
	let imageSet = {
			desktop: '',
			tablet: '',
			mobile: '',
			alt: ''
	};
	switch (dataAccordianControl) {
			case 'accordion-5-0':
					imageSet.desktop = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_4.webp';
					imageSet.tablet = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/automated_vulnerability_scanning_768.webp';
					imageSet.mobile = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/automated_vulnerability_scanning_360.webp';
					imageSet.alt = 'Automated Vulnerability Scanning';
					break;
			case 'accordion-5-1':
					imageSet.desktop = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_5.webp';
					imageSet.tablet = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/risk_scoring_and_prioritization_768.webp';
					imageSet.mobile = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/risk_scoring_and_prioritization_360.webp';
					imageSet.alt = 'Risk Scoring and Prioritization';
					break;
			case 'accordion-5-2':
					imageSet.desktop = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_11.webp';
					imageSet.tablet = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/risk_remediation_768.webp';
					imageSet.mobile = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/risk_remediation_769.webp';
					imageSet.alt = 'Risk Remediation';
					break;
			case 'accordion-5-3':
					imageSet.desktop = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_12.webp';
					imageSet.tablet = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_14.webp';
					imageSet.mobile = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6015/media-screenshot_13.webp';
					imageSet.alt = 'Continuous Security Scanning';
					break;
			default:
					break;
	}
	return imageSet;
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

function animateAccordionImage(el) {
	if (!el) return;
	el.classList.add('spz__animated');

	setTimeout(() => {
			el.classList.remove('spz__animated');
	}, 1000);
}

function injectVariant6015() {
	console.log('injectVariant6015 called');
	if (document.body.classList.contains('spz_6015_v2')) return;
	document.body.classList.add('spz_6015_v2');
	document.body.classList.add(injectBrowserClass());

	const main = document.querySelector('main#swup');
	if (!main) return;

	const subMenu = main.querySelector('section.c--subnav-a');
	if (subMenu) {
			const firstItem = subMenu.querySelector('nav.c--subnav-a__wrapper button.c--subnav-a__wrapper__item:first-child');
			if (firstItem) {
					firstItem.innerHTML = 'Why Pingcastle?';
			}
	}

	const infoSection = main.querySelector('section.c--subnav-a + section.c--layout-c');
	if (infoSection) {
			infoSection.children[0].classList.add('spz__hidden');
			infoSection.insertAdjacentHTML('afterbegin', `
					<div class="spz__info">
							<h2 class="spz__info__title">Why Pingcastle?</h2>
							<p class="spz__info__description">Active Directory risk assessments made actionable</p>
							<div class="spz__info__cards">
									<div class="spz__info__cards__container">
											<div class="spz__info__cards__card">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/v1764181458/netwrix/6015/frame_2095584605.svg" alt="For IT Operations">
													<h3 class="spz__info__cards__card__title">For IT Operations</h3>
													<p class="spz__info__cards__card__description">Help detect critical security issues, get an overview of the technical situation and provide guidance and advice to fix the issues.</p>
											</div>
											<div class="spz__info__cards__card">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/v1764181458/netwrix/6015/frame_2095584606.svg" alt="For IT Management">
													<h3 class="spz__info__cards__card__title">For IT Management</h3>
													<p class="spz__info__cards__card__description">Evaluate the current security level, indicate the presence of critical risks and advise on priorities for the action plan.</p>
											</div>
											<div class="spz__info__cards__card">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/v1764181458/netwrix/6015/handshake.svg" alt="Maturity and Results">
													<h3 class="spz__info__cards__card__title">Maturity and Results</h3>
													<p class="spz__info__cards__card__description">Establish a common vocabulary between IT Management and IT Operations and provide a maturity evaluation.</p>
											</div>
									</div>
							</div>
							<div class="spz__info__ctas">
									<button class="spz__info__ctas__button c--hero-e__wrapper__content__list-group__item spz6015_v2">Free download</button>
									<button class="spz__info__ctas__button c--hero-e__wrapper__content__list-group__item spz6015_v2">Launch in-browser demo</button>
							</div>
					</div>
			`);

			infoSection.querySelector('.spz__info__ctas button:nth-child(1)').addEventListener('click', firstButtonClick);
			infoSection.querySelector('.spz__info__ctas button:nth-child(2)').addEventListener('click', secondButtonClick);

			const ctaSection = infoSection.nextElementSibling;
			const ctaSectionMountPoint = main.querySelectorAll('section.f--background-b')[1];
			if (ctaSectionMountPoint) {
					ctaSectionMountPoint.insertAdjacentElement('afterend', ctaSection);
					infoSection.nextElementSibling.nextElementSibling.nextElementSibling.insertAdjacentElement('afterend', ctaSectionMountPoint.previousElementSibling);
					infoSection.nextElementSibling.nextElementSibling.nextElementSibling.insertAdjacentElement('afterend', ctaSectionMountPoint.previousElementSibling);
					ctaSectionMountPoint.previousElementSibling.previousElementSibling.previousElementSibling.insertAdjacentElement('afterend', ctaSectionMountPoint);
			}

			const capabilitiesHeaderSection = infoSection.nextElementSibling;
			if (capabilitiesHeaderSection) {
					capabilitiesHeaderSection.classList.add('spz__capabilities-header');
					const subtitle = capabilitiesHeaderSection.querySelector('h3.c--layout-a__subtitle');
					if (subtitle) {
							subtitle.innerHTML = 'Strengthen your identity infrastructure across environments';
					}
					const capabilitiesSection = capabilitiesHeaderSection.nextElementSibling;
					if (capabilitiesSection) {
							capabilitiesSection.classList.add('spz__capabilities');

							const accordionContainer = capabilitiesSection.querySelector('.f--col-6.f--col-tablets-12');
							if (accordionContainer) {
									accordionContainer.classList.add('f--col-tabletl-12');
									accordionContainer.classList.remove('f--col-tablets-12');
							}

							const ctaRow = `
									<div class="spz__capabilities__cta-row">
											<button class="spz__capabilities__cta-button c--hero-e__wrapper__content__list-group__item spz6015_v2">Free download</button>
											<button class="spz__capabilities__cta-button c--hero-e__wrapper__content__list-group__item spz6015_v2">Launch in-browser demo</button>
									</div>
							`;

							const accordionItems = capabilitiesSection.querySelectorAll('.js--collapsify.js--accordion .c--accordion-a');
							if (accordionItems.length > 0) {
									const firstItem = accordionItems[0];
									let imageSetFirst = getImageSet('accordion-5-0');
									firstItem.querySelector('.c--accordion-a__bd__content p').innerHTML = 'Scan your AD automatically and generate detailed risk reports exposing weaknesses and breach points.';
									firstItem.querySelector('.c--accordion-a__bd__content p').insertAdjacentHTML('afterend', ctaRow);
									firstItem.querySelector('.c--accordion-a__bd__content').insertAdjacentHTML('beforeend', `
													<picture loading="eager">
															<source srcset="${imageSetFirst.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
															<source srcset="${imageSetFirst.mobile}" type="image/webp" media="(max-width: 767px)">
															<img src="${imageSetFirst.desktop}" alt="${imageSetFirst.alt}">
													</picture>
									`);
									firstItem.querySelector('.spz__capabilities__cta-row button:nth-child(1)').addEventListener('click', firstButtonClick);
									firstItem.querySelector('.spz__capabilities__cta-row button:nth-child(2)').addEventListener('click', secondButtonClick);

									const secondItem = accordionItems[1];
									let imageSetSecond = getImageSet('accordion-5-1');
									secondItem.querySelector('.c--accordion-a__bd__content p').innerHTML = 'Get a clear risk score that helps you focus your efforts on the most critical security issues before they escalate.';
									secondItem.querySelector('.c--accordion-a__bd__content p').insertAdjacentHTML('afterend', ctaRow);
									secondItem.querySelector('.c--accordion-a__bd__content').insertAdjacentHTML('beforeend', `
													<picture loading="eager">
															<source srcset="${imageSetSecond.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
															<source srcset="${imageSetSecond.mobile}" type="image/webp" media="(max-width: 767px)">
															<img src="${imageSetSecond.desktop}" alt="${imageSetSecond.alt}">
													</picture>
									`);
									secondItem.querySelector('.spz__capabilities__cta-row button:nth-child(1)').addEventListener('click', firstButtonClick);
									secondItem.querySelector('.spz__capabilities__cta-row button:nth-child(2)').addEventListener('click', secondButtonClick);

									const thirdItem = accordionItems[2];
									let imageSetThird = getImageSet('accordion-5-2');
									thirdItem.querySelector('.c--accordion-a__bd__content p').innerHTML = 'Close security gaps with remediation guidance to strengthen your identity security posture.';
									thirdItem.querySelector('.c--accordion-a__bd__content p').insertAdjacentHTML('afterend', ctaRow);
									thirdItem.querySelector('.c--accordion-a__bd__content').insertAdjacentHTML('beforeend', `
													<picture loading="eager">
															<source srcset="${imageSetThird.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
															<source srcset="${imageSetThird.mobile}" type="image/webp" media="(max-width: 767px)">
															<img src="${imageSetThird.desktop}" alt="${imageSetThird.alt}">
													</picture>
									`);
									thirdItem.querySelector('.spz__capabilities__cta-row button:nth-child(1)').addEventListener('click', firstButtonClick);
									thirdItem.querySelector('.spz__capabilities__cta-row button:nth-child(2)').addEventListener('click', secondButtonClick);

									const fourthItem = accordionItems[3];
									let imageSetFourth = getImageSet('accordion-5-3');
									fourthItem.querySelector('.c--accordion-a__bd__content p').innerHTML = 'Run scheduled AD risk assessment scans in the paid version to track risk trends and improve security.';
									fourthItem.querySelector('.c--accordion-a__bd__content p').insertAdjacentHTML('afterend', ctaRow);
									fourthItem.querySelector('.c--accordion-a__bd__content').insertAdjacentHTML('beforeend', `
													<picture loading="eager">
															<source srcset="${imageSetFourth.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
															<source srcset="${imageSetFourth.mobile}" type="image/webp" media="(max-width: 767px)">
															<img src="${imageSetFourth.desktop}" alt="${imageSetFourth.alt}">
													</picture>
									`);
									fourthItem.querySelector('.spz__capabilities__cta-row button:nth-child(1)').addEventListener('click', firstButtonClick);
									fourthItem.querySelector('.spz__capabilities__cta-row button:nth-child(2)').addEventListener('click', secondButtonClick);
							}

							const figure = capabilitiesSection.querySelector('figure.c--layout-b__media-wrapper');
							if (figure) {
									figure.classList.add('spz__hidden');
									figure.parentElement.classList.remove('f--col-5');
									figure.parentElement.classList.add('f--col-6');
									figure.parentElement.classList.remove('f--col-tabletl-6');
									figure.parentElement.classList.add('f--col-tabletl-12');
							}

							capabilitiesSection.querySelectorAll('button.c--accordion-a__hd').forEach(button => {
									button.addEventListener('click', (e) => {
											const target = e.currentTarget;
											const accordionItem = target.closest('.c--accordion-a');
											if (accordionItem && window.innerWidth <= 1300) {
													setTimeout(() => {
															accordionItem.style.scrollMarginTop = '120px';
															accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
													}, 500);
											}
											const dataAccordianControl = target.getAttribute('data-accordion-5-control');
											let imageSet = getImageSet(dataAccordianControl);

											const figure = capabilitiesSection.querySelector('figure.c--layout-b__media-wrapper');
											figure.parentElement.querySelector('picture').remove();
											figure.insertAdjacentHTML('afterend', `
													<picture loading="eager">
															<source srcset="${imageSet.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
															<source srcset="${imageSet.mobile}" type="image/webp" media="(max-width: 767px)">
															<img src="${imageSet.desktop}" alt="${imageSet.alt}">
													</picture>
											`);
											animateAccordionImage(figure.parentElement.querySelector('picture img'));
									});
							});

							const defaultImageSet = getImageSet('accordion-5-0');
							if(figure) {
									figure.insertAdjacentHTML('afterend', `
											<picture loading="eager">
													<source srcset="${defaultImageSet.tablet}" type="image/webp" media="(min-width: 768px) and (max-width: 1023px)">
													<source srcset="${defaultImageSet.mobile}" type="image/webp" media="(max-width: 767px)">
													<img src="${defaultImageSet.desktop}" alt="${defaultImageSet.alt}">
											</picture>
									`);
									animateAccordionImage(figure.parentElement.querySelector('picture img'));
							}
					}
			}
	}

	// Function to set AB_Testing__c field value
	function setABTestingValue() {
		const inputs = document.querySelectorAll('input[name="AB_Testing__c"]');
		if (inputs.length > 0) {
			inputs.forEach(input => {
				input.value = 'Variation2_6015';
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
	const variantName = `Variantion2_` + expName; //variantName should be variant_, true_control_ etc.
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
	if (!document.body.classList.contains('spz_6015_v2')) return;
	document.body.classList.remove('spz_6015_v2');

	if (document.body.classList.contains(injectBrowserClass())) document.body.classList.remove(injectBrowserClass());
	console.log("6015-v2 removed: " + getTimestamp());
}

let injectionTimeout = null;

if (!document.body.classList.contains('spz_6015_v2_observed')) {
	const bodyObserver = new MutationObserver(() => {
			clearTimeout(injectionTimeout);
			if(!document.body.classList.contains('spz__invisible')) document.body.classList.add('spz__invisible');
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
	document.body.classList.add('spz_6015_v2_observed');
}
