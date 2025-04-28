const bodyInterval = setInterval(function () {
  if (document.querySelector('body')) {
    clearInterval(bodyInterval)
    const gb_load_css = (path) => {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.media = 'all';
      css.href = path;

      document.getElementsByTagName('head')[0].appendChild(css);
    }
    const findByText = (type, text) => {
      for (let i = 0; i < document.querySelectorAll(type).length; i++) {
        if (document.querySelectorAll(type)[i].textContent == text) {
          return document.querySelectorAll(type)[i];
        }
      }
      return;
    }
    gb_load_css("//res.cloudinary.com/spiralyze/raw/upload/v1730373135/JupiterOne/Update%20hubspot%20footer/src/style.css");
    document.querySelector('body').classList.add("spz_hubspotFooter");

    // footer
    document.querySelector('.spz_hubspotFooter .footer-update .footer-container').insertAdjacentHTML("afterbegin", `
    <div class="green-shadow"></div>
  `)
    document.querySelector('.spz_hubspotFooter .footer-update .green-shadow').insertAdjacentHTML("afterend", `
    <div class="gray-shadow"></div>
  `)
    document.querySelector('.spz_hubspotFooter .footer-update .footer-container .l-footer__top-container').insertAdjacentHTML("afterend", `
      <div class="footer-copyright-privacy">
        <div class="footer-copyright">
          <div class="footer-copyright-text">© 2024 JupiterOne. All Rights Reserved.</div>
        </div>
        <div class="footer-privacy-link-wrapper">
          <a href="https://www.jupiterone.com/legal-and-security-hub" class="footer-privacy-link footer-privacy-link-first">Legal and Security</a>
          <a href="https://www.jupiterone.com/privacy-policy" class="footer-privacy-link">Privacy Policy</a>
          <a href="https://www.jupiterone.com/terms-of-use" class="footer-privacy-link">Terms of Use</a>
        </div>
      </div>
    `);
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Twitter"]').setAttribute("src", "https://assets-global.website-files.com/6266ff495972f5842b11a116/65d59ed20873c065226560f3_X_logo_black.svg")
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Twitter"]').parentNode.setAttribute("href", "https://twitter.com/jupiterone")
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Twitter"]').parentNode.setAttribute("target", "_blank")
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Linkedin"').setAttribute("src", "https://assets-global.website-files.com/6266ff495972f5842b11a116/64d4bf5d096536cb046a70bf_linkedin_icon_black.svg")
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Linkedin"]').parentNode.setAttribute("href", "https://www.linkedin.com/company/jupiterone/")
    document.querySelector('.spz_hubspotFooter  .l-footer__social img[alt="Linkedin"]').parentNode.setAttribute("target", "_blank")
    document.querySelector('.spz_hubspotFooter .footer-update .footer-container .l-footer__top-container .l-footer__buttons-container .button').setAttribute("href", "https://apps.us.jupiterone.io/")

    document.querySelector('.spz_hubspotFooter .footer-update .footer-container .l-footer__top-container .l-footer__buttons-container .button').setAttribute("target", "_blank")
    for (let x = 0; x < document.querySelectorAll('.spz_hubspotFooter .footer-update .footer-container .l-footer__menu .l-footer__menu-item .l-footer__submenu a .main-nav').length; x++) {
      document.querySelectorAll('.spz_hubspotFooter .footer-update .footer-container .l-footer__menu .l-footer__menu-item .l-footer__submenu a .main-nav')[x].parentNode.classList.add("main-nav-parent")
    }
    document.querySelector('.spz_hubspotFooter .footer-update img.l-footer__logo').setAttribute("src", "//res.cloudinary.com/spiralyze/image/upload/v1687848992/JupiterOne/2021HomeRadicalRedesign/logo.svg")
    findByText("span", "Industries ").parentNode.setAttribute("href", "#");
    findByText("span", "Industries ").parentNode.setAttribute("onclick", "return false;");

    document.querySelector('.spz_hubspotFooter .footer-update .l-footer__menu-item:nth-child(2) .l-footer__submenu a:nth-child(1)').insertAdjacentHTML("afterend", `<a href="/continuous-controls-monitoring" class="footer_link">Continuous Controls Monitoring</a>`);
  }
}, 10)