// main css
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/13001/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/13001/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode13001() {
  if (!document.querySelector("body").classList.contains("spz_13001")) {
    document.querySelector("body").classList.add("spz_13001");

    // hero section
    if(document.querySelector('.spz_13001 main')){
      document.querySelector('.spz_13001 main').insertAdjacentHTML('afterbegin', `
      <div class="main_hero">
        <div class="auto_container">
          <div class="main_heroInner">
            <div class="hero_detail">
              <h4>CAASM Platform for Asset Analysis </h4>
              <h2>Streamline Asset Security and Analysis</h2>
              <p>Get complete visibility of all your assets. Drill down into asset details,  connections, and vulnerabilities. Use natural language queries to get answers about your environment and identify security gaps.</p>
              <div class="custom_btnOuter">
                  <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn">Get a Demo</a>
              </div>
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13001/frame_1171275069_webp.webp" alt="Hero image"></figure>
            </div>
          </div>
        </div>
      </div>
      `);
    }

    // why asset section
    if(document.querySelector('.spz_13001 .main_hero')){
      document.querySelector('.spz_13001 .main_hero').insertAdjacentHTML('afterend', `
      <section id="whyAsset" class="section-problem why_asset">
          <div class="w-layout-blockcontainer container-large w-container">
              <div class="lm-problem-content-wrapper w-row">
                  <div class="w-col w-col-6 w-col-stack">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13001/frame_1171275383.webp" loading="lazy" width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 96vw, 39vw" alt="Why Asset Analysis Image">
                  </div>
                  <div class="w-col w-col-6 w-col-stack">
                      <div class="lm-problem-content">
                          <h4 class="section-eyebro-text">Why Asset Analysis</h4>
                          <h3 class="lm-problem-title">Security Teams Cannot Protect Their Org Without a Complete Understanding of Assets</h3>
                          <p class="lm-problem-text">Many security teams are responsible for 165,000+ cyber assets. However, they’re often stored across disparate, disconnected platforms. This makes it difficult to analyze asset risk levels and prioritize vulnerabilities.</p>
                          <p class="lm-problem-text">As a result, teams experience:</p>
                          <ul role="list" class="list-with-icon w-list-unstyled">
                              <li class="list-with-icon-item">
                                <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/660be1c24d42aab4a2f4a839_eye-icon.svg" loading="lazy" width="32" height="32" alt="Eye Icon" class="list-with-icon-item-image">
                                <div>
                                  <strong>Limited visibility </strong> into active, critical business risks.
                                </div>
                              </li>
                              <li class="list-with-icon-item">
                                <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/660be1c2ddd800cfc1114591_connection-icon.svg" loading="lazy" height="32" alt="Connection Icon" width="32" class="list-with-icon-item-image">
                                <div>
                                  <strong>Complex security questions</strong> 
                                 that go unanswered and are solved through best-guesses.
                                </div>
                              </li>
                              <li class="list-with-icon-item">
                                <img src="https://assets-global.website-files.com/6266ff495972f5842b11a116/660be1c2e064bdb0046d1cdc_alert-icon.svg" loading="lazy" height="32" alt="Alert Icon" width="32" class="list-with-icon-item-image">
                                <div>
                                  <strong>Higher breach likelihood</strong> 
                                   due to manually triaging vulnerabilities and losing critical remediation time.
                                </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `);
  

    }
    // features section
    if(document.querySelector('#solution h4.section-eyebro-text')){
        document.querySelector('#solution h4.section-eyebro-text').textContent = "Features";
    }
    setTimeout(() => {
      if(document.querySelector('.timer-slider-nav [aria-label="Go to slide 3"] .desktop-only')){
        document.querySelector('.timer-slider-nav [aria-label="Go to slide 3"] .desktop-only').textContent = "Queries";
      }
      window.dispatchEvent(new Event('resize'));
    }, 1000);


    // how it works section
    if(document.querySelector('.section-slider-with-timer')){
      document.querySelector('.section-slider-with-timer').insertAdjacentHTML('afterend', `
      <div class="how_itWOrks">
        <div class="auto_container">
          <div class="how_itWorksInner">
            <div class="how_itWOrks_heading">
                <h2>How It Works</h2>
            </div>
            <div class="how_itWorks_list">
              <ul>
                <li>
                  <div class="how_itWorksData">
                      <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13001/frame_1171275390.webp" alt="All from a single platform"></figure>
                      <h4>All from a single platform</h4>
                      <h3>Complete Visibility</h3>
                      <p>Finally, get complete visibility across all assets and their context. Devices, users, repos, networks, apps, and data.</p>
                  </div>
                </li>
                <li>
                  <div class="how_itWorksData">
                      <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13001/frame_1171275482.webp" alt="Reduce attack surface"></figure>
                      <h4>Reduce attack surface</h4>
                      <h3>Unified Security Workflows</h3>
                      <p>Quickly analyze your assets. See the blast radius of security incidents. Identify security gaps and compliance gaps.</p>
                  </div>
                </li>
                <li>
                  <div class="how_itWorksData">
                      <figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/13001/frame_1171275391.webp" alt="Remediate faster"></figure>
                      <h4>Remediate faster</h4>
                      <h3>Identify $ Remediate</h3>
                      <p>Triage threats in minutes by risk of breach and severity. Auto-send tickets to Jira or another ticketing platform to teams.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="custom_btnOuter">
              <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" target="_blank" class="custom_btn active">Get a Demo</a>
            </div>
          </div>
        </div>
      </div>
      `);

    }

    document.querySelector('.section-logo-loop .section-title').textContent = "The Deepest Integrations on the Market";
    if(document.querySelector('.section-logo-loop')){
      document.querySelector('.section-logo-loop').insertAdjacentHTML('afterend', `
      <div class="review_section">
        <div class="auto_container">
            <div class="review_inner">
                <div class="review_grid">
                    <div class="review_item">
                        <div class="user-review-item">
                            <div class="user-review-quote">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_1.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                            </div>
                            <div class="user-review-star">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                            </div>
                            <p class="user-review-text">This is the most visionary tool on the market. It easily integrates with our tools. <strong>I don’t need 5 people to run it </strong> (unlike other pieces of software).</p>
                            <div class="user-review-info">
                                <h5 class="user-review-name">Neil F.</h5>
                                <p class="user-review-text">Security and Audit Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="user-review-item">
                            <div class="user-review-quote">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_2.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                            </div>
                            <div class="user-review-star">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                            </div>
                            <p class="user-review-text">
                                Fantastic automated solution for compliance and cybersecurity posture. JupiterOne cuts down the work for evidence submission for audits by 80%.
                            </p>
                            <div class="user-review-info">
                                <h5 class="user-review-name">Syed K.</h5>
                                <p class="user-review-text">Security and Audit Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="review_item">
                        <div class="user-review-item">
                            <div class="user-review-quote">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/quotation-mark_2.svg" loading="lazy" alt="Quote Icon" height="11" width="13">
                            </div>
                            <div class="user-review-star">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/jupiterone/13001/frame_155.svg" loading="lazy" width="75" alt="Stars">
                            </div>
                            <p class="user-review-text">JupiterOne makes it possible for anyone to maintain compliance with SOC, PCI, HIPAA, and more. Really comprehensive solution!</p>
                            <div class="user-review-info">
                                <h5 class="user-review-name">Jasmine H.</h5>
                                <p class="user-review-text">Security</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `);
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode13001();
  }
}, 100);
