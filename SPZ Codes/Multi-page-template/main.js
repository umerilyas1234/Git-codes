// === CONFIGURATION ===
const pageViewCountKey = 'test_page_views';
const footerHideUntilKey = 'test_footer_hide_until';
const sessionCloseCountKey = 'test_footer_close_count';

function stickyCode() {
  if (!document.querySelector("body").classList.contains("sticky_bar")) {
    const now = new Date();
    const hideUntilRaw = localStorage.getItem(footerHideUntilKey);
    const hideUntil = hideUntilRaw ? new Date(hideUntilRaw) : new Date(0);
    const closeCount = parseInt(sessionStorage.getItem(sessionCloseCountKey) || '0', 10);
    const pageViews = parseInt(sessionStorage.getItem(pageViewCountKey) || '0', 10);

    // 1. If visited 4 or more pages in session, hide for 1 month and remove footer
    if (pageViews >= 4) {
      if (now >= hideUntil) {
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
        localStorage.setItem(footerHideUntilKey, oneMonthFromNow.toISOString());
      }
      remCode();
      return;
    }

    // 2. Stop if hidden for a month
    if (now < hideUntil) return;

    // 3. Stop if user closed 3 times this session
    if (closeCount >= 3) return;

    // ✅ Show the footer
    document.querySelector("body").classList.add("sticky_bar");
    runFooterCode();

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

    document.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("sticky_close") ||
        e.target.classList.contains("custom_cta")
      ) {
        document.querySelector(".spz-sticky-footer")?.remove();
        const currentCount = parseInt(sessionStorage.getItem(sessionCloseCountKey) || '0', 10);
        if (currentCount < 3) {
          sessionStorage.setItem(sessionCloseCountKey, currentCount + 1);
        }
      }
    });

    window.addEventListener("scroll", stickyFooterShow, true);
  }
}

function runFooterCode() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="spz-sticky-footer">
      <div class="spz-footer-container">
        <div class="spz-trust-logos-wrap">
          <img src="" alt="">
        </div>
        <div class="spz-ctas-wrap">
          <a href="" class="custom_cta">CTA</a>  
        </div>
      </div>
      <div class="close_wrapper">
        <a href="javascript:;" class="sticky_close"></a>
      </div>
    </div>
  `);
}

function remCode() {
  document.querySelector('.spz-sticky-footer')?.remove();
  document.body.classList.remove('sticky_bar');
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

const baseDomain = "https://www.spiralyze.com";
let previousUrl = location.href;

handleUrlChange(previousUrl, true);

const observer = new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== previousUrl) {
    previousUrl = currentUrl;
    handleUrlChange(currentUrl, false);
  }
});

observer.observe(document, { childList: true, subtree: true });

function handleUrlChange(url, isInitial = false) {
  const cleanUrl = url.split('?')[0].split('#')[0];
  const isSpiralyzeUrl = cleanUrl.startsWith(baseDomain);
  const hasExcludedPath = cleanUrl.includes("/get-demo") || cleanUrl.includes("/pricing");

  if (isSpiralyzeUrl && !hasExcludedPath) {
    incrementPageViews();
    runMainCode();
  } else {
    remCode();
  }
}

function incrementPageViews() {
  let pageViews = parseInt(sessionStorage.getItem(pageViewCountKey) || '0', 10);
  pageViews++;
  sessionStorage.setItem(pageViewCountKey, pageViews);
}
