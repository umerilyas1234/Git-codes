var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1737541046/techsmithcamtasia/310/src/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1737541046/techsmithcamtasia/310/src/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}

function loadTestCode310() {
  if (!document.querySelector("body").classList.contains("spz_310")) {
    document.querySelector("body").classList.add("spz_310");

    document.querySelector('.camtasiaHeroFix .section-pretitle').textContent = 'Camtasia pro';
    document.querySelector('.camtasiaHeroFix h1').innerHTML = 'All your video tools, <br> all in one plan';
    document.querySelector('.camtasiaHeroFix .section-text').textContent = 'Camtasia Pro combines Audiate for flawless audio and text-based editing, Screencast for effortless collaboration, and Camtasia for powerful editing–all with premium assets.';
    document.querySelector('.camtasiaHeroFix .button-outlined').textContent = 'Try Camtasia';
    document.querySelector('.camtasiaHeroFix .button-outlined').href = 'https://www.techsmith.com/download/camtasia/';
    document.querySelector('.camtasiaHeroFix .button-camtasia-bright').textContent = 'Get Camtasia Pro';
    document.querySelector('.camtasiaHeroFix .button-camtasia-bright').href = 'https://www.techsmith.com/store/cart?products=camtasia-pro-yearly';
    document.querySelector('.submenu-navigation .menu-ctas li:last-child a').textContent = 'Get Camtasia Pro';
    document.querySelector('.submenu-navigation .menu-ctas li:last-child a').href = 'https://www.techsmith.com/store/cart?products=camtasia-pro-yearly';
    document.querySelector('.global-nav-menu > li:nth-child(3) > a').textContent = 'Support and Learning';
    document.querySelector('.tsc-header > .menu-ctas > .cart > a ').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3.50002 13H12.5C12.69 13.0001 12.873 13.0722 13.0118 13.202C13.1507 13.3317 13.2351 13.5093 13.248 13.6989C13.261 13.8885 13.2015 14.0759 13.0816 14.2233C12.9617 14.3707 12.7903 14.4671 12.602 14.493L12.5 14.5H3.50002C3.30999 14.4999 3.12707 14.4278 2.98822 14.298C2.84937 14.1683 2.76494 13.9907 2.75199 13.8011C2.73904 13.6115 2.79853 13.4241 2.91845 13.2767C3.03837 13.1293 3.20977 13.0329 3.39802 13.007L3.50002 13ZM7.89802 1.007L8.00002 1C8.18125 1.00001 8.35636 1.06564 8.49295 1.18477C8.62953 1.30389 8.71837 1.46845 8.74302 1.648L8.75002 1.75V9.438L11.005 7.184C11.1322 7.05687 11.3008 6.97966 11.4801 6.96645C11.6595 6.95323 11.8376 7.00489 11.982 7.112L12.066 7.184C12.1931 7.31117 12.2704 7.47979 12.2836 7.65912C12.2968 7.83845 12.2451 8.01657 12.138 8.161L12.066 8.245L8.53001 11.78C8.40303 11.907 8.23467 11.9842 8.05556 11.9976C7.87645 12.011 7.69849 11.9597 7.55402 11.853L7.47002 11.78L3.93402 8.245C3.79982 8.11118 3.72127 7.93151 3.71415 7.74213C3.70703 7.55274 3.77186 7.36768 3.89563 7.22416C4.01939 7.08063 4.1929 6.98928 4.38127 6.96848C4.56965 6.94767 4.75891 6.99895 4.91102 7.112L4.99502 7.184L7.25002 9.44V1.75C7.25002 1.56876 7.31566 1.39366 7.43478 1.25707C7.55391 1.12048 7.71846 1.03165 7.89802 1.007Z" fill="#1A1A1A"/>
      </svg>
      <span>Cart</span>
    `;
    document.querySelector('.tsc-header > .menu-ctas > .profile-2 .sign-in-status-2 > a ').innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.50002 13H12.5C12.69 13.0001 12.873 13.0722 13.0118 13.202C13.1507 13.3317 13.2351 13.5093 13.248 13.6989C13.261 13.8885 13.2015 14.0759 13.0816 14.2233C12.9617 14.3707 12.7903 14.4671 12.602 14.493L12.5 14.5H3.50002C3.30999 14.4999 3.12707 14.4278 2.98822 14.298C2.84937 14.1683 2.76494 13.9907 2.75199 13.8011C2.73904 13.6115 2.79853 13.4241 2.91845 13.2767C3.03837 13.1293 3.20977 13.0329 3.39802 13.007L3.50002 13ZM7.89802 1.007L8.00002 1C8.18125 1.00001 8.35636 1.06564 8.49295 1.18477C8.62953 1.30389 8.71837 1.46845 8.74302 1.648L8.75002 1.75V9.438L11.005 7.184C11.1322 7.05687 11.3008 6.97966 11.4801 6.96645C11.6595 6.95323 11.8376 7.00489 11.982 7.112L12.066 7.184C12.1931 7.31117 12.2704 7.47979 12.2836 7.65912C12.2968 7.83845 12.2451 8.01657 12.138 8.161L12.066 8.245L8.53001 11.78C8.40303 11.907 8.23467 11.9842 8.05556 11.9976C7.87645 12.011 7.69849 11.9597 7.55402 11.853L7.47002 11.78L3.93402 8.245C3.79982 8.11118 3.72127 7.93151 3.71415 7.74213C3.70703 7.55274 3.77186 7.36768 3.89563 7.22416C4.01939 7.08063 4.1929 6.98928 4.38127 6.96848C4.56965 6.94767 4.75891 6.99895 4.91102 7.112L4.99502 7.184L7.25002 9.44V1.75C7.25002 1.56876 7.31566 1.39366 7.43478 1.25707C7.55391 1.12048 7.71846 1.03165 7.89802 1.007Z" fill="#1A1A1A"/>
    </svg>
      Sign In
    `;
    document.querySelector('.camtasiaHeroFix > .section-row').insertAdjacentHTML('afterend', `
      <div class="getStarted_section">
        <div class="get_startMain">
          <div class="get_startedLeft">
            <h4>Don’t wait</h4>
            <h2>Get started today</h2>
            <a href="https://www.techsmith.com/store/cart?products=camtasia-pro-yearly" class="custom_cta">Get Camtasia Pro</a>
          </div>
          <div class="get_startedRight">
            <span>
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/310/visual-content_1441.webp"
                alt="Get started today">
                
              <video src="//res.cloudinary.com/spiralyze/video/upload/v1737547777/techsmithcamtasia/310/-eda1-4400-9138-67f329c93166.mp4" autoplay loop muted playsinline>
                Your browser does not support the video tag.
              </video>
            </span>
          </div>
        </div>
      </div>  
    `);

    const getStartedSection = document.querySelector('.getStarted_section');
    const clonedSection = getStartedSection.cloneNode(true);
    document.querySelector('.section-banner-media-aside').insertAdjacentElement('afterbegin', clonedSection);
  }
}

var bodyInterval310 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval310);
    loadTestCode310();
  }
}, 100);
