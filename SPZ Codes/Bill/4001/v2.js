const bodyInterval4002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-4002')) {
    clearInterval(bodyInterval4002)
    document.querySelector('body').classList.add("spz-4002")
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
    document.querySelector('.spz-4002 #formjumplink').insertAdjacentHTML("afterend", `
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
              <div class="spz-4002-hero-cta">Get Started</div>
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
      <div class="slider-title">Integrations to connect with the tools you use daily</div>
      <section class="splide splide4002">
          <div class="splide__track">
          <ul class="splide__list">
              <li class="splide__slide">
              <div class="img-wrapper">
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sap_success_factors.svg">  
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sap_success_factors.svg" alt="SAP SuccessFactors Logo" width="200" height="56"/>
                  </picture>  
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-oracle_netsuite.svg"> 
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-oracle_netsuite.svg" alt="NetSuite Logo" width="97" height="56"/>
                  </picture> 
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sage.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sage.svg" alt="Sage Intacct Logo" width="73" height="56"/>
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-quickbooks.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-quickbooks.svg" alt="QuickBooks Logo" width="50" height="56"/>
                  </picture>
                  <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-workday.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-workday.svg" alt="Workday Logo" width="107" height="56"/>  
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-trinet.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-trinet.svg" alt="TriNet Logo" width="103" height="56"/>
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-microsoft.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-microsoft.svg" alt="Microsoft Logo" width="138" height="56"/>
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739285217/bill/4001/logo-xero_1.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1739285217/bill/4001/logo-xero_1.svg" alt="Xero Logo" width="50" height="56"/>
                  </picture>
              </div>
              </li>
              <li class="splide__slide">
              <div class="img-wrapper">
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sap_success_factors.svg">  
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sap_success_factors.svg" alt="SAP SuccessFactors Logo" width="200" height="56"/>
                  </picture>  
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-oracle_netsuite.svg"> 
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-oracle_netsuite.svg" alt="NetSuite Logo" width="97" height="56"/>
                  </picture> 
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-sage.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-sage.svg" alt="Sage Intacct Logo" width="73" height="56"/>
                  </picture>
               
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-quickbooks.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-quickbooks.svg" alt="QuickBooks Logo" width="50" height="56"/>
                  </picture>
                  <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-workday.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-workday.svg" alt="Workday Logo" width="107" height="56"/>  
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-trinet.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-trinet.svg" alt="TriNet Logo" width="103" height="56"/>
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/mobile-logo-microsoft.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1723728131/bill/4002/logo-microsoft.svg" alt="Microsoft Logo" width="138" height="56"/>
                  </picture>
                  <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1739285217/bill/4001/logo-xero_1.svg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1739285217/bill/4001/logo-xero_1.svg" alt="Xero Logo" width="50" height="56"/>
                  </picture>
              </div>
              </li>
          </ul>
          </div>
      </section>
      </div>
  `)
    if (document.querySelector('.spz-4002 .static-logos') && document.querySelector('.spz-4002 .static-logos').closest('section')) {
      document.querySelector('.spz-4002 .static-logos').closest('section').classList.add("spz-d-none")
    }
    document.querySelector('.spz-4002 .new-hero-section .left .form .spz-4002-hero-cta').addEventListener("click", function () {
      document.querySelector('.spz-4002 .popup-wrapper').classList.add("show")
      document.querySelector('html').classList.add("scroll-hidden")
      document.querySelector('.spz-4002 .spz-input-wrapper.email input').value = document.querySelector('.spz-4002 .new-hero-section .left .form input').value;
      trigger(document.querySelector('.spz-4002 .spz-input-wrapper.email input'), 'change')
    })
    document.querySelector('.spz-4002 .new-hero-section .left .form input').addEventListener("keypress", function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.spz-4002 .new-hero-section .left .form .spz-4002-hero-cta').click()
      }
    });

    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
      var splide4002 = new Splide('.spz-4002 .slider-wrapper-4002 .splide4002', {
        type: 'loop',
        autoWidth: true,
        arrows: false,
        pagination: false,
        focus: 'center',
        drag: false,
        speed: 20000,
        easing: 'linear',
        waitForTransition: true,
        autoplay: true,
        interval: 0,
        pauseOnHover: false,
        pauseOnFocus: false,
        direction: 'rtl',
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




    /***********************************
     ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/


  }
}, 10)



const bodyInterval1002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-1002')) {
    clearInterval(bodyInterval1002)
    document.querySelector('body').classList.add("spz-1002")
    //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
    const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */''}
      <div class="form heading">
        <h2>Start using BILL Today</h2>
      </div>
      `,
      customHTMLAfter: ``,
    };

    //DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.



    const formLoaded = setInterval(() => {
      if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
        clearInterval(formLoaded);
        addForm(formElements, formUniqueSelector);
        //form modification
        //adding wrapper
        for (let i = 0; i < document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select').length; i++) {
          let target = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        //adding label
        for (let i = 0; i < document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select').length; i++) {
          let label = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("placeholder")
          if (!label && document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].querySelector('option')) {
            label = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select')[i].getAttribute("id")}">${label}</label> 
         `)
        }
        // change position
        document.querySelector('.spz-1002 .spz-input-wrapper.email').insertAdjacentElement('afterend', document.querySelector('.spz-1002 .spz-input-wrapper.name'));
        document.querySelector('.spz-1002 .spz-input-wrapper.phone').insertAdjacentElement('afterend', document.querySelector('.spz-1002 .spz-input-wrapper.numberOfEmployees'));

        //checbox listener
        const checkboxListener = () => {
          for (let x = 0; x < document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select').length; x++) {
            if (document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].classList.contains("hide")) {
              document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.add("hide")
            }
            else {
              document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].closest('.spz-input-wrapper').classList.remove("hide")
            }
          }
        }
        checkboxListener()
        for (let i = 0; i < document.querySelectorAll('.spz-1002 [name="productInterestCheckbox"]').length; i++) {
          document.querySelectorAll('.spz-1002 [name="productInterestCheckbox"]')[i].addEventListener("change", function () {
            checkboxListener()
          })
        }
        //select arrow
        for (let x = 0; x < document.querySelectorAll('.spz-1002 form select').length; x++) {
          document.querySelectorAll('.spz-1002 form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
        }
        //submit button 
        document.querySelector('.spz-1002 .submit-button.button-signup-2').classList.add("spz-submitcta-1004")

        //input even listerer
        const allInput = document.querySelectorAll('.spz-1002 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz-1002 form select');
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
        for (let x = 0; x < document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select').length; x++) {
          document.querySelectorAll('.spz-1002 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
        }
        //change label and option on mobile and desktop 
        const checkSelectLabel = () => {
          let labelText;
          if (window.matchMedia("(max-width: 767.98px)").matches) {
            labelText = "Your accounting software?"
          } else {
            labelText = "Which accounting software do you use?"
          }
          document.querySelector('.spz-1002 .spz-input-wrapper.accountingSoftware label').textContent = labelText;
          document.querySelector('.spz-1002 .spz-input-wrapper.accountingSoftware select option').textContent = labelText;
        }
        checkSelectLabel();
        window.addEventListener("resize", function () {
          checkSelectLabel();
        })

        //onlynumber 
        function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }
          return true;
        }
        const NOEInterval = setInterval(function () {
          if (document.querySelector('.spz-1002 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input')) {
            clearInterval(NOEInterval)
            document.querySelector('.spz-1002 .spz-form-wrap .spz-input-wrapper.numberOfEmployees input').addEventListener('keypress', function (event) {
              if (!isNumber(event)) event.preventDefault();
            }, false);
          }
        }, 10)
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
        document.querySelector('.spz-1002').classList.add(browser);
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
            <div class="hero_right">
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
            </div>
            `;
      document.querySelector("body").insertAdjacentHTML(
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


  }
}, 450);



// variant 1004
function loadTestCode4001() {
  if (!document.querySelector("body").classList.contains("spz_t4001")) {
    document.querySelector("body").classList.add("spz_t4001", 'v2');
    localStorage.setItem('bdcAbTest11', '4001-v2');

    var checkIcon = `
      <img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/checkmark.svg" alt="checkmark">
    `;
    var currentCheckIcon = document.querySelectorAll('.call_to_action_products_text .cta_pt_icon');
    currentCheckIcon.forEach((icon) => {
      icon.innerHTML = checkIcon;
    });


    //DEVELOPER - STEP 2 of 7 Fill triageData array with appropriate data. 1 question equals to 1 object in array. See example below
    const triageData = [
      //Question 1 start
      {
        questionSuperHeading: "Create Free Account",
        questionHeading: "What type of business are you?",
        answers: [
          {
            answerTextTwo: 'Small / Midsize Business',
            answerText: "Financial operations for one business",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133999/bill/4001/icon-small_midsize_business_1.svg',
            answerAlt: 'Small / Midsize Business'
          },
          {
            answerTextTwo: 'Accounting Firm',
            answerText: "Accounting services for multiple clients",
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1730133999/bill/4001/icon-accounting_firm_1.svg',
            answerAlt: 'Accounting Firm'
          }
        ]
      },
      //Question 1 end
      //Question 2 start
      {
        questionSuperHeading: "Create Free Account",
        questionHeading: "What accounting software do you use?",
        questionSubHeading: "",
        answers: [
          {
            answerTextTwo: 'QuickBooks Online',
            answerText: "QuickBooks Online",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'QuickBooks Pro/Premier',
            answerText: "QuickBooks Pro/Premier",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'QuickBooks Enterprise',
            answerText: "QuickBooks Enterprise",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Xero',
            answerText: "Xero",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'NetSuite',
            answerText: "NetSuite",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Intacct',
            answerText: "Intacct",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'MS Dynamics',
            answerText: "MS Dynamics",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Acumatica',
            answerText: "Acumatica",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Blackbaud',
            answerText: "Blackbaud",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'SAP',
            answerText: "SAP",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Sage (200/300/ERP)',
            answerText: "Sage (200/300/ERP)",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Freshbooks',
            answerText: "Freshbooks",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'QuickBooks for Mac',
            answerText: "QuickBooks for Mac",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Quicken',
            answerText: "Quicken",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Sage 100',
            answerText: "Sage 100",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Sage 50',
            answerText: "Sage 50",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Thomson Reuters',
            answerText: "Thomson Reuters",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Yardi',
            answerText: "Yardi",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'Other',
            answerText: "Other",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: 'None',
            answerText: "None",
            answerImage: '',
            answerAlt: ''
          },
          {
            answerTextTwo: "I don't know",
            answerText: "I don't know",
            answerImage: '',
            answerAlt: ''
          }
        ]
      }
      //Question 2 end
    ]
    //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
    const sectionSelector = `.hero_right`
    //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
    const position = "afterbegin" //"beforebegin", "beforeend", "afterend"
    //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelectorTwo = ".spz-form-wrap" //<--- form uqniue selector goes here. e.g.

    addTriage(triageData, formUniqueSelectorTwo)


    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function addTriage(triageData, formSelectorTwo) {
      const triageTemplate = `
        <div class="spz-triage-wrap">
          <div class="close-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
          </div>
        	<div class="questions-wrap">
	            ${triageData.length !== 0
        &&
        triageData.map((item, index) => {
          return `
                  <div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''}">
                    <a href="javascript:void(0);" class="go_back">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#B5B5C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a> 
                    <div class="question-superheading">${item.questionSuperHeading}</div>
                      <div class="question-heading">${item.questionHeading}</div>
                        <div class="answers-wrap">
                          ${item.answers.map((itemm, indexx) => {
            return `
                              <div class="answer-item">
                                ${itemm.answerImage.length !== 0 ?
                `<img src="${itemm.answerImage}" alt="${itemm.answerAlt}" class="answer-image"/>` :
                ``
              }
                                <div class="answer-textTwo">${itemm.answerTextTwo}</div>
                                <div class="answer-text">${itemm.answerText}</div>
                                <div class="answer-checkbox"></div>
                              </div>
                              `
          }).join('')
            }
                      </div>
                      <a href="javascript:void(0);" id="show_more">Show More Options</a>
                      <div class="next-question">Next <img src="//res.cloudinary.com/spiralyze/image/upload/v1728899617/bill/1004/arrow-right.svg" alt="arrow"></div>
                  </div>
                  `
        }).join('')
        }
            <div class="question-form spz-hidden">
              <a href="javascript:void(0);" class="go_back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#B5B5C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a> 
              <div class="question-superheading">Create Free Account</div>
            </div>
          </div>
            
        </div>
        `;
      //Append triage section
      document.querySelector(sectionSelector).insertAdjacentHTML(
        position,
        triageTemplate,
      );

      document.querySelector('.question-1 .next-question').classList.add('step_one');
      document.querySelector('.question-2 .next-question').classList.add('step_two');
      var question_oneItem = document.querySelectorAll('.question-1 .answer-item');
      var question_twoItem = document.querySelectorAll('.question-2 .answer-item');
      function removeCheckedClass() {
        question_oneItem.forEach(item => {
          item.classList.remove('selected');
        });
      }
      function removeCheckedClassTwo() {
        question_twoItem.forEach(item => {
          item.classList.remove('selected');
        });
      }
      // Function to store selections in localStorage
      function storeSelection(key, value) {
        localStorage.setItem(key, value);
      }

      // Function to retrieve selections from localStorage
      function retrieveSelection(key) {
        return localStorage.getItem(key);
      }

      // Checking answers listener
      document.querySelectorAll('.answer-item').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('answer-item')) {
            if (e.target.closest('.question-1')) {
              removeCheckedClass();
              e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected');
            } else if (e.target.closest('.question-2')) {

              if (e.target.classList.contains('selected')) {
                e.target.classList.remove('selected');
                storeSelection('industry', '');
              } else {
                removeCheckedClassTwo();
                e.target.classList.add('selected');
                removeError();
              }
            }
          } else {
            if (e.target.parentElement.closest('.question-1')) {
              removeCheckedClass();
              e.target.parentElement.classList.contains('selected') ? e.target.parentElement.classList.remove('selected') : e.target.parentElement.classList.add('selected')
            } else if (e.target.parentElement.closest('.question-2')) {
              if (e.target.parentElement.classList.contains('selected')) {
                e.target.parentElement.classList.remove('selected');
                storeSelection('industry', '');
              } else {
                removeCheckedClassTwo();
                e.target.parentElement.classList.add('selected');
                removeError();
              }
            }
          }

          // Check the text inside .answer-text and update checkboxes
          let answerTextTwo = item.querySelector('.answer-textTwo').textContent.trim();
          let answerTextOne = item.querySelector('.answer-text').textContent.trim();
          let isChecked = item.classList.contains('selected');

          const businessTypeMapping = {
            "Small / Midsize Business": '#direct',
            "Accounting Firm": '#console'
          };

          if (businessTypeMapping[answerTextTwo]) {
            document.querySelector(businessTypeMapping[answerTextTwo]).click();
            storeSelection('businessType', answerTextTwo);
          }

          const optionMap = {
            "QuickBooks Online": "qboe2",
            "QuickBooks Pro/Premier": "qbd",
            "QuickBooks Enterprise": "qbe",
            "Xero": "xero2",
            "NetSuite": "netsuite2",
            "Intacct": "intacct2",
            "MS Dynamics": "msdynamics",
            "Acumatica": "acumatica",
            "Blackbaud": "blackbaud",
            "SAP": "sap",
            "Sage (200/300/ERP)": "sageplus",
            "Freshbooks": "freshbooks",
            "QuickBooks for Mac": "qbmac",
            "Quicken": "quicken",
            "Sage 100": "sage100",
            "Sage 50": "sage50",
            "Thomson Reuters": "reuters",
            "Yardi": "yardi",
            "Other": "other",
            "None": "none",
            "I don't know": "unknown"
          };

          if (optionMap[answerTextOne]) {
            const selectElement = document.querySelector('#accountingSoftware');
            if (selectElement) {
              selectElement.value = optionMap[answerTextOne];
              selectElement.dispatchEvent(new Event('change'));
            }
            storeSelection('industry', answerTextOne);
          }

        });
      });


      // Function to retrieve selections on page load and apply the checked state
      function loadSelections() {
        const storedIndustry = retrieveSelection('industry'); // Retrieve once and reuse
        const selectElement = document.querySelector("#accountingSoftware");

        const industryMapping = {
          "QuickBooks Online": "qboe2",
          "QuickBooks Pro/Premier": "qbd",
          "QuickBooks Enterprise": "qbe",
          "Xero": "xero2",
          "NetSuite": "netsuite2",
          "Intacct": "intacct2",
          "MS Dynamics": "msdynamics",
          "Acumatica": "acumatica",
          "Blackbaud": "blackbaud",
          "SAP": "sap",
          "Sage (200/300/ERP)": "sageplus",
          "Freshbooks": "freshbooks",
          "QuickBooks for Mac": "qbmac",
          "Quicken": "quicken",
          "Sage 100": "sage100",
          "Sage 50": "sage50",
          "Thomson Reuters": "reuters",
          "Yardi": "yardi",
          "Other": "other",
          "None": "none",
          "I don't know": "unknown"
        };

        document.querySelectorAll('.answer-item').forEach(item => {
          let answerText = item.querySelector('.answer-text').textContent.trim();

          if (storedIndustry === answerText && industryMapping[answerText]) {
            item.classList.add('selected');

            if (selectElement) {
              selectElement.value = industryMapping[answerText];
              selectElement.dispatchEvent(new Event("change"));
            }
          }
        });

        // If no businessType is found, add 'selected' class to the first .answer-item
        const firstItem = document.querySelector('.question-1 .answers-wrap .answer-item:first-child');
        if (firstItem) {
          document.querySelector('#direct').click();
          firstItem.classList.add('selected');
        }

      }

      loadSelections();

      //Next question click listener
      document.querySelectorAll('.next-question').forEach((item, index) => {
        ['click', 'touchstart'].forEach(eventType => {
          item.addEventListener(eventType, (e) => {
            e.preventDefault(); // Prevent double triggering on some devices
      
            if (item.classList.contains('step_one')) {
              if (document.querySelector('#direct:checked')) {
                document.querySelector('body').classList.add('step_two');
              } else if (document.querySelector('#console:checked')) {
                document.querySelector('body').classList.remove('step_one');
                document.querySelector('body').classList.add('step_three');
              }
            } else if (item.classList.contains('step_two')) {
              document.querySelector('body').classList.remove('step_two');
              document.querySelector('body').classList.add('step_three');
      
              const answerItems = document.querySelectorAll('.question-2 .answer-item');
              const hasSelected = Array.from(answerItems).some(item => item.classList.contains('selected'));
      
              if (!hasSelected) {
                showError('Please select an option.', item);
                return;
              } else {
                removeError();
              }
            }
      
            item.parentElement.classList.add('spz-hidden');
      
            if (document.querySelector('#direct:checked')) {
              item.parentElement.nextElementSibling.classList.remove('spz-hidden');
            } else if (document.querySelector('#console:checked')) {
              item.parentElement.nextElementSibling.nextElementSibling.classList.remove('spz-hidden');
            }
          });
        });
      });
      
      document.querySelectorAll('.go_back').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          if (item.parentElement.classList.contains('question-2')) {
            document.querySelector('body').classList.remove('step_two');
          } else if (item.parentElement.classList.contains('question-form')) {
            document.querySelector('body').classList.remove('step_three');
            document.querySelector('body').classList.add('step_two');
          }

          item.parentElement.classList.add('spz-hidden');

          if (document.querySelector('#direct:checked')) {
            item.parentElement.previousElementSibling.classList.remove('spz-hidden')
          } else if (document.querySelector('#console:checked')) {
            item.parentElement.previousElementSibling.previousElementSibling.classList.remove('spz-hidden')
            document.querySelector('body').classList.remove('step_three', 'step_two');
            document.querySelector('body').classList.add('step_one');
          }
        })
      });
      window.addEventListener('click', function (e) {
        if (e.target.matches('#show_more')) {
          if (e.target.textContent === 'Show More Options') {
            e.target.textContent = 'Show Less';
            document.querySelector('.question-2 .answers-wrap').classList.add('show_more');
          } else if (e.target.textContent === 'Show Less') {
            e.target.textContent = 'Show More Options';
            document.querySelector(".question-2 .answers-wrap").scrollTo({ top: 0, behavior: "smooth" });
            document.querySelector('.question-2 .answers-wrap').classList.remove('show_more');
          }
        }
      });

      if (!document.querySelector(formSelectorTwo)) {
        document
          .querySelector(".spz-form-wrap")
          .insertAdjacentHTML(
            "beforeend",
            "<div style='color:red;'>Add proper form selector in code to load form</div>"
          );
      } else {
        const formLoaded = setInterval(() => {
          if (
            document.querySelector(formSelectorTwo) &&
            document.querySelectorAll(`${formSelectorTwo} input`).length > 0
          ) {
            clearInterval(formLoaded);
            document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelectorTwo));
          }
        });
      }
      document.querySelector('.spz-4002 .spz-triage-wrap .close-button').addEventListener("click", function () {
        document.querySelector('.spz-4002 .popup-wrapper').classList.remove("show")
        document.querySelector('html').classList.remove("scroll-hidden")
      })
    }

    function showError(message, item) {
      let errorMsg = document.querySelector('.error-message');
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_24125_685)">
          <path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_24125_685">
            <rect width="16" height="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`;


      if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
        if (item.classList.contains('step_one')) {
          document.querySelector('.step_one').insertAdjacentElement("beforebegin", errorMsg);
        } else if (item.classList.contains('step_two')) {
          document.querySelector('.step_two').insertAdjacentElement("beforebegin", errorMsg);
        }
      }
    }

    function removeError() {
      const errorMsg = document.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }

    let meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute("content", meta.getAttribute("content") + ", user-scalable=no");
    }

  }
}


var bodyInterval4001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0 && document.querySelectorAll(".hero_right").length > 0) {
    clearInterval(bodyInterval4001);
    loadTestCode4001();
  }
}, 500);
