function loadTestCode1099() {
  if (!document.querySelector("body").classList.contains("spz_t1099")) {
    document.querySelector("body").classList.add("spz_t1099");
    document.querySelector('.spz_t1099 header nav img').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1099/logo_1440_webp.webp";
    var h1Text = document.querySelector('#hero_headline').textContent;
    var callIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
        <path d="M16.0719 15.2066C16.0719 15.2066 15.0098 16.2498 14.7495 16.5557C14.3255 17.0081 13.8259 17.2218 13.171 17.2218C13.108 17.2218 13.0409 17.2218 12.9779 17.2176C11.7311 17.138 10.5724 16.652 9.70343 16.2373C7.32733 15.0893 5.24089 13.4596 3.50709 11.3942C2.07556 9.67234 1.1184 8.08034 0.484493 6.37103C0.0940737 5.32785 -0.0486604 4.51509 0.0143105 3.74842C0.056291 3.25825 0.245204 2.85187 0.593642 2.50414L2.02518 1.07553C2.23088 0.882813 2.44918 0.778076 2.66328 0.778076C2.92776 0.778076 3.14186 0.937276 3.2762 1.07134C3.2804 1.07553 3.2846 1.07972 3.28879 1.08391C3.54488 1.32271 3.78836 1.56989 4.04444 1.83383C4.17458 1.96789 4.30892 2.10195 4.44326 2.2402L5.58933 3.38393C6.03432 3.82802 6.03432 4.23859 5.58933 4.68267C5.46759 4.80417 5.35004 4.92566 5.2283 5.04296C4.87566 5.40326 5.15268 5.12681 4.78745 5.45359C4.77905 5.46197 4.77065 5.46616 4.76645 5.47454C4.40542 5.83483 4.47259 6.18675 4.54816 6.42555C4.55235 6.43812 4.55655 6.45068 4.56075 6.46325C4.85881 7.18384 5.27862 7.86254 5.91672 8.67111L5.92092 8.6753C7.07958 10.0997 8.30122 11.2099 9.64879 12.0604C9.82092 12.1693 9.99723 12.2573 10.1652 12.3411C10.3163 12.4165 10.459 12.4877 10.5808 12.5631C10.5976 12.5715 10.6143 12.5841 10.6311 12.5925C10.7739 12.6637 10.9082 12.6972 11.0467 12.6972C11.3952 12.6972 11.6135 12.4793 11.6849 12.4081L12.5077 11.5869C12.6505 11.4445 12.8772 11.2727 13.1416 11.2727C13.4019 11.2727 13.616 11.4361 13.7462 11.5786C13.7504 11.5827 13.7504 11.5827 13.7545 11.5869L16.0677 13.8953C16.5001 14.3227 16.0719 15.2066 16.0719 15.2066Z" fill="white"/>
      </svg>`;

    var phoneNumber = document.querySelector('.hero_sec h2 a').textContent;
    document.querySelector('.spz_t1099 header nav div.flex a:last-child span img').insertAdjacentHTML('afterend', `${callIcon}`);
    document.querySelector('.hero_sec').insertAdjacentHTML('beforebegin', `
        <div class="new_hero">
          <div class="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto ">
            <div class="new_heroInner">
              <div class="hero_left">
                <h1>${h1Text}</h1>
                <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1725481474/rbbrands/1099/stars.svg" alt="Review stars"></span>
                <p>We've helped thousands of people talk to a technician to help solve their appliance problems quickly & easily.</p>
                <div class="repair_list">
                  <label for="">Schedule repairs for: </label>
                  <ul>
                    <li>
                      <p>Cooktops</p>
                    </li>
                    <li>
                      <p>Microwaves</p>
                    </li>
                    <li>
                      <p>Dishwashers </p>
                    </li>
                    <li>
                      <p>Ovens</p>
                    </li>
                    <li>
                      <p>Dryers</p>
                    </li>
                    <li>
                      <p>Stoves</p>
                    </li>
                    <li>
                      <p>Freezers</p>
                    </li>
                    <li>
                      <p>Trash Compactors</p>
                    </li>
                    <li>
                      <p>Garbage Disposals</p>
                    </li>
                    <li>
                      <p>Washing Machines</p>
                    </li>
                    <li>
                      <p>Ice Makers</p>
                    </li>
                    <li>
                      <p>Wine Coolers</p>
                    </li>
                  </ul>
                </div>
                <a href="tel:${phoneNumber}" class="custom_btn spz_1099_v1"> Phone Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                    <g clip-path="url(#clip0_24026_428)">
                      <path d="M17.2863 8.17265C17.6378 7.82118 17.6378 7.25133 17.2863 6.89986L11.5587 1.1723C11.2073 0.820824 10.6375 0.820824 10.286 1.1723C9.93451 1.52377 9.93451 2.09361 10.286 2.44509L15.3772 7.53625L10.286 12.6274C9.93451 12.9789 9.93451 13.5487 10.286 13.9003C10.6375 14.2517 11.2073 14.2517 11.5587 13.9003L17.2863 8.17265ZM0.449951 8.43625H16.65V6.63625H0.449951V8.43625Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_24026_428">
                        <rect width="18" height="13.5" fill="white" transform="translate(0 0.75)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <div class="call_now"><a href="tel:${phoneNumber}" class="cta_two spz_1099_v1">Call Now:  <span>${phoneNumber}</span></a></div>
              </div>
              <div class="hero_right">
                <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1099/serviceman_1.webp" alt="Hero image"></figure>
              </div>
            </div>
            <div class="repair_list">
              <label for="">Schedule repairs for: </label>
              <ul>
                <li>
                  <p>Cooktops</p>
                </li>
                <li>
                  <p>Garbage Disposals</p>
                </li>
                <li>
                  <p>Stoves </p>
                </li>
                <li>
                  <p>Dishwashers </p>
                </li>
                <li>
                  <p>Ice Makers</p>
                </li>
                <li>
                  <p>Trash Compactors</p>
                </li>
                <li>
                  <p>Dryers</p>
                </li>
                <li>
                  <p>Microwaves </p>
                </li>
                <li>
                  <p>Washing Machines </p>
                </li>
                <li>
                  <p>Freezers</p>
                </li>
                <li>
                  <p>Ovens</p>
                </li>
                <li>
                  <p>Wine Coolers</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Cooktops</p>
                </li>
                <li>
                  <p>Microwaves</p>
                </li>
                <li>
                  <p>Dishwashers </p>
                </li>
                <li>
                  <p>Ovens</p>
                </li>
                <li>
                  <p>Dryers</p>
                </li>
                <li>
                  <p>Stoves</p>
                </li>
                <li>
                  <p>Freezers</p>
                </li>
                <li>
                  <p>Trash Compactors</p>
                </li>
                <li>
                  <p>Garbage Disposals</p>
                </li>
                <li>
                  <p>Washing Machines</p>
                </li>
                <li>
                  <p>Ice Makers</p>
                </li>
                <li>
                  <p>Wine Coolers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `);
    var mainLocation = document.querySelector('.hero_sec > .container > .flex > p:first-child');
    var location = document.querySelector(".hero_sec > .container > .flex > p:first-child img");
    location.src = "//res.cloudinary.com/spiralyze/image/upload/v1725481474/rbbrands/1099/location-on.svg";
    document.querySelector('.hero_left').insertAdjacentElement('afterbegin', mainLocation);
    function handleResize() {
      var navBtn = document.querySelector('header a[aria-label="We\'re Open!"]');
      var heroImage = document.querySelector('.hero_right');
      if (window.innerWidth < 768) {
        document.querySelector('header nav').insertAdjacentElement('afterend', navBtn);
        document.querySelector('.hero_left > p:nth-of-type(1)').insertAdjacentElement('afterend', heroImage);
      } else {
        document.querySelector('header nav div.flex a:last-child').insertAdjacentElement('beforebegin', navBtn);
        document.querySelector('.hero_left').insertAdjacentElement('afterend', heroImage);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode1099();
  }
}, 100);
