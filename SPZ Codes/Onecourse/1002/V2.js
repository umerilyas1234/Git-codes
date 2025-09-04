//your code here when element is available
console.log('Time 1 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));
function spz1002Test() {

  if (!document.querySelector('body').classList.contains('spz_1002')) {
    document.querySelector('body').classList.add('spz_1002');
    // Put your test code here

    if (document.querySelector('.spz_1002 section .awr-home__render-components>div:first-child')) {
      document.querySelector('.spz_1002 section .awr-home__render-components>div:first-child').insertAdjacentHTML('beforeend', `
        <div class="spz_hero v2">
          <div class="auto_container">
            <div class="spz_heroInner">
              <div class="hero_heading">
                <h3>A Leading Home Warranty Provider</h3>
                <h1>Protection for what matters most</h1>
                <p>Covers major systems or everyday breakdowns. 24/7 phone support. Vetted technicians.</p>
              </div>
              <div class="hero_crads">
                <div class="cards_two">
                  <ul>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853995/oncourse/1002/whole_home_3.svg" alt="Whole Home"></span>
                        <strong>Whole Home</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/appliances_3.svg" alt="Appliances"></span>
                        <strong>Appliances</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/heating__cooling_3.svg" alt="Heating & Cooling"></span>
                        <strong>Heating & <br> Cooling</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/sewer_3.svg" alt="Sewer"></span>
                        <strong>Sewer</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/water_3.svg" alt="Water"></span>
                        <strong>Water</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/electric_3.svg" alt="Electric"></span>
                        <strong>Electric</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/gas_3.svg" alt="Gas"></span>
                        <strong>Gas</strong>
                      </div>
                    </li>
                    <li>
                      <div class="cards_twoData">
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1748853996/oncourse/1002/plumbing_3.svg" alt="Plumbing"></span>
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

      document.querySelector('.hero_form').insertAdjacentElement('afterbegin', document.querySelector('.awr-find-your-protection-plan'));
      document.querySelector('.hero_form input[placeholder="Enter ZIP Code"]').placeholder = 'Zip Code';
      
      console.log('Time 2 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

    }
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

