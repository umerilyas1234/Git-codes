// Wait for element
function waitForElement(cssSelector, callback, waitTime) {
	var stop,
		elementCached,
		timeout,
		check = function () {
			try {
				elementCached = document.querySelector(cssSelector);
				if (stop) return;
				if (elementCached) {
					callback(elementCached);
					clearTimeout(timeout);
				} else {
					window.requestAnimationFrame(check);
				}
			} catch (err) {
				console.log(err);
			}
		};
	window.requestAnimationFrame(check);
	timeout = setTimeout(function () {
		stop = true;
	}, waitTime);
}
waitForElement('#___gatsby main', runObserverOnMain, 5000);
function runObserverOnMain() {
	const targetNode = document.querySelector("#___gatsby main");
	const config = {
		attributes: true,
		childList: true,
		subtree: false
	};
	const callback = (mutationList, observer) => {
		console.log("5001::runObserverOnMain");
		beforLoadTestCodet10001();
	};
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
	beforLoadTestCodet10001();
}

function beforLoadTestCodet10001() {
	console.log("5001::beforLoadTestCodet10001");
	if (window.location.href.indexOf('/personalinjury') == -1) {
		document.querySelector("body").classList.remove("spz_t10001");
		return;
	}
	var loadTestInterval = setInterval(loadTestCode10001, 200);
	setTimeout(function () {
		clearInterval(loadTestInterval);
	}, 2000);
}
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
loadJS_SPZ(smoothScrollJSURL, function () {}, document.body);
loadCSS_SPZ(splideCSSURL);
let autoAccordionInterval;
let splide;
function loadTestCode10001() {
	if (window.location.href.indexOf('/personalinjury') == -1) {
		document.querySelector("body").classList.remove("spz_t10001");
		return;
	}
  document.querySelector("body").classList.add("spz_t10001");

  document.querySelector('#main-header a[color="light"] picture img').srcset = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/assembly_logo_webp.webp";
  document.querySelector('#main-header a[color="light"] picture source').srcset = "https://res.cloudinary.com/spiralyze/image/upload/v1718715296/assembly/10001/assembly_logo.svg";
  document.querySelector('#main-header a[color="light"] picture img').src = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/assembly_logo_webp.webp";

  // on scrool add class
  document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      document.body.classList.add('sticky_header');
    } else {
      document.body.classList.remove('sticky_header');
    }
  });

  // hero section
  if (!document.querySelector('.spz_t10001 .main_hero')) {
    document.querySelector("main").insertAdjacentHTML(
      "beforebegin",
      `
      <div class="main_hero">
        <div class="auto_container">
          <div class="hero_inner">
            <div class="hero_left">
              <div class="hero_logo">
                <strong>PERSONAL INJURY</strong>
              </div>
              <div class="hero_detail">
                <h1>Grow Your PI Practice with Embedded AI, Streamlined Case Handling, and Higher Win Rates</h1>
                <div class="hero_list">
                  <ul>
                    <li>
                      <p>
                        <strong>Effortless Intake:</strong> Get automatic intake forms that integrate with marketing channels. Automate email & SMS followups.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Case Management:</strong> Create & assign tasks. Message clients via text. Get alerts for filing deadlines, court dates, and more. 
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Practice Automations:</strong> Auto-generate demand letters, release forms, and more. Populate case files with intake info. 
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="cta_list">
                  <div class="cta_outer">
                    <a class="custom_btn" href="https://assemblysoftware.com/get-a-demo">
                      Get a Demo
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3mszwb"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.028 10.0343C16.9482 9.975 16.8646 9.92144 16.778 9.87392L7.47833 3.92237L7.44411 3.89749L7.38357 3.86155C7.21199 3.7682 7.01733 3.73216 6.8257 3.75828C6.63407 3.78439 6.45462 3.87141 6.31141 4.00766C6.1682 4.14392 6.06809 4.3229 6.02448 4.5206C5.98088 4.71831 5.99588 4.92528 6.06746 5.11378V5.11378L8.10217 11.9997L6.06746 18.8828C5.9937 19.0772 5.98004 19.2911 6.02839 19.4942C6.07673 19.6972 6.18465 19.8792 6.33687 20.0143C6.48909 20.1494 6.67791 20.2308 6.87661 20.247C7.07531 20.2632 7.27384 20.2134 7.44411 20.1046V20.1046L7.80209 19.8862L9.08925 19.057L12.0505 17.1689L16.7885 14.1282C16.8699 14.0809 16.949 14.0292 17.0254 13.9734V13.9734C17.3262 13.7537 17.572 13.4608 17.7417 13.1198C17.9114 12.7788 18 12.3997 18 12.0149C18 11.6301 17.9114 11.251 17.7417 10.91C17.572 10.5689 17.3262 10.2761 17.0254 10.0564L17.028 10.0343Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="
                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/hero__-_ui_image_360.webp
                "
              ></source>
              <source
                media="(max-width: 1023px)"
                srcset="
                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/hero__-_ui_image_1440.webp
                "
              ></source>
              <source
                srcset="
                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/hero__-_ui_image_1440.webp
                "
              ></source>
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/hero__-_ui_image_1440.webp"
                alt="Hero image"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    `
    );
  }

  // logo section
  if (!document.querySelector('.spz_t10001 .logo_section')) {
    document.querySelector('.main_hero').insertAdjacentHTML('afterend', `
    <div class="logo_section">
      <div class="auto_container">
          <div class="logo_inner">
              <div class="logo_data">
        <picture>
          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/desktop_logos_3.svg">
          <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_logos.webp">
          <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/desktop_logos_1.svg" alt="Company Logo" width="1240" height="40">
        </picture>
              </div>
          </div>
      </div>
    </div>
  `);
  }

  // features section
  if (!document.querySelector('.spz_t10001 .section2_10001')) {
    document.querySelector('.logo_section').insertAdjacentHTML('afterend', `
      <section class="section2_10001">
        <div class="auto_container">
            <div class="section2_inner">
                <div class="wrapper">
                    <div class="title">Features</div>
                    <div class="accordion-wrapper">
                        <div class="text">
                            <div class="child active" data-index="1">
                                <div class="bar">
                                    <div class="line"></div>
                                </div>
                                <div class="title">
                                    <div class="text">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718715695/assembly/10001/case_management.svg" alt="Case Management Icon" width="30" height="30" />
                                        <span>Case Management</span>
                                    </div>
                                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                </div>
                                <div class="content">
                                    <div class="text">View case info from anywhere via the cloud platform. Case overviews, client information, legal documents, calendars, billing, and more.</div>
                                    <a href="https://assemblysoftware.com/case-management" class="cta">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                        </svg>
                                    </a>
                                    <picture>
                                        <source media="(max-width:767.98px)"
                                            srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-mobile.png">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-tablet.png"
                                            alt="Case Management" width="688" height="404">
                                    </picture>
                                </div>
                            </div>
                            <div class="child" data-index="2">
                                <div class="bar">
                                    <div class="line"></div>
                                </div>
                                <div class="title">
                                    <div class="text">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718715687/assembly/10001/task_management.svg" alt="Task Management Icon" width="30" height="30" />
                                        <span>Task Management</span>
                                    </div>
                                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                </div>
                                <div class="content">
                                    <div class="text">Checklists, calendars, case statuses, deadlines, and more are available at your fingertips. Neos keeps you organized and on task.</div>
                                    <a href="https://assemblysoftware.com/increased-efficiency" class="cta">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                        </svg>
                                    </a>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-mobile.png">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-tablet.png" alt="Task Management" width="688" height="404">
                                    </picture>
                                </div>
                            </div>
                            <div class="child" data-index="3">
                                <div class="bar">
                                    <div class="line"></div>
                                </div>
                                <div class="title">
                                    <div class="text">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718715680/assembly/10001/client_intake.svg" alt="Client Intake Icon" width="30" height="30" />
                                        <span>Client Intake</span>
                                    </div>
                                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                </div>
                                <div class="content">
                                    <div class="text">Automatically capture leads 24/7 from forms and chatbots. Leverage dynamic forms to capture required info in less time.</div>
                                    <a href="https://assemblysoftware.com/neos/intake" class="cta">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                        </svg>
                                    </a>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-mobile.png">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-tablet.png" alt="Client Intake" width="688" height="404">
                                    </picture>
                                </div>
                            </div>
                            <div class="child" data-index="4">
                                <div class="bar">
                                    <div class="line"></div>
                                </div>
                                <div class="title">
                                    <div class="text">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718715659/assembly/10001/document_management.svg" alt="Document Management Icon" width="30" height="30" />
                                        <span>Document Management</span>
                                    </div>
                                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                </div>
                                <div class="content">
                                    <div class="text">Mass-generate and file documents (even for multiple cases), edit PDFs. Enjoy case-specific document tagging, Bates stamping, and bulk-import files.</div>
                                    <a href="https://assemblysoftware.com/document-management" class="cta">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                        </svg>
                                    </a>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-mobile.png">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-tablet.png" alt="Document Management" width="688" height="404">
                                    </picture>
                                </div>
                            </div>
                            <div class="child" data-index="5">
                                <div class="bar">
                                    <div class="line"></div>
                                </div>
                                <div class="title">
                                    <div class="text">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1718715670/assembly/10001/ai.svg" alt="Integrated Artificial Intelligence Icon" width="30" height="30" />
                                        <span>Integrated Artificial Intelligence</span>
                                    </div>
                                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#2270DD"></path>
                                    </svg>
                                </div>
                                <div class="content">
                                    <div class="text">Embedded AI: Elevate efficiency with document generation, intelligent extraction, and advanced summarization capabilities.</div>
                                    <a href="https://assemblysoftware.com/neos-ai" class="cta">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                        </svg>
                                    </a>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-mobile.png">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-tablet.png" alt="Integrated Artificial Intelligence" width="688" height="404">
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">
                            <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">
                            <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__task_management.webp" alt="Task Management" width="632" height="464">
                            <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__case_intake.webp" alt="Client Intake" width="632" height="464">
                            <img class="hero" data-index="4"  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__document_management.webp" alt="Document Management" width="632" height="464">
                            <img class="hero" data-index="5"  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/10001/desktop_-_accordion_images__integrated_artificial_intelligence.webp" alt="Integrated Artificial Intelligence" width="632" height="464">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `);

    var section2AccordianWrapper = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper > .text");
    if(!section2AccordianWrapper.classList.contains('spz-click-registered')){
        section2AccordianWrapper.classList.add('spz-click-registered');
        section2AccordianWrapper.addEventListener("click", function (e) {
            if (
            e.target.closest(".title") &&
            !e.target.closest(".child").classList.contains("active") &&
            !document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .animate")
                ) {
                // remove active
                const prevElement = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .text .child.active");
                const prevActiveHeight = prevElement.offsetHeight;
                prevElement.classList.remove("active");
                const afterActiveHeight = prevElement.offsetHeight;
                prevElement.classList.add("active");
                prevElement.style.height = "" + prevActiveHeight + "px";
                prevElement.classList.remove("active");
                setTimeout(function () {
                    prevElement.style.height = "" + afterActiveHeight + "px";
                    prevElement.classList.add("animate");
                }, 1);
                setTimeout(function () {
                    prevElement.removeAttribute("style");
                    prevElement.classList.remove("animate");
                }, 301);
                //remove border
                var accordionChild = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .child.no-border");
                if (accordionChild) {
                    accordionChild.classList.remove("no-border");
                }
                if (e.target.closest(".child").getAttribute("data-index") != "1") {
                    document
                    .querySelector(
                        '.spz_t10001 .section2_10001 .accordion-wrapper .child[data-index="' +
                        (parseInt(e.target.closest(".child").getAttribute("data-index")) - 1) +
                        '"]'
                    )
                    .classList.add("no-border");
                }
                //adding active
                const nextElement = e.target.closest(".child");
                const prevTargetHeight = nextElement.offsetHeight;
                nextElement.classList.add("active");
                const nextTargetHeight = nextElement.offsetHeight;
                nextElement.classList.remove("active");
                nextElement.style.height = "" + prevTargetHeight + "px";
                nextElement.classList.add("active");
                setTimeout(function () {
                    nextElement.style.height = "" + nextTargetHeight + "px";
                    nextElement.classList.add("animate");
                }, 1);
                setTimeout(function () {
                    nextElement.removeAttribute("style");
                    nextElement.classList.remove("animate");
                }, 301);
                //image animation
                document
                    .querySelector(
                    ".spz_t10001 .section2_10001 .accordion-wrapper .image .hero.active"
                    )
                    .classList.remove("active");
                document
                    .querySelector(
                    '.spz_t10001 .section2_10001 .accordion-wrapper .image .hero[data-index="' +
                    e.target.closest(".child").getAttribute("data-index") +
                    '"]'
                    )
                    .classList.add("active");
                //change scroll position
                if (
                    window.matchMedia("(max-width: 1079.98px)").matches &&
                    document.querySelector(
                    ".spz_t10001 .section2_10001 .accordion-wrapper.stop"
                    )
                ) {
                    setTimeout(function () {
                    var scroll = new SmoothScroll();
                    scroll.animateScroll(
                        document
                        .querySelector(
                            ".spz_t10001 .section2_10001 .accordion-wrapper .child.active"
                        )
                        .getBoundingClientRect().y + scrollY,
                        null,
                        {
                        easing: "easeOutQuad",
                        }
                    );
                    }, 302);
                }
            }
        });
    }
  }

  //autoplay
  if(!autoAccordionInterval) {        
    let autoAccordionTimer = 0;
    const autoAccordionTimeout = 5000;
    autoAccordionInterval = setInterval(function () {
        var accordionWrapperEle = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper");
        if(!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')){
            return;
        }
        document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
        document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .child.active .bar .line").style.width = "" + (autoAccordionTimer / autoAccordionTimeout) * 100 + "%";
        if (autoAccordionTimer > autoAccordionTimeout) {
            document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
            let curIndex = parseInt(
                document
                    .querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .child.active")
                    .getAttribute("data-index")
            );
            curIndex < 5 ? curIndex++ : curIndex = 1;
            document
            .querySelector(
                '.spz_t10001 .section2_10001 .accordion-wrapper .child[data-index="' +
                curIndex +
                '"] .title'
            )
            .click();
            autoAccordionTimer = 0;
        }
        autoAccordionTimer += 200;
    }, 200);
      
  }
  function stopSection2AccordionAutoPlay(){
      var accordionWrapperEle = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper");
      accordionWrapperEle.classList.add("stop");
  }
  function startSection2AccordionAutoPlay(){
      var accordionWrapperEle = document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper");
      accordionWrapperEle.classList.remove("stop");
  }
  document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .image").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
  document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper > .text").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
  document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper .image").addEventListener("mouseleave", startSection2AccordionAutoPlay);
  document.querySelector(".spz_t10001 .section2_10001 .accordion-wrapper > .text").addEventListener("mouseleave", startSection2AccordionAutoPlay);
  const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(".spz_t10001 .section2_10001 .accordion-wrapper .child .title > .text span");
      for (let i = 0; i < spans.length; i++) {
          if (spans[i].classList.contains("two-line")) {
              spans[i].classList.remove("two-line");
          }
          if (spans[i].offsetHeight > 30) {
              spans[i].classList.add("two-line");
          }
      }
  };
  checkFeatureTitleHeight();

  // testimonial slider
	if (!document.querySelector('.spz_t10001 .section4_10001')) {
		document.querySelector(".section2_10001").insertAdjacentHTML(
			"afterend",
			`
        <div class="section4_10001">
          <div class="section4_inner">
            <div class="title">Why our customers love us</div>
            <div class="slider1-wrapper">
              <section class="splide splide1">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <div class="child child1">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/desktop_-_testimonials__scott_marshall_3.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__derrick_l_williams.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__derrick_l_williams.webp" alt="Derrick L. Williams" width="196" height="196" loading="lazy"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“Neos is just easy to understand, even if you’re not tech savvy. If you know how to use the internet and access websites, I think you can use Neos.”</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Derrick L. Williams</div><div class="border"></div>
                              <div class="title">Williams & Roche</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child2">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/desktop_-_testimonials__scott_marshall_1.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__scott_marshall.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__scott_marshall.webp" alt="Eden Rafferty" width="196" height="196" loading="lazy"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“Neos can run circles around our previous practice management platform because it took five times longer to do anything with the old platform. With Neos, the way it’s set up, the actual interface, is fantastic.”</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Scott Marshall</div><div class="border"></div>
                              <div class="title">Scott Marshall Injury Attorneys</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child3">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/desktop_-_testimonials__scott_marshall.webp">
                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__jessica_l_voto.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__jessica_l_voto.webp" alt="Neil Menashe" width="196" height="196" loading="lazy"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">Being able to conduct intake directly in the platform and have it save to a case has cut file set-up time in half.</div>
                          <div class="user-info">
                            <div class="info">
                              <div class="name">Jessica L. Voto</div><div class="border"></div>
                              <div class="title">Voto & Cavalli Attorneys at Law, PC</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
	      `
		);
		const loadSplideSliderSPZ = function () {
			var splide = new Splide(".spz_t10001 .section4_10001 .splide1", {
				type: "loop",
				arrows: true,
				autoHeight: true,
				pagination: true,
				autoplay: false,
				speed: 500,
				interval: 5000,
				focus: "center",
				pauseOnHover: true,
				autoWidth: true,
				breakpoints: {
					767: {
						perPage: 1,
						gap: "0px",
						focus: "center",
						padding: {
							right: "50px",
							left: "50px",
						},
					},
					1079.98: {
						perPage: 1,
						focus: "center",
						autoWidth: true,
						padding: {
							right: "50px",
							left: "50px",
						},
					},
				},
			});
			setTimeout(function () {
				splide.mount();
				splide.on("move", function (e) {
					if (
						document.querySelector(
							".spz_t10001 .section4_10001 .slider1-wrapper"
						)
					) {
						document
							.querySelector(".spz_t10001 .section4_10001 .slider1-wrapper")
							.classList.remove("active1", "active2", "active3");
						document
							.querySelector(".spz_t10001 .section4_10001 .slider1-wrapper")
							.classList.add("active" + (parseInt(splide.index) + 1));
					}
				});
				window.addEventListener("resize", function () {
					splide.refresh();
				});
				var sliderWrapperSPZ = document.querySelector(".spz_t10001 .section4_10001 .slider1-wrapper");
				if (sliderWrapperSPZ) {
					sliderWrapperSPZ.classList.add("active1");
				}
			}, 200);
		}
		loadJS_SPZ(splideJSURL, loadSplideSliderSPZ, document.body);
	}

  // ingrations section
  if (!document.querySelector('.spz_t10001 .section3_10001')) {
		document.querySelector(".section4_10001").insertAdjacentHTML(
			"afterend",
			`
	      <div class="section3_10001">
	        <div class="auto_container">
	          <div class="section3_inner">
	            <div class="title">Integrations</div>
	            <picture class="logo">
	              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1718714720/assembly/10001/mobile__logos.svg">
	              <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1718714708/assembly/10001/tablet__logos.svg">
	              <img src="//res.cloudinary.com/spiralyze/image/upload/v1718714693/assembly/10001/desktop__logos.svg" alt="Company Logo" width="1240" height="171" loading="lazy">
	            </picture>
              <div class="cta_outer">
                <a class="custom_btn" href="https://assemblysoftware.com/get-a-demo">
                  Get a Demo
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3mszwb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M17.028 10.0343C16.9482 9.975 16.8646 9.92144 16.778 9.87392L7.47833 3.92237L7.44411 3.89749L7.38357 3.86155C7.21199 3.7682 7.01733 3.73216 6.8257 3.75828C6.63407 3.78439 6.45462 3.87141 6.31141 4.00766C6.1682 4.14392 6.06809 4.3229 6.02448 4.5206C5.98088 4.71831 5.99588 4.92528 6.06746 5.11378V5.11378L8.10217 11.9997L6.06746 18.8828C5.9937 19.0772 5.98004 19.2911 6.02839 19.4942C6.07673 19.6972 6.18465 19.8792 6.33687 20.0143C6.48909 20.1494 6.67791 20.2308 6.87661 20.247C7.07531 20.2632 7.27384 20.2134 7.44411 20.1046V20.1046L7.80209 19.8862L9.08925 19.057L12.0505 17.1689L16.7885 14.1282C16.8699 14.0809 16.949 14.0292 17.0254 13.9734V13.9734C17.3262 13.7537 17.572 13.4608 17.7417 13.1198C17.9114 12.7788 18 12.3997 18 12.0149C18 11.6301 17.9114 11.251 17.7417 10.91C17.572 10.5689 17.3262 10.2761 17.0254 10.0564L17.028 10.0343Z"></path>
                  </svg>
                </a>
              </div>
	          </div>
	        </div>
	      </div>
	    `
		);
	}

}
