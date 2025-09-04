//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz5004Test() {
  if (!document.querySelector('body').classList.contains('spz_5004') && (/\/vacation-rental-data\/app\/us\/[^\/]+\/[^\/]+\/overview$/.test(window.location.pathname))) {
    document.querySelector('body').classList.add('spz_5004');
    document.querySelector('html').classList.add('spz_5004_HTML');

    // Put your test code here
    if (document.querySelector('.spz_5004 > div.MuiBox-root.mui-0')) {
      document.querySelector('.spz_5004 > div.MuiBox-root.mui-0').insertAdjacentHTML('afterbegin', `
        <div class="header">
        </div>
      `);
    }
    document.querySelector('.header').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-child(2)'));
    if (document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 .header')) {
      document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 .header').insertAdjacentHTML('afterend', `
          <main class="main_container">

            <div class="hero">
              <div class="auto_container">
                <div class="hero_inner">
                  <div class="hero_left">
                    <h2>Short-Term Rental Data</h2>
                    <h3>
                      <span></span>
                      Airbnb and Vrbo data <br> from <strong></strong> properties
                    </h3>
                    <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Get property data</a>
                  </div>
                  <div class="hero_right">
                    <picture>
                      <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-360.webp">
                      <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-768.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-1440.webp" alt="Hero image">
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs_section">
              <div class="auto_container">
                <div class="tab_inner">
                  <div class="top-slider">
                    <div class="splide splidetop">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="child child_one">
                              <a href="javascript:void(0);" class="sliderNav">
                                <b class="dynamic_city"></b> Overview
                              </a>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child child_two">
                              <a href="javascript:void(0);" class="sliderNav">
                                Listing Performance
                              </a>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child child_three">
                              <a href="javascript:void(0);" class="sliderNav">
                                Occupancy
                              </a>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child child_four">
                              <a href="javascript:void(0);" class="sliderNav">
                                Revenue
                              </a>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child child_five">
                              <a href="javascript:void(0);" class="sliderNav">
                                Rates
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="graph_section tab_one">
              <div class="auto_container">
                <div class="graph_inner">
                  <div class="graph_main" id="tab1">

                  </div>
                </div>
              </div>
            </div>

            <div class="graph_section tab_two">
              <div class="auto_container">
                <div class="graph_inner">
                  <div class="graph_detail">
                    <h2><span></span> STR Performance Data</h2>
                  </div>
                  <div class="graph_main" id="tab2">
                  </div>
                  <div class="cta_outer">
                    <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Start for free</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="review">
              <div class="auto_container">
                <div class="review_inner">
                  <div class="review_left">
                    <h3>Excellent</h3>
                    <div class="review_line">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/stars.svg" alt="review stars"><span><strong>4.8 </strong>  (687 reviews)</span>
                    </div>
                    <div class="trust_logo">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/trustpilot-logo.svg" alt="trustpilot logo">
                    </div>
                  </div>
                  <div class="review_right">
                    <div class="review_main">
                      <span>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/stars.svg" alt="review stars">
                      </span>
                      <p>“Gave me the visibility to make researched decisions on properties. The amount of data I was able to retrieve allowed me to make more educational decisions. Would recommend to anyone looking into STR.”</p>
                      <small>
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/avatar-png.webp" alt="Jay"></span>
                        <strong>
                          <b>Jay</b>
                          Short Term Rental Host
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="graph_section tab_three">
              <div class="auto_container">
                <div class="graph_inner">
                  <div class="graph_detail">
                    <h2><span></span> Occupancy Data</h2>
                  </div>
                  <div class="graph_main" id="tab3">
                  </div>
                  <div class="cta_outer">
                    <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Start for free</a>
                  </div>
                </div>
              </div>
            </div>
   
            <div class="account_section">
              <div class="auto_container">
                <div class="accoutn_inner">
                  <div class="accoutn_left">
                    <h3>Free AirDNA Account</h3>
                    <h2>Optimize investments & pricing with market data. Grow <br> revenue 20%. </h2>
                    <div class="cta_outer">
                      <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Get property data</a>
                    </div>
                  </div>
                  <div class="account_right">
                    <picture>
                      <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/ui-360.webp">
                      <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/ui-768.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/ui-1440.webp" alt="Free AirDNA Account">
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div class="graph_section tab_four">
              <div class="auto_container">
                <div class="graph_inner">
                  <div class="graph_detail">
                    <h2><span></span> STR Revenue Data</h2>
                  </div>
                  <div class="top-slider">
                    <div class="splide splideTwo">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="child child_four">
                              <a href="javascript:void(0);" class="sliderNav">
                                Revenue
                              </a>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child child_five">
                              <a href="javascript:void(0);" class="sliderNav">
                                Revenue per available rental
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="graph_main" id="tab4">
                  </div>
                  <div class="cta_outer">
                    <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Start for free</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="graph_section tab_five">
              <div class="auto_container">
                <div class="graph_inner">
                  <div class="graph_detail">
                    <h2>Rates</h2>
                  </div>
                  <div class="graph_main" id="tab5">
                  </div>
                  <div class="cta_outer">
                    <a href="javascript:void(0);" class="custom_btn spz_5004_v1">Start for free</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="logo_section">
              <div class="auto_container">
                <div class="logo_inner">
                  <div class="trusted-by">
                    <h2>Data trusted by</h2>
                    <div class="trusted-by-logos">
                      <ul>
                        <li>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1743436734/airdna/5004/nyt-1440.svg" alt="the new york times">
                        </li>
                        <li>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1743436734/airdna/5004/bloomberg-1440.svg" alt="bloomberg">
                        </li>
                        <li>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1743436734/airdna/5004/fast_company-1440.svg" alt="fast company">
                        </li>
                        <li>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1743436734/airdna/5004/nerdwallet-1440.svg" alt="nerdwallet">
                        </li>
                        <li>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1743436735/airdna/5004/wsj-1440.svg" alt="the wall street journal">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="MuiBox-root css-1skx56s">
              <div class="MuiBox-root css-r2wu2v">
                <div class="MuiBox-root css-qrs0pq">
                  <div class="MuiBox-root css-1cl157q">
                    <picture>
                      <source media="(max-width: 767px)" srcset="https://images.prismic.io/airdna-next/Z6xQcZbqstJ9-gvi_Phone.png?auto=format%2Ccompress&fit=max&w=750">
                      <img alt="Market overview" loading="lazy" width="2176" height="1141"
                      decoding="async" data-nimg="1"
                      srcset="https://images.prismic.io/airdna-next/Z6xP35bqstJ9-gva_image235.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840 1x"
                      src="https://images.prismic.io/airdna-next/Z6xP35bqstJ9-gva_image235.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840"
                      style="color: transparent;">
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div class="MuiBox-root css-5zdzuy">
              <div class="MuiBox-root css-gy3n1b">
                <div class="MuiBox-root css-1plkqa7">
                  <div class="MuiBox-root css-1sl57il" type="light">
                    <h3>Grow your business with the expert insights and advice</h3>
                  </div>
                  <div class="MuiBox-root css-1kbdsms" type="light"
                    listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg">
                    <p>Dive into a wealth of knowledge designed to empower hosts and investors. Our comprehensive resources include:
                    </p>
                  </div>
                </div>
                <div class="MuiBox-root css-0">
                  <div class="MuiBox-root css-zjhxww">
                    <div class="MuiBox-root css-k0mdkl">
                      <div class="MuiBox-root css-kz8hsa">
                        <div class="MuiBox-root css-15sq3tg"><img alt="Guides" loading="lazy" width="82" height="82"
                            decoding="async" data-nimg="1"
                            srcset="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLd_Guides.svg?fit=max&amp;w=96 1x, https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLd_Guides.svg?fit=max&amp;w=256 2x"
                            src="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLd_Guides.svg?fit=max&amp;w=256"
                            style="color: transparent;"></div>
                        <div class="MuiBox-root css-1rr4qq7">
                          <div class="MuiBox-root css-1oaddr4">
                            <div class="MuiBox-root css-x8vmf5" type="light">
                              <h4><a target="_self" href="https://www.airdna.co/resources/guides" rel="noreferrer">Guides &amp;
                                  tutorials</a></h4>
                            </div>
                          </div>
                          <div class="MuiBox-root css-hh79gg" type="light"
                            listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg">
                            <p>Step-by-step instructions to maximize your STR investments using short-term rental data.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="MuiBox-root css-k0mdkl">
                      <div class="MuiBox-root css-kz8hsa">
                        <div class="MuiBox-root css-15sq3tg"><img alt="Blog &amp; Article" loading="lazy" width="82" height="82"
                            decoding="async" data-nimg="1"
                            srcset="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnI57c43Q3gHLb_Blog%26Article.svg?fit=max&amp;w=96 1x, https://airdna-next.cdn.prismic.io/airdna-next/Z7wnI57c43Q3gHLb_Blog%26Article.svg?fit=max&amp;w=256 2x"
                            src="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnI57c43Q3gHLb_Blog%26Article.svg?fit=max&amp;w=256"
                            style="color: transparent;"></div>
                        <div class="MuiBox-root css-1rr4qq7">
                          <div class="MuiBox-root css-1oaddr4">
                            <div class="MuiBox-root css-x8vmf5" type="light">
                              <h4><a target="_self" href="https://www.airdna.co/resources/blog" rel="noreferrer">Blog &amp;
                                  articles</a></h4>
                            </div>
                          </div>
                          <div class="MuiBox-root css-hh79gg" type="light"
                            listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg">
                            <p>Stay updated with the latest news, trends, and tips in the short-term rental industry.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="MuiBox-root css-k0mdkl">
                      <div class="MuiBox-root css-kz8hsa">
                        <div class="MuiBox-root css-15sq3tg"><img alt="Webinars" loading="lazy" width="82" height="82"
                            decoding="async" data-nimg="1"
                            srcset="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLc_Frame427320408.svg?fit=max&amp;w=96 1x, https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLc_Frame427320408.svg?fit=max&amp;w=256 2x"
                            src="https://airdna-next.cdn.prismic.io/airdna-next/Z7wnJZ7c43Q3gHLc_Frame427320408.svg?fit=max&amp;w=256"
                            style="color: transparent;"></div>
                        <div class="MuiBox-root css-1rr4qq7">
                          <div class="MuiBox-root css-1oaddr4">
                            <div class="MuiBox-root css-x8vmf5" type="light">
                              <h4><a target="_self" href="https://www.airdna.co/resources/video" rel="noreferrer">Webinars</a></h4>
                            </div>
                          </div>
                          <div class="MuiBox-root css-hh79gg" type="light"
                            listbulletimage="https://assets.airdna.co/airdna-next/7f4e4ba9-f530-40b3-af5b-a27d6a3843a2_CheckCircleOutlineOutlined.svg">
                            <p>Learn from industry experts and stay ahead of market trends with short-term rental analytics.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="podcast_sec">
              <div class="MuiBox-root css-1fyw2cu mui_top">
                <div class="MuiBox-root css-ez7k2o">
                  <h4><strong>The STR Data Lab Podcast</strong></h4>
                </div>
              </div>
              <div class="MuiBox-root css-1fyw2cu">
                <div class="MuiBox-root css-y3m81v">
                  <h5><strong>Get weekly insights from Chief Economist Jamie Lane on all things short-term rentals</strong></h5>
                </div>
              </div>
              <div class="MuiBox-root css-1l2fs74">
                <section class="styles__Section-sc-2hayd5-0 hEAtbk">
                  <div class="styles__Container-sc-2hayd5-1 bHtRsN">
                    <div class="ExternalEmbed__EmbedStyles-sc-1kc62ad-0 hFKXIr"><iframe frameborder="0"
                        src="https://playlist.megaphone.fm?p=SLICK6954332486&amp;light=true" title="megaphone" width="100%"
                        height="482"></iframe></div>
                  </div>
                </section>
              </div>
            </div>

          </main>
      `);
    }
    document.querySelector('.hero_left').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0  > div:nth-of-type(2)'));
    var cityValue = document.querySelector('.spz_5004 .hero_left h1 > span.MuiBox-root:nth-of-type(5)').innerText;
    var availableListings = document.querySelector('.spz_5004 > div.MuiBox-root.mui-0>div:nth-of-type(4) > .MuiGrid-root>div:first-child >.MuiBox-root>.MuiBox-root:last-child>p.MuiTypography-root').innerText;
    document.querySelector('.hero_left h3 span').innerText = cityValue;
    document.querySelector('.hero_left h3 strong').innerText = availableListings;
    document.querySelector(('.dynamic_city')).innerText = cityValue;
    var graphHeading = document.querySelectorAll(('.graph_detail h2 span'));
    graphHeading.forEach((heading) => {
      heading.innerText = cityValue;
    });
    document.querySelector('#tab1').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab2').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004  > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab3').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab4').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab5').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    console.log('Time 2 > ' + new Date().getTime() / 1000);
    document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 .header')?.insertAdjacentHTML('afterend', `<section class="section_outer"></section>`);
    document.querySelector('.spz_5004 .section_outer')?.insertAdjacentElement('beforeend', document.querySelector('.spz_5004 .main_container'));

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
    document.head.appendChild(link);

    const loadJS = (url, implementationCode, location) => {
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;
      location.appendChild(scriptTag);
    };
    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
      var splidetop = new Splide('.splidetop', {
        rewind: false,
        isNavigation: true,
        focus: 'center',
        autoplay: false,
        speed: 5,
        interval: 1000,
        pagination: false,
        perPage: 5,
        drag: false,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,

      });

      var splideTwo = new Splide('.splideTwo', {
        rewind: false,
        isNavigation: true,
        focus: 'center',
        autoplay: false,
        speed: 5,
        interval: 1000,
        pagination: false,
        perPage: 2,
        arrows: false,
        drag: false,
        pauseOnHover: false,
        pauseOnFocus: false,

      });

      // Pause auto slide on click

      setTimeout(function () {
        splidetop.mount();
        splideTwo.mount();
      }, 500);
      window.dispatchEvent(new Event('resize'));
    }, document.body);

    window.addEventListener('click', function (e) {
      if (e.target.matches('.child_one')) {
        console.log('clicked nav_one');
        e.preventDefault();
        const target = document.querySelector('.tab_one');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.target.matches('.child_two')) {
        e.preventDefault();
        const target = document.querySelector('.tab_two');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.target.matches('.child_three')) {
        e.preventDefault();
        const target = document.querySelector('.tab_three');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.target.matches('.child_four')) {
        e.preventDefault();
        const target = document.querySelector('.tab_four');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.target.matches('.child_five')) {
        e.preventDefault();
        const target = document.querySelector('.tab_five');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if(e.target.matches('.header img[alt="AirDNA"]')){ 
        window.location.href = 'https://www.airdna.co/';
      }
      if(e.target.matches('.custom_btn')){ 
        document.querySelector('.header > div > a').click();
      }
    });



    // Button click animation
    document.querySelectorAll('.custom_btn').forEach(btn => {
      btn.addEventListener('mousedown', function (e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = 'ripple-effect'; // Add a class for styling

        this.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      });
    });
  }
}


function removeTest() {
  const wrapper = document.querySelector('.spz_5004 > div:nth-of-type(2)');
  const headerDiv = document.querySelector('.header > div');
  if (wrapper && headerDiv) {
    wrapper.insertAdjacentElement('afterbegin', headerDiv);
  }

  const heroDiv = document.querySelector('.hero_left > div');
  const wrapperFirstDiv = document.querySelector('.spz_5004 > div:nth-of-type(2) > div:nth-of-type(1)');
  if (wrapperFirstDiv && heroDiv) {
    wrapperFirstDiv.insertAdjacentElement('afterend', heroDiv);
  }

  const header = document.querySelector('.header');
  if (header) {
    header.remove();
  }

  const originalParent = document.querySelector('.spz_5004 > div:nth-of-type(2) > div:nth-of-type(3)');

  const tab5 = document.querySelector('#tab5 > div');
  const hr3 = document.querySelector('.spz_5004 > div:nth-of-type(2) > hr:nth-of-type(3)');
  if (hr3 && tab5) {
    hr3.insertAdjacentElement('afterend', tab5);
  }

  const tab4 = document.querySelector('#tab4 > div');
  const hr2 = document.querySelector('.spz_5004 > div:nth-of-type(2) > hr:nth-of-type(2)');
  if (hr2 && tab4) {
    hr2.insertAdjacentElement('afterend', tab4);
  }

  const tab3 = document.querySelector('#tab3 > div');
  const hr1 = document.querySelector('.spz_5004 > div:nth-of-type(2) > hr:nth-of-type(1)');
  if (hr1 && tab3) {
    hr1.insertAdjacentElement('afterend', tab3);
  }

  const tab2 = document.querySelector('#tab2 > div');
  if (originalParent && tab2) {
    originalParent.insertAdjacentElement('afterend', tab2);
  }

  const tab1 = document.querySelector('#tab1 > div');
  if (originalParent && tab1) {
    originalParent.insertAdjacentElement('afterend', tab1);
  }

  document.querySelector('html')?.classList.remove('spz_5004_HTML');
  document.querySelector('body')?.classList.remove('spz_5004');

  const mainContainer = document.querySelector('.section_outer');
  if (mainContainer) {
    mainContainer.remove();
  }
}

const selector5004 = 'body > div.MuiBox-root.mui-0 > div:nth-child(2) h1';
function waitForElement(selector5004, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector5004);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector5004);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector5004}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector5004)
    .then((element) => {
      if (element) {
        spz5004Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

let executeTimeout;
let previousCleanHref = "";

const observer = new MutationObserver(function () {
  const cleanHref = location.href.split('?')[0].split('#')[0];

  if (cleanHref !== previousCleanHref) {
    previousCleanHref = cleanHref;

    const pathname = window.location.pathname;
    const isCorrectURL = /^\/vacation-rental-data\/app\/us\/[^\/]+\/[^\/]+\/overview$/.test(pathname);

    if (isCorrectURL) {
      clearTimeout(executeTimeout);
      executeTimeout = setTimeout(function () {
        console.log('✅ Correct URL, running executeTest');
        executeTest();
      }, 300);
    } else {
      console.log('❌ Wrong URL, running removeTest');
      clearTimeout(executeTimeout);
      removeTest(); // Must fully undo anything from executeTest
    }
  }
});

const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);




