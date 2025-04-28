var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1722346365/JupiterOne/13003/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1722346365/JupiterOne/13003/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode13003() {
  if (!document.querySelector("body").classList.contains("spz_t13003")) {
    document.querySelector("body").classList.add("spz_t13003");

    //hidden value 
    const hiddenValueInterval = setInterval(function () {
      if (document.querySelector('[name=spiralyze_testing_hidden_field]')) {
        clearInterval(hiddenValueInterval);
        document.querySelector('[name=spiralyze_testing_hidden_field]').value = "variant_13003";
      }

    }, 100);

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
    const gsapJsURL = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
    const vimeoPlayer = "https://player.vimeo.com/api/player.js";
    loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
    loadCSS_SPZ(splideCSSURL);
    let autoAccordionInterval;
    let splide;
    let autoAccordionTimer = 0;
    const autoAccordionTimeout = 5000;

    // hero section
    document.querySelector('.main-wrapper').insertAdjacentHTML('afterbegin', `
    <div class="hero_section">
        <div class="auto_container">
            <div class="hero_inner">
              <div class="hero_detail">
                  <h3>Continuous Threat Exposure Management</h3>
                  <h1>Focus on Exposures with the Highest Business Impact</h1>
                  <p>Proactively target, prioritize and remediate <br> exploitable vulnerabilities that are critical
                      threats to your business.</p>
                  <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="button-tile w-button">Get a Demo</a>
              </div>
              <div class="my_slider">
                  <div class="my_slide active" id="slide1">
                      <div class="slide_data">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/1m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/1t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/1.webp" alt="Insights">
                        </picture>
                    </div>
                  </div>
                  <div class="my_slide left" id="slide2">
                      <div class="slide_data">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/3m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/3t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/3.webp" alt="Assets">
                        </picture>
                    </div>
                  </div>
                  <div class="my_slide right" id="slide3">
                    <div class="slide_data">
                      <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/2m.webp">
                          <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/2t.webp">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/2.webp" alt="Exposures">
                      </picture>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    `);
    let currentSlide = 1;

    function showNextSlide() {
      const slide1 = document.getElementById('slide1');
      const slide2 = document.getElementById('slide2');
      const slide3 = document.getElementById('slide3');

      if (currentSlide === 1) {
        slide1.className = 'my_slide right';
        slide2.className = 'my_slide active';
        slide3.className = 'my_slide left';
        currentSlide = 2;
      } else if (currentSlide === 2) {
        slide1.className = 'my_slide left';
        slide2.className = 'my_slide right';
        slide3.className = 'my_slide active';
        currentSlide = 3;
      } else {
        slide1.className = 'my_slide active';
        slide2.className = 'my_slide left';
        slide3.className = 'my_slide right';
        currentSlide = 1;
      }
    }

    setInterval(showNextSlide, 8000);

    setInterval(showNextSlide, 8000);

    // section2 Slider
    if (!document.querySelector('.section2_13003')) {
      document.querySelector('.hero_section').insertAdjacentHTML('afterend', `
        <section class="section2_13003" data-testid="component-wrapper__container">
          <div class="auto_container">
              <div class="section2_inner">
                  <div class="wrapper">
                      <div class="title">Stay ahead of emerging vulnerabilities with the context and business impact needed to prioritize effectively and minimize your exposure</div>
                      <div class="accordion-wrapper">
                          <div class="text">
                              <div class="child active" data-index="1">
                                <div class="child_inner">
                                    <div class="title">
                                        <div class="text">
                                            <span>Attack Surface Assessment</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                          <path d="M11 0.256836V22.1516" stroke="#00BFA5" stroke-width="2.94737"/>
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Understand your external attack surface from an attacker's perspective and map internal assets to gain a holistic view of your entire attack surface.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_assessmentm.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/frame_1171275676.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_assessmentm.webp"  alt="Attack Surface Assessment" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="2">
                                <div class="child_inner">
                                    <div class="title">
                                        <div class="text">
                                            <span>Detect Exposures</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                          <path d="M11 0.256836V22.1516" stroke="#00BFA5" stroke-width="2.94737"/>
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Continuous real-time discovery and monitoring of your attack surface for assets, vulnerabilities, misconfigurations, and other risks.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/detect_exposuresm.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/frame_1171275753.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/detect_exposuresm.webp" alt="Detect Exposures" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="3">
                                <div class="child_inner">
                                    <div class="title">
                                        <div class="text">
                                            <span>Modern Prioritization</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                          <path d="M11 0.256836V22.1516" stroke="#00BFA5" stroke-width="2.94737"/>
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Traditional vulnerability scores aren’t enough anymore. Focus on exploitability, existing security controls, risk tolerance, and business criticality to prioritize remediation. </p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/modern_prioritizationm.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/modern_prioritizationt.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/modern_prioritizationm.webp" alt="Modern Prioritization" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="4">
                                <div class="child_inner">
                                    <div class="title">
                                        <div class="text">
                                          <span>Exploitability Findings</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                          <path d="M11 0.256836V22.1516" stroke="#00BFA5" stroke-width="2.94737"/>
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                            <p>Identify exploitable vulnerabilities, assess impact, and visualize attack paths in your environment with validated findings.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/exploitability_findingstm.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/exploitability_findingst.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/exploitability_findingstm.webp" alt="Exploitability Findings" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                              <div class="child" data-index="5">
                                <div class="child_inner">
                                    <div class="title">
                                        <div class="text">
                                            <span>Report, Alert & Remediate</span>
                                        </div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                        <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                          <path d="M11 0.256836V22.1516" stroke="#00BFA5" stroke-width="2.94737"/>
                                          <path d="M0.0527344 11.2041L21.9475 11.2041" stroke="#00BFA5" stroke-width="2.94737"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="text">
                                        <p>Get instant alerts if critical assets are exposed and take action on potential attack paths with recommended responses and automated workflows.</p>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/report_alert__remediatem.webp">
                                    <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/report_alert__remediatet.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/report_alert__remediatem.webp"alt="Report, Alert & Remediate" width="688" height="404" loading="lazy">
                                </picture>
                              </div>
                          </div>
                          <div class="image">
                              <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_assessment.webp" alt="Attack Surface Assessment" width="632" height="464" loading="lazy">

                              <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_assessment.webp" alt="Attack Surface Assessment" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/detect_exposures.webp" alt="Detect Exposures" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/modern_prioritization.webp" alt="Modern Prioritization" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/exploitability_findings.webp" alt="Exploitability Findings" width="632" height="464" loading="lazy">
                              <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/report_alert__remediate.webp" alt="Report, Alert & Remediate" width="632" height="464" loading="lazy">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    `);
      var section2AccordianWrapper = document.querySelector(".section2_13003 .accordion-wrapper > .text");
      if (!section2AccordianWrapper.classList.contains('spz-click-registered')) {
        section2AccordianWrapper.classList.add('spz-click-registered');
        section2AccordianWrapper.addEventListener("click", function (e) {
          if (
            e.target.closest(".title") &&
            !e.target.closest(".child").classList.contains("active") &&
            !document.querySelector(".section2_13003 .accordion-wrapper .animate")
          ) {
            // remove active
            const prevElement = document.querySelector(".section2_13003 .accordion-wrapper .text .child.active");
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
            var accordionChild = document.querySelector(".section2_13003 .accordion-wrapper .child.no-border");
            if (accordionChild) {
              accordionChild.classList.remove("no-border");
            }
            if (e.target.closest(".child").getAttribute("data-index") != "1") {
              document
                .querySelector(
                  '.section2_13003 .accordion-wrapper .child[data-index="' +
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
            document.querySelector(".section2_13003 .accordion-wrapper .image .hero.active").classList.remove("active");
            document
              .querySelector(
                '.section2_13003 .accordion-wrapper .image .hero[data-index="' +
                e.target.closest(".child").getAttribute("data-index") +
                '"]'
              )
              .classList.add("active");
            //change scroll position
            if (
              window.matchMedia("(max-width: 1079.98px)").matches &&
              document.querySelector(
                ".section2_13003 .accordion-wrapper.stop"
              )
            ) {
              setTimeout(function () {
                var scroll = new SmoothScroll();
                var targetElement = document.querySelector(
                  ".section2_13003 .accordion-wrapper .child.active"
                );
                var targetPosition = targetElement.getBoundingClientRect().y + scrollY - 70; // Subtract 70px for the offset
                scroll.animateScroll(targetPosition, null, {
                  easing: "easeOutQuad",
                });
              }, 302);
            }
          }
        });
      }
    }

    //autoplay accordion
    if (!autoAccordionInterval) {
      let autoAccordionTimer = 0;
      const autoAccordionTimeout = 5000;
      autoAccordionInterval = setInterval(function () {
        var accordionWrapperEle = document.querySelector(".section2_13003 .accordion-wrapper");
        if (!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')) {
          return;
        }
        if (autoAccordionTimer > autoAccordionTimeout) {
          let curIndex = parseInt(
            document
              .querySelector(".section2_13003 .accordion-wrapper .child.active")
              .getAttribute("data-index")
          );
          curIndex < 5 ? curIndex++ : curIndex = 1;
          document
            .querySelector(
              '.section2_13003 .accordion-wrapper .child[data-index="' +
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
      var accordionWrapperEle = document.querySelector(".section2_13003 .accordion-wrapper");
      accordionWrapperEle.classList.add("stop");
    }

    function startSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".section2_13003 .accordion-wrapper");
      accordionWrapperEle.classList.remove("stop");
    }
    document.querySelector(".section2_13003 .accordion-wrapper .image").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".section2_13003 .accordion-wrapper > .text").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".section2_13003 .accordion-wrapper .image").addEventListener("mouseleave", startSection2AccordionAutoPlay);
    document.querySelector(".section2_13003 .accordion-wrapper > .text").addEventListener("mouseleave", startSection2AccordionAutoPlay);
    const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(".section2_13003 .accordion-wrapper .child .title > .text span");
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

    // grid section
    document.querySelector('.section2_13003').insertAdjacentHTML('afterend', `
      <div class="grid_section">
        <div class="auto_container">
            <div class="grid_inner">
                <div class="grid_title">
                    <h2>CTEM with JupiterOne and watchTowr your team can</h2>
                </div>
                <div class="grid_container">
                    <div class="grid_item item1">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/remediate_faster_m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/remediate_faster_t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/remediate_faster.webp" alt="Remediate Faster">                    
                        </picture>
                        <h3>Remediate Faster</h3>
                        <p>View a map of the relationships between assets, owners, and security controls. Rapidly prioritize and fix vulnerabilities impacting your environment</p>
                    </div>
                    <div class="grid_item item2">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/end_tedious_work_m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/end_tedious_work_t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/end_tedious_work.webp" alt="End Tedious Work">                  
                        </picture>
                        <h3>End Tedious Work</h3>
                        <p>Reduce manual processes from your attack surface and asset management programs</p>
                    </div>
                    <div class="grid_item item3">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/quantify_risk_m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/quantify_risk_t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/quantify_risk.webp" alt="Quantify RiskQuantify Risk">                  
                        </picture>
                        <h3>Quantify Risk</h3>
                        <p>Improve your resilience against dynamic shifts in the threat landscape that impact both cyber and financial risks</p>
                    </div>
                    <div class="grid_item item4">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_from_all_angles_m.webp">
                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_from_all_angles_t.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13003/attack_surface_from_all_angles.webp" alt="Attack Surface from All Angles">                  
                        </picture>
                        <h3>Attack Surface from All Angles</h3>
                        <p>See everything that matters, inside and out.</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    `);

    // video section
    document.querySelector('.grid_section').insertAdjacentHTML('afterend', `
     <div class="video_section">
        <div class="auto_container">
            <div class="video_inner">
                <div class="video_title">
                    <h2>JupiterOne Platform for Continuous Threat Exposure Management</h2>
                </div>
                <div class="video_main">
                    <div class="video_overly">
                        <a href="javascript:void(0);" class="play_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                                <path d="M16.114 10.9262C15.9014 10.8002 15.6593 10.7327 15.4122 10.7305C15.1651 10.7284 14.9219 10.7916 14.7071 10.9139C14.4924 11.0362 14.3139 11.2132 14.1897 11.4268C14.0655 11.6404 14 11.8831 14 12.1302V44.5496C14 44.7967 14.0655 45.0394 14.1897 45.253C14.3139 45.4666 14.4924 45.6436 14.7071 45.7658C14.9219 45.8881 15.1651 45.9514 15.4122 45.9493C15.6593 45.9471 15.9014 45.8796 16.114 45.7536L43.4677 29.5439C43.6766 29.4199 43.8496 29.2437 43.9698 29.0326C44.09 28.8216 44.1533 28.5828 44.1533 28.3399C44.1533 28.097 44.09 27.8582 43.9698 27.6471C43.8496 27.436 43.6766 27.2599 43.4677 27.1359L16.114 10.9262Z" fill="white" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <iframe id="vimeo-video" src="https://player.vimeo.com/video/995167905?autoplay=1&muted=1&controls=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            </div>
        </div>
      </div> 
    `);

    loadJS_SPZ(vimeoPlayer, function () { }, document.body);
    function playVideo() {
      var iframe = document.getElementById('vimeo-video');
      var player = new Vimeo.Player(iframe);

      player.setMuted(false);
      player.play().then(function () {
        console.log('Video playing');
      }).catch(function (error) {
        console.error('Error playing the video:', error);
      });
    }
    document.querySelector('.video_overly').style.display = 'none';
    playVideo();
    // document.addEventListener('click', function(e) {
    //   if (e.target.closest('.play_btn')) {
    //     document.querySelector('.video_overly').style.display = 'none';
    //     playVideo();
    //   }
    // });

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    setTimeout(() => {
      loadTestCode13003();
    }, 1000);
  }
}, 100);