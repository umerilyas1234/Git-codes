function loadTestCode1006() {
  if (!document.querySelector("body").classList.contains("spz_t1006")) {
        document.querySelector("body").classList.add("spz_t1006");
        document.querySelector(".hero_sec > .container > .flex > p:first-child img").src = "//res.cloudinary.com/spiralyze/image/upload/v1720427409/rbbrands/1006/icon-ping.svg";
        var phoneNumber = document.querySelector('.hero_sec h2 a').textContent;
        var location = document.querySelector('.hero_sec > .container > .flex > p:first-child').textContent;
        document.querySelector('.hero_sec h1').insertAdjacentHTML('afterend', `
          <div class="how_it_works">
            <div class="how_it_worksHeading">
                <h3>How it works</h3>
            </div>
            <div class="how_it_worksList">
                <ul>
                    <li>
                        <div class="how_it_worksData">
                            <div class="sec_top">
                                <b>01</b>
                                <div class="sec_topImg">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1006/avatar_step_1.webp" alt="Call us" /></figure>
                                </div>
                            </div>
                            <div class="sec_bottom">
                                <div class="sec_bottomData">
                                    <h3>Call us</h3>
                                    <p>Make a zero-obligation phone call at <a href="tel:${phoneNumber}">${phoneNumber}</a> to be immediately connected with a top ${location} appliance repair technician.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="how_it_worksData">
                            <div class="sec_top">
                                <b>02</b>
                                <div class="sec_topImg">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1006/avatar_step_2.webp" alt="Schedule service" /></figure>
                                </div>
                            </div>
                            <div class="sec_bottom">
                                <div class="sec_bottomData">
                                    <h3>Schedule service</h3>
                                    <p>Our network of technicians can help quickly take care of your appliance problems. If you wish to proceed with service, they will work with you to schedule a service date immediately.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="how_it_worksData">
                            <div class="sec_top">
                                <b>03</b>
                                <div class="sec_topImg">
                                    <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/rbbrands/1006/avatar_step_3.webp" alt="Get your appliance back" /></figure>
                                </div>
                            </div>
                            <div class="sec_bottom">
                                <div class="sec_bottomData">
                                    <h3>Get your appliance back in working order!</h3>
                                    <p>Get back to enjoying your life in comfort! Our technician partner can help identify the issue and provide a plan to resolve your appliance issues quickly and easily.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        `);
        document.querySelector('.hero_sec h2 + img + p').textContent = "Open 24/7";
        document.querySelector('.how_it_works + p + a').innerHTML = " <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'> Call " + phoneNumber + " ";
        
        document.querySelector('.hero_sec').insertAdjacentHTML('afterend', `<div class="hero_secOuter"></div>`);
        var heroSection = document.querySelector('.hero_sec');
        document.querySelector('.hero_secOuter').insertAdjacentElement('beforeend', heroSection);
    }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode1006();
  }
}, 100);
