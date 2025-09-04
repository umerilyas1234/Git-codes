const loadJS_SPZ = (url, implementationCode, location) => {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;
  location.appendChild(scriptTag);
};
const smoothScrollJSURL = "//res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js";
loadJS_SPZ(smoothScrollJSURL, function () { }, document.body);
let autoAccordionInterval;
let splide;
let autoAccordionTimer = 0;
const autoAccordionTimeout = 8000;

const timer = 8000;
let autoSlideInterval;
const bodyInterval13004 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_13004_v1')) {
    clearInterval(bodyInterval13004)
    document.querySelector('body').classList.add("spz_13004_v1")

    document.querySelector('#base').insertAdjacentHTML('afterbegin', `
<div class="spz_hero">
  <video autoplay muted loop playsinline class="hero_rightAnimation">
    <source
      src="https://res.cloudinary.com/spiralyze/video/upload/v1756210732/bamboohr/13004/assets/Animations/Animation_1_Right.mp4"
      type="video/mp4" />
  </video>
  <video autoplay muted loop playsinline class="hero_leftAnimation">
    <source
      src="https://res.cloudinary.com/spiralyze/video/upload/v1756210732/bamboohr/13004/assets/Animations/Animation_1_Left.mp4"
      type="video/mp4" />
  </video>
  <video autoplay muted loop playsinline class="hero_bottomAnimation">
    <source
      src="https://res.cloudinary.com/spiralyze/video/upload/v1756210732/bamboohr/13004/assets/Animations/Animation_2.mp4"
      type="video/mp4" />
  </video>
  <div class="auto_container">
    <div class="spz_heroInner">
      <div class="spz_heroDetail">
        <h1>More Than an Alternative—BambooHR® Is an <span>Upgrade</span></h1>
        <p>Simplify HR with award-winning solutions for everything from hire to retire. </p>
        <div class="cta_outer">
          <a href="#" class="custom_cta">Get Started</a>
        </div>
      </div>
      <div class="hero_main">
        <div class="hero_imageContainer">
          <div class="hero_imageMain">
            <picture>
              <source
                srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_8.webp"
                type="image/webp" media="(max-width: 1023px)">
              <img
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_9.webp"
                alt="Hero image">
            </picture>
          </div>
          <div class="hero_formContainer">
            <div class="qlf-form">
              <h2 class="qlf-title">Get a Free Demo</h2>
              <p class="qlf-subtitle">Which features are you most interested in?</p>
              <div class="step-inner-wrapper">
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle1" name="checkbox_item1"
                    id="checkbox_item_1" value="HR Data & Reporting">
                  <label for="checkbox_item_1">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557472/bamboohr/13004/hr_data__reporting.svg"
                      alt="HR Data & Reporting">
                    <span>HR Data & Reporting</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle2" name="checkbox_item2"
                    id="checkbox_item_2" value="Payroll">
                  <label for="checkbox_item_2">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1754557481/bamboohr/13004/payroll.svg"
                      alt="Payroll">
                    <span>Payroll</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle3" name="checkbox_item3"
                    id="checkbox_item_3" value="Benefits Administration">
                  <label for="checkbox_item_3">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557488/bamboohr/13004/benefits_administration.svg"
                      alt="Benefits Administration">
                    <span>Benefits <br> Administration</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle4" name="checkbox_item4"
                    id="checkbox_item_4" value="Time & Attendance">
                  <label for="checkbox_item_4">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557496/bamboohr/13004/time__attendance.svg"
                      alt="Time & Attendance">
                    <span>Time & Attendance</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle5" name="checkbox_item5"
                    id="checkbox_item_5" value="Applicant Tracking">
                  <label for="checkbox_item_5">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557505/bamboohr/13004/applicant_tracking.svg"
                      alt="Applicant Tracking">
                    <span>Applicant Tracking</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6"
                    id="checkbox_item_6" value="Onboarding">
                  <label for="checkbox_item_6">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1754557514/bamboohr/13004/onboarding.svg"
                      alt="Onboarding">
                    <span>Onboarding</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6"
                    id="checkbox_item_7" value="Performance Management">
                  <label for="checkbox_item_7">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557521/bamboohr/13004/performance_management.svg"
                      alt="Performance Management">
                    <span>Performance Management</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6"
                    id="checkbox_item_8" value="Employee Experience">
                  <label for="checkbox_item_8">
                    <img
                      src="//res.cloudinary.com/spiralyze/image/upload/v1754557528/bamboohr/13004/employee_experience.svg"
                      alt="Employee Experience">
                    <span>Employee Experience</span>
                  </label>
                </div>
                <div class="steps-control">
                  <input type="checkbox" class="SPZ_QualifyingQuestionsTitle6" name="checkbox_item6"
                    id="checkbox_item_9" value="Compensation">
                  <label for="checkbox_item_9">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1754557534/bamboohr/13004/compensation.svg"
                      alt="Compensation">
                    <span>Compensation</span>
                  </label>
                </div>
              </div>
              <div class="error-message"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_24125_685)">
                    <path
                      d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z"
                      stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_24125_685">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg> <span>Please select at least one solution</span></div>
              <div class="qlf-cta custom_cta SPZ_QualifyingQuestionsCTA">Get Started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="spz-1031-tabs-custom-container">
  <div class="title"><strong>150+</strong> businesses,<span class="tablet-break"></span> from startups to enterprises
  </div>
  <div class="tabs-custom-wrapper">
    <div class="tabs-custom-header">
      <div class="child active" data-index="1">
        <div class="text">All</div>
        <div class="border"></div>
        <div class="active-border"></div>
      </div>
      <div class="child" data-index="2">
        <div class="text">Construction</div>
        <div class="border"></div>
        <div class="active-border"></div>
      </div>
      <div class="child" data-index="3">
        <div class="text">Technology</div>
        <div class="border"></div>
        <div class="active-border"></div>
      </div>
      <div class="child" data-index="4">
        <div class="text">Healthcare</div>
        <div class="border"></div>
        <div class="active-border"></div>
      </div>
      <div class="child" data-index="5">
        <div class="text">Education</div>
        <div class="border"></div>
        <div class="active-border"></div>
      </div>
      <div class="padding-right"></div>
    </div>
    <div class="tabs-custom-content">
      <div class="child active" data-index="1">
        <div class="icon-section">
          <div class="icon-wrapper">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__stikent.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__stukent.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__stukent.webp"
                alt="Stukent" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ansarada.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ansarada.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ansarada.webp"
                alt="Ansarada" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__american.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__american.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__american.webp"
                alt="American Cedar & Millwork" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ists.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ists.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ists.webp"
                alt="International Scholarship and Tuition Services, Inc." width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ewn.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ewn.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ewn.webp"
                alt="Energy Worldnet" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__williston.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__williston.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__williston.webp"
                alt="The Williston Northampton School" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__architrave.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__architrave.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__architrave.webp"
                alt="Architrave" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__lucid.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__lucidlucid.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__lucid.webp"
                alt="Lucid" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__avidbots.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__avidbots.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__avidbots.webp"
                alt="Avidbots" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__pronto.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__pronto.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__pronto.webp"
                alt="ProntoForms" width="222" height="80">
            </picture>
          </div>
        </div>
      </div>
      <div class="child" data-index="2">
        <div class="icon-section">
          <div class="icon-wrapper">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__applewood.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__applewood.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__applewood.webp"
                alt="Applewood Plumbing Heating & Electric" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__hunt.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__hunt.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__hunt.webp"
                alt="Hunt Electric, Inc" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__black.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__black.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__black.webp"
                alt="Black & McDonald" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__prince.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__prince.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__prince.webp"
                alt="Princebuild" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__gly.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__gly.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__gly.webp"
                alt="GLY Construction, Inc" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__landscape.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__landscape.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__landscape.webp"
                alt="Landscape Solutions" width="222" height="80">
            </picture>
          </div>
        </div>
      </div>
      <div class="child" data-index="3">
        <div class="icon-section">
          <div class="icon-wrapper">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__asana.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__asana.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__asana.webp"
                alt="Asana, Inc" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__verkada.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__verkada.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__verkada.webp"
                alt="Verkada" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__domo.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__domo.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__domo.webp"
                alt="Domo, Inc" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__talkdesk.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__talkdesk.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__talkdesk.webp"
                alt="Talkdesk" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__zapier.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__zapier.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__zapier.webp"
                alt="Zapier" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__vimeo.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__vimeo.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__vimeo.webp"
                alt="Vimeo" width="222" height="80">
            </picture>
          </div>
        </div>
      </div>
      <div class="child" data-index="4">
        <div class="icon-section">
          <div class="icon-wrapper">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__revere.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__revere.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__revere.webp"
                alt="Revere Health" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__second.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__second.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__second.webp"
                alt="Second Genome" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__athome.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__athome.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__athome.webp"
                alt="At Home Healthcare" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__rehab.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__rehab.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__rehab.webp"
                alt="Rehabilitation Services of Louisiana" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__advance.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__advance.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__advance.webp"
                alt="Advance Dentistry" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__cabinet.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__cabinet.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__cabinet.webp"
                alt="Cabinet Peaks Medical Center" width="222" height="80">
            </picture>
          </div>
        </div>
      </div>
      <div class="child" data-index="5">
        <div class="icon-section">
          <div class="icon-wrapper">
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__atoz.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__atoz.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__atoz.webp"
                alt="A to Z Building Blocks Early Care and Education" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__harvard.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__harvard.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__harvard.webp"
                alt="Harvard Medical School" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__piedmont.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__piedmont.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__piedmont.webp"
                alt="Piedmont Community Charter School" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__byu.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__byu.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__byu.webp"
                alt="BYU Marriott School of Business" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__grow.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__grow.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__grow.webp"
                alt="Grow Public Schools" width="222" height="80">
            </picture>
            <picture>
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__fiu.webp"
                media="(max-width:767.98px)">
              <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__fiu.webp"
                media="(max-width:1024.98px)">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__fiu.webp"
                alt="Florida International University" width="222" height="80">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cta-wrapper">
    <button class="spz-1031-get-demo-cta">Get a Demo</button>
    <a class="spz-1031-free-trial-cta" href="https://www.bamboohr.com/signup/">Start Free Trial</a>
  </div>
</div>

<div class="section2_2003" data-testid="component-wrapper__container">
  <div class="auto_container">
    <div class="section2_inner">
      <div class="wrapper">
        <div class="title">Get all the HR tools you need in <strong>one place</strong></div>
        <div class="accordion-wrapper">
          <div class="text">
            <div class="child active" data-index="1">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>HR Data & Reporting</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="tag_list">
                    <ul>
                      <li>
                        <span>Employee Records</span>
                      </li>
                      <li>
                        <span>Automated Reporting</span>
                      </li>
                      <li>
                        <span>Mobile App</span>
                      </li>
                    </ul>
                  </div>
                  <div class="text">
                    <p>BambooHR is your one-stop shop for data management, with instant, pre-built reports, automated
                      workflows, and in-depth analytics to back you up and keep you moving.
                    </p>
                  </div>
                  <div class="cta_outer">
                    <a href="#" class="custom_cta outline">Get My Demo</a>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_4.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_5.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_3.webp"
                  alt="HR Data & Reporting" width="688" height="404" loading="lazy">
              </picture>
            </div>
            <div class="child" data-index="2">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>Hiring & Onboarding</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="text">
                    <p>Set budgets for departments, projects, vendors, purchase orders, spend categories, and more.
                      Automated multi-level approval workflows.</p>
                    <p>Get real-time spend insights. Identify opportunities to eliminate spend or switch to lower-cost
                      alternatives.</p>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hiring__onboarding_1.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hiring__onboarding_2.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hiring__onboarding.webp"
                  alt="Hiring & Onboarding" width="688" height="404" loading="lazy">
              </picture>
            </div>
            <div class="child" data-index="3">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>Payroll, Time & Benefits</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="text">
                    <p>Auto-match purchase orders, vendor invoices, and receiving reports. No more digging through all
                      your accounting platforms to compare POs and invoices.</p>
                    <p>Sync purchasing data with ERPs. Reduce reconciliation time 90%.</p>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_time__benefits_1.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_time__benefits_2.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_time__benefits.webp"
                  alt="Payroll, Time & Benefits" width="688" height="404" loading="lazy">
              </picture>
            </div>
            <div class="child" data-index="4">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>Employee Experience & Performance</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="text">
                    <p>Manage purchasing, contracts, vendor relationships, and invoicing in one place. No more toggling
                      between windows and double-entering data. Streamline financial operations. </p>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience__performance_1.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience__performance_2.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience__performance.webp"
                  alt="Employee Experience & Performance" width="688" height="404" loading="lazy">
              </picture>
            </div>
            <div class="child" data-index="5">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>Integration Marketplace</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="text">
                    <p>Automate requests, approvals, and purchase orders. Let procurement teams, approvers, and
                      suppliers communicate in real-time. Streamline vendor management with preferred vendors and
                      pre-negotiated terms.</p>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/integration_marketplace_1.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/integration_marketplace_2.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/integration_marketplace.webp"
                  alt="Integration Marketplace" width="688" height="404" loading="lazy">
              </picture>
            </div>
            <div class="child" data-index="5">
              <div class="child_inner">
                <div class="bar">
                  <div class="line"></div>
                </div>
                <div class="title">
                  <div class="text">
                    <span>Compliance</span>
                  </div>
                  <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path d="M20.0039 15.6001L11.8015 7.39769L3.60086 15.6001" stroke="#599D15" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path d="M16.6699 7L9.83458 13.8353L3.00072 7" stroke="#95918F" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="content">
                  <div class="text">
                    <p>Automate requests, approvals, and purchase orders. Let procurement teams, approvers, and
                      suppliers communicate in real-time. Streamline vendor management with preferred vendors and
                      pre-negotiated terms.</p>
                  </div>
                </div>
              </div>
              <picture>
                <source media="(max-width:767.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compliance_1.webp">
                <source media="(max-width:1023.98px)"
                  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compliance_2.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compliance.webp"
                  alt="Compliance" width="688" height="404" loading="lazy">
              </picture>
            </div>
          </div>
          <div class="image">
            <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_3.webp"
              alt="HR Data & Reporting" width="616" height="616" loading="lazy">

            <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_3.webp"
              alt="HR Data & Reporting" width="616" height="616" loading="lazy">
            <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hiring__onboarding.webp"
              alt="Hiring & Onboarding" width="616" height="616" loading="lazy">
            <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_time__benefits.webp"
              alt="Payroll, Time & Benefits" width="616" height="616" loading="lazy">
            <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience__performance.webp"
              alt="Employee Experience & Performance" width="616" height="616" loading="lazy">
            <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/integration_marketplace.webp"
              alt="Integration Marketplace" width="616" height="616" loading="lazy">
            <img class="hero" data-index="6" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compliance.webp"
              alt="Compliance" width="616" height="616" loading="lazy">
          </div>
        </div>
        <div class="cta_outer">
          <a href="https://www.procurify.com/get-started/" class="cta">
            <span>Book a demo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      `)

    // Checbox js
    const checkboxes = document.querySelectorAll(".step-inner-wrapper input[type='checkbox']");
    const image = document.querySelector(".hero_imageMain img");
    const desktopImages = [
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_9.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/benefits_administration_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/time__attendance_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/applicant_tracking_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/onboarding_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/performance_management_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience_4.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compensation_4.webp"
    ];
    const tabImages = [
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_8.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/payroll_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/benefits_administration_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/time__attendance_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/applicant_tracking_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/onboarding_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/performance_management_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/employee_experience_3.webp",
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/compensation_3.webp"
    ];

    let checkedOrder = [];

    function getImageSet() {
      return window.matchMedia("(max-width: 1023px)").matches ? tabImages : desktopImages;
    }

    function setImage(src, applyBlur = false) {
      image.classList.add("fade-out");
      image.addEventListener("transitionend", function handler() {
        image.removeEventListener("transitionend", handler);
        image.src = src;
        if (applyBlur) {
          image.classList.add("blur");
        } else {
          image.classList.remove("blur");
        }
        image.classList.remove("fade-out");
        image.classList.add("fade-in");
        setTimeout(() => image.classList.remove("fade-in"), 200);
      });
    }

    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("change", function () {
        const images = getImageSet();

        if (this.checked) {
          // Add to order and update image
          if (!checkedOrder.includes(index)) {
            checkedOrder.push(index);
          }
          setImage(images[index], false); // remove blur
        } else {
          // Remove from order
          checkedOrder = checkedOrder.filter(i => i !== index);

          if (checkedOrder.length === 0) {
            // Last unchecked → reset to first image with blur
            setImage(images[0], true);
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      const images = getImageSet();
      if (checkedOrder.length > 0) {
        setImage(images[checkedOrder[checkedOrder.length - 1]], false);
      } else {
        setImage(images[0], true);
      }
    });

    // tabs slider js

    const tabsChild = document.querySelectorAll('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header > .child')
    // check if has scroll bar
    function hasScrollBar() {
      if (document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').clientWidth < document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').scrollWidth) {
        return true
      }
      return false
    }

    // for set child height so it will looks nice
    function getQuoteCurrentHeight() {
      return document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-content .child.active').offsetHeight;
    }

    function getContentWrapperHeight() {
      document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').removeAttribute("style")

      return document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-content .child.active').offsetHeight;
    }
    // setting the parent and child of the content
    function setQuoteMinHeight() {
      for (let i = 0; i < tabsChild.length; i++) {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].removeAttribute("style")
      }
      for (let i = 0; i < tabsChild.length; i++) {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].style.height = '' + getQuoteCurrentHeight() + 'px';
      }
      document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').style.height = '' + getQuoteCurrentHeight() + 'px';
    }

    // function to centering the title
    function moveTheTitle(index) {
      if (hasScrollBar()) {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollTo({
          left: document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="' + index + '"]').getBoundingClientRect().left + document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft - parseInt(window.getComputedStyle(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header'), null).getPropertyValue('padding-left'), 10),
          behavior: 'smooth'
        });
      }
    }

    function runAutoSlider() {
      let i = 0;
      let width;
      autoSlideInterval = setInterval(() => {
        // reset from 0
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
        if ((i / timer) * 100 > 100) {
          width = "100%";
        } else {
          width = ((i / timer) * 100) + "%";
        }
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.width = width;

        // if more than timer
        if (i > timer) {
          // next active slide
          let curIndex = parseInt(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').getAttribute("data-index"), 10);
          if (curIndex !== tabsChild.length) {
            curIndex = curIndex + 1;
          } else {
            curIndex = 1;
          }

          // change animation
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity = "0";
          const currActive = document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border');
          setTimeout(() => {
            currActive.style.width = "0px";
          }, 400)

          // remove active
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove('active')
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')

          // move to next tabs
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="' + curIndex + '"]').classList.add("active")
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="' + curIndex + '"]').classList.add("active")
          setQuoteMinHeight()
          clearInterval(autoSlideInterval);
          runAutoSlider()

          // adjust scrollbar position for auto slider
          moveTheTitle(curIndex)

        }
        i += 200;
      }, 200)
    }

    function headerScrollBarCalculation() {
      // check if has scrollbar
      if (hasScrollBar()) {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("show-gradient")
      } else {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove('show-gradient')
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-listener-added")
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
      }

      // check reach end or no to show/hide gradient
      if (!document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.contains("scroll-listener-added")) {
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-listener-added")
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').addEventListener("scroll", () => {
          // check if reach end
          if (document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollWidth - document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft === document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').clientWidth) {
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-reach-end")
          } else {
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
          }
          // check if not at the beginning
          if (document.querySelector('.tabs-custom-wrapper').querySelector('.tabs-custom-header').scrollLeft > 0) {
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-not-at-start")
          }
          else {
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-not-at-start")
          }
        })
      }
    }

    // event listener  
    document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header').addEventListener("click", (event) => {
      if (event.target.closest('.child')) {
        clearInterval(autoSlideInterval);

        // set header current active
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').classList.add("no-transition")
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity = "0";
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove("active")
        event.target.closest('.child').classList.add("active")
        event.target.closest('.child').querySelector('.active-border').classList.add("no-transition")
        event.target.closest('.child').querySelector('.active-border').style.width = '100%';
        event.target.closest('.child').querySelector('.active-border').style.opacity = 1;

        moveTheTitle(event.target.closest('.child').getAttribute("data-index"))

        // set content current active
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')
        let index = event.target.closest('.child').getAttribute("data-index");
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="' + index + '"]').classList.add("active")
        setQuoteMinHeight()
      }
    })

    document.querySelector('.spz-1031-get-demo-cta').addEventListener("click", function () {
      document.querySelector('.spz-1031 .hero-section a[data-modal="#demo-modal"]').click()
    })

    // dragging functionality using normal mouse
    const scrollableDiv = document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header');
    let startMouseX = 0;
    let startScrollX = 0;
    let isDragging = false;

    // Mouse events for drag detection
    scrollableDiv.addEventListener('mousedown', (event) => {
      // Track where the mouse started
      startMouseX = event.pageX;
      startScrollX = scrollableDiv.scrollLeft;
      isDragging = true;
      // Prevent text selection and other default behaviors while dragging
      event.preventDefault();
    });

    scrollableDiv.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // Calculate the change in mouse position
        const deltaX = event.pageX - startMouseX;
        // Adjust scroll position based on mouse movement
        scrollableDiv.scrollLeft = startScrollX - deltaX;
      }
    });

    scrollableDiv.addEventListener('mouseup', () => {
      isDragging = false;
    });

    scrollableDiv.addEventListener('mouseleave', () => {
      isDragging = false;
    });


    // autoslider animation on page load
    runAutoSlider()

    // needed delay
    let i = 0;
    const pageLoadInterval = setInterval(() => {
      headerScrollBarCalculation()
      setQuoteMinHeight()
      if (i >= 50) {
        clearInterval(pageLoadInterval)
      }
      i++;
    }, 200)
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout)
      headerScrollBarCalculation()
      setQuoteMinHeight()
      resizeTimeout = setTimeout(function () {
        headerScrollBarCalculation()
        setQuoteMinHeight()
      }, 500)
    })



    // accordion js
    var section2AccordianWrapper = document.querySelector(".section2_2003 .accordion-wrapper > .text");
    function resetProgressBar() {
      autoAccordionTimer = 0; // Reset the timer
      document.querySelectorAll(".section2_2003 .accordion-wrapper .child .bar .line").forEach(line => {
        line.removeAttribute("style"); // Reset the progress bar style
      });
    }
    if (!section2AccordianWrapper.classList.contains('spz-click-registered')) {
      section2AccordianWrapper.classList.add('spz-click-registered');
      section2AccordianWrapper.addEventListener("click", function (e) {
        if (
          e.target.closest(".child_inner") &&
          !e.target.closest(".child").classList.contains("active") &&
          !document.querySelector(".section2_2003 .accordion-wrapper .animate")
        ) {
          resetProgressBar();
          // stopSection2AccordionAutoPlay();
          // remove active
          const prevElement = document.querySelector(".section2_2003 .accordion-wrapper .text .child.active");
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
          var accordionChild = document.querySelector(".section2_2003 .accordion-wrapper .child.no-border");
          if (accordionChild) {
            accordionChild.classList.remove("no-border");
          }
          if (e.target.closest(".child").getAttribute("data-index") != "1") {
            document
              .querySelector(
                '.section2_2003 .accordion-wrapper .child[data-index="' +
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
          document.querySelector(".section2_2003 .accordion-wrapper .image .hero.active").classList.remove("active");
          document
            .querySelector(
              '.section2_2003 .accordion-wrapper .image .hero[data-index="' +
              e.target.closest(".child").getAttribute("data-index") +
              '"]'
            )
            .classList.add("active");
          //change scroll position
          if (
            window.matchMedia("(max-width: 1023.98px)").matches &&
            document.querySelector(
              ".section2_2003 .accordion-wrapper.stop"
            )
          ) {
            setTimeout(function () {
              var scroll = new SmoothScroll();
              var targetElement = document.querySelector(
                ".section2_2003 .accordion-wrapper .child.active"
              );
              var targetPosition = targetElement.getBoundingClientRect().y + scrollY - 90;
              scroll.animateScroll(targetPosition, null, {
                easing: "easeOutQuad",
              });
            }, 302);
          }
        }
      });
    }

    
    // Function to check if an element is in view
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const inViewport = (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
      return inViewport;
    }
    
    // Function to run the auto accordion code
    function runAutoAccordion() {
      if (!autoAccordionInterval) {
        autoAccordionInterval = setInterval(function () {
          var accordionWrapperEle = document.querySelector(".section2_2003 .accordion-wrapper");
          if (!accordionWrapperEle || accordionWrapperEle.classList.contains('stop')) {
            return;
          }
          document.querySelector(".section2_2003 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
          document.querySelector(".section2_2003 .accordion-wrapper .child.active .bar .line").style.width = "" + (autoAccordionTimer / autoAccordionTimeout) * 100 + "%";
          if (autoAccordionTimer > autoAccordionTimeout) {
            document.querySelector(".section2_2003 .accordion-wrapper .child.active .bar .line").removeAttribute("style");
            let curIndex = parseInt(
              document
                .querySelector(".section2_2003 .accordion-wrapper .child.active")
                .getAttribute("data-index")
            );
            curIndex < 5 ? curIndex++ : curIndex = 1;
            document
              .querySelector(
                '.section2_2003 .accordion-wrapper .child[data-index="' +
                curIndex +
                '"] .title'
              )
              .click();
            autoAccordionTimer = 0;
          }
          autoAccordionTimer += 200;
        }, 200);
      }
    }

    // Add scroll event listener to run the code when "DevOne" is in view
    document.addEventListener('scroll', function() {
      const featureSection = document.querySelector('.section2_2003');
      console.log(featureSection);
      if (featureSection && isInViewport(featureSection)) {
        // runAutoAccordion();
        document.removeEventListener('scroll', arguments.callee);
      }
    });


    function stopSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".section2_2003 .accordion-wrapper");
      accordionWrapperEle.classList.add("stop");
    }

    function startSection2AccordionAutoPlay() {
      var accordionWrapperEle = document.querySelector(".section2_2003 .accordion-wrapper");
      accordionWrapperEle.classList.remove("stop");
    }

    const accordionWrapper = document.querySelector(".section2_2003 .accordion-wrapper");

    // accordionWrapper.addEventListener("mouseenter", function(event) {
    //     if (event.target.matches(".child.active")) {
    //         stopSection2AccordionAutoPlay();
    //     }
    // }, true);

    // accordionWrapper.addEventListener("mouseleave", function(event) {
    //     if (event.target.matches(".child.active")) {
    //         startSection2AccordionAutoPlay();
    //     }
    // }, true);
    
    const checkFeatureTitleHeight = () => {
      const spans = document.querySelectorAll(".section2_2003 .accordion-wrapper .child .title > .text span");
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



    window.addEventListener('click', function (e) {
      if (document.cookie.includes('Data Security Posture Management')) {
        document.querySelector('#checkbox_item_1').click();
      }
      if (document.cookie.includes('Identity Threat Detection & Response')) {
        document.querySelector('#checkbox_item_2').click();
      }
      if (document.cookie.includes('Identity Management')) {
        document.querySelector('#checkbox_item_3').click();
      }
      if (document.cookie.includes('Privileged Access Management')) {
        document.querySelector('#checkbox_item_4').click();
      }
      if (document.cookie.includes('Directory Management')) {
        document.querySelector('#checkbox_item_5').click();
      }
      if (document.cookie.includes('Endpoint Management')) {
        document.querySelector('#checkbox_item_6').click();
      }
    });



    (function () {
      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      const expName = '13004'; //experiment name should be #1001, #1002, #1003 etc.
      const variantName = `#` + expName + `_Variant`; //variantName should be _TrueControl, _Variant etc.
      const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com

      hiddenValue(expName, variantName);

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      function hiddenValue(currentExperimentName, currentExperimentValue) {
        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
        }

        function getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        }

        var ExistingExperimentName = getCookie('ExperimentName');
        var ExistingExperimentValue = getCookie('ExperimentValue');
        var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

        if (!ExistingExperimentName) {

          setCookie('ExperimentName', currentExperimentName, 1);
          setCookie('ExperimentValue', currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {

          setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
          setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {

          var existingNames = ExistingExperimentName.split(',');
          var existingValues = ExistingExperimentValue.split(',');

          var index = existingNames.indexOf(currentExperimentName);
          existingValues[index] = currentExperimentValue;

          setCookie('ExperimentName', existingNames.join(','), 1);
          setCookie('ExperimentValue', existingValues.join(','), 1);
        }
      }
    }());


    // For safari - Browser Back
    // MktoForms2.whenReady(function (form) {
    //   window.onpageshow = function (event) {
    //     if (event.persisted) {
    //       var selector = document.querySelector('main .form .mktoForm .mktoButton');
    //       selector.textContent = "Get Free Demo";
    //       selector.removeAttribute("disabled");
    //       const fieldsToHide = ['#LblFirstName', '#LblLastName', '#LblEmail', "#LblTitle"];
    //       fieldsToHide.forEach(selector => {
    //         document.querySelector(selector).closest('.mktoFormRow').classList.remove('hide');
    //       });
    //       document.querySelector('.form-wrapper')?.classList.remove('step_2');
    //       document.querySelector('.stepper img').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/10002/Stepper_2.png";
    //       hideOnload();
    //     }
    //   };

    // });

  }

}, 10)



