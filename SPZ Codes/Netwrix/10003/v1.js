const bodyInterval10003 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_10003')) {
    clearInterval(bodyInterval10003)

    const indexInParent = (node) => {
      var children = node.parentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
      }
      return -1;
    }

    var splideScript = document.createElement('script');
    splideScript.src =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    var splideStyle = document.createElement('link');
    splideStyle.rel = 'stylesheet';
    splideStyle.type = 'text/css';
    splideStyle.href =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.body.appendChild(splideScript);
    document.body.appendChild(splideStyle);

    document.querySelector('body').classList.add("spz_10003");
    document.querySelector('html').classList.add("spz_10003");
    document.querySelector('.spz_10003 header').insertAdjacentHTML('beforebegin', `
      <div class="spz_10003-section">
        <div class="wrapper">
          <div class="header">
            <a class="logo" href="//www.netwrix.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/logo__white_1.svg" width="178" height="40" alt="Netwrix Logo"></a>
            <div class="language-button">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/language_2.svg" alt="World Icon" width="32" height="32">
              <ul>
              </ul>
            </div>
          </div>
          <div class="form-section">
            <div class="left">
              <h3>Data security posture management</h3>
              <div class="title">
                Identify & mitigate data risks across IT systems
              </div>
              <div class="list">
                <div><strong>Identification.</strong> Detect threats & minimize risks. Get alerted on unusual activity, anomalous behaviour, and critical events.</div>
                <div><strong>Mitigation.</strong> Auto-quarantine exposed files, delete old records, & enforce custom security policies. Eliminate security gaps.</div>
                <div><strong>Compliance.</strong> Track user activity and file changes. Generate audit-ready reports for NIST, GDPR, HIPAA, ISO/IEC, & more.</div>
              </div>
            </div> 
            <div class="right">
              <div class="form-wrapper"><div class="load-wrapper"><div class="lds-dual-ring"></div></div></div>
            </div>
          </div>
          <div class="trusted">
            <div class="title">Trusted by 13,500+ organizations</div>
            <div class="logo-section">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489370/netwrix/2001/frame_1171276164.svg" alt="Airbus Logo" width="128" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489372/netwrix/2001/frame_1171276165.svg" alt="Virgin Logo" width="88" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489368/netwrix/2001/frame_1171276163.svg" alt="Denso Logo" width="128" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489367/netwrix/2001/frame_1171276162.svg" alt="Allianz Logo" width="167" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/10003/image_1.webp" alt="Geneva Foundation Logo" width="164" height="49" >
            </div>
          </div>

        </div>
      </div>
      
      <div class="performance">
        <div class="auto_container">
          <div class="performance_inner">
            <div class="performance_list">
              <ul>
                <li>
                  <div class="performance_data">
                    <strong>
                      85%
                      <span>less time <br>
                        auditing</span>
                    </strong>
                    <p>Extremely helpful. I can investigate an incident in a few clicks, whereas before it would take hours to dig through logs.</p>
                    <small>
                      <span>
                        <strong>Boytcho Boytchev</strong>
                        <i>Information Security Officer</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1015/logo-credissimo.webp" alt="credissimo" width="80" height="48">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      90%
                      <span>faster <br>
                        compliance</span>
                    </strong>
                    <p>The best tool. It provides quality reporting to help us comply with regulations and decrease the time spent.</p>
                    <small>
                      <span>
                        <strong>Predrag Škundrić</strong>
                        <i>CISO</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-api-bank.svg" alt="API bank" width="59.1" height="45">
                    </small>
                  </div>
                </li>
                <li>
                  <div class="performance_data">
                    <strong>
                      6X
                      <span>faster <br>
                        audits</span>
                    </strong>
                    <p>Netwrix Auditor gathers all the data we need for internal audits while taking the usual 2–3 hours down to 30 minutes.</p>
                    <small>
                      <span>
                        <strong>Cody Lavallee</strong>
                        <i>IT Infra Manager</i>
                      </span>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1746090103/netwrix/1015/logo-progress-residential.svg" alt="progress residential" width="111" height="48">
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section class="customSPZ accrodion-section">
        <div class="container">
          <div class="Features-accordion accordion-set">
            <h2>Features</h2>
            <div class="content-wrap">
              <div class="content-part">

                <div class="accordion">
                  <div class="accor-title">
                    <h4>Risk assessment</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z"
                        fill="#354556"></path>
                    </svg>
                  </div>
                  <div class="accor-paratexts">
                    <p>View a list of current vulnerabilities and their associated risk level. Includes passwordless users, loose permissions, sensitive data in filenames, and more. See which vulnerabilities are most critical and prioritize remediation.</p>
                    <p>Easily adjust risk thresholds so you only see what impacts your organization. </p>
                    <div class="ctaWrapper">
                      <a class="spz_10003_v1 free_trial" href="javascript:void(0);">Get a free trial</a>
                    </div>
                  </div>
                  <div class="img-wrap">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/risk_assessment-img.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/risk_assessment-img.webp"
                        alt="Risk_assessment_image">
                    </picture>
                  </div>
                </div>

                <div class="accordion ">
                  <div class="accor-title">
                    <h4>Threat detection</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z"
                        fill="#354556"></path>
                    </svg>
                  </div>
                  <div class="accor-paratexts">
                    <p>Identify threats and security gaps across your IT environment. Unusual logins, suspicious admin activity, multiple inactive users, and more.</p>
                    <p>Get alerts before breaches or system failures occur. Investigate and remediate risks. </p>
                    <div class="ctaWrapper">
                      <a class="spz_10003_v1 free_trial" href="javascript:void(0);">Get a free trial</a>
                    </div>
                  </div>
                  <div class="img-wrap">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp">
                      <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp"
                        alt="Threat_detection_image">
                    </picture>
                  </div>
                </div>

                <div class="accordion">
                  <div class="accor-title">
                    <h4>Change, access, and configuration reporting</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z"
                        fill="#354556"></path>
                    </svg>
                  </div>
                  <div class="accor-paratexts">
                    <p>Get detailed reports on environment changes, access permissions, and configurations.</p>
                    <p>See who changed what, when, and where. Rollback unauthorized changes. Identify who can access sensitive folders & correct loose permissions. View reports of critical systems at any given date. Compare with current configurations. </p>
                    <p>Covers Active Directory, user accounts, Windows Server, and more. </p>
                    <div class="ctaWrapper">
                      <a class="spz_10003_v1 free_trial" href="javascript:void(0);">Get a free trial</a>
                    </div>
                  </div>
                  <div class="img-wrap">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp"
                        alt="Change_access_and_configuration_reporting_image">
                    </picture>
                  </div>
                </div>

                <div class="accordion">
                  <div class="accor-title">
                    <h4>Access reviews</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.46764 12.5326C8.60816 12.6723 8.79825 12.7507 8.99639 12.7507C9.19453 12.7507 9.38462 12.6723 9.52514 12.5326L15.5251 6.53264C15.648 6.38916 15.7122 6.20461 15.7049 6.01585C15.6976 5.82709 15.6194 5.64804 15.4858 5.51447C15.3522 5.3809 15.1732 5.30265 14.9844 5.29536C14.7957 5.28806 14.6111 5.35227 14.4676 5.47514L9.00014 10.9426L3.53264 5.46764C3.39141 5.32641 3.19987 5.24707 3.00014 5.24707C2.80041 5.24707 2.60887 5.32641 2.46764 5.46764C2.32641 5.60887 2.24707 5.80041 2.24707 6.00014C2.24707 6.19987 2.32641 6.39141 2.46764 6.53264L8.46764 12.5326Z"
                        fill="#354556"></path>
                    </svg>
                  </div>
                  <div class="accor-paratexts">
                    <p>Manage access, policies, and identities to ensure the right users have access to the right resources at
                      the right time. Reduce IT workload with automated workflows and self-service.</p>
                    <div class="ctaWrapper">
                      <a class="spz_10003_v1 free_trial" href="javascript:void(0);">Get a free trial</a>
                    </div>
                  </div>
                  <div class="img-wrap">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp"
                        alt="Access_reviews_image">
                    </picture>
                  </div>
                </div>

              </div>

              <div class="slide-part">
                <div class="accordion_images">
                  <div class="image-container slide-1 active">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/risk_assessment-img.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/risk_assessment-img.webp"
                        alt="Risk_assessment_image">
                    </picture>
                  </div>
                  <div class="image-container slide-2">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp">
                      <img
                        src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/threat_detection-img.webp"
                        alt="Threat_detection_image">
                    </picture>
                  </div>
                  <div class="image-container slide-3">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/change_access-img.webp"
                        alt="Change_access_and_configuration_reporting_image">
                    </picture>
                  </div>
                  <div class="image-container slide-4">
                    <picture>
                      <source media="(max-width:1023px)"
                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/6003/access_reviews-img_2.webp"
                        alt="Access_reviews_image">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="brodcast_section">
        <div class="broadcast_inner">
          <div class="broad_detail">
            <h2>Broadest coverage</h2>
            <p>Reports on user activity across all of your on-premises or cloud-based IT systems in a unified way.</p>
            <a href="javascript:vodi(0)" class="custom_btn free_trial spz_10003_v1">Get a free trial</a>
          </div>
          <div class="case_studySection">
            <div class="splide caseStudySlider" id="logo_slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="slider_main">
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219884/netwrix/10003/logo_09.svg" alt="Actice Directory">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219899/netwrix/10003/logo_27.svg" alt="NetApp">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219891/netwrix/10003/logo_23.svg" alt="Microsoft SQL Server">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219889/netwrix/10003/logo_22.svg" alt="Dell">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219897/netwrix/10003/logo_26.svg" alt="Windows">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219888/netwrix/10003/logo_21.svg" alt="Microsoft SharePoint">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219893/netwrix/10003/logo_24.svg" alt="Oracle">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219895/netwrix/10003/logo_25.svg" alt="Microsoft Exchange">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219884/netwrix/10003/logo_19.svg" alt="Microsoft Azure Active Directory">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219886/netwrix/10003/logo_20.svg" alt="VMware">
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="slider_main">
                             <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219884/netwrix/10003/logo_09.svg" alt="Active Directory">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219899/netwrix/10003/logo_27.svg" alt="NetApp">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219891/netwrix/10003/logo_23.svg" alt="Microsoft SQL Server">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219889/netwrix/10003/logo_22.svg" alt="Dell">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219897/netwrix/10003/logo_26.svg" alt="Windows">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219888/netwrix/10003/logo_21.svg" alt="Microsoft SharePoint">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219893/netwrix/10003/logo_24.svg" alt="Oracle">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219895/netwrix/10003/logo_25.svg" alt="Microsoft Exchange">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219884/netwrix/10003/logo_19.svg" alt="Microsoft Azure Active Directory">
                        </figure>
                      </div>
                      <div class="slider_data">
                        <figure>
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1747219886/netwrix/10003/logo_20.svg" alt="VMware">
                        </figure>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="new_footerOuter">
        <div class="auto_container">
          <div class="new-footer">
            <div class="copyright">&copy; 2025 Netwrix Corporation</div>
            <div class="links">
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/privacy_eu.html">EU Privacy Policy</a>
              <a href="/eula.html">EULA</a>
              <a href="https://www.netwrix.com/download/documents/Modern_Slavery_Policy.pdf" target="_blank"
                rel="noopener">Modern
                Slavery Statement</a>
            </div>
          </div>
          <div class="footer-note">
            * Result is as of 11/14/2024. 4.5 rating is based on 186 reviews in the File Analysis Software market. Gartner® and Peer Insights™ are trademarks of Gartner, Inc. and/or its affiliates. All rights reserved. Gartner Peer Insights content consists of the opinions of individual end users based on their own experiences, and should not be construed as statements of fact, nor do they represent the views of Gartner or its affiliates. Gartner does not endorse any vendor, product or service depicted in this content nor makes any warranties, expressed or implied, with respect to this content, about its accuracy or completeness, including any warranties of merchantability or fitness for a particular purpose.
          </div>
        </div>
      </div>

    `)

    // copy nav list item
    if (document.querySelector('.spz_10003 .spz_10003-section .header .language-button ul') && document.querySelector('.spz_10003 .navbar-language .navbar-dropdown')) {
      document.querySelector('.spz_10003 .spz_10003-section .header .language-button ul').innerHTML = document.querySelector('.spz_10003 .navbar-language .navbar-dropdown').innerHTML;
    }

    //move form & modification add delay
    setTimeout(function () {
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .load-wrapper').remove();
      var button = document.querySelector(".one-field-form-button-test [id^='app-']");
      var buttonID = button.id;
      const formId = `form-${buttonID}`;
      const formContainer = document.querySelector(`#${formId}`).closest('.v-modal-container');
      formContainer.classList.add('spz_modal');
      document.querySelector(".spz_modal #ModalForm_nwf_email").placeholder = "Work Email";
      document.querySelector('.spz_modal #ModalForm_nwf_email').closest('div').insertAdjacentHTML('beforebegin', `
        <div class="">
          <input placeholder="First Name" value="" name="ModalForm[nwf_firstName]" id="ModalForm_nwf_firstName" type="text" class="form-control input">
        </div>
        <div class="">
          <input placeholder="Last Name" value="" name="ModalForm[nwf_lastName]" id="ModalForm_nwf_lastName" type="text" class="form-control input">
        </div> 
      `);
      document.querySelector('.spz_modal #ModalForm_nwf_email').closest('div').insertAdjacentHTML('afterend', `
        <div class="">
          <input placeholder="Phone" value="" name="ModalForm[nwf_phone]" id="ModalForm_nwf_phone" type="number" class="form-control input">
        </div>
      `);
      document.querySelector('.spz_modal .form-title').insertAdjacentHTML('afterend', `
      <div class="review">
        <div class="text mobile">
          <span>4.5</span>
          <span>(186 reviews)</span>
          <sup>*</sup>
        </div>
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1747219884/netwrix/10003/logo_gartner.svg" alt="Gartner Logo" width="98" height="35" >
        <div class="right-logo-text">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1751298102/netwrix/10003/stars_2.svg" alt="Stars Icon" width="108" height="20" >
          <div class="text desktop">
            <span>4.5</span>
            <span>(186 reviews)</span>
            <sup>*</sup>
          </div>
        </div>
      </div> 
      `);

      const wrapperIndex = indexInParent(document.querySelector('.spz_modal').closest('.v-modal-mask'));
      // console.log(wrapperIndex);
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper').insertAdjacentElement("afterbegin", document.querySelectorAll('.spz_10003 .spz_modal .wrapDialogForm ')[wrapperIndex])

      //change html
      const addingClass = () => {
        const inputParent = document.querySelectorAll('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form > div:not(.modelFormError)')
        for (let i = 0; i < inputParent.length; i++) {
          if (!inputParent[i].classList.contains("width50")) {
            inputParent[i].classList.add("width50");
          }
        }
      }

      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .form-title').innerHTML = "Get a free trial"
      const inputParent = document.querySelectorAll('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form > div:not(.modelFormError)')
      for (let i = 0; i < inputParent.length; i++) {
        addingClass()
        //add label
        if (inputParent[i].querySelector('input')) {
          inputParent[i].querySelector('input').insertAdjacentHTML("afterend", `<label for="${inputParent[i].querySelector('input').getAttribute("id")}">${inputParent[i].querySelector('input').getAttribute("placeholder")}</label>`)
        }
      }

      //button 
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .btn').value = "Submit";
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .btn').classList.add('spz_10003_v1')
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .btn').insertAdjacentHTML('beforebegin', `
        <span class="btn btn_filled_red btn-red-fill form_btnTwo show spz_10003_v1">Submit</span>
      `);

      //disclaimer
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .securityInfo').childNodes[0].textContent = "We care about the security of your data.";

      //event listener
      //input even listerer
      const allInput = document.querySelectorAll('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .width50 input');
      function labelChange(e) {
        if (e.value == '' || e.value == null) {
          e.closest(".width50").classList.remove("hasValue");
        } else if (e.value != '' || e.value != null) {
          e.closest(".width50").classList.add("hasValue");
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

      //button click check label
      document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  .btn').addEventListener("click", function () {
        let i = 0;
        const labelInterval = setInterval(function () {
          allInput.forEach(function (e) {
            e.addEventListener('blur', () => {
              labelChange(e);
            }, true);
            e.addEventListener('change', () => {
              labelChange(e);
            }, true);
            labelChange(e);
          })
          i++;
          if (i > 80) {
            clearInterval(labelInterval)
          }
        }, 10)

      })

      // document.querySelectorAll('.spz_10003 .spz_10003-section .form-section .right .form-wrapper input').forEach(input => {
      //   input.addEventListener('keyup', function () {
      //     const firstName = document.querySelector('#ModalForm_nwf_firstName')?.value.trim() || "";
      //     const lastName = document.querySelector('#ModalForm_nwf_lastName')?.value.trim() || "";
      //     const phone = document.querySelector('#ModalForm_nwf_phone')?.value.trim() || "";
      //     const phoneDigits = phone.replace(/\D/g, ""); // Strip non-digits
      //     const isValid = firstName !== "" && lastName !== "" && phoneDigits.length >= 10;
      //     const formBtnTwo = document.querySelector('.form_btnTwo');
      //     if (isValid) {
      //       formBtnTwo?.classList.remove('show');
      //       removeError();
      //     } else {
      //       formBtnTwo?.classList.add('show');
      //     }
      //   });
      // });

      if (document.querySelector('.right #SPZ_Test')) {
        document.querySelector('.right #SPZ_Test').value = 'variant_10003';
      }

      function updatedText() {
        const errMsg = document.querySelector('.spz_10003-section .form-section .right .form-wrapper .modelFormError');
        if (errMsg) {
          let html = errMsg.innerHTML;

          if (html.includes('Business Email')) {
            errMsg.closest('.form-horizontal').classList.add('er_1');
            errMsg.closest('.form-horizontal').classList.remove('er_2');
          } else if (html.includes('business e-mail')) {
            errMsg.closest('.form-horizontal').classList.add('er_2');
            errMsg.closest('.form-horizontal').classList.remove('er_1');
          }
        }
      }

      //obeserv the form error class 
      const targetNode = document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form .modelFormSubmit');
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationList, observer) => {
        addingClass();
        updatedText();
        if (document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper #ModalForm_nwf_email')) {
          document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper #ModalForm_nwf_email').placeholder = "Work Email"
        }
        if (document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .modelFormSubmit').value !== "Submit") {
          document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .modelFormSubmit').value = "Submit"
        }
        if (document.querySelector('html').classList.contains('is-clipped')) {
          document.querySelector('html').classList.remove('is-clipped')
        }
      }
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }, 1500)


    // accordion Function
    var accordionSets = document.querySelectorAll(".accordion-set");
    var firstAccordion = accordionSets[0].querySelectorAll('.accordion')
    firstAccordion[0].classList.add('active')
    firstAccordion[0].classList.remove('active')
    setTimeout(() => {
      firstAccordion[0].classList.add('active')
    }, 1000);
    // Function to activate the next accordion
    function activateNextAccordion(accordionSet, targetIndex = -1) {
      var accordions = accordionSet.querySelectorAll(".accordion");
      var imageContainers = accordionSet.querySelectorAll(
        ".accordion_images .image-container"
      );
      var currentIndex = Array.from(accordions).findIndex((acc) =>
        acc.classList.contains("active")
      );

      accordions.forEach(function (acc) {
        acc.classList.remove("active");
      });
      imageContainers.forEach(function (imgContainer) {
        imgContainer.classList.remove("active");
      });

      var nextIndex;
      if (targetIndex !== -1) {
        nextIndex = targetIndex;
      } else {
        nextIndex = (currentIndex + 1) % accordions.length;
      }
      // Add 'active' class to the next accordion and corresponding image container in the current set
      accordions[nextIndex].classList.add("active");
      imageContainers[nextIndex].classList.add("active");
    }
    // Function to handle click event and activate accordion
    function handleAccordionClick(event) {
      var clickedAccordion = event.target.closest(".accordion");
      if (clickedAccordion) {
        var accordionSet = clickedAccordion.closest(".accordion-set");
        var targetIndex = Array.from(
          accordionSet.querySelectorAll(".accordion")
        ).indexOf(clickedAccordion);

        // Clear the interval for the clicked set
        clearInterval(accordionSet.intervalId);
        // Activate the clicked accordion immediately
        activateNextAccordion(accordionSet, targetIndex);
        if (window.innerWidth < 1023) {
          // Scroll the clicked accordion to the top of the window with a 30px offset
          var offset = 120; // Adjust the offset as needed
          var rect = clickedAccordion.getBoundingClientRect();
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({
            top: rect.top + scrollTop - offset,
            behavior: "smooth",
          });
        }
      }
    }

    // Function to handle mouse enter event and stop autoplay
    function handleAccordionSetEnter(event) {
      var accordionSet = event.currentTarget;
      clearInterval(accordionSet.intervalId);
    }

    // Function to handle mouse leave event and resume autoplay
    function handleAccordionSetLeave(event) {
      var accordionSet = event.currentTarget;
    }

    // Set interval to automatically activate the next accordion every 30 seconds for each set
    accordionSets.forEach(function (accordionSet) {
      accordionSet.addEventListener("mouseenter", handleAccordionSetEnter);
      accordionSet.addEventListener("mouseleave", handleAccordionSetLeave);
    });

    // Add click event listener to each accordion set
    accordionSets.forEach(function (accordionSet) {
      accordionSet.addEventListener("click", handleAccordionClick);
    });

    // slider js
    function playSlider() {
      var caseStudySlider = new Splide('.caseStudySlider', {
        type: 'loop',
        autoWidth: true,
        arrows: false,
        pagination: false,
        focus: 'center',
        drag: false,
        speed: 50000,
        easing: 'linear',
        waitForTransition: true,
        autoplay: true,
        interval: 0,
        pauseOnHover: false,
        pauseOnFocus: false,
      });

      setTimeout(function () {
        caseStudySlider.mount();
      }, 500);
      window.dispatchEvent(new Event('resize'));
    }

    window.addEventListener('click', function (e) {
      if (e.target.classList.contains('form_btnTwo')) {
        console.log('Button clicked');
        const firstName = document.querySelector('#ModalForm_nwf_firstName')?.value.trim() || "";
        const lastName = document.querySelector('#ModalForm_nwf_lastName')?.value.trim() || "";
        const phone = document.querySelector('#ModalForm_nwf_phone')?.value.trim() || "";
        const email = document.querySelector('#ModalForm_nwf_email')?.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);
        if (emailValid) {
          document.querySelector('.spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form #ModalForm_nwf_email').closest('.width50').classList.add('email_valid');
        } else {
          document.querySelector('.spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form #ModalForm_nwf_email').closest('.width50').classList.remove('email_valid');
        }

        // Extract digits from phone
        const phoneDigits = phone.replace(/\D/g, "");

        // Check if all required fields are filled and phone number is valid
        if (firstName && lastName && phoneDigits.length >= 10) {
          setTimeout(() => {
            removeError();
          }, 1000);
          // e.target.classList.remove('show');
          document.querySelector('.spz_10003-section .form-section .right .form-wrapper .wrapDialogForm  form .modelFormSubmit').click();

        } else {
          setTimeout(() => {
            showError();
          }, 1000);
          // document.querySelector('#ModalForm_nwf_email').closest('.width50').classList.remove('error');
        }
      }
      if (e.target.classList.contains('free_trial')) {
        e.preventDefault();
        const target = document.querySelector('.right .wrapDialogForm');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }

      }
    });

    function showError() {
      removeError();
      let errorMsg = document.querySelector('.error-message');
      var fieldName = "";
      var phoneInput = document.querySelector('#ModalForm_nwf_phone')?.value.trim() || "";
      if (document.querySelector('#ModalForm_nwf_firstName')?.value.trim() === "") {
        fieldName = "First Name";
        document.querySelector('#ModalForm_nwf_firstName').closest('.width50').classList.add('error');
      } else if (document.querySelector('#ModalForm_nwf_lastName')?.value.trim() === "") {
        fieldName = "Last Name";
        document.querySelector('#ModalForm_nwf_lastName').closest('.width50').classList.add('error');
      } else if (phoneInput === "" || phoneInput.replace(/\D/g, "").length < 10) {
        fieldName = "Phone";
        document.querySelector('#ModalForm_nwf_phone').closest('.width50').classList.add('error');
      }
      if (!errorMsg) {
        document.querySelector('.spz_10003 .spz_10003-section .form-section .right .form-wrapper .modelFormError').insertAdjacentHTML('beforebegin',
          ` <div class="modelFormError v-show error-message">${fieldName} cannot be blank.</div>`
        );
      }
    }


    function removeError() {
      document.querySelector('#ModalForm_nwf_firstName').closest('.width50').classList.remove('error');
      document.querySelector('#ModalForm_nwf_lastName').closest('.width50').classList.remove('error');
      document.querySelector('#ModalForm_nwf_phone').closest('.width50').classList.remove('error');
      const errorMsg = document.querySelector('.error-message');
      if (errorMsg) {
          errorMsg.remove();
      }
    }

    // testimoial 
    //DEV 2/7. Set splide slider settings.
    const sliderSettings = {
      type: 'loop',
      autoplay: true,
      gap: 12,
      perPage: 3,
      slidperMove: 1,
      speed: 3000,
      breakpoints: {
        991: {
          slidperMove: 2,
          perPage: 2,
        },
        767: {
          slidperMove: 1,
          perPage: 1,
        },
      },
      arrowPath:
        'M3.3071 10.7869L11.2992 2.79487C11.8085 2.28549 11.8085 1.45962 11.2992 0.950245C10.7898 0.440866 9.96391 0.440866 9.45453 0.950245L1.46247 8.9423C0.953093 9.45168 0.953093 10.2775 1.46247 10.7869C1.97185 11.2963 2.79772 11.2963 3.3071 10.7869Z M11.2987 17.2029L3.30665 9.21089C2.79727 8.70151 1.9714 8.70151 1.46203 9.21089C0.952646 9.72027 0.952646 10.5461 1.46203 11.0555L9.45408 19.0476C9.96346 19.5569 10.7893 19.5569 11.2987 19.0476C11.8081 18.5382 11.8081 17.7123 11.2987 17.2029Z',
    };
    let ratingInfo = {};
    let slides = [];


    //DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
    ratingInfo = {
      ratingCompany:
        '<img src="//res.cloudinary.com/spiralyze/image/upload/v1729152023/netwrix/6002/peer-insights-r-tm-rgb-for-white-bkgrnd_1.svg" alt="Gartner Logo">',
      ratingStars:
        '<img src="//res.cloudinary.com/spiralyze/image/upload/v1741851883/netwrix/6002/stars_8.svg" alt="Stars rating"/>',
      rating: '4.5',
      reviewsCount: '<span>(186 reviews)*</span>',
    };
    //DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J

    slides = [
      {
        starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
        reviewCopy: `“It does exactly what it's advertised to do. Overall the product provides some of the best SharePoint..”`,
        authorName: 'Systems Engineering Manager',
        ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5218928?step=register'
      },
      {
        starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
        reviewCopy: `“The product is solid and affordable, plenty of features that are well organized. A lot of out of the box reports are a great resource...”`,
        authorName: 'IT Manager',
        ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713560'
      },
      {
        starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
        reviewCopy: `“A reasonable price for what is offered. The product does what it says. Empowers Information Security and Governance in order to reduce...”`,
        authorName: 'Engineering Manager',
        ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5334748'
      },
      {
        starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
        reviewCopy: `“The product is quite easy to use and straight forward and very robust for our company's needs. It is easy to train new staff on the use...”`,
        authorName: 'IT Administrator',
        ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5514524'
      },
      {
        starRating: '//res.cloudinary.com/spiralyze/image/upload/v1727859204/netwrix/6002/stars.svg',
        reviewCopy: `"Help to provide evidences to IT Audit and monitor activities for Compliance..."`,
        authorName: 'IT Associate',
        ReadFullReviewURL: 'https://www.gartner.com/reviews/market/file-analysis-software/vendor/netwrix/product/netwrix-auditor/review/view/5713590'
      }
    ];

    //DEV 5/7. Set unique selector of target setion where you want review ribbon to appear
    const sectionSelector = `.brodcast_section`

    //DEV 6/7. Choose where reviews ribbon should appear.  Set "before" or "after".
    const placement = 'after'

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/

    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }
    function insertBefore(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode);
    }
    function addReviewRibbon(
      sliderSettings,
      ratingInfo,
      slides,
      whereToAdd,
      selector
    ) {
      var reviewRibbon = document.createElement('div');
      reviewRibbon.classList.add('spz-review-ribbon');
      reviewRibbon.innerHTML = `
    <div class="review-container">
      <div class="review-left">
        ${ratingInfo.ratingCompany.replace(/\s/g, '').length !== 0
          ? ratingInfo.ratingCompany
          : ``
        }
        <span class="line"></span>
        <div class="reviewRating">
        ${ratingInfo.ratingStars.replace(/\s/g, '').length !== 0
          ? ratingInfo.ratingStars
          : ``
        }
        ${ratingInfo.rating.replace(/\s/g, '').length !== 0
          ? `<div class="reviews-count">${ratingInfo.rating} ${ratingInfo.reviewsCount}</div>`
          : ``
        }
        </div>
        
      </div>
      <div class="review-right">
          <div class="splide review_slider" role="group">
            <div class="splide__track">
              <ul class="splide__list">
                ${slides.map((slide) => {
          return `
                  <li class="splide__slide">
                    <div class="review-content">
                      <div class="review-heading">
                      ${slide.starRating.replace(/\s/g, '')
              .length !== 0
              ? `<img src="${slide.starRating}" alt="5 Star rating" />`
              : ``
            }
                      </div>
                      ${slide.reviewCopy.replace(/\s/g, '')
              .length !== 0
              ? `<div class="review-copy">${slide.reviewCopy}</div>`
              : ``
            }
                      
                      <div class="review-author">
                      ${slide.authorName.replace(/\s/g, '')
              .length !== 0
              ? `<div class="author-name">${slide.authorName}</div>`
              : ``
            }
                      <a href="${slide.ReadFullReviewURL}" target="_blank">Read Full Review</a>

                    </div>
                  </div>
                </li>
                `;
        }).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
      if (whereToAdd === 'after') insertAfter(reviewRibbon, document.querySelector(selector));
      if (whereToAdd === 'before') insertBefore(reviewRibbon, document.querySelector(selector));

      new Splide('.review_slider', sliderSettings).mount();
    }
    splideScript.onload = function () {
      addReviewRibbon(sliderSettings, ratingInfo, slides, placement, sectionSelector);
      playSlider();
    };


  }
}, 10)
