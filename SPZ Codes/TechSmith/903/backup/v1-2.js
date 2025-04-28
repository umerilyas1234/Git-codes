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
        img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/recording_3.webp";
        
        if (window.location.href.includes('powerpoint-presentation-not-boring')) {
          img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/all_in_one_1.webp";
        }
        if (window.location.href.includes('why-visual-communication-matters')) {
          img.classList.add('visual_image');
          img.src = "//res.cloudinary.com/spiralyze/image/upload/v1718388161/techsmithsnagit/903/callout_1441.svg";
          img.srcset = "//res.cloudinary.com/spiralyze/image/upload/v1718388161/techsmithsnagit/903/callout_1441.svg";
          if (window.innerWidth<1024) {
            img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_768.webp";
            img.srcset = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_768.webp";
          }
        }
      });
    }
    if(document.querySelector(".entry-content > .tsc-blog-cta .wp-block-image img")){
      var changeImg = document.querySelectorAll(".entry-content > .tsc-blog-cta .wp-block-image img");
      changeImg.forEach((img) => {
        img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_1440.webp";
        img.srcset = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_1440.webp";
        if (window.innerWidth<1024) {
          img.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_768.webp";
          img.srcset = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithsnagit/903/callout_768.webp";
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
