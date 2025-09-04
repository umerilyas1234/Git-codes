console.log('Time 1 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

function spz1002Test() {
  if (!document.querySelector('body').classList.contains('spz_1002')) {
    document.querySelector('body').classList.add('spz_1002');
    // Put your test code here
    if (document.querySelector('.spz_1002 section .awr-home__render-components>div:first-child')) {
      document.querySelector('.spz_1002 section .awr-home__render-components>div:first-child').insertAdjacentHTML('afterbegin', `
        <div class="spz_hero">
          <div class="auto_container">
            <div class="spz_heroInner">
              <div class="hero_heading">
                <h3>A Leading Home Warranty Provider</h3>
                <h1>Protection for what matters most</h1>
                <p>Covers major systems or everyday breakdowns. 24/7 phone support. Vetted technicians. </p>
              </div>
              <div class="hero_crads">
                <div class="cards">
                  <div class="card" value="Whole Home">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853729/oncourse/1002/whole_home_2.svg"
                      alt="Whole Home" height="24" width="24">
                    <div class="card-text">Whole <br> Home</div>
                  </div>
                  <div class="card" value="Identity Threat Detection & Response">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853741/oncourse/1002/appliances_2.svg"
                      alt="Appliances" height="24" width="24">
                    <div class="card-text">Appliances</div>
                  </div>
                  <div class="card" value="Heating & Cooling">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853741/oncourse/1002/heating__cooling_2.svg"
                      alt="Heating & Cooling" height="24" width="24">
                    <div class="card-text">Heating & <br> Cooling</div>
                  </div>
                  <div class="card" value="Sewer">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853761/oncourse/1002/sewer_2.svg"
                      alt="Sewer" height="24" width="24">
                    <div class="card-text">Sewer</div>
                  </div>
                  <div class="card" value="Water">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853761/oncourse/1002/water_2.svg"
                      alt="Water" height="24" width="24">
                    <div class="card-text">Water</div>
                  </div>
                  <div class="card" value="Electric">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853761/oncourse/1002/electric_2.svg"
                      alt="Electric" height="24" width="24">
                    <div class="card-text">Electric</div>
                  </div>
                  <div class="card" value="Gas">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853780/oncourse/1002/gas_2.svg"
                      alt="Gas" height="24" width="24">
                    <div class="card-text">Gas</div>
                  </div>
                  <div class="card" value="Plumbing">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1748853780/oncourse/1002/plumbing_2.svg"
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

      document.querySelector('.hero_form').insertAdjacentElement('afterbegin', document.querySelector('.awr-find-your-protection-plan'));
      document.querySelector('.hero_form input[placeholder="Enter ZIP Code"]').placeholder = 'Zip Code';

    }
    bindCardClick();
    console.log('Time 2 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));
  }
}

function cardClickHandler(e) {
  if (e.target.classList.contains('card')) {
    e.target.classList.toggle('active');
  }
}

let cardClickBound = false;

function bindCardClick() {
  if (!cardClickBound) {
    window.addEventListener('click', cardClickHandler);
    cardClickBound = true;
  }
}

function unbindCardClick() {
  if (cardClickBound) {
    window.removeEventListener('click', cardClickHandler);
    cardClickBound = false;
  }
}


function removeTest() {
  console.log('removing test');
  var input = document.querySelector('.hero_form input[placeholder="Zip Code"]');
  if (input) {
    input.placeholder = 'Enter ZIP Code';
  }
  document.querySelector('section .awr-home__render-components>div:first-child .awr-hero__text-panel .awr-rich-text + div')?.insertAdjacentElement('afterend', document.querySelector('.hero_form .awr-find-your-protection-plan'));
  document.querySelector('.spz_1002 .spz_hero')?.remove();
  document.querySelector('body').classList.remove('spz_1002');
  unbindCardClick();
}

var pageList = [
  "https://beta.awrusa.com/"
];

let testRemoved = false;
function observerForLoadingBlock() {
  var target = document.body;
  if (!target) return;

  const config = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
  };

  let running = false;

  const callback = function (mutationsList, observer) {
    const currentPage = window.location.href.split("?")[0].split("#")[0];

    if (running) return;

    if (pageList.includes(currentPage)) {
      running = true;
      console.log("Mutation detected: Run spz1002Test()");
      spz1002Test();
      setTimeout(() => {
        running = false;
      }, 100);
    } else {
      if (!testRemoved) {
        console.log("URL not in list, running removeTest()");
        removeTest();
        testRemoved = true;
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(target, config);
}

observerForLoadingBlock();
