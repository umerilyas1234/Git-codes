// Wait for element
function waitForElement(cssSelector, callback, waitTime) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector);

        if (stop) return;

        if (elementCached) {
          callback(elementCached);
          clearTimeout(timeout);
        } else {
          window.requestAnimationFrame(check);
        }
      } catch (err) {
        console.log(err);
      }
    };
    window.requestAnimationFrame(check);

  timeout = setTimeout(function () {
    stop = true;
  }, waitTime);
}

waitForElement('#___gatsby main', runObserverOnMain, 5000);

function runObserverOnMain() {
  const targetNode = document.querySelector("#___gatsby main");
	const config = {
		attributes: true,
		childList: true,
		subtree: false
	};
  const callback = (mutationList, observer) => {
		console.log("5001::runObserverOnMain");
		beforLoadTestCode5001();
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
	beforLoadTestCode5001();
}

function beforLoadTestCode5001() {
	console.log("5001::beforLoadTestCode5001");
	if (window.location.href.indexOf('/pricing') == -1) {
		document.querySelector("body").classList.remove("spz_5001");
		return;
	}
	var loadTestInterval = setInterval(loadTestCode5001, 200);
	setTimeout(function () {
		clearInterval(loadTestInterval);
	}, 2000);

}

const loadJS_SPZ = (url, implementationCode, location) => {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
const loadCSS_SPZ = (path) => {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  document.getElementsByTagName("head")[0].appendChild(css);
};

const smoothScrollJSURL = "//res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js";
const splideCSSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
const splideJSURL = "//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";

loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
loadCSS_SPZ(splideCSSURL);

document.addEventListener("click", function (e) {
  // if (window.location.href.indexOf('/pricing') == -1) {
  //   return;
  // }
  if (e.target.id === "close_modal" || e.target.id === "svg_path") {
    console.log('btn clicked');
    document.querySelector("#feature_modal").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  }
});

document.addEventListener("click", function (e) {
  // if (window.location.href.indexOf('/pricing') == -1) {
  //   return;
  // }
  let targetElement = e.target;
  while (targetElement) {
    if (targetElement.id === "feature_btn") {
      document.querySelector("#feature_modal").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      if (document.querySelectorAll("#feature_modal").length > 0) {
        const accordionItemHeaders = document.querySelectorAll(
          ".accordion-item-header"
        );
        function expandAccordionItem(accordionItemHeader) {
          accordionItemHeader.classList.add("active");
          const accordionItemBody =
            accordionItemHeader.nextElementSibling;
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        }
        function collapseAccordionItem(accordionItemHeader) {
          accordionItemHeader.classList.remove("active");
          const accordionItemBody =
            accordionItemHeader.nextElementSibling;
          accordionItemBody.style.maxHeight = 0;
        }
        // Function to expand the first accordion item
        function expandFirstAccordionItem() {
          const firstAccordionItemHeader = accordionItemHeaders[0];
          if (firstAccordionItemHeader) {
            expandAccordionItem(firstAccordionItemHeader);
          }
        }
        const currentlyActiveAccordionItemHeader = document.querySelector(
          ".accordion-item-header.active"
        );
        if (
          currentlyActiveAccordionItemHeader &&
          currentlyActiveAccordionItemHeader !== accordionItemHeaders
        ) {
          collapseAccordionItem(currentlyActiveAccordionItemHeader);
        }
        expandFirstAccordionItem();
      }
      return;
    }
    targetElement = targetElement.parentElement;
  }
});


document.addEventListener("click", function (e) {
    if (window.location.href.indexOf('/pricing') == -1 || window.innerWidth >= 767) {
        return;
    }
    if (e.target.id === "essential") {
        const anchorElements = document.querySelectorAll(".pricing_nav ul li a");
        anchorElements.forEach(function (anchorElement) {
            anchorElement.classList.remove("active");
        });
        e.target.classList.add("active");
        console.log("click 1");
        document.querySelector(".custom_modal").classList.remove("second_active");
        document.querySelector(".custom_modal").classList.remove("third_active");
        document.querySelector(".custom_modal").classList.add("first_active");
      } else if (e.target.id === "premium") {
        const anchorElements = document.querySelectorAll(".pricing_nav ul li a");
        anchorElements.forEach(function (anchorElement) {
            anchorElement.classList.remove("active");
        });
        e.target.classList.add("active");
        console.log("click 2");
        document.querySelector(".custom_modal").classList.add("second_active");
        document.querySelector(".custom_modal").classList.remove("third_active");
        document.querySelector(".custom_modal").classList.remove("first_active");
      } else if (e.target.id === "pro") {
        const anchorElements = document.querySelectorAll(".pricing_nav ul li a");
        anchorElements.forEach(function (anchorElement) {
            anchorElement.classList.remove("active");
        });
        console.log("click 2");
        e.target.classList.add("active");
        document.querySelector(".custom_modal").classList.remove("second_active");
        document.querySelector(".custom_modal").classList.remove("first_active");
        document.querySelector(".custom_modal").classList.add("third_active");
    }
});


let autoAccordionInterval;
let splide;
function loadTestCode5001() {
    if (window.location.href.indexOf('/pricing') == -1) {
        document.querySelector("body").classList.remove("spz_5001");
        return;
    }
    console.log("Test loading");
    document.querySelector("body").classList.add("spz_5001");


    var pricingSection = document.querySelector("#pricing-page-product-details");

    pricingSection.querySelector(".banner-simple h1").innerHTML = "Pricing";

    var fisrtPricingType = pricingSection.querySelector(".swiper-slide:first-child > div:last-child>p + div");
    var secondPricingType = pricingSection.querySelector(".swiper-slide:nth-child(2) > div:last-child>p + div");
    var thirdPricingType = pricingSection.querySelector(".swiper-slide:nth-child(3) > div:last-child>p + div");

    fisrtPricingType.innerHTML = "The essentials for optimizing matter management and improving efficiency";
    secondPricingType.innerHTML = "Supercharge your Neos experience with premium document management";
    thirdPricingType.innerHTML = "Experience fully loaded document management, automations, and advanced intake features";

    pricingSection.querySelectorAll(".swiper-wrapper .swiper-slide > div:last-child > p + div + div > div p:last-child").forEach(function (element) {
      element.innerHTML = "(billed annually)";
    });

    pricingSection.querySelectorAll("button[aria-label='Contact Us']>span:first-child").forEach(function (text) {
      text.innerHTML = "Get a Demo";
    });

    var swiperSlideFirstDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>span>div");
    if (swiperSlideFirstDiv) {
      swiperSlideFirstDiv.innerHTML = pricingSwiperSlideFirstDivHtml;
    }

    var swiperSlideSecondDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>span>div");
    if (swiperSlideSecondDiv) {
      swiperSlideSecondDiv.innerHTML = pricingSwiperSlideSecondDivHtml ;
    }

    var swiperSlideThirdDiv = pricingSection.querySelector(".swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>span>div");
    if (swiperSlideThirdDiv) {
      swiperSlideThirdDiv.innerHTML = pricingSwiperSlideThirdDivHtml;
    }

    if (!document.querySelector('.feature_btnOuter')) {
        document.querySelector("#pricing-page-product-details>div").insertAdjacentHTML("beforeend", featureBtnAndModal);
        if (window.innerWidth < 767) {
            document.querySelector("#feature_modal").classList.add("first_active");
        }
        // accordion
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
        function expandAccordionItem(accordionItemHeader) {
            accordionItemHeader.classList.add("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        function collapseAccordionItem(accordionItemHeader) {
            accordionItemHeader.classList.remove("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            accordionItemBody.style.maxHeight = 0;
        }
        // Function to expand the first accordion item
        function expandFirstAccordionItem() {
            const firstAccordionItemHeader = accordionItemHeaders[0];
            if (firstAccordionItemHeader) {
                expandAccordionItem(firstAccordionItemHeader);
            }
        }
        accordionItemHeaders.forEach((accordionItemHeader, index) => {
            accordionItemHeader.addEventListener("click", (event) => {
            const currentlyActiveAccordionItemHeader = document.querySelector(
                ".accordion-item-header.active"
            );
            if (
                currentlyActiveAccordionItemHeader &&
                currentlyActiveAccordionItemHeader !== accordionItemHeader
            ) {
                collapseAccordionItem(currentlyActiveAccordionItemHeader);
            }
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight =
                accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
            });
            if (index === 0) {
            expandAccordionItem(accordionItemHeader);
            }
        });
        expandFirstAccordionItem();
    }

    
    if (document.querySelector("div[data-testid='contact__container'] h4")) {
      document.querySelector(
        "div[data-testid='contact__container'] h4"
      ).innerHTML = "Ask us about our all-inclusive and custom pricing";
      document.querySelector(
        "div[data-testid='contact__container']  p span:nth-of-type(2)"
      ).innerHTML = " or (410) 873-9512";
    }

    document.querySelector("#pricing-page-plan-enhancements>div>div:first-child>div:first-child").innerHTML = "Plan Addons";

    function loadSwiperCode() {
      var activeFeatures = document.querySelector("#pricing-page-plan-enhancements>div>div>div>div>div>div:first-child");
      if (activeFeatures) {
        console.log("activeFeatures");
        function modifySlideHeading(selector, searchText, replacementHTML) {
          var slideText = document.querySelector(selector);
          if (slideText) {
            slideText.innerHTML = slideText.replace(searchText, replacementHTML);
          }
        }
        modifySlideHeading(
          "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3) > div > div:first-child > div",
          "Cost Recovery -",
          '<span class="bold">Cost Recovery - </span>'
        );
      }
    }
    var planTab1 = document.querySelector(
      "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:first-child"
    );
    if(!planTab1.classList.contains('spz-click-registered')){
        planTab1.classList.add('spz-click-registered');
        planTab1.addEventListener("click", function () {
            document.querySelector("#pricing-page-plan-enhancements").classList.remove('active-backup');
        });
    }
    var planTab2 = document.querySelector(
      "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:last-child"
    );
    if(!planTab2.classList.contains('spz-click-registered')){
        planTab2.classList.add('spz-click-registered');
        planTab2.addEventListener("click", function () {
          document.querySelector("#pricing-page-plan-enhancements").classList.add('active-backup');
        });
    }

    
    // FAQ Section - Start
    if (document.querySelector(".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]")) {
        document.querySelector(".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]").classList.add('spz-faq-section');
        var faqSection = document.querySelector('.spz_5001 .spz-faq-section');
        var faqLeftSideImage = "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp";
        if (window.innerWidth < 1024) {
          var faqLeftSideImage = "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_770.webp";
        }
        if (window.innerWidth < 768) {
          var faqLeftSideImage = "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_362.webp";
        }
        if(document.querySelector('.spz-faq-section picture img')){
          faqSection.querySelector("picture img").src = faqLeftSideImage;
          faqSection.querySelector("picture img").srcset = faqLeftSideImage;
          faqSection.querySelector("picture source").srcset = faqLeftSideImage;
        }
    }

    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(2) h4"
    ).innerHTML = "How will you help me cut costs?";
    document.querySelector(
      "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(4) h4"
    ).innerHTML = "How quickly can I get Neos set up and running?";


    const targetNode = document.querySelector("[data-testid='accordion__wrapper']");
    if(!targetNode.classList.contains('spz-click-registered')){
        targetNode.classList.add('spz-click-registered');
        targetNode.addEventListener("click", function (e) {
            console.log("[data-testid='accordion__wrapper'] clicked");
            waitForElement('#panel_1 ~ .MuiCollapse-root .MuiAccordion-region', updateAccodionHtml, 1000);
            waitForElement('#panel_3 ~ .MuiCollapse-root .MuiAccordion-region', updateAccodionHtml, 1000);
        });
    }

    function updateAccodionHtml() {
        const accordionData = [
            {selector: "#panel_1", content: faqAccordionContent1Html},
            {selector: "#panel_3", content: faqAccordionContent3Html},
        ];
        accordionData.forEach(({ selector, content }, index) => {
            const accordion = document.querySelector(`${selector} ~ .MuiCollapse-root .MuiAccordion-region`);
            if (accordion) {
                document.querySelector(`${selector} div[data-testid=rich-text__container]`).innerHTML = content;
            }
        });
    };
    // FAQ Section - End
    
    if(!document.querySelector('.section2_5001')){
        document
          .querySelector(".spz_5001 #pricing-page-product-details>div")
          .insertAdjacentHTML("beforeend", featuresSectionHtml);
    
        var section2AccordianWrapper = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text");
        if(!section2AccordianWrapper.classList.contains('spz-click-registered')){
            section2AccordianWrapper.classList.add('spz-click-registered');
            section2AccordianWrapper.addEventListener("click", function (e) {
                if (
                e.target.closest(".title") &&
                !e.target.closest(".child").classList.contains("active") &&
                !document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .animate")
                    ) {
                    // remove active
                    const prevElement = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .text .child.active");
                    const prevActiveHeight = prevElement.offsetHeight;
                    prevElement.classList.remove("active");
                    const afterActiveHeight = prevElement.offsetHeight;
                    prevElement.classList.add("active");
                    prevElement.style.height = "" + prevActiveHeight + "px";
                    prevElement.classList.remove("active");
                    setTimeout(function () {
                        prevElement.style.height = "" + afterActiveHeight + "px";
                        prevElement.classList.add("animate");
                    }, 1);
                    setTimeout(function () {
                        prevElement.removeAttribute("style");
                        prevElement.classList.remove("animate");
                    }, 301);
                    //remove border
                    var accordionChild = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .child.no-border");
                    if (accordionChild) {
                        accordionChild.classList.remove("no-border");
                    }
                    if (e.target.closest(".child").getAttribute("data-index") != "1") {
                        document
                        .querySelector(
                            '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
                            (parseInt(e.target.closest(".child").getAttribute("data-index")) - 1) +
                            '"]'
                        )
                        .classList.add("no-border");
                    }
                    //adding active
                    const nextElement = e.target.closest(".child");
                    const prevTargetHeight = nextElement.offsetHeight;
                    nextElement.classList.add("active");
                    const nextTargetHeight = nextElement.offsetHeight;
                    nextElement.classList.remove("active");
                    nextElement.style.height = "" + prevTargetHeight + "px";
                    nextElement.classList.add("active");
                    setTimeout(function () {
                        nextElement.style.height = "" + nextTargetHeight + "px";
                        nextElement.classList.add("animate");
                    }, 1);
                    setTimeout(function () {
                        nextElement.removeAttribute("style");
                        nextElement.classList.remove("animate");
                    }, 301);
                    //image animation
                    document
                        .querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper .image .hero.active"
                        )
                        .classList.remove("active");
                    document
                        .querySelector(
                        '.spz_5001 .section2_5001 .accordion-wrapper .image .hero[data-index="' +
                        e.target.closest(".child").getAttribute("data-index") +
                        '"]'
                        )
                        .classList.add("active");
                    //change scroll position
                    if (
                        window.matchMedia("(max-width: 1079.98px)").matches &&
                        document.querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper.stop"
                        )
                    ) {
                        setTimeout(function () {
                        var scroll = new SmoothScroll();
                        scroll.animateScroll(
                            document
                            .querySelector(
                                ".spz_5001 .section2_5001 .accordion-wrapper .child.active"
                            )
                            .getBoundingClientRect().y + scrollY,
                            null,
                            {
                            easing: "easeOutQuad",
                            }
                        );
                        }, 302);
                    }
                }
            });
        }
    }

    //autoplay
    if(!autoAccordionInterval) {        
        let autoAccordionTimer = 0;
        const autoAccordionTimeout = 5000;
        autoAccordionInterval = setInterval(function () {
            var accordionWrapperEle = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper");
            if(!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')){
                return;
            }
            document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
            document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line").style.width = "" + (autoAccordionTimer / autoAccordionTimeout) * 100 + "%";
            if (autoAccordionTimer > autoAccordionTimeout) {
                document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
                let curIndex = parseInt(
                    document
                        .querySelector(".spz_5001 .section2_5001 .accordion-wrapper .child.active")
                        .getAttribute("data-index")
                );
                curIndex < 5 ? curIndex++ : curIndex = 1;
                document
                .querySelector(
                    '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
                    curIndex +
                    '"] .title'
                )
                .click();
                autoAccordionTimer = 0;
            }
            autoAccordionTimer += 200;
        }, 200);
        
    }

    function stopSection2AccordionAutoPlay(){
        var accordionWrapperEle = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper");
        accordionWrapperEle.classList.add("stop");
    }
    function startSection2AccordionAutoPlay(){
        var accordionWrapperEle = document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper");
        accordionWrapperEle.classList.remove("stop");
    }
    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .image").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text").addEventListener("mouseenter", stopSection2AccordionAutoPlay);
    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper .image").addEventListener("mouseleave", startSection2AccordionAutoPlay);
    document.querySelector(".spz_5001 .section2_5001 .accordion-wrapper > .text").addEventListener("mouseleave", startSection2AccordionAutoPlay);

    const checkFeatureTitleHeight = () => {
        const spans = document.querySelectorAll(".spz_5001 .section2_5001 .accordion-wrapper .child .title > .text span");
        for (let i = 0; i < spans.length; i++) {
            if (spans[i].classList.contains("two-line")) {
                spans[i].classList.remove("two-line");
            }
            if (spans[i].offsetHeight > 30) {
                spans[i].classList.add("two-line");
            }
        }
    };

    checkFeatureTitleHeight();
    
    // section 3
    if(!document.querySelector('.section3_5001')){
        document.querySelector(".spz_5001 .section2_5001").insertAdjacentHTML("afterend", integrationsSectionHtml);
    }

    //section 4
    if(!document.querySelector('.section4_5001')){
        document.querySelector(".spz_5001 .section3_5001").insertAdjacentHTML("afterend", whyCustomerLoveSectionHtml);
        
    function loadSplideSlider() {
        splide = new Splide(".spz_5001 .section4_5001 .splide1", {
          type: "loop",
          autoplay: false,
          arrows: true,
          autoHeight: true,
          pagination: true,
          focus: "center",
          autoWidth: true,
          breakpoints: {
            1079.98: {
              perPage: 1,
              focus: "center",
              autoWidth: true,
            },
          },
        });
        setTimeout(function () {
          splide.mount();
          splide.on("move", function (e) {
            document
              .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
              .classList.remove("active1", "active2", "active3");
            document
              .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
              .classList.add("active" + (parseInt(splide.index) + 1));
          });
          window.addEventListener("resize", function () {
            splide.refresh();
          });
          document
            .querySelector(".spz_5001 .section4_5001 .slider1-wrapper")
            .classList.add("active1");
        }, 200);
      }
      loadJS_SPZ("//cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", loadSplideSlider, document.body);
    }
    
}