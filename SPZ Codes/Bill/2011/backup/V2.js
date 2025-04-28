const bodyInterval2011 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_2011')) {
    clearInterval(bodyInterval2011)
    document.querySelector('body').classList.add("spz_2011", 'v2')
    localStorage.setItem('bdcAbTest9', '9-2011.v2');

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


    document.querySelector('.testimonial-slider').closest('.background-color-light-orange').classList.add('spz_hidden');
    document.querySelector('.spz_hidden').insertAdjacentHTML('afterend', `
<div class="slider_wrapper">
  <div class="slider_heading">
    <h2>Customers succeed with BILL</h2>
  </div>
  <section class="splide splide2011 testimonial_slider">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-generation-teach.webp"
                alt="Bee Nance">
            </div>
            <div class="slider_detail wid_2">
              <div class="slider_detailTop">
                <h3>90%</h3>
                <h4>Faster payment processing</h4>
                <div class="slider_transition">
                  <p>"Generation Teach combines my skills in accounting with my love of community. For me it's not just
                    a job to make money but a way to bring people together to learn, grow, and develop."</p>
                  <a href="https://www.bill.com/case-study/customer-success-story-generation-teach"
                    class="slider_btn spz_2011_v2">Read Full Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Bee Nance, COO</strong>
                  <span>Generation Teach</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/external/560727126.hd.mp4?s=e0262bfa77907ce87efefb823f14467f649514c8&profile_id=175"
                  data-bg="preview-generation-teach.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-bare-bones.webp"
                alt="Ryan Harvey">
            </div>
            <div class="slider_detail">
              <div class="slider_detailTop">
                <h3>Significant</h3>
                <h4>Time savings</h4>
                <div class="slider_transition">
                  <p>“Payables went from being my whole job, probably 30 hours a week just managing stacks of paper, to
                    maybe 5 hours a week.”</p>
                  <a href="https://www.bill.com/case-study/customer-success-story-bare-bones-broth"
                    class="slider_btn spz_2011_v2">Read Full Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Ryan Harvey, Co-founder</strong>
                  <span>Bare Bones</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/progressive_redirect/playback/574351702/rendition/1080p/file.mp4?loc=external&signature=8fbb6ac483a6837e857e2c4e4a7c0cc7844087a11624164ba449d21f098c0353"
                  data-bg="preview-bare-bones.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-golden-ratio.webp"
                alt="Clark Nowlin">
            </div>
            <div class="slider_detail">
              <div class="slider_detailTop">
                <h3>80%</h3>
                <h4>Faster payables</h4>
                <div class="slider_transition">
                  <p>"My favorite part of BILL is its seamless integration of QuickBooks. Being a remote business, BILL
                    is essential. It's the hub for our whole company.”</p>
                  <a href="https://www.bill.com/case-study/customer-case-study-golden-ratio" class="slider_btn spz_2011_v2">Read
                    Full Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Clark Nowlin, Founder</strong>
                  <span>Golden Ratio</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/progressive_redirect/playback/696662551/rendition/1080p?loc=external&signature=dba25ffa97af2a5e148eafc417820f9086c9c17bfe16e0f26da95841af4a72b4"
                  data-bg="preview-golden-ratio.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-wag.webp"
                alt="Alec Davidian">
            </div>
            <div class="slider_detail">
              <div class="slider_detailTop">
                <h3>80%</h3>
                <h4>Faster close</h4>
                <div class="slider_transition">
                  <p>"BILL is a great tool. Taking advantage of all its features became a key part of transforming the
                    company."</p>
                  <a href="https://www.bill.com/case-study/customer-success-story-wag" class="slider_btn spz_2011_v2">Read Full
                    Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Alec Davidian, CFO</strong>
                  <span>Wag</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/external/600365358.hd.mp4?s=e1b8c49db6195770e47372b376e718149a325905&profile_id=174"
                  data-bg="preview-wag.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-clif-family-winery.webp"
                alt="Linzi Gay">
            </div>
            <div class="slider_detail">
              <div class="slider_detailTop">
                <h3>20%</h3>
                <h4>Increased efficiency</h4>
                <div class="slider_transition">
                  <p>“Overall, I would estimate that BILL has increased efficiency in our office by 20%, and personally
                    saved me a significant amount of time.”</p>
                  <a href="https://www.bill.com/case-study/customer-case-study-clif-family" class="slider_btn spz_2011_v2">Read Full
                    Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Linzi Gay, President</strong>
                  <span>Clif Family Winery</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/progressive_redirect/playback/638997409/rendition/1080p/file.mp4?loc=external&signature=0a728a508cf987dc60130c3d800b963682b9711368daf3af498bc2e104afafd0"
                  data-bg="preview-clif-family-winery.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="splide__slide">
          <div class="slider_data">
            <div class="slider_image">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/v2-bg-bear-robotics.webp"
                alt="Juan Higueros">
            </div>
            <div class="slider_detail">
              <div class="slider_detailTop">
                <h3>67%</h3>
                <h4>Faster close</h4>
                <div class="slider_transition">
                  <p>“Being able to see the detail behind each invoice and have the proper approvals in place has been a
                    savior for us, for sure.”</p>
                  <a href="https://www.bill.com/case-study/customer-success-story-bear-robotics" class="slider_btn spz_2011_v2">Read
                    Full Story</a>
                </div>
              </div>
              <div class="slider_detailBottom">
                <small>
                  <strong>Juan Higueros, COO</strong>
                  <span>Bear Robotics</span>
                </small>
                <a href="javascript:void(0);" class="slider_btn light video_btn spz_2011_v2"
                  data-video="/progressive_redirect/playback/669952495/rendition/1080p/1080p.mp4?loc=external&signature=1a7eb78b8c6399cb2262b8099f6ff03196f36ee7715293ebaf6f6dcbb7c2f738"
                  data-bg="preview-bear-robotics.webp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                      d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                      fill="#111111" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
<div class="join_us">
  <div class="auto_container">
    <div class="join_usInner">
      <div class="join_left">
        <h2>Join the growing number of businesses that trust BILL</h2>
        <p><strong>* As of June 30, 2024.</strong> ** Based on a survey of 127 BILL Spend and Expense users conducted by
          UserEvidence in March 2022.</p>
      </div>
      <div class="join_right">
        <div class="join_list">
          <ul>
            <li>
              <div class="join_data">
                <strong>7.1M</strong>
                <p>Total network members <br> pay or get paid with BILL*</p>
              </div>
            </li>
            <li>
              <div class="join_data">
                <strong>12 hrs</strong>
                <p>Average monthly time savings <br> by surveyed users**</p>
              </div>
            </li>
            <li>
              <div class="join_data">
                <strong>$10K+</strong>
                <p>Average monthly savings <br> by surveyed users**</p>
              </div>
            </li>
            <li>
              <div class="join_data">
                <strong>$300B+</strong>
                <p>In total payment volume <br> on an annual basis</p>
              </div>
            </li>
          </ul>
        </div>
        <p><strong>* As of June 30, 2024.</strong> ** Based on a survey of 127 BILL Spend and Expense users conducted by
          UserEvidence in March 2022.</p>
      </div>
    </div>
  </div>
</div>
<div class="popup_wrapper">
  <div class="modal_inner">
    <div class="video_container">
      <a class="modal_close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="#797C8C" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </a>
      <div class="play_button" id="videoWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
          <path
            d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
            fill="#111111" />
        </svg>
      </div>
      <iframe src="" allowfullscreen="true" scrolling="no" frameborder="0" allow="autoplay; fullscreen"
        title="Vimeo embed">
      </iframe>
    </div>
    <div class="modal_footer">
      <p>Clif Family Winery achieved <strong>20% efficiency increase</strong> with BILL</p>
      <a href="https://www.bill.com/signup" class="modal_footerBtn button is-cta-small w-inline-block">Get Started</a>
    </div>
  </div>
</div>
    `);

    const popup = document.querySelector(".popup_wrapper");
    const popup_outer = document.querySelector(".video_container");
    var iframe = popup_outer.querySelector("iframe");
    
    window.addEventListener('click', function (e) {
      if (e.target.classList.contains('video_btn')) {
        const videoId = e.target.getAttribute("data-video");
        const bg = e.target.getAttribute("data-bg");

        popup_outer.style.background = `url(//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2011/${bg})`;
        popup_outer.style.backgroundSize = "cover";
        popup_outer.style.backgroundPosition = "center";

        iframe.src = `https://player.vimeo.com${videoId}`;
        popup_outer.querySelector("iframe").allow = '';

        // Show Popup
        popup.classList.add("visible");
        document.querySelector('body').style.overflow = 'hidden';
      }

      if (e.target.classList.contains('play_button')) {
        const iframe = e.target.nextElementSibling;
        const src = iframe.getAttribute('src');

        e.target.classList.add('hide');
        iframe.style.display = 'flex';
        // iframe.setAttribute("allow", "autoplay; fullscreen");

        // Check if autoplay is already enabled
        // if (src.indexOf('autoplay=1') === -1) {
        //   iframe.src = src + '?autoplay=1';
        // } else {
        //   iframe.src = src;
        // }
      }

      if (e.target.classList.contains('modal_close')) {
        const iframe = document.querySelector('.video_container iframe');
        const playBtn = document.querySelector('.play_button');
        playBtn.classList.remove('hide');
        iframe.style.display = 'none';
        iframe.src = '';
        e.target.closest('.popup_wrapper').classList.remove('visible');
        document.querySelector('body').style.overflow = 'auto';
      }
    });

    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {

      const slider = new Splide(".testimonial_slider", {
        type: "loop",
        rewind: true,
        focus: "center",
        perPage: 3.7551,
        slidperMove: 1,
        clones: 4,
        gap: "32px",
        breakpoints: {
          1299: {
            perPage: 3.1551,
            gap: "16px",
          },
          1023: {
            perPage: 2.3317,
            gap: "16px",
          },
          767: {
            perPage: 1,
            gap: "18px",
          },
        },
        autoWidth: false,
        arrows: true,
        pagination: false,
        autoplay: true,
        autoplaySpeed: 2000,
        interval: 5000,
        speed: 1000,
        easing: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        drag: true,
        direction: 'ltr',
      });

      let userInteracted = false;

      function stopAutoplay() {
        console.log('stopAutoplay');
        userInteracted = true;
        slider.Components.Autoplay.pause();
      }

      // Observer to detect when `.testimonial_slider` is in view
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              slider.Components.Autoplay.play();
            } else {
              slider.Components.Autoplay.pause();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(document.querySelector('.testimonial_slider'));

      slider.mount();
      window.addEventListener('click', function (e) {
        if (e.target.classList.contains("slider_data") || e.target.classList.contains("splide__slide") || e.target.classList.contains("splide__arrow") || e.target.closest('.testimonial_slider') || e.target.classList.contains('slider_btn') || e.target.closest('.slider_detail')){
          stopAutoplay();
        }
      });
    }, document.body);


  }
}, 10)


