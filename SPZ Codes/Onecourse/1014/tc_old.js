console.log('SPZ 1014 TC');

function run1014TestTC() {
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


  // function isDesktop() {
  //     return window.innerWidth >= 1024;
  // }


  function resizeChanges() {
    if (isInPageList()) {
      if (window.innerWidth >= 1024) {
        if (document.querySelector('.spz_1007_v1 [class$="__render-components"] > div')) {
          document.querySelector('.spz_1007_v1 [class$="__render-components"] > div').classList.add('awr-hero');
        }

        // if (window.location.href === "https://www.awrusa.com/" || window.location.href.includes("?_vis_preview_data")) {
        //   const heading = document.querySelector('.awr-rich-text h2');
        //   if (heading && !document.querySelector('.spz_subheading_two')) {
        //     heading.insertAdjacentHTML('afterend', `<span class="spz_subheading_two">Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7 phone support.</span>`);
        //     // heading.textContent = "Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7.";
        //   }
        // }

        const heading = document.querySelector('.awr-rich-text h2');
        if (heading && !document.querySelector('.spz_subheading_two')) {
          heading.insertAdjacentHTML('afterend', `<span class="spz_subheading_two">Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7 phone support.</span>`);
          // heading.textContent = "Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7.";
        }


        // document.querySelector('.awr-rich-text h2').textContent = `Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7.`;
        var checkEle = setInterval(() => {
          if (document.querySelector('.awr-hero')) {
            clearInterval(checkEle);
            document.querySelector('.awr-hero').classList.remove('bg-white');
            document.querySelector('.awr-hero').classList.add('spz-bg-awr-offWhite');
            if (document.querySelector('.awr-rich-text')) {
              document.querySelector('.awr-rich-text').parentElement.classList.add('awr-hero__text-panel', 'awr-hero__text-panel--left');
            }
            document.querySelector('.awr-hero.spz-bg-awr-offWhite .awr-hero__text-panel--left').nextElementSibling.classList.add('awr-hero__image-panel--full-bleed', 'awr-hero__image-panel');
            if (!document.querySelector('.awr-hero__image-panel--full-bleed picture') && document.querySelector('.awr-hero__image-panel--full-bleed')) {
              document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture><source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275834.webp" type="image/webp"><source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275751.webp" type="image/webp"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_6.webp" alt="awr homepage redesign" class="awr-hero__image"></picture>`);
            } else {
              if (document.querySelector('.awr-hero__image-panel--full-bleed')) {
                document.querySelector('.awr-hero__image-panel--full-bleed picture').remove();
                document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture><source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275834.webp" type="image/webp"><source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275751.webp" type="image/webp"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_6.webp" alt="awr homepage redesign" class="awr-hero__image"></picture>`);
              }
            }
            if (document.querySelector('.spz-banner-tags')) {
              document.querySelector('.spz-banner-tags').remove();
            }
            updateButtonText();
          }
        }, 100);
      } else {
        if (!document.querySelector('.spz-banner-tags')) {
          if (isInPageList()) {
            const heading = document.querySelector('.awr-rich-text h2');
            if (heading) {
              heading.insertAdjacentHTML('afterend', `<ul class="spz-banner-tags"><li>Water</li><li>Sewer</li><li>Gas</li><li>Electric</li><br class="desktop-break"><li>Heating & Cooling</li><li>Appliances</li><li>Plumbing</li></ul>`);
            }
          }
          // document.querySelector('.awr-rich-text h2').insertAdjacentHTML('afterend', `<ul class="spz-banner-tags"><li>Water</li><li>Sewer</li><li>Gas</li><li>Electric</li><br class="desktop-break"><li>Heating & Cooling</li><li>Appliances</li><li>Plumbing</li></ul>`);
        }
        var checkEle = setInterval(() => {
          if (document.querySelector('.awr-hero')) {
            clearInterval(checkEle);
            document.querySelector('.awr-hero').classList.remove('bg-white');
            document.querySelector('.awr-hero').classList.add('spz-bg-awr-blue');
            document.querySelector('.awr-hero.spz-bg-awr-blue .awr-hero__text-panel--left').nextElementSibling.classList.add('awr-hero__image-panel--full-bleed', 'awr-hero__image-panel');
            if (!document.querySelector('.awr-hero__image-panel--full-bleed picture') && document.querySelector('.awr-hero__image-panel--full-bleed')) {
              document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture>
                      <source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275835.webp" type="image/webp">
                      <source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275828.webp" type="image/webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_7.webp" alt="awr homepage redesign" class="awr-hero__image">
                  </picture>`);
            } else {
              if (document.querySelector('.awr-hero__image-panel--full-bleed')) {
                document.querySelector('.awr-hero__image-panel--full-bleed picture').remove();
                document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture>
                          <source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275835.webp" type="image/webp">
                          <source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275828.webp" type="image/webp">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_7.webp" alt="awr homepage redesign" class="awr-hero__image">
                      </picture>`);
              }
            }
          }
        }, 100);
      }
    }
  }

  function updateButtonText() {
    const btnTextEl = document.querySelector('.spz_1007_v1 form.awr-find-your-protection-plan__wrapper > button .awr-find-your-protection-plan__call-to-action p');
    if (btnTextEl && btnTextEl.textContent !== 'See Pricing') {
      btnTextEl.textContent = 'See Pricing';
    }
  }

  function heroBannerMainV1() {
    if (isInPageList()) {
      document.body.classList.add('spz_1007_v1');
      const heroInterval = setInterval(() => {
        if (document.querySelector('.spz_1007_v1 [class$="__render-components"] > div')) {
          clearInterval(heroInterval);
          document.querySelector('.spz_1007_v1 [class$="__render-components"] > div').classList.add('awr-hero');
          document.querySelector('.awr-hero').classList.remove('bg-white');
          document.querySelector('.awr-hero').classList.add('spz-bg-awr-offWhite');
        }


        document.querySelector('.awr-rich-text').parentElement.classList.add('awr-hero__text-panel', 'awr-hero__text-panel--left');

        if (document.querySelector('.spz_1007_v1 .awr-hero')) {
          document.querySelector('.awr-rich-text h1').innerHTML = `Protect your home against unexpected repairs`;


          if (!document.querySelector('.spz1008_testimonialSlider_v1')) {
            document.querySelector('body.spz_1007_v1 .awr-stats-banner').insertAdjacentHTML('afterend', `<div class="spz1008_testimonialSlider_v1">
								  <div class="googleRatings">
								  	<picture>
								  		<source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1756300981/oncourse/1007/frame_1171276014.svg">
								  		<source media="(max-width:1440px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1756300811/oncourse/1007/frame_1760.svg">
								  		<img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300811/oncourse/1007/frame_1760.svg" alt="google ratings">
								  	</picture>
								  </div>
								  <div class="spz1008_testimonialSlider_outer swiper hide-gradient">
								    <div class="swiper-wrapper">
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">We were grateful for the service you provided us recently on a bitterly cold day. We got assistance with our water/sewer line backup in 30 minutes after we filed a claim. Thank you for your speedy service.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Rachel S.</div>
								        </div>
								      </div>
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">Our sewer line backed up and we feared family from out of town would have to leave. A knowledgeable technician arrived in 24 hours on Christmas Day and resolved the problem.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Lynn G.</div>
								        </div>
								      </div>
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">AWR’s program is a lifesaver. I recently had a water leak. At first I panicked. Then I remembered I had AWR. All it took was a phone call, and within 3 hours a plumber arrived and fixed the problem.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Kathy F.</div>
								        </div>
								      </div>
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">I have sewer and water line protection, and they were lifesavers when my sewer line clogged. What would have cost $500+ to fix was fully covered, and the plumber arrived in 2 hours! Highly recommend.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Kierra B.</div>
								        </div>
								      </div>
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">AWR dispatched a technician to my house as soon as possible. He ran into additional problems, and it took over 2.5 hours to clear my line. No extra charges, just peace of mind protection.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Debra M.</div>
								        </div>
								      </div>
								      <div class="testimonial-card swiper-slide">
								        <div class="testimonial-header">
								          <div class="stars">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/group_154.svg" alt="star ratings">
								          </div>
								          <div class="quote-icon">
								            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1756300822/oncourse/1007/bl-testimonial-quotesvg.svg" alt="quote">
								          </div>
								        </div>
								
								        <div class="testimonial-text">I've been with American Water Resources for two years and it totally paid off! I had my sewer line replaced and it did not cost me a dime. The plumber told me I had saved $10K. I'm sticking with AWR.
								        </div>
								
								        <!-- Footer with name -->
								        <div class="testimonial-footer">
								          <div class="testimonial-name">Jennifer K.</div>
								        </div>
								      </div>
								      
								    </div>
								  </div>
								  <div class="swiper-pagination"></div>
								  <div class="swiper-button-prev-1"></div>
								  <div class="swiper-button-next-1"></div>
								</div> `);

            getScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js",
              function () {
                window.swiper = new Swiper(".spz1008_testimonialSlider_outer", {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  loop: true,
                  centeredSlides: false,
                  allowTouchMove: true,
                  draggable: true,
                  disableOnInteraction: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next-1",
                    prevEl: ".swiper-button-prev-1",
                  },
                  breakpoints: {
                    360: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                      centeredSlides: false,
                      arrows: false,
                    },
                    768: {
                      slidesPerView: 1.294,
                      slidesPerGroup: 1,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 2.375,
                      spaceBetween: 24,
                    },
                  },
                });

                swiper.slides.forEach(slide => {
                  slide.addEventListener('click', () => {
                    swiper.autoplay.stop();
                  });
                });
              }
            )

            const testimonialText = setInterval(function () {
              if (document.querySelectorAll('.spz1008_testimonialSlider_v1 .testimonial-card .testimonial-text').length >= 4) {
                clearInterval(testimonialText);
                setEqualTestimonialHeights();
              }
            }, 300);

            // const swiperCSS = document.createElement("link");
            // swiperCSS.rel = "stylesheet";
            // swiperCSS.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
            // document.head.appendChild(swiperCSS);

          }

          function getScript(source, callback) {
            var el = document.createElement("script");
            el.onload = callback;
            el.src = source;
            document.body.appendChild(el);
          }

          setTimeout(() => {
            const mainHero = document.querySelector('.awr-hero.spz-bg-awr-offWhite > div');
            if (mainHero) {
              mainHero.classList.add('awr-hero__container');

              resizeChanges();
            }
          }, 100);


          if (!document.querySelector('.spz_awz-hero__subHead')) {
            document.querySelector('.awr-rich-text h1').insertAdjacentHTML('beforebegin', `<span class="spz_awz-hero__subHead">A Leading Home Warranty Provider</span>`);
          }



          document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');

          // adding previous class to image panel
          document.querySelector('.awr-hero.spz-bg-awr-offWhite .awr-hero__text-panel--left').nextElementSibling.classList.add('awr-hero__image-panel--full-bleed', 'awr-hero__image-panel');

          if (!document.querySelector('.awr-hero__image-panel--full-bleed picture') && document.querySelector('.awr-hero__image-panel--full-bleed')) {
            document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture><source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275834.webp" type="image/webp"><source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275751.webp" type="image/webp"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_6.webp" alt="awr homepage redesign" class="awr-hero__image"></picture>`);
          }

          updateButtonText();

          // adding background class to bottom testimonial section
          const carousel = document.querySelector('.awr-reviews-carousel');
          if (carousel.classList.contains('bg-awr-white-50')) {
            carousel.classList.remove('bg-awr-white-50');
            carousel.classList.add('bg-awr-blue-50');
          }

        }

      }, 10);
      bindCardClick();
    }
  }

  function setEqualTestimonialHeights() {
    const testimonialTexts = document.querySelectorAll('.spz1008_testimonialSlider_v1 .testimonial-card .testimonial-text');

    // Reset heights before calculating
    testimonialTexts.forEach(el => el.style.height = 'auto');

    // Find the max height
    let maxHeight = 0;
    testimonialTexts.forEach(el => {
      maxHeight = Math.max(maxHeight, el.offsetHeight);
    });

    // Apply max height
    testimonialTexts.forEach(el => {
      el.style.height = maxHeight + 'px';
    });
  }

  function cardClickHandler(e) {
    if (
      e.target.matches('.spz_1007_v1 form.awr-find-your-protection-plan__wrapper button') ||
      e.target.closest('.spz_1007_v1 form.awr-find-your-protection-plan__wrapper button')
    ) {
      setTimeout(() => {
        const errorMsg = document.querySelector('.awr-find-your-protection-plan__input-error');
        if (errorMsg) {
          const formWrapper = document.querySelector('.spz_1007_v1 form.awr-find-your-protection-plan__wrapper');
          if (formWrapper) {
            formWrapper.classList.add('spz_invalid_zip');
          }
        }
      }, 100);
    }
  }

  let cardClickBound = false;

  function bindCardClick() {
    if (!cardClickBound) {
      window.addEventListener('click', cardClickHandler);
      cardClickBound = true;
    }
  }

  function unbindCardClick() {
    if (cardClickBound) {
      window.removeEventListener('click', cardClickHandler);
      cardClickBound = false;
    }
  }

  function removeTest() {
    console.log('removing test');

    if (document.querySelector('.awr-rich-text h1')) {
      document.querySelector('.awr-rich-text h1').innerHTML = `<span class="text-awr-blue-700">Protect</span> your home from the unexpected.`;
    }

    if (document.querySelector('.awr-hero.spz-bg-awr-blue')) {
      document.querySelector('.awr-hero').classList.remove('spz-bg-awr-blue');
      document.querySelector('.awr-hero').classList.add('bg-white');
    } else if (document.querySelector('.awr-hero.spz-bg-awr-offWhite')) {
      document.querySelector('.awr-hero').classList.remove('spz-bg-awr-offWhite');
      document.querySelector('.awr-hero').classList.add('bg-white');
    }

    if (document.querySelector('.spz_awz-hero__subHead')) {
      document.querySelector('.spz_awz-hero__subHead').remove();
    }

    if (document.querySelector('.spz1008_testimonialSlider_v1')) {
      document.querySelector('.spz1008_testimonialSlider_v1').remove();
    }

    if (document.querySelector('.spz-banner-tags')) {
      document.querySelector('.spz-banner-tags').remove();
    }

    if (document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code')) {
      document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Enter ZIP Code');
      document.querySelector('form.awr-find-your-protection-plan__wrapper button span p').textContent = `Explore Plans`;
    }

    if (document.querySelector('.awr-hero__image-panel--full-bleed picture')) {
      document.querySelector('.awr-hero__image-panel--full-bleed picture').remove();
    }

    if (document.querySelector('.awr-hero__image')) {
      document.querySelector('.awr-hero__image').setAttribute('src', 'https://images.contentstack.io/v3/assets/bltaad0a1193351f4c1/blt483324c984b00584/658da5eab782f0061d584b2c/Frame_538.svg');
    }

    if (document.querySelector('.spz_1007_v1 .awr-hero')) {
      document.querySelector('.spz_1007_v1 [class$="__render-components"] > div').classList.remove('awr-hero');
    }

    if (document.body.classList.contains('spz_1007_v1')) {
      document.body.classList.remove('spz_1007_v1');
    }


    unbindCardClick();
  }



  var pageList = [
    "https://www.awrusa.com/",
    "https://oncourse-portal-qa.ohscloud.net/",
    "https://www.awrusa.com/lasvegas",
    "https://www.awrusa.com/phoenix",
    "https://www.awrusa.com/philadelphia",
    "https://www.awrusa.com/detroit",
    "https://www.awrusa.com/orlando",
    "https://www.awrusa.com/tx",
    "https://www.awrusa.com/wilmington",
    "https://www.awrusa.com/yonkers",
    "https://www.awrusa.com/baltimore",
    "https://www.awrusa.com/fortwayne",
    "https://www.awrusa.com/fl",
    "https://www.awrusa.com/nyc",
    "https://www.awrusa.com/ca",
    "https://www.awrusa.com/va"
  ];

  function isInPageList() {
    const currentPage = window.location.href.split("?")[0].split("#")[0];
    return pageList.some(function (url) { 
      return currentPage === url || currentPage === url.replace(/\/$/, '') || currentPage + '/' === url; 
    }) || window.location.search.includes('_vis_preview_data');
  }

  let testRemoved = false;
  let isProcessing = false; // Add this flag



  function observerForLoadingBlock() {
    // Wait for document.body to be available
    if (!document.body) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observerForLoadingBlock);
      } else {
        // If DOM is already loaded but body is still null, wait a bit
        setTimeout(observerForLoadingBlock, 100);
      }
      return;
    }

    // var target = document.body;
    var target = document;

    const config = {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
    };

    let running = false;
    const callback = function (mutationsList, observer) {

      const currentPage = window.location.href.split("?")[0].split("#")[0];
      var isInList = ["/lasvegas", "/phoenix", "/philadelphia", "/detroit", "/orlando", "/tx", "/wilmington", "/yonkers", "/baltimore", "/fortwayne", "/fl", "/nyc", "/ca", "/va"].some(function (path) { return currentPage.includes(path); });

      if (running || isProcessing) return; // Check both flags
      console.log(currentPage)
      if (pageList.includes(currentPage)) {
        running = true;
        isProcessing = true; // Set processing flag
        testRemoved = false;
        if (isInList) {
          document.body.classList.add('spz_microsite');
          console.log("URL in list microsite");
        } else {
          if (document.querySelector('.spz_microsite')) {
            document.body.classList.remove('spz_microsite');
            console.log("URL not in list microsite");
          }
        }
        heroBannerMainV1();
        console.log("URL in list homepage");

        waitForElement('.spz1008_testimonialSlider_outer .swiper-wrapper', function (swiperEl) {
          const targetNode = swiperEl.closest('.spz1008_testimonialSlider_outer');

          // Wait for Swiper to be initialized
          const checkSwiper = setInterval(function () {
            if (window.swiper) {
              clearInterval(checkSwiper);

              window.swiper.on('realIndexChange', function () {
                targetNode.classList.remove('hide-gradient');
              });
            }
          }, 100);

          setTimeout(function () {
            clearInterval(checkSwiper);
          }, 5000);
        });

        setTimeout(() => {
          running = false;
          isProcessing = false; // Reset processing flag
        }, 500);
      } else {
        if (!testRemoved) {
          isProcessing = true; // Set processing flag
          console.log("URL not in list or not desktop, running removeTest()");
          removeTest();
          testRemoved = true;

          setTimeout(() => {
            isProcessing = false; // Reset processing flag
          }, 100);
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }

  observerForLoadingBlock();

  // urlObserver();



  // Run on resize (with debounce to optimize performance)
  let resizeTimeout;

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setEqualTestimonialHeights();
      resizeChanges();
    }, 200);
  });


  window.addEventListener('popstate', () => {
    setTimeout(function () {
      heroBannerMainV1();
      updateButtonText();
    }, 800);
  });
}

var getBody = setInterval(function () {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(getBody);
    run1014TestTC();
  }
}, 100);
