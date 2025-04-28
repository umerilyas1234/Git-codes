// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/deputy/6001/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/deputy/6001/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function waitForElement(cssSelector, callback) {
    var stop,
        elementCached,
        timeout,
        check = function () {
            try {
                elementCached = document.querySelector(cssSelector);

                if (stop) return;

                if (elementCached) {
                    callback(elementCached);
                    clearTimeout(timeout);
                } else {
                    window.requestAnimationFrame(check);
                }
            } catch (err) {
                console.log(err);
            }
        };
    window.requestAnimationFrame(check);

    timeout = setTimeout(function () {
        stop = true;
    }, 5000);
}

waitForElement('#__nuxt #main-container', runObserverOnMain, 5000);
function runObserverOnMain() {
    const targetNode = document.querySelector("#__nuxt #main-container");
    const config = {
        attributes: true,
        childList: true,
        subtree: false
    };
    const callback = (mutationList, observer) => {
        console.log("6001::runObserverOnMain");
        beforLoadTestCode6001();
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    beforLoadTestCode6001();
}

function beforLoadTestCode6001() {
    console.log("6001::beforLoadTestCode6001");
    if (window.location.href.indexOf('/deputy-demo') == -1) {
        document.querySelector("#main-container").classList.remove("spz_6001");
        return;
    }
    var loadTestInterval = setInterval(loadTestCode6001, 200);
    setTimeout(function () {
        clearInterval(loadTestInterval);
    }, 2000);
}

function loadTestCode6001() {
    if (!document.querySelector("#main-container").classList.contains("spz_6001")) {
        document.querySelector("#main-container").classList.add("spz_6001");
        document.querySelector('.main-section>div:first-child').classList.add('spz_hero');
        document.querySelector('.spz_hero .g-onpage-form-highlight-content').insertAdjacentHTML('afterbegin', `
            <div class="hero_left">
                <div class="hero_detail">
                    <h3>Employee Scheduling Software</h3>
                    <h1>Create employee schedules in minutes.</h1>
                    <ul>
                        <li>
                            <p><strong>Scheduling: </strong> Create schedules with drag and drop tools. Share in seconds.</p>
                        </li>
                        <li>
                            <p><strong>Labor Costs: </strong> Track wages vs budget and sales. Optimize schedules and reduce labor costs.</p>
                        </li>
                        <li>
                            <p><strong>Compliance: </strong> Simplify meal and rest break compliance, overtime calculations, and other complex rules.</p>
                        </li>
                    </ul>
                </div>
                <div class="reviews">
                    <ul>
                        <li>
                            <div class="reviews_main">
                                <figure>
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716893790/deputy/6001/capterra.svg" alt="Capterra" width="132" height"60">
                                </figure>
                            </div>
                        </li>
                        <li>
                            <div class="reviews_main">
                                <figure>
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716893791/deputy/6001/app_store.svg" alt="App Store" width="130" height"60">
                                </figure>
                            </div>
                        </li>
                        <li>
                            <div class="reviews_main">
                                <figure>
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716893790/deputy/6001/google_play.svg" alt="Google Play" width="131" height"60">
                                </figure>
                            </div>
                        </li>
                    </ul>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="194" height="74" viewBox="0 0 194 74" fill="none">
                    <path d="M109.571 65.4902C145.956 58.8038 173.18 41.0995 186.925 10.81C187.207 10.6822 187.502 10.5201 187.81 10.324C183.757 21.0878 179.807 31.8903 175.857 42.6927C175.008 44.948 178.557 46.4013 179.445 44.0436C184.115 31.6395 188.644 19.2994 193.173 6.95922C193.752 5.42153 192.049 3.72701 190.6 4.46869C189.821 4.87792 189.043 5.28715 188.265 5.69639C187.676 4.77255 186.343 4.27079 185.342 5.06434C183.04 7.2408 180.632 9.1821 178.117 10.8882C172.908 13.5309 167.687 16.2078 162.453 18.9189C160.259 20.0827 161.729 23.3281 164.153 22.4852C169.989 20.3518 175.223 17.6407 180.241 14.2627C180.523 14.1349 180.818 13.9729 181.126 13.7767C167.206 40.4891 142.646 55.3332 109.64 61.8878C66.0789 70.5386 13.5747 42.511 2.37258 24.1152C2.0916 23.3071 0.552666 23.6641 0.795057 24.5746C11.2518 44.3285 64.9333 73.6934 109.571 65.4902Z" fill="url(#paint0_linear_10781_582)"/>
                    <defs>
                        <linearGradient id="paint0_linear_10781_582" x1="35.5216" y1="11.4931" x2="80.948" y2="61.2503" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3E27B7" stop-opacity="0"/>
                        <stop offset="1" stop-color="#3E27B7"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        `);
        setTimeout(() => {
            if(document.querySelector('.marketo-form form .mktoButtonRow button')){
                document.querySelector('.marketo-form form .mktoButtonRow button').textContent = 'Get Started';
            }
            if(document.getElementById('LblmktoOptIn')){
                var element = document.getElementById('LblmktoOptIn');
                var htmlContent = element.innerHTML;
                htmlContent = htmlContent.replace(/Deputy’s/g, 'the terms of the');
                htmlContent = htmlContent.replace(/and/, '&');
                element.innerHTML = htmlContent;
            }
        }, 2000);
        if(window.innerWidth < 768) {
            var formTitle = document.querySelector('.spz_hero .g-onpage-form-highlight-form-header');
            formTitle.textContent = 'Use Deputy for free';
            formTitle.insertAdjacentHTML('afterend', '<p>Get started in minutes, no credit card required</p>');

            var selectElement = document.getElementById('Vertical__c');
            var selectElementLabel = document.getElementById('LblVertical__c');
            selectElement.options[0].text = 'Your Industry';
            selectElementLabel.textContent = 'Your Industry';
            
            var selectElementTwo = document.getElementById('How_many_employees_do_you_have__c');
            var selectElementTwoLabel = document.getElementById('LblHow_many_employees_do_you_have__c');
            selectElementTwo.options[0].text = 'How Many Users Needed?';
            selectElementTwoLabel.textContent = 'How Many Users Needed?';
        }
  
        var mainSection = document.querySelector('.main-section');
        document.querySelector('.main-section').insertAdjacentHTML('beforebegin', '<div class="main_sectionOuter"></div>');
        document.querySelector('.main_sectionOuter').insertAdjacentElement('afterbegin', mainSection);

    }
}

waitForElement('.modals-container', () => {

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            // Check if the mutation involves the body element
            if (mutation.target === document.body) {

                // Add test name to hidden fields
                let booknowModalInput = document.querySelector('.book-a-consultation__marketo-form input[name="spz_experiment2__c"]');
                if (booknowModalInput && booknowModalInput.value !== '#6001_Variant') {
                    booknowModalInput.value = "#6001_Variant"
                }
                let trynowModalInput = document.querySelector('.mktoForm input[name="spz_experiment2__c"]');
                if (trynowModalInput && trynowModalInput.value !== '#6001_Variant') {
                    trynowModalInput.value = "#6001_Variant"
                }
                let TrialModalInput = document.querySelector('#signup-form input[name="spz_experiment2"]');
                if (TrialModalInput && TrialModalInput.value !== '#6001_Variant') {
                    TrialModalInput.value = "#6001_Variant"
                }
                let getStartInput = document.querySelector('#g-header-media-ctas-form input[name="spz_experiment2"]');
                if (getStartInput && getStartInput.value !== '#6001_Variant') {
                    getStartInput.value = "#6001_Variant"
                }
                // remove extra spaace
                var privacyPolicyLink = document.querySelector('.modals-container .js-signup-form .g-signup-form a[href="/terms/privacy-policy"]');
                if (privacyPolicyLink) {
                    var nextSibling = privacyPolicyLink.nextSibling;
                    if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
                        nextSibling.textContent = nextSibling.textContent.trim();
                    }
                }
                var privacyPolicyLink = document.querySelector('.modals-container .js-signup-form .g-signup-form a[href="/terms/privacy-policy"]');

                if (privacyPolicyLink) {
                    privacyPolicyLink.textContent = privacyPolicyLink.textContent.trim();

                    var nextSibling = privacyPolicyLink.nextSibling;

                    if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
                        nextSibling.textContent = nextSibling.textContent.replace(/^\s+/, '');
                    }
                }
            }
        });
    });

    // Configuration of the observer:
    var config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.body, config);
});