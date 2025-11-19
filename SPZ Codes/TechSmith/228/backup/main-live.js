function waitForElement(cssSelector, callback) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector);
        if (stop) return;
        if (elementCached) {
          callback(elementCached);
          clearTimeout(timeout);
        } else {
          window.requestAnimationFrame(check);
        }
      } catch (err) {
        console.log(err);
      }
    };
  window.requestAnimationFrame(check);
  timeout = setTimeout(function () {
    stop = true;
  }, 5000);
}
waitForElement("body", (docBody) => {
  docBody.classList.add("spz228_v2");

  if (!document.querySelector('.desktop-hamburger')) {
    document.querySelector('.logo-wrapper .logo').insertAdjacentHTML('afterend', '<div class="desktop-hamburger"><button type="button" class="menu-trigger clone" title="Menu"><span>Menu</span></button></div>');
  }

  let controlMobileNavbar = document.querySelectorAll('.global-nav-wrapper')[0];
  document.querySelector('.logo-wrapper').insertAdjacentHTML('afterend', `<div class="desktop-side-bar"></div>`);
  document.querySelector('.desktop-side-bar').insertAdjacentHTML('afterbegin', controlMobileNavbar.outerHTML);
  document.querySelector('.desktop-side-bar .additional-nav .search').remove();

  //docBody.classList.add("side-navbar-active", "level-1-active");

  let alllevel1 = document.querySelectorAll('.desktop-side-bar .global-nav-wrapper .level-1');
  let alllevel2 = document.querySelectorAll('.desktop-side-bar .global-nav-wrapper .level-2');

  alllevel1.forEach(element => {
    element.classList.remove('level-1');
    element.classList.add('spz-level-1');
  });
  alllevel2.forEach(element => {
    element.classList.remove('level-2');
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".desktop-side-bar .global-nav-menu > .spz-level-1:last-child")) {

    }
    else if (e.target.closest(".desktop-side-bar .global-nav-menu .spz-level-1 a") && !document.querySelector(".activated-mobile-menu")) {
      e.preventDefault();
      let target = e.target.closest(".global-nav-menu .spz-level-1");

      document.querySelector('body').classList.remove("level-1-active");
      document.querySelector('body').classList.add("level-2-active");

      target.classList.add("activated-mobile-menu");

    }
    else if (e.target.closest(".desktop-side-bar .global-nav-menu .activated-mobile-menu > a")) {
      e.preventDefault();

      document.querySelector('body').classList.add("level-1-active");
      document.querySelector('body').classList.remove("level-2-active");
      setTimeout(() => {
        document.querySelector('.activated-mobile-menu').classList.remove("activated-mobile-menu");
      }, 300);
    }
    else if (e.target.closest(".desktop-side-bar")) {
    }
    else if (e.target.closest(".desktop-hamburger .menu-trigger.clone")) {
      e.preventDefault();
      document.querySelector('body').classList.add("side-navbar-active", "level-1-active");
    }
    else {
      if (window.innerWidth > 960) {
        document.querySelector('body').classList.remove("side-navbar-active", "level-1-active");
      }
    }
  });
});
