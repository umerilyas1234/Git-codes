// Wait for element
function waitForElement(cssSelector, callback) {
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
	}, 5000);
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
		  console.log("7001::runObserverOnMain");
		  beforLoadTestCode7001();
		};
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
	beforLoadTestCode7001();
}
  
function beforLoadTestCode7001() {
	console.log("7001::beforLoadTestCode7001");
	if (window.location.href.indexOf('/needles') == -1) {
		document.querySelector("body").classList.remove("spz_7001");
		return;
	}
	var loadTestInterval = setInterval(loadTest7001, 200);
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


loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
loadCSS_SPZ(splideCSSURL);

window.addEventListener('click', function(){
	loadTest7001();
});

function loadTest7001() {
	if (window.location.href.indexOf('/needles') == -1) {
		document.querySelector("body").classList.remove("spz_7001");
		return;
	}

	document.querySelector("body").classList.add("spz_7001");

	// Add new main hero if page does not have
	if (!document.querySelector('.spz_7001 .main_hero')) {
		document.querySelector("main").insertAdjacentHTML(
			"beforebegin",
			`
	    <div class="main_hero">
	      <div class="auto_container">
	        <div class="hero_inner">
	          <div class="hero_left">
	            <div class="hero_detail">
	              <h3>Assembly NEOS (formerly needles)</h3>
	              <h1>Upgrade from Needles to Neos.</h1>
	              <p>Upgrade from Needles to Neos. Get all the features you love from Needles, plus updated cloud support and AI automation.</p>
	              <div class="hero_list">
	                <ul>
	                  <li>
	                    <p>
	                      <strong>Case Management: </strong> Create, assign, and track tasks. Get centralized storage for all case info. Set auto-reminders and track native time.
	                    </p>
	                  </li>
	                  <li>
	                    <p>
	                      <strong>Document Management: </strong> Manage cases from any device. Search text across documents. Collaborate on files in real time.
	                    </p>
	                  </li>
	                  <li>
	                    <p>
	                      <strong>AI Automation: </strong> Automatically extract data from documents and fill out intake forms. Auto-generate legal documents.
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
			  	<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/ui_image_1443_1.webp" alt="Hero image"/>
	          </picture>
	        </div>
	      </div>
	    </div>
	    `
		);
	}

	// Add new features section if page does not have
	if (!document.querySelector('.spz_7001 .features_section')) {
		document.querySelector(".main_hero").insertAdjacentHTML(
			"afterend",
			`
	      <div class="features_section">
	        <div class="auto_container">
	          <div class="feature_inner">
	            <div class="feature_top">
	              <h3>Features</h3>
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
	            <div class="grid_container">
	              <div class="item item1">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Cloud-Based Case Management</h3>
	                    <p>Manage all matters info in one cloud-based platform. Access case overviews, client information, legal documents, calendars, billing, and more. Capture all client communication, including emails, phone calls, and meeting records in one place.</p>
	                    <p>Track deadlines for filings, court appearances, and other important dates.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275778.webp" alt="Cloud-Based Case Management" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	              <div class="item item2">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Task Management</h3>
	                    <p>Checklists, calendars, case statuses, deadlines, and more are available at your fingertips. Neos keeps you organized and on task.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275869.webp" alt="Task Management" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	              <div class="item item3">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Client Intake</h3>
	                    <p>Automatically capture leads 24/7 from forms and chatbots. Leverage dynamic forms to capture required info in less time.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275875.webp" alt="Client Intake" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	              <div class="item item4">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Document Management</h3>
	                    <p>Mass-generate and file documents (even for multiple cases), edit PDFs. Enjoy case-specific document tagging, Bates stamping, and bulk-import files.</p>
	                  </div>
	                  <figure>
	                    <picture>
	                      <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275886.webp"/>
	                      <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275886.webp"/>
	                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275876.webp" alt="Document Management"/ loading="lazy">
	                    </picture>
	                  </figure>
	                </div>
	              </div>
	              <div class="item item5">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Analytics and Reporting</h3>
	                    <p>Effortlessly create reports from templates or customize your own to keep you dialed in on your firm's health and productivity.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275870.webp" alt="Analytics and Reporting" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	              <div class="item item6">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>Invoicing & Payments</h3>
	                    <p>Automatically track your time and record your expenses. Get paid easily through our LawPay integration and keep your records tight with QuickBooks.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275877.webp" alt="Invoicing & Payments" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	              <div class="item item7">
	                <div class="feature_data"> 
	                  <div class="fetaure_detail">
	                    <h3>AI Productivity Boost</h3>
	                    <p>Summarize long documents in seconds, automate data entry, and generate documents using Neos data with outstanding accuracy.</p>
	                  </div>
	                  <figure>
	                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275873.webp" alt="AI Productivity Boost" loading="lazy">
	                  </figure>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      `
		);
	}

	// Add new section3 if page does not have
	if (!document.querySelector('.spz_7001 .section3_7001')) {
		document.querySelector(".features_section").insertAdjacentHTML(
			"afterend",
			`
	      <div class="section3_7001">
	        <div class="auto_container">
	          <div class="section3_inner">
	            <div class="title">Integrations</div>
	            <picture class="logo">
	              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/mobile__logos.webp">
	              <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/tablet__logos.webp">
	              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/desktop__logos.webp" alt="Company Logo" width="1240" height="171" loading="lazy">
	            </picture>
	          </div>
	        </div>
	      </div>
	    `
		);
	}

	// Add new section3 if page does not have
	if (!document.querySelector('.spz_7001 .section2_7001')) {

		console.log("Added section2_7001");
		document.querySelector(".section3_7001").insertAdjacentHTML(
			"afterend",
			`
	        <div class="section2_7001">
	          <div class="auto_container">
	            <div class="section2_inner">
	              <div class="wrapper">
	                <div class="title">Practice Types</div>
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
										Generate client intake forms, retainer agreements, demand letters, release forms, and more. Auto-populate case files with details from incident reports and medical records. 
	                                </p>
	                                <p>
										Call, email, and text clients in-app. Get reminders for key dates & deadlines, including statutes of limitations, discovery deadlines, filing deadlines, and court dates.
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
	                                    //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275902.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275883.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275867.webp"
	                                  alt="Personal Injury"
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
										Easily manage thousands of plaintiffs with one platform for all legal documents, contacts, and communications. Onboard potential plaintiffs with custom intake forms.
	                                </p>
	                                <p>
										Organize and tag trial documents for faster retrieval. Auto-generate charts, graphs, slideshows, exhibits, and multimedia presentations.
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
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275904.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275843.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275865.webp"
	                                  alt="Mass Tort"
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
										Store all trial prep data in one place, including financial records, communication transcripts, custody agreements, and more. Organize by relevance, date, and type.
	                                </p>
	                                <p>
										Auto-generate timelines from financial summaries and communications.
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
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275903.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275899.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275864.webp"
	                                  alt="Family Law"
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
										Automatically capture details from incident reports, insurance policies, and witness statements. Auto-populate into the client case. Create and assign tasks for document collection and witness coordination.
	                                </p>
	                                <p>
										Streamline trial prep by auto-generating discovery requests, interrogatories, trial briefs, and more.  
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
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275906.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275900.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275863.webp"
	                                  alt="Insurance Defense"
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
										Get a single repository for government regulations, policy documents, contracts, admin records, and more. Categorize documents by relevance, jurisdiction, and legal significance. Quickly retrieve evidence and speed up trial prep.
	                                </p>
	                                <p>
										Securely communicate with government officials via text, email, or phone call. 
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
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275905.webp
	                                  "
	                                />
	                                <source
	                                  media="(max-width:1023px)"
	                                  srcset="
	                                  //res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275898.webp
	                                  "
	                                />
	                                <img
	                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/7001/frame_1171275866.webp"
	                                  alt="Public Sector"
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

		document.querySelector(".spz_7001 .section2_7001 .accordion-wrapper .text_outer > .splide__track")
			.addEventListener("click", function (e) {
				if (
					e.target.closest(".title") &&
					!e.target.closest(".child").classList.contains("tab_active") &&
					!document.querySelector(
						".spz_7001 .section2_7001 .accordion-wrapper .animate"
					)
				) {
					// remove active
					const prevElement = document.querySelector(
						".spz_7001 .section2_7001 .accordion-wrapper .text .child.tab_active"
					);
					const prevActiveHeight = prevElement.offsetHeight;
					prevElement.classList.remove("tab_active");
					const afterActiveHeight = prevElement.offsetHeight;
					prevElement.classList.add("tab_active");
					prevElement.classList.remove("tab_active");
					//remove border
					if (
						document.querySelector(".spz_7001 .section2_7001 .accordion-wrapper .child.no-border")
					) {
						document.querySelector(".spz_7001 .section2_7001 .accordion-wrapper .child.no-border").classList.remove("no-border");
					}
					if (e.target.closest(".child").getAttribute("data-index") != "1") {
						document.querySelector(
								'.spz_7001 .section2_7001 .accordion-wrapper .child[data-index="' +
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
					autoplay: true,
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
					autoplay: true,
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
								
				document.querySelector(".spz_7001 .slider-timer").addEventListener("mouseenter", pauseSliderTimer);
				document.querySelector(".spz_7001 .slider-timer").addEventListener("mouseleave", playSliderTimer);
				document.querySelector(".spz_7001 .slider-with-timer-content").addEventListener("mouseenter", pauseSliderTimer);
				document.querySelector(".spz_7001 .slider-with-timer-content").addEventListener("mouseleave", playSliderTimer);

				window.dispatchEvent(new Event("resize"));
			}
		});

	}

	// Add new section3 if page does not have
	if (!document.querySelector('.spz_7001 .faq_section')) {
		document.querySelector(".section2_7001").insertAdjacentHTML(
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
	                    What is the difference between Assembly Needles and Assembly Neos?
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
	                      Assembly Needles is our award-winning legacy product. It provides
	                      an on-prem platform for managing cases, contacts, legal documents,
	                      billing, and more.
	                    </p>
	                    <p>
	                      Assembly Neos is an upgraded software that combines case
	                      management features with next-gen cloud functionality, AI
	                      capabilities, and task and document automations.
	                    </p>
	                  </div>
	                </div>
	
	                <div class="faq_accordionItem close">
	                  <h2 class="faq_accordionItemHeading">
	                    Why should I manage my legal matters on the cloud?
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
	                      Cloud-based software centralizes documents and client files,
	                      streamlines case management, enables faster collaboration, and
	                      more.
	                    </p>
	                    <ul>
	                      <li>
	                        <p>
	                          Manage key legal documents, notes, and more, on any device.
	                        </p>
	                      </li>
	                      <li>
	                        <p>Search for text within all documents stored in the cloud.</p>
	                      </li>
	                      <li>
	                        <p>Collaborate on documents in real time. Sync changes.</p>
	                      </li>
	                      <li>
	                        <p>
	                          Access client communications and send messages from multiple
	                          devices.
	                        </p>
	                      </li>
	                      <li>
	                        <p>
	                          Get automated workflows for document creation, intake, and
	                          other tasks.
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
	                      Assembly Neos boosts productivity in many ways. For example, with
	                      Neos, you can...
	                    </p>
	                    <ul>
	                      <li>
	                        <p>
	                          Access case files, documents, and data from anywhere, ensuring
	                          critical information is always at your fingertips. 
	                        </p>
	                      </li>
	                      <li>
	                        <p>
	                          Consolidate communication into one platform, streamlining
	                          communication between legal teams, clients, and court
	                          officials. 
	                        </p>
	                      </li>
	                      <li>
	                        <p>
	                          Automate client intakes, document generation, invoicing and
	                          more, reducing manual admin.
	                        </p>
	                      </li>
	                      <li>
	                        <p>Search text across documents, speeding up research.</p>
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
		for (i = 0; i < accHD.length; i++) {
			accHD[i].addEventListener("click", toggleItem, false);
		}
		function toggleItem() {
			var itemClass = this.parentNode.className;
			for (i = 0; i < accItem.length; i++) {
				accItem[i].className = "faq_accordionItem close";
			}
			if (itemClass == "faq_accordionItem close") {
				this.parentNode.className = "faq_accordionItem open";
			}
		}
	}

	// Add new section4 if page does not have
	if (!document.querySelector('.spz_7001 .section4_7001')) {
		document.querySelector(".spz_7001 .faq_section").insertAdjacentHTML(
			"afterend",
			`
	        <div class="section4_7001">
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
	                          <div class="quote">“If Needles was a 1.0 system, this is probably a 5.0. It’s streamlined, I think it looks much slicker, tabbing through things is e﻿asier, and I really like the layout. Neos is just way more user-friendly.”</div>
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
	                          <div class="quote">“Huge upgrade from Needles. Our firm loves the efficiency and the user-friendly capabilities we are now able to do with Neos.”</div>
	                          <div class="user-info">
	                            <div class="info">
	                              <div class="name">Eden Rafferty</div><div class="border"></div>
	                              <div class="title">Attorneys at Law</div>
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
	                          <div class="quote">“Since switching from Needles 4 over 3 years ago, Neos has helped our business run smoother than ever before!”</div>
	                          <div class="user-info">
	                            <div class="info">
	                              <div class="name">Neil Menashe</div><div class="border"></div>
	                              <div class="title">Attorney at Law PC</div>
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
			var splide = new Splide(".spz_7001 .section4_7001 .splide1", {
				type: "loop",
				arrows: true,
				autoHeight: true,
				pagination: true,
				autoplay: true,
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
							".spz_7001 .section4_7001 .slider1-wrapper"
						)
					) {
						document
							.querySelector(".spz_7001 .section4_7001 .slider1-wrapper")
							.classList.remove("active1", "active2", "active3");
						document
							.querySelector(".spz_7001 .section4_7001 .slider1-wrapper")
							.classList.add("active" + (parseInt(splide.index) + 1));
					}
				});

				window.addEventListener("resize", function () {
					splide.refresh();
				});
				var sliderWrapperSPZ = document.querySelector(".spz_7001 .section4_7001 .slider1-wrapper");
				if (sliderWrapperSPZ) {
					sliderWrapperSPZ.classList.add("active1");
				}
			}, 200);
		}

		loadJS_SPZ(splideJSURL, loadSplideSliderSPZ, document.body);
	}
	if (!document.querySelector('.spz_7001 .main_wrap')) {
		document.querySelector('main').insertAdjacentHTML('beforebegin', '<div class="main_wrap"></div>');
		var mainHero = document.querySelector('main');
		document.querySelector('.main_wrap').insertAdjacentElement('afterbegin', mainHero);
	}
}