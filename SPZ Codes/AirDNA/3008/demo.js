//your code here when element is available
console.log('Time 1 > '+new Date().getTime()/1000);
function TestCaseFunction() {
    function spz3007Test() {
        if (!document.querySelector('body').classList.contains('spz_3007')) {
            document.querySelector('body').classList.add('spz_3007');

            // Put your test code here
            if (document.querySelector('.spz_3007 main > section')) {
                document.querySelector('.spz_3007 main > section').insertAdjacentHTML('beforebegin', `<section class="hero_section">
                    <div class="container">
                        <div class="content-wrapper">
                            <div class="content-left">
                                <h1>Grow faster with better short-term rental data</h1>
                                <ul>
                                    <li><strong>Research.</strong> Explore market trends and insights.</li>
                                    <li><strong>Invest.</strong> Calculate potential revenue for any property.</li>
                                    <li><strong>Optimize.</strong> Compare your listing to the competition and maximize bookings.</li>
                                </ul>
                                <a href="javascript:;" class="hero-btn spz_3007_v1">Start for free</a>
                            </div>
                            <div class="content-right">
                                <picture>
                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/ui-360_1.webp" type="image/webp" media="(max-width: 719px)">
                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/ui-768_1.webp" type="image/webp" media="(max-width: 1119px)">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/ui-1440_1.webp" alt="Hero Image">
                                </picture>
                            </div>
                        </div>
                        <div class="trusted-by">
                            <h2>Data trusted by</h2>
                            <div class="trusted-by-logos">
                                <picture>
                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-mobile.webp" type="image/webp" media="(max-width: 719px)">
                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-tablet.webp" type="image/webp" media="(max-width: 1119px)">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-desktop.webp" alt="Trusted by logos">
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>`);

                console.log('Time 2 > '+new Date().getTime()/1000);

                document.querySelector('.hero-btn').addEventListener('mousedown', function(e){
                    // Click ripple animation - must be a unique selector
                    const ripple = document.createElement('div');
                    const rect = this.getBoundingClientRect();
                
                    // Calculate the position and size of the ripple
                    const size = Math.max(rect.width, rect.height);
                    const x = event.clientX - rect.left - size / 2;
                    const y = event.clientY - rect.top - size / 2;
                
                    ripple.style.width = ripple.style.height = `${size}px`;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                
                    // Add the ripple to the anchor
                    this.appendChild(ripple);
                
                    // Remove the ripple after animation ends
                    ripple.addEventListener('animationend', () => {
                    ripple.remove();
                    });
                });

                document.querySelector('.hero-btn').addEventListener('click', function(e){
                    document.querySelectorAll('a[href*="https://app.airdna.co/data/us"]')[0].click();

                    // Click ripple animation - must be a unique selector
                    e.preventDefault();
                });

                // need to check condition on page scroll.
                window.addEventListener('scroll', function() {
                    setTimeout(() => {
                        if (document.querySelector('.spz_3007 a[aria-label="Go to homepage"] img')) {
                            console.log('header changed');
                            document.querySelector('.spz_3007 #header').classList.add('normalHeader');
    
                            if(document.querySelectorAll('.header-logo-color').length === 0) {
                                document.querySelector('.spz_3007 a[aria-label="Go to homepage"] img').insertAdjacentHTML('beforebegin','<img class="header-logo-color" src="https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg?fit=max&w=384" alt="site logo">');
                            }
                        } else {
                            document.querySelector('.spz_3007 #header')?.classList.remove('normalHeader');
                            console.log('header not changed');
                        }
                    }, 100);
                });
                window.dispatchEvent(new Event('scroll'));
            }
        }
    }

    function removeTest() {
        document.body.classList.remove('spz_3007');
        document.querySelector('.header-logo-color')?.remove();
        document.querySelector('.hero_section')?.remove();
    }

    const selector3007 = 'main > section:first-child';
    function waitForElement(selector3007, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector3007);
            if (element) {
                resolve(element);
                return;
            }

            const interval = setInterval(() => {
                const element = document.querySelector(selector3007);
                if (element) {
                    clearInterval(interval);
                    resolve(element);
                }
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                reject(new Error(`Element not found: ${selector3007}`));
            }, timeout);
        });
    }

    function executeTest() {
        waitForElement(selector3007)
            .then((element) => {
                if (element) {
                    spz3007Test();
                    setTimeout(() => {
                        window.dispatchEvent(new Event('scroll'));
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //Single page app URL change logic cover
    const targetUrl = "https://www.airdna.co/";
    let previousUrl = "";
    const observer = new MutationObserver(function (mutations) {
        if (location.href !== previousUrl) {
            previousUrl = location.href;
            if (location.href.split('?')[0].split('#')[0] === targetUrl) {
                executeTest();
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
}

TestCaseFunction();
fetch('https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572')
    .then(response => response.json())
    .then(data => {
        if (data.country_name === 'India' || data.country_name === 'Philippines') {
        }
    });
