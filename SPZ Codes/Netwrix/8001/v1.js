function runCode() {
  if (!document.body.classList.contains('spz-8001')) {
    document.body.classList.add('spz-8001');
    document.querySelector('.head-cont').insertAdjacentHTML('beforebegin', `<div class="hero-sec">
          <div class="hero-container">
              <div class="hero-flex">
                  <div class="hero-title-contain">
                      <div class="hero-main-title">Products</div>
                      <p class="hero-subheadline">The tools you need to identify threats, secure data, and reduce risk.</p>
                  </div>
                  <div class="hero-image-contain">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1732096810/netwrix/8001/hero-img-min_1.png" alt="Products">
                  </div>
              </div>
              <div class="social-proof">
                  <div class="social-flex">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1730965604/netwrix/8001/gartner_logo_1.svg" alt="Peer Insights">
                      <div class="reviewRating">
                          <div class="reviews-count"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730093100/netwrix/8001/rating_4.4.svg" alt="Stars rating">4.4</div>
                      </div>
                  </div>
                  <div class="social-flex">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1729676337/netwrix/8001/capterra_logosvg.svg" alt="Capterra Logo">
                      <div class="reviewRating">
                          <div class="reviews-count"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730093412/netwrix/8001/Stars.svg" alt="Stars rating">5.0</div>
                      </div>
                  </div>
                  <div class="social-flex">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1729676337/netwrix/8001/g2_logosvg.svg" alt="G2 Logo">
                      <div class="reviewRating">
                          <div class="reviews-count"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730093100/netwrix/8001/rating_4.4.svg" alt="Stars rating">4.4</div>
                      </div>
                  </div>
                  <div class="social-flex">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1729676337/netwrix/8001/getapp_logosvg.svg" alt="GetApp">
                      <div class="reviewRating">
                          <div class="reviews-count"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730093785/netwrix/8001/Stars-4.5.svg" alt="Stars rating">4.5</div>
                      </div>
                  </div>
                  <div class="social-flex">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1729676337/netwrix/8001/trustradius_logosvg.svg" alt="Trustradius">
                      <div class="reviewRating">
                          <div class="reviews-count"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730093785/netwrix/8001/Stars-4.5.svg" alt="Stars rating">4.5</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`);
    document.querySelectorAll('.products-wrap .product-button .form-widget-full').forEach(top_div => top_div.insertAdjacentHTML('afterend', `<div class="learn-button">
          <button class="learn-more spz_8001_v1">Learn More</button>
      </div>`));
    document.querySelectorAll('.products-wrap .products .product:last-child .product-button>div:first-child').forEach(top_div => top_div.insertAdjacentHTML('afterend', `<div class="learn-button">
          <button class="learn-more spz_8001_v1">Learn More</button>
      </div>`));
    document.querySelectorAll('.products-wrap .learn-button .learn-more').forEach((button, index) => {
      button.addEventListener('click', function () {
        const productTitleLink = document.querySelectorAll('.products-wrap .product-title a')[index];
        if (productTitleLink) {
          productTitleLink.click();
        }
      });
    });

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '8001';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant_` + expName;

    hiddenValue(expName, variantName);

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function hiddenValue(currentExperimentName, currentExperimentValue) {
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      var ExistingExperimentName = getCookie('ExperimentName');
      var ExistingExperimentValue = getCookie('ExperimentValue');

      if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

      } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

      } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }
  }
}
// Check condition and initialize the code
const checkCondition = setInterval(() => {
  if (document.querySelectorAll('main .navbar').length > 0) {
    clearInterval(checkCondition);
    runCode();
  }
}, 100);
