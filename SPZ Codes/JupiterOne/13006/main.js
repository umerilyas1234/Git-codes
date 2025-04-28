var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
    "//res.cloudinary.com/spiralyze/raw/upload/v1728456986/JupiterOne/13006/src/styles.css";
if (
    !document.querySelector(
        'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1728456986/JupiterOne/13006/src/styles.css"]'
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

function loadTestCode13006() {
    if (!document.querySelector("body").classList.contains("spz_t13006")) {
        document.querySelector("body").classList.add("spz_t13006");

        // Variation Hidden Field Name
        var spzHiddenFieldName = setInterval(() => {
            if (document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]').length > 0) {
                clearInterval(spzHiddenFieldName);
                setTimeout(() => {
                    document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]')[0].value = 'variant_13006';
                }, 1000);
            }
        }, 100);
        // Variation Hidden Field Name over

        // hero section
        if (document.querySelector('.spz_t13006 main')) {
            document.querySelector('.spz_t13006 main').insertAdjacentHTML('afterbegin', `
            <section class="section_hero">
                <div class="main_hero">
                    <div class="auto_container">
                        <div class="main_heroInner">
                            <div class="hero_detail">
                            <h4>Vulnerability Management</h4>
                            <h2>Identify Vulnerabilities. Map Asset Relationships. Streamline Remediation.</h2>
                            <p>Get complete visibility of all your assets and vulnerabilities. Drill down into threat details and their connections to assets. Prioritize remediation based on criticality and impact on your environment. </p>
                            <div class="custom_btnOuter">
                                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13006_v1 spz_13006_v1_hero">Get a Demo</a>
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
                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/image_1_mobile.webp">
                                <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275384.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275383.webp" loading="lazy" width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 96vw, 39vw" alt="Why is understanding vulnerabilities crucial?">
                            </picture>
                        </div>
                        <div class="w-col w-col-6 w-col-stack">
                            <div class="lm-problem-content">
                                <h4 class="section-eyebro-text">Why is understanding vulnerabilities crucial?</h4>
                                <h3 class="lm-problem-title">Security Teams Cannot Protect Their Org Without a Complete Understanding of Vulnerabilities</h3>
                                <p class="lm-problem-text">Teams often use multiple security tools to manage vulnerabilities and only track CVEs and zero days. This makes it difficult to get a complete picture of their entire attack surface, see how vulnerabilities and assets relate, and prioritize threats.</p>
                                <p class="lm-problem-text">JupiterOne streamlines vulnerability management into one platform. Identify vulnerabilities, view their connections to your assets, and remediate. </p>
                                <ul role="list" class="list-with-icon w-list-unstyled">
                                    <li class="list-with-icon-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1727784606/jupiterone/13006/alert_2.svg" loading="lazy" width="32" height="32" alt="Eye Icon" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Identify all potential vulnerabilities.</strong>  Continuously monitor your environment for misconfigurations, missing patches, and gaps in security training. 
                                        </div>
                                    </li>
                                    <li class="list-with-icon-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1727784606/jupiterone/13006/eye_1.svg" loading="lazy" height="32" alt="Connection Icon" width="32" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Prioritize risks </strong>  by seeing how vulnerabilities connect to assets and the blast radius if a breach occurs. View potential impact on your attack surface.
                                        </div>
                                    </li>
                                    <li class="list-with-icon-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1727784606/jupiterone/13006/connection_1.svg" loading="lazy" height="32" alt="Alert Icon" width="32" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Remediate faster </strong>  with alerts for risky environment changes. Automatically send recommended remediation steps to teams.
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
                        <h4 class="section-subtitle">Streamline vulnerability management, asset visibility, and remediation from one platform.  </h4>
                    </div>
                    <div class="top-slider">
                        <section class="splide splidetop">
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <li class="splide__slide">
                                        <div class="child first-child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Asset Inventory</span>
                                            <span class="sliderNav slideNumber">1</span>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Vulnerability Monitoring </span>
                                            <span class="sliderNav slideNumber">2</span>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Remediation</span>
                                            <span class="sliderNav slideNumber">3</span>
                                        </div>
                                    </li>
                                    <li class="splide__slide last-child">
                                        <div class="child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Relationship Mapping</span>
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
                                                    <h5>Asset Inventory</h5>
                                                    <p>Complete visibility of all cyber assets, including devices, users, apps, networks, and code repos. </p>
                                                    <p>Consolidate asset data into a single source of truth with over 200 integrations across IT, DevOps, security, HR, and other tools.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_13006_v1 spz_13006_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275669.webp">
                                                        <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275643.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/ui.webp" alt="Asset Inventory">
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="solutionContent">
                                            <div class="ContentInner">
                                                <div class="solutionText">
                                                    <h5>Vulnerability Monitoring</h5>
                                                    <p>Continuously track for asset changes in your environment.  </p>
                                                    <p>Sync findings from your security tools sources, like vulnerability scanners, code scanners, cloud service providers, and endpoint management tools. Get a centralized view to manage vulnerabilities.  </p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_3006_v1 spz_13006_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275668.webp">
                                                        <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275661.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/ui_3.webp" alt="Vulnerability Monitoring">
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="solutionContent">
                                            <div class="ContentInner">
                                                <div class="solutionText">
                                                    <h5>Remediation</h5>
                                                    <p>Instant alerts on environment changes. Prioritize based on the potential impact to assets. Auto-send recommended remediation steps to teams. </p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_3006_v1 spz_13006_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275667.webp">
                                                        <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275662.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/ui_2.webp" alt="Remediation">
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="solutionContent">
                                            <div class="ContentInner">
                                                <div class="solutionText">
                                                    <h5>Relationship Mapping</h5>
                                                    <p>View a map of the connections between assets, owners, security controls, and vulnerabilities. See the blast radius of potential threats if a breach occurs. Identify downstream vulnerabilities.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_3006_v1 spz_13006_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275666.webp">
                                                        <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275660.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/ui_1.webp" alt="Relationship Mapping">
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
            <div class="benifits">
                <div class="auto_container">
                    <div class="benifits_inner">
                        <div class="solutionTitle _w-100">
                            <h4 class="section-eyebro-text">Benefits</h4>
                            <h4 class="section-subtitle">Streamline vulnerability management, enable teams to quickly identify and remediate risks. </h4>
                        </div>
                        <div class="benifits_list">
                            <ul>
                                <li>
                                    <div class="benifits_data">
                                        <div class="benifits_left">
                                            <h3>Identify All Vulnerabilities</h3>
                                            <p>Continuously monitor for all vulnerabilities, including misconfigurations, missing patches, gaps in security training, CVEs, zero days, and more. <strong> Manage from a single platform.</strong></p>
                                        </div>
                                        <div class="benifits_right">
                                            <picture>
                                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275389.webp">
                                                <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275387.webp">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275391.webp" alt="Identify All Vulnerabilities">
                                            </picture>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="benifits_data">
                                        <div class="benifits_left">
                                            <h3>Prioritize Threats</h3>
                                            <p>See the connections between your assets and vulnerabilities. </br> View the blast radius if a breach occurs. <strong>Rapidly prioritize based on impact to your environment.</strong></p>
                                        </div>
                                        <div class="benifits_right">
                                            <picture>
                                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/dashboards_and_alerts_2.webp">
                                                <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/dashboards_and_alerts_1.webp">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/dashboards_and_alerts.webp" alt="Prioritize Threats">
                                            </picture>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="benifits_data">
                                        <div class="benifits_left">
                                            <h3>Streamline Remediation</h3>
                                            <p>Instantly get alerts to risky environment changes. </br> Get recommended steps. <strong>Remediate faster.</strong></p>
                                        </div>
                                        <div class="benifits_right">
                                            <picture>
                                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275390.webp">
                                                <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275388.webp">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13006/frame_1171275386.webp" alt="Streamline Remediation">
                                            </picture>
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
                focus: 'center',
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
                splidebottom.sync(splidetop);

                document.querySelector('.top-slider').classList.add('auto-slide-active');
            }, 500);
            window.dispatchEvent(new Event('resize'));
        }, document.body);

        document.querySelector('.section-logo-loop .section-title').textContent = 'The Deepest Integrations on the Market';
        document.querySelector('.section-logo-loop .section-subtitle').textContent = 'Get visibility into your entire cloud-infrastructure.';
        document.querySelector('.integrations-slider').insertAdjacentHTML('afterend', `
            <div class="custom_btnOuter">
                <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13006_v1 spz_13006_v1_hero">Get a Demo</a>
            </div>    
        `);
        document.querySelector('.section-logo-loop').insertAdjacentHTML('afterend', `
            <div class="section-user-review">
                <div class="w-layout-blockcontainer container-large user-review-container w-container">
                    <div class="review_list">
                        <ul>
                            <li>
                                <div class="user-review-slide">
                                    <div class="user-review-item">
                                        <div class="user-review-quote"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/vector.svg"
                                                loading="lazy" alt="Quote Icon" height="11" width="13"></div>
                                        <div class="user-review-star"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/frame_154.svg"
                                                loading="lazy" width="75" alt="Stars"></div>
                                        <p class="user-review-text">“This is the <strong> most visionary tool</strong> on the market. It easily integrates with our tools. I don’t need 5 people to run it (unlike other pieces of software).”</p>
                                        <div class="user-review-info">
                                            <h5 class="user-review-name">Neil F.</h5>
                                            <p class="user-review-text">Security and Audit Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="user-review-slide">
                                    <div class="user-review-item">
                                        <div class="user-review-quote"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/vector.svg"
                                                loading="lazy" alt="Quote Icon" height="11" width="13"></div>
                                        <div class="user-review-star"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/frame_154.svg"
                                                loading="lazy" width="75" alt="Stars"></div>
                                        <p class="user-review-text">Fantastic automated solution for compliance and cybersecurity posture. JupiterOne <strong>cuts down the work for audit evidence submission by 80%.</strong></p>
                                        <div class="user-review-info">
                                            <h5 class="user-review-name">Syed K.</h5>
                                            <p class="user-review-text">Security and Audit Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="user-review-slide">
                                    <div class="user-review-item">
                                        <div class="user-review-quote"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/vector.svg"
                                                loading="lazy" alt="Quote Icon" height="11" width="13"></div>
                                        <div class="user-review-star"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/frame_154.svg"
                                                loading="lazy" width="75" alt="Stars"></div>
                                        <p class="user-review-text">JupiterOne <strong> makes it possible for anyone to maintain compliance with SOC, PCI, HIPAA, </strong> and more. <br> Really comprehensive solution!</p>
                                        <div class="user-review-info">
                                            <h5 class="user-review-name">Jasmine H.</h5>
                                            <p class="user-review-text">Security Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="user-review-slide">
                                    <div class="user-review-item">
                                        <div class="user-review-quote"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/vector.svg"
                                                loading="lazy" alt="Quote Icon" height="11" width="13"></div>
                                        <div class="user-review-star"><img
                                                src="//res.cloudinary.com/spiralyze/image/upload/v1727784734/jupiterone/13006/frame_154.svg"
                                                loading="lazy" width="75" alt="Stars"></div>
                                        <p class="user-review-text"><strong>Great visibility into the cloud!</strong> Being able to query AWS resources lets us understand our environment, configurations, and compliance.</p>
                                        <div class="user-review-info">
                                            <h5 class="user-review-name">Morgan L.</h5>
                                            <p class="user-review-text">Compliance Analyst</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `);


    }
}

var bodyInterval13006 = setInterval(() => {
    if (document.querySelectorAll("body").length > 0) {
        clearInterval(bodyInterval13006);
        loadTestCode13006();
    }
}, 100);
