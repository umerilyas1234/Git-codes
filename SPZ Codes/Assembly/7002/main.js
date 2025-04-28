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
		beforLoadTestCode7002();
	};
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
	beforLoadTestCode7002();
}

function beforLoadTestCode7002() {
	console.log("5001::beforLoadTestCode7002");
	if (window.location.href.indexOf('/trialworks') == -1) {
		document.querySelector("body").classList.remove("spz_7002");
		return;
	}
	var loadTestInterval = setInterval(loadTestCode7002, 200);
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

function loadTestCode7002() {

	if (window.location.href.indexOf('/trialworks') == -1) {
		document.querySelector("body").classList.remove("spz_7002");
		return;
	}

    document.querySelector("body").classList.add("spz_7002");
    // hero section
    if (!document.querySelector('.spz_7002 .main_hero')) {
      document.querySelector("main").insertAdjacentHTML(
        "beforebegin",
        `
        <div class="main_hero">
          <div class="auto_container">
            <div class="hero_inner">
              <div class="hero_left">
                <div class="hero_logo">
                  <strong>Neos, the next generation of Trialworks</strong>
                </div>
                <div class="hero_detail">
                  <h1>Upgrade to Neos Case
                  Management Software</h1>
                  <div class="hero_list">
                    <ul>
                      <li>
                        <p>
                          <strong>Case & Trial Prep.</strong>  Centralized storage for witness statements, depositions, contacts, and more. Quickly retrieve evidence.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Cloud-based Platform.</strong>  Manage cases from any device. Get real-time case updates. Search text across docs. Collaborate on files in real time.  
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>AI & Automations.</strong>  Automatically extract data from documents and fill out intake forms. Auto-generate legal documents.
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
                  <div class="contact_us"><p>Current customer. Need <a href="https://assemblysoftware.com/customer-support">support</a>? </p></div>
                </div>
              </div>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcset="
				  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Hero_-_UI_image_360_2x_mobile.webp
                  "
                />
                <source
                  media="(max-width: 1023px)"
                  srcset="
				  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Hero_-_UI_image_768_2x_tablet.webp
                  "
                />
                <source
                  srcset="
                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Hero_-_UI_image_1440_2x_desktop.webp
                  "
                />
                <img
                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Hero_-_UI_image_1440_2x_desktop.webp"
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
    if (!document.querySelector('.spz_7002 .logo_section')) {
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
    if (!document.querySelector('.spz_7002 .section2_7002')) {
      document
        .querySelector(".spz_7002 .logo_section")
        .insertAdjacentHTML("afterend",
          `
          <section class="section2_7002" data-testid="component-wrapper__container">
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
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1709286904/assembly/3001/frame_13.svg" alt="Case Management Icon" width="30" height="30" loading="lazy"/>
                                            <span>Case Management</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Manage all case info in one cloud-based platform. Case overviews,
                                                client information, legal documents, calendars, billing, and more. Access all client
                                                communication, including emails, phone calls, and meeting records.
                                            </p>
                                            <p>Track deadlines for filings, court appearances, and other important dates.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Case_management_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Case_management_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Case_management_mob.webp"  alt="Case Management" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="2">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1709286888/assembly/3001/frame_10.svg" alt="Trial Preparation Icon" width="30" height="30" loading="lazy" />
                                            <span>Trial Preparation</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Auto-generate timelines, charts, graphs, slideshows, multimedia presentations, summaries, and other presentations of key evidence.</p>
                                            <p>Organize witness statements, depositions, and  evidence. Prepare for expert testimony in a fraction of the time.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Trial_Preparation_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Trial_Preparation_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Trial_Preparation_mob.webp" alt="Trial Preparation" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="3">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1709286886/assembly/3001/icons_2.svg" alt="Task Management Icon" width="30" height="30" loading="lazy"/>
                                            <span>Task Management</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Generate task lists including deadlines and descriptions for every case. Organize by project, category, priority, or deadline. Auto-assign tasks to team members.</p>
                                            <p>Track deadlines for filings, court appearances, and other important dates.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Task_Management_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Task_Management_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Task_Management_mob.webp" alt="Task Management" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="4">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286891/assembly/3001/frame_12.svg" alt="Document Management Icon" width="30" height="30" loading="lazy"/>
                                            <span>Document Management</span></div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Store all client documents in one place. Auto-populate new docs with case info. Edit, highlight, redact, and annotate documents directly in the dashboard. </p>
                                            <p>Merge multiple documents into one or remove unnecessary pages. Built-in Bates stamping.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Document_Management_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Document_Management_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Document_Management_mob.webp" alt="Document Management" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="5">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1709286889/assembly/3001/frame_11.svg" alt="AI Data Analysis Icon" width="30" height="30" loading="lazy"/>
                                            <span>AI Data Analysis</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                          <p>Extract key data from scans or images and add to case files. Contact details, expense records, and more. Search text across files. Bulk document analysis. </p>
                                          <p>Organize cases, assess risks, and speed up trial prep.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/AI_Data_Analysis_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/AI_Data_Analysis_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/AI_Data_Analysis_mob.webp"alt="AI Data Analysis" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="6">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/frame_14.svg" alt="Invoicing & Payments Icon" width="30" height="30" loading="lazy"/>
                                            <span>Invoicing & Payments</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                          <p>Track billable hours & expenses across clients. Auto-generate invoices with client info, services rendered, dates, payment terms, total amount due, and tax calculations. Accept online payments. </p>
                                          <p>Integrates with QuickBooks and LawPay.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Invoicing_Payments_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Invoicing_Payments_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Invoicing_Payments_mob.webp"alt="Invoicing & Payments" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                                <div class="child" data-index="7">
                                    <div class="bar">
                                        <div class="line"></div>
                                    </div>
                                    <div class="title">
                                        <div class="text">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/frame_15.svg" alt="Reporting Icon" width="30" height="30" loading="lazy" />
                                            <span>Reporting</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                          <p>Auto-generate real-time reports for case statuses, team productivity, case histories, finances, and more. Or create your own custom reports for any record type or data point.</p>
                                          <p>Export instantly. Set permissions for who can access reports.</p>
                                        </div>
                                        <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                                            <span>Get a Demo</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                                            </svg>
                                        </a>
                                        <picture>
											<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Reporting_mob.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Reporting_tab.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Reporting_mob.webp"alt="Reporting" width="688" height="404" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div class="image">
                                <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Case_management_desktop.webp" alt="Case Management" width="632" height="464" loading="lazy">

                                <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Case_management_desktop.webp" alt="Case Management" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Trial-Preparation_desktop.webp" alt="Trial Preparation" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Task_management_desktop.webp" alt="Task Management" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Document_Management_desktop.webp" alt="Document Management" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/AI_Data_Analysis_desktop.webp" alt="AI Data Analysis" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="6" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Invoicing_Payments_desktop.webp" alt="Invoicing & Payments" width="632" height="464" loading="lazy">
                                <img class="hero" data-index="7" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/Reporting_desktop.webp" width="632" height="464" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
        );

      var section2AccordianWrapper = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper > .text");
      if (!section2AccordianWrapper.classList.contains('spz-click-registered')) {
        section2AccordianWrapper.classList.add('spz-click-registered');
        section2AccordianWrapper.addEventListener("click", function (e) {
          if (
            e.target.closest(".title") &&
            !e.target.closest(".child").classList.contains("active") &&
            !document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .animate")
          ) {
            // remove active
            const prevElement = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .text .child.active");
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
            var accordionChild = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .child.no-border");
            if (accordionChild) {
              accordionChild.classList.remove("no-border");
            }
            if (e.target.closest(".child").getAttribute("data-index") != "1") {
              document
                .querySelector(
                  '.spz_7002 .section2_7002 .accordion-wrapper .child[data-index="' +
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
            document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .image .hero.active").classList.remove("active");
            document
              .querySelector(
                '.spz_7002 .section2_7002 .accordion-wrapper .image .hero[data-index="' +
                e.target.closest(".child").getAttribute("data-index") +
                '"]'
              )
              .classList.add("active");
            //change scroll position
            if (
              window.matchMedia("(max-width: 1079.98px)").matches &&
              document.querySelector(
                ".spz_7002 .section2_7002 .accordion-wrapper.stop"
              )
            ) {
              setTimeout(function () {
                var scroll = new SmoothScroll();
                scroll.animateScroll(
                  document
                    .querySelector(
                      ".spz_7002 .section2_7002 .accordion-wrapper .child.active"
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
    if (!autoAccordionInterval) {
      let autoAccordionTimer = 0;
      const autoAccordionTimeout = 5000;
      autoAccordionInterval = setInterval(function () {
        var accordionWrapperEle = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper");
        if (!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')) {
          return;
        }
        document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
        document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .child.active .bar .line").style.width = "" + (autoAccordionTimer / autoAccordionTimeout) * 100 + "%";
        if (autoAccordionTimer > autoAccordionTimeout) {
          document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
          let curIndex = parseInt(
            document
              .querySelector(".spz_7002 .section2_7002 .accordion-wrapper .child.active")
              .getAttribute("data-index")
          );
          curIndex < 7 ? curIndex++ : curIndex = 1;
          document
            .querySelector(
              '.spz_7002 .section2_7002 .accordion-wrapper .child[data-index="' +
              curIndex +
              '"] .title'
            )
            .click();
          autoAccordionTimer = 0;
        }
        autoAccordionTimer += 200;
      }, 200);

    }
    function stopSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper");
      accordionWrapperEle.classList.add("stop");
    }
    function startSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper");
      accordionWrapperEle.classList.remove("stop");
    }
    document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .image").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper > .text").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper .image").addEventListener("mouseleave", startSection2AccordionAutoPlay);
    document.querySelector(".spz_7002 .section2_7002 .accordion-wrapper > .text").addEventListener("mouseleave", startSection2AccordionAutoPlay);
    const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(".spz_7002 .section2_7002 .accordion-wrapper .child .title > .text span");
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

    // Add new section3 if page does not have
    if (!document.querySelector('.spz_7002 .section3_7002')) {
      document.querySelector(".spz_7002 .section2_7002").insertAdjacentHTML(
        "afterend",
        `
      <section class="section3_7002" data-testid="component-wrapper__container">
        <div class="auto_container">
          <div class="section3_inner">
            <div class="title">Integrations</div>
              <picture class="logo">
                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/desktop__logos_5.svg">
                <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/desktop__logos_4.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/desktop__logos_3.svg" alt="Company Logo" width="1240" height="171" loading="lazy">
              </picture>
              <a href="https://assemblysoftware.com/get-a-demo" class="cta">
                <span>Get a Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"></path>
                </svg>
              </a>
          </div>
        </div>
      </section>
	    `
      );
    }

    // Add new section4 if page does not have
    if (!document.querySelector('.spz_7002 .section4_7002')) {
      document.querySelector(".spz_7002 .section3_7002").insertAdjacentHTML(
        "afterend",
        `
	        <div class="section4_7002">
	          <div class="section4_inner">
	            <div class="slider1-wrapper">
	              <section class="splide splide1">
	                <div class="splide__track">
	                  <ul class="splide__list">
	                    <li class="splide__slide">
	                      <div class="child child1">
	                        <div class="text">
	                          <div class="quote">“If Needles was a 1.0 system, this is probably a 5.0. It’s streamlined, I think it looks much slicker, tabbing through things is e﻿asier, and I really like the layout. Neos is just way more user-friendly.”</div>
	                          <div class="user-info">
	                            <div class="info">
	                              <div class="name">Derrick L. Williams</div>
	                              <div class="title">Attorney, Williams & Roche</div>
	                            </div>
                              <div class="user_logo"><img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/Williams-Logo_1.svg" alt="Williams & Roche" width="128" height="41" loading="lazy"></div>
	                          </div>
	                        </div>
	                      </div>
	                    </li>
	                    <li class="splide__slide">
	                      <div class="child child2">
	                        <div class="text">
	                          <div class="quote">“Huge upgrade from Needles. Our firm loves the efficiency and the user-friendly capabilities we are now able to do with Neos.”</div>
	                          <div class="user-info">
	                            <div class="info">
	                              <div class="name">Eden Rafferty</div>
	                              <div class="title">Attorney, Law</div>
	                            </div>
                              <div class="user_logo"><img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/eddenrafferty_-_logo.webp" alt="Eden Rafferty" width="128" height="41" loading="lazy"></div>
	                          </div>
	                        </div>
	                      </div>
	                    </li>
	                    <li class="splide__slide">
	                      <div class="child child3">
	                        <div class="text">
	                          <div class="quote">“Since switching from Needles 4 over 3 years ago, Neos has helped our business run smoother than ever before!”</div>
	                          <div class="user-info">
	                            <div class="info">
	                              <div class="name">Neil Menashe</div>
	                              <div class="title">Attorney, Law PC</div>
	                            </div>
                              <div class="user_logo"><img src="//res.cloudinary.com/spiralyze/image/upload/assembly/7002/law_pc_logo.webp" alt="Neil Menashe" width="128" height="41" loading="lazy"></div>
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
        var splide = new Splide(".spz_7002 .section4_7002 .splide1", {
          type: "loop",
          arrows: true,
          autoHeight: true,
          pagination: true,
          autoplay: false,
          speed: 500,
          interval: 5000,
          perPage: 1,
          pauseOnHover: true,   
          padding: {
            right: "0",
            left: "0",
          },
          breakpoints: {
            767: {
              perPage: 1,
              gap: "20px",
			  padding: {
				right: "20px",
				left: "20px",
			  },
            },
            1023.98: {
              perPage: 1,
			  gap: "20px",
			  padding: {
				right: "20px",
				left: "20px",
			  },
            },
            1199.98: {
              perPage: 1,
			  gap: "20px",
			  padding: {
				right: "20px",
				left: "20px",
			  },
            },
          },
        });

        setTimeout(function () {
          splide.mount();
          splide.on("move", function (e) {
            if (
              document.querySelector(
                ".spz_7002 .section4_7002 .slider1-wrapper"
              )
            ) {
              document
                .querySelector(".spz_7002 .section4_7002 .slider1-wrapper")
                .classList.remove("active1", "active2", "active3");
              document
                .querySelector(".spz_7002 .section4_7002 .slider1-wrapper")
                .classList.add("active" + (parseInt(splide.index) + 1));
            }
          });

          window.addEventListener("resize", function () {
            splide.refresh();
          });
          var sliderWrapperSPZ = document.querySelector(".spz_7002 .section4_7002 .slider1-wrapper");
          if (sliderWrapperSPZ) {
            sliderWrapperSPZ.classList.add("active1");
          }
        }, 200);
      }

      loadJS_SPZ(splideJSURL, loadSplideSliderSPZ, document.body);
    }

	// Add new sectionSlider if page does not have
	if (!document.querySelector('.spz_7002 .sectionSlider_7002')) {
		document.querySelector(".section4_7002").insertAdjacentHTML(
			"afterend",
			`
	        <div class="sectionSlider_7002">
	          <div class="auto_container">
	            <div class="section2_inner">
	              <div class="wrapper">
	                <div class="title">Industries</div>
	                <div class="accordion-wrapper">
	                  <div class="timer-slider-nav">
	                    <div class="splide slider-timer text_outer">
	                      <div class="splide__track text">
	                        <div class="splide__list">
	                          <div class="splide__slide child tab_active" data-index="1">
	                            <div class="bar"><div class="line"></div></div>
	                            <div class="title">
	                              <div class="text"><span>Personal Injury</span></div>
	                            </div>
	                          </div>
	                          <div class="splide__slide child" data-index="2">
	                            <div class="bar"><div class="line"></div></div>
	                            <div class="title">
	                              <div class="text"><span>Mass Tort</span></div>
	                            </div>
	                          </div>
	                          <div class="splide__slide child" data-index="3">
	                            <div class="bar"><div class="line"></div></div>
	                            <div class="title">
	                              <div class="text"><span>Family Law</span></div>
	                            </div>
	                          </div>
	                          <div class="splide__slide child" data-index="4">
	                            <div class="bar"><div class="line"></div></div>
	                            <div class="title">
	                              <div class="text"><span>Insurance Defense</span></div>
	                            </div>
	                          </div>
	                          <div class="splide__slide child" data-index="5">
	                            <div class="bar"><div class="line"></div></div>
	                            <div class="title">
	                              <div class="text"><span>Public Sector</span></div>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                  <div class="splide slider-with-timer-content">
	                    <div class="splide__track">
	                      <div class="splide__list accordion_dataMain">
	                        <div class="splide__slide">
	                          <div class="accordion_detail active" data-index="1">
	                            <div class="content">
	                              <div class="text">
	                                <h3>Personal Injury</h3>
	                                <p>
	                                  Generate client intake forms, retainer agreements, demand
	                                  letters, release forms, and more. Auto-populate case files
	                                  with details from incident reports and medical records.
	                                </p>
	                                <p>
	                                  Call, email, and text clients in-app. Get reminders for key
	                                  dates & deadlines, including statutes of limitations,
	                                  discovery deadlines, filing deadlines, and court dates.
	                                </p>
	                              </div>
	                              <a
	                                href="https://assemblysoftware.com/get-a-demo"
	                                class="custom_btn"
	                              >
	                                Get a Demo
	                                <svg
	                                  xmlns="http://www.w3.org/2000/svg"
	                                  width="16"
	                                  height="16"
	                                  viewBox="0 0 16 16"
	                                  fill="none"
	                                >
	                                  <path
	                                    d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z"
	                                    fill="#1A1A1A"
	                                  />
	                                </svg>
	                              </a>
	                            </div>
	                            <figure>
	                              <picture>
	                                <source
	                                  media="(max-width:767px)"
	                                  srcset="
									  	//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/mobile_-_industries_img__personal_injury_2.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_-_industries_img__personal_injury_2.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/desktop_-_industries_img__personal_injury_2.webp"
	                                  alt="Personal Injury"
									  width="600"
									  height="424"
									  loading="lazy"
	                                />
	                              </picture>
	                            </figure>
	                          </div>
	                        </div>
	                        <div class="splide__slide">
	                          <div class="accordion_detail" data-index="2">
	                            <div class="content">
	                              <div class="text">
	                                <h3>Mass Tort</h3>
	                                <p>
	                                  Easily manage thousands of plaintiffs with one platform for
	                                  all legal documents, contacts, and communications.
	                                </p>
	                                <p>
	                                  Onboard potential plaintiffs with custom intake forms.
	                                  Transfer data to case files. Organize files by plaintiffs,
	                                  defendants, product types, stage of litigation, and more.
	                                </p>
	                                <p>
	                                  Get alerts for key deadlines, including filings for master
	                                  complaints and individual discovery deadlines.
	                                </p>
	                              </div>
	                              <a
	                                href="https://assemblysoftware.com/get-a-demo"
	                                class="custom_btn"
	                              >
	                                Get a Demo
	                                <svg
	                                  xmlns="http://www.w3.org/2000/svg"
	                                  width="16"
	                                  height="16"
	                                  viewBox="0 0 16 16"
	                                  fill="none"
	                                >
	                                  <path
	                                    d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z"
	                                    fill="#1A1A1A"
	                                  />
	                                </svg>
	                              </a>
	                            </div>
	                            <figure>
	                              <picture>
	                                <source
	                                  media="(max-width:767px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/mobile_-_industries_img__family_law_2.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_-_industries_img__mass_tort_2.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/desktop_-_industries_img__mass_tort_2.webp"
	                                  alt="Mass Tort"
									  width="600"
									  height="424"
									  loading="lazy"
	                                />
	                              </picture>
	                            </figure>
	                          </div>
	                        </div>
	                        <div class="splide__slide">
	                          <div class="accordion_detail" data-index="3">
	                            <div class="content">
	                              <div class="text">
	                                <h3>Family Law</h3>
	                                <p>
	                                  Auto-generate divorce petitions, financial disclosure forms,
	                                  marriage settlement agreements, custody agreements, and
	                                  more. Edit and annotate within Neos. Send for eSignature.
	                                </p>
	                                <p>
	                                  Track assets across cases. Organize finances by category to
	                                  streamline appraisements and affidavits. 
	                                </p>
	                              </div>
	                              <a
	                                href="https://assemblysoftware.com/get-a-demo"
	                                class="custom_btn"
	                              >
	                                Get a Demo
	                                <svg
	                                  xmlns="http://www.w3.org/2000/svg"
	                                  width="16"
	                                  height="16"
	                                  viewBox="0 0 16 16"
	                                  fill="none"
	                                >
	                                  <path
	                                    d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z"
	                                    fill="#1A1A1A"
	                                  />
	                                </svg>
	                              </a>
	                            </div>
	                            <figure>
	                              <picture>
	                                <source
	                                  media="(max-width:767px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/mobile_-_industries_img__public_sector_2.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_-_industries_img__family_law_2.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/desktop_-_industries_img__family_law_2.webp"
	                                  alt="Family Law"
									  width="600"
									  height="424"
									  loading="lazy"
	                                  />
	                              </picture>
	                            </figure>
	                          </div>
	                        </div>
	                        <div class="splide__slide">
	                          <div class="accordion_detail" data-index="4">
	                            <div class="content">
	                              <div class="text">
	                                <h3>Insurance Defense</h3>
	                                <p>
	                                  Automatically capture details from incident reports,
	                                  insurance policies, and witness statements. Auto-populate
	                                  into the client case. Create and assign tasks for document
	                                  collection and witness coordination.
	                                </p>
	                                <p>
	                                  Streamline trial prep by auto-generating discovery requests,
	                                  interrogatories, trial briefs, and more.
	                                </p>
	                              </div>
	                              <a
	                                href="https://assemblysoftware.com/get-a-demo"
	                                class="custom_btn"
	                              >
	                                Get a Demo
	                                <svg
	                                  xmlns="http://www.w3.org/2000/svg"
	                                  width="16"
	                                  height="16"
	                                  viewBox="0 0 16 16"
	                                  fill="none"
	                                >
	                                  <path
	                                    d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z"
	                                    fill="#1A1A1A"
	                                  />
	                                </svg>
	                              </a>
	                            </div>
	                            <figure>
	                              <picture>
	                                <source
	                                  media="(max-width:767px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/mobile_-_industries_img__insurance_defense_2.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_-_industries_img__insurance_defense_2.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/desktop_-_industries_img__insurance_defense_2.webp"
	                                  alt="Insurance Defense"
									  width="600"
									  height="424"
									  loading="lazy"
	                                  />
	                              </picture>
	                            </figure>
	                          </div>
	                        </div>
	                        <div class="splide__slide">
	                          <div class="accordion_detail" data-index="5">
	                            <div class="content">
	                              <div class="text">
	                                <h3>Public Senator</h3>
	                                <p>
	                                  Prepare government contracts, regulatory documents,
	                                  administrative orders, and court filings in minutes.
	                                  Auto-populate with details from client intake forms.
	                                </p>
	                                <p>
	                                  Securely communicate with government officials via text,
	                                  email, or phone call. Enterprise-grade encryption. Track and
	                                  add notes for all calls and messages.
	                                </p>
	                                <p>
	                                  Get in-depth reports on time, expenses, and productivity.
	                                </p>
	                              </div>
	                              <a
	                                href="https://assemblysoftware.com/get-a-demo"
	                                class="custom_btn"
	                              >
	                                Get a Demo
	                                <svg
	                                  xmlns="http://www.w3.org/2000/svg"
	                                  width="16"
	                                  height="16"
	                                  viewBox="0 0 16 16"
	                                  fill="none"
	                                >
	                                  <path
	                                    d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z"
	                                    fill="#1A1A1A"
	                                  />
	                                </svg>
	                              </a>
	                            </div>
	                            <figure>
	                              <picture>
	                                <source
	                                  media="(max-width:767px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/mobile_-_industries_img__public_sector_2.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/tablet_-_industries_img__public_sector_2.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7002/desktop_-_industries_img__public_sector_2.webp"
	                                  alt="Public Sector"
									  width="600"
									  height="424"
									  loading="lazy"
	                                  />
	                              </picture>
	                            </figure>
	                          </div>
	                        </div>
	                      </div>
	                      <span class="splide__sr">…</span>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	    `
		);

		document.querySelector(".spz_7002 .sectionSlider_7002 .accordion-wrapper .text_outer > .splide__track")
			.addEventListener("click", function (e) {
				if (
					e.target.closest(".title") &&
					!e.target.closest(".child").classList.contains("tab_active") &&
					!document.querySelector(
						".spz_7002 .sectionSlider_7002 .accordion-wrapper .animate"
					)
				) {
					// remove active
					const prevElement = document.querySelector(
						".spz_7002 .sectionSlider_7002 .accordion-wrapper .text .child.tab_active"
					);
					const prevActiveHeight = prevElement.offsetHeight;
					prevElement.classList.remove("tab_active");
					const afterActiveHeight = prevElement.offsetHeight;
					prevElement.classList.add("tab_active");
					prevElement.classList.remove("tab_active");
					//remove border
					if (
						document.querySelector(".spz_7002 .sectionSlider_7002 .accordion-wrapper .child.no-border")
					) {
						document.querySelector(".spz_7002 .sectionSlider_7002 .accordion-wrapper .child.no-border").classList.remove("no-border");
					}
					if (e.target.closest(".child").getAttribute("data-index") != "1") {
						document.querySelector(
								'.spz_7002 .sectionSlider_7002 .accordion-wrapper .child[data-index="' +
								(parseInt(
									e.target.closest(".child").getAttribute("data-index")
								) -
									1) +
								'"]'
							)
							.classList.add("no-border");
					}

					//adding active
					const nextElement = e.target.closest(".child");
					nextElement.classList.add("tab_active");
					nextElement.classList.remove("tab_active");
					nextElement.classList.add("tab_active");
				}
			});

		// Initialize slider
		var clientLogoSlider = setInterval(() => {
			if (window.Splide) {
				clearInterval(clientLogoSlider);

				var splideTop = new Splide(".slider-timer", {
					loop: true,
					isNavigation: true,
					autoplay:true,
					speed: 500,
					interval: 5000,
					pagination: false,
					perPage: 5,
					arrows: false,
					pauseOnHover: true,
					pauseOnFocus: true,
					breakpoints: {
						767: {
							perPage: 3,
							gap: "0",
							focus: "center",
							padding: {
								right: "10px",
								left: "10px",
							},
						},
						1023: {
							perPage: 3,
							gap: "0",
							focus: "center",
							padding: {
								right: "10px",
								left: "10px",
							},
						},
					},
				});

				var splideBottom = new Splide(".slider-with-timer-content", {
					type: "loop",
					perPage: 1,
					autoplay:true,
					speed: 500,
					interval: 5000,
					arrows: false,
					pagination: false,
					autoHeight: true,
					pauseOnHover: true,
					pauseOnFocus: true,
					gap: "55px",
					focus: "center",
				});

				// Pause auto slide on click
				var splideTopSLider = document.querySelector(".slider-timer");

				function pauseSliderTimer(){
					var Autoplay1 = splideTop.Components.Autoplay;
					var Autoplay2 = splideBottom.Components.Autoplay;
					Autoplay1.pause();
					Autoplay2.pause();
					document.querySelector(".timer-slider-nav").classList.remove("auto-slide-active");
				}

				function playSliderTimer(){
					var Autoplay1 = splideTop.Components.Autoplay;
					var Autoplay2 = splideBottom.Components.Autoplay;
					Autoplay1.play();
					Autoplay2.play();
					document.querySelector(".timer-slider-nav").classList.add("auto-slide-active");
				}
				
				splideTopSLider.addEventListener("click", function () {
					pauseSliderTimer();
				});


				setTimeout(function () {
					splideTop.mount();
					splideBottom.mount();
					splideBottom.sync(splideTop);
					if (document.querySelector(".timer-slider-nav")) {
						document.querySelector(".timer-slider-nav").classList.add("auto-slide-active");
					}
				}, 500);
								
				document.querySelector(".spz_7002 .slider-timer").addEventListener("mouseenter", pauseSliderTimer);
				document.querySelector(".spz_7002 .slider-timer").addEventListener("mouseleave", playSliderTimer);
				document.querySelector(".spz_7002 .slider-with-timer-content").addEventListener("mouseenter", pauseSliderTimer);
				document.querySelector(".spz_7002 .slider-with-timer-content").addEventListener("mouseleave", playSliderTimer);

				window.dispatchEvent(new Event("resize"));
			}
		});

	}

  	// Add new faq if page does not have
	if (!document.querySelector('.spz_7002 .faq_section')) {
		document.querySelector(".spz_7002 .sectionSlider_7002").insertAdjacentHTML(
			"afterend",
			`
	        <div class="faq_section">
	          <div class="auto_container">
	            <div class="faq_inner">
	              <div class="faq_title">
	                <h2>Frequently Asked Questions</h2>
	              </div>
	              <div class="faq_accordionWrapper">
	                <div class="faq_accordionItem open">
	                  <h2 class="faq_accordionItemHeading">
					  	What is the difference between Assembly Trialworks and Assembly Neos?
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 15H24V18H17.3333H16.5H15.5H14.6667H8V15H14.6667H15.5L16.5 15L17.3333 15Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                  </h2>
	                  <div class="faq_accordionItemContent">
	                    <p>
							Assembly Trialworks is our older product and is not available to new customers. It provides an on-prem platform for managing cases, trial prep, legal documents, evidence, witnesses, and more. 
	                    </p>
	                    <p>
							Assembly Neos is our new upgraded software that combines trial prep & case management features with next-gen cloud functionality, AI capabilities, and task and document automations. Neos is available to new customers.
	                    </p>
	                  </div>
	                </div>
	
	                <div class="faq_accordionItem close">
	                  <h2 class="faq_accordionItemHeading">
					  	Why should I manage my legal cases on the cloud?
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 15H24V18H17.3333H16.5H15.5H14.6667H8V15H14.6667H15.5L16.5 15L17.3333 15Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                  </h2>
	                  <div class="faq_accordionItemContent">
	                    <p>
							By transitioning case management from local file storage from the cloud, you can:
	                    </p>
	                    <ul>
	                      <li>
	                        <p>
								Access trial documents, evidence, and client & witness communications from anywhere.
	                        </p>
	                      </li>
	                      <li>
	                        <p>Search all documents, including text, within PDF and Word.</p>
	                      </li>
	                      <li>
	                        <p>Collaborate on legal documents in real time & sync changes.</p>
	                      </li>
	                      <li>
	                        <p>
								Get automated workflows for creating documents, capturing intakes, and more.
	                        </p>
	                      </li>
	                      <li>
	                        <p>
								Automatically update software to latest versions.
	                        </p>
	                      </li>
	                      <li>
	                        <p>
								Keep all files backed up in a secure repository.
	                        </p>
	                      </li>
	                      <li>
	                        <p>
								Eliminate server, storage, and other hardware costs.
	                        </p>
	                      </li>
	                    </ul>
	                  </div>
	                </div>
	
	                <div class="faq_accordionItem close">
	                  <h2 class="faq_accordionItemHeading">
					  	How does Assembly Neos help firms increase productivity?
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                    <svg
	                      xmlns="http://www.w3.org/2000/svg"
	                      width="32"
	                      height="32"
	                      viewBox="0 0 32 32"
	                      fill="none"
	                    >
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M17.3333 15H24V18H17.3333H16.5H15.5H14.6667H8V15H14.6667H15.5L16.5 15L17.3333 15Z"
	                        fill="#25C9EF"
	                      />
	                    </svg>
	                  </h2>
	                  <div class="faq_accordionItemContent">
	                    <p>
							Assembly Neos boosts productivity in many ways. For example, with Neos, you can:
	                    </p>
	                    <ul>
	                      <li>
	                        <p>
								Access case files, documents, and data from anywhere, ensuring critical information is always at your fingertips. 
	                        </p>
	                      </li>
	                      <li>
	                        <p>
								Consolidate communication into one platform, streamlining communication between legal teams, clients, and court officials. 
	                        </p>
	                      </li>
	                      <li>
	                        <p>
								Automate client intakes, document generation, invoicing and more, reducing manual admin.
	                        </p>
	                      </li>
	                      <li>
	                        <p>Search text across documents, speeding up research. </p>
	                      </li>
	                    </ul>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      `
		);

		var accItem = document.getElementsByClassName("faq_accordionItem");
		var accHD = document.getElementsByClassName("faq_accordionItemHeading");
		
		for (var i = 0; i < accHD.length; i++) {
			accHD[i].addEventListener("click", toggleItem, false);
		}
		
		function toggleItem() {
			var itemClass = this.parentNode.className;
		
			if (itemClass.indexOf("open") !== -1) {
				return;
			}
		
			for (var i = 0; i < accItem.length; i++) {
				accItem[i].className = "faq_accordionItem close";
			}
			this.parentNode.className = "faq_accordionItem open";
		}
	}

	if (!document.querySelector('.spz_7002 .main_wrap')) {
		document.querySelector('main').insertAdjacentHTML('beforebegin', '<div class="main_wrap"></div>');
		var mainHero = document.querySelector('main');
		document.querySelector('.main_wrap').insertAdjacentElement('afterbegin', mainHero);
	}
	if (!document.querySelector('.spz_7002 .footer_wrap')) {
		document.querySelector('.main_wrap').insertAdjacentHTML('afterend', '<div class="footer_wrap"></div>');
		var mainFooter = document.querySelector('footer');
		document.querySelector('.footer_wrap').insertAdjacentElement('afterbegin', mainFooter);
	}
}

