const loadJS_SPZ = (url, implementationCode, location) => {
	var scriptTag = document.createElement("script");
	scriptTag.src = url;
	scriptTag.onload = implementationCode;
	scriptTag.onreadystatechange = implementationCode;
	location.appendChild(scriptTag);
};

const loadCSS_SPZ = (path) => {
	let css = document.createElement("link");
	css.rel = "stylesheet";
	css.media = "all";
	css.href = path;
	document.getElementsByTagName("head")[0].appendChild(css);
};

const smoothScrollJSURL = "//res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js";
const splideCSSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
const splideJSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";

loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
loadCSS_SPZ(splideCSSURL);

function loadTestCode3001() {
	if (!document.querySelector("body").classList.contains("spz_3001")) {
		document.querySelector("body").classList.add("spz_3001");
		document.querySelector('.navbar-brand img').src = "//res.cloudinary.com/spiralyze/image/upload/v1729254300/dat/7006/dat_logo.svg";
		document.querySelector('.navbar-brand img').alt = "DAT logo";
		document.querySelector('.page-content>div').insertAdjacentHTML('afterbegin', `
			<section class="hero_section">
				<div class="hero_outer">
					<div class="auto_container">
						<div class="hero_inner">
							<div class="hero_main">
								<div class="hero_left">
									<h3>DAT FOR SHIPPERS</h3>
									<h1>Get lower freight rates. Optimize spend. <br> Track performance.</h1>
									<p>View spot, contract, and historical rates across lanes. Get lower rates. Use trend data to target
										contracts that reduce cost & exposure to spot markets. Compare performance to the market & optimize.</p>
									<div class="btn_list">
										<ul>
											<li>
												<a href="https://connect.dat.com/Empower_iQ" class="custom_btn spz-3001-v1">Get a demo</a>
											</li>
											<li>
												
											</li>
										</ul>
									</div>
									<div class="ratings">
										<ul>
											<li>
												<div class="rating_data">
													<img src="//res.cloudinary.com/spiralyze/image/upload/v1729254300/dat/7006/logo-capterra.svg"
														alt="Capterra logo">
													<img src="//res.cloudinary.com/spiralyze/image/upload/v1729254300/dat/7006/stars-45.svg"
														alt="Rating stars">
													<span>4.5 <b>(273 reviews)</b></span>
												</div>
											</li>
											<li>
												<div class="rating_data">
													<img src="//res.cloudinary.com/spiralyze/image/upload/v1729254300/dat/7006/logo-g2.svg"
														alt="G2 logo">
													<img src="//res.cloudinary.com/spiralyze/image/upload/v1729254300/dat/7006/stars-46.svg"
														alt="Rating stars">
													<span>4.6 <b>(132 reviews)</b></span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="hero_right">
									<picture>
										<source media="(max-width:1023.98px)"
											srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/3001/ui-768.webp">
										<source media="(max-width:767.98px)"
											srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/3001/ui-360.webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/3001/ui-1440.webp"
											alt="DATOne Load Board & DATiQ Benchmark Dashboard">
									</picture>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="testimonial_section">
				<div class="auto_container">
					<div class="testimonial_inner">
						<div class="custom_heading">
							<h2>Join 1,400+ shippers using DAT</h2>
						</div>
						<div class="splide" id="testimonial_slider">
							<div class="splide__track">
								<ul class="splide__list">
									<li class="splide__slide">
										<div class="slider_data">
											<div class="slider_top">
												<small>
													<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/7006/avatar-1.webp"
														alt="Todd Pearson">
													<span>
														<b>Todd Pearson</b>
														<strong>Transportation Manager</strong>
													</span>
												</small>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254391/dat/7006/pactiv-evergreen-logo.svg"
														alt="pactiv evergreen"></i>
											</div>
											<div class="slider_bottom">
												<p>Instrumental in providing the necessary details for internal C-Suite dialogue as well as the depth
													necessary to properly scope RFPʼs.</p>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254391/dat/7006/pactiv-evergreen-logo.svg"
														alt="pactiv evergreen"></i>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="slider_data">
											<div class="slider_top">
												<small>
													<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/7006/avatar-2.webp"
														alt="Anbu Kuppusamy">
													<span>
														<b>Anbu Kuppusamy</b>
														<strong>Director of Transportation</strong>
													</span>
												</small>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/jm-smucker-logo.svg"
														alt="jm smucker"></i>
											</div>
											<div class="slider_bottom">
												<p>DAT benchmark data has become an integral part of our decision-making process with the Smucker
													transportation team. </p>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/jm-smucker-logo.svg"
														alt="jm smucker"></i>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="slider_data">
											<div class="slider_top">
												<small>
													<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/7006/avatar-3.webp"
														alt="Brad Whitson">
													<span>
														<b>Brad Whitson</b>
														<strong>Director of Transportation</strong>
													</span>
												</small>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/kimberly-clark-logo.svg"
														alt="kimberly clark"></i>
											</div>
											<div class="slider_bottom">
												<p>On the DAT iQ side, it helps us assess our network for cost competitiveness and know where
													opportunities for <br> improvement exist.</p>
												<i><img
														src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/kimberly-clark-logo.svg"
														alt="kimberly clark"></i>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="slider_data">
											<div class="slider_top">
												<small>
													<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/7006/avatar-4.webp"
														alt="Dirk Martin">
													<span>
														<b>Dirk Martin</b>
														<strong>Sr. Director of Transportation</strong>
													</span>
												</small>
												<i><img src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/freshpet-logo.svg"
														alt="freshpet"></i>
											</div>
											<div class="slider_bottom">
												<p>For a company going from being fully outsourced to a 3PL to insourcing our freight and contracting
													directly, DAT’s data has been an invaluable source of truth for analysis.</p>
												<i><img src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/freshpet-logo.svg"
														alt="freshpet"></i>
											</div>
										</div>
									</li>
									<li class="splide__slide">
										<div class="slider_data">
											<div class="slider_top">
												<small>
													<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/dat/7006/avatar-5.webp"
														alt="Jon Franke">
													<span>
														<b>Jon Franke</b>
														<strong>Mode Optimization Manager</strong>
													</span>
												</small>
												<i><img src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/chep-logo.svg"
														alt="Chep"></i>
											</div>
											<div class="slider_bottom">
												<p>DATʼs products and market analysis have enabled CHEPʼs supply chain to reach new levels of
													efficiency and visibility. </p>
												<i><img src="//res.cloudinary.com/spiralyze/image/upload/v1729254390/dat/7006/chep-logo.svg"
														alt="Chep"></i>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
    `);
			
		document.querySelector('.btn_list ul li:nth-child(2)').insertAdjacentElement('afterbegin', document.querySelector('.wistia_click_to_play'));
		document.querySelector('.btn_list ul li:nth-child(2) a').classList.add('custom_btn', 'btn_outline', 'spz-3001-v1');
		document.querySelector('.btn_list ul li:nth-child(2) a').classList.remove('btn', 'btn-sm','btn-secondary', 'text-white', 'button-primary', 'text-uppercase');
		document.querySelector('.btn_list ul li:nth-child(2) a').textContent = 'solutions in action';
		const loadSplideSliderSPZ = function () {
			var splide = new Splide("#testimonial_slider", {
				type: "loop",
				arrows: false,
				autoHeight: true,
				pagination: true,
				autoplay: true,
				speed: 500,
				interval: 5000,
				perPage: 3,
				gap: "16px",
				pauseOnHover: true,
				breakpoints: {
					767: {
						perPage: 1,
						gap: "8px",
						focus: 'center',
						padding: {
							right: '16px',
							left: '0',
						},
					},
					1023.98: {
						perPage: 1,
					},
				},
			});
			splide.mount();
		}
		loadJS_SPZ(splideJSURL, loadSplideSliderSPZ, document.body);

		function addCollapseClass() {
			if (window.innerWidth < 1024) {
				document.querySelector('.spz_3001 .site-header .navbar .container-fluid .navbar-toggler').classList.add('collapsed');
			}
		}
		
		addCollapseClass();
		window.addEventListener("resize", () => {
			addCollapseClass();
		});
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				document.body.classList.add("scrolled");
			} else {
				document.body.classList.remove("scrolled");
			}
		});


		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '3001';
		//variantName should be _V1, _V2, _TC etc.
		const variantName = expName + `_V1`;

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
}

var bodyInterval = setInterval(() => {
	if (document.querySelectorAll("body").length > 0) {
		clearInterval(bodyInterval);
		loadTestCode3001();
	}
}, 100);
