const bodyInterval4007 = setInterval(function(){
  if(document.querySelector('body') && !document.querySelector('.spz-4007')){
  clearInterval(bodyInterval4007)
  document.querySelector('body').classList.add("spz-4007")
  localStorage.setItem('bdcAbTest11','4007-v1');
  const loadJS =(url, implementationCode, location)=>{
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;
  
      location.appendChild(scriptTag);
  };
  const gb_load_css=(path)=> {
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
          ? new Event(eventType, {bubbles: true})
          : eventType;
      el.dispatchEvent(event);
      }
  }
  //DEVELOPER - STEP 1 of 5 - Put your asana task URL here
  const asana_URL = `https://app.asana.com/0/1202262047779255/1207982584862002/f`
  //DEVELOPER - STEP 2 of 5 - This adds content inside the box.
  const formElements = {
      customHTMLBefore: `
      ${ /*This html goes is inserted before the form */'' }
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
  image=`
  <picture>
      <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/ach_bills-tablet_mobile_1.webp">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/ach_bills-desktop_1.webp" alt="Hero Image" width="1346" height="1038">
  </picture>
  `;
  bigTitle='Make and receive payments faster with ACH';
  list=`
  <div class="list">
      <div><strong>Digital payments.</strong> Send and receive electronic payments directly from your account. Same-day. Auto-pay. Enterprise security.</div>
      <div><strong>Flat transaction fees.</strong> Pay one flat rate of $0.59 per ACH transaction, no matter the transaction amount. </div>
      <div><strong>Workflow integrations.</strong> Fully integrates with invoice intake, storage, and approvals. Plus 2-way sync with all major accounting software.</div>
      </div>
  `
  //bill page
  if(window.location.href.indexOf("/lp/bill-pay") > -1){
      document.querySelector('body').classList.add("bill")
      bigTitle='Streamline approvals and payments';
      list=`
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
      bigTitle='Get paid faster by streamlining invoicing'
      image=`
  <picture>
      <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/invoices-tablet_mobile_1.webp">
      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4002/invoices-desktop_1.webp" alt="Hero Image" width="1346" height="1038">
  </picture>
  `
  list=`
  <div class="list">
      <div><strong>Invoice builder.</strong> Generate bulk invoices in minutes. Send via email. Auto-include contracts and customer documents. </div>
      <div><strong>Payments.</strong> Let clients pay via ACH, credit, wire, and more. Accept recurring payments. Automated reminders.</div>
      <div><strong>Integrations.</strong> Two-way sync with QuickBooks, QuickBooks Online, Xero, and Intacct. Avoid manual double-entry. </div>
  </div>
  ` 
  }
  //add new hero section 
  document.querySelector('.spz-4007 #formjumplink').insertAdjacentHTML("afterend",`
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
              <div class="spz-4007-hero-cta">Get Started</div>
              </div>
              <div class="desc">By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Notice</a>.</div>
          </div>
          </div>
          <div class="right">
          ${image}
          </div>
      </div>
      </div>
      <div class="slider-wrapper-4007">
      <div class="slider-title">Integrations to connect with the tools you use daily</div>
      <section class="splide splide4007">
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
      <div class="spz-4007-info-wrapper">
        <div class="title">Streamline AP and AR</div>
        <div class="cards">
            <div class="card">
                <div class="card-title">Pay and get paid 2x faster</div>
                <div class="card-desc">Bulk generate invoices. Auto-extract data from vendor invoices. Monitor outstanding payments. Send payment reminders.</div>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4007/pay-and-get-paid.webp" alt="BILL AP and AR Features" width="680" height="226" >
            </div>
            <div class="card">
                <div class="card-title">Enhanced visibility and control over expenses</div>
                <div class="card-desc">Auto-capture and categorize expenses. Set spend controls. Get alerts for transactions.</div>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4007/enhanced-visibility-and-control.webp " alt="BILL AP and AR Features" width="577" height="226" >
            </div>
            <div class="card">
                <div class="card-title">Integrate with the accounting software you love</div>
                <div class="card-desc">Sync your data with QuickBooks, NetSuite, Xero, Sage, Intacct, Dynamics, 365, and more.</div>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4007/integrate-with-accounting.webp" alt="BILL AP and AR Features" width="576" height="226" >
            </div>
            <div class="card">
                <div class="card-title">Flexible payment options for you and your vendors</div>
                <div class="card-desc">Send and receive payments via ACH, check, wire, credit, debit, and more.</div>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/4007/flexible-payment-options.webp" alt="BILL AP and AR Features" width="680" height="226" >
            </div>
        </div>
        <button class="spz-4007-products-cta">Get Started</button>
      </div>
  `)
  loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1744614686/bill/script/smooth-scroll.min.js', function(){}, document.body);
  if(document.querySelector('.spz-4007 .static-logos') && document.querySelector('.spz-4007 .static-logos').closest('section')){
      document.querySelector('.spz-4007 .static-logos').closest('section').classList.add("spz-d-none")
  }
  document.querySelector('.spz-4007 .new-hero-section .left .form .spz-4007-hero-cta').addEventListener("click",function(){
      document.querySelector('.spz-4007 .popup-wrapper').classList.add("show")
      document.querySelector('html').classList.add("scroll-hidden")
      document.querySelector('.spz-4007 .spz-input-wrapper.email input').value=document.querySelector('.spz-4007 .new-hero-section .left .form input').value;
      trigger(document.querySelector('.spz-4007 .spz-input-wrapper.email input'),'change')
  })
  document.querySelector('.spz-4007 .new-hero-section .left .form input').addEventListener("keypress",function (e) {
      if (e.key === 'Enter') {
          e.preventDefault();
          document.querySelector('.spz-4007 .new-hero-section .left .form .spz-4007-hero-cta').click()
      }
  });
  document.querySelector('.spz-4007-products-cta').addEventListener("click",function(){
    let scroll = new SmoothScroll();
    scroll.animateScroll(document.querySelector('.spz-4007 .new-hero-section').getBoundingClientRect().y + scrollY, null, {
        easing: 'easeOutQuad',
        speed: 500,
        speedAsDuration: true
    });
    setTimeout(function(){
        document.querySelector('.spz-4007 .popup-wrapper').classList.add("show")
        document.querySelector('html').classList.add("scroll-hidden")
    },501)
  })
  loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
      var splide4007 = new Splide( '.spz-4007 .slider-wrapper-4007 .splide4007', {
      type   : 'loop',
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
      setTimeout(function(){
      splide4007.mount();
      window.dispatchEvent(new Event('resize'));
      },200)
      window.dispatchEvent(new Event('resize'));
      window.addEventListener('resize', function() {
      splide4007.refresh()
      splide4007.destroy()
      splide4007.mount();
      })
  }, document.body);
  //form code
  const formLoaded = setInterval(() => {
      if(document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0){
      clearInterval(formLoaded);
      addForm(formElements, formUniqueSelector);
      //form modification
      //adding wrapper
      for(let i=0;i<document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select').length;i++){
          let target = document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i];
          let wrapper = document.createElement('div');
          wrapper.classList.add('spz-input-wrapper',document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].getAttribute("id"));
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
      }
      //adding label
      for(let i=0;i<document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select').length;i++){
          let label = document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].getAttribute("placeholder")== "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].getAttribute("placeholder")
          if(!label && document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].querySelector('option')) {
              label=document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].querySelector('option').textContent;
          }
          document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].insertAdjacentHTML("afterend",`
          <label for="${document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select')[i].getAttribute("id")}">${label}</label> 
      `)
          }
      // change position
      document.querySelector('.spz-4007 .spz-input-wrapper.firstName').insertAdjacentElement('beforebegin',document.querySelector('.spz-4007 .spz-input-wrapper.email'))
      if(document.querySelector('.spz-4007 .g-recaptcha')) {
          document.querySelector('.spz-4007 .popup-wrapper ').insertAdjacentElement("beforeend",document.querySelector('.spz-4007 .g-recaptcha'))
      }

      //select condition checking
      const checkSelectCondition =()=>{
          for (let i=0;i<document.querySelectorAll('.spz-4007 .spz-input-wrapper').length;i++){
          if(document.querySelectorAll('.spz-4007 .spz-input-wrapper')[i].querySelector('.hide')){
              document.querySelectorAll('.spz-4007 .spz-input-wrapper')[i].classList.add('hide')
          } else {
              document.querySelectorAll('.spz-4007 .spz-input-wrapper')[i].classList.remove('hide')
          }

          }
      }
      checkSelectCondition()
          //select arrow
          for(let x=0;x<document.querySelectorAll('.spz-4007 form select').length;x++){
          document.querySelectorAll('.spz-4007 form select')[x].parentNode.insertAdjacentHTML("beforeend",`
          <div class="arrow"></div>  
          `)
          }
          //submit button 
          document.querySelector('.spz-4007 .submit-button.button-signup-2').value="Instant Access";
          document.querySelector('.spz-4007 .submit-button.button-signup-2').classList.add("spz-submitcta-4007")
          //disclaimer 
          document.querySelector('.spz-4007 .button-disclaimer').innerHTML=`
          By continuing, you agree to BILL <a href="/legal/terms-of-service" target="_blank" class="text-size-small no-wrap">Terms of Service</a> and&nbsp;<a href="/privacy" target="_blank" class="text-size-small no-wrap">Privacy Notice</a>.
          ` 
          //input even listerer
          const allInput = document.querySelectorAll('.spz-4007 form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]),.spz-4007 form select');
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
          for(let x=0;x<document.querySelectorAll('.spz-4007 #accountingSoftwareContainer select').length;x++){
          document.querySelectorAll('.spz-4007 #accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
          }
          //browser detection
          let userAgent = navigator.userAgent;
          let browser;
          if(userAgent.match(/edg/i)){
          browser = "edge";
          }else if(userAgent.match(/firefox|fxios/i)){
          browser = "firefox";
          }else if(userAgent.match(/opr\//i)){
          browser = "opera";
          }else if(userAgent.match(/chrome|chromium|crios/i)){
          browser = "chrome";
          }else if(userAgent.match(/safari/i)){
          browser = "safari";
          }else{
          //alert("Other browser");
          }
          document.querySelector('.spz-4007').classList.add(browser);

          document.querySelector('.spz-4007 .spz-form-wrap .close-button').addEventListener("click",function(){
          document.querySelector('.spz-4007 .popup-wrapper').classList.remove("show")
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
              ${
                  formData.customHTMLBefore.replace(/\s/g, "").length !== 0
                  ? formData.customHTMLBefore
                  : ""
              }
              </div>
              <div class="the-form"></div>
              ${
                  formData.customHTMLAfter.replace(/\s/g, "").length !== 0
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
  
  }
},10)
