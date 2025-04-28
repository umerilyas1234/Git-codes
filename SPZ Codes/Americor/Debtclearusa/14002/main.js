// main css
// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.type = "text/css";
// link.href =
//   "//res.cloudinary.com/spiralyze/raw/upload/americor/14002/src/styles.css";
// if (
//   !document.querySelector(
//     'link[href="//res.cloudinary.com/spiralyze/raw/upload/americor/14002/src/styles.css"]'
//   )
// ) {
//   document.getElementsByTagName("head")[0].appendChild(link);
// }

function loadTestCode14002() {
  if (!document.querySelector("body").classList.contains("spz_14002")) {
    document.querySelector("body").classList.add("spz_14002");
    document.querySelector('.main >.form-wrap >.columns').insertAdjacentHTML('afterbegin', `
      <div class="value_props">
        <ul>
            <li>
                <div class="value_propsData">
                    <span><figure><img src="//res.cloudinary.com/spiralyze/image/upload/americor/14002/iconcoin.svg" alt="Monthly Payment"></figure></span>
                    <strong>One low </br>
                        monthly payment</strong>
                </div>
            </li>
            <li>
                <div class="value_propsData">
                    <span><figure><img src="//res.cloudinary.com/spiralyze/image/upload/americor/14002/iconcalendar.svg" alt="Debt Free"></figure></span>
                    <strong>Be debt free</br>
                        in 30 to 48 months</strong>
                </div>
            </li>
            <li>
                <div class="value_propsData">
                    <span><figure><img src="//res.cloudinary.com/spiralyze/image/upload/americor/14002/iconfees.svg" alt="No Upfront Fees"></figure></span>
                    <strong>No upfront fees</br>
                        and no obligation</strong>
                </div>
            </li>
        </ul>
    </div>
    `);
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('submit') && e.target.closest('#debt-wizard')) {
          setTimeout(() => {
            if(!document.querySelector('#debt-wizard').classList.contains('active')) {
              document.querySelector('.form-pagi .first-step').classList.add('completed');
            }
          }, 2000);
        }
        if (e.target.classList.contains('submit') && e.target.closest('#contact-info-wizard')) {
          setTimeout(() => {
            if(!document.querySelector('#contact-info-wizard').classList.contains('active')) {
              document.querySelector('.form-pagi .second-step').classList.add('completed');
            }
          }, 2000);
        }
    });
  
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode14002();
  }
}, 100);
