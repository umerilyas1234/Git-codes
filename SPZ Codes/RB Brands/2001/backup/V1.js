function loadTestCode() {
	const tagClass = 'spz-2001';
	if (!document.querySelector('body').classList.contains(tagClass)) {
		document.querySelector('body').classList.add(tagClass);

		var backArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
							<path d="M7.33333 1.62122L11.5 5.99622M11.5 5.99622L7.33333 10.3712M11.5 5.99622L1.5 5.99622" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path>
						</svg>`;
		var locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"> 
							<g clip-path="url(#clip0_9894_272)">
								<path d="M7.9999 0.89624C5.1519 0.89624 2.8479 3.20024 2.8479 6.04824C2.8479 9.26424 5.9039 13.8082 7.2959 15.7442C7.6479 16.2242 8.3359 16.2242 8.6879 15.7442C10.0959 13.8082 13.1519 9.26424 13.1519 6.04824C13.1519 3.20024 10.8479 0.89624 7.9999 0.89624ZM8.0319 8.51224C6.6559 8.51224 5.5359 7.39224 5.5359 6.01624C5.5359 4.64024 6.6559 3.52024 8.0319 3.52024C9.4079 3.52024 10.5279 4.64024 10.5279 6.01624C10.5279 7.40824 9.4079 8.51224 8.0319 8.51224Z" fill="#1EA6F3" ></path>
							</g>
							<defs>
								<clipPath id="clip0_9894_272">
									<rect width="16" height="16" fill="white" transform="translate(0 0.496216)" ></rect>
								</clipPath>
							</defs>
						</svg>`;
		var callIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
							<g clip-path="url(#clip0_9894_279)">
								<path d="M14.3912 10.6525L12.3216 10.4162C12.0782 10.3876 11.8315 10.4145 11.6001 10.495C11.3687 10.5754 11.1585 10.7073 10.9853 10.8807L9.48604 12.3799C7.17293 11.2035 5.29283 9.32339 4.11641 7.01028L5.62382 5.50287C5.97419 5.1525 6.1453 4.66361 6.08826 4.16658L5.85197 2.11325C5.80577 1.71575 5.61502 1.34914 5.31601 1.08319C5.01701 0.817247 4.63065 0.670546 4.23048 0.671022H2.82085C1.90012 0.671022 1.13419 1.43694 1.19123 2.35769C1.62308 9.31621 7.18826 14.8733 14.1387 15.3051C15.0594 15.3622 15.8253 14.5962 15.8253 13.6755V12.2658C15.8334 11.4429 15.2142 10.7503 14.3912 10.6525Z" fill="white" ></path>
							</g>
							<defs>
								<clipPath id="clip0_9894_279">
									<rect width="16" height="15.1111" fill="white"
										transform="translate(0.5 0.440674)" ></rect>
								</clipPath>
							</defs>
						</svg>`;

		var location = document.querySelector(
			'header > section > div .bg-prussianBlue'
		).innerText;
		var telNumber = document.querySelector("header div nav a").getAttribute("href");
		if (!document.querySelector('.hero-info')) {
			document.querySelector('header > section > div').insertAdjacentHTML(
				'afterbegin',
				`<div class="hero-info">
				<div class="heading">
					<h1>Plumbing repair</h1>
					<p>Same day service usually available</p>
				</div>
				<div class="step_box">
					<form>
						<div class="step-1">
							<div class="top-dots">
								<div class="step_dots">
									<div class="dots step1-dots"></div>
									<div class="dots step2-dots"></div>
								</div>
							</div>
			
							<div class="form-heading">
								<h3>Get a local quote</h3>
							</div>
							<div class="input-box">
								<div class="input-wrap">
									<label>ZIP Code</label>
									<input type="tel" name="zipcode" id="zipcode" maxlength="9" placeholder="ZIP Code">
								</div>
								<div class="error" id="zip-error">This field is required.</div>
							</div>
							<div class="next-btn">
								<a href="javascript:void(0)" id="next-btn"><span class="next-text">Next</span>
									<span>${backArrow}</span>
								</a>
							</div>
						</div>
						<div class="step-2">
							<div class="top-dots">
								<div class="step_dots">
									<div class="dots step1-dots"></div>
									<div class="dots step1-dots"></div>
								</div>
							</div>
							<div class="location-box">
								<div class="location">${locationIcon}<span>${location}</span></div>
							</div>
							<div class="form-heading">
								<p><span>Appointments available.</span><br>Call now for immediate assistance.</p>
							</div>
							<div class="call-btn">
								<a href="${telNumber}">${callIcon}<span>Call Now</span></a>
								<p>Call 24/7. Zero obligation.</p>
							</div>
						</div>
					</form>
				</div>
			<div>`
			);
		}

		document.getElementById('next-btn').addEventListener('click', function () {
			var zipCodeInput = document.getElementById('zipcode');
			var zipError = document.getElementById('zip-error');
			var zipCode = zipCodeInput.value.trim();
		
			var zipCodePattern = /^(\d{5}|\d{9})$/;
		
			if (zipCode === '') {
				zipError.style.display = 'inline-block';
				zipError.textContent = 'This field is required.';
				document.querySelector('.input-wrap').classList.add('err');
			} else if (!zipCodePattern.test(zipCode)) {
				zipError.style.display = 'inline-block';
				zipError.textContent = 'ZIP code should be 5 or 9 digits.';
				document.querySelector('.input-wrap').classList.add('err');
			} else {
				document.querySelector('.step-1').style.display = 'none';
				document.querySelector('.step-2').style.display = 'flex';
				zipError.style.display = 'none';
				document.querySelector('.input-wrap').classList.remove('err');
			}
		});

		document.getElementById('zipcode').addEventListener('input', function () {
			document.getElementById('zip-error').style.display = 'none';
			document.querySelector('.input-wrap').classList.remove('err');
		});

		var elements = document.querySelectorAll('input[type=text], input[type=tel]');
		elements.forEach(function (element) {
			element.addEventListener('focus', function () {
				var parentWrap = element.closest('.input-wrap');
				if (parentWrap) {
					parentWrap.classList.add('active', 'typing');
				}
				element.dataset.placeholder = element.placeholder;
				element.placeholder = '';
			});

			element.addEventListener('blur', function () {
				var parentWrap = element.closest('.input-wrap');
				if (parentWrap) {
					if (element.value.length === 0) {
						parentWrap.classList.remove('active');
					}
					parentWrap.classList.remove('typing');
				}
				element.placeholder = element.dataset.placeholder;
			});
		});

		// trigger next-btn click event on enter key press
		document.getElementById('zipcode').addEventListener('keypress', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13) {
				e.preventDefault();
				document.getElementById('next-btn').click();
				document.querySelector('#zipcode').blur();
			}
		});
	}
}

loadTestCode();
