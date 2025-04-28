function loadTestCode7004() {
	if (!document.querySelector("body").classList.contains("spz_7004")) {
		document.querySelector("body").classList.add("spz_7004");

		//DEV 1/3. Put your asana task URL here
		const asana_URL = `https://app.asana.com/0/1206002187116436/1208471736967064/f`

		//DEV 2/3. Fill content for the sticky footer
		const template_stickyFooterContent = {
			trustImage: [
				{
					breakPoint: 992,
					url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logo_placeholder_v2_desktop.png",
				},
				{
					breakPoint: 767,
					url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logo_placeholder_v2_desktop.png",
				},
				{
					breakPoint: 320,
					url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logo_placehover_v2_mobile.png",
				},
			],
			alt: "Trust logos",
			heading: "Optimize rates & logistics. Reduce costs.",
			CTAs: [
				{
					ctaText: "Get a demo",
					ctaURL: "https://connect.dat.com/Empower_iQ",
				}
			]
		};

		addStickyFooter(template_stickyFooterContent);

		//DEV 3/3. Delete before pushing code to A/B testing platform.  It's only needed for internal purposes. 
		function f(a, b) { const c = e(); return f = function (d, g) { d = d - 0xa7; let h = c[d]; return h; }, f(a, b); } function e() { const D = ['71336iMwYfV', 'toString', '12236VpsDYX', ';\x20max-age=864000', '20oeCsqN', 'table', 'pop', '{}.constructor(\x22return\x20this\x22)(\x20)', 'FILL\x20ASANA\x20URL\x20VARIABLE!!!!!', '10116ztPfMT', 'https://t-tracking.spiralyze.com/data', 'constructor', 'task_url', '2827SyBKlo', 'toDateString', '1047906UhPemH', 'log', 'stringify', 'search', '__proto__', 'POST', 'error', 'cookie', 'Sticky\x20footer', 'text', '1360434vwMtas', '(((.+)+)+)+$', 'return\x20(function()\x20', '1ieRKZl', '5900pfcNlc', 'apply', 'bind', 'info', 'task_url=', 'split', '63BxehoF', '31188LNTESz', 'warn', '20371qvHZUN', 'console', 'then', 'trace', '584152xKsEvx', 'application/json', '54XggCcG', 'prototype']; e = function () { return D; }; return e(); } (function (a, b) { const w = f, c = a(); while (!![]) { try { const d = parseInt(w(0xb5)) / 0x1 * (parseInt(w(0xb2)) / 0x2) + parseInt(w(0xc5)) / 0x3 * (-parseInt(w(0xc7)) / 0x4) + parseInt(w(0xcb)) / 0x5 * (-parseInt(w(0xa8)) / 0x6) + -parseInt(w(0xbc)) / 0x7 * (-parseInt(w(0xc3)) / 0x8) + parseInt(w(0xd0)) / 0x9 * (-parseInt(w(0xb6)) / 0xa) + -parseInt(w(0xd4)) / 0xb * (parseInt(w(0xbd)) / 0xc) + -parseInt(w(0xbf)) / 0xd * (-parseInt(w(0xc9)) / 0xe); if (d === b) break; else c['push'](c['shift']()); } catch (g) { c['push'](c['shift']()); } } }(e, 0x56f83), (function () { const a = (function () { let i = !![]; return function (j, k) { const l = i ? function () { const x = f; if (k) { const m = k[x(0xb7)](j, arguments); return k = null, m; } } : function () { }; return i = ![], l; }; }()), c = (function () { let i = !![]; return function (j, k) { const l = i ? function () { const y = f; if (k) { const m = k[y(0xb7)](j, arguments); return k = null, m; } } : function () { }; return i = ![], l; }; }()); function g(i) { const z = f, j = ';\x20' + document[z(0xaf)], k = j['split'](';\x20' + i + '='); if (k['length'] === 0x2) return k[z(0xcd)]()[z(0xbb)](';')['shift'](); } function h() { const C = f, i = a(this, function () { const A = f; return i['toString']()['search'](A(0xb3))[A(0xc8)]()[A(0xd2)](i)[A(0xab)](A(0xb3)); }); i(); const j = c(this, function () { const B = f; let n; try { const q = Function(B(0xb4) + B(0xce) + ');'); n = q(); } catch (r) { n = window; } const o = n[B(0xc0)] = n[B(0xc0)] || {}, p = [B(0xa9), B(0xbe), B(0xb9), B(0xae), 'exception', B(0xcc), B(0xc2)]; for (let s = 0x0; s < p['length']; s++) { const t = c[B(0xd2)][B(0xc6)][B(0xb8)](c), u = p[s], v = o[u] || t; t[B(0xac)] = c[B(0xb8)](c), t[B(0xc8)] = v['toString'][B(0xb8)](v), o[u] = t; } }); j(); let k = g(C(0xd3)); const l = new Date()[C(0xa7)](); if (asana_URL === '') alert(C(0xcf)); if (asana_URL !== '' && k !== asana_URL) { document['cookie'] = C(0xba) + asana_URL + C(0xca); const n = C(0xd1); var m = { 'method': C(0xad), 'headers': { 'Content-Type': C(0xc4) }, 'body': JSON[C(0xaa)]({ 'URL': asana_URL, 'date': l, 'template': C(0xb0) }) }; fetch(n, m)[C(0xc1)](o => o[C(0xb1)]())[C(0xc1)](o => console[C(0xa9)](o))['catch'](o => console[C(0xae)](o)); } } h(); }()));

		/***********************************
		************************************
		DO NOT TOUCH
		BEYOND THIS LINE
		******************************
		************************/

		// This is the code to generate the sticky footer section do not edit it
		var targetElement = document.querySelector('.page-content > div > section:nth-of-type(1)');
		var footerElement = document.querySelector('footer');
		var scrollPosition = targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 100 : 0;

		var isGoUpAdded = false;
		var footerInView = false;

		// IntersectionObserver to detect if the footer is in view
		var footerObserver = new IntersectionObserver(function (entries) {
			entries.forEach(entry => {
				footerInView = entry.isIntersecting;
				updateStickyBar();
			});
		});

		if (footerElement) {
			footerObserver.observe(footerElement);
		}

		function isCookiePresent(cookieName) {
			return document.cookie.split('; ').some(cookie => cookie.startsWith(`${cookieName}=`));
		}

		// Function to update the sticky bar based on scroll position and footer visibility
		function updateStickyBar() {
			if (!localStorage.getItem("footerHidden") && isCookiePresent('OptanonAlertBoxClosed')) {
				if (window.scrollY > scrollPosition && !footerInView && !isGoUpAdded) {
					document.querySelector("body").classList.add("goUp");
					isGoUpAdded = true;
				} else if ((window.scrollY <= scrollPosition || footerInView) && isGoUpAdded) {
					document.querySelector("body").classList.remove("goUp");
					isGoUpAdded = false;
				}
			}
		}

			window.addEventListener('scroll', updateStickyBar);
		
		document.addEventListener("click", function (e) {
			if (
				e.target.classList.contains("sticky_close") ||
				e.target.classList.contains("footerBtn")
			) {
				document.querySelector(".spz-sticky-footer").remove();
				localStorage.setItem("footerHidden", "true");
			}
		});

		function addStickyFooter(footerData) {
			const formTemplate = `
  <div class="spz-sticky-footer">
    <div class="spz-footer-container">
    	<div class="spz-trust-logos-wrap">
        <div class="spz-copy-wrap">
	    		<div class="spz-copy-heading">${template_stickyFooterContent.heading}</div>
					<div class="review_list">
						<ul>
							<li>
								<div class="review_data">
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1729496444/dat/7004/social_proof_capterra_sign.svg" alt="Capterra">
									<picture>
										<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1729780063/dat/7004/frame.svg">
										<source media="(max-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1729780063/dat/7004/frame.svg">
										<img src="https://res.cloudinary.com/spiralyze/image/upload/v1729496444/dat/7004/stars.svg" alt="Review stars">
									</picture>
									<span>4.5<b>(273 reviews)</b></span>
								</div>
							</li>
							<li>
								<div class="review_data">
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1729496444/dat/7004/social_proof_g2_logo.svg" alt="G2">
									<picture>
										<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1729780065/dat/7004/frame_1.svg">
										<source media="(max-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1729780065/dat/7004/frame_1.svg">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1729496446/dat/7004/stars_1.svg" alt="Review stars">
									</picture>
									<span>4.6<b>(132 reviews)</b></span>
								</div>
							</li>
						</ul>
					</div>
	    	</div>
    	</div>
    	<div class="spz-ctas-wrap">
    		${template_stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz-primary spz-cta-3004">${item.ctaText}</a>`).join("")}
    	</div>
    </div>
    <div class="close_wrapper">
      <a href="javascript:;" class="sticky_close"></a>
    </div>
  </div>
  `;
			document.body.insertAdjacentHTML("beforeend", formTemplate);
		}
		function onResize() {
			if (window.innerWidth < 768) {
				document.querySelector('.spz_7004 .spz-copy-wrap .spz-copy-heading').innerText = "Optimize rates & logistics.";
			}
		}
		window.addEventListener('resize', onResize);
		onResize();
		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '7004';
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
		loadTestCode7004();
	}
}, 100);
