(function() {
  const bodyInterval3008 = setInterval(function(){
    if(document.querySelector('body') && document.querySelector('.header-cont') && !document.querySelector('.spz-3008')){
      clearInterval(bodyInterval3008)

       //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      //exptName should be #1001, #1002, #1003 etc.
      const expName = '3008';
      //variantName should be _V1, _V2, _TC etc.
      const variantName = `variant_` + expName;
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
              document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

          if (!ExistingExperimentName) {

              setCookie('ExperimentName', currentExperimentName, 1);
              setCookie('ExperimentValue', currentExperimentValue, 1);

          } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

              setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
              setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

          } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

              var existingNames = ExistingExperimentName.split(',');
              var existingValues = ExistingExperimentValue.split(',');

              var index = existingNames.indexOf(currentExperimentName);
              existingValues[index] = currentExperimentValue;

              setCookie('ExperimentName', existingNames.join(','), 1);
              setCookie('ExperimentValue', existingValues.join(','), 1);
          }
      }
      function findByText(type,text){
        for(let i=0;i<document.querySelectorAll(type).length;i++){
          if(document.querySelectorAll(type)[i].textContent==text){
            return document.querySelectorAll(type)[i];
          }
        }
        return;
      }

     
      const setActiveTab=(target)=>{
          if(target.closest(".spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab").classList.contains("active")==false){
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab.active').classList.remove("active")
            target.closest(".spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab").classList.add("active")
            const clickedIndex= [...target.closest(".spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab").parentNode.children].indexOf(target.closest(".spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab"));
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .child.active').classList.remove("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .child:nth-child('+parseInt(clickedIndex+1)+')').classList.add("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper select').selectedIndex=clickedIndex;
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .fake-select >div.active').classList.remove("active");
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .fake-select >div:nth-child('+(clickedIndex+1)+')').classList.add("active")
          }
      }
      const loadJS = (url, implementationCode, location)=>{
          var scriptTag = document.createElement('script');
          scriptTag.src = url;
        
          scriptTag.onload = implementationCode;
          scriptTag.onreadystatechange = implementationCode;
        
          location.appendChild(scriptTag);
        };

        const gb_load_css =(path)=> {
          let css = document.createElement('link');
          css.rel = 'stylesheet';
          css.media = 'all';
          css.href = path;
        
          document.getElementsByTagName('head')[0].appendChild(css);
        }
      loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1739952143/techsmithcamtasia/308/smooth-scroll.min.js', function(){}, document.body);
      loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1752158045/netwrix/script/smooth-scroll.min.js', function(){}, document.body);
      document.querySelector('body').classList.add("spz-3008")
      document.querySelector('.spz-3008 .header-cont').insertAdjacentHTML("beforebegin",`
      <div class="spz-3008-section1">
        <div class="title">Pricing</div>
        <div class="toggle">
          <div class="shadow pos1"></div>
          <button class="spz-3008-toggle-cta spz-3008-solution-toggle-cta active">Solutions</button>
          <button class="spz-3008-toggle-cta spz-3008-individual-toggle-cta">Individual Products</button>
        </div>
        <div class="content-wrapper">
          <div class="solution-parent-wrapper active">
            <div class="child">
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_mobile_3.webp">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_tablet_3.webp">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_desktop_1.webp" alt="Data Security Posture Management" width="594" height="360" >
                </picture>
                <div class="card-title">Data Security Posture Management</div>
                <div class="card-desc">Discover and classify shadow data. Assess and mitigate risks to sensitive data.</div>
                <button data-target="Data Security Posture Management">Request Pricing</button>
              </div>
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_mobile_1.webp">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_tablet_1.webp">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_desktop_1.webp" alt="Identity Threat Detection & Response" width="594" height="360" >
                </picture>
                <div class="card-title">Identity Threat Detection & Response</div>
                <div class="card-desc">Remediate risks, block attacks, detect suspicious activity in real time, and recover rapidly. </div>
                <button data-target="Identity Threat Detection & Response">Request Pricing</button>
              </div>
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governance_mobile_2.webp">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governanceplatform_governance_tablet_1.webp">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governance_desktop_1.webp" alt="Identity Management" width="594" height="360" >
                </picture>
                <div class="card-title">Identity Management</div>
                <div class="card-desc">Secure every identity, streamline every process, and stay ahead of compliance.</div>
                <button data-target="Identity Management">Request Pricing</button>
              </div>
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_m.jpg">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_t.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_d.jpg" alt="Privileged Access Management" width="594" height="360" >
                </picture>
                <div class="card-title">Privileged Access Management</div>
                <div class="card-desc">Stop breaches before they start. Secure privileged access.</div>
                <button data-target="Privileged Access Management">Request Pricing</button>
              </div>
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_mobile_1.webp">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_tablet_1.webp">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_desktop_1.webp" alt="Directory Management" width="594" height="360" >
                </picture>
                <div class="card-title">Directory Management</div>
                <div class="card-desc">Simplify and secure directory operations by managing accounts, passwords, and permissions.</div>
                <button data-target="Directory Management">Request Pricing</button>
              </div>
              <div class="card">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_img_m.jpg">
                  <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_img_t.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_img_d.jpg" alt="Endpoint Management" width="594" height="360" >
                </picture>
                <div class="card-title">Endpoint Management</div>
                <div class="card-desc">Streamline endpoint configuration, security, and compliance management everywhere.</div>
                <button data-target="Endpoint Management">Request Pricing</button>
              </div> 
            </div>
          </div>
          <div class="individual-parent-wrapper">
            <div class="tab-wrapper">
              <div class="tabs">
                <div class="tab active">Data Security <br>Posture Management</div>
                <div class="tab">Identity Threat Detection & Response</div>
                <div class="tab">Identity <br>Management</div>
                <div class="tab">Privileged Access Management</div>
                <div class="tab">Directory  <br>Management</div>
                <div class="tab">Endpoint <br>Management</div>
              </div>
              <select>
                <option>Data Security Posture Management</option>
                <option>Identity Threat Detection & Response</option>
                <option>Identity Management</option>
                <option>Privileged Access Management</option>
                <option>Directory Management</option>
                <option>Endpoint Management</option>
              </select>
              <div class="fake-select">
                <div class="active">Data Security Posture Management</div>
                <div>Identity Threat Detection & Response</div>
                <div>Identity Management</div>
                <div>Privileged Access Management</div>
                <div>Directory Management</div>
                <div>Endpoint Management</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="0.8" y="0.8" width="30.4" height="30.4" rx="5.6" fill="white" fill-opacity="0.1"></rect>
                  <rect x="0.8" y="0.8" width="30.4" height="30.4" rx="5.6" stroke="white" stroke-width="1.6"></rect>
                  <path d="M11.7285 18.5591L16.0004 23.2024L20.2723 18.5591" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M11.7285 13.4404L16.0004 8.7971L20.2723 13.4404" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
            <div class="cards-wrapper">
              <div class="child active">
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/1secure_desktop_1.webp" alt="1Secure" width="594" height="360" >
                  </picture>
                  <div class="card-title">1Secure</div>
                  <div class="card-desc">SaaS-delivered data access auditing and compliance reporting.</div>
                  <button data-target="Netwrix 1Secure DSPM">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzer_mobile_5.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzer_tablet_2.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzer_1.webp" alt="Access Analyzer" width="594" height="360" >
                  </picture>
                  <div class="card-title">Access Analyzer</div>
                  <div class="card-desc">Analyze object-level permissions and other vulnerabilities in AD.</div>
                  <button data-target="Netwrix Access Analyzer">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_mobile_2.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_tablet_2.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_1.webp" alt="Auditor" width="594" height="360" >
                  </picture>
                  <div class="card-title">Auditor</div>
                  <div class="card-desc">Automate data access auditing and compliance reporting, on-premises and in the cloud.</div>
                  <button data-target="Netwrix Auditor">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/data_classification_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/data_classification_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/data_classification_1.webp" alt="Data Classification" width="594" height="360" >
                  </picture>
                  <div class="card-title">Data Classification</div>
                  <div class="card-desc">Automate sensitive data discovery, tagging, and remediation.</div>
                  <button data-target="Netwrix Data Classification">Request Pricing</button>
                </div>
              </div>
              <div class="child">
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzer_mobile_31.jpg">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzeraccess_analyzer_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/enterprise-auditor_d.jpg" alt="Access Analyzer" width="594" height="360" >
                  </picture>
                  <div class="card-title">Access Analyzer</div>
                  <div class="card-desc">Analyze object-level permissions and other vulnerabilities in AD.</div>
                  <button data-target="Netwrix Access Analyzer">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/pingcastle_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/pingcastle_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/pingcastle_desktop_1.webp" alt="PingCastle" width="594" height="360" >
                  </picture>
                  <div class="card-title">PingCastle</div>
                  <div class="card-desc">Identify and remediate risks in your AD and Entra ID.</div>
                  <button data-target="Netwrix PingCastle">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_desktop_1.webp" alt="Recovery for Active Directory" width="594" height="360" >
                  </picture>
                  <div class="card-title">Recovery for Active Directory</div>
                  <div class="card-desc">Roll back unwanted changes, restore AD, and minimize downtime.</div>
                  <button data-target="Netwrix Recovery for Active Directory">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_manager_desktop_1.webp" alt="Threat Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Threat Manager</div>
                  <div class="card-desc">Detect and respond to AD and Entra ID threats in real time.</div>
                  <button data-target="Netwrix Threat Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_prevention_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_prevention_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/threat_prevention_desktop_1.webp" alt="Threat Prevention" width="594" height="360" >
                  </picture>
                  <div class="card-title">Threat Prevention</div>
                  <div class="card-desc">Block undesired AD changes, authentication, and requests in real time.</div>
                  <button data-target="Netwrix Threat Prevention">Request Pricing</button>
                </div>
              </div>
              <div class="child">
               <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/usercube_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/usercubeusercube_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/usercube_desktop_1.webp" alt="Identity Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Identity Manager</div>
                  <div class="card-desc">Ensure proper access rights and compliance with automated IGA.</div>
                  <button data-target="Netwrix Identity Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_desktop_1.webp" alt="Directory Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Directory Manager</div>
                  <div class="card-desc">Automate and delegate directory group and user management.</div>
                  <button data-target="Netwrix Directory Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_policy_enforcer_mobile_3.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_policy_enforcerpassword_policy_enforcer_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_policy_enforcer_desktop_2.webp" alt="Password Policy Enforcer" width="594" height="360" >
                  </picture>
                  <div class="card-title">Password Policy Enforcer</div>
                  <div class="card-desc">Eliminate weak credentials with advanced password policy enforcement.</div>
                  <button data-target="Netwrix Password Policy Enforcer">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/recovery_for_ad_desktop_1.webp" alt="Recovery for Active Directory" width="594" height="360" >
                  </picture>
                  <div class="card-title">Recovery for Active Directory</div>
                  <div class="card-desc">Roll back unwanted changes, restore AD, and minimize downtime.</div>
                  <button data-target="Netwrix Recovery for Active Directory">Request Pricing</button>
                </div>
              </div>
              <div class="child">
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_privilege_m.jpg">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_privilege_t.jpg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_privilege_d2.png" alt="Endpoint Privilege Policy Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Endpoint Privilege Policy Manager</div>
                  <div class="card-desc">Limit standard user privileges and permissions to only what is required.</div>
                  <button data-target="Netwrix Endpoint Policy Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_secure_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_secure_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_secure_desktop_1.webp" alt="Password Secure" width="594" height="360" >
                  </picture>
                  <div class="card-title">Password Secure</div>
                  <div class="card-desc">Securely store, manage, and share user passwords.</div>
                  <button data-target="Netwrix Password Secure">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/privilege_secure_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/privilege_secure_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/privilege_secure_desktop_1.webp" alt="Privilege Secure" width="594" height="360" >
                  </picture>
                  <div class="card-title">Privilege Secure</div>
                  <div class="card-desc">Just-in-time PAM and privileged activity orchestration.</div>
                  <button data-target="Netwrix Privilege Secure">Request Pricing</button>
                </div>
              </div>
              <div class="child">
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/groupid_desktop_1.webp" alt="Directory Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Directory Manager</div>
                  <div class="card-desc">Automate and delegate directory group and user management.</div>
                  <button data-target="Netwrix Directory Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_mobile_3.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_tablet_3.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/auditor_desktop_1.webp" alt="Auditor" width="594" height="360" >
                  </picture>
                  <div class="card-title">Auditor</div>
                  <div class="card-desc">Automate data access auditing and compliance reporting, on-premises and in the cloud.</div>
                  <button data-target="Netwrix Auditor">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_policy_enforcer_mobile_2.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password_policy_enforcer_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/password-policy-enforcer_d.jpg" alt="Password Policy Enforcer" width="594" height="360" >
                  </picture>
                  <div class="card-title">Password Policy Enforcer</div>
                  <div class="card-desc">Eliminate weak credentials with advanced password policy enforcement.</div>
                  <button data-target="Netwrix Password Policy Enforcer">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governance_mobile_2.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governanceplatform_governance_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/platform_governance_desktop_1.webp" alt="Platform Governance" width="594" height="360" >
                  </picture>
                  <div class="card-title">Platform Governance</div>
                  <div class="card-desc">Control NetSuite and Salesforce configuration and changes.</div>
                  <button data-target="Netwrix Platform Governance">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzer_mobile_31.jpg">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/access_analyzeraccess_analyzer_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/enterprise-auditor_d.jpg" alt="Access Analyzer" width="594" height="360" >
                  </picture>
                  <div class="card-title">Access Analyzer</div>
                  <div class="card-desc">Analyze object-level permissions and other vulnerabilities in AD.</div>
                  <button data-target="Netwrix Access Analyzer">Request Pricing</button>
                </div>
              </div>
              <div class="child">
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/change_tracker_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/change_tracker_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/change_tracker_desktop_1.webp" alt="Change Tracker" width="594" height="360" >
                  </picture>
                  <div class="card-title">Change Tracker</div>
                  <div class="card-desc">Benchmark system configurations. Safeguard file Integrity.</div>
                  <button data-target="Netwrix Change Tracker">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_policy_manager_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_policy_manager_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_policy_manager_desktop_1.webp" alt="Endpoint Policy Manager" width="594" height="360" >
                  </picture>
                  <div class="card-title">Endpoint Policy Manager</div>
                  <div class="card-desc">Centralize the management of group policies, endpoint configurations, and settings.</div>
                  <button data-target="Netwrix Endpoint Policy Manager">Request Pricing</button>
                </div>
                <div class="card">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_protector_mobile_1.webp">
                    <source media="(max-width:1259.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_protector_tablet_1.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/3008/endpoint_protector_desktop_1.webp" alt="Endpoint Protector" width="594" height="360" >
                  </picture>
                  <div class="card-title">Endpoint Protector</div>
                  <div class="card-desc">Manage and monitor peripheral device usage on endpoints.</div>
                  <button data-target="Netwrix Endpoint Protector">Request Pricing</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="interest hide">
          <div class="wrapper">
            <div class="title">Interested in more than one product? Get Solution pricing.</div>
            <button class="spz-3008-interest-pricing-cta">Request Pricing</button>
          </div>
        </div>
      </div> 
      <div class="spz-3008-section2">
        <div class="wrapper">
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/logo_05.svg" alt="Gartner Logo" width="115" height="39">
            <div class="bottom">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1754668576/netwrix/1015/stars.svg" alt="Star Icon" width="108" height="20">
              <div class="text">4.7</div>
            </div>
          </div>
          <div class="border"></div>
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/logo_04.svg" alt="Capterra Logo" width="140" height="40">
            <div class="bottom">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/rating_02.svg" alt="Star Icon" width="108" height="20">
              <div class="text">5.0</div>
            </div>
          </div>
          <div class="border"></div>
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/logo_03.svg" alt="TrustRadius Logo" width="175" height="40">
            <div class="bottom">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1751382227/netwrix/3008/rating_45.svg" alt="Star Icon" width="108" height="20">
              <div class="text">4.5</div>
            </div>
          </div>
          <div class="border"></div>
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/logo_02.svg" alt="G2 Logo" width="40" height="40">
            <div class="bottom">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1751382227/netwrix/3008/rating_44.svg" alt="Star Icon" width="108" height="20">
              <div class="text">4.4</div>
            </div>
          </div>
          <div class="border"></div>
          <div class="review">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1747733062/netwrix/3008/logo_01.svg" alt="GetApp Logo" width="130" height="40">
            <div class="bottom">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1751382227/netwrix/3008/rating_45.svg" alt="Star Icon" width="108" height="20">
              <div class="text">4.5</div>
            </div>
          </div>
        </div>
      </div>
      <div class="spz-3008-section3">
        <div class="gartner">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316437/netwrix/1006/frame_3.svg" alt="Gartner Logo" width="155" height="53">
          <div class="border"></div>
          <div class="right">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1754668576/netwrix/1015/stars.svg" alt="Star Icon" width="108" height="20">
            <div class="text"><strong>4.7</strong><span>(206 reviews)</span><sup>*</sup></div>
          </div>
        </div>
        <div class="slider-wrapper">
          <section class="splide splide1">
              <div class="splide__track"> 
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“Extremely versatile product that is easy to use and quick to learn.”</div>
                      <div class="user-info">
                          <div class="position">Technical Director</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/data-center-others/vendor/netwrix/product/netwrix-recovery-for-active-directory/review/view/5711966">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“It's straightforward to deploy. Easy to configure policies. We can create policies with a single click.”</div>
                      <div class="user-info">
                          <div class="position">IT Security & Risk Management Associate</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/data-loss-prevention/vendor/cososys/product/endpoint-protector/review/view/5554604">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“Netwrix GroupID is a robust identity management and active directory group management solution. It simplifies the process of managing dynamic groups...</div>
                      <div class="user-info">
                          <div class="position">IT Specialist Engineer</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/identity-governance-administration/vendor/netwrix/product/netwrix-groupid/review/view/5732140">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“My experience with Netwrix Auditor has been highly positive. It stands out as a robust and comprehensive solution for IT auditing and security.”</div>
                      <div class="user-info">
                          <div class="position">Systems Engineer</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource to validate your compliance level against security standard frameworks like Iso2700x and many others or against laws or Directives (i.e. GDPR).”</div>
                      <div class="user-info">
                          <div class="position">IT Manager</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“It just works once set-up. Setting it up is easy as always supported on call.”</div>
                      <div class="user-info">
                          <div class="position">Lead System Admin</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/identity-governance-administration/vendor/netwrix/product/netwrix-groupid/review/view/5733154">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1731316438/netwrix/1006/stars_10.svg" alt="Star Icon" width="108" height="20" >
                      <div class="quote">“Different architectural designs to fit our company strategy, the ease of deployment and configuration, delivers value from day 1!”</div>
                      <div class="user-info">
                          <div class="position">Senior Manager IT Operations</div>
                          <a target="_blank" href="https://www.gartner.com/reviews/market/privileged-access-management/vendor/netwrix/product/netwrix-privilege-secure-for-access-management/review/view/5222542">Read Full Review</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
        </div>
      </div>
      `)

      //slider
      gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
        let splide;
        splide = new Splide('.spz-3008 .spz-3008-section3 .splide1', {
          type   : 'loop',
          autoplay: true,
          perPage: 3,
          gap: '20px',
          perMove: 1,
          interval:4000,
          speed:3000,
          arrows: true,
          breakpoints: {
            1259.98: {
              perPage: 2,
            },
            757.98: {
              perPage: 1,
            },
          },
          arrowPath:
				'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
        });
        splide.mount();
      },document.body)
      //event listener
      document.querySelector('.spz-3008 .spz-3008-section1 .toggle').addEventListener("click",function(e){
        if(e.target.closest(".spz-3008 .spz-3008-section1 .toggle button") && e.target.classList.contains("active")==false){
          if(e.target.classList.contains("spz-3008-solution-toggle-cta")){
            document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.remove("pos2")
            document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.add("pos1")
            document.querySelector('.spz-3008-individual-toggle-cta').classList.remove("active")
            document.querySelector('.spz-3008-solution-toggle-cta').classList.add("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(2)').classList.remove("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(1)').classList.add("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .interest').classList.add("hide")
          } else {
            document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.remove("pos1")
            document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.add("pos2")
            document.querySelector('.spz-3008-solution-toggle-cta').classList.remove("active")
            document.querySelector('.spz-3008-individual-toggle-cta').classList.add("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(1)').classList.remove("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(2)').classList.add("active")
            document.querySelector('.spz-3008 .spz-3008-section1 .interest').classList.remove("hide");
          }
        }
      })
      document.querySelector('.spz-3008 .spz-3008-interest-pricing-cta').addEventListener("click",function(){
        document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.remove("pos2")
        document.querySelector('.spz-3008 .spz-3008-section1 .toggle .shadow').classList.add("pos1")
        document.querySelector('.spz-3008-individual-toggle-cta').classList.remove("active")
        document.querySelector('.spz-3008-solution-toggle-cta').classList.add("active")
        document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(2)').classList.remove("active")
        document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div:nth-child(1)').classList.add("active")
        document.querySelector('.spz-3008 .spz-3008-section1 .interest').classList.add("hide")
         let scroll = new SmoothScroll();
          scroll.animateScroll(document.querySelector('.spz-3008 .spz-3008-section1').getBoundingClientRect().y + scrollY , null, {
            easing: 'easeOutQuad',
            speed: 500,
          });
      })
      document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper').addEventListener("click",function(e){
        if(e.target.closest(".card") && e.target.closest(".card").querySelector('[data-target]')){
          if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Data Security Posture Management"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-b9ac4e0d1057b6c40ee41be1870c6c4c73917741")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","dspm")
            },50)

          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Identity Threat Detection & Response"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-bd10c790cea00d7dc68be9684b58b7e4db08f743")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","itdr")
            },50)
          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Identity Management"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-e8437e0a211f99e454842d63009540acbd28b8f2")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","idmgt")
            },50)
          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Privileged Access Management"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-af0e7d7390592cc9e4c24c1427ec667f15f36dc1")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","none")
            },50)
          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Directory Management"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-64005b793503162ef8e34ca98928853dc4ea15bc")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","dirmgt")
            },50)
          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Endpoint Management"){
            findByText("div","Netwrix 1Secure DSPM  for MSPs").parentNode.querySelector(".cta button").click()
            setTimeout(function(){
              const allStyledDivs = document.querySelectorAll('body > div[style]');
              const emptyStyleDivs = Array.from(allStyledDivs).filter(div => div.getAttribute('style') === '');
              emptyStyleDivs[0].querySelector('form').setAttribute("id","form-app-f286051a19410a367110d3fa9fc485e1ef15beed")
              emptyStyleDivs[0].querySelector('form #ModalForm_product').setAttribute("value","epmgt")
            },50)
          } else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")=="Netwrix PingCastle"){
            window.open('https://www.pingcastle.com/services/', '_blank');
          }   
          else if(e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")!="Netwrix PingCastle") {
            findByText("div",e.target.closest(".card").querySelector('[data-target]').getAttribute("data-target")).parentNode.querySelector(".cta button").click()
          }
          
        }
      })
      document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs').addEventListener("click",function(e){
        if(e.target.closest(".spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab")){
         setActiveTab(e.target)
        }
      })
      document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper select').addEventListener("change",function(){
        setActiveTab(document.querySelector('.spz-3008 .spz-3008-section1 .content-wrapper > div.individual-parent-wrapper .tab-wrapper .tabs .tab:nth-child('+(this.selectedIndex+1)+')'))
      })
      const footerNote =  document.querySelector('.footer .footer-note');
      if (footerNote) {
        footerNote.textContent = footerNote.textContent.replace('4.5', '4.7').replace('143', '206').trim();
      }
    }
  },10)
  setTimeout(function(){
    clearInterval(bodyInterval3008)
  },7000)
})();
