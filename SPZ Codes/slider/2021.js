if(!document.querySelector('body').classList.contains('spz-2021')){
  document.querySelector('body').classList.add("spz-2021");
  const subtilteClicked =(target)=>{
    if(!target.classList.contains("active")){
      for(let i=0;i<document.querySelectorAll('.spz-2021 .new-feature-section .animation-section .child').length;i++){
        document.querySelectorAll('.spz-2021 .new-feature-section .animation-section .child')[i].classList.remove("active");
        document.querySelectorAll('.spz-2021 .new-feature-section .animation-section .child')[i].querySelector('.detail').removeAttribute("style");
      }
      target.classList.add("active");
      const originalHeight=target.querySelector('.detail').offsetHeight;
      target.querySelector('.detail').style.height="0px";
      setTimeout(function(){
        target.querySelector('.detail').style.height=originalHeight+"px";
      },5)
      for(let i=0;i<document.querySelectorAll('.spz-2021 .new-feature-section .right img').length;i++){
        document.querySelectorAll('.spz-2021 .new-feature-section .right img')[i].classList.remove("active");
      }
      document.querySelectorAll('.spz-2021 .new-feature-section .right img')[target.getAttribute("data-index")-1].classList.add("active");
    }
  }
  const adjustCarouselHeight =()=>{
    document.querySelector('.spz-2021 .new-feature-section .animation-section .child.active .detail').style.height="auto";
    const originalHeight=document.querySelector('.spz-2021 .new-feature-section .animation-section .child.active .detail').offsetHeight;
    document.querySelector('.spz-2021 .new-feature-section .animation-section .child.active .detail').style.height=originalHeight+"px";
  }
  const getMaxQuoteHeight =()=>{
    let maxHeight=0;
    for(let i=0;i<document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote').length;i++){
      document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote')[i].removeAttribute("style");
    }
    for(let i=0;i<document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote').length;i++){
      if(!maxHeight){
        maxHeight=document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote')[i].offsetHeight;
      } else {
        if(maxHeight<=document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote')[i].offsetHeight){
          maxHeight=document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote')[i].offsetHeight;
        }
      }
    }
    return maxHeight;
  }
  const adjustQuoteHeight =()=>{
    const maxHeight = getMaxQuoteHeight()
    for(let i=0;i<document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote').length;i++){ 
      document.querySelectorAll('.spz-2021 .user-slider-section .child .right .quote')[i].setAttribute('style','height:'+maxHeight+'px');
    }
  }
  const loadJS =(url, implementationCode, location)=>{
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
  
    location.appendChild(scriptTag);
  };
  const gb_load_css=(path)=> {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.media = 'all';
    css.href = path;
  
    document.getElementsByTagName('head')[0].appendChild(css);
  } 
  gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css");
  gb_load_css("https://res.cloudinary.com/spiralyze/raw/upload/JupiterOne/2021HomeRadicalRedesign/2021.css");
  loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1688039546/JupiterOne/2021HomeRadicalRedesign/bodyScrollLock.js', function(){},document.body)
  //header
  document.querySelector(".spz-2021 .j1-logo").setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1687848992/JupiterOne/2021HomeRadicalRedesign/logo.svg")
  document.querySelector('.spz-2021 .menu-button-2 img').setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/menu_1.svg")
  document.querySelector('.spz-2021 #main-wrapper').insertAdjacentHTML("beforeend",`
  <div class="new-hero-wrapper">
    <div class="new-hero">
      <div class="left">
        <div class="reviews">
          <div class="g2">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/logo-G2.svg" alt="G2 Logo" width="24" height="24"/>
            <div class="border"></div>
            <picture>
              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/stars-review-mobile.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/G2-stars.svg" alt="G2 Review Stars" width="84" height="16" class="stars">
            </picture>
            <span>5.0</span>
          </div>
          <div class="gartner">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/logo-Gartner.svg" alt="Gartner Logo" width="74" height="24"/>
            <div class="border"></div>
            <picture>
              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/stars-review-mobile.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1687854984/JupiterOne/2021HomeRadicalRedesign/Gartner-stars.svg" alt="Gartner Review Stars" width="84" height="16" class="stars">
            </picture>
            <span>4.8</span>
          </div>
        </div>
        <div class="sub-header">
        Cyber asset management platform for security
        </div>
        <div class="header">
        Go beyond asset management. &nbsp;Turn complexity into capability.
        </div>
        <div class="desc">
        Our cyber asset management platform empowers security teams with total visibility into the assets, context, and risks that make up their attack surface. Transform asset visibility from frustration into strength.
        </div>
        <div class="button-wrapper">
          <a class="demo" href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management">Get a Demo</a>
          <a class="learn" href="https://www.jupiterone.com/platform">Learn More</a>
        </div>
      </div>
      <div class="right">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/hero_image_2.webp" alt="Hero Image" width="1498" height="830"/>
      </div>
    </div>
  </div>
  <div class="company-logo-wrapper">
    <div class="company-logo">
      <picture>
          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/Frame1171275187.webp">    
          <source media="(max-width:1439.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/Frame1171275186.webp">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/Frame1171275141.webp" alt="Company Logo" width="1232" height="48"/>  
      </picture>
      </div>
  </div>
  <div class="new-feature-wrapper">
    <div class="new-feature-section">
      <div class="left">
        <div class="title">Features</div>
        <div class="animation-section">
          <div class="child" data-index="1">
            <div class="subtitle"><span>Asset inventory</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail">
              <p>Automatically discover and track all your assets in one asset database across hundreds of data sources. Search and analyze across your enterprise’s devices, apps, users, configurations, cloud services, code repositories, endpoints, IAM policies, security controls, and more thanks to 200+ integrations with some of the most popular security and IT tools. Easily explore your cyber assets visually for rapid investigations.</p>
              <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
          <div class="child" data-index="2">
            <div class="subtitle"><span>Powerful search</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail"><p>Find any information you need about your cyber asset inventory with the powerful JupiterOne Query Language (J1QL). Use this flexible query language to answer any questions about your cyber assets, either with natural language or through pre-built queries. Our Visual Query Builder helps you identify security and compliance gaps that would otherwise go unnoticed.</p>
            <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
          <div class="child" data-index="3">
            <div class="subtitle"><span>Graph-based context</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail"><p>Explore and contextualize your cyber assets in easy-to-navigate graph visualizations. Thanks to the graph-based architecture under the hood, relationships between cyber assets become easily identifiable, allowing you to map the blast radius of a given vulnerability or identify cyber asset ownership quickly to remediate problems before they become critical.</p>
            <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
          <div class="child" data-index="4">
            <div class="subtitle"><span>Granular data segmentation</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail"><p>Explore, segment, and report on critical security data. Tag your cyber assets by business unit, business criticality, data sensitivity, business purpose, or custom categories to enrich the data with important business context.</p>
            <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
          <div class="child" data-index="5">
            <div class="subtitle"><span>Continuous compliance</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail"><p>Map your cyber assets to out-of-the-box compliance standards including PCI-DSS, CIS, ISO 27001, NIST, HIPAA, and SOC 2. Define custom compliance standards to help automate evidence collection to meet those standards, and continuously receive updates to alert on compliance drift, moving your organization beyond ‘checkbox compliance’ to adopt a continuous compliance posture.</p>
            <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
          <div class="child" data-index="6">
            <div class="subtitle"><span>Dashboards and alerts</span> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/green-arrow.png" alt="Arrow Icon" width="30" height="30" /></div>
            <div class="detail"><p>Proactively answer questions from company leadership and key stakeholders by turning your JupiterOne queries into dashboards you can easily share with anyone across your organization. Report on your security posture, refine your remediation processes, and set expectations across your enterprise to ensure a culture of cyber resilience and visibility.</p>
            <a class="learn" href="https://www.jupiterone.com/platform"><span>Learn More</span><img src="//res.cloudinary.com/spiralyze/image/upload/v1687922090/JupiterOne/2021HomeRadicalRedesign/green-right.svg" alt="Green Arrow" width="16" height="16" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img data-index="1" alt="Asset inventory" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/image_9.webp" width="780" height="720"/>
        <img data-index="2" alt="Powerful search" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/powerful_search.webp" width="780" height="720"/>
        <img data-index="3" alt="Graph-based context" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/dashboards_and_alerts.webp" width="780" height="720"/>
        <img data-index="4" alt="Granular data segmentation" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/granular.webp" width="780" height="720"/>
        <img data-index="5" alt="Continuous compliance" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/contioues.webp" width="780" height="720"/>
        <img data-index="6" alt="Dashboards and alerts" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/graph.webp" width="780" height="720"/>
      </div>
    </div>
  </div>
  <div class="user-slider-wrapper">
    <div class="user-slider-section">
      <section class="splide splide1">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">"JupiterOne’s asset monitoring capability is the foundation and core to almost everything in our security operations. It is our one source of truth."
                  </div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/6286be3263e480408b948946_caleb-sima_circle.png" alt="Caleb Sima" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Caleb Sima</div>
                      <div class="job">Chief Security Officer at Robinhood</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">"One of the big things that got us excited about JupiterOne was the Graph view – seeing how everything is connected. That, plus knowing that we had the out-of-the-box Insights Dashboards for Incident Response helped me sleep better.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/6439d4500fae2c47487e0ab6_dlaine-miley-quote.png" alt="Dlaine Miley" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Dlaine Miley</div>
                      <div class="job">Cloud Security Engineer at Mercury Financial</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">“We were most impressed at how JupiterOne mapped and presented the relationships within our asset inventories. Now, we can efficiently discover and prioritize vulnerabilities by proximity to critical assets and are outperforming our goals in threat response.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/648376d9c81e879e60465f80_daniel-jones.png" alt="Daniel Jones" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Daniel Jones</div>
                      <div class="job">Chief Information Security Officer at Elwood Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">“My role is to bring secure-by-design products to market quickly. JupiterOne's asset tracking and compliance automation is core to how I execute on that.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/64837657954d9d2bbfa6716f_jameeka-green-aaron.png" alt="Jameeka Green Aaron" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Jameeka Green Aaron</div>
                      <div class="job">CISO at Okta CIC</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">“It’s an example of a modern security product company that **actually** solves real customer problems. Asset management is something we security folks waved our hands about for too long. The graph is a security primitive you build your program on.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/629a6fe81dfa808a4d090288_duncan-godfrey.png" alt="Duncan Godfrey" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Duncan Godfrey</div>
                      <div class="job">CISO at Rippling</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">"From a merger/acquisition perspective, JupiterOne was invaluable. As M&A activities in cloud native companies become increasingly popular, there is no better way to identify and tag assets than using a tool like JupiterOne.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/62f272d134986704902198a3_paul-guthrie_circle.png" alt="Paul Guthrie" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Paul Guthrie</div>
                      <div class="job">Information Security Officer at Blend</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="child">
                <img class="left" src="//res.cloudinary.com/spiralyze/image/upload/v1687442154/jupiterone/2021/quotation-mark_2.svg" alt="Quote" width="48" height="48"/>
                <div class="right">
                  <div class="quote">"Out of all the solutions that we evaluated, we appreciated JupiterOne’s focus on showing all relationships across all assets. With JupiterOne, we now see how everything is connected. This is a huge bonus and win for Indeed’s overall cloud posture and assessment.”</div>
                  <div class="profile">
                    <img src="//assets-global.website-files.com/6266ff495972f5842b11a116/648378f4954d9d2bbfa9b59e_andrew-bitson.png" alt="Andrew Bitson" width="80" height="80"/>
                    <div class="text">
                      <div class="name">Andrew Bitson</div>
                      <div class="job">Platform Security Engineer at Indeed</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <img class="left-arrow" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/prev-slider.png" alt="Left Arrow" width="52" height="52"/>
      <img class="right-arrow" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/next-slider.png" alt="Right Arrow" width="52" height="52"/>
    </div>
  </div>
  <div class="logo-slider-wrapper">
    <div class="header">Over 200 integrations</div>
    <div class="sub-header">Get visibility into your entire enterprise infrastructure</div>
    <div class="icon-slider">
      <section class="splide splide2">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_1.webp" alt="Amazon Web Services Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_8.webp" alt="Google Workspace Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_11.webp" alt="Microsoft Azure Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_10.webp" alt="Salesforce Inc Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_9.webp" alt="Cisco Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_12.webp" alt="Microsoft Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_13.webp" alt="Okta Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_14.webp" alt="GitHub Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_15.webp" alt="Atlassian Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_17.webp" alt="Google Cloud Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_16.webp" alt="Qualys Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_18.webp" alt="Snyk Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_2.webp" alt="Slack Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_20.webp" alt="Jamf Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_19.webp" alt="KnowBe4 Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_21.webp" alt="LastPass Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_23.webp" alt="Splunk Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_22.webp" alt="Bitbucket Logo" width="169.4" height="169.4"/>
              </div>
            </li>
            <li class="splide__slide">
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_1.webp" alt="Amazon Web Services Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_8.webp" alt="Google Workspace Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_11.webp" alt="Microsoft Azure Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_10.webp" alt="Salesforce Inc Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_9.webp" alt="Cisco Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_12.webp" alt="Microsoft Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_13.webp" alt="Okta Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_14.webp" alt="GitHub Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_15.webp" alt="Atlassian Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_17.webp" alt="Google Cloud Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_16.webp" alt="Qualys Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_18.webp" alt="Snyk Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_2.webp" alt="Slack Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_20.webp" alt="Jamf Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_19.webp" alt="KnowBe4 Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_21.webp" alt="LastPass Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_23.webp" alt="Splunk Logo" width="169.4" height="169.4"/>
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/tile_22.webp" alt="Bitbucket Logo" width="169.4" height="169.4"/>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
  <div class="how-it-works-wrapper">
    <div class="how-it-works-section">
      <div class="title">How it works</div>
      <div class="content">
        <div class="child">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/image_1.webp" alt="Collect and normalize asset data Image" width="410" height="380" />
          <div class="step"><span>1.</span> <span>Collect and normalize asset data</span></div>
          <p>Connect with all your security and infrastructure tools. 200+ integrations. Nothing to install. API-based, agentless setup.</p>
        </div>
        <div class="child">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/image_2.webp" alt="Discover assets and relationships Image" width="410" height="380" />
          <div class="step"><span>2.</span> <span>Discover assets and relationships</span></div>
          <p>Automatically reveal unmonitored assets and map relationships to uncover gaps and risk.</p>
        </div>
        <div class="child">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/2021/image_3.webp" alt="Total Visibility Image" width="410" height="380" />
          <div class="step"><span>3.</span> <span>Total Visibility</span></div>
          <p>Understand your entire attack surface to swiftly identify, prioritize and remediate critical issues and vulnerabilities.</p>
        </div>
      </div>
      <div class="cta"><span>Watch Explainer (2:46)</span></div>
    </div>
  </div>
  <div class="platform-wrapper">
    <div class="platform-section">
      <div class="header">One platform for total visibility into your entire attack surface</div>
      <div class="content">
        <div class="child">
          <div class="big">90M</div>
          <div class="small">Cyber assets monitored</div>
          <p>Discover more assets than any other platform. Including devices, code repos, users, and policies.</p>
        </div> 
        <div class="child">
          <div class="big">150%</div>
          <div class="small">Reduced attack surface</div>
          <p>Identify and eliminate outdated, ungoverned, and misconfigured assets.</p>
        </div>
        <div class="child">
          <div class="big">85%</div>
          <div class="small">Optimized operations</div>
          <p>Reduce toil and manual tasks like identification of cyber assets or repeat investigations.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="award-wrapper">
    <div class="award-section">
      <div class="header">Award winning asset visibility & attack surface management software</div>
      <picture>
        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/award-mobile.png">
        <source media="(max-width:991.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/award-tablet.png">
       <img alt="Awards logo" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/award-desktop.png" width="1060" height="120" />
      </picture>
    </div>
  </div>
  <div class="automate-wrapper">
    <div class="automate-section">
      <div class="content">
        <div class="left">
          <div class="text">Prioritize with confidence with complete asset management and analysis</div>
          <a href="https://info.jupiterone.com/book-a-demo-cyber-asset-attack-surface-management" class="cta"><span>Get a Demo</span></a>
        </div>
        <div class="right">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/JupiterOne/2021HomeRadicalRedesign/automate-hero.png" alt="Automate your cloud security with end-to-end asset discovery and management Image" width="516" height="481.67"/>
        </div>
      </div>
    </div>
  </div>
  `)
  for(let i=0; i< document.querySelectorAll('.spz-2021 .testimony_customer-image-text img').length;i++){
    document.querySelectorAll('.spz-2021 .testimony_customer-image-text img')[i].setAttribute("height","164");
    document.querySelectorAll('.spz-2021 .testimony_customer-image-text img')[i].setAttribute("width","164");
  }
  document.querySelector('.spz-2021 .home-hero-column-2-img').setAttribute("height","611")
  document.querySelector('body').insertAdjacentHTML("beforeend",`
    <div class="new-popup-wrapper">
      <div class="popup-content">
        <div class="close-popup">&#x2715</div>
        <iframe id="hs_player_ec00e399-2ed2-4166-91c5-3b2926315815" src="https://player.vimeo.com/video/819203928?h=c854be2b74&color=17f2b8&title=0&byline=0&portrait=0" loading="lazy" referrerpolicy="origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups" allow="autoplay; fullscreen;" style="position: absolute !important; width: 100% !important; height: 100% !important; left: 0; top: 0; border: 0 none; pointer-events: initial; " title="Cyber Asset Attack Surface Management with JupiterOne">
        </iframe>
      </div>
    </div>
  `)
  document.querySelector('.spz-2021 .top-footer-container').insertAdjacentHTML("beforebegin",`
    <div class="green-shadow"></div>
  `)
  document.querySelector('.spz-2021 .j1-footer-logo').setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1687848992/JupiterOne/2021HomeRadicalRedesign/logo.svg")
  document.querySelector('.spz-2021 .j1-footer-logo').setAttribute("alt","JupiterOne")
  document.querySelector('.spz-2021  .footer-social-icons .twitter-icon').setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1687442153/jupiterone/2021/003-twitter_1.svg")
  document.querySelector('.spz-2021  .footer-social-icons .twitter-icon').setAttribute("alt","twitter")
  document.querySelector('.spz-2021  .footer-social-icons .linkedin-icon').setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1687791567/jupiterone/2021/linkedin_2.svg")
  document.querySelector('.spz-2021  .footer-social-icons .linkedin-icon').setAttribute("alt","linkedin")
  document.querySelector('.spz-2021 .footer-section .green-shadow').insertAdjacentHTML("afterend",`
    <div class="gray-shadow"></div>
  `)
  document.querySelector('.spz-2021 .new-feature-section .animation-section').addEventListener("click",function(event){
    if(event.target.closest(".subtitle")){
      subtilteClicked(event.target.closest(".child"))
    }
  })
  setTimeout(function(){
    document.querySelectorAll('.spz-2021 .new-feature-section .animation-section .child')[0].querySelector('.subtitle').click()
  },200)
  
  loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function(){
    var splide = new Splide( '.splide1', {
      type   : 'loop',
      perPage: 1,
      autoplay: true,
      arrows: false,
      pagination: false,

    });
    var splide2 = new Splide( '.splide2', {
      type   : 'loop',
      autoWidth: true,
      arrows: false,
      pagination: false,
      focus: 'center',
      drag: false,
      speed: 20000,
      easing: 'linear',
      waitForTransition: true,
      autoplay: true,
      interval: 0,
      pauseOnHover: false,
      pauseOnFocus: false,
    });
    setTimeout(function(){
      splide.mount();
      splide2.mount();
      document.querySelector('.spz-2021 .user-slider-section .left-arrow').addEventListener("click",function(){
        splide.go( '<' );
      })
      document.querySelector('.spz-2021 .user-slider-section .right-arrow').addEventListener("click",function(){
        splide.go( '>' );
      })
      adjustQuoteHeight();
    },200)
    setTimeout(function(){
      adjustQuoteHeight();
    },500)
    window.dispatchEvent(new Event('resize'));
  }, document.body);

  const targetElement = document.querySelector('.spz-2021 .new-popup-wrapper');
  document.querySelector('.spz-2021 .how-it-works-section .cta').addEventListener("click",function(){
    document.querySelector('.spz-2021 .new-popup-wrapper iframe').setAttribute("src","https://player.vimeo.com/video/819203928?h=c854be2b74&color=17f2b8&title=0&byline=0&portrait=0");
    document.querySelector('.spz-2021 .new-popup-wrapper').classList.add("show")
    document.querySelector('html').classList.add("hidden")
    bodyScrollLock.disableBodyScroll(targetElement);
  })
  document.querySelector('.spz-2021 .new-popup-wrapper .popup-content .close-popup').addEventListener("click",function(){
    document.querySelector('.spz-2021 .new-popup-wrapper iframe').setAttribute("src","");
    document.querySelector('.spz-2021 .new-popup-wrapper iframe').setAttribute("src","https://player.vimeo.com/video/819203928?h=c854be2b74&color=17f2b8&title=0&byline=0&portrait=0");
    document.querySelector('.spz-2021 .new-popup-wrapper').classList.remove("show");
    document.querySelector('html').classList.remove("hidden")
    bodyScrollLock.enableBodyScroll(targetElement);
  })
  document.body.onresize=function(){
    if(document.querySelector('.spz-2021 .new-feature-section .animation-section .child.active .detail')){
      adjustCarouselHeight();
    }
    adjustQuoteHeight();
  }
  document.body.onload=function(){
    setTimeout(function(){
      if(document.querySelector('.spz-2021 .new-feature-section .animation-section .child.active .detail')){
        adjustCarouselHeight();
      }
      adjustQuoteHeight();
    },300)
  }
  window.onscroll=function(){
    if(document.querySelector('html').scrollTop>150 && window.matchMedia("(min-width: 991.98px)").matches){
      if(!document.querySelector('.spz-2021 .section-navbar').classList.contains("stick"))
      document.querySelector('.spz-2021 .section-navbar').classList.add("stick")
    }
    else{
      document.querySelector('.spz-2021 .section-navbar').classList.remove("stick")
    }
  }
}
