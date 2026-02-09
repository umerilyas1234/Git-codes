(function () {
  const bodyInterval3001 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_3001_v1')) {
      clearInterval(bodyInterval3001)
      document.querySelector('body').classList.add("spz_3001_v1")
      let formInterval;
      var quoteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
        <g opacity="0.9">
          <path d="M20.2871 32V15.6164L29.2476 0H37L30.1034 14.6301H37V32H20.2871ZM0 32V15.6164L8.80952 0H16.7633L9.71565 14.6301H16.7633V32H0Z" fill="white"/>
        </g>
      </svg>`;

      let sectionSelector;
      if (window.location.pathname.includes('/sba-loans') || window.location.pathname.includes('/partners-sf') || window.location.pathname.includes('/small-business-financing') || window.location.pathname.includes('/partners-lf')) {
        sectionSelector = document.querySelector('.spz_3001_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3001_v1 .main-content-div .form-div');
      } else if (window.location.pathname.includes('/lp/direct/search-small-business-loans')) {
        document.querySelector('body').classList.add("spz_3001_bussiness_loans");
        sectionSelector = document.querySelector('.spz_3001_v1 .lp-header-with-cta');
        formSelector = document.querySelector('.spz_3001_v1 .lp-pwf-cont .application-form-wrap-lp-spec');
      } else if (window.location.pathname.includes('/simple-a')) {
        document.querySelector('body').classList.add("spz_3001_simple_a");
        sectionSelector = document.querySelector('.spz_3001_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3001_v1 .main-content-div .form-div');
      }
      sectionSelector.insertAdjacentHTML("afterend", `
        <div class="form_section">
          <div class="auto_container">
            <div class="form_inner">
              <div class="form_heading">
                <h3>FINANCING FOR SMALL BUSINESSES</h3>
                <h2>Get up to $5 million. Check eligibility in minutes.</h2>
                <p>See options from 75+ lenders. No hidden fees.</p>
              </div>
              <div class="spz_form">

              </div>
            </div>
          </div>
        </div>
        <div class="testimonial_section">
          <div class="auto_container">
            <div class="testimonial_inner">
              <div class="testimonial_data">
                <div class="data_left">
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1763730993/lendio/3001/reviews-v1_1.svg" alt="Trustpilot">
                  </figure>
                </div>
                <div class="data_right">
                  <span>${quoteSvg}</span>
                  <p>The process was amazing. They went at my pace. Funds were in my account within two days.</p>
                  <div class="author">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3001/image_723.webp" alt="Art Hannemann">
                    <span>
                      <strong>Art Hannemann,</strong>
                      Owner at Seven Brothers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `)
      window.dispatchEvent(new Event('resize'));
      //form
      document.querySelector('.spz_form').insertAdjacentElement("afterbegin", formSelector);

      formInterval = setInterval(function () {
        if (document.querySelector('lendio-start').shadowRoot) {
          clearInterval(formInterval);
          const shadowRoot = document.querySelector('lendio-start').shadowRoot;
          const style = document.createElement('style');
          style.textContent = `
              h4,h5 {
                display: none;
              }
              h6 {
                color: #171717;
                font-family: proxima-nova,sans-serif;
                font-size: 28px;
                font-weight: 600;
                line-height: 24px;
                margin-top: 28px;
                margin-bottom: 33px;
                text-align:center;
              }
              .steps {
                width: calc(100% + 1px);
                height: 3px;
                border-radius: 999px;
                // background: rgba(229, 224, 221, 0.40);
                position: relative;
                overflow: hidden;
                margin-left: -1px;
                position: absolute;
                left:0;
                top: 0;
              }
              .steps::before{
                content:"";
                background: #192526;
                width:0;
                transition: width ease 0.3s;
                top: 0;
                left: 0;
                height: 100%;
                position: absolute;
              }
              #pwf-1:has(.carousel-item.slide-1.active) .steps::before{
                width: calc((100% / 11) * 1);
              }
              #pwf-1:has(.carousel-item.slide-2.active) .steps::before{
                width: calc((100% / 11) * 2);
              }
              #pwf-1:has(.carousel-item.slide-3.active) .steps::before{
                width: calc((100% / 11) * 3);
              }
              #pwf-1:has(.carousel-item.slide-4.active) .steps::before{
                width: calc((100% / 11) * 4);
              }
              #pwf-1:has(.carousel-item.slide-5.active) .steps::before{
                width: calc((100% / 11) * 5);
              }
              #pwf-1:has(.carousel-item.slide-6.active) .steps::before{
                width: calc((100% / 11) * 6);
              }
              #pwf-1:has(.carousel-item.slide-7.active) .steps::before{
                width: calc((100% / 11) * 7);
              }
              #pwf-1:has(.carousel-item.slide-8.active) .steps::before{
                width: calc((100% / 11) * 8);
              }
              #pwf-1:has(.carousel-item.slide-9.active) .steps::before{
                width: calc((100% / 11) * 9);
              }
              #pwf-1:has(.carousel-item.slide-10.active) .steps::before{
                width: calc((100% / 11) * 10);
              }
              #pwf-1:has(.carousel-item.slide-11.active) .steps::before{
                width: calc((100% / 11) * 11);
              }
              .spz-wrapper{
                position: relative;
              }  
              #pwf-1 select,#pwf-1 input:not([type="checkbox"]){
                border-radius: 999px;
                outline: 1px solid #E2DBD5;
                background: #FEFDFD;
                padding: 19px 24px 0;
                height: 54px;
                color: #121111;
                font-family: proxima-nova,sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 20.8px;
                border: 0;
                box-shadow: none;
              }
              #pwf-1 select{
                padding-right: 40px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16.25 7.5L10 13.75L3.75 7.5' stroke='%23A7A19D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-position: right 24px center;
                background-repeat: no-repeat;
                overflow:hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              #pwf-1 input:not([type="checkbox"]){
                overflow:hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: 24px !important;
              }
              #pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img {
                display:none;
              }
              #pwf-1 input:-webkit-autofill,
              #pwf-1 input:-webkit-autofill:hover,
              #pwf-1 input:-webkit-autofill:focus {
                -webkit-box-shadow: 0 0 0px 1000px rgba(126, 126, 126, 0) inset !important;
                transition: background-color 5000s ease-in-out 0s !important;
                -webkit-text-fill-color: #121111 !important;
                z-index: 2;
                position: relative;
              }
              #pwf-1 input::-webkit-input-placeholder { 
                color: transparent;
              }
              #pwf-1 input:-moz-placeholder { 
                color: transparent;
                opacity:0;
              }
              #pwf-1 input:-ms-input-placeholder { 
                color: transparent;
              }
              #pwf-1 input::-moz-placeholder { 
                color: transparent;
                opacity:0;
              }
              #pwf-1 select:focus,#pwf-1 input:not([type="checkbox"]):focus{
                outline: 2px solid #2468C7;
              }
              #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper select,
              #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper input:not([type="checkbox"]){
                outline: 1px solid #BE3A3A;
              }
              #pwf-1 select ~ .spz-label,#pwf-1 input:not([type="checkbox"]) ~ .spz-label{
                position: absolute;
                top: 50%;
                transform: translateY(calc(-50% - 1.5px));
                left: 24px;
                color: #757575;
                font-family: proxima-nova,sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 20.8px;
                transition: ease 0.3s;
                text-align: left;
                width: calc(100% - 55px);
                pointer-events: none;
                z-index: 3;
              }
              #pwf-1 select:focus ~ .spz-label,
              #pwf-1 select:not(:has(option:first-child:checked)) ~ .spz-label,
              #pwf-1 input:focus ~ .spz-label,
              #pwf-1 input:not(:placeholder-shown) ~ .spz-label
              {
                color:  #121111;
                font-weight: 400;
                font-size: 14px;
                line-height: 18.2px;
                top: 4.5px;
                left: 24px;
                transform: none;
                width: calc(100% - 55px);
                overflow:hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              #pwf-1 select:has(option:first-child:checked){
                color: transparent;
              }
              #pwf-1 .error-text{
                color:  #BE3A3A;
                font-family: proxima-nova,sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height:18.2px;
                padding-left: 18px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM7 3.5C6.75938 3.5 6.5625 3.69688 6.5625 3.9375V7.4375C6.5625 7.67812 6.75938 7.875 7 7.875C7.24062 7.875 7.4375 7.67812 7.4375 7.4375V3.9375C7.4375 3.69688 7.24062 3.5 7 3.5ZM7.65625 9.625C7.65625 9.45095 7.58711 9.28403 7.46404 9.16096C7.34097 9.03789 7.17405 8.96875 7 8.96875C6.82595 8.96875 6.65903 9.03789 6.53596 9.16096C6.41289 9.28403 6.34375 9.45095 6.34375 9.625C6.34375 9.79905 6.41289 9.96597 6.53596 10.089C6.65903 10.2121 6.82595 10.2812 7 10.2812C7.17405 10.2812 7.34097 10.2121 7.46404 10.089C7.58711 9.96597 7.65625 9.79905 7.65625 9.625Z' fill='%23BE3A3A'/%3E%3C/svg%3E");
                background-position: 0px 3px;
                background-repeat: no-repeat;
                margin-top: 7px;
              }
              #pwf-1 .btn-action{
                width: 140px;
                height: 56px;
                overflow: hidden;
                color: #FEFDFD;
                font-family: proxima-nova,sans-serif;
                font-size: 16px;
                font-weight: 600;
                line-height: 20.8px;
                background: #192526;
                border: 0;
                letter-spacing: 0;
                padding-top: 6px;
                box-shadow: none;
                transform: none;
              }
              #pwf-1 .btn-action > div{
                color: #FEFDFD;
                font-family: proxima-nova,sans-serif;
                font-size: 16px;
                font-weight: 600;
                line-height: 20.8px;
                justify-content: center;
              }
              #pwf-1 .btn-action:hover{
                background: #121111;
              }
              #pwf-1{
                position: static;
              }
              #pwf-1  .carousel-inner{
                position: static;
              }
              #pwf-1 .carousel-inner+div{
                margin-top: 13px
              }
              #pwf-1 div:has(.disclosure-tooltip){
                margin-top: 20px;
              }
              #pwf-1 div:has(.disclosure-tooltip) small{
                color: #171717;
                font-family: proxima-nova,sans-serif;
                font-size: 12px;
                font-weight: 500;
                line-height: 15.6px;
              }
              #pwf-1 div:has(.disclosure-tooltip) small sup{
                top:-5.5px;
              }
              #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
                color: #171717;
                font-family: proxima-nova,sans-serif;
                font-size: 12px;
                font-weight: 500;
                line-height: 15.6px;
                margin-left:-3px;
                text-decoration: underline;
                text-underline-offset: 5px;
                border: 0;
                transform: translate(0.5px, -1px);
              }
              #pwf-1 .disclosure-tooltip .disclosure-tooltiptext{
                margin-left: -140px;
                width: 280px;
                top: 172%;
                border-radius: 8px;
                color: #FBF8F7;
                font-family: proxima-nova,sans-serif;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                padding: 14.5px 20px 18px;
                box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10);
                background: #192526;

              }
              #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after{
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6' fill='none'%3E%3Cpath d='M7 0L14 6H0L7 0Z' fill='%23192526'/%3E%3C/svg%3E");
                width: 14px;
                height: 6px;
                border: 0;
                margin-left: -7px;
              }
              #pwf-1 .invisible {
                  display: none;
              }  

              @media (max-width: 767.98px) {  
                h6{
                  margin-top: 22px;
                  margin-bottom: 27px;
                }
                #pwf-1 .carousel-inner+div{
                  flex-direction: column-reverse;
                }
                #pwf-1 .carousel-inner+div{
                  margin-top:13px
                }
                #pwf-1 div:has(.disclosure-tooltip){
                  margin-top: 25.5px
                }
                #pwf-1 div:has(.disclosure-tooltip) small{
                  max-width: 270px;
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                }
                #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
                  transform: translate(1.5px, 2.5px);
                }
                #pwf-1 .btn-action{
                  width: 100%;
                }
                #pwf-1 div:has(>.btn-action){
                  width: calc(100% + 2px);
                } 
                #pwf-1 .slide-9 .grid-cols-2{
                  grid-template-columns: none;
                }
            `;

          shadowRoot.appendChild(style);
          shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterbegin", `
              <div class="steps"></div>
            `)

          const observer = new MutationObserver((mutationsList) => {
            if (shadowRoot.querySelector('#amountSeeking') && !shadowRoot.querySelector('.spz-label.amountSeeking')) {
              const input = shadowRoot.querySelector('#amountSeeking');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);

              shadowRoot.querySelector('#amountSeeking').insertAdjacentHTML("afterend", "<label class='spz-label amountSeeking'>How much money do you need?</label>")
              shadowRoot.querySelector('#amountSeeking option:first-child').textContent = "How much money do you need?"
            }
            if (shadowRoot.querySelector('#timeInBusiness') && !shadowRoot.querySelector('.spz-label.timeInBusiness')) {
              const input = shadowRoot.querySelector('#timeInBusiness');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#timeInBusiness').insertAdjacentHTML("afterend", "<label class='spz-label timeInBusiness'>How long have you been in business?</label>")
              shadowRoot.querySelector('#timeInBusiness option:first-child').textContent = "How long have you been in business?"
            }
            if (shadowRoot.querySelector('#averageMonthlySales') && !shadowRoot.querySelector('.spz-label.averageMonthlySales')) {
              const input = shadowRoot.querySelector('#averageMonthlySales');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#averageMonthlySales').insertAdjacentHTML("afterend", "<label class='spz-label averageMonthlySales'>What’s your monthly revenue?</label>")
              shadowRoot.querySelector('#averageMonthlySales option:first-child').textContent = "What’s your monthly revenue?"
            }
            if (shadowRoot.querySelector('#creditScore') && !shadowRoot.querySelector('.spz-label.creditScore')) {
              const input = shadowRoot.querySelector('#creditScore');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#creditScore').insertAdjacentHTML("afterend", "<label class='spz-label creditScore'>What is your personal credit score?</label>")
              shadowRoot.querySelector('#creditScore option:first-child').textContent = "What is your personal credit score?"
            }
            if (shadowRoot.querySelector('#entityType') && !shadowRoot.querySelector('.spz-label.entityType')) {
              const input = shadowRoot.querySelector('#entityType');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#entityType').insertAdjacentHTML("afterend", "<label class='spz-label entityType'>What type of business do you own?</label>")
              shadowRoot.querySelector('#entityType option:first-child').textContent = "What type of business do you own?"
            }
            if (shadowRoot.querySelector('#industry') && !shadowRoot.querySelector('.spz-label.industry')) {
              const input = shadowRoot.querySelector('#industry');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#industry').insertAdjacentHTML("afterend", "<label class='spz-label industry'>What is your company's industry?</label>")
              shadowRoot.querySelector('#industry option:first-child').textContent = "What is your company's industry?"
            }
            if (shadowRoot.querySelector('#business_name') && !shadowRoot.querySelector('.spz-label.business_name')) {
              const input = shadowRoot.querySelector('#business_name');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#business_name').insertAdjacentHTML("afterend", "<label class='spz-label business_name'>What is your business' name?</label>")
            }
            if (shadowRoot.querySelector('#first') && !shadowRoot.querySelector('.spz-label.first')) {
              const input = shadowRoot.querySelector('#first');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#first').insertAdjacentHTML("afterend", "<label class='spz-label first'>What is your first name?</label>")
            }
            if (shadowRoot.querySelector('#last') && !shadowRoot.querySelector('.spz-label.last')) {
              const input = shadowRoot.querySelector('#last');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#last').insertAdjacentHTML("afterend", "<label class='spz-label last'>What is your last name?</label>")
            }
            if (shadowRoot.querySelector('#email') && !shadowRoot.querySelector('.spz-label.email')) {
              const input = shadowRoot.querySelector('#email');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#email').insertAdjacentHTML("afterend", "<label class='spz-label email'>What is your email address?</label>")
            }
            if (shadowRoot.querySelector('#primary_phone') && !shadowRoot.querySelector('.spz-label.primary_phone')) {
              const input = shadowRoot.querySelector('#primary_phone');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#primary_phone').insertAdjacentHTML("afterend", "<label class='spz-label primary_phone'>What is your phone number?</label>")
            }
          })
          observer.observe(shadowRoot.querySelector("#pwf-1"), { childList: true, subtree: true, attributes: true });
          shadowRoot.querySelector('#pwf-1').insertAdjacentHTML("beforeend", `<div class="fake-div"></div>`)
          shadowRoot.querySelector('.fake-div').remove()
        }
      }, 100)

    }
  }, 100)
  setTimeout(function () {
    clearInterval(bodyInterval3001)
  }, 7000)
})();