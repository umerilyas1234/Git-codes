function runCode6007() {
  if (!document.body.classList.contains('spz-6001')) {
  document.body.classList.add('spz-6001');
  // Get the current URL
  var currentUrl = window.location.href.split('?')[0].split('#')[0];

  // Check if the URL matches one of the given URLs and execute the corresponding code
  if (currentUrl === 'https://www.netwrix.com/auditor.html') {
      var newHero = `<div class="new-hero audit">
              <div class="hero-container">
                  <div class="hero-flex">
                      <div class="hero-title-contain">
                          <div class="hero-product-name">NETWRIX AUDITOR</div>
                          <div class="hero-main-title">Ease the burden of IT auditing</div>
                          <p>Identify risks, detect security threats, automate compliance reporting, increase IT team efficiency with IT audit software from Netwrix.</p>
                          <div class="hero-buttons head-cont">
                          </div>
                      </div>
                      <div class="hero-image-contain">
                          <picture>
                              <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webp">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1739961571/netwrix/6001/image_4.webp" alt="auditor_ui_image">
                          </picture>	
                      </div>
                  </div>
              </div>
              <div class="hero-organiza-container">
                  <div class="hero-organiza-content">
                      <p>Trusted by 13,500+ organizations</p>
                      <ul>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                          <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                      </ul>
                  </div>
              </div>
      </div>`;
      document.querySelector('.spz-6001 main .navbar').insertAdjacentHTML('afterend', newHero);
  } else if (currentUrl === 'https://www.netwrix.com/endpoint-dlp-solution.html') {
      var newHero = `<div class="new-hero endpointProtector-spz">
                  <div class="hero-container">
                      <div class="hero-flex">
                          <div class="hero-title-contain">
                              <div class="hero-product-name">Netwrix Endpoint Protector</div>
                              <div class="hero-main-title">Protect sensitive data</div>
                              <p>Endpoint Protector’s advanced multi-OS DLP is complete with granular device and USB control, content-aware protection, enforced encryption, and multiple deployment options.</p>
                              <div class="hero-buttons head-cont"></div>
                          </div>
                          <div class="hero-image-contain">
                             <picture>
                                <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1729692826/netwrix/6001/image_vector.svg">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/image_4x.webp" alt="auditor_ui_image">
                            </picture>	
                          </div>
                      </div>
                  </div>
                  <div class="hero-organiza-container">
                      <div class="hero-organiza-content">
                          <p>Trusted by 13,500+ organizations</p>
                          <ul>
                              <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                              <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                              <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                              <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                              <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                          </ul>
                      </div>
                  </div>
              </div>`;
      document.querySelector('.spz-6001 main .navbar').insertAdjacentHTML('afterend', newHero);
  }

  document.querySelector('.hero-buttons.head-cont').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));
  document.querySelectorAll('.spz-6001 .hero-buttons .nwx-btn').forEach((item) => {
      item.classList.add('spz_6007_v1');
  });
  document.querySelectorAll('.spz-6001 .hero-buttons button.nwx-btn').forEach((item) => {
      item.classList.add('get-demo');
  });

  document.querySelector('.spz-6001 main .navbar').insertAdjacentHTML('afterend', `<div class="new-head-cont head-cont"></div>`);
  const breadcrumbs = document.querySelector('.spz-6001 .head-cont .breadcrumbs');
  document.querySelector('.spz-6001 .new-head-cont').insertAdjacentElement('beforeend', breadcrumbs);

//   if(document.querySelector('.spz-6001 .hero-buttons .get-demo')){
//       document.querySelector('.spz-6001 .hero-buttons .get-demo').addEventListener('click', function () {
//       document.querySelector('.head-cont .nwx-red-btn').click();
//       });
//   }

  if(document.querySelector('.spz-6001 .hero-buttons .product-tour')){
      document.querySelector('.spz-6001 .hero-buttons .product-tour').addEventListener('click', function () {
      document.querySelector('.head-cont .nwx-red-btn').click();
      });
  }
  }
  
  // 6003 Test https://www.netwrix.com/endpoint-dlp-solution.html
  document.querySelector("body").classList.add('spz-6003','endpoint')
  const loadJS = (url, implementationCode, location)=>{
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
  
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
  
    location.appendChild(scriptTag);
  };

  document.querySelector('.new-hero.endpointProtector-spz').insertAdjacentHTML("afterend",
  `
  <div class="spz-6003-section">
    <div class="wrapper">
      <div class="title">Features</div>
      <div class="carousel-section">
        <div class="text">
          <div class="child active" data-index="1">
            <div class="carousel-title">
              <span>Device control</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="content">
              <p>Lockdown, control, and monitor USB and peripheral ports to stop data theft and data loss.</p>
              <div class="button-wrapper">
                <a href="https://www.netwrix.com/netwrix-endpoint-protector-online-product-demos.html" data-section="Device control" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Device control" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
              </div>
              <div class="mobile-image">
              <picture>
                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/device_control-img-m.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/device_control-img-t.png" alt="device_control_image" width="1415" height="656">
              </picture> 
              </div>
            </div>
          </div>
          <div class="child" data-index="2">
            <div class="carousel-title">
              <span>Content-aware protection</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="content">
              <p>Stop data loss at the endpoint with contextual scanning across Windows, macOS, and Linux.</p>
              <div class="button-wrapper">
                <a href="https://www.netwrix.com/netwrix-endpoint-protector-online-product-demos.html" data-section="Content-aware protection" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Content-aware protection" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
              </div>
              <div class="mobile-image">
              <picture>
                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/content_aware-img-m.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/content_aware-img-t.png" alt="content-aware_protection_image" width="1415" height="656">
              </picture> 
              </div>
            </div>
          </div>
          <div class="child" data-index="3">
            <div class="carousel-title">
              <span>Enforced encryption</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="content">
              <p>Encrypt, manage and secure USB storage devices to safeguard data in transit.</p>
              <div class="button-wrapper">
                <a href="https://www.netwrix.com/netwrix-endpoint-protector-online-product-demos.html" data-section="Enforced encryption" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Enforced encryption" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
              </div>
              <div class="mobile-image">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/enforced_encryption-img-m.png">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/enforced_encryption-img-t.png" alt="enforced_encryption_image" width="1415" height="656">
                </picture> 
              </div>
            </div>
          </div>
          <div class="child" data-index="4">
            <div class="carousel-title">
              <span>Discovery</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.46739 12.5326C8.60792 12.6723 8.79801 12.7507 8.99614 12.7507C9.19428 12.7507 9.38437 12.6723 9.52489 12.5326L15.5249 6.53264C15.6478 6.38916 15.712 6.20461 15.7047 6.01585C15.6974 5.82709 15.6191 5.64804 15.4856 5.51447C15.352 5.3809 15.1729 5.30265 14.9842 5.29536C14.7954 5.28806 14.6109 5.35227 14.4674 5.47514L8.99989 10.9426L3.53239 5.46764C3.39117 5.32641 3.19962 5.24707 2.99989 5.24707C2.80017 5.24707 2.60862 5.32641 2.46739 5.46764C2.32617 5.60887 2.24683 5.80041 2.24683 6.00014C2.24683 6.19987 2.32617 6.39141 2.46739 6.53264L8.46739 12.5326Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="content">
              <p>Scan sensitive data stored on Windows, Mac, and Linux endpoints and remotely take remediation actions.</p>
              <div class="button-wrapper">
                <a href="https://www.netwrix.com/netwrix-endpoint-protector-online-product-demos.html" data-section="Discovery" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Discovery" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
              </div>
              <div class="mobile-image">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/discovery_img-m.png">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/discovery_img-t.png" alt="discovery_image" width="1415" height="656">
                </picture> 
              </div>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/device_control-img-d.png" class="reference" alt="device_control_image" width="1910" height="886">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/device_control-img-d.png" alt="device_control_image" class="hero active" data-index="1" alt="risk_assessment_image" width="1910" height="886">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/content_aware-img-d.png" class="hero" data-index="2" alt="content-aware_protection_image" width="1910" height="886">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/enforced_encryption-img-d.png" class="hero" data-index="3" alt="enforced_encryption_image" width="1910" height="886">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/discovery_img-d.png" class="hero" data-index="4" alt="discovery_image" width="1910" height="886">
        </div>
      </div>
    </div>
  </div>
  `);
  loadJS('https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@16.1.3/dist/smooth-scroll.min.js', function(){}, document.body);
  const closedCarouselAnimation = (curActiveElement)=>{
    const curHeight= document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("active")
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
    const afterHeight = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .hero[data-index="'+curActiveElement+'"]').classList.remove("active")
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=curHeight+"px"
    setTimeout(function(){
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=afterHeight+"px"
    },1)
    setTimeout(function(){
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
    },501)
  }
  const adjustContentHeight =()=>{
    const curActiveElementIndex = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
    const curActiveElement =document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
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
    const curActiveElementIndex = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
    const curActiveElement =document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
    curActiveElement.removeAttribute("style")
    const fullHeight =curActiveElement.offsetHeight;
    curActiveElement.style.height=fullHeight+"px";
  }

  //event listener 

  document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text').addEventListener('click', function(e) {
    if(e.target.closest(".carousel-title") && !e.target.closest(".clicked")){
      //remove active
      const curActiveElement = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("clicked");

      // to add animation when closed
      if(curActiveElement!=e.target.closest('.child').getAttribute("data-index")){
        closedCarouselAnimation(curActiveElement)
      }

      // add active
      e.target.closest(".child").classList.add("clicked","active")
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .hero[data-index="'+ e.target.closest(".child").getAttribute("data-index")+'"]').classList.add("active")
      if(curActiveElement!=e.target.closest('.active').getAttribute("data-index")){
        adjustContentHeight();
      }

      // auto scroll on mobile
      if(window.matchMedia("(max-width: 1259.98px)").matches && document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child.clicked')){
        document.querySelector('.spz-6003 .spz-6003-section .carousel-section').classList.add("mobile-clicked")
        setTimeout(function(){
          document.querySelector('.spz-6003 .spz-6003-section .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
        },1003)
        let  headerHeight = 0
        setTimeout(function(){
          let scroll = new SmoothScroll();
          scroll.animateScroll(document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
            easing: 'easeOutQuad',
            speed: 500,
            speedAsDuration: true,
          });
        },502)
      }
    }
  });
  
  window.addEventListener("resize",function(){
    setHeightOnResize()
  })
  window.dispatchEvent(new Event('scroll'));

}
function runCode6009() {
    if (!document.body.classList.contains('spz-6009')) {
    document.body.classList.add('spz-6009');

    // Check if the URL matches one of the given URLs and execute the corresponding code
    var newHero = `<div class="new-hero audit">
                <div class="hero-container">
                    <div class="hero-flex">
                        <div class="hero-title-contain">
                            <div class="hero-product-name">NETWRIX AUDITOR</div>
                            <div class="hero-main-title">Ease the burden of IT auditing</div>
                            <p>Identify risks, detect security threats, automate compliance reporting, increase IT team efficiency with IT audit software from Netwrix.</p>
                            <div class="hero-buttons head-cont">
                            </div>
                        </div>
                        <div class="hero-image-contain">
                            <picture>
                            <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/image_4.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/image_4.webp" alt="auditor_ui_image">
                            </picture>	
                        </div>
                    </div>
                </div>
                <div class="hero-organiza-container">
                    <div class="hero-organiza-content">
                        <p>Trusted by 13,500+ organizations</p>
                        <ul>
                            <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Airbus.png"alt="Airbus"></li>
                            <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Virgin.png"alt="Virgin"></li>
                            <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Denso.png"alt="Denso"></li>
                            <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Allianz.png"alt="Allianz"></li>
                            <li><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6001/Geneva-Foundation.png" alt="The Geneva Foundation"></li>
                        </ul>
                    </div>
                </div>
        </div>`;

    if (window.location.href.includes('netwrix.com/auditor')) {
        document.querySelector('body').classList.add('auditor');
        document.querySelector('.spz-6009 main .navbar').insertAdjacentHTML('afterend', newHero);
        document.querySelector('.hero-buttons.head-cont').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));

        document.querySelectorAll('.spz-6009 .hero-buttons .nwx-btn').forEach((item) => {
        item.classList.add('spz_6009_v1');
        });
        document.querySelectorAll('.spz-6009 .hero-buttons button.nwx-btn').forEach((item) => {
        item.classList.add('get-demo');
        item.textContent = 'Download Free Trial';
        });

        document.querySelector('.spz-6009 main .navbar').insertAdjacentHTML('afterend', `<div class="new-head-cont head-cont"></div>`);
        const breadcrumbs = document.querySelector('.spz-6009 .head-cont .breadcrumbs');
        document.querySelector('.spz-6009 .new-head-cont').insertAdjacentElement('beforeend', breadcrumbs);
    }

    if (window.location.href.includes('netwrix.com/data_classification_software') || window.location.href.includes('netwrix.com/privilege_secure') || window.location.href.includes('netwrix.com/enterprise-auditor')) {
        document.querySelector('body').classList.add('cta_only');
        document.querySelector('.head-cont .buttons-cont').insertAdjacentHTML('afterend', `<div class="hero-buttons head-cont"></div>`);
        document.querySelector('.hero-buttons').insertAdjacentElement('beforeend', document.querySelector('.head-cont .buttons-cont'));
        document.querySelectorAll('.spz-6009 .head-cont .buttons-cont .nwx-btn').forEach((item) => {
        item.classList.add('spz_6009_v1');
        });
        document.querySelectorAll('.spz-6009 .head-cont .buttons-cont button.nwx-btn').forEach((item) => {
        item.classList.add('get-demo');
        item.textContent = 'Download Free Trial';
        if (window.location.href.includes('netwrix.com/enterprise-auditor')) {
            item.textContent = 'Request Free Trial';
        }
        });
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('get-demo')) {
        setTimeout(() => {
            updateFormAndButton();
        }, 100);
        }
    });

    if (document.querySelector('.spz-6009 .hero-buttons .product-tour')) {
        document.querySelector('.spz-6009 .hero-buttons .product-tour').addEventListener('click', function () {
        document.querySelector('.head-cont .nwx-red-btn').click();
        });
    }

    var button = document.querySelector(".one-field-form-button-test [id^='app-']");
    var buttonID = button.id;
    const formId = `form-${buttonID}`;
    const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
    formContainer.classList.add('spz_modal');
    const securityElement = document.querySelector(".spz_modal .securityInfo");
    if (securityElement) {
        securityElement.innerHTML = securityElement.innerHTML.replace(
        /\bsecurity\b/g,
        "the security"
        );
    }
    function updateFormAndButton() {
        document.querySelector(`.spz_modal #ModalForm_leadType`).value = "Evaluation";
        if (window.location.href.includes('https://www.netwrix.com/auditor.html')) {
        document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Auditor";
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
        } else if (window.location.href.includes('netwrix.com/enterprise-auditor')) {
        document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Enterprise Auditor";
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Request Free Trial';
        } else if (window.location.href.includes('netwrix.com/data_classification_software')) {
        document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Data Classification";
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
        } else if (window.location.href.includes('netwrix.com/privilege_secure')) {
        document.querySelector(`.spz_modal .form-title`).textContent = "Start using Netwrix Privilege Secure";
        document.querySelector(`.spz_modal .modelFormSubmit`).value = 'Download Free Trial';
        }
        document.querySelector(`.spz_modal form #SPZ_Test`).value = 'variant1_6009_expand';
        document.querySelector('.spz_modal .securityInfo').innerHTML = document.querySelector('.spz_modal .securityInfo').innerHTML.replace('the the', 'the');
        console.log('updated states');
    }
    updateFormAndButton();

    const targetNode = formContainer.querySelector(`.spz_modal form .modelFormSubmit`);
    const config = { attributes: true, attributeFilter: ['value', 'class'] };
    const callback = (mutationList, observer) => {
        mutationList.forEach(mutation => {
        if (mutation.type === 'attributes') {
            const newValue = mutation.target.getAttribute(mutation.attributeName);
            const oldValue = mutation.oldValue;

            if (newValue !== oldValue) {
            updateFormAndButton();
            }
        }
        });
    };
    const observer = new MutationObserver(callback);
    if (targetNode) {
        observer.observe(targetNode, { ...config, attributeOldValue: true });
    }
    }

  // 6003 Test Auditor
  document.querySelector("body").classList.add('spz-6003')
  const loadJS = (url, implementationCode, location)=>{
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
  
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
  
    location.appendChild(scriptTag);
  };

  document.querySelectorAll('.spz-6003 .title-cont')[1].insertAdjacentHTML("beforebegin",
  `
  <div class="spz-6003-section">
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
                <a href="https://www.netwrix.com/product_online_demo.html" data-section="Risk assessment" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Risk assessment" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
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
                <a href="https://www.netwrix.com/product_online_demo.html" data-section="Threat detection" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Threat detection" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
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
                <a href="https://www.netwrix.com/product_online_demo.html" data-section="Change, access, and configuration reporting" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Change, access, and configuration reporting" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
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
                <a href="https://www.netwrix.com/product_online_demo.html" data-section="Access reviews" class="spz-6003-section-launch-cta">Launch In-Browser Demo</a>
                <a href="https://www.netwrix.com/one-to-one.html" data-section="Access reviews" class="spz-6003-section-schedule-cta">Schedule One-to-One Demo</a>
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
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img.png" alt="risk_assessment_image" class="reference" width="1911" height="1127">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/11001/risk_assessment-img.png" alt="risk_assessment_image" class="hero active" data-index="1" alt="risk_assessment_image" width="1911" height="1127">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp" class="hero" data-index="2" alt="threat_detection_image" width="1728" height="1120">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp" class="hero" data-index="3" alt="change_access_and_configuration_reporting_image" width="1728" height="1120">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp" class="hero" data-index="4" alt="access_reviews_image" width="1728" height="1120">
        </div>
      </div>
    </div>
  </div>
  `);
  loadJS('https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@16.1.3/dist/smooth-scroll.min.js', function(){}, document.body);
  const closedCarouselAnimation = (curActiveElement)=>{
    const curHeight= document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("active")
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
    const afterHeight = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .hero[data-index="'+curActiveElement+'"]').classList.remove("active")
    document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=curHeight+"px"
    setTimeout(function(){
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=afterHeight+"px"
    },1)
    setTimeout(function(){
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
    },501)
  }
  const adjustContentHeight =()=>{
    const curActiveElementIndex = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
    const curActiveElement =document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
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
    const curActiveElementIndex = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
    const curActiveElement =document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
    curActiveElement.removeAttribute("style")
    const fullHeight =curActiveElement.offsetHeight;
    curActiveElement.style.height=fullHeight+"px";
  }

  //event listener 

  document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text').addEventListener('click', function(e) {
    if(e.target.closest(".carousel-title") && !e.target.closest(".clicked")){
      //remove active
      const curActiveElement = document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getAttribute("data-index");
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("clicked");

      // to add animation when closed
      if(curActiveElement!=e.target.closest('.child').getAttribute("data-index")){
        closedCarouselAnimation(curActiveElement)
      }

      // add active
      e.target.closest(".child").classList.add("clicked","active")
      document.querySelector('.spz-6003 .spz-6003-section .carousel-section .hero[data-index="'+ e.target.closest(".child").getAttribute("data-index")+'"]').classList.add("active")
      if(curActiveElement!=e.target.closest('.active').getAttribute("data-index")){
        adjustContentHeight();
      }

      // auto scroll on mobile
      if(window.matchMedia("(max-width: 1259.98px)").matches && document.querySelector('.spz-6003 .spz-6003-section .carousel-section .child.clicked')){
        document.querySelector('.spz-6003 .spz-6003-section .carousel-section').classList.add("mobile-clicked")
        setTimeout(function(){
          document.querySelector('.spz-6003 .spz-6003-section .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
        },1003)
        let  headerHeight = 0
        setTimeout(function(){
          let scroll = new SmoothScroll();
          scroll.animateScroll(document.querySelector('.spz-6003 .spz-6003-section .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
            easing: 'easeOutQuad',
            speed: 500,
            speedAsDuration: true,
          });
        },502)
      }
    }
  });
  
  window.addEventListener("resize",function(){
    setHeightOnResize()
  })
  window.dispatchEvent(new Event('scroll'));
  
}


  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  //exptName should be #1001, #1002, #1003 etc.
  const expName = '6003';
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

// Check condition and initialize the code
const checkCondition = setInterval(() => {
  if (document.querySelectorAll('main .navbar').length > 0 && window.location.href.includes('https://www.netwrix.com/auditor.html') ) {
    clearInterval(checkCondition);
    runCode6009();
  }
    if (document.querySelectorAll('main .navbar').length > 0 && window.location.href.includes('https://www.netwrix.com/endpoint-dlp-solution.html') ) {
    clearInterval(checkCondition);
    runCode6007();
  }
}, 100);
