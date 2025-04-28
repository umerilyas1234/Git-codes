const bodyInterval1001 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz-1001') && document.querySelector('.gradient')) {
		clearInterval(bodyInterval1001);

		document.querySelector('body').classList.add("spz-1001")
		document.querySelector('body').classList.add("spz_t1010");
		const setCookieTest = (name, value, days) => {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toUTCString();
			}
			document.cookie = name + "=" + (value || "") + expires + "; path=/";
		}


		const checkBoxValue = [];
		Array.prototype.remove = function () {
			var what, a = arguments, L = a.length, ax;
			while (L && this.length) {
				what = a[--L];
				while ((ax = this.indexOf(what)) !== -1) {
					this.splice(ax, 1);
				}
			}
			return this;
		};
		const combineWord = (wordArray) => {
			let myString = "";
			myString = wordArray.join(", ")
			if (wordArray.length == 2) {
				myString = myString.replace(", ", " and ");
			}
			if (wordArray.length > 2) {
				myString = myString.replace(", " + wordArray[wordArray.length - 1], ", and " + wordArray[wordArray.length - 1]);
			}
			return myString;
		}
		if (!document.querySelector('.accrodion-section')) {
			document.querySelector('.light-blue-cont').insertAdjacentHTML('beforebegin', `
			<section class="customSPZ accrodion-section">
				<div class="container">
					<div class="Features-accordion accordion-set">
						<h2>Features</h2>
						<div class="content-wrap">
							<div class="content-part">
								<div class="accordion">
									<div class="accor-title">
										<h4>Risk Assessment</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Discover and mitigate a wide variety of data and identity risks due to misconfigurations, vulnerabilities, and violations of policies, best practices, or desired states.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036603/netwrix/1010/Vid/1.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>
					
								<div class="accordion ">
									<div class="accor-title">
										<h4>Threat Detection & Response</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Monitor your IT environment for threats in real-time based on known frameworks, machine learning, and behavioral analytics. Flag real threats while reducing false positives.</p>
                                        <p>Auto-remediate confirmed threats. Get a detailed report containing attack timelines, actions taken, vulnerabilities exploited, and more.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/2.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Policy Enforcement</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Create & enforce security policies across ADs, endpoints, identity, network, etc. Manage user permissions, app settings, password rules, etc.</p>
                    <p>Automatically block risky behavior & remediate policy violations. Secure your environment without disrupting daily operations.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/3.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Rollback & Recovery</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Manage access, policies, and identities to ensure the right users have access to the right resources at the right time. Reduce IT workload with automated workflows and self-service.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/4.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Management</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Instantly roll back individual changes or restore your system to a previous state. Fix misconfigured permissions, group policies, and application settings.</p>
                                        <p>View a full timeline of changes for quick troubleshooting. Automate backup creation to ensure reliable recovery points.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036605/netwrix/1010/Vid/5.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Governance & Compliance</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Streamline compliance with automated monitoring and audit reporting.</p>
                                        <p>Log access rights & data protection actions in real-time. Generate comprehensive audit reports in a few clicks. Prove compliance with industry regulations, including  HIPAA, GDPR, ISO, NIST, etc.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/6.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Integrations</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Integrate with Microsoft Office 365, NetApp, Oracle, VMWare, SharePoint, and other enterprise platforms.</p>
                                        <p>Connect with SIEM, ITSM, and identity management tools for automated workflows. Or build custom integrations with our API.</p>
										<div class="ctaWrapper">
											<a class="spz_1010_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1010_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/7.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>
							</div>
					
							<div class="slide-part">
								<div class="accordion_images">
									<div class="image-container slide-1 active">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036603/netwrix/1010/Vid/1.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-2">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/2.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-3">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/3.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-4">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/4.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-5">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036605/netwrix/1010/Vid/5.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-6">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/6.mp4" autoplay loop muted playsinline></video>
									</div>
									<div class="image-container slide-7">
										<video src="//res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/7.mp4" autoplay loop muted playsinline></video>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			`)
		}

		document.querySelectorAll('.spz_t1010 .accrodion-section .content-part .accordion button').forEach(contactCTA => {
			contactCTA.addEventListener('click', function () {
				document.querySelector('header button.btn-red-outline').click()
			})
		})

		if (document.querySelector('input#SPZ_Test')) {
			document.querySelectorAll('input#SPZ_Test').forEach((input) => {
				input.value = 'variant_1010';
			});
		}

		console.log('feature Part')

		// accordion Function
		var accordionSets = document.querySelectorAll(".accordion-set");
		var firstAccordion = accordionSets[0].querySelectorAll('.accordion')
		firstAccordion[0].classList.add('active')
		firstAccordion[0].classList.remove('active')
		setTimeout(() => {
			firstAccordion[0].classList.add('active')
		}, 1000);
		// Function to activate the next accordion
		function activateNextAccordion(accordionSet, targetIndex = -1) {
			var accordions = accordionSet.querySelectorAll(".accordion");
			var imageContainers = accordionSet.querySelectorAll(
				".accordion_images .image-container"
			);
			var currentIndex = Array.from(accordions).findIndex((acc) =>
				acc.classList.contains("active")
			);
			// Remove 'active' class from all accordions and image containers in the current set
			accordions.forEach(function (acc) {
				acc.classList.remove("active");
			});
			imageContainers.forEach(function (imgContainer) {
				imgContainer.classList.remove("active");
			});
			// Calculate the index of the next accordion
			var nextIndex;
			if (targetIndex !== -1) {
				nextIndex = targetIndex;
			} else {
				nextIndex = (currentIndex + 1) % accordions.length;
			}
			// Add 'active' class to the next accordion and corresponding image container in the current set
			accordions[nextIndex].classList.add("active");
			imageContainers[nextIndex].classList.add("active");
		}
		// Function to handle click event and activate accordion
		function handleAccordionClick(event) {
			var clickedAccordion = event.target.closest(".accordion");
			if (clickedAccordion) {
				var accordionSet = clickedAccordion.closest(".accordion-set");
				var targetIndex = Array.from(
					accordionSet.querySelectorAll(".accordion")
				).indexOf(clickedAccordion);

				// Clear the interval for the clicked set
				clearInterval(accordionSet.intervalId);
				// Activate the clicked accordion immediately
				activateNextAccordion(accordionSet, targetIndex);
				if (window.innerWidth < 1023) {
					// Scroll the clicked accordion to the top of the window with a 30px offset
					var offset = 120; // Adjust the offset as needed
					var rect = clickedAccordion.getBoundingClientRect();
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					window.scrollTo({
						top: rect.top + scrollTop - offset,
						behavior: "smooth",
					});
				}
			}
		}
		// Function to handle mouse enter event and stop autoplay
		function handleAccordionSetEnter(event) {
			var accordionSet = event.currentTarget;
			clearInterval(accordionSet.intervalId); // Clear the interval for the hovered set
		}
		// Function to handle mouse leave event and resume autoplay
		function handleAccordionSetLeave(event) {
			var accordionSet = event.currentTarget;
			// Set interval to automatically activate the next accordion every 30 seconds for the hovered set
			// accordionSet.intervalId = setInterval(function () {
			//     activateNextAccordion(accordionSet);
			// }, 30000);
		}
		// Set interval to automatically activate the next accordion every 30 seconds for each set
		accordionSets.forEach(function (accordionSet) {
			// accordionSet.intervalId = setInterval(function () {
			//     activateNextAccordion(accordionSet);
			// }, 30000);
			// Add event listeners for mouse enter and leave on each accordion set
			accordionSet.addEventListener("mouseenter", handleAccordionSetEnter);
			accordionSet.addEventListener("mouseleave", handleAccordionSetLeave);
		});
		// Add click event listener to each accordion set
		accordionSets.forEach(function (accordionSet) {
			accordionSet.addEventListener("click", handleAccordionClick);
		});

		document.querySelector('.spz-1001 .gradient').insertAdjacentHTML('beforebegin', `
		<div class="new-hero-1001">
			<div class="wrapper">
				<div class="review">
				<img src="//res.cloudinary.com/spiralyze/image/upload/v1729049525/netwrix/1001/gartner.svg" alt="Gartner Logo" width="75" height="27" >
				<img src="//res.cloudinary.com/spiralyze/image/upload/v1731588568/netwrix/1006/stars_12.svg" alt="Stars Icon" width="89" height="16" >
				<span>4.5</span>
				<span>(143 reviews)</span>
				<sup>*</sup>
				</div>
				<div class="title">Eliminate Security Gaps by Protecting Data, Identity & Infrastructure</div>
				<div class="subtitle">Which solution(s) are you interested in?</div>
				<div class="cards">
				<div class="card" value="Data Security Posture Management">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599538/netwrix/1014/icon01.svg" alt="Data Security Posture Management Icon" height="41" width="40">
					<div class="card-text">Data Security Posture Management</div>
				</div>
				<div class="card" value="Identity Threat Detection & Response">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599538/netwrix/1014/icon02.svg" alt="Identity Threat Detection & Response" height="41" width="40">
					<div class="card-text">Identity Threat Detection & Response</div>
				</div>
				<div class="card" value="Identity Management">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599538/netwrix/1014/icon03.svg" alt="Identity Management Icon" height="41" width="40">
					<div class="card-text">Identity<br> Management</div>
				</div>
				<div class="card" value="Privileged Access Management">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599538/netwrix/1014/icon04.svg" alt="Privileged Access Management Icon" height="41" width="40">
					<div class="card-text">Privileged Access Management</div>
				</div>
				<div class="card" value="Directory Management">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599539/netwrix/1014/icon05.svg" alt="Directory Management Icon" height="41" width="40">
					<div class="card-text">Directory<br> Management</div>
				</div>
				<div class="card" value="Endpoint Management">
					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1743599539/netwrix/1014/icon06.svg" alt="Endpoint Management" height="41" width="40">
					<div class="card-text">Endpoint<br> Management</div>
				</div>
				</div>
				<div class="form">
				<input type="text" placeholder="Work Email">
				<div class="cta cta-spz1001-hero">Get Demo</div> 
				</div>
				<div class="link gtm-home-page-header-link">
				<span class="gtm-home-page-header-link">Chat With Our Experts</span>
				<img class="gtm-home-page-header-link" src="//res.cloudinary.com/spiralyze/image/upload/v1726001139/netwrix/1001/icon_right.svg" alt="Right Arrow Icon" width="20" height="20">
				</div>
			</div>
			<div class="hero-image">
				<picture>
				<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage-mobile.png">
				<source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage-tablet.png">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1001/HeroImage.png" alt="Hero Image" width="1607" height="430" >
				</picture>
			</div>
		</div>`);

		// Footer
		const footerInterval = setInterval(function () {
			if (document.querySelector('.spz-1001 .footer .information')) {
				clearInterval(footerInterval);
				document.querySelector('.spz-1001 .footer .information').insertAdjacentHTML("afterend", `
				<div class="footer-note">
					* Result is as of 11/14/2024. 4.5 rating is based on 143 reviews in the File Analysis Software market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.
				</div>  
				`)
			}
		}, 100)


		var waitElement = setInterval(() => {
			if (document.querySelector('.spz-1001 .new-hero-1001 .link')) {
				clearInterval(waitElement)
				const cardTexts = Array.from(document.querySelectorAll(".spz-1001 .new-hero-1001 .card .card-text"))
					.map(card => card.textContent.trim());

				if (cardTexts) {
					cardTexts.forEach(cardText => {
						// Remove the cookie for each card text
						document.cookie = `${cardText}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
					});
				}

				document.querySelector('.spz-1001 .new-hero-1001 .cards').addEventListener("click", function (e) {
					const card = e.target.closest(".spz-1001 .new-hero-1001 .card");
					if (card) {
						card.classList.toggle('active');

						const cardText = card.querySelector('.card-text').textContent.trim();

						if (card.classList.contains("active")) {
							// Add the card text to cookies without encoding
							document.cookie = `${cardText}=true; path=/;`;
						} else {
							// Remove the card text from cookies
							document.cookie = `${cardText}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
						}

						if (e.target.closest(".spz-1001 .new-hero-1001 .card").classList.contains("active")) {
							checkBoxValue.push("" + e.target.closest(".spz-1001 .new-hero-1001 .card").querySelector('.card-text').textContent)
						} else {
							checkBoxValue.remove('' + e.target.closest(".spz-1001 .new-hero-1001 .card").querySelector('.card-text').textContent)
						}
					}
				});

				document.querySelector('.spz-1001 .new-hero-1001 .form .cta').addEventListener("click", function () {
					if (document.querySelector('.spz-1001 .new-hero-1001 .form input').value) {
						setCookieTest("spz1001EmailValue", document.querySelector('.spz-1001 .new-hero-1001 .form input').value, 1)
						//localStorage.setItem("spz1001EmailValue", document.querySelector('.spz-1001 .new-hero-1001 .form input').value);          
					}
					setCookieTest("spz1001CheckBoxValue", combineWord(checkBoxValue), 1)
					//localStorage.setItem("spz1001CheckBoxValue",  combineWord(checkBoxValue));
					setCookieTest("spz1001Source", "yes", 1)
					window.location.href = "https://www.netwrix.com/one-to-one.html";
				})

				document.querySelector('.spz-1001 .new-hero-1001 .link').addEventListener("click", function () {
					//change html
					document.querySelector('.spz-1001 .navbar-item.contact-item button').click();

					if (document.querySelector('.spz-1001 .new-hero-1001 .form input').value) {
						document.querySelectorAll('.spz-1001 #ModalForm_nwf_email')[1].value = document.querySelector('.spz-1001 .new-hero-1001 .form input').value;
					}
					document.querySelectorAll('.spz-1001 .form-message-modal textarea')[1].value = combineWord(checkBoxValue);
				})

				document.querySelector('.spz-1001 .new-hero-1001 .form input').addEventListener("keypress", function (e) {
					if (e.key === 'Enter') {
						e.preventDefault();
						document.querySelector('.spz-1001 .new-hero-1001 .form .cta').click()
						document.querySelector('.spz-1001 .new-hero-1001 .form input').blur();
					}
				});

				document.querySelector('.spz-1001 .gradient .head-cont h1 + p + .cta-links-block + .cta-links-block').insertAdjacentHTML("beforebegin", `<div class="trusted">Trusted by 13,500+ organizations</div>  
				`)
			}
		})
	}
}, 10)



function loadTestCode() {
	if (!document.querySelector('body').classList.contains('spz_t1006')) {
		document.querySelector('body').classList.add('spz_t1006');

		document.querySelectorAll('.head-cont')[0].classList.add('heroSection');
		console.log(document.querySelectorAll('.heroSection').length)

		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '1010';
		//variantName should be _V1, _V2, _TC etc.
		const variantName = `variant_` + expName;

		hiddenValue(expName, variantName);


		//DEV 2/7. Set splide slider settings.
		const sliderSettings = {
			// type: 'loop',
			// autoplay: true,
			gap: 20,
			perPage: 3,
			perMove: 1,
			speed: 3000,
			breakpoints: {
				991: {
					perPage: 2,
				},
				767: {
					perPage: 1,
				},
			},
			arrowPath:
				'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
		};
		//DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
		const ratingInfo = {
			ratingCompany:
				'<img src="//res.cloudinary.com/spiralyze/image/upload/v1731316437/netwrix/1006/frame_3.svg" alt="Gartner Logo" width="155">',
			ratingStars:
				`<svg xmlns="http://www.w3.org/2000/svg" width="108" height="21" fill="none"><g clip-path="url(#a)"><path d="M9.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.482.35l4.996.659c.521.068.73.71.349 1.073l-3.655 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.912-.663l.917-4.954a.625.625 0 00-.184-.567L1.439 8.31a.625.625 0 01.349-1.072l4.996-.659a.625.625 0 00.482-.35l2.17-4.548zM31.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.483.35l4.995.659c.521.068.73.71.349 1.073l-3.655 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.912-.663l.917-4.954a.625.625 0 00-.184-.567l-3.655-3.47a.625.625 0 01.349-1.072l4.995-.659a.625.625 0 00.483-.35l2.17-4.548zM53.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.483.35l4.995.659c.521.068.73.71.349 1.073l-3.655 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.912-.663l.917-4.954a.625.625 0 00-.184-.567l-3.655-3.47a.625.625 0 01.349-1.072l4.995-.659a.625.625 0 00.483-.35l2.17-4.548zM75.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.483.35l4.995.659c.521.068.73.71.349 1.073l-3.655 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.912-.663l.917-4.954a.625.625 0 00-.184-.567l-3.655-3.47a.625.625 0 01.349-1.072l4.996-.659a.625.625 0 00.482-.35l2.17-4.548z" fill="#FF8200"></path><path d="M97.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.482.35l4.996.659c.521.068.73.71.349 1.073l-3.655 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.912-.663l.917-4.954a.625.625 0 00-.184-.567l-3.655-3.47a.625.625 0 01.349-1.072l4.996-.659a.625.625 0 00.482-.35l2.17-4.548z" fill="#FF8200" fill-opacity=".19"></path><mask id="b" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="89" y="1" width="18" height="18"><path d="M97.436 1.682a.625.625 0 011.128 0l2.17 4.548c.091.19.273.322.482.35l4.996.659c.521.068.73.71.348 1.073l-3.654 3.469a.625.625 0 00-.184.567l.917 4.954a.625.625 0 01-.912.663l-4.429-2.403a.625.625 0 00-.596 0l-4.429 2.403a.625.625 0 01-.913-.663l.918-4.954a.625.625 0 00-.184-.567l-3.655-3.47a.625.625 0 01.349-1.072l4.995-.659a.625.625 0 00.483-.35l2.17-4.548z" fill="#FF8200"></path></mask><g mask="url(#b)"><path fill="#FF8200" d="M89.278 -0.5H98.278V19.5H89.278z"></path></g></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .5)" d="M0 0H108V20H0z"></path></clipPath></defs></svg>`,
			rating: '4.5',
			reviewsCount: '<span>(143 reviews)</span><sup>*</sup>',
		};
		//DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J
		const slides = [
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“Extremely versatile product that is easy to use and quick to learn.”',
				authorPic: 'Matic K.',
				authorName: 'Technical Director',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-center-others/vendor/netwrix/product/netwrix-recovery-for-active-directory/review/view/5711966',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					`“It's straightforward to deploy. Easy to configure policies. We can create policies with a single click.”`,
				authorPic: 'Bakeer J.',
				authorName: 'IT Security & Risk Management&nbsp;Associate',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5554604',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“Netwrix GroupID is a robust identity management and active directory group management solution. It simplifies the process of managing dynamic groups.”',
				authorPic: 'Jesse M.',
				authorName: 'IT Specialist Engineer',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/identity-governance-administration/vendor/netwrix/product/netwrix-groupid/review/view/5732140',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“My experience with Netwrix Auditor has been highly positive. It stands out as a robust and comprehensive solution for IT auditing and security.”',
				authorPic: 'Tory L.',
				authorName: 'Systems Engineer',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource...”',
				authorPic: 'Richard W.',
				authorName: 'IT Manager',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“It just works once set-up. Setting it up is easy as always supported on call.”',
				authorPic: 'Glenn J.',
				authorName: 'Lead System Admin',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/identity-governance-administration/vendor/netwrix/product/netwrix-groupid/review/view/5733154',
			},
			{
				starRating:
					'//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg',
				reviewCopy:
					'“Different architectural designs to fit our company strategy, the ease of deployment and configuration, delivers value from day 1!”',
				authorPic: 'Jack B.',
				authorName: 'Senior Manager IT Operations',
				ReadFullReviewURL: 'https://www.gartner.com/reviews/market/privileged-access-management/vendor/netwrix/product/netwrix-privilege-secure-for-access-management/review/view/5222542',
			}
		];
		//DEV 5/7. Set unique selector of target setion where you want review ribbon to appear
		const sectionSelector = `.heroSection`

		//DEV 6/7. Choose where reviews ribbon should appear.  Set "before" or "after".
		const placement = 'after'

		document.querySelector('.head-cont').insertAdjacentHTML('afterend', `<div class="head-cont homepage-head-cont"></div>`);
		document.querySelector('.head-cont.homepage-head-cont').append(document.querySelector('.head-cont .shifted-block'));

		/***********************************
		************************************
		DO NOT TOUCH
		BEYOND THIS LINE
		******************************
		************************/
		var splideScript = document.createElement('script');
		splideScript.src =
			'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
		var splideStyle = document.createElement('link');
		splideStyle.rel = 'stylesheet';
		splideStyle.type = 'text/css';
		splideStyle.href =
			'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
		document.body.appendChild(splideScript);
		document.body.appendChild(splideStyle);
		function insertAfter(newNode, existingNode) {
			existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
		}
		function insertBefore(newNode, existingNode) {
			existingNode.parentNode.insertBefore(newNode, existingNode);
		}
		function addReviewRibbon(
			sliderSettings,
			ratingInfo,
			slides,
			whereToAdd,
			selector
		) {
			var reviewRibbon = document.createElement('div');
			reviewRibbon.classList.add('spz-review-ribbon');
			reviewRibbon.innerHTML = `
			<div class="review-container">
				<div class="review-left">
					${ratingInfo.ratingCompany.replace(/\s/g, '').length !== 0
					? ratingInfo.ratingCompany
					: ``
				}
					<span class="line"></span>
					<div class="reviewRating">
					${ratingInfo.ratingStars.replace(/\s/g, '').length !== 0
					? ratingInfo.ratingStars
					: ``
				}
					${ratingInfo.rating.replace(/\s/g, '').length !== 0
					? `<div class="reviews-count">${ratingInfo.rating} ${ratingInfo.reviewsCount}</div>`
					: ``
				}
					</div>
					
				</div>
				<div class="review-right">
						<div class="splide" role="group">
							<div class="splide__track">
								<ul class="splide__list">
									${slides.map((slide) => {
					return `
										<li class="splide__slide">
											<div class="review-content">
												<div class="review-heading">
												${slide.starRating.replace(/\s/g, '')
							.length !== 0
							? `<img src="${slide.starRating}" alt="5 Star rating" />`
							: ``
						}
												</div>
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
												${slide.authorName.replace(/\s/g, '')
							.length !== 0
							? `<div class="author-name">${slide.authorName}</div>`
							: ``
						}
												<a href="${slide.ReadFullReviewURL}" target="_blank">Read Full Review</a>
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
			`;
			if (whereToAdd === 'after') insertAfter(reviewRibbon, document.querySelector(selector));
			if (whereToAdd === 'before') insertBefore(reviewRibbon, document.querySelector(selector));

			new Splide('.splide', sliderSettings).mount();
		}
		splideScript.onload = function () {
			addReviewRibbon(sliderSettings, ratingInfo, slides, placement, sectionSelector);
		};

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


		// Client Logo
		var elementInterval = setInterval(() => {
			if (document.querySelector('.spz-1001 .gradient .head-cont.heroSection')) {
				clearInterval(elementInterval)
				document.querySelector('.spz-1001 .gradient .head-cont.heroSection').innerHTML = `
					<h2>Trusted by 13,500+ organizations</h2>
					<picture>
						<source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1003/frame_1171276134.webp">
						<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1003/frame_1171276136.webp">
						<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1003/frame_1171276135.webp" alt="Client Logos">
					</picture>
				`
			}
		});

		// PM Query Changes
		document.querySelectorAll('.v-modal-mask .form-wrapper-3 .form-title').forEach(title => {
			if (title.innerText == "Contact Our Experts") {
				title.parentElement.querySelector(".securityInfo").innerHTML = `We care about the security of your data.
				<br class="visible-xs-inline"> 
				<a href="/privacy.html" target="_blank" class="privacyLink">Privacy Policy</a>`
			}
		})
	}
}

setInterval(() => {
	if (document.querySelectorAll('.head-cont').length > 0) {
		loadTestCode();
	}
}, 100);
