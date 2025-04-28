
function loadTestCode10001() {
  if (!document.querySelector("body").classList.contains("spz_10001")) {
    document.querySelector("body").classList.add("spz_10001");
    document.querySelector("head").insertAdjacentHTML('beforeend', `
      <style>
        .spz_10001 .category-menu-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        @media screen and (max-width: 874px) {
          .spz_10001 .category-menu-wrap .category-menu {
            max-width: 560px;
          }
        }
        @media (max-width: 767px) {
          .spz_10001 .category-menu-wrap .category-menu {
            max-width: 360px;
          }
        }
        .spz_10001 .try_ctaOuter {
          display: inline-block;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .spz_10001 .try_ctaOuter {
            position: absolute;
            right: 15px;
            bottom: 26px;
          }
        }
        @media (max-width: 767px) {
          .spz_10001 .try_ctaOuter {
            position: absolute;
            right: 16px;
            bottom: 29px;
          }
        }
        .spz_10001 .try_cta {
          border-radius: 99px;
          background-color: #99E500;
          padding: 7.5px 16px;
          display: inline-block;
          color: #1A1A1A;
          font-family: proxima-nova, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: normal;
          white-space: nowrap;
          transition: all 0.4s ease;
        }
        .spz_10001 .try_cta:hover, .spz_10001 .try_cta:active, .spz_10001 .try_cta:focus {
          background-color: #C7FA5E;
        }
        .spz_10001 .category-navigation > .row > .column {
          position: relative;
        }
        .spz_10001 .category-menu-toggle.is-visible + .try_ctaOuter {
          position: absolute;
          right: 0.9375rem;
          top: 13px;
          z-index: 999;
        }
      </style>
    `);
    document.querySelector('.category-menu-wrap').insertAdjacentHTML('beforeend', `
      <div class="try_ctaOuter"><a href="https://www.techsmith.com/download/camtasia/" class="try_cta">Try Camtasia</a></div>
    `);
    if (document.querySelector('.category-menu-toggle.is-visible')){
      document.querySelector('.try_ctaOuter').remove();
      document.querySelector('.category-menu-toggle.is-visible').insertAdjacentHTML('afterend', `
        <div class="try_ctaOuter"><a href="https://www.techsmith.com/download/camtasia/" class="try_cta">Try Camtasia</a></div>
      `);
    };
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode10001();
  }
}, 100);
