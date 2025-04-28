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
// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/13004/code/style.css";
if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/13004/code/style.css"]')
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode13001() {
  if (!document.querySelector("body").classList.contains("spz_13004")) {
    document.querySelector("body").classList.add("spz_13004");

    // Variation Hidden Field Name
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]').length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll('input[name="spiralyze_testing_hidden_field"]')[0].value = 'variant_13004';
        }, 1000);
      }
    }, 100);
    // Variation Hidden Field Name over

    // hero section
    if (document.querySelector('.spz_13004 main')) {
      document.querySelector('.spz_13004 main').insertAdjacentHTML('afterbegin', `
            <div class="main_hero">
                <div class="auto_container">
                    <div class="main_heroInner">
                        <div class="hero_detail">
                        <h4>Cloud Security Posture Management</h4>
                        <h2>Actionable context into cloud risks</h2>
                        <p>Get complete visibility across all your cloud environments. Discover and map all cloud resources, understand asset relationships, and quickly identify, prioritize, and remediate critical risks.</p>
                        <div class="custom_btnOuter">
                            <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn spz_13004_v1 spz_13004_v1_hero">Get a Demo</a>
                        </div>
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/hero_interface_mob.webp">
                            <source media="(max-width: 1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/hero_interface_tab.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/interface_desktop.webp" alt="Dashboard Image">
                        </picture>	
                        </div>
                    </div>
                </div>
            </div>
            <div class="integrations">
                <div class="integrations_inner">
                    <h3>Cloud Service Provider Integrations</h3> 
                    <ul>
                        <li>
                            <picture>
                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/aws_mob.webp">
                                <source media="(max-width: 1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/aws_tab.webp">
                                <img class="awsLogo" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/aws_desktop.webp" alt="aws logo">
                            </picture>	
                        </li>
                        <li>
                            <picture>
                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/google_cloud_mob.webp">
                                <source media="(max-width: 1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/google_cloud_tab.webp">
                                <img class="googleCloudLogo" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/google_cloud_desktop.webp" alt="google cloud logo">
                            </picture>	
                        </li>
                        <li>
                            <picture>
                                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/ms_azure_mob.webp">
                                <source media="(max-width: 1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/ms_azure_tab.webp">
                                <img class="msAzureLogo" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/ms_azure_desktop.webp" alt="ms azure logo">
                            </picture>	
                        </li>
                    </ul>
                </div>
            </div>
            <section id="whyAsset" class="section-problem why_asset">
            <div class="w-layout-blockcontainer container-large w-container">
                <div class="lm-problem-content-wrapper w-row">
                        <div class="w-col w-col-6 w-col-stack">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/image_1_desktop.webp" loading="lazy" width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 96vw, 39vw" alt="Why is asset visibility important for cloud security Image">
                        </div>
                        <div class="w-col w-col-6 w-col-stack">
                            <div class="lm-problem-content">
                                <h4 class="section-eyebro-text">Why is asset visibility important for cloud security?</h4>
                                <h3 class="lm-problem-title">Security teams cannot protect all their assets without visibility into their entire attack surface</h3>
                                <p class="lm-problem-text">Although CSPM tools provide great information into cloud environments, they only cover one piece of an attack surface. As a result, security teams can’t see how incidents connect to the rest of their assets.</p>
                                <p class="lm-problem-text">As a result, teams experience:</p>
                                <ul role="list" class="list-with-icon w-list-unstyled">
                                    <li class="list-with-icon-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1723791060/JupiterOne/13004/indent-increase.svg" loading="lazy" width="32" height="32" alt="Eye Icon" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Lack of visibility</strong> into all the assets across their multi-cloud, on-prem, and SaaS environments, and how they relate.
                                        </div>
                                    </li>
                                    <li class="list-with-icon-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1723791060/JupiterOne/13004/History.svg" loading="lazy" height="32" alt="Connection Icon" width="32" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Slower remediation</strong> from manually searching multiple tools to find details about threats and prioritize them.
                                        </div>
                                    </li>
                                    <li class="list-with-icon-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1723791060/JupiterOne/13004/alert-triangle.svg" loading="lazy" height="32" alt="Alert Icon" width="32" class="list-with-icon-item-image">
                                        <div>
                                            <strong>Increased risk</strong> due to not being able to identify how gaps in cloud security affect code repos, SaaS apps, and more.
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
                        <h2 class="section-title">JupiterOne for CSPM</h2>
                        <h4 class="section-subtitle">Collect, connect, analyze, and secure all your cloud assets. </h4>
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
                                            <span class="sliderNav desktopOnly">Relationship Mapping </span>
                                            <span class="sliderNav slideNumber">2</span>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Query</span>
                                            <span class="sliderNav slideNumber">3</span>
                                        </div>
                                    </li>
                                    <li class="splide__slide last-child">
                                        <div class="child">
                                        <div class="splide__progress"><div class="splide__progress__bar"></div></div>
                                            <span class="sliderNav desktopOnly">Dashboards</span>
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
                                                    <p>Complete visibility of your multi-cloud assets across AWS, Google Cloud, and Azure.</p>
                                                    <p>Plus, view device, user, app, network, and code repo asset data with 200+ integrations.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_13004_v1 spz_13004_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/asset_inventory_2.webp">
                                                        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/asset_inventory_1.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/asset_inventory.webp" alt="Asset Inventory">
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
                                                    <p>Map relationships between assets, owners, endpoints, code repos, and security controls.</p>
                                                    <p>See the blast radius of all the assets affected by security incidents. Identify downstream vulnerabilities and proactively protect at-risk assets.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_13004_v1 spz_13004_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/relationship_mapping_1.webp">
                                                        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/frame_1171275638.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/frame_1171275638.webp" alt="Relationship Mapping">
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="solutionContent">
                                            <div class="ContentInner">
                                                <div class="solutionText">
                                                    <h5>Query</h5>
                                                    <p>Get quick answers to questions about your assets across multiple cloud providers at once. Current vulnerabilities, access privileges, recent changes, and more.</p>
                                                    <p>Select queries from a pre-built library or create your own. Identify security gaps.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_13004_v1 spz_13004_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/query.webp">
                                                        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/query.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/frame_1171275641.webp" alt="Query">
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="splide__slide">
                                        <div class="solutionContent">
                                            <div class="ContentInner">
                                                <div class="solutionText">
                                                    <h5>Dashboards</h5>
                                                    <p>Pre-built dashboards to view asset data, access levels, and risks at a glance. Customize with widgets based on your most frequently used queries.</p>
                                                    <p>Instantly get alerts and notify the right teams of threats.</p>
                                                    <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button spz_13004_v1 spz_13004_v1_features">Get a Demo</a>
                                                </div>
                                                <div class="imgWrapper">
                                                    <picture>
                                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/dashboards_1.webp">
                                                        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/frame_1171275639.webp">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/frame_1171275639.webp" alt="Dashboards">
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
            </div>`);
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

    // how it works section
    if (document.querySelector('#solution')) {
      document.querySelector('#solution').insertAdjacentHTML('afterend', `<div class="how_itWOrks">
                <div class="auto_container">
                    <div class="how_itWorksInner">
                        <div class="how_itWOrks_heading">
                            <h2>How It Works</h2>
                        </div>
                        <div class="how_itWorks_list">
                            <ul>
                                <li>
                                    <div class="how_itWorksData">
                                        <figure><img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/complete_visibility.webp" alt="All from a single platform"></figure>
                                        <h4>All from a single platform</h4>
                                        <h3>Complete Visibility</h3>
                                        <p>Get complete visibility across your entire infrastructure. Cloud service providers. Plus devices, code repos, users, and more.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="how_itWorksData">
                                        <figure><img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/see_asset_relationships.webp" alt="Monitor attack surface"></figure>
                                        <h4>Monitor attack surface</h4>
                                        <h3>See Asset Relationships</h3>
                                        <p>Quickly analyze your assets. See the blast radius of security incidents. Identify security gaps and compliance gaps.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="how_itWorksData">
                                        <figure><img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/secure_your_attack_surface.webp" alt="Remediate faster"></figure>
                                        <h4>Remediate faster</h4>
                                        <h3>Secure Your Attack Surface</h3>
                                        <p>Prioritize risks based on potential impact on your critical assets. Auto-send remediation steps directly to teams. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="custom_btnOuter">
                            <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn active spz_13004_v1 spz_13004_v1_how_it_works">Get a Demo</a>
                        </div>
                    </div>
                </div>
            </div>`);

    }

    document.querySelector('.section-logo-loop .section-title').textContent = "Integrations";
    if (document.querySelector('.section-logo-loop')) {
      document.querySelector('.section-logo-loop').insertAdjacentHTML('afterend', `<div class="review_section">
                <div class="auto_container">
                    <div class="review_inner">
                        <div class="review_grid">
                            <div class="review_item">
                                <div class="user-review-item">
                                    <div class="user-review-quote">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_1.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                                    </div>
                                    <div class="user-review-star">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                                    </div>
                                    <p class="user-review-text">This is the most visionary tool on the market. It easily integrates with our tools. <strong>I don’t need 5 people to run it </strong> (unlike other pieces of software).</p>
                                    <div class="user-review-info">
                                        <h5 class="user-review-name">Neil F.</h5>
                                        <p class="user-review-text">Security and Audit Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review_item">
                                <div class="user-review-item">
                                    <div class="user-review-quote">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_2.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                                    </div>
                                    <div class="user-review-star">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                                    </div>
                                    <p class="user-review-text">
                                        Fantastic automated solution for compliance and cybersecurity posture. JupiterOne cuts down the work for evidence submission for audits by 80%.
                                    </p>
                                    <div class="user-review-info">
                                        <h5 class="user-review-name">Syed K.</h5>
                                        <p class="user-review-text">Security and Audit Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review_item">
                                <div class="user-review-item">
                                    <div class="user-review-quote">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_2.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                                    </div>
                                    <div class="user-review-star">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                                    </div>
                                    <p class="user-review-text">JupiterOne makes it possible for anyone to maintain compliance with SOC, PCI, HIPAA, and more. Really comprehensive solution!</p>
                                    <div class="user-review-info">
                                        <h5 class="user-review-name">Jasmine H.</h5>
                                        <p class="user-review-text">Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
    }

    document.querySelector('.how_itWOrks').after(document.querySelector('.section-bubble-tags'));

    if (document.querySelector('.spz_13004 .section-logo-loop')) {
      document.querySelector('.spz_13004 .section-logo-loop').insertAdjacentHTML('beforeBegin', `<section class="section-home-features featuresSection">
                <div class="w-layout-blockcontainer container-large w-container">
                    <h2 class="home-feature-title">Benefits</h2>
                    <div class="w-row">
                        <div class="w-col w-col-5 w-col-stack">
                            <div class="accordion-items">
                                <div data-index="1" class="accordion-item active">
                                    <div class="accordion-title-wrapper">
                                        <h4 class="accordion-title">Simplify complex cloud environments</h4>
                                        <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/64ccd4a4f619df844d5ed5c0_green-arrow.svg"
                                            loading="lazy" width="30" height="30" alt="Dropdown Arrow" class="accordion-toggle-arrow">
                                    </div>
                                    <div class="accordion-content" style="height: 203px;">
                                        <p class="accordion-text">JupiterOne consolidates and normalizes asset data across complex, multi-cloud environments. Run a single query to search for information from multiple cloud providers, applications, and services. Eliminate hours of manual effort and get a holistic view of your cyber assets and cloud security posture.</p>
                                        <br>
                                        <picture>
                                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/1_1.webp">
                                            <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/1.webp">                              
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/1.webp" alt="Simplify complex cloud environments">
                                        </picture>		
                                    </div>
                                </div>
                                <div data-index="2" class="accordion-item">
                                    <div class="accordion-title-wrapper">
                                        <h4 class="accordion-title">Connect cloud assets to your cyber universe</h4>
                                        <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/64ccd4a4f619df844d5ed5c0_green-arrow.svg"
                                            loading="lazy" width="30" height="30" alt="Dropdown Arrow"
                                            class="accordion-toggle-arrow">
                                    </div>
                                    <div class="accordion-content" style="height: 203px;">
                                        <p class="accordion-text">JupiterOne offers complete coverage for all of your cloud entities. We connect the dots between assets, users, endpoints, code repos, and more to give your teams a full understanding of their environments.</p>
                                        <br>
                                        <picture>
                                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/2_1.webp">
                                            <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/2.webp">                              
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/2.webp" alt="Connect cloud assets to your cyber universe">
                                        </picture>		
                                    </div>   
                                </div>
                                <div data-index="3" class="accordion-item">
                                    <div class="accordion-title-wrapper">
                                        <h4 class="accordion-title">Eliminate cloud resource misconfigurations & risk</h4>
                                        <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/64ccd4a4f619df844d5ed5c0_green-arrow.svg"
                                            loading="lazy" width="30" height="30" alt="Dropdown Arrow"
                                            class="accordion-toggle-arrow">
                                    </div>
                                    <div class="accordion-content" style="height: 203px;">
                                        <p class="accordion-text">JupiterOne automatically creates and classifies resource entries to continuously assess, audit, and evaluate configurations of your cloud resources. We detect compliance drift and reduce overall risk for your cloud-native efforts.</p>
                                        <br>
                                        <picture>
                                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/3_1.webp">
                                            <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/3.webp">                              
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/3.webp" alt="Eliminate cloud resource misconfigurations & risk">
                                        </picture>		
                                    </div>
                                </div>
                                <div data-index="4" class="accordion-item">
                                    <div class="accordion-title-wrapper">
                                        <h4 class="accordion-title">Control overly permissive access rights to your cloud</h4>
                                        <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/64ccd4a4f619df844d5ed5c0_green-arrow.svg"
                                            loading="lazy" width="30" height="30" alt="Dropdown Arrow"
                                            class="accordion-toggle-arrow">
                                    </div>
                                    <div class="accordion-content" style="height: 203px;">
                                        <p class="accordion-text">Manage permission reviews of identities within your organization with pre-defined access policies, rules, and alerting. Control everything from new and former employee accounts, partners, and third-party access with JupiterOne.</p>
                                        <br>
                                        <picture>
                                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/4_1.webp">
                                            <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/4.webp">                              
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/4.webp" alt="Control overly permissive access rights to your cloud">
                                        </picture>		
                                    </div>
                                </div>
                                <div data-index="5" class="accordion-item accordion-last-item">
                                    <div class="accordion-title-wrapper">
                                        <h4 class="accordion-title">Leverage built-in automation, benchmarks, and policies</h4>
                                        <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/64ccd4a4f619df844d5ed5c0_green-arrow.svg"
                                            loading="lazy" width="30" height="30" alt="Dropdown Arrow"
                                            class="accordion-toggle-arrow">
                                    </div>
                                    <div class="accordion-content" style="height: 203px;">
                                        <p class="accordion-text">Maintain continuous compliance and meet the highest industry standards with pre-built frameworks including CIS Benchmarks, NIST, SOC 2, PCI DSS, and more. Automate security workflows with intelligent rules and alerts. Trigger ticket creation, communications, and actions to help you discover new issues.</p>
                                        <br>
                                        <picture>
                                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/5.webp">
                                            <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/5_1.webp">                              
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/5_1.webp" alt="Leverage built-in automation, benchmarks, and policies">
                                        </picture>		
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-col w-col-7 w-col-stack">
                            <img class="accordion-img active" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/powerful_search.webp" width="650" data-index="1" alt="Simplify complex cloud environments">
                            <img class="accordion-img" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/image.webp" width="650" alt="Connect cloud assets to your cyber universe" data-index="2">
                            <img class="accordion-img" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/dashboards_and_alerts.webp" width="650" alt="Eliminate cloud resource misconfigurations & risk" data-index="3">
                            <img class="accordion-img" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/contioues.webp" width="650" alt="Control overly permissive access rights to your cloud" data-index="4">
                            <img class="accordion-img" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13004/graph.webp" width="650" alt="Leverage built-in automation, benchmarks, and policies" data-index="5">                        
                        </div>
                    </div>
                </div>
            </section>`);
    }

    // Feature Section JS
    document.querySelector('.accordion-items').addEventListener("click", function (event) {
      if (event.target.closest(".accordion-title-wrapper")) {
        subTitleClick(event.target.closest(".accordion-item"))
      }
    });
    // Feature Section JS End


    // All required functions
    const subTitleClick = (target) => {
      if (!target.classList.contains("active")) {
        for (let i = 0; i < document.querySelectorAll('.accordion-item').length; i++) {
          document.querySelectorAll('.accordion-item')[i].classList.remove("active");
          document.querySelectorAll('.accordion-item')[i].querySelector('.accordion-content').removeAttribute("style");
        }
        target.classList.add("active");
        const originalHeight = target.querySelector('.accordion-content').offsetHeight;
        target.querySelector('.accordion-content').style.height = "0px";
        setTimeout(function () {
          target.querySelector('.accordion-content').style.height = originalHeight + "px";
        }, 5)
        for (let i = 0; i < document.querySelectorAll('.accordion-img').length; i++) {
          document.querySelectorAll('.accordion-img')[i].classList.remove("active");
        }
        document.querySelectorAll('.accordion-img')[target.getAttribute("data-index") - 1].classList.add("active");
      }
    }

    const adjustCarouselHeight = () => {
      document.querySelector('.accordion-content').style.height = "auto";
      const originalHeight = document.querySelector('.accordion-content').offsetHeight;
      document.querySelector('.accordion-content').style.height = originalHeight + "px";
    }

    document.body.onresize = function () {
      if (document.querySelector('.accordion-content')) {
        adjustCarouselHeight();
      }
    }
    document.body.onload = function () {
      setTimeout(function () {
        if (document.querySelector('.accordion-content')) {
          adjustCarouselHeight();
        }
      }, 300)
    }

    if (document.querySelector('.section-bubble-tags h6')) {
      document.querySelector('.section-bubble-tags h6').textContent = "JupiterOne secures your entire digital infrastructure";
    }
    if (document.querySelector('.section-title.section-blue-banner2-title')) {
      document.querySelector('.section-title.section-blue-banner2-title').textContent = "See how you can do more than cloud security with JupiterOne";
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode13001();
  }
}, 100);