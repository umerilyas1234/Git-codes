function stickyCode() {
  // === CONFIGURATION ===
  const pageViewCountKey = 'test_page_views';
  const footerHideUntilKey = 'test_footer_hide_until';
  const sessionCloseCountKey = 'test_footer_close_count';

  // === CONTROL LOGIC ===
  (function () {
    const now = new Date();
    const hideUntil = new Date(localStorage.getItem(footerHideUntilKey) || 0);
    const closeCount = parseInt(sessionStorage.getItem(sessionCloseCountKey) || '0', 10);
    const pageViews = parseInt(sessionStorage.getItem(pageViewCountKey) || '0', 10) + 1;
    sessionStorage.setItem(pageViewCountKey, pageViews);

    console.log("Sticky Check — Page Views:", pageViews, "Close Count:", closeCount, "Hide Until:", hideUntil);

    if (now < hideUntil) return;
    if (closeCount >= 3) return;

    if (pageViews >= 4) {
      const oneMonthFromNow = new Date();
      oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
      localStorage.setItem(footerHideUntilKey, oneMonthFromNow.toISOString());
      console.log("Footer hidden for a month due to 4+ page views");
      document.body.classList.remove('sticky_bar');
      document.querySelector('.copyright-section')?.remove();
      return;
    }

    runFooterCode();
  })();

  // Setup scroll and event listeners only once
  if (!document.querySelector("body").classList.contains("sticky_bar")) {
    document.querySelector("body").classList.add("sticky_bar");

    const scrollPosition = window.innerHeight;

    function stickyFooterShow() {
      const footer = document.querySelector('.new-footer-wrapper');
      const body = document.querySelector('body');
      const isFooterInView = footer && isElementInViewport(footer);

      if (isFooterInView) {
        body.classList.remove('show_footer');
      } else if (window.scrollY > scrollPosition) {
        body.classList.add('show_footer');
      } else {
        body.classList.remove('show_footer');
      }
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    window.addEventListener("scroll", function () {
      stickyFooterShow();
    }, true);
  }

  // ✅ Add event listener once globally
  if (!window.__stickyEventAdded) {
    window.__stickyEventAdded = true;
    let closeClicked = false;

    document.addEventListener("click", function (e) {
      const closeBtn = e.target.closest('.close-button');
      if (closeBtn && !closeClicked) {
        closeClicked = true;

        document.querySelector(".copyright-section")?.remove();
        document.body.classList.remove("sticky_bar");

        const currentCount = parseInt(sessionStorage.getItem(sessionCloseCountKey) || '0', 10);
        sessionStorage.setItem(sessionCloseCountKey, currentCount + 1);
        console.log("Sticky Footer Closed — New Count:", currentCount + 1);

        setTimeout(() => {
          closeClicked = false;
        }, 300);
      }
    });
  }

  function runFooterCode() {
    if (document.querySelector(".copyright-section")) return;

    document.body.insertAdjacentHTML("beforeend", `
      <section class="copyright-section">
    <div class="copyright-text">
      © 2025 Spiralyze. All rights reserved.
    </div>
    <a href="javascript:void(0)" class="close-button">
      <svg viewBox="0 0 24 24">
        <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/>
      </svg>
    </a>
  </section>
    `);
  }
}

function remCode() {
  document.body.classList.remove('sticky_bar');
  document.querySelector('.copyright-section')?.remove();
}

const main = '#___gatsby main';

function waitForElement(main, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(main);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(main);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found`));
    }, timeout);
  });
}

function runMainCode() {
  waitForElement(main)
    .then((element) => {
      if (element) {
        stickyCode();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// SPA URL change detection
const baseDomain = "https://www.spiralyze.com";
let previousUrl = "";

const observer = new MutationObserver(function () {
  const currentUrl = location.href;

  if (currentUrl !== previousUrl) {
    previousUrl = currentUrl;

    const cleanUrl = currentUrl.split('?')[0].split('#')[0];
    const isSpiralyzeUrl = cleanUrl.startsWith(baseDomain);
    const hasExcludedPath = cleanUrl.includes("/get-demo") || cleanUrl.includes("/pricing");

    if (isSpiralyzeUrl) {
      if (hasExcludedPath) {
        remCode();
      } else {
        runMainCode();
      }
    }
  }
});

const config = { subtree: true, childList: true };
observer.observe(document, config);
