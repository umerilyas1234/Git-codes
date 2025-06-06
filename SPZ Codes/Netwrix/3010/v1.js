const bodyInterval3010 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_3010')) {
		clearInterval(bodyInterval3010);
		document.querySelector('body').classList.add("spz_3010")

		setTimeout(() => {
			document.querySelector('#cont-p').insertAdjacentHTML('afterbegin', `
				<section class="buy_now">
					<div class="auto_container">
						<div class="buy_nowInner">
							<div class="buy_nowTop">
								<div class="buy_nowHeading">
									<h1>Buy Now</h1>
								</div>
								<div class="buy_nowList">
									<ul>
										<li>
											<div class="buy_nowData">
												<div class="data_top">
													<span><img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/nwx-auditor.svg" alt="Netwrix Auditor Essentials Edition"></span>
													<h2>Netwrix Auditor <br>
														Essentials Edition</h2>
													<h4>Built for businesses under 150 employees</h4>
													<div class="btn_outer">
														<a href="https://buy.netwrix.com" class="custom_btn btn_red">Buy Now</a>
														<a href="javascript:void(0);" class="hyperLink">Or start a free trial</a>
													</div>
												</div>
												<div class="data_bottom">
													<div class="data_list">
														<ul>
															<li>
																<p>Covers Active Directory, Entra ID, SharePoint, SharePoint Online, OneDrive for Business, Teams, Windows File Servers, and Windows Server</p>
															</li>
															<li>
																<p>On-Premises Installation</p>
															</li>
															<li>
																<p>Community Supported</p>
															</li>
															<li>
																<p>Risk Assessment</p>
															</li>
															<li>
																<p>Monitoring + Alerts</p>
															</li>
															<li>
																<p>Visibility into Permissions</p>
															</li>
															<li>
																<p>State-in-Time Reporting</p>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div class="buy_nowData">
												<i><img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/coming-soon.svg" alt="coming soon"></i>
												<div class="data_top">
													<span><img src="//res.cloudinary.com/spiralyze/image/upload/v1747232844/netwrix/3010/nwx-netwrix-1secure.svg" alt="Netwrix 1Secure DSPM Edition"></span>
													<h2>Netwrix 1Secure <br>
														DSPM Edition</h2>
													<h4>Buy Now available soon.</h4>
													<div class="btn_outer">
														<a href="javascript:void(0);" class="custom_btn btn_blue contact_me">Contact Me</a>
													</div>
												</div>
												<div class="data_bottom">
													<div class="data_list">
														<ul>
															<li>
																<p>Covers Active Directory, Entra ID, SharePoint Online, OneDrive for Business, Teams, Exchange Online, and Windows File Servers</p>
															</li>
															<li>
																<p>SaaS-Hosted</p>
															</li>
															<li>
																<p>Community Supported</p>
															</li>
															<li>
																<p>Risk Assessment</p>
															</li>
															<li>
																<p>Monitoring + Alerts</p>
															</li>
															<li>
																<p>Visibility into Permissions</p>
															</li>
															<li>
																<p>State-in-Time Reporting</p>
															</li>
															<li>
																<p>AI Assistant</p>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="buy_nowBottom">
								<div class="req_price">
									<h2>Looking for a different product? Request a price here.</h2>
									<div class="btn_outer">
										<a href="https://www.netwrix.com/how_to_buy.html" class="custom_btn btn_red">Request Pricing</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				`);
		}, 200);
		setTimeout(() => {
			document.querySelector("#ModalForm_message").value = "Contact me when Netwrix 1Secure DSPM Edition is available to Buy Now";
		}, 1000);

		window.addEventListener('click', (e) => {
			if (e.target.classList.contains('contact_me')) {
				e.preventDefault();
				document.querySelector('.navbar-item.contact-item button').click();
				document.querySelector('.v-modal-mask:has(.popup-wrapper-1008)').closest('div').style.display = 'table';
			}
			if (e.target.classList.contains('hyperLink')) {
				e.preventDefault();
				document.querySelector('.one-field-form-button-test button.nwx-btn').click();
			}
		});

		var button = document.querySelector(".one-field-form-button-test [id^='app-']");
		var buttonID = button.id;
		const formId = `form-${buttonID}`;
		const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
		formContainer.classList.add('spz_modal');
		function updateFormAndButton() {
			document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Start Free Trial';
			console.log('updated states');
		}
		updateFormAndButton();

		const targetNode = formContainer.querySelector(`.spz_modal form .modelFormSubmit`);
		const config = { attributes: true, attributeFilter: ['value', 'class'] };
		const callback = (mutationList, observer) => {
			mutationList.forEach(mutation => {
				if (mutation.type === 'attributes') {
					const newValue = mutation.target.getAttribute(mutation.attributeName);
					const oldValue = mutation.oldValue;

					if (newValue !== oldValue) {
						updateFormAndButton();
					}
				}
			});
		};
		const observer = new MutationObserver(callback);
		if (targetNode) {
			observer.observe(targetNode, { ...config, attributeOldValue: true });
		}

	}
}, 100);
