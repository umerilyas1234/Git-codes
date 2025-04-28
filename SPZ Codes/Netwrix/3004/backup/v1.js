var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
document.head.appendChild(link);

const loadJS = (url, implementationCode, location) => {
	var scriptTag = document.createElement('script');
	scriptTag.src = url;
	scriptTag.onload = implementationCode;
	scriptTag.onreadystatechange = implementationCode;
	location.appendChild(scriptTag);
};

function loadTestCode3004() {
	if (!document.querySelector("body").classList.contains("spz_t3004")) {
		document.querySelector("body").classList.add("spz_t3004", 'tab1');

		document.querySelector('#main_cont').insertAdjacentHTML('beforeend', `
      <div class="hero_section">
        <div class="auto_container">
          <div class="hero_inner">
            <div class="hero_tabs">

            </div>
            <div class="hero_bottom">
              <ul>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1731053557/netwrix/3001/gartner_logo_2.svg" alt="Gartner"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1732805123/netwrix/8002/rating_47.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527280/netwrix/3001/capterra_logo_1.svg" alt="Capterra"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1732799801/netwrix/8002/rating_50.svg" alt="Review stars"> <i>5.0</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/trustradius_logo.svg" alt="Trustradius"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1732805123/netwrix/8002/rating_47.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/g2_logo.svg" alt="G2"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1732805122/netwrix/8002/rating_46.svg" alt="Review stars"> <i>4.4</i></strong>
                  </div>
                </li>
                <li>
                  <div class="review_data">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1729527229/netwrix/3001/getapp_logo.svg" alt="Getapp"></span>
                    <strong><img src="//res.cloudinary.com/spiralyze/image/upload/v1732805123/netwrix/8002/rating_47.svg" alt="Review stars"> <i>4.5</i></strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `);


		// review slider
		const sliderSettings = {
			type: 'loop',
			autoplay: true,
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
				'<img src="//res.cloudinary.com/spiralyze/image/upload/v1732805123/netwrix/8002/rating_47.svg" alt="Stars rating">',
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
					'“Netwrix GroupID is a robust identity management and active directory group management solution. It simplifies the process of managing dynamic groups...',
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
					'“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource to validate your compliance level against security standard frameworks like Iso2700x and many others or against laws or Directives (i.e. GDPR).”',
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
		const sectionSelector = `.hero_section`

		//DEV 6/7. Choose where reviews ribbon should appear.  Set "before" or "after".
		const placement = 'after'

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
						<div class="splide review_slider" role="group">
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

			new Splide('.review_slider', sliderSettings).mount();
		}
		splideScript.onload = function () {
			addReviewRibbon(sliderSettings, ratingInfo, slides, placement, sectionSelector);
		};



		// accordion
		document.querySelector('.hero_tabs').insertAdjacentHTML('beforeend', `
			<div class="solutionSlider section-slider-with-timer" id="solution">
				<div class="slider_wrapper w-layout-blockcontainer section-slider-with-timer-container w-container">
					<div class="solutionTitle _w-100">
						<h4 class="section-eyebro-text">Pricing</h4>
					</div>
					<div class="top-slider">
						<section class="splide splidetop">
							<div class="splide__track">
								<ul class="splide__list">
									<li class="splide__slide">
										<div class="child first-child">
											<span class="sliderNav desktopOnly">
												<strong><i><img
															src="//res.cloudinary.com/spiralyze/image/upload/v1733407724/netwrix/8002/icon-data-active.png"
															alt="Data"></i>Data</strong>
												<b>Discovery, classification, loss prevention</b>
											</span>
										</div>
									</li>
									<li class="splide__slide">
										<div class="child">
											<span class="sliderNav desktopOnly">
												<strong><i><img
															src="//res.cloudinary.com/spiralyze/image/upload/v1733407724/netwrix/8002/icon-identity-activer.png"
															alt="Identity"></i>Identity</strong>
												<b>Administration and Active Directory security</b>
											</span>
										</div>
									</li>
									<li class="splide__slide">
										<div class="child">
											<span class="sliderNav desktopOnly">
												<strong><i><img
															src="//res.cloudinary.com/spiralyze/image/upload/v1733407724/netwrix/8002/icon-infrastructure-active.png"
															alt="Infrastructure"></i>Infrastructure</strong>
												<b>Security configuration and endpoint management</b>
											</span>
										</div>
									</li>
								</ul>
							</div>
						</section>
					</div>
					<div class="bottom-slider">
						<section class="splide splidebottom">
							<div class="splide__track">
								<ul class="splide__list">
									<li class="splide__slide">
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
															<p>Detect security threats, prove compliance, and increase IT team efficiency. </p>
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
															<p>Tag and secure sensitive data. Delete unneeded files.</p>
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
															<p>Protect sensitive data on endpoints.</p>
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
															<p>Secure sensitive data and reduce the risk of a data breach.</p>
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
															<p>Detect and respond to threats across your file systems.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/strongpoint_img.webp"
																	alt="Strongpoint">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="strongpoint.html">Strongpoint</a>
															<p>Gain control of your CRM configurations.</p>
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
															<p>Secure your on-prem & cloud infrastructure with a cost-effective SaaS auditing tool.</p>
															<div class="btn_list">
																<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</li>
									<li class="splide__slide">
										<div class="product_list" id="tab2">
											<ul>
												<li>
													<div class="products_data">
														<div class="product_top">
															<figure>
																<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/usercube_img_1.webp"
																	alt="Usercube">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="identity_governance_and_administration_solution.html">Usercube</a>
															<p>Automate, govern, and control all your identities.</p>
															<div class="btn_list">
																<a href="javascript:void(0);"
																	class="custom_btn outline spz-3004-cta">Request Pricing</a>
															</div>
														</div>
													</div>
												</li>
												<li>
													<div class="products_data">
														<div class="product_top">
															<figure>
																<img
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/privilege-secure_img_1.webp"
																	alt="Privilege Secure">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="privilege_secure.html">Privilege Secure</a>
															<p>Secure privileged activity with just-in-time access.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/password-policy-enforcer_img_1.webp"
																	alt="Password Policy Enforcer">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="password_policy_enforcer.html">Password Policy Enforcer</a>
															<p>Eliminate weak credentials with advanced password policy enforcement. </p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/password-secure_img.webp"
																	alt="Password Secure">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="enterprise_password_management_software.html">Password Secure</a>
															<p>Manage and secure user passwords across all devices.</p>
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
																<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/group-id_img.webp"
																	alt="GroupID">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="group_and_user_management_software.html">GroupID</a>
															<p>Automate and delegate directory group and user management.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/enterprise-auditor_img_1.webp"
																	alt="Enterprise Auditor">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="enterprise-auditor.html">Enterprise Auditor</a>
															<p>Detect and prioritize vulnerabilities. On-prem and cloud.  </p>
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
															<p>Detect and respond to threats across your Active Directory and Entra ID.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/threat-prevention_img.webp"
																	alt="Threat Prevention ">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="threat-prevention.html">Threat Prevention </a>
															<p>Audit and block risky changes and access.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/recovery-for-active-directory_img.webp"
																	alt="Recovery for Active Directory">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="active_directory_recovery_software.html">Recovery for Active Directory</a>
															<p>Roll back unwanted changes, restore AD, and minimize downtime.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/ping-castle_img.webp"
																	alt="PingCastle">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="active-directory-risk-assessment.html">PingCastle</a>
															<p>Identify and remediate risks in your AD and Entra ID.</p>
															<div class="btn_list">
																<a href="https://www.pingcastle.com/services/" target="_blank" class="custom_btn outline spz-3004-cta">Request Pricing</a>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</li>
									<li class="splide__slide">
										<div class="product_list" id="tab3">
											<ul>
												<li>
													<div class="products_data">
														<div class="product_top">
															<figure>
																<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/policy-pak_img.webp"
																	alt="PolicyPak">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="endpoint_management_software.html">PolicyPak</a>
															<p>Secure end users wherever they work and make them more productive.</p>
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
																	src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/8002/change-tracker_img.webp"
																	alt="Change Tracker">
															</figure>
														</div>
														<div class="product_bottom">
															<a href="security_configuration_management_software.html">Change Tracker</a>
															<p>Benchmark system configurations. Safeguard file Integrity.</p>
															<div class="btn_list">
																<a href="javascript:void(0);" class="custom_btn outline spz-3004-cta">Request Pricing</a>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
			</div>
			`);


		window.addEventListener('click', (e) => {
			const body = document.querySelector('body');
			if (e.target.matches('.top-slider #splide01-slide01')) {
				body.classList.add('tab1');
				body.classList.remove('tab2', 'tab3');
			} else if (e.target.matches('.top-slider #splide01-slide02')) {
				body.classList.add('tab2');
				body.classList.remove('tab1', 'tab3');
			} else if (e.target.matches('.top-slider #splide01-slide03')) {
				body.classList.add('tab3');
				body.classList.remove('tab1', 'tab2');
			}
			const productMap = {
				'#tab1 ul li:first-child .custom_btn': 'Netwrix Auditor',
				'#tab1 ul li:nth-child(2) .custom_btn': 'Netwrix Data Classification',
				'#tab1 ul li:nth-child(3) .custom_btn': 'Netwrix Endpoint Protector',
				'#tab1 ul li:nth-child(4) .custom_btn': 'Netwrix Enterprise Auditor',
				'#tab1 ul li:nth-child(5) .custom_btn': 'Netwrix Threat Manager',
				'#tab1 ul li:nth-child(6) .custom_btn': 'Netwrix Strongpoint',
				'#tab1 ul li:nth-child(7) .custom_btn': 'Netwrix 1Secure',
				'#tab2 ul li:first-child .custom_btn': 'Netwrix Usercube',
				'#tab2 ul li:nth-child(2) .custom_btn': 'Netwrix Privilege Secure',
				'#tab2 ul li:nth-child(3) .custom_btn': 'Netwrix Password Policy Enforcer',
				'#tab2 ul li:nth-child(4) .custom_btn': 'Netwrix Password Secure',
				'#tab2 ul li:nth-child(5) .custom_btn': 'Netwrix GroupID',
				'#tab2 ul li:nth-child(6) .custom_btn': 'Netwrix Enterprise Auditor',
				'#tab2 ul li:nth-child(7) .custom_btn': 'Netwrix Threat Manager',
				'#tab2 ul li:nth-child(8) .custom_btn': 'Netwrix Threat Prevention',
				'#tab2 ul li:nth-child(9) .custom_btn': 'Netwrix Recovery for Active Directory',
				'#tab3 ul li:first-child .custom_btn': 'Netwrix PolicyPak',
				'#tab3 ul li:nth-child(2) .custom_btn': 'Netwrix Change Tracker'
			};

			for (const selector in productMap) {
				if (e.target.matches(selector)) {
					document.querySelectorAll('[class^="product-item"] .title-v').forEach((item) => {
						if (item.textContent.trim() === productMap[selector]) {
							const productContainer = item.closest('[class^="product-item"]');
							productContainer?.querySelector('.cta button')?.click();
						}
					});
					break;
				}
			}
		});

		loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
			var splidetop = new Splide('.splidetop', {
				rewind: false,
				isNavigation: true,
				focus: 'center',
				autoplay: false,
				speed: 5,
				interval: 1000,
				pagination: false,
				perPage: 3,
				arrows: false,
				pauseOnHover: false,
				pauseOnFocus: false,

			});
			var splidebottom = new Splide('.splidebottom', {
				perPage: 1,
				autoplay: false,
				speed: 500,
				interval: 1000,
				arrows: false,
				pagination: false,
				autoHeight: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				gap: '55px',
				focus: 'center',
			});

			// Pause auto slide on click

			setTimeout(function () {
				splidetop.mount();
				splidebottom.mount();
				splidebottom.sync(splidetop);
			}, 500);
			window.dispatchEvent(new Event('resize'));
		}, document.body); ``


		document.querySelector('#footer_cont').insertAdjacentHTML('beforeend', `
      <div class="footer_data">
        <div class="informationText">
          <p>* Result is as of 11/14/2024. 4.5 rating is based on 143 reviews in the File Analysis Software, Data Loss Prevention, and Privileged Access Management markets. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.</p>
        </div>
      </div>  
    `);

		setTimeout(() => {
			var heroSection = document.querySelector('.hero_section');
			var reviewSection = document.querySelector('.spz-review-ribbon');
			document.querySelector('.spz-review-ribbon').insertAdjacentHTML('afterend', `<div class="hero_container"></div>`);
			document.querySelector('.hero_container').appendChild(heroSection);
			document.querySelector('.hero_container').appendChild(reviewSection);
		}, 300);

		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #3001, #1002, #1003 etc.
		const expName = '3004';
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
		if (document.querySelector('input#SPZ_Test')) {
			document.querySelectorAll('input#SPZ_Test').forEach((input) => {
				input.value = 'variant_8002';
			});
		}
	}
}

var bodyInterval3004 = setInterval(() => {
	if (document.querySelectorAll("body").length > 0) {
		clearInterval(bodyInterval3004);
		loadTestCode3004();
	}
}, 200);
