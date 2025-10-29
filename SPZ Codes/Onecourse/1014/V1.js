function spz1014Code() {
  if (!document.querySelector('body').classList.contains('spz_1014_v1')) {
    document.querySelector('body').classList.add('spz_1014_v1');

    const loadJS = (url, implementationCode, location) => {
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;

      location.appendChild(scriptTag);
    };
    const gb_load_css = (path) => {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.media = 'all';
      css.href = path;

      document.getElementsByTagName('head')[0].appendChild(css);
    }
    gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");

    var locationMarker = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
      <path d="M8.42578 19.5C10.4297 16.9922 15 10.9141 15 7.5C15 3.35938 11.6406 0 7.5 0C3.35938 0 0 3.35938 0 7.5C0 10.9141 4.57031 16.9922 6.57422 19.5C7.05469 20.0977 7.94531 20.0977 8.42578 19.5ZM7.5 5C8.16304 5 8.79893 5.26339 9.26777 5.73223C9.73661 6.20107 10 6.83696 10 7.5C10 8.16304 9.73661 8.79893 9.26777 9.26777C8.79893 9.73661 8.16304 10 7.5 10C6.83696 10 6.20107 9.73661 5.73223 9.26777C5.26339 8.79893 5 8.16304 5 7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5Z" fill="#757567"/>
    </svg>`;
    var rightArrow = ``

    document.querySelector('.awr-home__render-components').insertAdjacentHTML('afterbegin', `
<div class="spz_hero">
  <div class="spz_heroInner">
    <div class="hero_left">
      <div class="spz_heroData">
        <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978901/oncourse/1014/atomquote_2.svg"
            alt="atomquote"></figure>
        <h1>Home protection that <strong>keeps life on track.</strong></h1>
        <p>Discover home protection plans you can count on. Around the clock support, trusted technicians, and coverage
          for the systems you rely on most - HVAC, appliances, water, sewer, gas, and more.</p>
      </div>
    </div>
    <div class="hero_right">
      <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/home_1.webp" alt="hero image">
      </figure>
    </div>
  </div>
  <div class="hero_form">
    <div class="form_heading">
      <h3>See available plans in your area</h3>
    </div>
    <div class="zipCode_form">

    </div>
  </div>
</div>
<div class="our_journey">
  <div class="auto_container">
    <div class="journery_inner">
      <div class="journey_list">
        <ul>
          <li>
            <div class="journery_data">
              <span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/icon_1_webp_1.webp"
                  alt="Protecting homes"></span>
              <strong>30+ Years</strong>
              <p>Protecting homes </p>
            </div>
          </li>
          <li>
            <div class="journery_data">
              <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978461/oncourse/1014/icon_10.svg"
                  alt="Customers and growing"></span>
              <strong>1.9 M+</strong>
              <p>Customers and growing</p>
            </div>
          </li>
          <li>
            <div class="journery_data">
              <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978464/oncourse/1014/icon_11.svg"
                  alt="Saved in repair costs annually"></span>
              <strong>$100 M+</strong>
              <p>Saved in repair costs annually</p>
            </div>
          </li>
          <li>
            <div class="journery_data">
              <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978457/oncourse/1014/icon_8.svg"
                  alt=""></span>
              <strong>96%</strong>
              <p>Customer Satisfaction</p>
            </div>
          </li>
          <li>
            <div class="journery_data">
              <figure>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/badge_webp.webp"
                  alt="Accredited Business">
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="spz_plans">
  <div class="spz_heading">
    <div class="auto_container">
      <div class="heading_content">
        <h2><strong>Home protection</strong> built for you.</h2>
        <p>Personalized coverage that can protect every corner of your home.</p>
      </div>
    </div>
  </div>
  <div class="plans_list">
    <div class="auto_container">
      <div class="plan_listMain">
        <div class="splide plan_slider">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <div class="plans_data">
                  <div class="plan_dataTop">
                    <h2>Water Line Protection Program</h2>
                    <span>What´s covered?</span>
                    <ul>
                      <li>
                        <p>Backfilling Holes</p>
                      </li>
                      <li>
                        <p>Burst Water Pipe</p>
                      </li>
                      <li>
                        <p>Inspections</p>
                      </li>
                      <li>
                        <p>Equipment</p>
                      </li>
                    </ul>
                    <strong>Plus 5 more</strong>
                  </div>
                  <div class="plan_dataBottom">
                    <a href="">Learn more <img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                        alt="arrow right"></a>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="plans_data">
                  <div class="popular_plan">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1761660259/oncourse/1014/fire.svg"
                        alt="Most popular"></span>
                    <strong>Most Popular</strong>
                  </div>
                  <div class="plan_dataTop">
                    <h2>Water Line and Sewer Line Protection Program</h2>
                    <span>What´s covered?</span>
                    <ul>
                      <li>
                        <p>Sewer Line Clogs and Blockages </p>
                      </li>
                      <li>
                        <p>Burst Water Pipe</p>
                      </li>
                      <li>
                        <p>Excavating</p>
                      </li>
                      <li>
                        <p>Normal Wear and Tear</p>
                      </li>
                    </ul>
                    <strong>Plus 7 more</strong>
                  </div>
                  <div class="plan_dataBottom">
                    <a href="">Learn more <img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                        alt="arrow right"></a>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="plans_data">
                  <div class="popular_plan">
                    <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1761660259/oncourse/1014/fire.svg"
                        alt="Best Value"></span>
                    <strong>Best Value</strong>
                  </div>
                  <div class="plan_dataTop">
                    <h2>Water Line, Sewer Line, and In-Home Plumbing Emergency Program</h2>
                    <span>What´s covered?</span>
                    <ul>
                      <li>
                        <p>Backfilling Holes</p>
                      </li>
                      <li>
                        <p>Blocked or Overflowing Toilet </p>
                      </li>
                      <li>
                        <p>Burst Water Pipe</p>
                      </li>
                      <li>
                        <p>Broken Water Pipe Hidden Behind Walls
                          and Ceilings </p>
                      </li>
                    </ul>
                    <strong>Plus 16 more</strong>
                  </div>
                  <div class="plan_dataBottom">
                    <a href="">Learn more <img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                        alt="arrow right"></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="custom_form">
        <div class="form_title">
          <h2>See all available plans in your area.</h2>
        </div>
        <div class="custom_formMain">
          <input type="number" placeholder="Zip Code">
          <a href="javascript:void(0);" class="custom_btn zipCode_btn spz1014_v1">Shop Plans <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
              alt="arrow right"></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="our_values">
  <div class="spz_heading">
    <div class="auto_container">
      <div class="heading_content">
        <h2>Simpler living starts with <strong>reliable home protection.</strong></h2>
        <p>With American Water Resources, an Oncourse Company, simpler living isn’t just a promise - it’s how we’re built.</p>
      </div>
    </div>
  </div>
  <div class="values_main">
    <div class="auto_container">
      <div class="our_valuesInner">
  
      </div>
    </div>
  </div>
</div>

    `);

    document.querySelector('.zipCode_form').insertAdjacentElement('beforeend', document.querySelector('.awr-find-your-protection-plan'));
    document.querySelector('.zipCode_form .awr-find-your-protection-plan__wrapper button[type=submit] .awr-find-your-protection-plan__call-to-action p').textContent = 'Shop Plans';
    document.querySelector('.spz_1014_v1 .zipCode_form .awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');
    document.querySelector('.zipCode_form .awr-find-your-protection-plan__zipcode-container > .w-full > .pointer-events-none svg').insertAdjacentHTML('afterend', locationMarker);

    function plansSlider() {
      const slider = new Splide(".plan_slider", {
        type: "loop",
        rewind: true,
        focus: "center",
        perPage: 1.34795,
        slidperMove: 1,
        clones: 4,
        gap: "32px",
        breakpoints: {
          2560: {
            perPage: 1.9754,
            gap: "32px",
          },
          1920: {
            perPage: 1.48854,
            gap: "32px",
          },
          1440: {
            perPage: 1.34800,
            gap: "32px",
          },
          1023: {
            perPage: 1.10854,
            gap: "16.4px",
          },
          767: {
            perPage: 1,
            gap: "18px",
          },
        },
        autoWidth: false,
        arrows: true,
        pagination: false,
        autoplay: false,
        autoplaySpeed: 2000,
        interval: 5000,
        speed: 1000,
        easing: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        drag: true,
        direction: 'ltr',
      });
    }
    if (window.innerWidth < 1024) {
      plansSlider();
    }

  }
}

function removeTest() {
  document.querySelector('.zipCode_form .awr-find-your-protection-plan__wrapper button[type=submit] .awr-find-your-protection-plan__call-to-action p').textContent = 'See Pricing';
  document.querySelector('.spz_1014_v1 .zipCode_form .awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');
  document.querySelector('.zipCode_form .awr-find-your-protection-plan__zipcode-container > .w-full > .pointer-events-none svg+svg').remove();
  document.querySelector('body').classList.remove('spz_1014_v1');
}

var pageList = [
  "https://www.awrusa.com/"
];


let previousUrl = location.href;
// Run on initial load if URL matches


if (pageList.includes(window.location.href.split("?")[0].split("#")[0])) {
  spz1014Code();
}

var running = false;
const observer = new MutationObserver(() => {
  var currentPage = window.location.href.split("?")[0].split("#")[0];
  if (pageList.includes(currentPage)) {
    if (running) return; // Prevent multiple executions

    running = true;
    console.log("Mutation detected: Run 1014 test");
    spz1014Code();
    // running = false;
    setTimeout(function () { running = false; }, 50);
  } else {
    removeTest();
  }
});

const config = { subtree: true, childList: true };
observer.observe(document.body, config);
