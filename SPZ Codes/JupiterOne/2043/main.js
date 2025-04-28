var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/2043/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/2043/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode2043() {
  if (!document.querySelector("body").classList.contains("spz_t2043")) {
    document.querySelector("body").classList.add("spz_t2043");
    document.querySelector('.section-home-hero .section-title').insertAdjacentHTML('afterend', `
      <div class="animated_textContainer">
        <strong>Streamline </strong>
        <div class="content">
          <ul class="content__list">
            <li class="content__list__item">Asset Visibility</li>
            <li class="content__list__item">Asset Monitoring</li>
            <li class="content__list__item">Alerting</li>
            <li class="content__list__item">Remediation</li>
            <li class="content__list__item">Risk Prioritization</li>
            <li class="content__list__item">Compliance</li>
            <li class="content__list__item">Evidence Collection</li>
            <li class="content__list__item">Asset Visibility</li>
          </ul>
        </div>
      </div>
    `);

    document.querySelector('.section-home-hero .section-subtitle').textContent = 'Our cyber asset analysis platform empowers security teams with total visibility into the assets, context, and risks that make up their attack surface. Transform asset visibility from frustration into strength. ';
    const list = document.querySelector(".content__list");

    list.addEventListener("animationiteration", function () {
      list.style.transition = "none";
      list.style.transform = "translate3d(0, 0, 0)";
      void list.offsetHeight;
      list.style.transition = "";
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2043();
  }
}, 100);
