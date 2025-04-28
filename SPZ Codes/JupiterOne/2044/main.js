var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1724153261/JupiterOne/2044/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1724153261/JupiterOne/2044/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
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

function loadTestCode2044() {
  if (!document.querySelector("body").classList.contains("spz_t2044")) {
    document.querySelector("body").classList.add("spz_t2044");

    setTimeout(() => {
      if (document.querySelector('.home-hero > .container-large')) {
        document.querySelector('.home-hero > .container-large').insertAdjacentHTML('afterend', `
          <div class="new_hero">
            <div class="w-layout-blockcontainer container-large w-container">
              <div class="hero_detail">
                <h2>Proactively Secure and Improve
                    Asset Visibility with CAASM</h2>
                <p>Enhance your security and IT team's insight into cloud and on-premises assets</p>
              </div>
              <div class="hero_slider">
                <div class="splide" id="hero_slider">
                  <div class="splide__track">
                    <ul class="splide__list">
                      <li class="splide__slide">
                        <div class="slider_data spz_2044_assetAnalysis">
                          <a href="https://www.jupiterone.com/cyber-asset-attack-surface-management">
                            <h3>Asset Management</h3>
                            <picture>
                              <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275676.webp">
                              <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275676.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275673.webp" alt="Asset Management">                      
                            </picture>
                          </a>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="slider_data spz_2044_incidentResponse">
                          <a href="https://www.jupiterone.com/incident-response">
                            <h3>Incident Response</h3>
                            <picture>
                              <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275691.webp">
                              <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275691.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275692.webp" alt="Incident Response">                      
                            </picture>
                          </a>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="slider_data spz_2044_vulnerabilityManagement">
                          <a href="https://www.jupiterone.com/vulnerability-management">
                            <h3>Vulnerability Management</h3>
                            <picture>
                              <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275675.webp">
                              <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275675.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275674.webp" alt="Vulnerability Management">                      
                            </picture>
                          </a>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="slider_data spz_2044_exposureManagement">
                          <a href="https://www.jupiterone.com/continuous-threat-exposure-management">
                            <h3>Exposure Management</h3>
                            <picture>
                              <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275690.webp">
                              <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275690.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275689.webp" alt="Exposure Management">                      
                            </picture>
                          </a>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="slider_data spz_2044_continuousControlMonitoring">
                          <a href="https://www.jupiterone.com/continuous-controls-monitoring">
                            <h3 style="max-width:205px;">Continuous Controls Monitoring</h3>
                            <picture>
                              <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275693.webp">
                              <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275693.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2044/frame_1171275688.webp" alt="Continuous Control Monitoring">                      
                            </picture>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="hero_btn"><a class="spz_3007_v1 custom_btn" href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management">Get a Demo</a></div>
            </div>
          </div>
        `);

        const loadSplideSliderSPZ = function () {
        
        }

        loadJS_SPZ(splideJSURL, loadSplideSliderSPZ, document.body);




        function heroSplideSlider() {
          var setSplideInterVal = setInterval(function () {
            if (typeof Splide !== 'undefined') {
              clearInterval(setSplideInterVal);
              
              // Check if the viewport is less than or equal to 1024.98px and if the slider element exists
              if (window.matchMedia("(max-width: 1023.98px)").matches && document.querySelector('#hero_slider')) {
                // Check if Splide is not already initialized
                if (!document.querySelector('#hero_slider').classList.contains('is-initialized')) {
                  var splide = new Splide("#hero_slider", {
                    type: 'loop',
                    perPage: 5,
                    focus: 'center',
                    autoplay: false,
                    interval: 8000,
                    flickMaxPages: 5,
                    updateOnMove: true,
                    pagination: false,
                    throttle: 300,
                    variableWidth: true, // Similar to Slick's variable width
                    breakpoints: {
                      767: {
                        perPage: 1,
                        padding: '18%',
                        autoplay: true,
                      },
                      1023.98: {
                        perPage: 3,
                        padding: '3%',
                        autoplay: true,
                      },
                    },
                  });
        
                  // Mount Splide and add initialized class
                  splide.mount();
                  document.querySelector('#hero_slider').classList.add('is-initialized');
                }
              } else {
                // Unslick functionality (destroy the Splide instance)
                if (document.querySelector('#hero_slider').classList.contains('is-initialized')) {
                  var splideInstance = Splide.instances['#hero_slider']; 
                  splideInstance.destroy();
                  document.querySelector('#hero_slider').classList.remove('is-initialized');
                }
              }
            }
          }, 200);
        }
        
        heroSplideSlider();
        
        window.addEventListener("resize", function () {
					heroSplideSlider();
				});






        var heroSection = document.querySelector('.new_hero');
        document.querySelector('.new_hero').insertAdjacentHTML('beforebegin', '<div class="new_heroOuter"></div>');
        document.querySelector('.new_heroOuter').insertAdjacentElement('afterbegin', heroSection);

      }
    }, 100);

    //hidden value 
    const hiddenValueInterval = setInterval(function () {
      if (document.querySelector('[name=spiralyze_testing_hidden_field]')) {
        clearInterval(hiddenValueInterval);
        document.querySelector('[name=spiralyze_testing_hidden_field]').value = "#2044_home_variant";
      }

    }, 100);
  }
}

var bodyInterval2044 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval2044);
    loadTestCode2044();
  }
}, 100);
