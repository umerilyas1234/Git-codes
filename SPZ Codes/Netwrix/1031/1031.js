(function() {
  const bodyInterval1031 = setInterval(function(){
    if(document.querySelector('body') && document.querySelector('.section.g2-card') && !document.querySelector('.spz-1031')){
      clearInterval(bodyInterval1031)

       //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      const expName = '#1031'; //experiment name should be #1001, #1002, #1003 etc.
      const variantName = expName + `_Variant`; //variantName should be _V1, _V2, _TC etc.
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
              for(var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
              }
              return null;
          }

          var ExistingExperimentName = getCookie('ExperimentName');
          var ExistingExperimentValue = getCookie('ExperimentValue');
          var ExistingExperimentNameList = ExistingExperimentName?ExistingExperimentName.split(',') : [];

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

      const timer= 8000;
      let autoSlideInterval ;
      document.querySelector('body').classList.add("spz-1031")
      document.querySelector('.spz-1031 .section.g2-card').insertAdjacentHTML("afterend",`
      <div class="spz-1031-tabs-custom-container">
        <div class="title">34,000+ businesses,<span class="tablet-break"></span> from startups to enterprises</div>
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
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__stikent.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__stukent.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__stukent.webp" alt="Stukent" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ansarada.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ansarada.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ansarada.webp" alt="Ansarada" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__american.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__american.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__american.webp" alt="American Cedar & Millwork" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ists.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ists.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ists.webp" alt="International Scholarship and Tuition Services, Inc." width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__ewn.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__ewn.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__ewn.webp" alt="Energy Worldnet" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__williston.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__williston.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__williston.webp" alt="The Williston Northampton School" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__architrave.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__architrave.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__architrave.webp" alt="Architrave" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__lucid.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__lucidlucid.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__lucid.webp" alt="Lucid" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__avidbots.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__avidbots.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__avidbots.webp" alt="Avidbots" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__pronto.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__pronto.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__pronto.webp" alt="ProntoForms" width="222" height="80">
                  </picture>
                </div>
              </div>
            </div>
            <div class="child" data-index="2">
              <div class="icon-section">
                <div class="icon-wrapper">
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__applewood.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__applewood.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__applewood.webp" alt="Applewood Plumbing Heating & Electric" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__hunt.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__hunt.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__hunt.webp" alt="Hunt Electric, Inc" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__black.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__black.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__black.webp" alt="Black & McDonald" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__prince.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__prince.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__prince.webp" alt="Princebuild" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__gly.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__gly.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__gly.webp" alt="GLY Construction, Inc" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__landscape.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__landscape.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__landscape.webp" alt="Landscape Solutions" width="222" height="80">
                  </picture>
                </div>
              </div>
            </div>
            <div class="child" data-index="3">
              <div class="icon-section">
                <div class="icon-wrapper">
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__asana.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__asana.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__asana.webp" alt="Asana, Inc" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__verkada.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__verkada.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__verkada.webp" alt="Verkada" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__domo.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__domo.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__domo.webp" alt="Domo, Inc" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__talkdesk.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__talkdesk.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__talkdesk.webp" alt="Talkdesk" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__zapier.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__zapier.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__zapier.webp" alt="Zapier" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__vimeo.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__vimeo.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__vimeo.webp" alt="Vimeo" width="222" height="80">
                  </picture>
                </div>
              </div>
            </div>
            <div class="child" data-index="4">
              <div class="icon-section">
                <div class="icon-wrapper">
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__revere.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__revere.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__revere.webp" alt="Revere Health" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__second.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__second.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__second.webp" alt="Second Genome" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__athome.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__athome.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__athome.webp" alt="At Home Healthcare" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__rehab.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__rehab.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__rehab.webp" alt="Rehabilitation Services of Louisiana" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__advance.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__advance.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__advance.webp" alt="Advance Dentistry" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__cabinet.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__cabinet.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__cabinet.webp" alt="Cabinet Peaks Medical Center" width="222" height="80">
                  </picture>
                </div>
              </div>
            </div>
            <div class="child" data-index="5">
              <div class="icon-section">
                <div class="icon-wrapper">
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__atoz.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__atoz.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__atoz.webp" alt="A to Z Building Blocks Early Care and Education" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__harvard.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__harvard.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__harvard.webp" alt="Harvard Medical School" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__piedmont.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__piedmont.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__piedmont.webp" alt="Piedmont Community Charter School" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__byu.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__byu.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__byu.webp" alt="BYU Marriott School of Business" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__grow.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__grow.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__grow.webp" alt="Grow Public Schools" width="222" height="80">
                  </picture>
                  <picture>
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/mobile__fiu.webp" media="(max-width:767.98px)">
                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/tablet__fiu.webp" media="(max-width:1024.98px)">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1031/desktop__fiu.webp" alt="Florida International University" width="222" height="80">
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
      `)
      const tabsChild =document.querySelectorAll('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header > .child')
      // check if has scroll bar
      function hasScrollBar(){
        if(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').clientWidth < document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').scrollWidth){
          return true
        }
        return false
      }

      // for set child height so it will looks nice
      function getQuoteCurrentHeight(){
        return document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-content .child.active').offsetHeight;
      }

      function getContentWrapperHeight(){
        document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').removeAttribute("style")
        
        return  document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper .tabs-custom-content .child.active').offsetHeight;
      }
      // setting the parent and child of the content
      function setQuoteMinHeight(){
          for(let i=0;i<tabsChild.length;i++){
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].removeAttribute("style")
          }
          for(let i=0;i<tabsChild.length;i++){
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].style.height=''+getQuoteCurrentHeight()+'px'; 
          }
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').style.height=''+getQuoteCurrentHeight()+'px'; 
      }

      // function to centering the title
      function moveTheTitle(index) {
        if(hasScrollBar()){
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollTo({
            left: document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="'+index+'"]').getBoundingClientRect().left + document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft - parseInt(window.getComputedStyle(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header'), null).getPropertyValue('padding-left'),10),
            behavior: 'smooth'
          });
        }
      }

      function runAutoSlider(){
        let i = 0;
        let width;
        autoSlideInterval = setInterval(()=>{
          // reset from 0
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
          if((i/timer) * 100 > 100){
            width="100%";
          } else {
            width= ((i/timer) * 100)+"%";
          }
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.width=width;

          // if more than timer
          if(i>timer){
            // next active slide
            let curIndex=parseInt(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').getAttribute("data-index"), 10);
            if(curIndex !== tabsChild.length){
              curIndex = curIndex + 1;
            } else {
              curIndex = 1;
            }
            
            // change animation
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity="0";
            const currActive = document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border');
            setTimeout(()=>{
              currActive.style.width="0px";
            },400)

            // remove active
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove('active')
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')

            // move to next tabs
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="'+curIndex+'"]').classList.add("active")
            document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="'+curIndex+'"]').classList.add("active")
            setQuoteMinHeight()
            clearInterval(autoSlideInterval);
            runAutoSlider()

            // adjust scrollbar position for auto slider
            moveTheTitle(curIndex)
            
          }
          i += 200;
        },200)
      }

      function headerScrollBarCalculation(){
        // check if has scrollbar
        if(hasScrollBar()){
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("show-gradient")
        } else {
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove('show-gradient')
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-listener-added")
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
        }

        // check reach end or no to show/hide gradient
        if(!document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.contains("scroll-listener-added")){
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-listener-added")
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').addEventListener("scroll",()=>{
            // check if reach end
            if(document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollWidth-document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft===document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').clientWidth){
              document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-reach-end")
            } else {
              document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
            }
            // check if not at the beginning
            if(document.querySelector('.tabs-custom-wrapper').querySelector('.tabs-custom-header').scrollLeft>0){ 
              document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-not-at-start")
            }
            else {
              document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-not-at-start")
            }
          })
        } 
      }

      // event listener  
      document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header').addEventListener("click",(event)=>{
        if(event.target.closest('.child')){
          clearInterval(autoSlideInterval);

          // set header current active
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').classList.add("no-transition")
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').style.opacity="0";
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active .active-border').removeAttribute("style")
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove("active")
          event.target.closest('.child').classList.add("active")
          event.target.closest('.child').querySelector('.active-border').classList.add("no-transition")
          event.target.closest('.child').querySelector('.active-border').style.width='100%';
          event.target.closest('.child').querySelector('.active-border').style.opacity=1;

          moveTheTitle(event.target.closest('.child').getAttribute("data-index"))
      
          // set content current active
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')
          let index=event.target.closest('.child').getAttribute("data-index");
          document.querySelector('.spz-1031-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="'+index+'"]').classList.add("active")
          setQuoteMinHeight()
        } 
      })

      document.querySelector('.spz-1031-get-demo-cta').addEventListener("click",function(){
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
      let i =0;
      const pageLoadInterval = setInterval(()=>{
        headerScrollBarCalculation()
        setQuoteMinHeight()
        if(i>=50){
          clearInterval(pageLoadInterval)
        }
        i++;
      },200)
      let resizeTimeout;
      window.addEventListener("resize",()=>{
        clearTimeout(resizeTimeout)
        headerScrollBarCalculation()
        setQuoteMinHeight()
        resizeTimeout=setTimeout(function(){
          headerScrollBarCalculation()
          setQuoteMinHeight()
        },500)
      }) 
    }
  },10)
  setTimeout(function(){
    clearInterval(bodyInterval1031)
  },7000)
})();