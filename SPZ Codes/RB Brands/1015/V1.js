function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_t1015')) {
      document.querySelector('body').classList.add('spz_t1015');


      // get Phone Number
      var telLink = document.querySelector(".spz_t1015 header div nav a + a");
      var telNumber = telLink.getAttribute("href");
      var getNumber = telNumber.replace('tel:', '');
      // get Phone Number

      document.querySelector('.spz_t1015 #scroll').insertAdjacentHTML('beforeend',`<div class="spz-footer-container">
          <div class="spz-trust-logos-wrap">
              <picture>
                  <source media="(min-width:992px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1015/logo.webp">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1015/logo.webp" alt="Appliance Repair Today logo">
              </picture>
          </div>
          <div class="spz-middle-part">
              <picture>
                  <source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1725009777/rbbrands/1015/bbb_logo-small.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1725009777/rbbrands/1015/bbb_logo-large.svg" alt="BBB logo">
              </picture>
          </div>
          <div class="spz-ctas-wrap">
              <a href="tel:${getNumber}" aria-label="${getNumber}" class="font-bold sm:text-base text-xs text-white leading-[22px] bg-primary rounded-lg py-[13px] sm:py-4 ps-3 sm:ps-[33px] pr-2 sm:pr-[30px] flex items-center sm:ms-5 transition-all ease-in-out duration-150 hover:scale-95 btn1 spz_1015_v1"><span><img src="//appliancerepairtoday.net/wp-content/themes/appliancerepairtoday/theme/assets/images/svg/tel-icon.svg" alt="mobile-icon" loading="lazy"></span>${getNumber}</a>
              <a href="tel:${getNumber}" aria-label="${getNumber}" class="font-bold sm:text-base text-xs text-white leading-[22px] bg-primary rounded-lg py-[13px] sm:py-4 ps-3 sm:ps-[33px] pr-2 sm:pr-[30px] flex items-center sm:ms-5 transition-all ease-in-out duration-150 hover:scale-95 btn2 spz_1015_v1"><span><img src="//appliancerepairtoday.net/wp-content/themes/appliancerepairtoday/theme/assets/images/svg/tel-icon.svg" alt="mobile-icon" loading="lazy"></span> Phone Consultation </a>
          </div>
      </div>`);
  }
}
loadTestCode();

// true control
function loadTestCode1014() {
  if (!document.querySelector("body").classList.contains("spz_t1014")) {
      document.querySelector("body").classList.add("spz_t1014");
      const linkElement = document.querySelector('.hero_sec > div > div > a');
      linkElement.innerHTML = `<span>Phone Consultation</span> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4216 9.44237C16.8215 9.06148 17.4545 9.07692 17.8354 9.47685L23.391 15.3102C23.7588 15.6964 23.7588 16.3033 23.391 16.6895L17.8354 22.5228C17.4545 22.9228 16.8215 22.9382 16.4216 22.5573C16.0217 22.1764 16.0063 21.5434 16.3871 21.1435L20.3335 16.9998L9.3335 16.9998C8.78121 16.9998 8.3335 16.5521 8.3335 15.9998C8.3335 15.4476 8.78121 14.9998 9.3335 14.9998L20.3335 14.9998L16.3871 10.8562C16.0063 10.4562 16.0217 9.82325 16.4216 9.44237Z" fill="#FEFEFE"></path>
      </svg>`;
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
      clearInterval(bodyInterval);
      loadTestCode1014();
  }
}, 100);
