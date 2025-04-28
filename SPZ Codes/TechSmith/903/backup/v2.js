var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/techsmithsnagit/903/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/techsmithsnagit/903/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}
function loadTestCode903() {
  if (!document.querySelector("body").classList.contains("spz_t903")) {
    document.querySelector("body").classList.add("spz_t903");
    if(document.querySelector(".entry-content > .custom-call-to-action .custom-call-to-action-image img")){
      var changeImg = document.querySelectorAll(".entry-content > .custom-call-to-action .custom-call-to-action-image img");
      changeImg.forEach((img) => {
        if(img.src.includes('https://www.techsmith.com/blog/wp-content/uploads/2024/01/snagit-async-videos.webp')){
          img.src = "//res.cloudinary.com/spiralyze/image/upload/techsmithsnagit/903/logos_1.svg";
        }
        if (window.location.href.includes('powerpoint-presentation-not-boring')) {
          if(img.src.includes('https://www.techsmith.com/blog/wp-content/uploads/2023/11/snagit-screenshot-on-mac.svg')){
            img.src = "//res.cloudinary.com/spiralyze/image/upload/techsmithsnagit/903/logos_1.svg";
          }
        }
      });
    }
    if(document.querySelector(".entry-content > .tsc-blog-cta .wp-block-image img")){
      var changeImg = document.querySelectorAll(".entry-content > .tsc-blog-cta .wp-block-image img");
      changeImg.forEach((img) => {
        if(img.src.includes('https://www.techsmith.com/blog/wp-content/uploads/2022/04/Snagit-Better-Way.png')){
          img.src = "//res.cloudinary.com/spiralyze/image/upload/techsmithsnagit/903/logos_1.svg";
          img.srcset = "//res.cloudinary.com/spiralyze/image/upload/techsmithsnagit/903/logos_1.svg";
          if (window.innerWidth<1024) {
            img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/logos_768_big_1.webp";
            img.srcset = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/logos_768_big_1.webp";
          }
        }
      });
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode903();
  }
}, 100);
