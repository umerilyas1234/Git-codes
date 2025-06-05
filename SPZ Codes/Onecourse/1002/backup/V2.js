//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz1002Test() {

  if (!document.querySelector('body').classList.contains('spz_1002')) {
    document.querySelector('body').classList.add('spz_1002');
    // Put your test code here
    if (document.querySelector('.spz_1002 section .awr-hero')) {
      document.querySelector('.spz_1002 section .awr-hero').insertAdjacentHTML('beforebegin', `
        <div class="spz_hero v2">
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
                <div class="cards_two">
                  <ul>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521479/oncourse/1002/whole_home_1.svg" alt="Whole Home"></span>
                        <strong>Whole Home</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521501/oncourse/1002/appliances_1.svg" alt="Appliances"></span>
                        <strong>Appliances</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521509/oncourse/1002/heating__cooling_1.svg" alt="Heating & Cooling"></span>
                        <strong>Heating & <br> Cooling</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521494/oncourse/1002/sewer_1.svg" alt="Sewer"></span>
                        <strong>Sewer</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521486/oncourse/1002/water_1.svg" alt="Water"></span>
                        <strong>Water</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521516/oncourse/1002/electric_1.svg" alt="Electric"></span>
                        <strong>Electric</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521524/oncourse/1002/gas_1.svg" alt="Gas"></span>
                        <strong>Gas</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748521534/oncourse/1002/plumbing_1.svg" alt="Plumbing"></span>
                        <strong>Plumbing</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="hero_form">
                
              </div>
            </div>
          </div>
        </div>
        `);


      console.log('Time 2 > ' + new Date().getTime() / 1000);
      document.querySelector('.hero_form').insertAdjacentElement('afterbegin', document.querySelector('.awr-hero .awr-hero__find-protection-container'));
      document.querySelector('.hero_form input[placeholder="Enter ZIP Code"]').placeholder = 'Zip Code';
    }
  }
}

function removeTest() {
  var input = document.querySelector('.hero_form input[placeholder="Zip Code"]');
  if (input) {
    input.placeholder = 'Enter ZIP Code';
  }
  document.querySelector('.awr-hero .awr-hero__text-panel .awr-rich-text')?.insertAdjacentElement('afterend', document.querySelector('.hero_form .awr-hero__find-protection-container'));
  document.querySelector('.spz_1002 .spz_hero')?.remove();
  document.querySelector('body').classList.remove('spz_1002');
}

const selector1002 = 'main > section .awr-hero';
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
      executeTimeout = setTimeout(function () {
        executeTest();
      }, 800)
    } else {
      removeTest();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
