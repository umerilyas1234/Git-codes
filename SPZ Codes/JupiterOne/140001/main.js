// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/14001/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/14001/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode() {
    if (!document.querySelector("body").classList.contains("spz_140001")) {
        document.querySelector("body").classList.add("spz_140001");
        if(document.querySelector('.body-container')){
        document.querySelector('.body-container').insertAdjacentHTML('beforeend', `
        <div class="thankYou">
            <div class="auto_container">
                <div class="thank_youInner">
                    <div class="thank_youtop">
                        <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/check.webp" alt="Check"></figure>
                        <h2>Thank you<strong></strong></h2>
                        <p>You’re one step closer to streamlining your asset management. Our team will contact you shortly.</p>
                    </div>
                    <div class="card_list">
                        <label>Here’s what to expect:</label>
                        <ul>
                            <li>
                                <div class="crad_data">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/confirm_use_case.webp" alt="Confirm use case"></figure>
                                    <strong>Confirm use case</strong>
                                    <p>We’ll confirm details about your environment, security concerns, and use case.</p>
                                </div>
                            </li>
                            <li>
                                <div class="crad_data">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/personalized_demo.webp" alt="Personalized demo"></figure>
                                    <strong>Personalized demo</strong>
                                    <p>See how to detect assets, view an incident blast radius, and manage remediation.</p>
                                </div>
                            </li>
                            <li>
                                <div class="crad_data">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/proof_of_value.webp" alt="Proof of value"></figure>
                                    <strong>Proof of value</strong>
                                    <p>See the potential return on investment for managing your assets with JupiterOne.</p>
                                </div>
                            </li>
                            <li>
                                <div class="crad_data">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/next_steps.webp" alt="Next steps"></figure>
                                    <strong>Next steps</strong>
                                    <p>Ask questions. Estimate onboarding timelines. See pricing and promotions.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="hero_image">
                        <figure>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275602.webp" alt="Hero image">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        `);
        }

        // get cookie
        var get_cookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        // delete cookie
        var delete_cookie = function (cname, path, domain) {
            if (path === undefined) {
                path = '/';
            }
            if (domain) {
                document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + path + '; domain=' + domain + ';';
            } else {
                document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + path + ';';
            }
        }

        
        var thankYouHeading = document.querySelector('.thank_youtop h2');
        var fullName = thankYouHeading.querySelector('strong');

        // check cookie if userFirstName and userLastName exist
        if(get_cookie('userLastName') && get_cookie('userFirstName')) {
            
            sessionStorage.setItem('userFirstName', get_cookie('userFirstName'));
            sessionStorage.setItem('userLastName', get_cookie('userLastName'));

            delete_cookie('userFirstName', '/', '.jupiterone.com');
            delete_cookie('userLastName', '/', '.jupiterone.com');
            
        }
        
        if(sessionStorage.getItem('userFirstName') && sessionStorage.getItem('userLastName')) {
            var firstName = sessionStorage.getItem('userFirstName');
            var lastName = sessionStorage.getItem('userLastName');
            console.log(firstName, lastName);
            fullName.innerText = firstName + ' ' + lastName;
        }


        if (fullName.innerText.trim() !== '') {
            thankYouHeading.innerHTML = thankYouHeading.innerHTML.replace('Thank you', 'Thank you,');
        }


        // for second form 
        window.addEventListener('click', function (e) {
            if (e.target.matches('.modal-form-wrapper .hs_submit .hs-button')) {
                document.querySelectorAll('.modal-form-wrapper .hs-form-field').forEach(function(field) {
                    if (!field.classList.contains('is-error')) {
                        console.log(field);
                        function set_Cookie(name, value, days) {
                            var expires = "";
                            if (days) {
                                var date = new Date();
                                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                                expires = "; expires=" + date.toUTCString();
                            }
                            document.cookie = name + "=" + (value || "") + expires + "; path=/";
                        }
                        set_Cookie('userFirstName', document.querySelector('.modal-form-wrapper .hs-form-field.name-field').value, 1);
                        set_Cookie('userLastName', document.querySelector('.modal-form-wrapper .hs-form-field.lname-field').value, 1);
                    } else {
                        console.log('error');
                    }
                });
            }
        });

        if(document.querySelector('.thankYou')){
        document.querySelector('.thankYou').insertAdjacentHTML('afterend', `
        <div class="customer_usage">
            <div class="auto_container">
                <div class="usage_inner">
                    <div class="usage_detail">
                        <h2>While you wait, see how customers are using JupiterOne</h2>
                    </div>
                    <div class="usage_list">
                        <ul>
                            <li>
                                <div class="usage_data">
                                    <div class="images_wrapper">
                                        <picture>
                                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275603.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275599.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275597.webp" alt="Indeed">
                                        </picture>
                                    </div>
                                    <small>
                                        <h4>Indeed securely transitions to AWS</h4>
                                        <p>See how Indeed gained a holistic view of asset relationships and attack surfaces as they migrated to the cloud.</p>
                                        <a href="https://www.jupiterone.com/case-study/indeed">See case study
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                                <path d="M8.41568 1L13.0005 5.5M13.0005 5.5L8.41568 10M13.0005 5.5H1.00049" stroke="#00BFA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li>
                                <div class="usage_data">
                                    <div class="images_wrapper">
                                        <picture>
                                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275604.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275600.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275596.webp" alt="Blend">
                                        </picture>
                                    </div>
                                    <small>
                                        <h4>Blend simplifies major acquisition </h4>
                                        <p>See how Blend streamlined the asset integration and compliance associated with a complex acquisition using Jupiter One.</p>
                                        <a href="https://www.jupiterone.com/case-study/blend">See case study
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                                <path d="M8.41568 1L13.0005 5.5M13.0005 5.5L8.41568 10M13.0005 5.5H1.00049" stroke="#00BFA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li>
                                <div class="usage_data">
                                    <div class="images_wrapper">
                                        <picture>
                                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275605.webp">
                                            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275601.webp">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/14001/frame_1171275598.webp" alt="Mercury">
                                        </picture>
                                    </div>
                                    <small>
                                        <h4>Mercury Financial tackles complexity </h4>
                                        <p>See how Mercury Financial established complete cyber asset visibility across 130 integrations within one week.</p>
                                        <a href="https://www.jupiterone.com/case-study/mercury-financial">See case study
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                                <path d="M8.41568 1L13.0005 5.5M13.0005 5.5L8.41568 10M13.0005 5.5H1.00049" stroke="#00BFA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `);
        }
        // update 2023 to 2024
        const copyrightElement = document.querySelector('.copyright-text');
        let textContent = copyrightElement.textContent;
        textContent = textContent.replace('2023', '2024');
        copyrightElement.textContent = textContent;

        document.querySelector('a.l-footer__logo img').src = 'https://assets-global.website-files.com/6266ff495972f5842b11a116/64ca4ac5e83ff30c493a3a4d_J1_logo_blue.svg';

        var Link1 = document.querySelector('.footer-update .l-footer__menu .l-footer__menu-item:nth-child(6) .l-footer__submenu a:first-child');
        var Link2 = document.querySelector('.footer-update .l-footer__menu .l-footer__menu-item:nth-child(6) .l-footer__submenu a:nth-child(2)');
        Link2.textContent = 'AskJ1';
        document.querySelector('.footer-update .l-footer__menu .l-footer__menu-item:nth-child(6) .l-footer__submenu').insertAdjacentElement('afterbegin', Link2);
        document.querySelector('.footer-update .l-footer__menu .l-footer__menu-item:nth-child(6) .l-footer__submenu a:nth-child(2)').insertAdjacentElement('afterend', Link1);

        document.querySelector('.footer-update .footer-container .socials .l-footer__secondary .l-footer__social a:first-child img').src = 'https://res.cloudinary.com/spiralyze/image/upload/v1716895645/JupiterOne/14001/003-twitter.svg';
        document.querySelector('.footer-update .footer-container .socials .l-footer__secondary .l-footer__social a:last-child img').src = 'https://res.cloudinary.com/spiralyze/image/upload/v1716895645/JupiterOne/14001/linkedin_1.svg';
    }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
