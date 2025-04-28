function loadTestCode1013() {
  if (!document.querySelector("body").classList.contains("spz_t1013")) {
    document.querySelector("body").classList.add("spz_t1013");
    var location = document.querySelector(".hero_sec > .container > .flex > p:first-child img")
    location.src = "//res.cloudinary.com/spiralyze/image/upload/v1725008061/rbbrands/1013/icon-ping.svg";
    document.querySelector('.hero_sec > .container > .flex > p:first-child').insertAdjacentHTML('afterend', `<figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1013/avatar-img.webp" alt="Avatar"> <b></b></figure>`);
    var phoneNumber = document.querySelector('.hero_sec h2 a').textContent;
    var thirdParagraph = document.querySelector('.hero_sec > div > div > p:nth-of-type(3)');
    var mainCta = document.querySelector('.hero_sec > div > div > a');
    var reviewStars = document.querySelector('.hero_sec > div > div > img');
    thirdParagraph.insertAdjacentElement('afterend', reviewStars);
    reviewStars.insertAdjacentElement('afterend', mainCta);
    document.querySelector('.hero_sec > div > div > a[aria-label="Phone Consultation"]').innerHTML = `<img src="//res.cloudinary.com/spiralyze/image/upload/v1725008061/rbbrands/1013/icon-phone.svg" alt="Phone"> ${phoneNumber}`;
    document.querySelector('#disclosure-link-block').insertAdjacentHTML('beforebegin', `<span>Same day service</span>`);
    var mainHeading = document.querySelector('.hero_sec h1');
    mainHeading.insertAdjacentHTML('afterend', `
      <div class="marquee-container">
        <div class="marquee">
          <div class="marquee-content">
            <div class="tag_main nav-ticker">
              <span>Cooktops</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Dishwashers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Dryers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Freezers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Ovens</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Microwaves</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Garbage Disposals</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Refrigerators</span>
            </div>
          </div>
          <div class="marquee-content">
            <div class="tag_main nav-ticker">
              <span>Cooktops</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Dishwashers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Dryers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Freezers</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Ovens</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Microwaves</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Garbage Disposals</span>
            </div>
            <div class="tag_main nav-ticker">
              <span>Refrigerators</span>
            </div>
          </div>
        </div>
      </div>
      <div class="marquee-container mobile">
        <div class="marquee">
          <div class="marquee_top">
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Cooktops</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dishwashers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dryers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Freezers</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Cooktops</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dishwashers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dryers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Freezers</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Cooktops</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dishwashers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dryers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Freezers</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Cooktops</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dishwashers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Dryers</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Freezers</span>
              </div>
            </div>
          </div>
          <div class="marquee_bottom">
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Ovens</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Microwaves</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Garbage Disposals</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Refrigerators</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Ovens</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Microwaves</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Garbage Disposals</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Refrigerators</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Ovens</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Microwaves</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Garbage Disposals</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Refrigerators</span>
              </div>
            </div>
            <div class="marquee-content">
              <div class="tag_main nav-ticker">
                <span>Ovens</span>
              </div>
              <div class="tag_main nav-ticker">
                <span>Microwaves</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  `);
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode1013();
  }
}, 100);
