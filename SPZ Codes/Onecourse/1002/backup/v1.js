console.log('Time 1 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

function spz1002Test() {

  if (!document.querySelector('body').classList.contains('spz_1002')) {
    document.querySelector('body').classList.add('spz_1002');
    // Put your test code here
    if (document.querySelector('.spz_1002 section .awr-hero')) {
      document.querySelector('.spz_1002 section .awr-hero').insertAdjacentHTML('beforebegin', `
        <div class="spz_hero">
          <div class="auto_container">
            <div class="spz_heroInner">
              <div class="hero_heading">
                <h3>America’s Leading Home Warranty Provider</h3>
                <h1>Protect every part of your home</h1>
                <p>Full warranties for 23+ home systems. 24/7 claims. Certified techs. </p>
              </div>
              <div class="hero_toggle">
                <div class="toggle_main">
                  <small>
                    <span>Owner</span>
                    <label class="toggle">
                      <input type="checkbox" id="btnToggle" name="btnToggle" />
                      <span class="slider"></span>
                    </label>
                    <span>Renter</span>
                  </small>
                </div>
              </div>
              <div class="hero_crads">
                <div class="cards">
                  <div class="card" value="Whole Home">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521418/oncourse/1002/whole_home.svg"
                      alt="Whole Home" height="24" width="24">
                    <div class="card-text">Whole <br> Home</div>
                  </div>
                  <div class="card" value="Identity Threat Detection & Response">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521425/oncourse/1002/appliances.svg"
                      alt="Appliances" height="24" width="24">
                    <div class="card-text">Appliances</div>
                  </div>
                  <div class="card" value="Heating & Cooling">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521431/oncourse/1002/heating__cooling.svg"
                      alt="Heating & Cooling" height="24" width="24">
                    <div class="card-text">Heating & <br> Cooling</div>
                  </div>
                  <div class="card" value="Sewer">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521438/oncourse/1002/sewer.svg"
                      alt="Sewer" height="24" width="24">
                    <div class="card-text">Sewer</div>
                  </div>
                  <div class="card" value="Water">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521445/oncourse/1002/water.svg"
                      alt="Water" height="24" width="24">
                    <div class="card-text">Water</div>
                  </div>
                  <div class="card" value="Electric">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521452/oncourse/1002/electric.svg"
                      alt="Electric" height="24" width="24">
                    <div class="card-text">Electric</div>
                  </div>
                  <div class="card" value="Gas">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521459/oncourse/1002/gas.svg"
                      alt="Gas" height="24" width="24">
                    <div class="card-text">Gas</div>
                  </div>
                  <div class="card" value="Plumbing">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748521466/oncourse/1002/plumbing.svg"
                      alt="Plumbing" height="24" width="24">
                    <div class="card-text">Plumbing</div>
                  </div>
                </div>
              </div>
              <div class="hero_form">
                
              </div>
            </div>
          </div>
        </div>
        `);

      document.querySelector('.hero_form').insertAdjacentElement('afterbegin', document.querySelector('.awr-hero .awr-hero__find-protection-container'));
      document.querySelector('.hero_form input[placeholder="Enter ZIP Code"]').placeholder = 'Zip Code';
      document.querySelector('.hero_crads .cards').addEventListener("click", function (e) {
        const card = e.target.closest(".hero_crads .card");
        if (card) {
          card.classList.toggle('active');
          // const cardText = card.querySelector('.card-text').textContent.trim();

          // if (card.classList.contains("active")) {
          //   // Add the card text to cookies without encoding
          //   document.cookie = `${cardText}=true; path=/;`;
          // } else {
          //   // Remove the card text from cookies
          //   document.cookie = `${cardText}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          // }

          // if (e.target.closest(".hero_crads .card").classList.contains("active")) {
          //   checkBoxValue.push("" + e.target.closest(".hero_crads .card").querySelector('.card-text').textContent)
          // } else {
          //   checkBoxValue.remove('' + e.target.closest(".hero_crads .card").querySelector('.card-text').textContent)
          // }
        }
      });
    }
  }
  console.log('Time 4 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

}

function removeTest() {
  console.log('removing test');
  var input = document.querySelector('.hero_form input[placeholder="Zip Code"]');
  if (input) {
    input.placeholder = 'Enter ZIP Code';
  }
  document.querySelector('.awr-hero .awr-hero__text-panel .awr-rich-text')?.insertAdjacentElement('afterend', document.querySelector('.hero_form .awr-hero__find-protection-container'));
  document.querySelector('.spz_1002 .spz_hero')?.remove();
  document.querySelector('body').classList.remove('spz_1002');
}

const selector1002 = 'html[style="height: 100%;"]';
function waitForElement(selector1002, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector1002);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector1002);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector1002}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector1002)
    .then((element) => {
      if (element) {
        console.log('Time 3 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));
        spz1002Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout;
const targetUrl = "https://beta.awrusa.com/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      console.log('Time 2 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

      executeTimeout = setTimeout(function () {
        executeTest();
      }, 100)
    } else {
      // removeTest();
      console.log('removedddddd');
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
