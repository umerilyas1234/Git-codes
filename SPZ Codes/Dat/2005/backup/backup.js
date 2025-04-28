console.log('variant 1');

let heroSelector = `.layout.layout-canvas-g`;
const position = "beforebegin"
const formSelector = `form`;

let heroContent = {}
if (window.location.pathname === '/sales-inquiry-professional-services') {
	heroContent = {
		//[1] Hero form heading
		customHTMLBefore: `
    <div class="form-heading">
      Get a demo
    </div>
  `,
		//[2] Hero form prozac
		customHTMLAfter: `
			<div class="privacy-item">I agree to receive alerts and promotional messages from DAT Solutions, LLC. Click to view our <a href="https://www.dat.com/privacy-policy">Privacy Policy</a> & <a href="https://www.dat.com/terms-and-conditions">Terms and Conditions.</a></div>
		`,
		//[3] Content eyebrow
		contentSuperHeading: "",
		//[4] Content trustBadge
		trustBadge: [],
		//[5] Hero heading
		contentHeading: "Access Freight Capacity and Rates to Optimize Your Supply Chain",
		//[6] Hero pills
		contentPills: [],
		//[7] Hero subheading
		contentSubHeading: "",
		//[8] Arrow image between the form and content
		middleArrowImage: [
			{
				breakPoint: 992,
				url: "https://res.cloudinary.com/spiralyze/image/upload/v1730403828/dat/2001/form-arrow_n.svg",
			},
		],
		//Alt value for arrow
		middleArrowAlt: "arrow",
		//[9] Hero bullets
		features: [
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Load Matching.</b> Post, book, and track loads on the nation’s largest source of capacity. Strengthen routing guides to navigate volatility.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Rate Visibility.</b> Evaluate rates and market conditions across nearly all North American lanes. Control costs while balancing service levels and operational efficiency.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Strategic Partnership.</b> Leverage our team’s extensive experience and expertise to elevate your strategy and put data to work.",
			},
		],
	};
}
if (window.location.pathname === '/sales-inquiry-promotion-2') {
	heroContent = {
		//[1] Hero form heading
		customHTMLBefore: `
    <div class="form-heading">
      Get a demo
    </div>
  `,
		//[2] Hero form prozac
		customHTMLAfter: `
			<div class="privacy-item">I agree to receive alerts and promotional messages from DAT Solutions, LLC. Click to view our <a href="https://www.dat.com/privacy-policy">Privacy Policy</a> & <a href="https://www.dat.com/terms-and-conditions">Terms and Conditions.</a></div>
		`,
		//[3] Content eyebrow
		contentSuperHeading: "",
		//[4] Content trustBadge
		trustBadge: [],
		//[5] Hero heading
		contentHeading: "Get better matches & rates with Load Board + RateView",
		//[6] Hero pills
		contentPills: [],
		//[7] Hero subheading
		contentSubHeading: "",
		//[8] Arrow image between the form and content
		middleArrowImage: [
			{
				breakPoint: 992,
				url: "https://res.cloudinary.com/spiralyze/image/upload/v1730403828/dat/2001/form-arrow_n.svg",
			},
		],
		//Alt value for arrow
		middleArrowAlt: "arrow",
		//[9] Hero bullets
		features: [
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Load Board.</b> Find and post loads on the largest national loadboard. Source hidden capacity.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Rates.</b> View current and historical rates across lanes. TL, LTL, Intermodal. Cut costs.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Savings.</b> Save by bundling. No more time spent on manually sourcing capacity or finding rates.",
			},
		],
	};
}
if (window.location.pathname === '/sales-inquiry-rateview') {
	heroContent = {
		//[1] Hero form heading
		customHTMLBefore: `
    <div class="form-heading">
      Get a demo
    </div>
  `,
		//[2] Hero form prozac
		customHTMLAfter: `
			<div class="privacy-item">I agree to receive alerts and promotional messages from DAT Solutions, LLC. Click to view our <a href="https://www.dat.com/privacy-policy">Privacy Policy</a> & <a href="https://www.dat.com/terms-and-conditions">Terms and Conditions.</a></div>
		`,
		//[3] Content eyebrow
		contentSuperHeading: "",
		//[4] Content trustBadge
		trustBadge: [],
		//[5] Hero heading
		contentHeading: "DAT iQ RateView: Market Rate & Forecast Intelligence for Shippers",
		//[6] Hero pills
		contentPills: [],
		//[7] Hero subheading
		contentSubHeading: "",
		//[8] Arrow image between the form and content
		middleArrowImage: [
			{
				breakPoint: 992,
				url: "https://res.cloudinary.com/spiralyze/image/upload/v1730403828/dat/2001/form-arrow_n.svg",
			},
		],
		//Alt value for arrow
		middleArrowAlt: "arrow",
		//[9] Hero bullets
		features: [
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Reliable Rate Insights.</b> Single-lane spot and contract rate trends, plus AI-powered rate forecasts to guide procurement and negotiation strategies.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Navigate Market Volatility.</b> Market conditions insights enable RFP process optimization, routing guide management, and improved agility.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Drive Savings & Efficiency.</b> Secure capacity for project-based freight, maintain budgets, and improve network stability with data-backed insights.",
			},
		],
	};
}
if (window.location.pathname === '/Empower_iQ') {
	heroSelector = `.widget.widget-smartsection`
	heroContent = {
		//[1] Hero form heading
		customHTMLBefore: `
    <div class="form-heading">
      Get a demo
    </div>
  `,
		//[2] Hero form prozac
		customHTMLAfter: `
			<div class="privacy-item">I agree to receive alerts and promotional messages from DAT Solutions, LLC. Click to view our <a href="https://www.dat.com/privacy-policy">Privacy Policy</a> & <a href="https://www.dat.com/terms-and-conditions">Terms and Conditions.</a></div>
		`,
		//[3] Content eyebrow
		contentSuperHeading: "DAT iQ Analytics Solutions for Shippers",
		//[4] Content trustBadge
		trustBadge: [],
		//[5] Hero heading
		contentHeading: "Empower Confident Decisions & Optimize<br> Your Network",
		//[6] Hero pills
		contentPills: [],
		//[7] Hero subheading
		contentSubHeading: "",
		//[8] Arrow image between the form and content
		middleArrowImage: [
			{
				breakPoint: 992,
				url: "https://res.cloudinary.com/spiralyze/image/upload/v1730403828/dat/2001/form-arrow_n.svg",
			},
		],
		//Alt value for arrow
		middleArrowAlt: "arrow",
		//[9] Hero bullets
		features: [
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Rate Analytics.</b> Past, present, and future market rate visibility for strategic planning, risk management, performance optimization, and cost control.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Network Analytics.</b> Leverage real transaction data and capacity trends to build a resilient, long-term procurement strategy.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Analytics Services.</b> Bolster your operations with advanced data support, seamless integration, and expert consultation.",
			},
		],
	};
}
if (window.location.pathname === '/inquiry-iq') {
	heroSelector = `.widget.widget-smartsection`
	heroContent = {
		//[1] Hero form heading
		customHTMLBefore: `
    <div class="form-heading">
      Get a demo
    </div>
  `,
		//[2] Hero form prozac
		customHTMLAfter: `
			<div class="privacy-item">I agree to receive alerts and promotional messages from DAT Solutions, LLC. Click to view our <a href="https://www.dat.com/privacy-policy">Privacy Policy</a> & <a href="https://www.dat.com/terms-and-conditions">Terms and Conditions.</a></div>
		`,
		//[3] Content eyebrow
		contentSuperHeading: "DAT iQ Analytics Solutions for Shippers",
		//[4] Content trustBadge
		trustBadge: [],
		//[5] Hero heading
		contentHeading: "Power Your Strategy with Data-Driven Insights",
		//[6] Hero pills
		contentPills: [],
		//[7] Hero subheading
		contentSubHeading: "",
		//[8] Arrow image between the form and content
		middleArrowImage: [
			{
				breakPoint: 992,
				url: "https://res.cloudinary.com/spiralyze/image/upload/v1730403828/dat/2001/form-arrow_n.svg",
			},
		],
		//Alt value for arrow
		middleArrowAlt: "arrow",
		//[9] Hero bullets
		features: [
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Validate.</b> Reliable rate visibility to evaluate pricing and keep a pulse on the freight market, enabling faster, more confident decision-making.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Optimize.</b> Analyze key business drivers to enhance performance and streamline operations, ensuring maximum efficiency across your network.",
			},
			{
				checkmarkImage:
					"https://res.cloudinary.com/spiralyze/image/upload/v1729238006/dat/2001/bullet.svg",
				featureItemContent:
					"<b>Strategize.</b> Leverage high-level insights and executive reporting for long-term planning, helping you measure performance, manage costs, and support strategic growth.",
			},
		],
	};
}
const additionalSection = {
}
let inputsSelectors = []
let labelValues = []

if (window.location.pathname === '/sales-inquiry-professional-services' || window.location.pathname === '/sales-inquiry-promotion-2' || window.location.pathname === '/sales-inquiry-rateview') {
	inputsSelectors = [`[name="firstname"]`, `[name="lastname"]`, `[name="email"]`, `[name="company"]`, `[name="state"]`, `[name="phone"]`, `[name="segment"]`, `[name="authority"]`, `[name="DOT"]`, `[name="MC"]`, `[name="NoAuthority"]`]
	labelValues = ["First Name", "Last Name", "Email", "Company", "State", "Phone", "Transportation Role", "Authority", "DOT", "MC Number", "Describe Your Business"];
	// hide fields on start
	const fieldsToHide = [`[name="state"]`, `[name="phone"]`, `[name="segment"]`, `[name="authority"]`];

	setTimeout(() => {
		// change input position
		fieldsToHide.forEach(selector => {
			const field = document.querySelector(selector);
			if (field) {
				const wrapper = field.closest('.spz-input-wrap');
				if (wrapper) wrapper.classList.add('hide');
				console.log(wrapper)
			} else {
				console.warn(`Element not found for selector: ${selector}`);
			}
		});
	}, 500);


	document.querySelectorAll(inputsSelectors.join(',')).forEach(input => {
		['keyup', 'input'].forEach(event => {
			input.addEventListener(event, function () {
				const firstName = document.querySelector('[name="firstname"]')?.value.trim();
				const lastName = document.querySelector('[name="lastname"]')?.value.trim();
				const email = document.querySelector('[name="email"]')?.value.trim();
				const company = document.querySelector('[name="company"]')?.value.trim();

				// Validate email format
				const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
				const emailValid = emailPattern.test(email);

				// Check if all required fields are filled and email is valid
				if (firstName && lastName && email !== '' && company && emailValid) {
					// Unhide fields
					fieldsToHide.forEach(selector => {
						const field = document.querySelector(selector);
						if (field) {
							const wrapper = field.closest('.spz-input-wrap');
							if (wrapper?.classList.contains('hide')) {
								wrapper.classList.remove('hide');
								document.querySelector('.the-form form')?.classList.add('formProgressive');
							}
						}
					});
					removeError(); // Remove error if all conditions are met

				} else if (!emailValid && email.includes('@')) {
					// If email format is incorrect after user has typed "@"
					showError('Valid email required.');
				}

				document.querySelector('[name="email"]').addEventListener('blur', function () {
					const email = this.value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					if (!emailValid && email !== '') {
						// If the email is invalid, keep showing the error
						showError('Valid email required.');
					} else {
						removeError();
					}
				});

				function showError(message) {
					let errorMsg = document.querySelector('.error-message');
					const svgIcon = `
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<g clip-path="url(#clip0_9232_488)">
															<path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
															<clipPath id="clip0_9232_488">
																	<rect width="16" height="16" fill="white"></rect>
															</clipPath>
													</defs>
											</svg>`;

					const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

					if (!errorMsg) {
						errorMsg = document.createElement('div');
						errorMsg.className = 'error-message';
						errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
						document.querySelector('[name="email"]').after(errorMsg);
					}
				}

				function removeError() {
					const email = document.querySelector('[name="email"]').value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					// Only remove error if the email is valid
					if (emailValid) {
						const errorMsg = document.querySelector('.error-message');
						if (errorMsg) {
							errorMsg.remove();
						}
					}
				}

			});
		});
	});
}

if (window.location.pathname === '/Empower_iQ') {
	inputsSelectors = [`[name="name"]`, `[name="LastName"]`, `[name="company"]`, `[name="jobtitle"]`, `[name="Phone"]`, `[name="Email"]`, `[name="Country"]`, `[name="State"]`, `[name="Industry"]`, `[name="Transportation-Role"]`]
	labelValues = ["First Name", "Last Name", "Company", "Job Title", "Phone", "Email", "Country", "State", "Industry", "Transportation Role"]

	// hide fields on start
	const fieldsToHide = [`[name="Country"]`, `[name="State"]`, `[name="Industry"]`, `[name="Transportation-Role"]`];

	setTimeout(() => {
		// change input position
		fieldsToHide.forEach(selector => {
			const field = document.querySelector(selector);
			if (field) {
				const wrapper = field.closest('.spz-input-wrap');
				if (wrapper) wrapper.classList.add('hide');
			} else {
				console.warn(`Element not found for selector: ${selector}`);
			}
		});
	}, 500);

	// Add both keyup and input event listeners to handle typing and autofill
	document.querySelectorAll(inputsSelectors.join(',')).forEach(input => {
		['keyup', 'input'].forEach(event => {
			input.addEventListener(event, function () {
				const firstName = document.querySelector('[name="name"]')?.value.trim();
				const lastName = document.querySelector('[name="LastName"]')?.value.trim();
				const email = document.querySelector('[name="Email"]')?.value.trim();
				const company = document.querySelector('[name="company"]')?.value.trim();
				const jobTitle = document.querySelector('[name="jobtitle"]')?.value.trim();
				const phone = document.querySelector('[name="Phone"]')?.value.trim();

				// Check if all required fields are filled and email is valid
				if (firstName && lastName && email && company && jobTitle && phone) {
					// Unhide fields
					fieldsToHide.forEach(selector => {
						const field = document.querySelector(selector);
						if (field) {
							const wrapper = field.closest('.spz-input-wrap');
							if (wrapper?.classList.contains('hide')) {
								wrapper.classList.remove('hide');
								document.querySelector('.the-form form')?.classList.add('formProgressive');
							}
						}
					});
					removeError(); // Remove error if all conditions are met

				} else if (!emailValid && email.includes('@')) {
					// If email format is incorrect after user has typed "@"
					showError('Valid email required.');
				}

				document.querySelector('[name="email"]').addEventListener('blur', function () {
					const email = this.value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					if (!emailValid && email !== '') {
						// If the email is invalid, keep showing the error
						showError('Valid email required.');
					} else {
						removeError();
					}
				});

				function showError(message) {
					let errorMsg = document.querySelector('.error-message');
					const svgIcon = `
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<g clip-path="url(#clip0_9232_488)">
															<path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
															<clipPath id="clip0_9232_488">
																	<rect width="16" height="16" fill="white"></rect>
															</clipPath>
													</defs>
											</svg>`;

					const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

					if (!errorMsg) {
						errorMsg = document.createElement('div');
						errorMsg.className = 'error-message';
						errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
						document.querySelector('[name="email"]').after(errorMsg);
					}
				}

				function removeError() {
					const email = document.querySelector('[name="email"]').value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					// Only remove error if the email is valid
					if (emailValid) {
						const errorMsg = document.querySelector('.error-message');
						if (errorMsg) {
							errorMsg.remove();
						}
					}
				}
			});
		});
	});

}

if (window.location.pathname === '/inquiry-iq') {
	inputsSelectors = [`[name="name"]`, `[name="LastName"]`, `[name="company"]`, `[name="jobtitle"]`, `[name="Phone"]`, `[name="Email"]`, `[name="Country"]`, `[name="State"]`, `[name="Transportation-Role"]`]
	labelValues = ["First Name", "Last Name", "Company", "Job Title", "Phone", "Email", "Country", "State", "Transportation Role"]

	// hide fields on start
	const fieldsToHide = [`[name="Country"]`, `[name="State"]`, `[name="Transportation-Role"]`];

	setTimeout(() => {
		// change input position
		fieldsToHide.forEach(selector => {
			const field = document.querySelector(selector);
			if (field) {
				const wrapper = field.closest('.spz-input-wrap');
				if (wrapper) wrapper.classList.add('hide');
			} else {
				console.warn(`Element not found for selector: ${selector}`);
			}
		});
	}, 500);

	// Add both keyup and input event listeners to handle typing and autofill
	document.querySelectorAll(inputsSelectors.join(',')).forEach(input => {
		['keyup', 'input'].forEach(event => {
			input.addEventListener(event, function () {
				const firstName = document.querySelector('[name="name"]')?.value.trim();
				const lastName = document.querySelector('[name="LastName"]')?.value.trim();
				const email = document.querySelector('[name="Email"]')?.value.trim();
				const company = document.querySelector('[name="company"]')?.value.trim();
				const jobTitle = document.querySelector('[name="jobtitle"]')?.value.trim();
				const phone = document.querySelector('[name="Phone"]')?.value.trim();

				// Check if all required fields are filled and email is valid
				if (firstName && lastName && email && company && jobTitle && phone) {
					// Unhide fields
					fieldsToHide.forEach(selector => {
						const field = document.querySelector(selector);
						if (field) {
							const wrapper = field.closest('.spz-input-wrap');
							if (wrapper?.classList.contains('hide')) {
								wrapper.classList.remove('hide');
								document.querySelector('.the-form form')?.classList.add('formProgressive');
							}
						}
					});
					removeError(); // Remove error if all conditions are met

				} else if (!emailValid && email.includes('@')) {
					// If email format is incorrect after user has typed "@"
					showError('Valid email required.');
				}

				document.querySelector('[name="email"]').addEventListener('blur', function () {
					const email = this.value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					if (!emailValid && email !== '') {
						// If the email is invalid, keep showing the error
						showError('Valid email required.');
					} else {
						removeError();
					}
				});

				function showError(message) {
					let errorMsg = document.querySelector('.error-message');
					const svgIcon = `
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
													<g clip-path="url(#clip0_9232_488)">
															<path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													</g>
													<defs>
															<clipPath id="clip0_9232_488">
																	<rect width="16" height="16" fill="white"></rect>
															</clipPath>
													</defs>
											</svg>`;

					const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

					if (!errorMsg) {
						errorMsg = document.createElement('div');
						errorMsg.className = 'error-message';
						errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
						document.querySelector('[name="email"]').after(errorMsg);
					}
				}

				function removeError() {
					const email = document.querySelector('[name="email"]').value;
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(email);

					// Only remove error if the email is valid
					if (emailValid) {
						const errorMsg = document.querySelector('.error-message');
						if (errorMsg) {
							errorMsg.remove();
						}
					}
				}
			});
		});
	});
}

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to add input listeners like focus, blur and add class to parent div
function addInputListener(input) {
	input.placeholder = "";
	input.addEventListener("focus", function () {
		input.closest(".spz-input-wrap").classList.remove("has-value");
		input.closest(".spz-input-wrap").classList.add("focused");
	});
	input.addEventListener("blur", function () {
		if (input.value.length > 0) {
			input.closest(".spz-input-wrap").classList.remove("focused");
			input.closest(".spz-input-wrap").classList.add("has-value");
		} else {
			input.closest(".spz-input-wrap").classList.remove("focused");
		}
	});
}
function createWrapper(inputs) {
	if (window.location.pathname === '/Empower_iQ' || window.location.pathname === '/inquiry-iq') {
		inputs.forEach((item) => {
			document.querySelector(item).parentElement.classList.add('spz-input-wrap')
		})
	} else {
		inputs.forEach((item, index) => {
			let _input = document.querySelector(item)
			let _label = document.querySelector(item).previousElementSibling
			let _wrapper = document.createElement('div')
			_input.setAttribute('tabindex', index + 1)
			_wrapper.classList.add(`spz-input-wrap`)
			_wrapper.classList.add(`${item.split('"')[1]}`)
			_input.parentNode.insertBefore(_wrapper, _input)
			_wrapper.appendChild(_label)
			_wrapper.appendChild(_input)
		})
	}


}
//Helper function to animate labels for inputs
function animateLabels(inputs, labelValues) {
	inputs.forEach((item, index) => {
		//createWrapper(item)
		const parentDiv = findParent(item);
		if (!parentDiv) return; // Skip if we can't find a suitable parent

		let input = document.querySelector(item);

		// Check if the input is wrapped in another div (e.g., for error states)
		if (input.parentElement !== parentDiv) {
			input = input.parentElement; // Use the wrapper as our insertion point
		}

		// Check if we've already added our custom label
		if (parentDiv.querySelector('.label-spz')) return;

		const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
		if (existingLabel) existingLabel.style.display = 'none';

		const label = document.createElement('label');
		label.innerText = labelValues[index];
		label.classList.add('label-spz');
		label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
		label.style.width = '';
		//parentDiv.classList.add('spz-input-wrap');
		//console.log(parentDiv);

		// Check if the input is a select and the first option has an empty value
		if (input.tagName === 'SELECT' && input.options[0].value === '') {
			//parentDiv.classList.add('has-value');
		} else if (input.value) {
			parentDiv.classList.add('has-value');
		}

		label.addEventListener('click', function (e) {
			const actualInput = parentDiv.querySelector('input, select, textarea');
			if (actualInput) actualInput.focus();
		});

		parentDiv.insertBefore(label, input);

		addInputListener(document.querySelector(item));
		document.querySelector(item).setAttribute('placeholder', '');
	});
}
function findParent(inputSelector) {
	const input = document.querySelector(inputSelector);
	if (!input) return null;

	let currentElement = input;

	while (currentElement && currentElement.tagName !== 'BODY') {
		// Check if this element contains a label (including hidden ones)
		const label = currentElement.querySelector('label');

		// Check if this element contains the input or its wrapper
		const containsInput = currentElement.contains(input);

		// If we have both a label and the input, this is likely our target
		if (label && containsInput) {
			return currentElement;
		}

		currentElement = currentElement.parentElement;
	}

	// If no suitable parent is found, return the immediate parent
	return input.parentElement;
}
function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
	const formTemplate = `
		<div class="spz-bg-wrap">
	        <div class="spz-form-wrap">
			  <div class="content-section">
	            ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
			? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
			: ""
		}
	            ${formData.trustBadge.length !== 0
			? `<div class="trust-badge">
	            	<picture>
		              ${formData.trustBadge.map(
				(item) =>
					`<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
			)
				.join("")
			}
		              <img src="${formData.trustBadge[0].url}" alt="trust badge" />
		            </picture>
	            </div>`
			: ""
		}
	            ${formData.contentHeading.replace(/\s/g, "").length !== 0
			? `<div class="content-heading">${formData.contentHeading}</div>`
			: ""
		}
	            ${formData.contentPills.length !== 0
			? `<div class="pills-wrap">
		              ${formData.contentPills.map(
				(item) =>
					`<div class="pill-item">${item}</div>`
			)
				.join("")}
	            	</div>`
			: ""
		}
	            ${formData.contentSubHeading.replace(/\s/g, "").length !== 0
			? `<div class="content-subheading">${formData.contentSubHeading}</div>`
			: ""
		}
	            <div class="spz-features-wrap">
	              ${formData.features.length > 0
			? formData.features
				.map((item) => {
					return `<div class="feature-item">
	                          <img src="${item.checkmarkImage}" alt="checkmark" />
	                          <span>${item.featureItemContent}</span>
	                        </div>`;
				})
				.join("")
			: ""
		}
	            </div>
	          </div>
	          <div class="middle-arrow-image">
	            <picture>
	              ${formData.middleArrowImage
			.map(
				(item) =>
					`<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
			)
			.join("")}
	              <img src="${formData.middleArrowImage[0].url}" alt="${formData.middleArrowAlt}" />
	            </picture>
	          </div>
	          <div class="spz-form-section">
	            ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
			? formData.customHTMLBefore
			: ""
		}
	            <div class="the-form"></div>
	            ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
			? formData.customHTMLAfter
			: ""
		}
	          </div>
	        </div>
	        ${typeof additionalSection.interfaceImage !== 'undefined' ?
			`<div class="interface-image-wrap">
	        	<picture>
	        		${additionalSection.interfaceImage.map(item => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")
			}
	        		<img src="${additionalSection.interfaceImage[0].url}" alt="Interface Image" />
	        	</picture>
	        </div>
	        `: ``}
	        ${typeof additionalSection.socialProofLogos !== 'undefined' ?
			`<div class="social-proof-logos">
	        	<div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
	        	<picture>
	        		${additionalSection.socialProofLogos.socialProofImages.map(item => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")
			}
	        		<img src="${additionalSection.socialProofLogos.socialProofImages[0].url}" alt="Social Proof Image" />
	        	</picture>
	        </div>
	        `: ``}
	        ${typeof additionalSection.reviewsRibbon !== 'undefined' ?
			`<div class="review-ribbon-wrap">
	        	<div class="review-ribbon-info">
	        		<img src="${additionalSection.reviewsRibbon.ratingInfo.ratingCompany}" class="review-company-logo"/>
	        		<img src="${additionalSection.reviewsRibbon.ratingInfo.ratingStars}" class="review-company-rating"/>
	        		<div class="reviews-count">${additionalSection.reviewsRibbon.ratingInfo.rating} ${additionalSection.reviewsRibbon.ratingInfo.reviewsCount}</div>
	        	</div>
	        	<div class="reviews-wrap">
	        		<div class="splide" role="group">
						  <div class="splide__track">
								<ul class="splide__list reviews-list-wrap">
									${additionalSection.reviewsRibbon.reviews.map((slide) => {
				return `
										<li class="splide__slide review-item">
											${slide.starRating.replace(/\s/g, '')
						.length !== 0
						? `<img src="${slide.starRating}" class="review-star-rating"/>`
						: ``
					}
											${slide.reviewCopy.replace(/\s/g, '')
						.length !== 0
						? `<div class="review-heading">${slide.reviewHeading}</div>`
						: ``
					}
											${slide.reviewCopy.replace(/\s/g, '')
						.length !== 0
						? `<div class="review-copy">${slide.reviewCopy}</div>`
						: ``
					}
											
											<div class="review-author">
											${slide.authorPic.replace(/\s/g, '')
						.length !== 0
						? `<div class="author-pic">${slide.authorPic}</div>`
						: ``
					}
												<div class="autorInfo">
													${slide.authorName.replace(/\s/g, '')
						.length !== 0
						? `<div class="author-name">${slide.authorName}</div>`
						: ``
					}
													${slide.authorPosition.replace(/\s/g, '')
						.length !== 0
						? `<div class="author-position">${slide.authorPosition}</div>`
						: ``
					}
												</div>
											</div>
										</li>
									`;
			}).join('')}
							</ul>
						  </div>
						</div>
	        		</div>
	        </div>
	        `: ``}
	  </div>`;
	if (typeof additionalSection.reviewsRibbon !== 'undefined') {
		var splideScript = document.createElement('script');
		splideScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
		var splideStyle = document.createElement('link');
		splideStyle.rel = 'stylesheet';
		splideStyle.type = 'text/css';
		splideStyle.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
		document.body.appendChild(splideScript);
		document.body.appendChild(splideStyle);
	}
	document
		.querySelector(heroSelector)
		.insertAdjacentHTML(whereToPut, formTemplate);
	let formLoaded = setInterval(() => {
		if (document.querySelector(formSelector)) {
			clearInterval(formLoaded)
			document
				.querySelector(".spz-form-wrap .the-form")
				.appendChild(document.querySelector(formSelector));
			createWrapper(inputsSelectors)
			setTimeout(function () { animateLabels(inputsSelectors, labelValues) }, 500);
		}
	})
	let splideLoaded = setInterval(() => {
		if (typeof Splide !== 'undefined' && additionalSection.reviewsRibbon !== 'undefined') {
			new Splide('.splide', additionalSection.reviewsRibbon.sliderSettings).mount();
			clearInterval(splideLoaded)
		}
	})

}
addBaseline(
	heroContent, //object with the data
	position, //any value you pass using insertAdjacentHTML
	formSelector, // control form selector
	heroSelector,
	additionalSection
);


const listenToErrors = () => {
	let errorInterval = setInterval(function () {
		let errors = document.querySelectorAll('.form-error-tooltip')
		if (errors.length > 0 && !document.querySelector('.the-form .form-error-tooltip')) {
			errors.forEach((item, index) => {
				let selector = item.getAttribute('data-uid')
				let elementWrapper = document.getElementById(selector).parentElement
				elementWrapper.classList.add('has-error')
				elementWrapper.appendChild(item)
				console.log(index + '-----' + errors.length)
				if (index === (errors.length - 1)) {
					clearInterval(errorInterval)
				}
			})
		}
	}, 100)
}


//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
const expName = '2005'; //experiment name should be #1001, #1002, #1003 etc.
const variantName = expName + `_V1`; //variantName should be _V1, _V2, _TC etc.
const clientDomain = '.dat.com'; //domain should be .spiralyze.com

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

jQuery(document).ready(function () {
	jQuery('body').addClass('spz-2005')
	if (window.location.pathname === '/sales-inquiry-professional-services') {
		jQuery('html').addClass('sales')
	}
	if (window.location.pathname === '/sales-inquiry-promotion-2') {
		jQuery('html').addClass('sales-2')
		jQuery('.smartcapture-controls').last().addClass('visible-terms')
		jQuery('#State option').first().text('').attr('disabled', "disabled")
		jQuery('#segment option').first().text('').attr('disabled', "disabled")
		jQuery('#auth_type option').first().text('').attr('disabled', "disabled")
		jQuery('#authType option').first().text('').attr('disabled', "disabled")
		jQuery('label.switch').attr('tabindex', '12')
		jQuery('input[type="submit"]').attr('tabindex', '13')
		jQuery('input[type="submit"]').val('SUBMIT')
		jQuery('<span>I agree to contact via email about DAT products and services.</span>').insertBefore('input[name="email_marketing"]')
		jQuery('.burger-icon').click(function () {
			jQuery('.tablet-burger, .spz-nav, .links-wrap-tablet-dropdown').toggleClass('open')

		})
	}
	if (window.location.pathname === '/sales-inquiry-rateview') {
		jQuery('html').addClass('sales-rate')
	}
	if (window.location.pathname === '/Empower_iQ') {
		jQuery('html').addClass('emp-iq')
	}
	if (window.location.pathname === '/inquiry-iq') {
		jQuery('html').addClass('inq-iq')
	}
	if (window.location.pathname === '/sales-inquiry-professional-services' || window.location.pathname === '/sales-inquiry-rateview') {
		jQuery('.smartcapture-controls').first().hide()
		jQuery('.smartcapture-controls').last().addClass('visible-terms')
		jQuery('#State option').first().text('').attr('disabled', "disabled")
		jQuery('#segment option').first().text('').attr('disabled', "disabled")
		jQuery('#auth_type option').first().text('').attr('disabled', "disabled")
		jQuery('#authType option').first().text('').attr('disabled', "disabled")
		jQuery('label.switch').attr('tabindex', '12')
		jQuery('input[type="submit"]').attr('tabindex', '13')
		jQuery('input[type="submit"]').val('SUBMIT')
		jQuery('<span>I agree to contact via email about DAT products and services.</span>').insertBefore('input[name="email_marketing"]')
		jQuery('.burger-icon').click(function () {
			jQuery('.tablet-burger, .spz-nav, .links-wrap-tablet-dropdown').toggleClass('open')

		})
	}

	if (window.location.pathname === '/Empower_iQ') {
		jQuery('body').addClass('iq')
		jQuery('select[name="Country"] option').first().text('')
		jQuery('select[name="State"] option').first().text('')
		jQuery('select[name="Industry"] option').first().text('')
		jQuery('select[name="Transportation-Role"] option').first().text('')
		jQuery('button[type="submit"]').html(`<div class="widget-overlay"></div>SUBMIT`)
		jQuery('#zRgXZs8SP18COVbGp10ghTRfORFpz4LA').text('By filling out this form, you agree to receive marketing communications from DAT Freight & Analytics. You can opt-out at any time.')
		jQuery('button[type="submit"]').on('click', () => { listenToErrors() })
	}
	if (window.location.pathname === '/inquiry-iq') {
		jQuery('body').addClass('iq')
		jQuery('#qGryukehl99T03Q4nSAObSCyxyEX2i5u label').text('I agree to contact via email about DAT products and services.')
		jQuery('select[name="Country"] option').first().text('')
		jQuery('select[name="State"] option').first().text('')
		jQuery('select[name="Industry"] option').first().text('')
		jQuery('select[name="Transportation-Role"] option').first().text('')
		jQuery('button[type="submit"]').html(`<div class="widget-overlay"></div>SUBMIT`)
		jQuery('#zRgXZs8SP18COVbGp10ghTRfORFpz4LA').text('By filling out this form, you agree to receive marketing communications from DAT Freight & Analytics. You can opt-out at any time.')
		jQuery('button[type="submit"]').on('click', () => { listenToErrors() })
	}


	hiddenValue(expName, variantName);
})
