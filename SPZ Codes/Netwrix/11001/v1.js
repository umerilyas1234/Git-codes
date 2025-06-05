(function() {
  const bodyInterval11001 = setInterval(  
    function() {
      if(document.querySelector('body') && !document.querySelector('.spz-11001') && document.querySelector('.head-container')){
        clearInterval(bodyInterval11001)
        document.querySelector('body').classList.add("spz-11001")
				window.location.href = window.location.pathname.replace(/\/$/, '') + '?v1' + window.location.search + window.location.hash;

        //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
        //exptName should be #1001, #1002, #1003 etc.
        const expName = '11001';
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
              for(var i = 0; i < ca.length; i++) {
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
        
        const loadJS = (url, implementationCode, location)=>{
          var scriptTag = document.createElement('script');
          scriptTag.src = url;
        
          scriptTag.onload = implementationCode;
          scriptTag.onreadystatechange = implementationCode;
        
          location.appendChild(scriptTag);
        };

        const gb_load_css =(path)=> {
          let css = document.createElement('link');
          css.rel = 'stylesheet';
          css.media = 'all';
          css.href = path;
        
          document.getElementsByTagName('head')[0].appendChild(css);
        }

        // section 1 start
        document.querySelector('.spz-11001 .head-container').classList.add("spz-11001-section1")
        document.querySelector('.spz-11001 .spz-11001-section1 .title').innerHTML="Netwrix Auditor <span class='break'></span>Free Community Edition";
        document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form >div:nth-child(1) input').setAttribute("placeholder","Work Email")
        document.querySelector('.spz-11001 .affix-nav .form-cont form >div:nth-child(1) input').setAttribute("placeholder","Work Email")
        document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form > div:nth-child(2) input').value="Download Netwrix Auditor for Free";
        document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form > div:nth-child(2) input').classList.add("spz-11001-section1-download-cta")
        const targetNode = document.querySelector('body');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if(document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form > div:nth-child(2) input').value=="Download Free Netwrix Auditor" ||
               document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form > div:nth-child(2) input').value=="Get your email download link"
            ){
              document.querySelector('.spz-11001 .spz-11001-section1 .form-cont form > div:nth-child(2) input').value="Download Netwrix Auditor for Free"
            }
            if(document.querySelector('.spz-11001 .spz-11001-section1 .form-cont>.form-horizontal #errorBodyForm') && document.querySelector('.spz-11001 .spz-11001-section1 .form-cont>.form-horizontal #errorBodyForm').textContent=='Business Email cannot be blank.'){
               document.querySelector('.spz-11001 .spz-11001-section1 .form-cont>.form-horizontal #errorBodyForm').textContent='Work Email cannot be blank.'
            }
            if(document.querySelector('.spz-11001 .affix-nav .form-cont #errorBodyForm') && document.querySelector('.spz-11001 .affix-nav .form-cont #errorBodyForm').textContent=='Business Email cannot be blank.'){
               document.querySelector('.spz-11001 .affix-nav .form-cont #errorBodyForm').textContent='Work Email cannot be blank.'
            }
          }
        }
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        document.querySelector('.spz-11001 .spz-11001-section1 .form-cont .additional-block .security-info').innerHTML=`
        We care about the security of your data. <a href="/privacy.html" target="_blank" id="privacyLink" class="no-wrap">Privacy Policy</a>
        `
        document.querySelector('.spz-11001 .spz-11001-section1').insertAdjacentHTML("beforeend",`
          <picture>
            <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/hero-image-tablet.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/ui_image.webp" alt="hero_image" width="1800" height="550" class="hero-image">
          </picture>
          <div class="logos-section">
            <div class="logo-title">Trusted by 13,500+ organizations</div>
            <div class="images">
              <picture>  
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745499107/netwrix/11001/logo_-_airbus_3.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745499105/netwrix/11001/logo_-_airbus_2.svg" width="126" height="72" alt="Airbus Logo">
              </picture>
              <picture>
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745499108/netwrix/11001/logo_-_virgin_3.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745499106/netwrix/11001/logo_-_virgin_2.svg" width="82" height="72" alt="Virgin Logo">
              </picture>
              <picture>
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745499107/netwrix/11001/logo_-_denso_3.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745499105/netwrix/11001/logo_-_denso_2.svg" width="125" height="72" alt="Denso Logo">
              </picture>
              <picture>
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745499108/netwrix/11001/logo_-_allianz_3.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745499106/netwrix/11001/logo_-_allianz_2.svg" width="161" height="72" alt="Allianz Logo">
              </picture>
              <picture>
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745499108/netwrix/11001/logo_-_nhs_3.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745499106/netwrix/11001/logo_-_nhs_2.svg" width="109" height="72" alt="NHS Logo">
              </picture>
              <picture>
                <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/Logo-Geneva-mobile.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1745519459/netwrix/11001/logo-geneva.svg" width="164" height="72 " alt="The Geneva Foundation Logo">
              </picture>
            </div>
          </div>
        `)

        // section 2 start
        document.querySelector('.spz-11001 .spz-11001-section1').insertAdjacentHTML("afterend",`
        <div class="spz-11001-section2">
          <div class="slider-section">
            <div class="gartner-review">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1729152023/netwrix/6002/peer-insights-r-tm-rgb-for-white-bkgrnd_1.svg" alt="Gartner Logo" width="154" height="54">
              <div class="second">
                <div class="border"></div>
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1741851883/netwrix/6002/stars_8.svg" alt="Stars Logo" width="108" height="20">
                <div class="text"><strong>4.5</strong><span>(186 reviews)*</span></div>
              </div>
            </div>
            <section class="splide splide1">
              <div class="splide__track"> 
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg" alt="Stars Logo" width="108" height="20" >
                      <div class="quote">“It does exactly what it's advertised to do. Overall the product provides some of the best SharePoint..”</div>
                      <div class="user-info">
                          <div class="position">Systems Engineering Manager</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928?step=register'">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg" alt="Stars Logo" width="108" height="20" >
                      <div class="quote">“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource...”</div>
                      <div class="user-info">
                          <div class="position">IT Manager</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg" alt="Stars Logo" width="108" height="20" >
                      <div class="quote">“A reasonable price for what is offered. The product does what it says. Empowers Information Security and Governance in order to reduce...”</div>
                      <div class="user-info">
                          <div class="position">Engineering Manager</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5334748">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg" alt="Stars Logo" width="108" height="20" >
                      <div class="quote">“The product is quite easy to use and straight forward and very robust for our company's needs. It is easy to train new staff on the use...”</div>
                      <div class="user-info">
                          <div class="position">IT Administrator</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5514524">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg" alt="Stars Logo" width="108" height="20" >
                      <div class="quote">“Help to provide evidences to IT Audit and monitor activities for Compliance...”</div>
                      <div class="user-info">
                          <div class="position">IT Associate</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713590">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>  
        </div>
        <div class="spz-11001-section3">
          <div class="wrapper">
            <div class="title">Features</div>
            <div class="carousel-section">
              <div class="text">
                <div class="child active" data-index="1">
                  <div class="carousel-title">
                    <span>Risk assessment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="content">
                    <p>View a list of current vulnerabilities and their associated risk level. Includes passwordless users, loose permissions, sensitive data in filenames, and more. See which vulnerabilities are most critical and prioritize remediation.</p>
                    <p>Easily adjust risk thresholds so you only see what impacts your organization.</p>
                    <div class="button-wrapper">
                      <a href="https://www.netwrix.com/product_online_demo.html" data-section="Risk assessment" class="spz-11001-section3-launch-cta">Launch In-Browser Demo</a>
                      <a href="https://www.netwrix.com/one-to-one.html" data-section="Risk assessment" class="spz-11001-section3-schedule-cta">Schedule One-to-One Demo</a>
                    </div>
                    <div class="mobile-image">
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img-mob.png">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img-tablet.png" alt="risk_assessment_image" width="1911" height="1127">
                    </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="2">
                  <div class="carousel-title">
                    <span>Threat detection</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Identify threats and security gaps across your IT environment. Unusual logins, suspicious admin activity, multiple inactive users, and more.</p>
                    <p>Get alerts before breaches or system failures occur. Investigate and remediate risks. </p>
                    <div class="button-wrapper">
                      <a href="https://www.netwrix.com/product_online_demo.html" data-section="Threat detection" class="spz-11001-section3-launch-cta">Launch In-Browser Demo</a>
                      <a href="https://www.netwrix.com/one-to-one.html" data-section="Threat detection" class="spz-11001-section3-schedule-cta">Schedule One-to-One Demo</a>
                    </div>
                    <div class="mobile-image">
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/threat_detection-img-mob.png">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/threat_detection-img-tablet.png" alt="threat_detection_image" width="1728" height="1120">
                    </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="3">
                  <div class="carousel-title">
                    <span>Change, access, and configuration reporting</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Get detailed reports on environment changes, access permissions, and configurations.</p>
                    <p>See who changed what, when, and where. Rollback unauthorized changes. Identify who can access sensitive folders & correct loose permissions. View reports of critical systems at any given date. Compare with current configurations.</p>
                    <p>Covers Active Directory, user accounts, Windows Server, and more.</p>
                    <div class="button-wrapper">
                      <a href="https://www.netwrix.com/product_online_demo.html" data-section="Change, access, and configuration reporting" class="spz-11001-section3-launch-cta">Launch In-Browser Demo</a>
                      <a href="https://www.netwrix.com/one-to-one.html" data-section="Change, access, and configuration reporting" class="spz-11001-section3-schedule-cta">Schedule One-to-One Demo</a>
                    </div>
                    <div class="mobile-image">
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/change_access-img-mob.png">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/change_access-img-tablet.png" alt="change_access_and_configuration_reporting_image" width="1728" height="1120">
                      </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="4">
                  <div class="carousel-title">
                    <span>Access reviews</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Accurately enforce least privilege by delegating permissions review to resource owners. Let owners check access levels, suggest permission changes, and leave notes. Track review statuses & send reminders.</p>
                    <div class="button-wrapper">
                      <a href="https://www.netwrix.com/product_online_demo.html" data-section="Access reviews" class="spz-11001-section3-launch-cta">Launch In-Browser Demo</a>
                      <a href="https://www.netwrix.com/one-to-one.html" data-section="Access reviews" class="spz-11001-section3-schedule-cta">Schedule One-to-One Demo</a>
                    </div>
                    <div class="mobile-image">
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/access_reviews-img-mob.png">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/access_reviews-img-tablet.png" alt="access_reviews_image" width="1728" height="1120">
                      </picture> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="image">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img.png" alt="risk_assessment_image" class="reference" alt="risk_assessment_image" width="1911" height="1127">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img.png" alt="risk_assessment_image" class="hero active" data-index="1" alt="risk_assessment_image" width="1911" height="1127">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp" class="hero" data-index="2" alt="threat_detection_image" width="1728" height="1120">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp" class="hero" data-index="3" alt="change_access_and_configuration_reporting_image" width="1728" height="1120">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp" class="hero" data-index="4" alt="access_reviews_image" width="1728" height="1120">
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11001-section4">
          <div class="wrapper">
            <div class="title">Why Netwrix Auditor Free Community Edition?</div>
            <div class="cards">
              <div class="card">
                <div class="title">Automate user activity monitoring</div>
                <div class="desc">Tracks all changes and access events in your critical systems and automatically delivers the information straight to your mailbox every single day.</div>
              </div>
              <div class="card">
                <div class="title">Built on proven Netwrix technology</div>
                <div class="desc">Consolidates information from multiple independent sources to transform raw data into meaningful and actionable intelligence.</div>
              </div>
              <div class="card">
                <div class="title">100% free security monitoring</div>
                <div class="desc">Reports on user activity in your environment for as long as you need it to. In addition, you get to evaluate the full version of Netwrix Auditor free of charge for 20 days.</div>
              </div>
              <div class="card">
                <div class="title">Scales with your business</div>
                <div class="desc">Seamlessly upgrades to the full version of Netwrix Auditor, which delivers complete visibility into user behavior for data security and risk mitigation.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11001-section5">
          <div class="wrapper">
            <div class="text">
              <div class="title">Broadest Coverage</div>
              <div class="desc">Reports on user activity across all of your on-premises or cloud-based IT systems in a unified way.</div>
              <button class="spz-11001-section5-download-cta">Download Netwrix Auditor for Free</button>
            </div>
            <picture>
              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745575965/netwrix/11001/frame_1171276315.svg">
              <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1745575968/netwrix/11001/frame_1171276316.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1745575965/netwrix/11001/desktop-it-logos_1.svg" alt="Broadest Coverage" width="1060" height="951">
            </picture>
          </div>
        </div>
        <div class="spz-11001-section6">
          <div class="wrapper">
            <div class="title">Free Community Edition or Standard Edition?</div>
            <div class="table-comparison">
              <div class="head">
                <div class="col1">Functionality</div>
                <div class="col2">Free Community Edition</div>
                <div class="col3">Standard Edition</div>
              </div>
              <div class="accordion">
                <div data-index="1" class="child active">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Basic Auditing & Reporting</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Reporting on configuration changes, read attempts and logons</div>
                      <div class="col2 check"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Daily Activity Summary sent automatically to a single recipient</div>
                      <div class="col2 check"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Before and after values for every modification</div>
                      <div class="col2 check"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">"What", "when", "where" details for each reported event</div>
                      <div class="col2 check"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">"Who" details for each reported event</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Ability to run, customize and save reports</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Ability to schedule report delivery to any # of recipients</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">State-in-Time configuration reporting</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="2" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Advanced Analysis & Intelligence</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Behavior anomaly discovery</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">User behavior and blind spot analysis</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Risk assessment</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Alerts on threat patterns</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="3" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Compliance & Governance</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Out-of-the-box compliance reports mapped to specific regulatory standards (PCI DSS, HIPAA, SOX, GDPR, FISMA/NIST800-53 and more)</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">File analysis</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Role-based access control</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="4" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Dashboards & Search</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Overview dashboards</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Google-like search of audit data</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="5" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Recovery & Management</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Active Directory object restore</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="6" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">System Capabilities & Integration</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Multiple audited objects per system</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Integration (RESTful API)</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                    <div class="accordion-row">
                      <div class="col1">Two-tiered (file-based + SQL database) storage of audit data</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
                <div data-index="7" class="child">
                  <div class="accordion-wrapper">
                    <div class="accordion-title">
                      <span class="text">Support & Maintenance</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.53236 12.5326C9.39184 12.6723 9.20175 12.7507 9.00361 12.7507C8.80547 12.7507 8.61538 12.6723 8.47486 12.5326L2.47486 6.53264C2.35199 6.38916 2.28779 6.20461 2.29508 6.01585C2.30237 5.82709 2.38062 5.64804 2.51419 5.51447C2.64776 5.3809 2.82681 5.30265 3.01557 5.29536C3.20433 5.28806 3.38888 5.35227 3.53236 5.47514L8.99986 10.9426L14.4674 5.46764C14.6086 5.32641 14.8001 5.24707 14.9999 5.24707C15.1996 5.24707 15.3911 5.32641 15.5324 5.46764C15.6736 5.60887 15.7529 5.80041 15.7529 6.00014C15.7529 6.19987 15.6736 6.39141 15.5324 6.53264L9.53236 12.5326Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="content">
                    <div class="accordion-row">
                      <div class="col1">Support</div>
                      <div class="col2 cross"></div>
                      <div class="col3 check"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11001-section7">
          <div class="wrapper">
            <div class="title">Identify risks, detect security threats, and automate compliance reporting</div>
            <button class="spz-11001-section7-download-cta">Download Netwrix Auditor for Free</button>
            <div class="terms">We care about the security of your data. <a href="/privacy.html" target="_blank" id="privacyLink" class="no-wrap">Privacy Policy</a></div>
          </div>
        </div>
        `)
        document.querySelector('.spz-11001 .spz-11001-section1').insertAdjacentElement("afterend",document.querySelector('.spz-11001 #affixFlag'))
        gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
        loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
          let splide;
          splide = new Splide('.spz-11001 .spz-11001-section2 .splide1', {
            type   : 'loop',
            autoplay: true,
            perPage: 3,
            gap: '12px',
            slidperMove: 1,
            interval:4000,
            arrows: true,
            breakpoints: {
              1259.98: {
                perPage: 2,
                slidperMove: 2,
              },
              757.98: {
                perPage: 1,
                slidperMove: 1,
              },
            },
          });
          splide.mount();
        },document.body)


        //section 3
        loadJS('https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@16.1.3/dist/smooth-scroll.min.js', function(){}, document.body);
        const closedCarouselAnimation = (curActiveElement)=>{
          const curHeight= document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
          document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("active")
          document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
          const afterHeight = document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
          document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .hero[data-index="'+curActiveElement+'"]').classList.remove("active")
          document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=curHeight+"px"
          setTimeout(function(){
            document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=afterHeight+"px"
          },1)
          setTimeout(function(){
            document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
          },501)
        }
        const adjustContentHeight =()=>{
          const curActiveElementIndex = document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .text .active').getAttribute("data-index");
          const curActiveElement =document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
          const fullHeight =curActiveElement.offsetHeight;
          curActiveElement.classList.remove("active")
          const prevHeight = curActiveElement.offsetHeight
          curActiveElement.classList.add("active")
          curActiveElement.style.height=prevHeight+"px";
          setTimeout(function(){
            curActiveElement.style.height=fullHeight+"px";
          },1)
        }
  
        const setHeightOnResize=()=>{
          const curActiveElementIndex = document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .text .active').getAttribute("data-index");
          const curActiveElement =document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
          curActiveElement.removeAttribute("style")
          const fullHeight =curActiveElement.offsetHeight;
          curActiveElement.style.height=fullHeight+"px";
        }

        //event listener 
  
        document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .text').addEventListener('click', function(e) {
          if(e.target.closest(".carousel-title") && !e.target.closest(".clicked")){
            //remove active
            const curActiveElement = document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .text .active').getAttribute("data-index");
            document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("clicked");
  
            // to add animation when closed
            if(curActiveElement!=e.target.closest('.child').getAttribute("data-index")){
              closedCarouselAnimation(curActiveElement)
            }
  
            // add active
            e.target.closest(".child").classList.add("clicked","active")
            document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .hero[data-index="'+ e.target.closest(".child").getAttribute("data-index")+'"]').classList.add("active")
            if(curActiveElement!=e.target.closest('.active').getAttribute("data-index")){
              adjustContentHeight();
            }
  
            // auto scroll on mobile
            if(window.matchMedia("(max-width: 1259.98px)").matches && document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .child.clicked')){
              document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section').classList.add("mobile-clicked")
              setTimeout(function(){
                document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
              },1003)
              let  headerHeight = 0
              setTimeout(function(){
                let scroll = new SmoothScroll();
                scroll.animateScroll(document.querySelector('.spz-11001 .spz-11001-section3 .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
                  easing: 'easeOutQuad',
                  speed: 500,
                  speedAsDuration: true,
                });
              },502)
              var logScrollEvent = function (event) {
  
                // The event type
                console.log(event)
              
              };
              document.addEventListener('scrollStop', logScrollEvent, false);
            }
          }
        });
        
        window.addEventListener("resize",function(){
          setHeightOnResize()
        })
        window.dispatchEvent(new Event('scroll'));

        //  section 5 
        document.querySelector('.spz-11001 .spz-11001-section5 .text .spz-11001-section5-download-cta').addEventListener("click",function(){
          let scroll = new SmoothScroll();
          scroll.animateScroll(document.querySelector('.spz-11001 .spz-11001-section1 .title').getBoundingClientRect().y + scrollY, null, {
            easing: 'easeOutQuad',
            speed: 500,
            speedAsDuration: true,
          });
        })

        //section 6
        const adjustAccordionContentHeight =()=>{
          const curActiveElementIndex = document.querySelector('.spz-11001 .spz-11001-section6 .accordion .active').getAttribute("data-index");
          const curActiveElement =document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElementIndex+'"]');
          const fullHeight =curActiveElement.offsetHeight;
          curActiveElement.classList.remove("active")
          const prevHeight = curActiveElement.offsetHeight
          curActiveElement.classList.add("active")
          curActiveElement.style.height=prevHeight+"px";
          setTimeout(function(){
            curActiveElement.style.height=fullHeight+"px";
          },1)
        }
        const setHeightAccordionOnResize=()=>{
          const curActiveElementIndex = document.querySelector('.spz-11001 .spz-11001-section6 .accordion .active').getAttribute("data-index");
          const curActiveElement =document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElementIndex+'"]');
          curActiveElement.removeAttribute("style")
          const fullHeight =curActiveElement.offsetHeight;
          curActiveElement.style.height=fullHeight+"px";
        }
        document.querySelector('.spz-11001 .spz-11001-section6 .accordion').addEventListener('click', function(e) {
          if(e.target.closest(".accordion-title") && !e.target.closest(".child").classList.contains("active")){
            //remove active
            const curActiveElement = document.querySelector('.spz-11001 .spz-11001-section6 .accordion .active').getAttribute("data-index");
            // animation closed
            const curHeight= document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').offsetHeight;
            document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').classList.remove("active")
            document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
            const afterHeight = document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').offsetHeight;
            document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').style.height=curHeight+"px"
            setTimeout(function(){
              document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').style.height=afterHeight+"px"
            },1)
            setTimeout(function(){
              document.querySelector('.spz-11001 .spz-11001-section6 .accordion .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
            },501)


            // add active
            e.target.closest(".accordion-title").closest('.child').classList.add("active")
            if(curActiveElement!=e.target.closest('.active').getAttribute("data-index")){
              adjustAccordionContentHeight();
            }

            // auto scroll on mobile
            if(window.matchMedia("(max-width: 1259.98px)").matches && document.querySelector('.spz-11001 .spz-11001-section6 .accordion .active')){
              setTimeout(function(){
                let scroll = new SmoothScroll();
                scroll.animateScroll(document.querySelector('.spz-11001 .spz-11001-section6 .accordion .active').getBoundingClientRect().y + scrollY, null, {
                  easing: 'easeOutQuad',
                  speed: 500,
                  speedAsDuration: true,
                });
              },502)
            }
          }
        });
        window.addEventListener("resize",function(){
          setHeightAccordionOnResize()
        })

         //  section 7
         document.querySelector('.spz-11001 .spz-11001-section7 .spz-11001-section7-download-cta').addEventListener("click",function(){
          let scroll = new SmoothScroll();
          scroll.animateScroll(document.querySelector('.spz-11001 .spz-11001-section1 .title').getBoundingClientRect().y + scrollY, null, {
            easing: 'easeOutQuad',
            speed: 500,
            speedAsDuration: true,
          });
        })
      }

    }, 10);
})();
