// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/flashpoint/4003/src/style.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/flashpoint/4003/src/style.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode4003() {
  if (!document.querySelector("body").classList.contains("spz_4003")) {
    document.querySelector("body").classList.add("spz_4003");
    var newHtml = `<div class="section_container">
    <div class="section_left">
      <h2>Protect Your Organization from <strong> Critical Threats</strong></h2>
      <p>Reduce risk and increase protection with decisive threat intel.</p>
    </div>
    <div class="section_right">
      <a href="https://flashpoint.io/demo/" class="custom_cta">Get a Demo</a>
      <figure>
        <img
          src="//res.cloudinary.com/spiralyze/image/upload/flashpoint/4002/g2_ratings_3.svg"
          alt="Rating Stars"
        />
      </figure>
    </div>
  </div>
  `;
    var bannerInterval = setInterval(() => {
      if (document.querySelectorAll(".right").length > 0) {
        console.log("111");
        clearInterval(bannerInterval);
        console.log("222");
        document
          .querySelector("h2:nth-of-type(2)")
          .insertAdjacentHTML("beforebegin", newHtml);
        document
          .querySelector(".table-of-contents .right>p.padding-top20")
          .insertAdjacentHTML("afterend", newHtml);
        console.log("333");
      }
    }, 100);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    console.log("Interval Working");
    loadTestCode4003();
  }
}, 100);
