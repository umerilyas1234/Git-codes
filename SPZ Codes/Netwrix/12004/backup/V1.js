/**
 * netwrix.com/en/lp/sharepoint-admin-toolkit/
 * netwrix.com/en/lp/windows-server-admin-toolkit/
 * netwrix.com/en/lp/microsoft-entra-id-security-toolkit/
 * netwrix.com/en/lp/ntfs-permissions-management-toolkit/
 * netwrix.com/en/lp/active-directory-admin-toolkit/
 */

const BODY_OBSERVER_CONFIG = {
	childList: true,
	subtree: true,
};

let CURRENT_PAGE_DATA = null;

const PAGE_DATA = {
	"lp-sharepoint-admin-toolkit": {
			text: "Gain complete visibility and control over your SharePoint environment.",
			path: "/en/lp/sharepoint-admin-toolkit/",
	},
	"lp-windows-server-admin-toolkit": {
			text: "Track changes, monitor file activity, audit accounts, and automate password alerts.",
			path: "/en/lp/windows-server-admin-toolkit/",
	},
	"lp-microsoft-entra-id-security-toolkit": {
			text: "Automate identity security across Microsoft Entra ID.",
			path: "/en/lp/microsoft-entra-id-security-toolkit/",
	},
	"lp-ntfs-permissions-management-toolkit": {
			text: "Protect sensitive data while saving time on NTFS permissions management.",
			path: "/en/lp/ntfs-permissions-management-toolkit/",
	},
	"lp-active-directory-admin-toolkit": {
			text: "Save hours of manual work by automating your Active Directory management.",
			path: "/en/lp/active-directory-admin-toolkit/",
	},
};

function getCurrentPageData() {
	// 1. Normalize the current path to ensure it ends with a slash
	const currentPath = window.location.pathname.endsWith('/')
			? window.location.pathname
			: window.location.pathname + '/';

	// 2. Find the entry where the path matches exactly
	const match = Object.entries(PAGE_DATA).find(([key, data]) => data.path === currentPath);

	// 3. If found, return the combined object; otherwise return null
	if (match) {
			const [key, details] = match;
			return {
					key: key,
					...details
			};
	}

	return null;
}

function isVariantInjected() {
	return document.body.classList.contains('spz_12004_v1') && document.body.querySelector('.spz__sticky-bar');
}

function handleStickyBarDisplay() {
	if (!isVariantInjected()) return;

	const stickyBar = document.querySelector('.spz__sticky-bar');
	const heroSection = document.querySelector('main#swup > section:first-child');
	const footerSection = document.querySelector('footer.c--footer-a');

	const closeClicked = sessionStorage.getItem('spz12004__close_clicked');

	if (!stickyBar || closeClicked) return;

	// Calculate boundary points
	const heroSectionEnd = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;
	const footerSectionStart = footerSection ? footerSection.offsetTop : document.body.scrollHeight;

	// The bar should be visible ONLY if:
	// 1. We have scrolled past the Hero end
	// AND 
	// 2. The Footer start is not yet reached (the bar is above the footer)
	const isPastHero = window.scrollY > heroSectionEnd;
	const isBeforeFooter = (window.scrollY + window.innerHeight) < footerSectionStart;

	const shouldShow = isPastHero && isBeforeFooter;

	// toggle() with a second argument adds the class if true, removes if false.
	// This naturally prevents duplicate classes.
	stickyBar.classList.toggle('spz__sticky-bar--visible', shouldShow);
}

function injectVariant() {
	const currentPageData = getCurrentPageData();
	if (!currentPageData) return;
	if (CURRENT_PAGE_DATA && CURRENT_PAGE_DATA.key === currentPageData.key) return;
	else removeVariant();
	if (isVariantInjected()) return;
	const existingPageKeyClasses = document.body.className.match(/spz__[\w-]+/g);
	if (existingPageKeyClasses) {
			existingPageKeyClasses.forEach(cls => document.body.classList.remove(cls));
	}
	document.body.classList.add('spz_12004_v1', `spz__${currentPageData.key}`);
	document.body.insertAdjacentHTML('beforeend', `
			<div class="spz__sticky-bar">
					<div class="spz__sticky-bar__content">
							<div class="spz__sticky-bar__rating">
									<picture>
											<source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1763994666/netwrix/12004/vertical_reviews_summary_trustpilot_g2_capterra_sp.svg" media="(max-width: 767.98px)">
											<img src="https://res.cloudinary.com/spiralyze/image/upload/v1763994669/netwrix/12004/vertical_reviews_summary_trustpilot_g2_capterra_sp_1.svg" alt="Trustpilot G2 Capterra 4.5 Rating">
									</picture>
							</div>
							<div class="spz__sticky-bar__text">
									${currentPageData.text}
							</div>
							<div class="spz__sticky-bar__ctas">
									<button class="spz__sticky-bar__cta spz12004__cta">Instant Access</button>
							</div>
							<button class="spz__sticky-bar__close spz12004__close">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.26878 6.26122L9.30949 10.3019C9.44421 10.4321 9.62464 10.504 9.81192 10.5024C9.9992 10.5008 10.1784 10.4257 10.3108 10.2932C10.4432 10.1608 10.5183 9.98165 10.52 9.79437C10.5216 9.60709 10.4496 9.42665 10.3195 9.29194L6.27878 5.25122L10.3195 1.21051C10.4496 1.07579 10.5216 0.895363 10.52 0.708079C10.5183 0.520796 10.4432 0.341644 10.3108 0.20921C10.1784 0.0767753 9.9992 0.00165444 9.81192 2.70019e-05C9.62464 -0.00160044 9.44421 0.0703955 9.30949 0.200508L5.26878 4.24122L1.22806 0.200508C1.09274 0.0736119 0.913358 0.00434093 0.72787 0.00735292C0.542383 0.0103649 0.365343 0.0854237 0.234213 0.216647C0.103082 0.34787 0.0281484 0.524963 0.0252677 0.710452C0.0223869 0.895942 0.0917848 1.07528 0.218777 1.21051L4.25878 5.25122L0.218063 9.29194C0.149841 9.35783 0.0954256 9.43665 0.0579906 9.52379C0.0205556 9.61094 0.000851124 9.70467 2.69693e-05 9.79951C-0.000797185 9.89435 0.0172753 9.98841 0.0531902 10.0762C0.0891051 10.164 0.142143 10.2437 0.209209 10.3108C0.276276 10.3779 0.356027 10.4309 0.44381 10.4668C0.531593 10.5027 0.62565 10.5208 0.720492 10.52C0.815335 10.5192 0.909063 10.4994 0.996209 10.462C1.08335 10.4246 1.16217 10.3702 1.22806 10.3019L5.26878 6.26122Z" fill="#FAF6ED"></path>
									</svg>
							</button>
					</div>
			</div>
	`);
	window.addEventListener('scroll', handleStickyBarDisplay);

	document.querySelector('.spz_12004_v1 .spz__sticky-bar .spz__sticky-bar__content .spz__sticky-bar__ctas .spz__sticky-bar__cta').addEventListener('click', () => {
			// scroll to the top of the page
			window.scrollTo({
					top: 0,
					behavior: 'smooth'
			});
	});

	document.querySelector('.spz_12004_v1 .spz__sticky-bar .spz__sticky-bar__content .spz__sticky-bar__close').addEventListener('click', () => {
			document.querySelector('.spz_12004_v1 .spz__sticky-bar').classList.remove('spz__sticky-bar--visible');
			sessionStorage.setItem('spz12004__close_clicked', 'true');
	});

	handleStickyBarDisplay();

	CURRENT_PAGE_DATA = currentPageData;

	console.log('Variant injected');
}

function setupTracking() {
	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
	//exptName should be #1001, #1002, #1003 etc.
	const expName = '12004';
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

function removeVariant() {
	if (isVariantInjected()) {
			document.body.classList.remove('spz_12004_v1');
			document.body.querySelector('.spz__sticky-bar').remove();
			window.removeEventListener('scroll', handleStickyBarDisplay);
			console.log('Variant removed');
	}
}

let injectionTimeout = null;

const bodyObserver = new MutationObserver((mutations) => {
	injectionTimeout = setTimeout(() => {
			clearTimeout(injectionTimeout);
			if (getCurrentPageData() && !isVariantInjected()) {
					injectVariant();
			} else if (!getCurrentPageData() && isVariantInjected()) removeVariant();
	}, 300);
});

if (!document.body.classList.contains('spz_12004_v1_observed')) {
	bodyObserver.observe(document.body, BODY_OBSERVER_CONFIG);
	setupTracking();
	document.body.classList.add('spz_12004_v1_observed');
}
