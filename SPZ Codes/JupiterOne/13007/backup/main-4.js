var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1731478614/JupiterOne/13007/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1731478614/JupiterOne/13007/src/styles.css"]'
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
  if (!document.querySelector("body").classList.contains("spz_t13007")) {
    document.querySelector("body").classList.add("spz_t13007");

    // Variation Hidden Field Name
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]').length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]')[0].value = 'variant_#13007';
        }, 1000);
      }
    }, 100);
    // Variation Hidden Field Name over

    // hero section
    if (document.querySelector('.spz_t13007 .main-wrapper')) {
      document.querySelector('.spz_t13007 .main-wrapper').insertAdjacentHTML('afterbegin', `
            <section class="section_hero">
              <div class="main_hero">
                <div class="auto_container">
                  <div class="main_heroInner">
                    <div class="hero_detail">
                      <h4>Identity and Access Management</h4>
                      <h2>Discover and prioritize IAM risks <br> across all your assets</h2>
                      <p>Get a complete inventory of user identities. See who has access to what systems and resources. Automate user access reviews, and identify permissions, entitlement, and misconfiguration issues.</p>
                      <div class="custom_btnOuter">
                        <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13007_v1">Get a Demo</a>
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
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/mobile__why_image.webp">
                      <source media="(max-width:1023.98px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/tablet__why_image.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/desktop__why_image.webp"
                        loading="lazy" width="Auto"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 96vw, 39vw"
                        alt="Why Identity and Access Management">
                    </picture>
                  </div>
                  <div class="w-col w-col-6 w-col-stack">
                    <div class="lm-problem-content">
                      <h4 class="section-eyebro-text">Why Identity and Access Management</h4>
                      <h3 class="lm-problem-title">Security Teams Cannot Protect Their Org Without a Complete Understanding of User Identities</h3>
                      <p class="lm-problem-text">Teams often don’t have a centralized inventory of their user identities and permissions. This makes it hard to pinpoint user- and access-driven vulnerabilities, see which assets are at risk, and secure your attack surface.</p>
                      <p class="lm-problem-text">JupiterOne centralizes user identity data to automate access reviews, identify permission issues, and spot misconfigurations.</p>
                      <ul role="list" class="list-with-icon w-list-unstyled">
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728662107/jupiterone/13007/identify.svg"
                            loading="lazy" width="32" height="32" alt="Identify all user identities and permissions" class="list-with-icon-item-image">
                          <div>
                            <strong>Identify all user identities and permissions</strong> by auto-analyzing access levels across cloud assets, devices, code repos, and apps. 
                          </div>
                        </li>
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728662093/jupiterone/13007/streamline.svg"
                            loading="lazy" height="32" alt="Streamline remediation" width="32" class="list-with-icon-item-image">
                          <div>
                            <strong>Streamline remediation </strong>  by spotting access issues connected to the most business-critical assets and identifying which issues to remediate first.
                          </div>
                        </li>
                        <li class="list-with-icon-item">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1728662100/jupiterone/13007/increase.svg"
                            loading="lazy" height="32" alt="Increase compliance " width="32" class="list-with-icon-item-image">
                          <div>
                            <strong> Increase compliance </strong>  by monitoring environment permissions against security frameworks, including NIST, ISO, CIS, SOC 2, and PCI-DSS. Streamline audits. 
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
                  <h4 class="section-subtitle">From uncovering risky access relationships to visualizing potential attack paths, JupiterOne enables teams to quickly identify impacted identities and assets. </h4>
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
                            <span class="sliderNav desktopOnly">Assets</span>
                            <span class="sliderNav slideNumber">1</span>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Relationship Mapping </span>
                            <span class="sliderNav slideNumber">2</span>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Insights Dashboards</span>
                            <span class="sliderNav slideNumber">3</span>
                          </div>
                        </li>
                        <li class="splide__slide last-child">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Query</span>
                            <span class="sliderNav slideNumber">4</span>
                          </div>
                        </li>
                        <li class="splide__slide last-child">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Data Integration</span>
                            <span class="sliderNav slideNumber">5</span>
                          </div>
                        </li>
                        <li class="splide__slide last-child">
                          <div class="child">
                            <div class="splide__progress">
                              <div class="splide__progress__bar"></div>
                            </div>
                            <span class="sliderNav desktopOnly">Unified Devices</span>
                            <span class="sliderNav slideNumber">6</span>
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
                                <h5>Assets</h5>
                                <p>Centralize all your IAM data—users, roles, credentials, and access relationships—into a single, unified platform. Gain clear visibility into who has access, what they can do, and where potential risks may be hiding—all from one place.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/assets_3.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/assets_1.webp">
                                <img
                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/assets.webp"
                                  alt="Assets">
                              </picture>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Relationship Mapping</h5>
                                <p>Visualize who has access to what and how identities are connected across your ecosystem. Quickly identify orphaned accounts, excessive permissions, and hidden access paths that can lead to privilege sprawl or security vulnerabilities. </p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/relationship_mapping_2.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/relationship_mapping_1.webp">
                                <img
                                  src="//res.cloudinary.com/spiralyze/image/upload/v1737034055/jupiterone/13007/relationship_mapping_3.webp"
                                  alt="Relationship Mapping">
                              </picture>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Insights Dashboards</h5>
                                <p>Get actionable metrics and findings from the Insight Dashboard. Quickly identify orphaned accounts, excessive permissions, and misconfigurations to prioritize and resolve identity risks effectively.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/insights_dashboards_2.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/insights_dashboards_1.webp">
                                <img
                                  src="//res.cloudinary.com/spiralyze/image/upload/v1736954262/jupiterone/13007/insights_dashboards_3.webp"
                                  alt="Insights Dashboards">
                              </picture>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Query</h5>
                                <p>Easily query your IAM data to uncover risky access, orphaned accounts, and misconfigurations. Get real-time answers to "who has access to what" and take swift action to secure identities.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/query_2.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/query_1.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/query.webp"
                                  alt="Query">
                              </picture>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Data Integration</h5>
                                <p>Seamlessly integrate data from IAM tools like Okta, Azure AD, and AWS IAM into a single platform. Unify identities, roles, and permissions to eliminate silos, uncover risks, and ensure complete access visibility.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/data_integration_2.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/data_integration_1.webp">
                                <img
                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/data_integration.webp"
                                  alt="Data Integration">
                              </picture>
                            </div>
                          </div>
                        </li>
                        <li class="splide__slide">
                          <div class="solutionContent">
                            <div class="ContentInner">
                              <div class="solutionText">
                                <h5>Unified Devices</h5>
                                <p>Gain a complete view of all devices in your environment and how they connect across your ecosystem. Eliminate inconsistencies caused by the same device being represented differently across various security and IT tools. Simplify device management with advanced deduplication and correlation, unifying configurations, relationships, and vulnerabilities into a single, accurate asset inventory.</p>
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management"
                                  target="_blank" class="button-tile w-button spz_13007_v1">Get a Demo</a>
                              </div>
                            </div>
                            <div class="imgWrapper">
                              <picture>
                                <source media="(max-width:767.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/unified_devices_mob.webp">
                                <source media="(max-width:1023.98px)"
                                  srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/unified_devices_tab.webp">
                                <img
                                  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/unified_devices_des.webp"
                                  alt="Unified Devices">
                              </picture>
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
                  <div class="section-works py-0">
                    <div class="w-layout-blockcontainer container-large w-container">
                      <h2 class="section-title">How it works</h2>
                      <div class="work-items">
                        <div class="work-item">
                          <picture>
                            <source media="(max-width:767.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/mobile__complete_visibility.webp">
                            <source media="(max-width:1023.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/tablet__complete_visibility.webp">
                            <img
                              src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/desktop__complete_visibility.webp"
                              alt="Complete Visibility" class="work-item-img">
                          </picture>
                          <div class="work_data">
                            <h5>Consolidate IAM data</h5>
                            <h4 class="work-items-titles">Complete Visibility</h4>
                            <p class="work-items-paragraph">View all identities and permissions across your cloud assets, users, devices, code repos, and apps. Identify unknown or unauthorized privileges.</p>
                          </div>
                        </div>
                        <div class="work-item">
                          <picture>
                            <source media="(max-width:767.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/mobile__prioritize_critical_risks.webp">
                            <source media="(max-width:1023.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/tablet__prioritize_critical_risks.webp">
                            <img
                              src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/desktop__prioritize_critical_risks.webp"
                              alt="Prioritize Critical Risks" class="work-item-img">
                          </picture>
                          <div class="work_data">
                            <h5>Identify permission issues</h5>
                            <h4 class="work-items-titles">
                              Prioritize Critical Risks 
                            </h4>
                            <p class="work-items-paragraph">See the blast radius of security incidents. Identify the connections between user identities, threats, and business critical assets. Prioritize risks.</p>
                          </div>
                        </div>
                        <div class="work-item">
                          <picture>
                            <source media="(max-width:767.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/mobile__increase_environment_compliance.webp">
                            <source media="(max-width:1023.98px)"
                              srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/tablet__increase_environment_compliance.webp">
                            <img
                              src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13007/desktop__increase_environment_compliance.webp"
                              alt="Increase Environment Compliance" class="work-item-img">
                          </picture>
                          <div class="work_data">
                            <h5>Remediate faster</h5>
                            <h4 class="work-items-titles">Increase Environment Compliance</h4>
                            <p class="work-items-paragraph">Get recommended remediation steps. Increase compliance for security frameworks, like NIST, ISO, CIS, SOC 2, and PCI-DSS. Streamline audits. </p>
                          </div>
                        </div>
                      </div>
                      <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" class="how-it-work-video-btn w-inline-block w-lightbox spz_13007_v1" target="_blank">
                        <div>Get a Demo</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `);
    }

    document.querySelector('.section-logo-loop .section-title').textContent = 'Integrations';
    document.querySelector('.section-logo-loop .section-subtitle').textContent = 'Get visibility into your entire cloud-infrastructure.';

    document.querySelector('.section-logo-loop').insertAdjacentHTML('afterend', `
      <div class="review_slider">
        <div class="auto_container">
          <section class="splide reviewsSlider">
            <div class="review_list splide__track">
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
                      <p class="user-review-text"> Great visibility into the cloud! Being able to query AWS resources lets us
                        understand our environment, configurations, and compliance.</p>
                      <div class="user-review-info">
                        <h5 class="user-review-name">Morgan L.</h5>
                        <p class="user-review-text">Compliance Analyst</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="splide__slide">
                  <div class="user-review-slide rotate">
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
                        JupiterOne cuts down the work for evidence submission for audits by 80%.</p>
                      <div class="user-review-info">
                        <h5 class="user-review-name">Syed K.</h5>
                        <p class="user-review-text">Security and Audit Manager</p>
                      </div>
                    </div>
                  </div>

                  <div class="user-review-slide rotate">
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
                      <p class="user-review-text"> “There is no one single view [in AWS] to see detailed information from all
                        of your accounts. JupiterOne gathers all of this information together in one place, rather than having
                        50 tabs open.”</p>
                      <div class="user-review-info">
                        <h5 class="user-review-name">Ken</h5>
                        <p class="user-review-text">Information Security Analyst</p>
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
                      <p class="user-review-text">JupiterOne makes it possible for anyone to maintain compliance with SOC,
                        PCI, HIPAA, and more. Really comprehensive solution!</p>
                      <div class="user-review-info">
                        <h5 class="user-review-name">Jasmine H.</h5>
                        <p class="user-review-text">Security</p>
                      </div>
                    </div>
                  </div>

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
                      <p class="user-review-text"> “This tool empowers us to be more proactive. I can report current risk and PCI compliance metrics month over month and maintain that level of PCI compliance. That’s a return on investment all on its own.”</p>
                      <div class="user-review-info">
                        <h5 class="user-review-name">Anthony Cunha</h5>
                        <p class="user-review-text">CISO</p>
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

      let reviewsSlider;

      function initializeSlider() {
        if (window.innerWidth <= 1023) {
          if (!reviewsSlider) {
            reviewsSlider = new Splide('.reviewsSlider', {
              type: 'loop',
              autoplay: false,
              speed: 500,
              perPage: 2,
              interval: 6000,
              arrows: false,
              pagination: true,
              autoHeight: true,
              autoWidth: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              gap: '0',
              breakpoints: {
                1023.98: {
                  perPage: 2,
                },
                767.98: {
                  perPage: 2,
                },
              }
            }).mount();
          }
        } else {
          if (reviewsSlider) {
            reviewsSlider.destroy();
            reviewsSlider = null;
          }
        }
      }

      window.addEventListener('resize', initializeSlider);

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
        splidebottom.sync(splidetop);
        initializeSlider();

        document.querySelector('.top-slider').classList.add('auto-slide-active');
      }, 500);
      window.dispatchEvent(new Event('resize'));

    }, document.body);

    document.querySelector('.section-blue-banner2 .w-button').classList.add('spz_13007_v1');

  }
}



var bodyInterval13010 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval13010);
    loadTestCode13010();
  }
}, 100);

