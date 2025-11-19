console.log('SPZ 1014 V1');

function spz1014Code() {
  // Check both body class and HTML element
  var hasBodyClass = document.querySelector('body').classList.contains('spz_1014_v1');
  var hasSpzSections = document.querySelector('.spz_sections');
  
  // Run if body class is missing OR HTML is missing (SPA may remove HTML but keep body class)
  if (!hasBodyClass || !hasSpzSections) {
    if (!hasBodyClass) {
      document.querySelector('body').classList.add('spz_1014_v1');
    }

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

    // Load Splide JS library
    loadJS("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", function () {

      // Initialize partner slider (always runs)
      partnerSlider();

      // Initialize plan and testimonial sliders for mobile/tablet
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          plansSlider();
          testimonialSlider();
        }, 100);
      }
    }, document.body);

    var locationMarker = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
      <path d="M8.42578 19.5C10.4297 16.9922 15 10.9141 15 7.5C15 3.35938 11.6406 0 7.5 0C3.35938 0 0 3.35938 0 7.5C0 10.9141 4.57031 16.9922 6.57422 19.5C7.05469 20.0977 7.94531 20.0977 8.42578 19.5ZM7.5 5C8.16304 5 8.79893 5.26339 9.26777 5.73223C9.73661 6.20107 10 6.83696 10 7.5C10 8.16304 9.73661 8.79893 9.26777 9.26777C8.79893 9.73661 8.16304 10 7.5 10C6.83696 10 6.20107 9.73661 5.73223 9.26777C5.26339 8.79893 5 8.16304 5 7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5Z" fill="#757567"></path>
    </svg>`;
    var rightArrow = ``

    document.querySelector('.awr-home__render-components').insertAdjacentHTML('afterbegin', `
<div class="spz_sections">
  <div class="spz_hero">
    <div class="spz_heroInner">
      <div class="hero_left">
        <div class="spz_heroData">
          <picture>
            <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1760978911/oncourse/1014/atomquote_3.svg"
              media="(max-width: 1024px)">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1760978901/oncourse/1014/atomquote_2.svg"
              alt="quote">
          </picture>
          <h1>Home protection that <strong>keeps life on track.</strong></h1>
          <p>Discover home protection plans you can count on. Around the clock support, trusted technicians, and
            <strong>coverage
              for the systems you rely on most - HVAC, appliances, water, sewer, gas, and more.</strong>
          </p>
        </div>
      </div>
      <div class="hero_right">
        <picture>
          <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/hero_image_375.webp"
            media="(max-width: 767px)">
          <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/hero_image_768.webp"
            media="(max-width: 1024px)">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/home_1.webp" alt="hero image">
        </picture>
      </div>
    </div>
    <div class="hero_form">
      <div class="form_heading">
        <h3>See available plans in your area</h3>
      </div>
      <div class="zipCode_form">
        <div class="custom_formMain">
          <p class="error_msg">Please enter valid zip code.</p>
          <input type="number" placeholder="Zip Code" maxlength="5" oninput="this.value = this.value.slice(0, 5)">
          <a href="javascript:void(0);" class="custom_btn zipCode_btn spz1014_v1">Shop Plans <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
              alt="arrow right"></a>
        </div>
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
                    alt="Customer Satisfaction"></span>
                <strong>96%</strong>
                <p>Customer Satisfaction</p>
              </div>
            </li>
            <li>
              <div class="journery_data">
                <figure>
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/bbb_logo.webp"
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
                      <a href="https://www.awrusa.com/plan/9/water-line-protection-program">Learn more
                        <img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                          alt="arrow right">
                        <img class="hover"
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761737997/oncourse/1014/arrow-right_hov.svg"
                          alt="arrow right">
                      </a>
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
                      <a href="https://www.awrusa.com/plan/45/water-line-and-sewer-line-protection-program">Learn more
                        <img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                          alt="arrow right">
                        <img class="hover"
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761737997/oncourse/1014/arrow-right_hov.svg"
                          alt="arrow right">
                      </a>
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
                      <a
                        href="https://www.awrusa.com/plan/46/water-line-sewer-line-and-in-home-plumbing-emergency-program">Learn
                        more <img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761660226/oncourse/1014/arrow-right_1.svg"
                          alt="arrow right">
                        <img class="hover"
                          src="//res.cloudinary.com/spiralyze/image/upload/v1761737997/oncourse/1014/arrow-right_hov.svg"
                          alt="arrow right">
                      </a>
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
          <div class="custom_formOuter">
            <div class="custom_formMain">
              <p class="error_msg">Please enter valid zip code.</p>
              <input type="number" placeholder="Zip Code" maxlength="5" oninput="this.value = this.value.slice(0, 5)">
              <a href="javascript:void(0);" class="custom_btn zipCode_btn spz1014_v1">Shop Plans <img
                  src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
                  alt="arrow right"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="our_values">
    <div class="spz_heading">
      <div class="auto_container">
        <div class="heading_content">
          <h2>Simpler living starts with <strong>reliable home protection</strong>.</h2>
          <p>With American Water Resources, an Oncourse Company, simpler living isn’t just a promise - it’s how we’re
            built.</p>
        </div>
      </div>
    </div>
    <div class="values_main">
      <div class="auto_container">
        <div class="our_valuesInner">
          <div class="values_list">
            <ul>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978080/oncourse/1014/icon_1.svg"
                      alt="Trusted by millions"></span>
                  <small>
                    <strong>Trusted by millions</strong>
                    <p>1.9 million homes protected - saving $100M+ in repair costs yearly. </p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978081/oncourse/1014/icon_2.svg"
                      alt="Decades of Experience"></span>
                  <small>
                    <strong>Decades of Experience</strong>
                    <p>30+ years of protecting homes with licensed, local experts.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978081/oncourse/1014/icon_3.svg"
                      alt="Hassle-Free Claims"></span>
                  <small>
                    <strong>Hassle-Free Claims</strong>
                    <p>One call and we handle the rest – scheduling, permits, inspections and more.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978081/oncourse/1014/icon_4.svg"
                      alt="Flexible Coverage"></span>
                  <small>
                    <strong>Flexible Coverage</strong>
                    <p>Month-to-month protection with no long-term contracts. Cancel anytime.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978081/oncourse/1014/icon_2.svg"
                      alt="Guaranteed Repairs"></span>
                  <small>
                    <strong>Guaranteed Repairs</strong>
                    <p>Covered repairs backed by a 1-year guarantee.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978104/oncourse/1014/icon_5.svg"
                      alt="Proven Partnerships"></span>
                  <small>
                    <strong>Proven Partnerships</strong>
                    <p>The chosen partner of 25+ utilities and municipalities nationwide.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978105/oncourse/1014/icon_6.svg"
                      alt="Always-On Support"></span>
                  <small>
                    <strong>Always-On Support</strong>
                    <p>24/7/365 live phone support with real people, always ready to help.</p>
                  </small>
                </div>
              </li>
              <li>
                <div class="value_data">
                  <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1760978105/oncourse/1014/icon_7.svg"
                      alt="Fast Local Help"></span>
                  <small>
                    <strong>Fast Local Help</strong>
                    <p>Support when you need it most - relief until repairs are complete.</p>
                  </small>
                </div>
              </li>
            </ul>
          </div>
          <div class="value_bottom">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/badges_mobile3x.png" media="(max-width: 767px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1762260708/oncourse/1014/badges_icon.svg"
                alt="badges"></picture>
            <span>Protecting your money, time and peace of mind.</span>
            <p><strong>Get started </strong>in minutes with easy online enrollment.</p>
            <a href="https://www.awrusa.com/plans/all-plans" class="custom_btn spz1014_v1">Shop Plans <img
                src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
                alt="arrow right"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="trusted_partner">
    <div class="spz_heading">
      <div class="auto_container">
        <div class="heading_content">
          <h2><strong>We´re a trusted partner</strong> for utilities and municipalities nationwide.</h2>
          <p>Our partnerships help homeowners save more - with protection supported by their local providers.</p>
        </div>
      </div>
    </div>
    <div class="partner_outer">
      <div class="auto_container">
        <div class="partner_inner">
          <div class="partner_sliderMain">
            <div class="splide partner_slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_15.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_1.webp"
                          alt="Philadelphia energy authority">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_16.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_2.webp"
                          alt="OUC">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_14.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_3.webp"
                          alt="City utilities">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_13.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_4.webp"
                          alt="NYC environmental protection">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source
                          srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/water__sewerage_logo_1.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img
                          src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/water__sewerage_logo.webp"
                          alt="Detroit">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_11.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_6.webp"
                          alt="Corporation of the city of yonkers">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_10.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/seal_of_the_city_of_wilmington.webp"
                          alt="Delaware">
                      </picture>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="partner_data">
                      <picture>
                        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/logo_9.webp"
                          type="image/webp" media="(max-width: 767px)">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/oncourse/1014/brandon_m_scrott_mayor_logo.webp"
                          alt="Brandon M. Scott Mayor">
                      </picture>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="custom_form">
            <div class="form_title">
              <h2>See if you're in a partner region.</h2>
            </div>
            <div class="custom_formOuter">
              <div class="custom_formMain">
                <p class="error_msg">Please enter valid zip code.</p>
                <input type="number" placeholder="Zip Code" maxlength="5" oninput="this.value = this.value.slice(0, 5)">
                <a href="javascript:void(0);" class="custom_btn zipCode_btn spz1014_v1">Shop Plans <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
                    alt="arrow right"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="spz_testimonials">
    <div class="spz_heading">
      <div class="auto_container">
        <div class="heading_content">
          <h2>Proof that <strong>home protection</strong> pays off.</h2>
          <p>Here’s what real customers have to say about their experience with us.</p>
        </div>
      </div>
    </div>
    <div class="testimonial_inner">
      <div class="auto_container">
        <div class="testimonial_sliderMain">
          <div class="splide testimonial_slider">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <div class="testimonial_data">
                    <div class="testimonial_dataTop">
                      <span><img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1760978034/oncourse/1014/atomquote_1.svg"
                          alt="quote"></span>
                      <p>Our <strong>sewer line backed up</strong> and we feared family from out of town would have to
                        leave. <br> A <strong>knowledgeable technician </strong> arrived in <strong>24 hours</strong> on
                        Christmas Day and <strong>resolved the problem.</strong></p>
                    </div>
                    <strong>Lynn G.</strong>
                  </div>
                </li>
                <li class="splide__slide">
                  <div class="testimonial_data v2">
                    <div class="testimonial_dataTop">
                      <span><img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1760978034/oncourse/1014/atomquote_1.svg"
                          alt="quote"></span>
                      <p>We <strong>were grateful for the service you provided us recently</strong> on a bitterly cold
                        day.
                        We got <strong>assistance with our water/sewer line backup in 30 minutes after after we filed a
                          claim.</strong> Thank you for your speedy service.</p>
                    </div>
                    <strong>Rachel S.</strong>
                  </div>
                </li>
                <li class="splide__slide">
                  <div class="testimonial_data">
                    <div class="testimonial_dataTop">
                      <span><img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1760978034/oncourse/1014/atomquote_1.svg"
                          alt="quote"></span>
                      <p>I have sewer and water line protection and they were lifesavers when my sewer line clogged.
                        What
                        would have cost $500+ to fix was fully covered. <strong>And the plumber arrived in 2 hours!
                          Highly
                          recommend.</strong></p>
                    </div>
                    <strong>Kierra B.</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="value_bottom">
            <p><strong>Protect</strong> your home today and avoid costly repairs tomorrow.</p>
            <h4>Discover the best protection plans to fit your home's needs.</h4>
            <a href="https://www.awrusa.com/plans/all-plans" class="custom_btn spz1014_v1">Shop Plans <img
                src="//res.cloudinary.com/spiralyze/image/upload/v1761660142/oncourse/1014/atomiconbutton-arrow-right.svg"
                alt="arrow right"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `);

    // Configure the form
    document.querySelector('.awr-find-your-protection-plan__wrapper button[type=submit] .awr-find-your-protection-plan__call-to-action p').textContent = 'Shop Plans';
    document.querySelector('.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');
    document.querySelector('.awr-find-your-protection-plan__zipcode-container > .w-full > .pointer-events-none svg').insertAdjacentHTML('afterend', locationMarker);

    // Function to move form to the section currently in view
    function moveFormToVisibleSection() {
      var form = document.querySelector('.awr-find-your-protection-plan');
      if (!form) return;

      // Get all sections that can contain the form
      var sections = [
        document.querySelector('.zipCode_form'),
        document.querySelectorAll('.custom_formOuter')[0], // First .custom_formOuter
        document.querySelectorAll('.custom_formOuter')[1]  // Second .custom_formOuter
      ];

      var currentSection = null;
      var maxVisibleArea = 0;

      sections.forEach(function (section) {
        if (section) {
          var rect = section.getBoundingClientRect();
          var visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          var visibleArea = visibleHeight * rect.width;

          if (visibleArea > maxVisibleArea && visibleHeight > 0) {
            maxVisibleArea = visibleArea;
            currentSection = section;
          }
        }
      });

      if (currentSection && !currentSection.contains(form)) {
        currentSection.insertAdjacentElement('afterbegin', form);
      }
    }

    // Initial placement
    moveFormToVisibleSection();

    // Move form on scroll
    window.addEventListener('scroll', function () {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(moveFormToVisibleSection, 100);
    });

    function plansSlider() {
      const planSliderElement = document.querySelector(".plan_slider");
      if (!planSliderElement) {
        return;
      }

      // Check if slider is already initialized
      if (planSliderElement.classList.contains('is-initialized')) {
        return;
      }

      planSliderInstance = new Splide(".plan_slider", {
        type: "loop",
        rewind: true,
        focus: "center",
        perPage: 3,
        perMove: 1,
        clones: 4,
        gap: "24px",
        start: 1, // Start with the second slide (index 1) in center
        breakpoints: {
          1023: {
            perPage: 3,
            gap: "24px",
            start: 1,
          },
          767: {
            perPage: 1,
            gap: "24px",
            start: 1,
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
      planSliderInstance.mount();
      planSliderElement.classList.add('is-initialized');
    }
    function partnerSlider() {
      const partnerSliderElement = document.querySelector(".partner_slider");
      if (!partnerSliderElement) {
        return;
      }

      // Check if slider is already initialized
      if (partnerSliderElement.classList.contains('is-initialized')) {
        return;
      }

      const partnerSlider = new Splide(".partner_slider", {
        type: "loop",
        rewind: true,
        autoWidth: true,
        gap: "48px",
        arrows: true,
        pagination: false,
        autoplay: false,
        speed: 600,
        easing: "ease",
        drag: true,
        direction: 'ltr',
        focus: 0,
        trimSpace: true,
        padding: { right: 0 },
        updateOnMove: true,
        perMove: 1,
        wheel: false,
      });
      partnerSlider.mount();

      partnerSliderElement.classList.add('is-initialized');
    }
    function testimonialSlider() {
      const testimonialSliderElement = document.querySelector(".testimonial_slider");
      if (!testimonialSliderElement) {
        return;
      }

      // Check if slider is already initialized
      if (testimonialSliderElement.classList.contains('is-initialized')) {
        return;
      }

      testimonialSliderInstance = new Splide(".testimonial_slider", {
        type: "slide",
        autoWidth: true,
        gap: "24px",
        padding: "16px",
        arrows: true,
        pagination: false,
        autoplay: false,
        speed: 600,
        easing: "ease",
        drag: true,
        rewind: false,
        direction: 'ltr',
        focus: 0,
        trimSpace: true,
        perPage: 3,           // show exactly 3 slides
        perMove: 1,

      });
      testimonialSliderInstance.mount();
      testimonialSliderElement.classList.add('is-initialized');
    }

    // Store slider instances globally
    let planSliderInstance = null;
    let testimonialSliderInstance = null;

    window.addEventListener('resize', function () {
      const planSliderElement = document.querySelector(".plan_slider");
      const testimonialSliderElement = document.querySelector(".testimonial_slider");

      if (window.innerWidth < 1024) {
        // Only initialize sliders for mobile/tablet (width < 1024)
        if (planSliderElement && !planSliderElement.classList.contains('is-initialized')) {
          plansSlider();
        }
        if (testimonialSliderElement && !testimonialSliderElement.classList.contains('is-initialized')) {
          testimonialSlider();
        }
      } else if (window.innerWidth >= 1024) {
        // Destroy sliders when switching to desktop view
        if (planSliderElement && planSliderElement.classList.contains('is-initialized')) {
          if (planSliderInstance) {
            planSliderInstance.destroy();
            planSliderInstance = null;
          }
          planSliderElement.classList.remove('is-initialized');
        }
        if (testimonialSliderElement && testimonialSliderElement.classList.contains('is-initialized')) {
          if (testimonialSliderInstance) {
            testimonialSliderInstance.destroy();
            testimonialSliderInstance = null;
          }
          testimonialSliderElement.classList.remove('is-initialized');
        }
      }
    });

    let userAgent = navigator.userAgent;
    let browser;
    if (userAgent.match(/edg/i)) {
      browser = "edge";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browser = "firefox";
    } else if (userAgent.match(/opr\//i)) {
      browser = "opera";
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
      browser = "chrome";
    } else if (userAgent.match(/safari/i)) {
      browser = "safari";
    } else {
      //alert("Other browser");
    }
    document.querySelector('body').classList.add(browser);
  }
}
function spz1014Test() {
  if (!document.querySelector('body').classList.contains('spz_1014_v1')) {
    document.querySelector('body').classList.add('spz_1014_v1', "v2");
  }
}

function removeTest() {
  if (document.querySelector('.awr-find-your-protection-plan__wrapper button[type=submit] .awr-find-your-protection-plan__call-to-action p')) {
    document.querySelector('.awr-find-your-protection-plan__wrapper button[type=submit] .awr-find-your-protection-plan__call-to-action p').textContent = 'See Pricing';
  }
  if (document.querySelector('.awr-find-your-protection-plan__wrapper input#zip-code')) {
    document.querySelector('.awr-find-your-protection-plan__wrapper input#zip-code').setAttribute('placeholder', 'Zip Code');
  }
  if (document.querySelector('.awr-find-your-protection-plan__zipcode-container > .w-full > .pointer-events-none svg+svg')) {
    document.querySelector('.awr-find-your-protection-plan__zipcode-container > .w-full > .pointer-events-none svg+svg').remove();
  }
  if (document.querySelector('.spz_sections')) {
    document.querySelector('.spz_sections').remove();
  }
  document.querySelector('body').classList.remove('spz_1014_v1');
  if (document.querySelector('body').classList.contains('v2')) {
    document.querySelector('body').classList.remove('v2');
  }
}


const selector1014 = '.awr-layout__main';
const selectorHomepage = '.awr-home__render-components';

function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selectorHomepage)
    .then((element) => {
      if (element) {
        spz1014Code();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function executeTest2() {
  waitForElement(selector1014)
    .then((element) => {
      if (element) {
        spz1014Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


var pageList = [
  "https://www.awrusa.com/",
  "https://www.awrusa.com/lasvegas/",
  "https://www.awrusa.com/nyc/",
  "https://www.awrusa.com/phoenix/",
  "https://www.awrusa.com/philadelphia/",
  "https://www.awrusa.com/detroit/",
  "https://www.awrusa.com/orlando/",
  "https://www.awrusa.com/tx/",
  "https://www.awrusa.com/wilmington/",
  "https://www.awrusa.com/yonkers/",
  "https://www.awrusa.com/baltimore/",
  "https://www.awrusa.com/fortwayne/",
  "https://www.awrusa.com/fl/"
];


let previousUrl = location.href.split("?")[0].split("#")[0];
var running = false;

function runCodeBasedOnUrl() {
  var currentPage = window.location.href.split("?")[0].split("#")[0];

  if (pageList.some(function(url) { return currentPage === url || currentPage === url.replace(/\/$/, '') || currentPage + '/' === url; })) {
    if (running) return; // Prevent multiple executions
    running = true;
    console.log("Running 1014 code for homepage");
    executeTest();
    setTimeout(function () { running = false; }, 50);
  } else if (["/plans/all-plans", "/plans/water-sewer", "/plans/heating-cooling", "/plans/electrical-gas", "/plans/appliances", "/plans/whole-home", "/cart", "/cart/payment"].some(function(path) { return currentPage.endsWith(path); })) {
    if (running) return; // Prevent multiple executions
    running = true;
    console.log("Running 1014 test for other page");
    executeTest2();
    setTimeout(function () { running = false; }, 50);
  } else {
    removeTest();
  }
}

// Run on initial load
runCodeBasedOnUrl();

// Also run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runCodeBasedOnUrl);
} else {
  // DOM already loaded, run it
  setTimeout(runCodeBasedOnUrl, 100);
}

const observer = new MutationObserver(() => {
  var currentPage = window.location.href.split("?")[0].split("#")[0];

  // Check if URL actually changed
  if (currentPage === previousUrl) {
    // URL hasn't changed, but check if we need to run code anyway (page refresh case)
    var isHomepage = pageList.some(function(url) { return currentPage === url || currentPage === url.replace(/\/$/, '') || currentPage + '/' === url; });
    var isInList = ["/plans/all-plans", "/plans/water-sewer", "/plans/heating-cooling", "/plans/electrical-gas", "/plans/appliances", "/plans/whole-home", "/cart", "/cart/payment"].some(function(path) { return currentPage.endsWith(path); });
    var selectorToCheck = isHomepage ? selectorHomepage : selector1014;
    var selectorElement = document.querySelector(selectorToCheck);

    if (selectorElement) {
      var hasSpzClass = document.querySelector('body').classList.contains('spz_1014_v1');
      var hasSpzSections = document.querySelector('.spz_sections');
      // Check body class for both conditions, and also check spz_sections for homepage
      if (isHomepage && (!hasSpzClass || !hasSpzSections)) {
        console.log("aaaaa", isHomepage);
        runCodeBasedOnUrl();
      } else if (isInList && !isHomepage && !hasSpzClass) {
        runCodeBasedOnUrl();
      }
    }
    return;
  }

  // URL changed, so clean up previous test first
  if (previousUrl && pageList.some(function(url) { return previousUrl === url || previousUrl === url.replace(/\/$/, '') || previousUrl + '/' === url; })) {
    removeTest();
  }

  previousUrl = currentPage;
  runCodeBasedOnUrl();
});

const config = { subtree: true, childList: true };
observer.observe(document.body, config);
