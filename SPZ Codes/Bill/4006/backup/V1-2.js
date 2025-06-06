const bodyInterval4006 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-4006')) {
    clearInterval(bodyInterval4006)
    document.querySelector('body').classList.add("spz-4006")
    localStorage.setItem('bdcAbTest11', '4006-v1');
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
    function trigger(el, eventType) {
      if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
        el[eventType]();
      } else {
        const event =
          typeof eventType === 'string'
            ? new Event(eventType, { bubbles: true })
            : eventType;
        el.dispatchEvent(event);
      }
    }
    //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1202262047779255/1207982584862002/f`
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
        ${ /*This html goes is inserted before the form */''}
        <div class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <div class="form heading">
            <h2>Get started with a risk-free trial.</h2>
        </div>
        `,
      customHTMLAfter: ``,
    };

    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

    //content different for each page
    let image;
    let bigTitle;
    let list;
    image = `
    <picture>
        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/ach_bills-tablet_mobile_1.webp">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/ach_bills-desktop_1.webp" alt="Hero Image" width="1346" height="1038">
    </picture>
    `;
    bigTitle = 'Make and receive payments faster with ACH';
    list = `
    <div class="list">
        <div><strong>Digital payments.</strong> Send and receive electronic payments directly from your account. Same-day. Auto-pay. Enterprise security.</div>
        <div><strong>Flat transaction fees.</strong> Pay one flat rate of $0.49 per ACH transaction, no matter the transaction amount. </div>
        <div><strong>Workflow integrations.</strong> Fully integrates with invoice intake, storage, and approvals. Plus 2-way sync with all major accounting software.</div>
        </div>
    `
    //bill page
    if (window.location.href.indexOf("/lp/bill-pay") > -1) {
      document.querySelector('body').classList.add("bill")
      bigTitle = 'Streamline approvals and payments';
      list = `
    <div class="list">
        <div><strong>AP management.</strong> Automate approvals & payments. Access invoices & proof of payments in one place. Unlimited storage.</div>
        <div><strong>Payments.</strong> Pay vendors via ACH, check, international wire transfer, vendor direct virtual cards, and more. </div>
        <div><strong>Integrations.</strong> Two-way sync with QuickBooks, QuickBooks Online, Xero, and Intacct. Avoid manual double-entry. </div>
        </div>
    `

    }
    //invoice page
    if (window.location.href.indexOf("/lp/invoices") > -1) {
      document.querySelector('body').classList.add("invoice")
      bigTitle = 'Get paid faster by streamlining invoicing'
      image = `
    <picture>
        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/invoices-tablet_mobile_1.webp">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/invoices-desktop_1.webp" alt="Hero Image" width="1346" height="1038">
    </picture>
    `
      list = `
    <div class="list">
        <div><strong>Invoice builder.</strong> Generate bulk invoices in minutes. Send via email. Auto-include contracts and customer documents. </div>
        <div><strong>Payments.</strong> Let clients pay via ACH, credit, wire, and more. Accept recurring payments. Automated reminders.</div>
        <div><strong>Integrations.</strong> Two-way sync with QuickBooks, QuickBooks Online, Xero, and Intacct. Avoid manual double-entry. </div>
    </div>
    `
    }
    //add new hero section 
    document.querySelector('.spz-4006 #formjumplink').insertAdjacentHTML("afterend", `
        <div class="new-hero-section">
        <div class="new-hero-section-wrapper">
            <div class="left">
            <a class="logo" href="/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logotype-bill.svg" alt="BILL Logo" width="50" height="32"></a>
            <div class="review-star">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.3171 19.3679C20.2996 21.0729 21.2711 22.7585 22.2419 24.4422C17.9431 27.7334 11.2548 28.1312 6.30356 24.341C0.605805 19.9761 -0.330672 12.5281 2.71982 7.1667C6.22832 0.99998 12.7939 -0.363829 17.0212 0.6362C16.9069 0.884564 14.375 6.13709 14.375 6.13709C14.375 6.13709 14.1749 6.15024 14.0616 6.15243C12.8121 6.20539 11.8815 6.49612 10.884 7.01184C9.78968 7.58289 8.85184 8.4133 8.15249 9.43048C7.45315 10.4477 7.01359 11.6206 6.87224 12.8469C6.72475 14.0905 6.89672 15.3512 7.37189 16.5099C7.77365 17.4895 8.34197 18.3595 9.10386 19.094C10.2726 20.2219 11.6635 20.9202 13.2756 21.1514C14.8023 21.3705 16.2706 21.1536 17.6465 20.4622C18.1626 20.2032 18.6016 19.9173 19.1147 19.525C19.1801 19.4826 19.2382 19.4289 19.3171 19.3679Z" fill="#FF492C"></path>
                    <path d="M19.3267 4.41546C19.0773 4.17001 18.8461 3.94356 18.616 3.71565C18.4787 3.57978 18.3464 3.43844 18.2058 3.30585C18.1554 3.25801 18.0963 3.19263 18.0963 3.19263C18.0963 3.19263 18.1441 3.09109 18.1646 3.04946C18.4337 2.50926 18.8556 2.11444 19.356 1.80033C19.9093 1.45036 20.554 1.27228 21.2085 1.28863C22.046 1.30507 22.8247 1.51362 23.4817 2.07536C23.9668 2.48991 24.2155 3.01585 24.2593 3.6437C24.3324 4.7029 23.8941 5.5141 23.0237 6.08022C22.5124 6.41332 21.9609 6.67082 21.4079 6.97579C21.1029 7.14417 20.8421 7.29209 20.5441 7.5967C20.2819 7.90241 20.2691 8.19058 20.2691 8.19058L24.2308 8.18547V9.94995H18.1156C18.1156 9.94995 18.1156 9.82942 18.1156 9.77938C18.0922 8.9123 18.1934 8.09635 18.5904 7.30889C18.9557 6.58645 19.5232 6.05758 20.2052 5.65033C20.7304 5.33659 21.2833 5.0696 21.8097 4.75732C22.1344 4.56484 22.3637 4.28251 22.3619 3.87307C22.3619 3.52171 22.1062 3.20943 21.741 3.11191C20.8798 2.87962 20.0032 3.25034 19.5474 4.03853C19.4809 4.15358 19.4129 4.2679 19.3267 4.41546Z" fill="#FF492C"></path>
                    <path d="M26.9896 17.4923L23.651 11.7266H17.0441L13.6839 17.5518H20.3393L23.6236 23.2901L26.9896 17.4923Z" fill="#FF492C"></path>
                </svg>
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728130/bill/4002/rating-stars.svg" alt="Rating Stars" width="108" height="20">
                <div class="text"><strong>4.4</strong> (2,700+ reviews)</div>
            </div>
            <div class="title">${bigTitle}</div>
            ${list}
            <div class="form">
                <div class="hero-form-wrapper">
                <input type="text" id="new-input-text" autocomplete="new-input-text" placeholder="Work Email">
                <div class="spz-4006-hero-cta">Get Started</div>
                </div>
                <div class="desc">By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Notice</a>.</div>
            </div>
            </div>
            <div class="right">
            ${image}
            </div>
        </div>
        </div>
        <div class="slider-wrapper-4002">
          <section class="splide splide4002">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <div class="img-wrapper">
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272893c10dca6f5609499_calendly-scroll.svg"
                        alt="logo-scroll-image" /></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a98b00bf2e34e79f5_kiwico-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a7bd61c83c898038d_wag-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a55a744038230511c_qualtrics-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66327289eb2364f2d39d8396_bakertilly-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728bd1f8bf96a41c314b_noom-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66438fbb063151dc71b9f0cf_jazz-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272891e89f12e65e5b839_barebones-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66327289d46b2b777e79cb01_chatbooks-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a04f88efb143cdd42_cuts-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728c947a0931981cd375_marine-layer-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728ae61bcd1c9452926c_quicken-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272890741d8d0541e9f18_cla-scroll.svg"
                        alt="logo-scroll-image"></picture>
                  </div>
                </li>
                <li class="splide__slide">
                  <div class="img-wrapper">
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272893c10dca6f5609499_calendly-scroll.svg"
                        alt="logo-scroll-image" /></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a98b00bf2e34e79f5_kiwico-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a7bd61c83c898038d_wag-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a55a744038230511c_qualtrics-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66327289eb2364f2d39d8396_bakertilly-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728bd1f8bf96a41c314b_noom-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66438fbb063151dc71b9f0cf_jazz-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272891e89f12e65e5b839_barebones-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/66327289d46b2b777e79cb01_chatbooks-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728a04f88efb143cdd42_cuts-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728c947a0931981cd375_marine-layer-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img
                        src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/6632728ae61bcd1c9452926c_quicken-scroll.svg"
                        alt="logo-scroll-image"></picture>
                    <picture><img src="https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/663272890741d8d0541e9f18_cla-scroll.svg"
                        alt="logo-scroll-image"></picture>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
    `)
    if (document.querySelector('.spz-4006 .static-logos') && document.querySelector('.spz-4006 .static-logos').closest('section')) {
      document.querySelector('.spz-4006 .static-logos').closest('section').classList.add("spz-d-none")
    }
    if (document.querySelector('.spz-4006 .testimonial-div') && document.querySelector('.spz-4006 .testimonial-div').closest('div')) {
      const sectionElement = document.querySelector('.spz-4006 .testimonial-div')?.closest('div');
      const outerSection = sectionElement.closest('section');
      if (outerSection) {
        outerSection.classList.add("spz-d-none");
      }
    }
    document.querySelector('.spz-4006 .new-hero-section .left .form .spz-4006-hero-cta').addEventListener("click", function () {
      document.querySelector('.spz-4006 .popup-wrapper').classList.add("show")
      document.querySelector('html').classList.add("scroll-hidden")
      document.querySelector('.spz-4006 .spz-input-wrapper.email input').value = document.querySelector('.spz-4006 .new-hero-section .left .form input').value;
      trigger(document.querySelector('.spz-4006 .spz-input-wrapper.email input'), 'change')
    })
    document.querySelector('.spz-4006 .new-hero-section .left .form input').addEventListener("keypress", function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.spz-4006 .new-hero-section .left .form .spz-4006-hero-cta').click()
      }
    });

    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
      var splide4002 = new Splide('.spz-4006 .slider-wrapper-4002 .splide4002', {
        type: 'loop',
        autoWidth: true,
        arrows: false,
        pagination: false,
        focus: 'center',
        drag: false,
        speed: 80000,
        easing: 'linear',
        waitForTransition: true,
        autoplay: true,
        interval: 0,
        pauseOnHover: false,
        pauseOnFocus: false,
        direction: 'ltr',
      });
      setTimeout(function () {
        splide4002.mount();
        window.dispatchEvent(new Event('resize'));
      }, 200)
      window.dispatchEvent(new Event('resize'));
      window.addEventListener('resize', function () {
        splide4002.refresh()
        splide4002.destroy()
        splide4002.mount();
      })
    }, document.body);
    //form code
    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for (let i = 0; i < document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select').length; i++) {
          let target = document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label
        for (let i = 0; i < document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select').length; i++) {
          let label = document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].getAttribute("placeholder")
          if (!label && document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].querySelector('option')) {
            label = document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select')[i].getAttribute("id")}">${label}</label> 
        `)
        }
        // change position
        document.querySelector('.spz-4006 .spz-input-wrapper.firstName').insertAdjacentElement('beforebegin', document.querySelector('.spz-4006 .spz-input-wrapper.email'))
        if (document.querySelector('.spz-4006 .g-recaptcha')) {
          document.querySelector('.spz-4006 .popup-wrapper ').insertAdjacentElement("beforeend", document.querySelector('.spz-4006 .g-recaptcha'))
        }

        //select condition checking
        const checkSelectCondition = () => {
          for (let i = 0; i < document.querySelectorAll('.spz-4006 .spz-input-wrapper').length; i++) {
            if (document.querySelectorAll('.spz-4006 .spz-input-wrapper')[i].querySelector('.hide')) {
              document.querySelectorAll('.spz-4006 .spz-input-wrapper')[i].classList.add('hide')
            } else {
              document.querySelectorAll('.spz-4006 .spz-input-wrapper')[i].classList.remove('hide')
            }

          }
        }
        checkSelectCondition()
        //select arrow
        for (let x = 0; x < document.querySelectorAll('.spz-4006 form select').length; x++) {
          document.querySelectorAll('.spz-4006 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
        }
        //submit button 
        document.querySelector('.spz-4006 .submit-button.button-signup-2').value = "Instant Access";
        document.querySelector('.spz-4006 .submit-button.button-signup-2').classList.add("spz-submitcta-4006")
        //disclaimer 
        document.querySelector('.spz-4006 .button-disclaimer').innerHTML = `
            By continuing, you agree to BILL <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
            `
        //input even listerer
        const allInput = document.querySelectorAll('.spz-4006 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4006 form select');
        function labelChange(e) {
          if (e.value == '' || e.value == null) {
            e.closest(".spz-input-wrapper").classList.remove("hasValue");
          } else if (e.value != '' || e.value != null) {
            e.closest(".spz-input-wrapper").classList.add("hasValue");
          }
        }
        allInput.forEach(function (e) {
          e.addEventListener('blur', () => {
            labelChange(e);
          }, true);
          e.addEventListener('change', () => {
            labelChange(e);
          }, true);
          labelChange(e);
        })
        //remove unecessary select
        for (let x = 0; x < document.querySelectorAll('.spz-4006 #accountingSoftwareContainer select').length; x++) {
          document.querySelectorAll('.spz-4006 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
        }
        //browser detection
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
        document.querySelector('.spz-4006').classList.add(browser);

        document.querySelector('.spz-4006 .spz-form-wrap .close-button').addEventListener("click", function () {
          document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show")
          document.querySelector('html').classList.remove("scroll-hidden")
        })
      }
    })



    /***********************************
     ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/


    // This is the code to generate the form over UI section do no edit it
    function addForm(formData, formSelector) {
      const formTemplate = `
            <div class="popup-wrapper"> 
            <div class="spz-form-wrap">
                <div class="form-section">
                ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
          ? formData.customHTMLBefore
          : ""
        }
                </div>
                <div class="the-form"></div>
                ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
          ? formData.customHTMLAfter
          : ""
        }
                </div>
            </div>
            </div>
            `;
      document.body.insertAdjacentHTML(
        "beforeend",
        formTemplate
      ); /*Insert spz-form-wrap before closing body tag*/
      if (!document.querySelector(formSelector)) {
        document
          .querySelector(".spz-form-wrap .the-form")
          .insertAdjacentHTML(
            "beforeend",
            "<div style='color:red;'>Add proper form selector in code to load form</div>"
          );
      } else {
        const formLoaded = setInterval(() => {
          if (
            document.querySelector(formSelector) &&
            document.querySelectorAll(`${formSelector} input`).length > 0
          ) {
            clearInterval(formLoaded);
            document
              .querySelector(".spz-form-wrap .the-form")
              .appendChild(
                document.querySelector(formSelector)
              ); /*Apply form to spz form wrapper*/
          }
        });
      }

    }

    document.querySelector('.slider-wrapper-4002').insertAdjacentHTML('afterend', `
      <section class="why_us">
        <div class="auto_container">
          <div class="why_usInner">
            <div class="why_usTitle">
              <h2>See why over 500K+ users are using BILL</h2>
            </div>
            <div class="why_usList">
              <ul>
                <li>
                  <div class="why_usData">
                    <strong>
                      <b>90%</b>
                      <i>Reduction in payment <br> processing time</i>
                    </strong>
                    <p>“What used to take 20 hours a week in manual payment processing has been cut to less than a couple hours.”</p>
                    <small>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1744363439/bill/4006/avatar-general-image.svg" alt="Quotation mark">
                      <strong>
                        Lee Ann Mills, CFO
                        <b>Network of Community</b>
                      </strong>
                    </small>
                  </div>
                </li>
                <li>
                  <div class="why_usData">
                    <strong>
                      <b>50%</b>
                      <i>Increase in operational <br> efficiency</i>
                    </strong>
                    <p>“BILL streamlines operations while increasing control and visibility. It’s a game changer.”</p>
                    <small>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1744363439/bill/4006/avatar-general-image.svg" alt="Quotation mark">
                      <strong>
                        Jim Lower, Corporate Controller
                        <b>Fairwave Specialty Coffee</b>
                      </strong>
                    </small>
                  </div>
                </li>
                <li>
                  <div class="why_usData">
                    <strong>
                      <b>200%</b>
                      <i>Increase in <br> gross revenue</i>
                    </strong>
                    <p>“We’ve grown from 300 invoices a month to over 6,000 with BILL’s automations and spending insights.”</p>
                    <small>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1744363439/bill/4006/avatar-general-image.svg" alt="Quotation mark">
                      <strong>
                        Amy Liu, Founder & CEO
                        <b>Tower 28 Beauty</b>
                      </strong>
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>  
    `);

  }
}, 10)
