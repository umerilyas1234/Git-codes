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

console.log('Time 1 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

function isDesktop() {
  return window.innerWidth >= 1024;
}

function resizeChanges() {
  // waitForElement('.awr-hero__image-panel--full-bleed', () => {
  if (window.innerWidth >= 1024) {
      if (document.querySelector('.spz_1001_v1 [class$="__render-components"] > div')) {
          document.querySelector('.spz_1001_v1 [class$="__render-components"] > div').classList.add('awr-hero');
      }

      if (window.location.href === "https://www.awrusa.com/" || window.location.href === "https://www.awrusa.com/nyc" || window.location.href === "https://www.awrusa.com/phoenix" || window.location.href === "https://www.awrusa.com/philadelphia" || window.location.href === "https://www.awrusa.com/detroit" || window.location.href === "https://www.awrusa.com/orlando" || window.location.href === "https://www.awrusa.com/tx" || window.location.href === "https://www.awrusa.com/wilmington" || window.location.href === "https://www.awrusa.com/yonkers" || window.location.href === "https://www.awrusa.com/fortwayne" || window.location.href === "https://www.awrusa.com/fl" || window.location.href.includes("?_vis_preview_data")) {
        const heading = document.querySelector('.awr-rich-text h2');
        if (heading && !document.querySelector('.spz_subheading_two')) {
          heading.insertAdjacentHTML('afterend', `<span class="spz_subheading_two">Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7 phone support.</span>`);
          // heading.textContent = "Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7 phone support.;
        }
      }

      // document.querySelector('.awr-rich-text h2').textContent = `Covers HVAC, Appliances, Water, Sewer, Electric, Gas, and 20+ more. Vetted technicians. 24/7 phone support.`;

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
                  if(document.querySelector('.awr-hero__image-panel--full-bleed')) {
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
          if (window.location.href === "https://www.awrusa.com/" || window.location.href === "https://www.awrusa.com/nyc" || window.location.href === "https://www.awrusa.com/phoenix" || window.location.href === "https://www.awrusa.com/philadelphia" || window.location.href === "https://www.awrusa.com/detroit" || window.location.href === "https://www.awrusa.com/orlando" || window.location.href === "https://www.awrusa.com/tx" || window.location.href === "https://www.awrusa.com/wilmington" || window.location.href === "https://www.awrusa.com/yonkers" || window.location.href === "https://www.awrusa.com/fortwayne" || window.location.href === "https://www.awrusa.com/fl" || window.location.href.includes("?_vis_preview_data")) {
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
                  if(document.querySelector('.awr-hero__image-panel--full-bleed')) {
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
  // });
}

function updateButtonText() {
  const btnTextEl = document.querySelector('.spz_1001_v1 form.awr-find-your-protection-plan__wrapper button .awr-find-your-protection-plan__call-to-action p');
  if (btnTextEl && btnTextEl.textContent !== 'See Pricing') {
      btnTextEl.textContent = 'See Pricing';
  }
}

function heroBannerMainV1() {
  if (!document.body.classList.contains('spz_1001_v1')) {
      document.body.classList.add('spz_1001_v1');
      const heroInterval = setInterval(() => {
          if (document.querySelector('.spz_1001_v1 [class$="__render-components"] > div')) {
              clearInterval(heroInterval);
              document.querySelector('.spz_1001_v1 [class$="__render-components"] > div').classList.add('awr-hero');
              document.querySelector('.awr-hero').classList.remove('bg-white');
              document.querySelector('.awr-hero').classList.add('spz-bg-awr-offWhite');
          }


          document.querySelector('.awr-rich-text').parentElement.classList.add('awr-hero__text-panel', 'awr-hero__text-panel--left');

          if (document.querySelector('.spz_1001_v1 .awr-hero')) {
              document.querySelector('.awr-rich-text h1').innerHTML = `Protect your home against unexpected repairs`;

              setTimeout(() => {
                  const mainHero = document.querySelector('.awr-hero.spz-bg-awr-offWhite > div');
                  if (mainHero) {
                      mainHero.classList.add('awr-hero__container');
                  }
              }, 100);


              if (!document.querySelector('.spz_awz-hero__subHead')) {
                  document.querySelector('.awr-rich-text h1').insertAdjacentHTML('beforebegin', `<span class="spz_awz-hero__subHead">A Leading Home Warranty Provider</span>`);
              }

              resizeChanges();


              document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');

              // adding previous class to image panel
              // document.querySelector('.awr-hero.spz-bg-awr-offWhite .awr-hero__text-panel--left').nextElementSibling.classList.add('awr-hero__image-panel--full-bleed', 'awr-hero__image-panel');

              if (!document.querySelector('.awr-hero__image-panel--full-bleed picture') && document.querySelector('.awr-hero__image-panel--full-bleed')) {
                  document.querySelector('.awr-hero__image-panel--full-bleed').insertAdjacentHTML('afterbegin', `<picture><source media="(max-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275834.webp" type="image/webp"><source media="(max-width:899.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/frame_1171275751.webp" type="image/webp"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1001/hero_1440_img_6.webp" alt="awr homepage redesign" class="awr-hero__image"></picture>`);
              }

              updateButtonText();
          }
      }, 10);
      bindCardClick();

      console.log('Time 2 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));
  }
}

function cardClickHandler(e) {
  if (
      e.target.matches('.spz_1001_v1 form.awr-find-your-protection-plan__wrapper button') ||
      e.target.closest('.spz_1001_v1 form.awr-find-your-protection-plan__wrapper button')
  ) {
      setTimeout(() => {
          const errorMsg = document.querySelector('.awr-find-your-protection-plan__input-error');
          if (errorMsg) {
              const formWrapper = document.querySelector('.spz_1001_v1 form.awr-find-your-protection-plan__wrapper');
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

  if (document.querySelector('.spz_subheading_two')) {
      document.querySelector('.spz_subheading_two').remove();
  }

  if (document.querySelector('.spz-banner-tags')) {
      document.querySelector('.spz-banner-tags').remove();
  }


  if (document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code')) {
      document.querySelector('form.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Enter ZIP Code');
      if(document.querySelector('form.awr-find-your-protection-plan__wrapper button .awr-find-your-protection-plan__call-to-action p')){
        document.querySelector('form.awr-find-your-protection-plan__wrapper button .awr-find-your-protection-plan__call-to-action p').textContent = `Explore Plans`;
      }
  }



  if (document.querySelector('.awr-hero__image-panel--full-bleed picture')) {
      document.querySelector('.awr-hero__image-panel--full-bleed picture').remove();
  }
  if (document.querySelector('.awr-hero__image')) {
      document.querySelector('.awr-hero__image').setAttribute('src', 'https://images.contentstack.io/v3/assets/bltaad0a1193351f4c1/blt483324c984b00584/658da5eab782f0061d584b2c/Frame_538.svg');
  }

  if (document.querySelector('.spz_1001_v1 .awr-hero')) {
      document.querySelector('.spz_1001_v1 [class$="__render-components"] > div').classList.remove('awr-hero');
  }

  if (document.body.classList.contains('spz_1001_v1')) {
      document.body.classList.remove('spz_1001_v1');
  }


  unbindCardClick();
}

var pageList = [
  // "https://www.awrusa.com/",
  "https://www.awrusa.com/nyc",
  "https://www.awrusa.com/phoenix",
  "https://www.awrusa.com/philadelphia",
  "https://www.awrusa.com/detroit",
  "https://www.awrusa.com/orlando",
  "https://www.awrusa.com/tx",
  "https://www.awrusa.com/wilmington",
  "https://www.awrusa.com/yonkers",
  "https://www.awrusa.com/fortwayne",
  "https://www.awrusa.com/fl",
];

let testRemoved = false;
let isProcessing = false; // Add this flag

function observerForLoadingBlock() {
  var target = document.body;
  if (!target) return;

  const config = {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
  };

  let running = false;

  const callback = function (mutationsList, observer) {
      const currentPage = window.location.href.split("?")[0].split("#")[0];

      if (running || isProcessing) return; // Check both flags

      if (pageList.includes(currentPage)) {
          running = true;
          isProcessing = true; // Set processing flag
          testRemoved = false;

          console.log("Mutation detected: Run spz_1001_v1 new");
          heroBannerMainV1();

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


window.addEventListener('resize', function () {
  resizeChanges();
});

window.addEventListener('popstate', () => {
  setTimeout(function () {
      heroBannerMainV1();
      updateButtonText();
  }, 800);
});
