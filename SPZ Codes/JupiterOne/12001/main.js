console.log("working 12001");
function loadTestCode2() {
  // splide css
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.4/dist/css/splide.min.css";
  if (
    !document.querySelector(
      'link[href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.4/dist/css/splide.min.css"]'
    )
  ) {
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  // main css
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://res.cloudinary.com/spiralyze/raw/upload/JupiterOne/12001/src/style.css";
  if (
    !document.querySelector(
      'link[href="https://res.cloudinary.com/spiralyze/raw/upload/JupiterOne/12001/src/style.css"]'
    )
  ) {
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  if (!document.querySelector("body").classList.contains("spz_12001")) {
    document.querySelector("body").classList.add("spz_12001");

    var newHTML =
      "<section class='new_hero'><div class='container-large w-container'><div class='new_heroInner'><div class='new_heroForm'><div class='form_colOuter'><div class='form_col step_one' style='display:block'><div class='form_heading'><h3>Get Free Analysis</h3><h4>What best describes your AWS environment?</h4></div><div class='form_listData'><ul><li><div class='form_data'><label class='radio'><input name='radio' type='radio' checked='checked'><span><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/single_cloud.webp' alt='Single Cloud'></figure><strong>Single cloud</strong></span></label></div></li><li><div class='form_data'><label class='radio'><input name='radio' type='radio'><span><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/multi-cloud.webp' alt='Multi-Cloud'></figure><strong>Multi-cloud</strong></span></label></div></li></ul></div><div class='form_btn'><a href='javascript:void(0);' class='custom_button' id='step_two'>Next</a></div><div class='form_nav'><ul><li><a href='javascript:void(0);' class='current'></a></li><li><a href='javascript:void(0);'></a></li><li><a href='javascript:void(0);'></a></li></ul></div></div><div class='form_col step_two'><div class='form_heading'><h3>Get Free Analysis</h3><h4>Which department do you primarily work in?</h4></div><div class='form_listData'><ul><li><div class='form_data'><label class='radio'><input name='radio1' type='radio' checked><span><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/it.webp' alt='IT'></figure><strong>IT</strong></span></label></div></li><li><div class='form_data'><label class='radio'><input name='radio1' type='radio'><span><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/security.webp' alt='Security'></figure><strong>Security</strong></span></label></div></li><li><div class='form_data'><label class='radio'><input name='radio1' type='radio'><span><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/finance.webp' alt='Finance'></figure><strong>Finance</strong></span></label></div></li></ul></div><div class='form_btn'><a href='javascript:void(0);' class='custom_button' id='step_three'>Next</a></div><div class='form_nav'><ul><li><a href='javascript:void(0);' class='prev'></a></li><li><a href='javascript:void(0);' class='current'></a></li><li><a href='javascript:void(0);'></a></li></ul></div></div><div class='form_col step_three'><div class='form_heading'><h3>Get Free Analysis</h3></div><div class='form_listData'></div><div class='form_nav'><ul><li><a href='javascript:void(0);' class='prev'></a></li><li><a href='javascript:void(0);' class='prev'></a></li><li><a href='javascript:void(0);' class='current'></a></li></ul></div></div></div><div class='content_col'><div class='content_data'><h3>FREE CLOUD SAVINGS ANALYSIS</h3><h2>Get a full report on AWS cost savings opportunities.</h2><p>According to Flexera’s 2022 State of the Cloud Report, 32% of costs are wasted on things like unused assets and overlooked vulnerabilities.</p><p>Get an in-depth analysis of your cloud usage and identify immediate opportunities to reduce costs. Getting set up takes just X minutes.</p></div></div></div><div class='hero_slider'><div class='splide' id='hero_slider'><div class='splide__track'><ul class='splide__list'><li class='splide__slide'><div class='slider_data'><figure><img class='lightbox-image' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/page3_12.webp' alt='JupiterOne'></figure><strong><a href='javascript:void(0);' class='show-lightbox'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/zoom_1.webp' alt='Preview'></a></strong></div></li><li class='splide__slide'><div class='slider_data'><figure><img class='lightbox-image' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/page3_11.webp' alt='Methodology'></figure><strong><a href='javascript:void(0);' class='show-lightbox'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/zoom_1.webp' alt='Preview'></a></strong></div></li><li class='splide__slide'><div class='slider_data'><figure><img class='lightbox-image' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/page3_13.webp' alt='Findings'></figure><strong><a href='javascript:void(0);' class='show-lightbox'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/zoom_1.webp' alt='Preview'></a></strong></div></li><li class='splide__slide'><div class='slider_data'><figure><img class='lightbox-image' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/page3_10.webp' alt='vulnerabilities'></figure><strong><a href='javascript:void(0);' class='show-lightbox'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/zoom_1.webp' alt='Preview'></a></strong></div></li><li class='splide__slide'><div class='slider_data'><figure><img class='lightbox-image' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/page3_9.webp' alt='ACME'></figure><strong><a href='javascript:void(0);' class='show-lightbox'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/zoom_1.webp' alt='Preview'></a></strong></div></li></ul></div></div></div><div id='lightbox'><a class='close_lightbox' href='javascript:void(0);'><img id='close_lighbox' src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/close_hov.svg' alt='Close'></a><img id='lightbox-image' src='' alt='Lightbox Image'></div></div></div></section><section class='how_it_works'><div class='container-large w-container'><div class='how_it_worksInner'><div class='custom_heading'><h2>How it works</h2></div><div class='how_it_worksList'><ul><li><div class='how_it_worksData'><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/step_1_connect_your_environment.webp' alt='Connect your environment'></figure><h3>Step 1: Connect your environment</h3><p>Connect your cloud service provider and key solutions to JupiterOne in a few clicks. Agentless, API-based integrations.</p></div></li><li><div class='how_it_worksData'><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/step_2_analyze_environment.webp' alt='Analyze environment'></figure><h3>Step 2: Analyze environment</h3><p>JupiterOne analyzes your environment for potential cost savings, including asset utilization and storage. We’ll also include current risks.</p></div></li><li><div class='how_it_worksData'><figure><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/step_3_reduce_costs.webp' alt='Reduce costs'></figure><h3>Step 3: Reduce costs</h3><p>Get a full report showing where costs can be reduced, current critical vulnerabilities in your environment, and next steps.</p></div></li></ul></div><div class='form_btn'><a href='//info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management' class='custom_button'>Get Started</a></div></div></div></section><section class='slider'><div class='user-slider-wrapper'><div class='user-slider-section'><section class='splide splide1'><div class='splide__track'><ul class='splide__list'><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>\"With the cost savings from identifying and </br> de-provisioning orphaned AWS resources and not having to purchase separate tools, we've more than recouped our investment in JupiterOne!\"</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at1.webp' alt='Mark Holtz' width='80' height='80'><div class='text'><strong>Mark Holtz</strong><p>Manager, DevSecOps at Socotra</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt1.webp' alt='Socotra' height='60' width='196'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“One of the big things that got us excited about JupiterOne was the Graph view – seeing how everything is connected. That, plus knowing that we had the out-of-the-box Insights Dashboards for Incident Response helped me sleep better.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at2.webp' alt='Dlaine Miley' width='80' height='80'><div class='text'><strong>Dlaine Miley</strong><p>Cloud Security Engineer at Mercury Financial</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt2.webp' alt='Mercury Financial' width='72' height='72'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“It’s an example of a modern security product company that **actually** solves real customer problems. Asset management is something we security folks waved our hands about for too long. The graph is a security primitive you build your program on.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at3.webp' alt='Duncan Godfrey' width='80' height='80'><div class='text'><strong>Duncan Godfrey</strong><p>CISO at Rippling</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt3.webp' alt='CISCO' width='113' height='60'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“From a merger/acquisition perspective, JupiterOne was invaluable. As M&A activities in cloud native companies become increasingly popular, there is no better way to identify and tag assets than using a tool like JupiterOne.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at4.webp' alt='Paul Guthrie' width='80' height='80'><div class='text'><strong>Paul Guthrie</strong><p>Information Security Officer at Blend</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt4.webp' alt='Blend' width='146' height='60'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“Out of all the solutions that we evaluated, we appreciated JupiterOne’s focus on showing all relationships across all assets. With JupiterOne, we now see how everything is connected. This is a huge bonus and win for Indeed’s overall cloud posture and assessment.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at5.webp' alt='Andrew Bitson' width='80' height='80'><div class='text'><strong>Andrew Bitson</strong><p>Platform Security Engineer at Indeed</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt5.webp' alt='Indeed' width='170' height='44'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“JupiterOne’s asset monitoring capability is the foundation and core to almost everything in our security operations. It is our one source of truth.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at6.webp' alt='Caleb Sima' width='80' height='80'><div class='text'><strong>Caleb Sima</strong><p>Chief Security Officer at Robinhood</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt6.webp' alt='Robinhood' width='227' height='60'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“We were most impressed at how JupiterOne mapped and presented the relationships within our asset inventories. Now, we can efficiently discover and prioritize vulnerabilities by proximity to critical assets and are outperforming our goals in threat response.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at7.webp' alt='Daniel Jones' width='80' height='80'><div class='text'><strong>Daniel Jones</strong><p>Chief Information Security Officer at Elwood Technologies</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt7.webp' alt='Elwood Technologies' width='179' height='60'></div></div></div></div></li><li class='splide__slide'><div class='child'><div class='quote'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/quotation-mark_1.webp' alt='Quote'></div><div class='right'><h2>“My role is to bring secure-by-design products to market quickly. JupiterOne's asset tracking and compliance automation is core to how I execute on that.”</h2><div class='slider_bottom'><div class='profile'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/at8.webp' alt='Jameeka Green Aaron' width='80' height='80'><div class='text'><strong>Jameeka Green Aaron</strong><p>CISO at Okta CIC</p></div></div><div class='company_logo'><img src='//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/12001/lt8.webp' alt='Okta CIC' width='130' height='44'></div></div></div></div></li></ul></div></section></div></div></section>";
    var wrapper = document.getElementById("main-wrapper");
    wrapper.insertAdjacentHTML("afterBegin", newHTML);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);

    loadTestCode2();

    // lightbox
    const lightboxImages = document.querySelectorAll(".lightbox-image");
    const showLightboxLinks = document.querySelectorAll(".show-lightbox");
    const lightboxContainer = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    showLightboxLinks.forEach((link, index) => {
      link.addEventListener("click", function () {
        document.querySelector("body").classList.add("hidden");
        lightboxImage.src = lightboxImages[index].src;
        lightboxContainer.style.display = "flex";
      });
    });

    document.addEventListener("click", function (e) {
      if (e.target.id === "close_lighbox") {
        lightboxContainer.style.display = "none";
        document.querySelector("body").classList.remove("hidden");
      }
      if (e.target.id === "lightbox") {
        lightboxContainer.style.display = "none";
        document.querySelector("body").classList.remove("hidden");
      }
    });

    // show form step two
    // var showStepTwo = document.getElementById("step_two");
    // showStepTwo.addEventListener("click", function () {
    //   var stepOneElements = document.querySelectorAll(".step_one");
    //   console.log(stepOneElements);
    //   stepOneElements.forEach(function (element) {
    //     element.style.display = "none";
    //   });

    //   var stepTwoElements = document.querySelectorAll(".step_two");

    //   stepTwoElements.forEach(function (element) {
    //     element.style.display = "block";
    //   });
    // });

    document.addEventListener("click", function (e) {
      if (e.target.id === "step_two") {
        var stepOneElements = document.querySelectorAll(".step_one");
        console.log(stepOneElements);
        stepOneElements.forEach(function (element) {
          element.style.display = "none";
        });

        var stepTwoElements = document.querySelectorAll(".step_two");

        stepTwoElements.forEach(function (element) {
          element.style.display = "block";
        });
      }
    });

    // show form step three
    // var showStepThree = document.getElementById("step_three");

    // showStepThree.addEventListener("click", function () {
    //   var stepTwoElements = document.querySelectorAll(".step_two");

    //   stepTwoElements.forEach(function (element) {
    //     element.style.display = "none";
    //   });

    //   var stepThreeElements = document.querySelectorAll(".step_three");

    //   stepThreeElements.forEach(function (element) {
    //     element.style.display = "block";
    //   });
    // });

    document.addEventListener("click", function (e) {
      if (e.target.id === "step_three") {
        var stepTwoElements = document.querySelectorAll(".step_two");

        stepTwoElements.forEach(function (element) {
          element.style.display = "none";
        });

        var stepThreeElements = document.querySelectorAll(".step_three");

        stepThreeElements.forEach(function (element) {
          element.style.display = "block";
        });
      }
    });

    // wrap label input pair into a div
    var stepThreeDiv = document.querySelector(".step_three");
    if (stepThreeDiv) {
      var formListDataDiv = stepThreeDiv.querySelector(".form_listData");
      if (formListDataDiv) {
        document
          .querySelector("#First-Name")
          .insertAdjacentHTML("afterEnd", '<div class="first_name"></div>');
        document
          .querySelector(".first_name")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector('label[for="First-Name"]')
          );
        document
          .querySelector(".first_name")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector("#First-Name")
          );

        document
          .querySelector("#Last-Name")
          .insertAdjacentHTML("afterEnd", '<div class="last_name"></div>');
        document
          .querySelector(".last_name")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector('label[for="Last-Name"]')
          );
        document
          .querySelector(".last_name")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector("#Last-Name")
          );

        document
          .querySelector("#Company")
          .insertAdjacentHTML("afterEnd", '<div class="comapny"></div>');
        document
          .querySelector(".comapny")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector('label[for="Company"]')
          );
        document
          .querySelector(".comapny")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector("#Company")
          );

        document
          .querySelector("#field-2")
          .insertAdjacentHTML("afterEnd", '<div class="field_2"></div>');
        document
          .querySelector(".field_2")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector('label[for="field-2"]')
          );
        document
          .querySelector(".field_2")
          .insertAdjacentElement(
            "afterBegin",
            document.querySelector("#field-2")
          );

        var submitBtn = document.querySelector(".hubspot-button--cloudcost");
        submitBtn.value = "Submit";

        formListDataDiv.insertAdjacentElement(
          "afterbegin",
          document.querySelector(".intro-form")
        );

        // change position of third and fourth fields
        var parentDiv = document.getElementById("lower-cloud-spend-form");

        var thirdDiv = parentDiv.children[2];
        var fourthDiv = parentDiv.children[3];

        parentDiv.removeChild(thirdDiv);

        parentDiv.insertBefore(thirdDiv, fourthDiv.nextSibling);
      }
    }

    // email filled
    // var emailInput = document.getElementById("field-2");

    // emailInput.addEventListener("input", function () {
    //   var inputValue = this.value;

    //   if (inputValue.trim() !== "") {
    //     this.classList.add("filled");
    //   } else {
    //     this.classList.remove("filled");
    //   }
    // });

    document.addEventListener("input", function (e) {
      if (e.target.id === "field-2") {
        var inputValue = e.target.value;

        if (inputValue.trim() !== "") {
          e.target.classList.add("filled");
        } else {
          e.target.classList.remove("filled");
        }
      }
    });

    // splide js

    const loadJS = (url, implementationCode, location) => {
      var scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;

      location.appendChild(scriptTag);
    };

    loadJS(
      "https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.4/dist/js/splide.min.js",
      function () {
        // splide slider
        var heroSplide = new Splide("#hero_slider", {
          type: "loop",
          perPage: 3,
          autoplay: false,
          interval: 10000,
          rewind: false,
          speed: 1000,
        });

        function updateSplideOptions() {
          if (window.innerWidth < 768) {
            heroSplide.options.perPage = 1;
            heroSplide.options.fixedWidth = false;
          } else if (window.innerWidth < 1023) {
            heroSplide.options.perPage = 2;
          } else {
            heroSplide.options.perPage = 3;
          }
        }

        heroSplide.mount();
        updateSplideOptions();
        heroSplide.refresh();
        window.addEventListener("resize", function () {
          updateSplideOptions();
          heroSplide.refresh();
        });

        // splide 2
        var splide1 = new Splide(".splide1", {
          type: "loop", // slide loop fade
          perPage: 1,
          autoplay: false,
          interval: 10000,
        });
        splide1.mount();
      },
      document.body
    );
  }
}, 100);
