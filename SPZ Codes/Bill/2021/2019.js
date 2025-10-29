const bodyInterval2014 = setInterval(function(){
    if(document.querySelector('body') && !document.querySelector('.spz_2019')) {
      clearInterval(bodyInterval2014);
      document.querySelector('body').classList.add("spz_2019");
      localStorage.setItem('bdcAbTest9','2019-v1');
      
      HeroBannerTextChanges();
      
      function HeroBannerTextChanges() {
          // Wrap Meet BILL in a span for make it colored
          const heroTitle = document.querySelector('.hero-full-width-wrapper .hero-full-width .hero-full-width-left .hero-left-wrapper .header-hero');
              if (heroTitle) {
                  const originalText = heroTitle.textContent.trim();
                  const updatedText = originalText.replace(
                      'Meet BILL.',
                      '<span class="orange-text">Meet BILL.</span>'
                  );
                  heroTitle.innerHTML = updatedText;
              }
              
              // Update Hero Subhead Text
              const heroSubHead = document.querySelector('.spz_2019 .hero-full-width-wrapper .hero-full-width .hero-full-width-left .hero-left-wrapper .subheader-hero');
              if (heroSubHead) {
                  const originalText = heroSubHead.textContent.trim();
                  const updatedText = originalText.replace('grow—all', 'grow — all');
                  heroSubHead.innerHTML = updatedText;
              }
              
              // Updating button disclaimer Text
              const buttonDisclaimer = document.querySelector('.spz_2019 .hero-full-width-wrapper .hero-full-width .button-disclaimer.is-email');
  
              if (buttonDisclaimer) {
                  const originalHTML = buttonDisclaimer.innerHTML;
                  const updatedHTML = originalHTML.replace(`BILL's`, `BILL`);
                  buttonDisclaimer.innerHTML = updatedHTML;
              }
  
              
              // Update Arrow SVG Icon
              document.querySelector('.spz_2019 .hero-full-width-wrapper .hero-full-width a.button-link.link-container .arrow-icon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M10.5303 2.9696L17.5607 9.99993L10.5303 17.0303L9.46966 15.9696L14.6893 10.75L3.5 10.75V9.24999L14.6894 9.24999L9.46966 4.03026L10.5303 2.9696Z" fill="#024DBD"></path>
              </svg>`;
              
              // Adding Hero Banner Images
              if (!document.querySelector('.spz_2014_image_innerWrapper')) {
                      document.querySelector('.hero-full-width-wrapper .hero-full-width > div.full-width-grid-item.is-right').innerHTML = ` <div class="spz_2014_image_innerWrapper">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2014/hero-image-1.webp" alt="AP & AR"> <div class="spz_2014_video_thumbnail_outer">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2014/video-thumbnail.webp" alt="BILL in action" class="spz_2014_video_thumbnail">
                      </div><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2014/hero-image-3.webp" alt="Spend & Expense"></div>`;
              }
      }	
  
      // Email validation function
      function validateEmail() {
          const form = document.querySelector('#email-form');
          const emailInput = document.querySelector('#email');
          const emailValue = emailInput.value.trim();
  
          // Check for empty, missing @, or @ at the end
          if (emailValue === '' || !emailValue.includes('@') || emailValue.endsWith('@')) {
              form.classList.add('spz_invalid_input_error');
          } else {
              form.classList.remove('spz_invalid_input_error');
          }
      }
  
      // Add click event listener to button
      document.querySelector('#homepage-form-button').addEventListener('click', function (e) {
          validateEmail();
      });
  
    }
  }, 10);
  