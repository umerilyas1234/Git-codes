const bodyInterval10001 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_10001')) {
		clearInterval(bodyInterval10001);
		document.querySelector('body').classList.add("spz_10001")

		document.querySelector('main .navbar').insertAdjacentHTML('afterend', `
			
			<div class="new-hero audit">
				<div class="hero-container">
						<div class="hero-flex">
								<div class="hero-title-contain">
										<div class="hero-main-title">Identity Threat Detection & Response</div>
										<p>Stay ahead of identity-based threats - proactively remediate risks, block attacks, detect and respond in real time, and ensure rapid recovery of your vital identity system.</p>
										<div class="hero-buttons head-cont">
										</div>
								</div>
								<div class="hero-image-contain">
										<picture>
												<source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/hero-tablet-img_1.webp">
												<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/hero-img_1.webp" alt="auditor_ui_image">
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
      </div>

			<section class="customSPZ accrodion-section">
				<div class="container">
					<div class="Features-accordion accordion-set">
						<h2>Safeguard your Identity Infrastructure</h2>
						<div class="content-wrap">
							<div class="content-part">
								<div class="accordion">
									<div class="accor-title">
										<h4>Active Directory and Entra ID Risk Assessment</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Reduce exposure to identity-based attacks by identifying critical security gaps across your AD and Entra ID infrastructure before attackers do. </p>
										<p>Strengthen your security posture by uncovering shadow attack paths and privilege weaknesses that create hidden entry points for adversaries.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-active-director-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-active-director.webp" alt="Active_directory_and_entra_ID_risk_assessment_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion ">
									<div class="accor-title">
										<h4>Threat Detection & Response</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Detect AD and Entra ID identity-based attacks 
												in real time and prevent headline-making breaches. Deploy deceptive honeytokens to expose attackers early in their kill chain. Automate incident response for rapid containment, minimizing damage, and ensuring business continuity.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-director-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-director.webp" alt="Threat_detection_&_response_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Risk Remediation</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Reduce your identity attack surface by eliminating dangerous misconfigurations, stale objects, and toxic permission conditions in bulk and at scale. Enhance security by enforcing least privilege principles and strong password policies across your enterprise identity ecosystem without burdening your team.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-risk-remediation-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-risk-remediation.webp" alt="Risk_remediation_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Automation of AD User & Group Management</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Eliminate security gaps by automating identity
												lifecycle management with policy-driven workflows that prevent misconfigurations and privilege creep. Reduce operational overhead while improving compliance posture through audited processes that scale across your enterprise without increasing security team workload.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-automation-of-ad-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-automation-of-ad.webp" alt="Automation_of_AD_user_&_group_management_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Threat Prevention</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Prevent identity compromise by creating a security perimeter around critical directory assets, blocking unauthorized modifications to Tier 0 assets. Reduce the risk of lateral movement by stopping privilege escalation attempts at the source, keeping attackers from compromising your environment.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-fast-recovery-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-prevention.webp" alt="Threat_prevention_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Fast Recovery</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Keep business operations running smoothly by quickly rolling back unwanted changes and recovering deleted objects. In a disaster, drastically reduce AD forest recovery time from weeks to hours with purpose-built, automated recovery for critical identity systems.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Get a Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-prevention-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-fast-recovery.webp" alt="Fast_recovery_image">
										</picture>
									</div>
								</div>

							</div>
					
							<div class="slide-part">
								<div class="accordion_images">
									<div class="image-container slide-1 active">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-active-director-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-active-director.webp" alt="Active_directory_and_entra_ID_risk_assessment_image">
										</picture>
									</div>
									<div class="image-container slide-2">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-director-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-director.webp" alt="Threat_detection_&_response_image">
										</picture>
									</div>
									<div class="image-container slide-3">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-risk-remediation-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-risk-remediation.webp" alt="Risk_remediation_image">
										</picture>
									</div>
									<div class="image-container slide-4">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-automation-of-ad-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-automation-of-ad.webp" alt="Automation_of_AD_user_&_group_management_image">
										</picture>
									</div>
									<div class="image-container slide-5">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-fast-recovery-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-prevention.webp" alt="Threat_prevention_image">
										</picture>
									</div>
									<div class="image-container slide-6">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-threat-prevention-tablet.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-fast-recovery.webp" alt="Fast_recovery_image">
										</picture>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
\			<div class="solutionSlider section-slider-with-timer" id="solution">
				<div class="slider_wrapper w-layout-blockcontainer section-slider-with-timer-container w-container">
					<div class="solutionTitle _w-100">
						<h4 class="section-eyebro-text">Pricing</h4>
					</div>
					<div class="product_list" id="tab1">
						<ul>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/auditor_img.webp"
												alt="Auditor">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="auditor.html">Auditor</a>
										<p>Automate data access auditing and compliance reporting, on-premises and in the cloud. </p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img
												src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/data-classification_img.webp"
												alt="Data Classification">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="data_classification_software.html">Data Classification</a>
										<p>Automate sensitive data discovery, tagging, and remediation.</p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img
												src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/endpoint-protector_img.webp"
												alt="Endpoint Protector">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="endpoint-dlp-solution.html">Endpoint Protector</a>
										<p>Prevent sensitive data exfiltration on endpoints with content-aware protection.</p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img
												src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/enterprise-auditor_img.webp"
												alt="Enterprise Auditor">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="enterprise-auditor.html">Enterprise Auditor</a>
										<p>Assess, remediate, and govern data access rights, on-premises and in the cloud.</p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img
												src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/threat-manager_img.webp"
												alt="Threat Manager">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="threat_detection_software.html">Threat Manager</a>
										<p>Detect and respond to data security threats in real time.</p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="products_data">
									<div class="product_top">
										<figure>
											<img
												src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/1secure_img.webp"
												alt="1Secure">
										</figure>
									</div>
									<div class="product_bottom">
										<a href="saas-auditing.html">1Secure</a>
										<p>SaaS-delivered data access auditing and compliance reporting.</p>
										<div class="btn_list">
											<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>



			`);

		document.querySelector('.hero-buttons').insertAdjacentElement('beforeend', document.querySelector('.head-cont.two-btn .form-cont'));


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


		document.querySelectorAll('.accrodion-section .content-part .accordion button').forEach(contactCTA => {
			contactCTA.addEventListener('click', function () {
				document.querySelector('header button.btn-red-outline').click()
			})
		})


		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '10001';
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
}, 10);
