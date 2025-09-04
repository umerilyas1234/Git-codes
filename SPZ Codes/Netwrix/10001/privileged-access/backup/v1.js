const bodyInterval10001 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_10001')) {
		clearInterval(bodyInterval10001);
		document.querySelector('body').classList.add("spz_10001")

		document.querySelector('main .navbar').insertAdjacentHTML('afterend', `
			<div class="new-hero audit">
				<div class="hero-container">
						<div class="hero-flex">
								<div class="hero-title-contain">
										<div class="hero-main-title">Privileged Access Management</div>
										<p>Stop breaches before they start. Secure privileged access.</p>
										<div class="hero-buttons head-cont">
										</div>
								</div>
								<div class="hero-image-contain">
										<picture>
												<source media="(max-width:991.98px)" srcset="https://img.netwrix.com/elements/webpage/covers/img_IM.png">
												<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/hero_image.webp" alt="auditor_ui_image">
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
										<li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/logo.webp" alt="The Geneva Foundation"></li>
								</ul>
						</div>
				</div>
      </div>

			<section class="customSPZ accrodion-section">
				<div class="container">
					<div class="Features-accordion accordion-set">
						<h2>Features</h2>
						<div class="content-wrap">
							<div class="content-part">
								<div class="accordion">
									<div class="accor-title">
										<h4>Eliminate standing privilege</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Replace always-on admin accounts with just-in-time access. The Netwrix PAM solution creates temporary accounts that exist only during a session. This closes one of the most common paths attackers use to move laterally across systems.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-mobile-eliminate-standing-privilege.webp">
											<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-eliminate-standing-privilege.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-eliminate-standing-privilege.webp" alt="Eliminate_standing_privilege_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Continuously discover privileged accounts</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Avoid privilege sprawl with automated scanning across your environment. Uncover hidden admin rights, eliminate unnecessary accounts, and gain visibility into where privileged access exists and why it matters.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-continuously-discover_1.webp">
											<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-continuously-discover.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-continuously-discover.webp" alt="Continuously_discover_privileged_accounts_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Secure access without a VPN</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Enable secure remote access to critical systems without relying on VPNs. Just-in-time access, session controls, and multi-factor authentication help ensure secure and auditable access from beginning to end.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tabelt-secure-access.webp">
											<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tabelt-secure-access_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-secure-access.webp" alt="Secure_access_without_a_VPN_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Enforce least privilege on endpoints</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Reduce malware risk and unwanted changes by limiting permissions to only what is necessary. Apply least privilege policies to manage applications, scripts, and system
											 settings across desktops, laptops, and remote environments.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-enforce-least.webp">
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-enforce-least_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-enforce-least.webp" alt="Enforce_least_privilege_on_endpoints_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Monitor every privileged session</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Capture every privileged action with full session logging, behavior analytics, real-time monitoring, and automated alerts for suspicious activity.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-monitor-every.webp">
											<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-monitor-every_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-monitor-every.webp" alt="Monitor_every_privileged_session_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Manage privileged passwords with confidence</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Netwrix Password Secure integrates with the PAM solution to streamline password management. Store credentials securely, enforce strong policies, automate password
                      rotation, and manage everything from a single console.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-manage-privileged.webp">
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-manage-privileged_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-manage-privileged.webp" alt="Manage_privileged_passwords_with_confidence_image">
										</picture>
									</div>
								</div>

							</div>
					
							<div class="slide-part">
								<div class="accordion_images">
									<div class="image-container slide-1 active">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-eliminate-standing-privilege.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-eliminate-standing-privilege.webp" alt="Eliminate_standing_privilege_image">
										</picture>
									</div>
									<div class="image-container slide-2">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-continuously-discover.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-continuously-discover.webp" alt="Continuously_discover_privileged_accounts_image">
										</picture>
									</div>
									<div class="image-container slide-3">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tabelt-secure-access_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-secure-access.webp" alt="Secure_access_without_a_VPN_image">
										</picture>
									</div>
									<div class="image-container slide-4">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-enforce-least_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-enforce-least.webp" alt="Enforce_least_privilege_on_endpoints_image">
										</picture>
									</div>
									<div class="image-container slide-5">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-monitor-every_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-monitor-every.webp" alt="Monitor_every_privileged_session_image">
										</picture>
									</div>
									<div class="image-container slide-6">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-tablet-manage-privileged_1.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/features-manage-privileged.webp" alt="Manage_privileged_passwords_with_confidence_image">
										</picture>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<!-- <div class="explore_products">
			<div class="container">
				<div class="solutionSlider section-slider-with-timer">
					<div class="slider_wrapper w-layout-blockcontainer section-slider-with-timer-container w-container">
						<div class="solutionTitle _w-100">
							<h4 class="section-eyebro-text">Explore the products that can help you secure your Active Directory</h4>
						</div>
						<div class="product_list" id="tab1">
							<ul>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/ping-castle_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/ping-castle-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/ping-castle_img.webp"
													alt="PingCastle">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/active-directory-risk-assessment.html">PingCastle</a>
											<p>Identify and remediate risks in your AD and Entra ID.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/active-directory-risk-assessment.html" target="_blank" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/threat-manager_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/threat-manager-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/threat-manager_img.webp"
													alt="Threat Manager">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/threat_detection_software.html">Threat Manager</a>
											<p>Detect and respond to data security threats in real time.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/threat_detection_software.html" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/enterprise-auditor_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/enterprise-auditor-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/access-analyzer_img.webp"
													alt="Access Analyzer">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/access-analyzer.html">Access Analyzer</a>
											<p>Analyze object-level permissions and other vulnerabilities in AD.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/access-analyzer.html" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/recovery-for-active-directory_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/recovery-for-active-directory-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/recovery-for-active-directory_img.webp"
													alt="Recovery for Active Directory">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/active_directory_recovery_software.html">Recovery for Active Directory</a>
											<p>Roll back unwanted changes, restore AD, and minimize downtime.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/active_directory_recovery_software.html" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/group-id_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/group-id-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/directory-management_img.webp"
													alt="Directory Management">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/directory-manager-solution.html">Directory Management</a>
											<p>Automate and delegate directory group and user management.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/directory-manager-solution.html" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="products_data">
										<div class="product_top">
											<picture>
												<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/threat-prevention_img_mobile.webp">	
												<source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/threat-prevention-tablet_img.webp">	
												<img
													src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/threat-prevention_img.webp"
													alt="Threat Prevention ">
											</picture>
										</div>
										<div class="product_bottom">
											<a href="https://www.netwrix.com/threat-prevention.html">Threat Prevention </a>
											<p>Block undesired AD changes, authentication, and requests.</p>
											<div class="btn_list">
												<a href="https://www.netwrix.com/threat-prevention.html" class="custom_btn outline spz_10001_cta">Learn More</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> -->

			<div class="why_netwrix">
				<div class="container">
					<div class="why_netwrixInner">
						<div class="why_netwrixTitle">
							<h2>Why Netwrix?</h2>
						</div>
						<div class="why_netwrixList">
							<ul>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<span><i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1755770907/netwrix/10001/icon-container_2.svg"
														alt="Zero Standing Privileges"></i></span>
											<strong>Zero Standing Privileges</strong>
											<p>Unlike other PAM solutions, Netwrix eliminates standing privileges with ephemeral, time-limited accounts, leaving attackers nowhere to go.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<span><i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1755770902/netwrix/10001/icon-container.svg"
														alt="No Hidden Fees"></i></span>
											<strong>No Hidden Fees</strong>
											<p>Everything you need is included—no extra costs for high availability, vault integrations, or core security features.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<span><i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1755770905/netwrix/10001/icon-container_1.svg"
														alt="Get Value in Days, Not Months"></i></span>
											<strong>Get Value in Days, Not Months</strong>
											<p>Deploy in your existing environment without complex infrastructure changes or lengthy implementation projects.</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="datasheet">
				<div class="container">
					<div class="datasheet_inner">
						<div class="datasheet_detail">
							<div class="datasheet_left">
								<figure>
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/book.webp" alt="Datasheet">
								</figure>
							</div>
							<div class="datasheet_right">
								<strong>Datasheet</strong>
								<h2>Netwrix Privileged Access Management (PAM) Solution</h2>
								<p>Find out how Netwrix privileged access management software can help you secure privileged access in your organization.</p>
								<a href="https://www.netwrix.com/download/Datasheets/Netwrix-Privileged-Access-Management-Datasheet.pdf" target="_blank" class="nwx-btn nwx-blue2-btn">Download Datasheet</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="why_netwrix netwrix_help">
				<div class="container">
					<div class="why_netwrixInner">
						<div class="why_netwrixTitle">
							<h2>Netwrix helps organizations overcome their security, compliance and operational challenges</h2>
						</div>
						<div class="why_netwrixList">
							<ul>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/logo-1.webp" width="56" height="45"
														alt="Logistics Firm">
											<p>Logistics Firm Secures Cyber Insurance Renewal by Implementing Netwrix Privilege Secure in Just 2 Months</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/logo-2.webp" width="85" height="45"
														alt="Energy Supplier">
											<p>Energy Supplier Empowers All Employees with Simple Password Management with Netwrix Password Secure</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			`);

		document.querySelector('.hero-buttons').insertAdjacentElement('beforeend', document.querySelector('.head-cont.two-btn .form-cont'));
		document.querySelector('.faq-cont').closest('.page-section').classList.add('netwrix_faq');
		document.querySelector('.netwrix_help').insertAdjacentElement('afterend', document.querySelector('.netwrix_faq'));
		document.querySelector('.netwrix_faq .container> .row>div>div')
		if(document.querySelector('.netwrix_faq .container> .row>div>div .faq-item:last-child .text div')){
			document.querySelector('.netwrix_faq .container> .row>div>div .faq-item:last-child .text div').innerHTML = document.querySelector('.netwrix_faq .container> .row>div>div .faq-item:last-child .text div').innerHTML.replace(/role -based/g, 'role-based');
		}
		// TC 10002 code start
		var btn = document.querySelector(".form-cont button.btn_filled_red");
		if (btn) {
			btn.classList.add("spz_10002_v1");
		}

		window.addEventListener('click', function (e) {
			if (e.target.matches('.form-cont button.btn_filled_red')) {
				e.preventDefault();
				window.location.href = 'https://www.netwrix.com/one-to-one.html';
			}
			if (e.target.matches('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2')) {
				if (e.target.classList.contains('active')) {
					e.target.querySelector('.text').style.maxHeight = '0px';
					setTimeout(() => {
						e.target.classList.remove('active');
						e.target.querySelector('.text').style.display = 'none';
						e.target.querySelector('.text').style.marginTop = '0';
					}, 200);
				} else {
					e.target.classList.add('active');
					e.target.querySelector('.text').style.display = 'block';
					e.target.querySelector('.text').style.maxHeight = e.target.querySelector('.text').scrollHeight + 'px';
					e.target.querySelector('.text').style.marginTop = '12px';
					document.querySelectorAll('.netwrix_faq .container > .row > .col-xs-22 .faq-item').forEach(item => {
						item.classList.remove('opened');
						item.querySelector('.text').style.display = 'none';
					});
				}
			}
			if (e.target.matches('.netwrix_faq .container > .row > .col-xs-22 .faq-item') || e.target.closest('.netwrix_faq .container > .row > .col-xs-22 .faq-item')) {
				if (document.querySelector('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2')) {
					if(document.querySelector('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2').classList.contains('active')) {
						document.querySelector('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2').classList.remove('active');
					}
					document.querySelector('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2 .text').style.maxHeight = '0px';
					document.querySelector('.netwrix_faq .container > .row > .col-xs-22 .faq-item-2 .text').style.marginTop = '0';
				}
			}
		});

		var button = document.querySelector(".form-cont [id^='app-']");
		var buttonID = button.id;
		const formId = `form-${buttonID}`;
		const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-mask');
		formContainer.classList.add('spz_modal');
		// TC 10002 code end

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
		document.querySelectorAll('.netwrix_faq .faq-item').forEach(faq => {
			const heading = document.createElement('div');
			heading.classList.add('faq_heading');

			const icon = faq.querySelector('i.fa');
			const title = faq.querySelector('.title');

			if (icon) heading.appendChild(icon);
			if (title) heading.appendChild(title);

			faq.insertBefore(heading, faq.firstChild);
		});

		setTimeout(() => {
			if (document.querySelector('input#SPZ_Test')) {
				document.querySelectorAll('input#SPZ_Test').forEach((input) => {
					input.value = 'variant_10001';
				});
			}
		}, 1000);

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
}, 400);
