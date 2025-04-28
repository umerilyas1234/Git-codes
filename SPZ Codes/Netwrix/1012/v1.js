const bodyInterval1012 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_t1012')) {
		clearInterval(bodyInterval1012);
		document.querySelector('body').classList.add("spz_t1012")

		document.querySelector('.customSPZ').insertAdjacentHTML('afterend', `
		 <div class="feedback">
			<div class="auto_container">
				<div class="feedback_inner">
					<div class="feedback_list">
						<ul>
							<li>
								<div class="feedback_item">
									<div class="feedback_left">
										<span>
											<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1012/credissimo-logo_img.webp" alt="credissimo">
										</span>
									</div>
									<div class="feedback_right">
										<h2>Credissimo Complies with GDPR and Spends 85% Less Time on Audits</h2>
										<p>We recommend Netwrix Auditor to anyone who needs to control activities across the network in a 24/7 fashion. If I need to investigate an incident, I do it in a few clicks.</p>
										<h3>Boytcho Boytchev, Information Security Officer, Credissimo EAD</h3>
										<div class="feedback_card">
											<ul>
												<li>
													<div class="feedback_cardData">
														<strong>350,000</strong>
														<span>Unique customers</span>
													</div>
												</li>
												<li>
													<div class="feedback_cardData">
														<strong>€147M</strong>
														<span>Loans granted to date</span>
													</div>
												</li>
												<li>
													<div class="feedback_cardData">
														<strong>85% faster</strong>
														<span>Audit report generation</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="feedback_middleList">
									<ul>
										<li>
											<div class="feedback_midlleList_data">
												<span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1012/medical-center-logo_img.webp" alt="medical center logo" width="128" height="40"></span>
												<p>Using Netwrix Auditor, Medical Center Clinic slashes IT workload by 40% and ensures HIPAA compliance.</p>	
											</div>
										</li>
										<li>
											<div class="feedback_midlleList_data">
												<span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1012/tesica-logo_img.webp" alt="tesica logo" width="104" height="40"></span>
												<p>Netwrix Auditor helps Tesica Services investigate security incidents faster and reduce the risk of data exfiltration.</p>
											</div>
										</li>
										<li>
											<div class="feedback_midlleList_data">
												<span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1012/firts-national-bank-logo_img.webp" alt="firts national bank logo" width="182" height="40"></span>
												<p>First National Bank and Trust of Beloit prepares for audits in just one hour instead of one week.</p>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div class="feedback_item">
									<div class="feedback_left">
										<span>
											<img src="//res.cloudinary.com/spiralyze/image/upload/v1742212598/netwrix/1012/zeon-logo_img_1.svg" alt="zeon">
										</span>
									</div>
									<div class="feedback_right">
										<h2>Zeon Chemicals Prepares for J-SOX Audits and Saves Hours on Monthly Internal Checks</h2>
										<p>Netwrix Auditor helps us improve security and automate internal audit activities. Now we can quickly detect and investigate activity that could lead to tampering.</p>
										<h3>Jochen Sievert, Director Information Technology, Zeon Chemicals LP</h3>
										<div class="feedback_card">
											<ul>
												<li>
													<div class="feedback_cardData">
														<strong>3,000+</strong>
														<span>Employees worldwide</span>
													</div>
												</li>
												<li>
													<div class="feedback_cardData">
														<strong>$2.9 billion</strong>
														<span>Consolidated sales</span>
													</div>
												</li>
												<li>
													<div class="feedback_cardData">
														<strong>2 hours</strong>
														<span>Saved per every audit</span>
													</div>
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
		`);

	}
}, 10);
