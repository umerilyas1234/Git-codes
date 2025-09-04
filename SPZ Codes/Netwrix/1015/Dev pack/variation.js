function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_1015')) {
    document.querySelector('body').classList.add('spz_1015');

    function heroCopyChanges() {
      // Wrap hero elements in a new wrapper element
      const parent = document.querySelector('.head-cont .new-hero-1001');

      // Select the two elements you want to wrap
      const wrapper = parent.querySelector('.wrapper');
      const heroImage = parent.querySelector('.hero-image');

      // Create the new wrapper div
      const newWrapper = document.createElement('div');
      newWrapper.className = 'new-hero-1011-wrapper';

      // Append the selected elements to the new wrapper
      newWrapper.appendChild(wrapper);
      newWrapper.appendChild(heroImage);

      // Append the new wrapper to the parent
      parent.appendChild(newWrapper);

      // ----------------------------------------------
      // ----------------------------------------------

      // Move logo section inside hero banner
      const logoSection = document.querySelector('.head-cont .shifter-wrapper .cta-links-wrapper');
      document.querySelector('.new-hero-1011-wrapper').insertAdjacentElement('afterend', logoSection);

      // Update the logo images
      document.querySelector('.spz_1015 .head-cont .cta-links-wrapper img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1746421617/netwrix/1011/logos_1441.svg');
      document.querySelector('.spz_1015 .head-cont .cta-links-wrapper .cta-links-block source[media*="767px"]').setAttribute('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/v1746421617/netwrix/1011/logos_mobile_1.svg');
      document.querySelector('.spz_1015 .head-cont .cta-links-wrapper .cta-links-block img').insertAdjacentHTML('beforebegin', `<source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1746421616/netwrix/1011/logos_1921.svg" type="image/webp" media="(min-width: 1920px)">`);
      document.querySelector('.spz_1015 .head-cont .cta-links-wrapper .cta-links-block img').insertAdjacentHTML('beforebegin', `<source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1746421617/netwrix/1011/logos_tablet_1.svg" type="image/webp" media="(max-width: 1024px)">`);

      // Wrapping Ratings elements in a single div
      const starImage = document.querySelector('.head-cont .new-hero-1001 .wrapper .review img + img');
      starImage.setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1754668576/netwrix/1015/stars.svg');
      const ratingText = document.querySelectorAll('.head-cont .new-hero-1001 .wrapper .review img + img ~ span');

      const reviewTextDiv = document.createElement('div');
      reviewTextDiv.className = 'spz-1011-reviewText';

      // Append star image
      reviewTextDiv.appendChild(starImage);
      // Append each span
      ratingText.forEach(span => {
        reviewTextDiv.appendChild(span);
      });

      // Insert the new wrapper into the DOM
      document.querySelector('.head-cont .new-hero-1001 .wrapper .review').appendChild(reviewTextDiv);

      // Change Hero Title copy
      document.querySelector('.spz_1015 .head-cont .new-hero-1001 .wrapper .title').innerHTML = `Identify Threats. <br class="desktop-break">Secure Data. <br class="tablet-break">Reduce Risk.`;

      // Update Review count
      const reviewsCountInterval = setInterval(function () {
        if (document.querySelector('.spz_1015 .spz-1011-reviewText span')) {
          clearInterval(reviewsCountInterval);
          document.querySelector('.spz-1011-reviewText  > span:nth-of-type(1)').textContent = `4.7`;
          document.querySelector('.spz_1015 .spz-1011-reviewText span:last-child').innerHTML = `(206 reviews)<sup>*</sup>`;
          document.querySelector('.head-cont .shifter-wrapper .new-review-ribbon .reviews-count span').textContent = `(206 reviews)`;
        }
      }, 10);

    }

    function handleCards() {
      // Adding class to cards for maintaining easily with css
      document.querySelectorAll('.spz_1015 .head-cont .new-hero-1001 .wrapper .cards .card').forEach(function (card, index) {
        card.classList.add(`card-${index + 1}`);
      });
    }

    function imageChanges() {
      // Updating main hero banner image
      document.querySelector('.spz_1015 .head-cont .new-hero-1001 .hero-image img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1011/image_4x_2.webp');
      document.querySelector('.spz_1015 .head-cont .new-hero-1001 .hero-image source:not([media])').setAttribute('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1011/image_4x_2.webp');
      document.querySelectorAll('.spz_1015 .head-cont .new-hero-1001 .hero-image source[media="(max-width:1259px)"], .spz_1015 .head-cont .new-hero-1001 .hero-image source[media="(max-width:767px)"]').forEach(function (ele) {
        ele.srcset = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1011/image_4x_2.webp';
      });
    }

    heroCopyChanges();
    handleCards();
    imageChanges();

    // 1015 code

    setTimeout(() => {
      document.querySelector('.head-cont .new-review-ribbon').insertAdjacentHTML('afterend', `
				<div class="performance">
        <div class="auto_container">
          <div class="performance_inner">
            <div class="performance_list">
              <ul>
                <li>
                  <div class="performance_data">
                    <strong>
                      85%
                      <span>less time <br>
                        auditing</span>
                    </strong>
                    <p>Extremely helpful. I can investigate an incident in a few clicks, whereas before it would take hours to dig through logs.</p>
                    <small>
                      <span>
                        <strong>Boytcho Boytchev</strong>
                        <i>Information Security Officer</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1015/logo-credissimo.webp" alt="credissimo" width="81" height="48">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      90%
                      <span>faster <br>
                        compliance</span>
                    </strong>
                    <p>The best tool. It provides quality reporting to help us comply with regulations and decrease the time spent.</p>
                    <small>
                      <span>
                        <strong>Predrag Škundrić</strong>
                        <i>CISO</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-api-bank.svg" alt="API bank" width="59" height="45">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      6X
                      <span>faster <br>
                        audits</span>
                    </strong>
                    <p>Netwrix Auditor gathers all the data we need for internal audits while taking the usual 2–3 hours down to 30 minutes.</p>
                    <small>
                      <span>
                        <strong>Cody Lavallee</strong>
                        <i>IT Infra Manager</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-progress-residential.svg" alt="progress residential" width="111" height="48">
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
		`);

    document.querySelector('.footer .footer-note').textContent = document.querySelector('.footer .footer-note').textContent.replace('4.5', '4.7').replace('143', '206').trim();

    }, 500);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '1015';
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

// bottom accordion section image change for Client request
function accordionChanges() {
  if (document.querySelector('.customSPZ.accordion-section .image-container.slide-2')) {
    document.querySelector('.customSPZ.accordion-section .image-container.slide-2 img').setAttribute('src', `//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1003/new_image.webp`);
    document.querySelectorAll('.customSPZ.accordion-section .image-container.slide-2 picture source[media="(max-width:1023px)"]').forEach(function (ele) {
      ele.setAttribute('srcset', `//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1003/new_image_tablet.webp`);
    });
  }
}

setInterval(() => {
  if (document.querySelectorAll('.head-cont').length > 0) {
    loadTestCode();
    accordionChanges();
  }
}, 100);
