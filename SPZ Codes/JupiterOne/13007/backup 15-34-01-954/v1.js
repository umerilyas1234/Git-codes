var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
    "//res.cloudinary.com/spiralyze/raw/upload/v1729091088/JupiterOne/13010/src/styles.css";
if (
    !document.querySelector(
        'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1729091088/JupiterOne/13010/src/styles.css"]'
    )
) {
    document.getElementsByTagName("head")[0].appendChild(link);
}

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

function loadTestCode13010() {
  if (!document.querySelector("body").classList.contains("spz_t13010")) {
    document.querySelector("body").classList.add("spz_t13010");

    // Variation Hidden Field Name
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]').length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]')[0].value = 'variant_#13010';
        }, 1000);
      }
    }, 100);
    // Variation Hidden Field Name over

    // hero section
    if (document.querySelector('.spz_t13010 .main-wrapper')) {
        document.querySelector('.spz_t13010 .main-wrapper').insertAdjacentHTML('afterbegin', `
            <section class="section_hero">
              <div class="main_hero">
                <div class="auto_container">
                  <div class="main_heroInner">
                    <div class="hero_detail">
                      <h4>Continuous Controls Monitoring</h4>
                      <h2>Secure Cloud Deployments, </br> Ensure Compliance</h2>
                      <p>Maintain real-time compliance across your cloud infrastructure by aligning with your organization’s
                        predefined standards and processes.</p>
                      <div class="custom_btnOuter">
                        <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13010_v1">Get a Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="whyAsset" class="section-problem why_asset">
              <div class="w-layout-blockcontainer container-large w-container">
                <div class="lm-problem-content-wrapper w-row">
                  <div class="w-col w-col-6 w-col-stack">
                    <picture>
                      <source media="(max-width:767.98px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275391.webp">
                      <source media="(max-width:1023.98px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275390.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275389.webp"
                        loading="lazy" width="Auto"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 96vw, 39vw"
                        alt="Why Continuous Controls Monitoring?">
                    </picture>
                  </div>
                  <div class="w-col w-col-6 w-col-stack">
                    <div class="lm-problem-content">
                      <h4 class="section-eyebro-text">Why Continuous Controls Monitoring?</h4>
                      <h3 class="lm-problem-title">Achieve Full Visibility and Control Over Compliance</h3>
                      <p class="lm-problem-text">Organizations struggle to stay up-to-date on control and compliance requirements
                        for a number of reasons, including:</p>
                      <ul role="list" class="list-with-icon w-list-unstyled">
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728645750/jupiterone/13010/tick-cirlcle.svg"
                            loading="lazy" width="32" height="32" alt="Manual compliance checks" class="list-with-icon-item-image">
                          <div>
                            <strong>Manual compliance checks</strong> lead to delays and gaps in ensuring that all security controls
                            are met consistently before going live.
                          </div>
                        </li>
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728645750/jupiterone/13010/person.svg"
                            loading="lazy" height="32" alt="Human oversight" width="32" class="list-with-icon-item-image">
                          <div>
                            <strong>Human oversight </strong> in manual security reviews increases the risk of missing key controls,
                            leading to potential vulnerabilities.
                          </div>
                        </li>
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728645750/jupiterone/13010/lock.svg"
                            loading="lazy" height="32" alt="Managing security in large-scale" width="32" class="list-with-icon-item-image">
                          <div>
                            <strong> Managing security in large-scale, </strong> multi-team projects becomes overwhelming without
                            real-time monitoring and automated processes.
                          </div>
                        </li>
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728645750/jupiterone/13010/scan.svg"
                            loading="lazy" height="32" alt="Relying on manual reviews" width="32" class="list-with-icon-item-image">
                          <div>
                            <strong> Relying on manual reviews </strong> and processes can be costly and time-consuming, leading to
                            delays in project timelines and increased operational expenses.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="solutionSlider section-slider-with-timer" id="solution">
              <div class="slider_wrapper w-layout-blockcontainer section-slider-with-timer-container w-container">
                <div class="solutionTitle _w-100">
                  <h4 class="section-eyebro-text">Features</h4>
                  <h4 class="section-subtitle">JupiterOne Continuous Controls Monitoring </h4>
                </div>
                <div class="top-slider">
                  <section class="splide splidetop">
                    <div class="splide__track">
                      <ul class="splide__list">
                        <li class="splide__slide">
                          <div class="child first-child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Custom frameworks</span>
                            <span class="sliderNav slideNumber">1</span>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Pre-production security assurance </span>
                            <span class="sliderNav slideNumber">2</span>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Flexible control management</span>
                            <span class="sliderNav slideNumber">3</span>
                          </div>
                        </li>
                        <li class="splide__slide last-child">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Real-time reporting</span>
                            <span class="sliderNav slideNumber">4</span>
                          </div>
                        </li>
                        <li class="splide__slide last-child">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Data integration</span>
                            <span class="sliderNav slideNumber">4</span>
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
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Custom frameworks</h5>
                                <p>Create custom frameworks from the ground up, aligned to your organization’s regulatory and
                                  industry standards. </p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13010_v1">Get a Demo</a>
                              </div>
                              <div class="imgWrapper">
                                <picture>
                                  <source media="(max-width:767.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/custom_frameworks__mob_1.webp">
                                  <source media="(max-width:1023.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275235.webp">
                                  <img
                                    src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275235.webp"
                                    alt="Custom frameworks">
                                </picture>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Pre-production security assurance</h5>
                                <p>Enforce security checkpoints before applications go live in cloud environments like AWS, Azure
                                  and GCP. </p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13010_v1">Get a Demo</a>
                              </div>
                              <div class="imgWrapper">
                                <picture>
                                  <source media="(max-width:767.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/pre-production_security_assurance_mob.webp">
                                  <source media="(max-width:1023.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/pre-production_security_assurance.webp">
                                  <img
                                    src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/pre-production_security_assurance.webp"
                                    alt="Pre-production security assurance">
                                </picture>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Flexible control management</h5>
                                <p>Enable security, engineering, and IT teams to seamlessly add or modify security controls,
                                  ensuring continuous alignment with evolving risk profiles.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13010_v1">Get a Demo</a>
                              </div>
                              <div class="imgWrapper">
                                <picture>
                                  <source media="(max-width:767.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/flexible_control_management_mob_2.webp">
                                  <source media="(max-width:1023.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275226.webp">
                                  <img
                                    src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/frame_1171275226.webp"
                                    alt="Flexible control management">
                                </picture>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Real-time reporting</h5>
                                <p>Deliver instant updates to relevant teams whenever control issues arise.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13010_v1">Get a Demo</a>
                              </div>
                              <div class="imgWrapper">
                                <picture>
                                  <source media="(max-width:767.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/real-time_reporting_mob_2.webp">
                                  <source media="(max-width:1023.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/original.webp">
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/original.webp"
                                    alt="Real-time reporting">
                                </picture>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Data integration</h5>
                                <p>Pull and refresh control data from cloud, on-premises, and security tools for up-to-date monitoring and complete visibility across all environments.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13010_v1">Get a Demo</a>
                              </div>
                              <div class="imgWrapper">
                                <picture>
                                  <source media="(max-width:767.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/ready-made_frameworks_mob.webp">
                                  <source media="(max-width:1023.98px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/ready-made_frameworks.webp">
                                  <img
                                    src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/ready-made_frameworks.webp"
                                    alt="Data integration">
                                </picture>
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
            <div class="how_it_works">
              <div class="auto_container">
                <div class="how_itWorks_inner">
                  <div class="solutionTitle _w-100">
                    <h4 class="section-eyebro-text">How It Works</h4>
                  </div>
                  <div class="how_itWorks_top">
                    <picture>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1728650466/jupiterone/13010/how_it_works_des_1.svg"
                        alt="How it Works">
                    </picture>
                  </div>
                  <div class="how_itWorks_list">
                    <ul>
                      <li>
                        <div class="how_itWorks_data">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728650327/jupiterone/13010/refine.svg"
                            alt="Refine">
                          <h3>Refine</h3>
                          <p>Define the policies relevant <br> to your business</p>
                        </div>
                      </li>
                      <li>
                        <div class="how_itWorks_data">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728650338/jupiterone/13010/test.svg" alt="Test">
                          <h3>Test</h3>
                          <p>Translate policies and controls <br> into measurable outcomes</p>
                        </div>
                      </li>
                      <li>
                        <div class="how_itWorks_data">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728650350/jupiterone/13010/alert.svg" alt="Alert">
                          <h3>Alert</h3>
                          <p>Report, remediate and <br> continuously monitor</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="custom_btnOuter">
                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank"
                      class="custom_btn spz_13010_v1">Get a Demo</a>
                  </div>
                </div>
              </div>
            </div>
          `);
        }

        document.querySelector('.section-logo-loop .section-title').textContent = 'The Deepest Integrations on the Market';
        document.querySelector('.section-logo-loop .section-subtitle').textContent = 'Get visibility into your entire cloud-infrastructure.';
        document.querySelector('.integrations-slider').insertAdjacentHTML('afterend', `
          <div class="custom_btnOuter" >
            <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13010_v1">Get a Demo</a>
          </div>
        `);
        document.querySelector('.section-logo-loop').insertAdjacentHTML('afterend', `
          <div class="review_slider">
            <div class="auto_container">
              <section class="splide reviewSlider">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <div class="user-review-slide">
                        <div class="user-review-item">
                          <div class="user-review-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                              <rect width="64" height="64" rx="32" fill="#E7ECF1" />
                              <path
                                d="M30.3334 22.8817V26.4728C30.3334 26.9598 29.8931 27.3544 29.35 27.3544C27.4121 27.3544 26.358 29.1366 26.2119 32.6542H29.35C29.8931 32.6542 30.3334 33.0492 30.3334 33.536V41.1185C30.3334 41.6053 29.8931 41.9999 29.35 41.9999H20.9832C20.4399 41.9999 20 41.6049 20 41.1185V33.536C20 31.8498 20.1893 30.3024 20.5626 28.9363C20.9454 27.5355 21.533 26.3108 22.3086 25.296C23.1067 24.2531 24.105 23.4347 25.276 22.8645C26.4549 22.2909 27.8258 22 29.3503 22C29.8931 22 30.3334 22.3946 30.3334 22.8817ZM43.0165 27.3545C43.5594 27.3545 44 26.9595 44 26.4728V22.8817C44 22.3947 43.5594 22.0001 43.0165 22.0001C41.4926 22.0001 40.1215 22.291 38.943 22.8646C37.7718 23.4347 36.7729 24.2531 35.9747 25.296C35.1994 26.3109 34.6118 27.5357 34.2289 28.9367C33.8558 30.3032 33.6665 31.8507 33.6665 33.5361V41.1185C33.6665 41.6053 34.1069 42 34.6499 42H43.0164C43.5593 42 43.9995 41.605 43.9995 41.1185V33.536C43.9995 33.0492 43.5594 32.6542 43.0164 32.6542H39.9231C40.067 29.1367 41.1057 27.3545 43.0165 27.3545Z"
                                fill="#041E42" />
                            </svg>
                          </div>
                          <div class="user-review-star">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/stars_webp.webp"
                              loading="lazy" width="75" alt="Stars">
                          </div>
                          <p class="user-review-text">“This is the <strong>most visionary tool</strong> on the market. It easily
                            integrates with our tools. I don’t need 5 people to run it (unlike other pieces of software).”</p>
                          <div class="user-review-info">
                            <h5 class="user-review-name">Neil F.</h5>
                            <p class="user-review-text">Security and Audit Manager</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="user-review-slide">
                        <div class="user-review-item">
                          <div class="user-review-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                              <rect width="64" height="64" rx="32" fill="#E7ECF1" />
                              <path
                                d="M30.3334 22.8817V26.4728C30.3334 26.9598 29.8931 27.3544 29.35 27.3544C27.4121 27.3544 26.358 29.1366 26.2119 32.6542H29.35C29.8931 32.6542 30.3334 33.0492 30.3334 33.536V41.1185C30.3334 41.6053 29.8931 41.9999 29.35 41.9999H20.9832C20.4399 41.9999 20 41.6049 20 41.1185V33.536C20 31.8498 20.1893 30.3024 20.5626 28.9363C20.9454 27.5355 21.533 26.3108 22.3086 25.296C23.1067 24.2531 24.105 23.4347 25.276 22.8645C26.4549 22.2909 27.8258 22 29.3503 22C29.8931 22 30.3334 22.3946 30.3334 22.8817ZM43.0165 27.3545C43.5594 27.3545 44 26.9595 44 26.4728V22.8817C44 22.3947 43.5594 22.0001 43.0165 22.0001C41.4926 22.0001 40.1215 22.291 38.943 22.8646C37.7718 23.4347 36.7729 24.2531 35.9747 25.296C35.1994 26.3109 34.6118 27.5357 34.2289 28.9367C33.8558 30.3032 33.6665 31.8507 33.6665 33.5361V41.1185C33.6665 41.6053 34.1069 42 34.6499 42H43.0164C43.5593 42 43.9995 41.605 43.9995 41.1185V33.536C43.9995 33.0492 43.5594 32.6542 43.0164 32.6542H39.9231C40.067 29.1367 41.1057 27.3545 43.0165 27.3545Z"
                                fill="#041E42" />
                            </svg>
                          </div>
                          <div class="user-review-star">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/stars_webp.webp"
                              loading="lazy" width="75" alt="Stars">
                          </div>
                          <p class="user-review-text">Fantastic automated solution for compliance and cybersecurity posture.
                            JupiterOne <strong>cuts down the work for audit evidence submission by 80%.</strong></p>
                          <div class="user-review-info">
                            <h5 class="user-review-name">Syed K.</h5>
                            <p class="user-review-text">Security and Audit Manager</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="user-review-slide">
                        <div class="user-review-item">
                          <div class="user-review-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                              <rect width="64" height="64" rx="32" fill="#E7ECF1" />
                              <path
                                d="M30.3334 22.8817V26.4728C30.3334 26.9598 29.8931 27.3544 29.35 27.3544C27.4121 27.3544 26.358 29.1366 26.2119 32.6542H29.35C29.8931 32.6542 30.3334 33.0492 30.3334 33.536V41.1185C30.3334 41.6053 29.8931 41.9999 29.35 41.9999H20.9832C20.4399 41.9999 20 41.6049 20 41.1185V33.536C20 31.8498 20.1893 30.3024 20.5626 28.9363C20.9454 27.5355 21.533 26.3108 22.3086 25.296C23.1067 24.2531 24.105 23.4347 25.276 22.8645C26.4549 22.2909 27.8258 22 29.3503 22C29.8931 22 30.3334 22.3946 30.3334 22.8817ZM43.0165 27.3545C43.5594 27.3545 44 26.9595 44 26.4728V22.8817C44 22.3947 43.5594 22.0001 43.0165 22.0001C41.4926 22.0001 40.1215 22.291 38.943 22.8646C37.7718 23.4347 36.7729 24.2531 35.9747 25.296C35.1994 26.3109 34.6118 27.5357 34.2289 28.9367C33.8558 30.3032 33.6665 31.8507 33.6665 33.5361V41.1185C33.6665 41.6053 34.1069 42 34.6499 42H43.0164C43.5593 42 43.9995 41.605 43.9995 41.1185V33.536C43.9995 33.0492 43.5594 32.6542 43.0164 32.6542H39.9231C40.067 29.1367 41.1057 27.3545 43.0165 27.3545Z"
                                fill="#041E42" />
                            </svg>
                          </div>
                          <div class="user-review-star">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/stars_webp.webp"
                              loading="lazy" width="75" alt="Stars">
                          </div>
                          <p class="user-review-text">JupiterOne <strong>makes it possible for anyone to maintain compliance with
                              SOC, PCI, HIPAA,</strong> and more. Really comprehensive solution!</p>
                          <div class="user-review-info">
                            <h5 class="user-review-name">Jasmine H.</h5>
                            <p class="user-review-text">Security Manager</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="user-review-slide">
                        <div class="user-review-item">
                          <div class="user-review-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                              <rect width="64" height="64" rx="32" fill="#E7ECF1" />
                              <path
                                d="M30.3334 22.8817V26.4728C30.3334 26.9598 29.8931 27.3544 29.35 27.3544C27.4121 27.3544 26.358 29.1366 26.2119 32.6542H29.35C29.8931 32.6542 30.3334 33.0492 30.3334 33.536V41.1185C30.3334 41.6053 29.8931 41.9999 29.35 41.9999H20.9832C20.4399 41.9999 20 41.6049 20 41.1185V33.536C20 31.8498 20.1893 30.3024 20.5626 28.9363C20.9454 27.5355 21.533 26.3108 22.3086 25.296C23.1067 24.2531 24.105 23.4347 25.276 22.8645C26.4549 22.2909 27.8258 22 29.3503 22C29.8931 22 30.3334 22.3946 30.3334 22.8817ZM43.0165 27.3545C43.5594 27.3545 44 26.9595 44 26.4728V22.8817C44 22.3947 43.5594 22.0001 43.0165 22.0001C41.4926 22.0001 40.1215 22.291 38.943 22.8646C37.7718 23.4347 36.7729 24.2531 35.9747 25.296C35.1994 26.3109 34.6118 27.5357 34.2289 28.9367C33.8558 30.3032 33.6665 31.8507 33.6665 33.5361V41.1185C33.6665 41.6053 34.1069 42 34.6499 42H43.0164C43.5593 42 43.9995 41.605 43.9995 41.1185V33.536C43.9995 33.0492 43.5594 32.6542 43.0164 32.6542H39.9231C40.067 29.1367 41.1057 27.3545 43.0165 27.3545Z"
                                fill="#041E42" />
                            </svg>
                          </div>
                          <div class="user-review-star">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13010/stars_webp.webp"
                              loading="lazy" width="75" alt="Stars">
                          </div>
                          <p class="user-review-text"> <strong>Great visibility into the cloud!</strong> Being able to query AWS
                            resources lets us understand our environment, configurations, and compliance.</p>
                          <div class="user-review-info">
                            <h5 class="user-review-name">Morgan L.</h5>
                            <p class="user-review-text">Compliance Analyst</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        `);

        loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
            var splidetop = new Splide('.splidetop', {
                rewind: true,
                isNavigation: true,
                focus: 'center',
                autoplay: true,
                speed: 500,
                interval: 6000,
                pagination: false,
                perPage: 5,
                arrows: false,
                pauseOnHover: false,
                pauseOnFocus: false,

            });
            var splidebottom = new Splide('.splidebottom', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                speed: 500,
                interval: 6000,
                arrows: false,
                pagination: false,
                autoHeight: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                gap: '55px',
                focus: 'center'
            });

            var reviewSlider = new Splide('.reviewSlider', {
              type: 'loop',
              perPage: 3, // Default setting for larger screens
              autoplay: false,
              speed: 500,
              interval: 6000,
              arrows: true,
              pagination: false,
              autoHeight: true,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true,
              gap: '0px',
              focus: 'center',
              breakpoints: {
                  1199: {
                      perPage: 3,
                  },
                  1023: {
                      perPage: 1,
                      gap: '40px', 
                      focus: 'center', 
                      padding: {
                          right: '40.9%',
                      },
                  },
                  767: {
                      perPage: 1,
                      gap: '10px', 
                      focus: 'center', 
                      padding: {
                          right: '7%',
                      },
                  },
                },
            });

            // Pause auto slide on click
            splidetop.on('click', function () {
                var Autoplay1 = splidetop.Components.Autoplay;
                var Autoplay2 = splidebottom.Components.Autoplay;
                Autoplay1.pause();
                Autoplay2.pause();
                document.querySelector('.top-slider').classList.remove('auto-slide-active');
            });

            setTimeout(function () {
                splidetop.mount();
                splidebottom.mount();
                reviewSlider.mount();
                splidebottom.sync(splidetop);

                document.querySelector('.top-slider').classList.add('auto-slide-active');
            }, 500);
            window.dispatchEvent(new Event('resize'));
        
        }, document.body);

        document.querySelector('.section-blue-banner2 .w-button').classList.add('spz_13010_v1');
  
  }
}

  

var bodyInterval13010 = setInterval(() => {
    if (document.querySelectorAll("body").length > 0) {
      clearInterval(bodyInterval13010);
    loadTestCode13010();
  }
}, 100); 

