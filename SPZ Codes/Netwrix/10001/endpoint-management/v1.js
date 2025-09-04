const bodyInterval10001 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_10001')) {
		clearInterval(bodyInterval10001);
		document.querySelector('body').classList.add("spz_10001")

		document.querySelector('main .navbar').insertAdjacentHTML('afterend', `
			<div class="new-hero audit">
				<div class="hero-container">
						<div class="hero-flex">
								<div class="hero-title-contain">
										<div class="hero-main-title">Endpoint Management</div>
										<p>Streamline endpoint configuration, security, and compliance management everywhere.</p>
										<div class="hero-buttons head-cont">
										</div>
								</div>
								<div class="hero-image-contain">
										<picture>
												<source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/hero_image.webp">
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
										<h4>Manage Endpoint Privileges</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Secure your Windows and macOS endpoints against malware and unauthorized application installations while enhancing productivity. Elevate local admin rights only when necessary and enforce targeted least privilege policies. Enforce user access controls without disrupting daily employee operations.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_01.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/manage_endpoint_privileges.webp" alt="Manage_Endpoint_Privileges_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion ">
									<div class="accor-title">
										<h4>Control Peripherals and Encrypt USB Drives</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Safeguard your data and protect endpoints from malware with comprehensive USB and peripheral port control. Lockdown, monitor, and manage devices with precise control, using criteria like vendor, serial number, and more. Automatically encrypt USB storage for data protection in transit, ensuring seamless productivity across Windows, macOS, and Linux systems.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_02.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/control_peripherals_and_encrypt_usb_drives.webp" alt="Control_Peripherals_and_Encrypt_USB_Drives_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Consolidate, Manage and Migrate GPOs</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Simplify Group Policy by consolidating on-premise GPOs and then optionally enable a smooth migration to modern management platforms like Microsoft Intune. Streamline GPO management, reduce administrative burdens, and ensure targeted policy enforcement in any environment. Achieve compliance and deliver a consistent user experience across distributed endpoints, enhancing security and operational efficiency.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_03.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/consolidate_manage_and_migrate_gpos.webp" alt="Consolidate_Manage_and_Migrate_GPOs_image">
										</picture>
									</div>
								</div>
					
								<div class="accordion">
									<div class="accor-title">
										<h4>Monitor and Validate Endpoint Compliance</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Ensure endpoint compliance by monitoring system integrity and configurations with comprehensive baselining checks across Windows, Linux, macOS, cloud shares, and more. Detect unauthorized modifications to maintain adherence to PCI DSS, HIPAA, and other standards. Verify accurate policy deployment, ensuring endpoints consistently align with regulatory requirements and organizational standards.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_04.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/monitor_and_validate_endpoint_compliance.webp" alt="Monitor_and_Validate_Endpoint_Compliance_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Deploy Apps and Lock Down Settings</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Streamline software management processes to enhance application deployment and security. Deliver and update applications efficiently using cloud platforms like Amazon 53 and Azure to reduce VPN load. Gain precise control over application settings, browser configurations, and Java settings to ensure security and compliance.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_05.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/deploy_apps_and_lock_down_settings.webp" alt="Deploy_Apps_and_Lock_Down_Settings_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Manage User Desktop Experiences</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Gain control over application settings, browser configurations, and Java settings to enhance security and compliance. Improve the desktop experience by managing file associations, customizing the Start screen and Taskbar, and automating processes with event-triggered scripts. Enforce browser preferences for specific sites to boost productivity while minimizing manual tasks and increasing user satisfaction.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_06.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/manage_user_desktop_experiences.webp" alt="Manage_User_Desktop_Experiences_image">
										</picture>
									</div>
								</div>

								<div class="accordion">
									<div class="accor-title">
										<h4>Secure Browsers and Control Application Network Access</h4>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z" fill="#354556"></path></svg>
									</div>
									<div class="accor-paratexts">
										<p>Manage browser settings and control network access to resources to boost user productivity and harden endpoint security. Automate browser configurations for specific sites and establish network rules to streamline IT Security Operations. Optimize IT management processes through careful control, which reduces manual intervention and improves overall user satisfaction.</p>
										<div class="ctaWrapper">
											<a class="spz_1003_v1" href="https://www.netwrix.com/one-to-one.html">Schedule Demo</a>
											<button class="spz_1003_v1">Contact Our Experts</button>
										</div>
									</div>
									<div class="img-wrap">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_07.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/secure_browsers_and_control_application_network_access.webp" alt="Secure_Browsers_and_Control_Application_Network_Access_image">
										</picture>
									</div>
								</div>

							</div>
					
							<div class="slide-part">
								<div class="accordion_images">
									<div class="image-container slide-1 active">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_01.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/manage_endpoint_privileges.webp" alt="Manage_Endpoint_Privileges_image">
										</picture>
									</div>
									<div class="image-container slide-2">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_02.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/control_peripherals_and_encrypt_usb_drives.webp" alt="Control_Peripherals_and_Encrypt_USB_Drives_image">
										</picture>
									</div>
									<div class="image-container slide-3">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_03.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/consolidate_manage_and_migrate_gpos.webp" alt="Consolidate_Manage_and_Migrate_GPOs_image">
										</picture>
									</div>
									<div class="image-container slide-4">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_04.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/monitor_and_validate_endpoint_compliance.webp" alt="Monitor_and_Validate_Endpoint_Compliance_image">
										</picture>
									</div>
									<div class="image-container slide-5">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_05.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/deploy_apps_and_lock_down_settings.webp" alt="Deploy_Apps_and_Lock_Down_Settings_image">
										</picture>
									</div>
									<div class="image-container slide-6">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_06.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/manage_user_desktop_experiences.webp" alt="Manage_User_Desktop_Experiences_image">
										</picture>
									</div>
									<div class="image-container slide-7">
										<picture>
											<source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/tabletmobile_image_07.webp">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/secure_browsers_and_control_application_network_access.webp" alt="Secure_Browsers_and_Control_Application_Network_Access_image">
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
														src="//res.cloudinary.com/spiralyze/image/upload/v1744300205/netwrix/10001/icon-patented-innovation.svg"
														alt="Multiple Deployment Options"></i></span>
											<strong>Multiple Deployment Options</strong>
											<p>Deploy Netwrix through virtual appliances, cloud services, on-prem DCs, MDM platforms, and Saas.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<span><i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1744300205/netwrix/10001/icon-complete-protection.svg"
														alt="Multi-OS Coverage"></i></span>
											<strong>Multi-OS Coverage</strong>
											<p>Netwrix supports all your endpoint operating systems, including Windows, MacOS, Linux, iOS and Android.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<span><i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1744300206/netwrix/10001/icon-flexible-and-scalable.svg"
														alt="CIS Certified Templates"></i></span>
											<strong>CIS Certified Templates</strong>
											<p>Netwrix uses over 250+ CIS-certified templates to provide configuration benchmarks, compare current and desired states, monitor deviations and validate changes.</p>
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
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/datasheet-img_2.webp" alt="Datasheet">
								</figure>
							</div>
							<div class="datasheet_right">
								<strong>Datasheet</strong>
								<h2>Netwrix Endpoint Management Datasheet</h2>
								<p>Find out how Netwrix Endpoint Management can help you secure endpoint devices through policies, functionalities, and benchmark configurations.</p>
								<a href="https://www.netwrix.com/download/Datasheets/Netwrix-Identity-Threat-Detection-and-Response-Solution-Datasheet.pdf" target="_blank" class="nwx-btn nwx-blue2-btn">Download Datasheet</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="why_netwrix netwrix_help">
				<div class="container">
					<div class="why_netwrixInner">
						<div class="why_netwrixTitle">
							<h2>Netwrix Helps Organizations Overcome Their Security, Compliance And Operational Challenges</h2>
						</div>
						<div class="why_netwrixList">
							<ul>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/v1754929531/netwrix/10001/logo_01.svg" width="164" height="43"
														alt="Accenture">
											<p>Accenture uses Netwrix to provide proactive risk management and ensure continuous compliance for its clients.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/v1754929531/netwrix/10001/logo_02.svg" width="163" height="42"
														alt="Vodafone">
											<p>Vodafone complies with PCI DSS and secures customer PIl with Netwrix.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10001/logo_03_webp.webp" width="163" height="42"
														alt="US Department of Veterans Affairs">
											<p>The Department of Veterans Affairs adheres to compliance requirements with less effort and expense via Netwrix.</p>
										</div>
									</div>
								</li>
								<li>
									<div class="why_netwrixData">
										<div class="why_dataInner">
											<img src="//res.cloudinary.com/spiralyze/image/upload/v1754929531/netwrix/10001/logo_04.svg" width="163" height="42"
														alt="University of Wisconsin consolidated">
											<p>University of Wisconsin consolidated its GPOs and simplified Group Policy management with Netwrix.</p>
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

		// setTimeout(() => {
		// 	if (document.querySelector('input#SPZ_Test')) {
		// 		document.querySelectorAll('input#SPZ_Test').forEach((input) => {
		// 			input.value = 'variant_10001';
		// 		});
		// 	}
		// }, 1000);

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
