// TC
let Time1 = 0;

function spzTest3014() {
    if (!document.querySelector('body').classList.contains('spz_3014')) {
        document.querySelector('body').classList.add('spz_3014');
        
        // Put your test code here
        document.querySelector('main > section:first-of-type').classList.add('hero_section');

        var i = 0;
        var titleInterval = setInterval(function() {
            if(document.querySelector('main > section:first-of-type').querySelector('h1')) {
                console.log('Title found');
                document.querySelector('.spz_3014 main > section:first-of-type h1').innerHTML = document.querySelector('.spz_3014 main > section:first-of-type h1').innerHTML.replace("with better", "with better ");
            }
            if (i >= 500) {
                clearInterval(titleInterval);
            }
            i++;
        }, 10);

        window.addEventListener('scroll', function() {
            setTimeout(() => {
                if (document.querySelector('.spz_3014 a[aria-label="Go to homepage"] img')) {
                    console.log('header changed');
                    document.querySelector('.spz_3014 #header').classList.add('normalHeader');

                    if(document.querySelectorAll('.header-logo-color').length === 0) {
                        document.querySelector('.spz_3014 a[aria-label="Go to homepage"] img').setAttribute('src', 'https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg');
                        document.querySelector('.spz_3014 a[aria-label="Go to homepage"] img').setAttribute('srcset', 'https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg');
                    }
                } else {
                    document.querySelector('.spz_3014 #header')?.classList.remove('normalHeader');
                    console.log('header not changed');
                }
            }, 100);
        });
        window.dispatchEvent(new Event('scroll'));

        document.querySelector('main > section:first-of-type').insertAdjacentHTML('afterend', `
            <section class="logo_section">
                <div class="container">
                    <h2>Data trusted by</h2>
                    <div class="logo_grid">
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/nyt-360.svg" media="(max-width: 767px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/nyt-1440.svg" alt="The New York Times">
                        </picture>
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/bloomberg-360.svg" media="(max-width: 767px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/bloomberg-1440.svg" alt="Bloomberg">
                        </picture>
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/fast_company-360.svg" media="(max-width: 767px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/fast_company-1440.svg" alt="Fast Company">
                        </picture>
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/nerdwallet-360.svg" media="(max-width: 767px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/nerdwallet-1440.svg" alt="Nerd Wallet">
                        </picture>
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/wsj-360.svg" media="(max-width: 767px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/airdna/3014/wsj-1440.svg" alt="The Wall Street Journal">
                        </picture>
                </div>
            </section>
        `);

        let Time2 = new Date().getTime()/1000;
        console.log('Time 2 > ' + Time2);

        let timeDifference = Time2 - Time1;
        console.log('Time difference > ' + timeDifference + ' seconds');
        // Time difference calculation over
    }
}

function removeTest() {
    document.body.classList.remove('spz_3014');
    document.querySelector('.header-logo-color')?.remove();
    document.querySelector('.logo_section')?.remove();
}






//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz3004Test() {

  if (!document.querySelector('body').classList.contains('spz_3004_v1')) {
    document.querySelector('body').classList.add('spz_3004_v1');
    // Put your test code here
    if (document.querySelector('.spz_3004_v1 main > section:nth-child(3)')) {

      //DEV 1/3. Find the class or ID of the control hero section and place it below
      const template_sectionSelector = `#__next > div > main > section:nth-child(4)`;

      //DEV 2/3. Choose where your accordion should appear
      const template_position = "beforebegin";

      //DEV 3/3. Accordion content data
      const template_sectionContent = {
        sectionHeading: "Features",
        accordionItems: [
          {
            title: 'Market price insights',
            content: '<p>See price data, occupancy, and average revenue for local listings. Current and historical prices, future projections, and seasonal trends.</p> <p>Identify the most profitable short-term rental markets and submarkets around the world. Research specific regions, cities, zip codes, and neighborhoods.</p>',
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/market_price_insights-1440_768_361.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/market_price_insights-1440_768_361.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/market_price_insights-1440_768_361.webp",
              },
            ]
          },
          {
            title: 'Investing',
            content: '<p>See types of properties that perform best near you. Get projected revenue, average daily rate, and occupancy.</p><p>Browse for-sale properties. Filter by real estate type, number of rooms, price tier, and more. Review property photos, descriptions, and key details. </p>',
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/investing-1440_768_367.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/investing-1440_768_367.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/investing-1440_768_367.webp",
              },
            ]
          },
          {
            title: 'Revenue calculator',
            content: `<p>View the earning potential for any address, including for-sale properties and competitors. Get projections for annual revenue, rates, occupancy, and seasonal impact. </p> <p>See the potential revenue for your listings. Just enter your address, startup expenses, and operating costs. See profit, net operating income, and cap rate forecast.</p>`,
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/revenue_calculator-1440_768_361.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/revenue_calculator-1440_768_361.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/revenue_calculator-1440_768_361.webp",
              },
            ]
          },
          {
            title: 'Rate recommendations',
            content: `<p>Auto-adjust listing price up to 4 months out to meet occupancy or rate goals. Rates update based on demand, peak weekends, seasons, and more.  </p> <p>Compare current rates against recommended rates for all properties. Identify rate adjustment opportunities. Optimize your STR strategy based on booking trends.</p>`,
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/rate_recommendations-1440_768_361.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/rate_recommendations-1440_768_361.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/rate_recommendations-1440_768_361.webp",
              },
            ]
          },
          {
            title: 'Listing performance',
            content: `<p>Track the performance of all your properties in one place. Identify your top-performing properties, opportunities to increase earnings, market trends, and more.</p> <p>Compare your performance and amenities to your top competitors. Generate reports on performance, prices, tourism data, and more. </p>`,
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/listing_performance-1440_768_361.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/listing_performance-1440_768_361.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/listing_performance-1440_768_361.webp",
              },
            ]
          },
          {
            title: 'Competitor analysis',
            content: `<p>Compare your listings or potential investments to similar competitors and other successful properties. Customize comp sets by location, house size, amenities, and more.</p> <p>Compare rates, amenity impact, occupancy, projected revenue, booking lead time, and management styles.</p>`,
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/competitor_analysis-1440_768_360.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/competitor_analysis-1440_768_360.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/competitor_analysis-1440_768_360.webp",
              },
            ]
          },
          {
            title: 'Integrations & API',
            content: '<p>Sync and track your listing data from rental marketplace using our custom API. Includes Airbnb, Vrbo, and Guesty.</p>',
            image: [
              {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/integrations__api-1440_768_363.webp",
              },
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/integrations__api-1440_768_363.webp",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3004/integrations__api-1440_768_363.webp",
              },
            ]
          }
        ]
      };

      // Main accordion function
      function initAccordion(content, whereToPut, sectionSelector) {
        const template = `
          <div class="spz-bg-wrap">
            <div class="features-heading">${content.sectionHeading}</div>
            <div class="spz-features-accordion__wrapper">
              <div class="spz-features-accordion">
                <div class="spz-features-accordion__contents">
                  ${content.accordionItems.map(item => `
                    <div class="content">
                      <div class="spz-features-accordion__item">
                        <div class="solution__image-inline">
                          <picture>
                            ${item.image.map(img => `<source media="(min-width:${img.breakPoint}px)" srcset="${img.url}" ></source>`).join("")}
                            <img src="${item.image[0].url}" alt="${item.title}" />
                          </picture>
                        </div>
                        <span>${item.title}</span>
                        <div class="progress_bar"></div>
                        <div class="accordion-arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="solution__content">
                        ${item.content}
                        <div class="spz-ctas-wrap">
                          <a href="https://app.airdna.co/data/register" class="spz-primary my_btn inner-accordion spz3004_v1">Start for free</a>
                        </div>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
              <div class="spz-features-accordion__image-panel">
                ${content.accordionItems.map((item, index) => `
                  <div class="solution__image ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <picture>
                      ${item.image.map(img => `<source media="(min-width:${img.breakPoint}px)" srcset="${img.url}" ></source>`).join("")}
                      <img src="${item.image[0].url}" alt="${item.title} visualization" />
                    </picture>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>`;

        // Inject accordion
        const hostSection = document.querySelector(sectionSelector);
        if (hostSection) {
          hostSection.classList.add('spz-features-accordion-host');
          hostSection.insertAdjacentHTML(whereToPut, template);
        }

        // Accordion functionality
        const DURATION = 8000;
        const accordionContents = document.querySelector('.spz-features-accordion__contents');
        const totalItems = content.accordionItems.length;
        let currentActive = 0;
        let progress = 0;
        let autoSlide = false;
        let progressVisible = true;
        let userInteracted = false;
        let slideInterval;
        let inView = false;

        // Initialize first item as active
        accordionContents.children[currentActive].classList.add('active');

        // Update arrows based on active state
        function updateArrows() {
          Array.from(accordionContents.children).forEach((item, index) => {
            const arrow = item.querySelector('.accordion-arrow');
            if (arrow) {
              const svg = arrow.querySelector('svg path');
              if (item.classList.contains('active')) {
                // Up arrow
                svg.setAttribute('d', 'M11 6.5L6 1.5L1 6.5');
                arrow.classList.add('active');
              } else {
                // Down arrow
                svg.setAttribute('d', 'M1 1.5L6 6.5L11 1.5');
                arrow.classList.remove('active');
              }
            }
          });
        }
        updateArrows();

        // Intersection Observer for viewport detection
        function setupViewportObserver() {
          const accordion = document.querySelector('.spz-features-accordion__wrapper');
          if (!accordion) return;

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (userInteracted) return;

              if (entry.isIntersecting && !inView) {
                // Slider comes into view
                inView = true;
                autoSlide = true;
                startAutoSlide();
              } else if (!entry.isIntersecting && inView) {
                // Slider goes out of view
                inView = false;
                autoSlide = false;
                clearInterval(slideInterval);
              }
            });
          }, {
            threshold: 0.3, // Trigger when 30% of the element is visible
            rootMargin: '0px 0px -10% 0px' // Start a bit before the element is fully in view
          });

          observer.observe(accordion);
        }

        // Auto slide functionality
        function startAutoSlide() {
          clearInterval(slideInterval);
          slideInterval = setInterval(() => {
            if (!autoSlide || userInteracted) return;

            if (progress >= 100) {
              currentActive = (currentActive + 1) % totalItems;
              changeActive(currentActive);
            } else {
              progress += (100 * 200 / DURATION);
              updateProgressBar(currentActive, progress);
            }
          }, 200);
        }

        // Progress bar animation
        function updateProgressBar(index, width) {
          if (!progressVisible) return;
          const progressBar = accordionContents.children[index].querySelector('.progress_bar');
          if (progressBar && progressBar.style.display !== 'none') {
            progressBar.style.setProperty('--progress-width', `${width}%`);
          }
        }

        // Mobile detection function
        function isMobileScreen() {
          return window.innerWidth <= 1023; // Based on CSS breakpoint
        }

        // Scroll to active content on mobile - only when element is not in viewport
        function scrollToActiveContent(activeElement) {
          if (!isMobileScreen() || !activeElement) return;
          
          // Check if element is already in viewport
          const elementRect = activeElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const isInViewport = elementRect.top >= 0 && elementRect.bottom <= viewportHeight;
          
          // Only scroll if element is not in viewport
          if (!isInViewport) {
            // Add a small delay to ensure the DOM has updated
            setTimeout(() => {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const elementTop = elementRect.top + scrollTop;
              
              // Scroll to position the element with 50px margin from top
              window.scrollTo({
                top: elementTop - 50,
                behavior: 'smooth'
              });
            }, 100);
          }
        }

        // Change active accordion item
        function changeActive(index, isUserInteraction = false) {
          progress = 0;
          currentActive = index;

          // Update accordion items
          Array.from(accordionContents.children).forEach((item, i) => {
            item.classList.toggle('active', i === index);
            if (progressVisible) updateProgressBar(i, 0);
          });

          // Update arrows
          updateArrows();

          // Update images with fade effect
          const allImages = document.querySelectorAll('.spz-features-accordion__image-panel .solution__image');
          allImages.forEach(img => {
            img.classList.remove('active');
            img.style.opacity = '0';
          });

          setTimeout(() => {
            const newImg = document.querySelector(`.spz-features-accordion__image-panel .solution__image[data-index="${index}"]`);
            if (newImg) {
              newImg.classList.add('active');
              newImg.style.opacity = '1';
            }
          }, 250);

          // Only scroll to active content on mobile when user manually clicks
          if (isUserInteraction) {
            const activeContent = accordionContents.children[index];
            if (activeContent && activeContent.classList.contains('active')) {
              // Only scroll if the user explicitly clicked to change to a different item
              // and the item is not already visible in the viewport
              scrollToActiveContent(activeContent);
            }
          }
        }

        // Event listeners
        Array.from(accordionContents.children).forEach((item, index) => {
          // Click - stop auto progression permanently
          item.addEventListener('click', (e) => {
            e.preventDefault();
            userInteracted = true;
            autoSlide = false;
            progressVisible = false;
            clearInterval(slideInterval);

            // Hide all progress bars
            document.querySelectorAll('.progress_bar').forEach(bar => {
              bar.style.display = 'none';
            });

            if (currentActive !== index) {
              changeActive(index, true);
            }
            // Remove automatic scrolling on same item click to prevent scroll jumping
          });

          // Hover functionality moved to wrapper level
        });

        // Initialize viewport observer
        setupViewportObserver();

        // Hover functionality on wrapper - pause/resume if not user interacted and in view
        const accordionWrapper = document.querySelector('.spz-features-accordion__wrapper');
        if (accordionWrapper) {
          accordionWrapper.addEventListener('mouseenter', () => {
            if (!userInteracted && inView) {
              autoSlide = false;
              clearInterval(slideInterval);
            }
          });

          accordionWrapper.addEventListener('mouseleave', () => {
            if (!userInteracted && inView) {
              autoSlide = true;
              startAutoSlide();
            }
          });
        }

        // Handle window resize for mobile scroll functionality
        window.addEventListener('resize', () => {
          // Only handle resize for accordion functionality, not automatic scrolling
          // This prevents unwanted scrolling when user is trying to scroll manually
        });
      }

      // Initialize accordion
      initAccordion(template_sectionContent, template_position, template_sectionSelector);

      console.log('Time 2 > ' + new Date().getTime() / 1000);

      window.addEventListener('click', function (e) {
        if (e.target.classList.contains('spz-primary')) {
          window.location.href = 'https://app.airdna.co/data/register';
        } 
      });
    
      
      // Button click animation
      document.querySelector('.my_btn').addEventListener('mousedown', function (e) {
        // Click ripple animation - must be a unique selector
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();

        // Calculate the position and size of the ripple
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Add the ripple to the anchor
        this.appendChild(ripple);

        // Remove the ripple after animation ends
        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      });
    }
  }

}

function removeTest() {
  document.querySelector('.spz-bg-wrap')?.remove();
  document.querySelector('body').classList.remove('spz_3004_v1', 'spz_3014');
  document.querySelector('.header-logo-color')?.remove();
  document.querySelector('.logo_section')?.remove();
}

const selector3004 = 'main > section:first-child h1';
function waitForElement(selector3004, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector3004);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector3004);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector3004}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector3004)
    .then((element) => {
      if (element) {
        spz3004Test();
        spzTest3014();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout;
const targetUrl = "https://www.airdna.co/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      executeTimeout = setTimeout(function () {
        executeTest();
      }, 100)
    } else {
      removeTest();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
