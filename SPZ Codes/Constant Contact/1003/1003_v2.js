function hiddenValue(currentExperimentName, currentExperimentValue) {
  function setCookie(name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  var ExistingExperimentName = getCookie('ExperimentName')
  var ExistingExperimentValue = getCookie('ExperimentValue')

  if (!ExistingExperimentName) {
    setCookie('ExperimentName', currentExperimentName, 1)
    setCookie('ExperimentValue', currentExperimentValue, 1)
  } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {
    setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1)
    setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1)
  } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {
    var existingNames = ExistingExperimentName.split(',')
    var existingValues = ExistingExperimentValue.split(',')
    var index = existingNames.indexOf(currentExperimentName)
    existingValues[index] = currentExperimentValue
    setCookie('ExperimentName', existingNames.join(','), 1)
    setCookie('ExperimentValue', existingValues.join(','), 1)
  }
}
hiddenValue('#1003 | Constant Contact | Home | Features Accordion', 'SPZ_1003_V2')

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to animate labels for inputs

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// This is the code to generate the form over UI section do no edit it
function addAccordion() {

  document.body.classList.add('spz_1003_v2');

  const logos = [
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-the-ups-store_webp.webp", alt: "The UPS Store", width: "185px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-cornell-engineering_webp.webp", alt: "Cornell Engineering", width: "108px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-plam-beach-county_webp.webp", alt: "Palm Beach County", width: "56px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-mathnasium_webp.webp", alt: "Mathnasium", width: "148px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-techsoup_webp.webp", alt: "TechSoup", width: "113px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-dream-vacations_webp.webp", alt: "Dream Vacations", width: "119px" }
  ];
  const content = [
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__362.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1026.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_772.webp", 
      alt: "Email marketing", 
      heading: "Email marketing",
      paragraph: `<p>Create professional emails in minutes. Select from hundreds of templates and customize or create your own. Generate content with AI and schedule emails to send later.</p> <p>Boost sales and engagement by sending automated welcome emails. Or send emails to customers who abandon their cart or register. Suggest upsells after purchase, and automatically resend emails to non-openers.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__364.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1028.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_774.webp", 
      alt: "Email templates", 
      heading: "Email templates",
      paragraph: `<p>Choose from 600+ high-converting, pro-designed templates. Perfect for newsletters, sales, fundraising, events, seasonal messages, and more.</p><p>Edit with drag and drop. Add brand colors, logos, and images. All templates are designed to look good on desktop and mobile.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__363.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1029.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_773.webp", 
      alt: "Social media management", 
      heading: "Social media management",
      paragraph: `<p>Generate social media posts with AI. Just enter a few keywords. Or turn emails into posts. </p><p>Add hashtags, images, and videos. Post immediately to Instagram, Facebook, LinkedIn, and TikTok all at once, or schedule for later. </p><p>Easily launch Meta ads and reach ready-to-buy customers. Increase online visibility and capture more sales.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__365.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1030.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_775.webp", 
      alt: "Events and ticketing", 
      heading: "Events and ticketing",
      paragraph: `<p>Send texts and emails promoting your event, or share on social media. Free, paid, online, and in-person events. Create registration or RSVP pages. Accept online payments. </p><p>Create and send scannable tickets. See who’s registering, how many tickets you’ve sold, and more. </p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__370.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1033.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_778.webp", 
      alt: "SMS Marketing", 
      heading: "SMS Marketing",
      paragraph: `<p>Send texts that customers are excited to open and buy from.  Let new customers join your text list with Text to Join, or invite email subscribers to join. </p><p>Generate content with AI. Preview messages before sending. Get a dedicated local number to send texts from.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__369.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1032.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__369.webp", 
      alt: "Multi-account management", 
      heading: "Multi-account management",
      paragraph: `<p>Streamline marketing across all your departments, teams, or locations with one convenient console managed by Constant Contact.</p><p>Manage users, budget email sends, and lock down brand templates all in a single interface.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__368.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1027.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__368.webp", 
      alt: "Integrations", 
      heading: "Integrations",
      paragraph: `<p>Sync with Google, Canva, Shopify, Square, Wix, Stripe, Xero, and 300+ more.</p><p>Auto-pull contacts, purchases, and other key info to keep your marketing up to date. Reduce manual work. Save time. Use connected data from across your tools to understand what’s working and target more effectively.</p>`
    },
    { 
      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1440__361.webp", 
      tabLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_1025.webp", 
      mobLink: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui_div_769.webp", 
      alt: "Reporting", 
      heading: "Reporting",
      paragraph: `<p>Get detailed, easy-to-read reports on who’s opening your emails, posts, and texts. See which content drives the most sales and revenue. Repeat what’s successful and grow sales even more.</p>`
    },
  ];
  const logosHTML = logos.map(logo =>
    `<div class="spz-logo-item" style="width: ${logo.width}">
    <img src="${logo.url}" alt="${logo.alt}" loading="lazy" />
  </div>`
  ).join('');
  document.querySelector('.main-grid #integrations-image').insertAdjacentHTML('afterend', `
    <div class="spz-social-proof">
      <div class="spz-logos-wrapper">${logosHTML}</div>
    </div>
<div class="spz-1003-tabs-custom-container">
    <div class="tabs_heading"><h2>How We Help Your Business Grow</h2></div>
  <div class="tabs-custom-wrapper">
    <div class="tabs-custom-header">
      <div class="child active" data-index="1">
        <div class="text">Email marketing</div>
      </div>
      <div class="child" data-index="2">
        <div class="text">Email templates</div>
      </div>
      <div class="child" data-index="3">
        <div class="text">Social media management</div>
      </div>
      <div class="child" data-index="4">
        <div class="text">Events and ticketing</div>
      </div>
      <div class="child" data-index="5">
        <div class="text">SMS Marketing</div>
      </div>
      <div class="child" data-index="6">
        <div class="text">Multi-account management</div>
      </div>
      <div class="child" data-index="7">
        <div class="text">Integrations</div>
      </div>
      <div class="child" data-index="8">
        <div class="text">Reporting</div>
      </div>
      <div class="padding-right"></div>
    </div>
    <div class="tabs-custom-content">
      ${content.map((item, index) =>
      `<div class="child ${index === 0 ? 'active' : ''}" data-index="${index + 1}">
        <div class="slider_content">
          <div class="slider_left">
            <picture>
              <source srcset="${item.mobLink}" type="image/webp" media="(max-width: 1023px)">
              <source srcset="${item.tabLink}" type="image/webp" media="(max-width: 1299px)">
              <img src="${item.url}" alt="${item.alt}">
            </picture>
          </div>
          <div class="slider_right">
            <h2>${item.heading}</h2>
            ${item.paragraph}
            <div class="spz-ctas-wrap">
              <a href="https://www.constantcontact.com/signup" class="spz-primary spz1003_v2">Start trial</a>
            </div>
          </div>
        </div>
      </div>
      `
      ).join('')}
    </div>
  </div>
</div>
    `);


    // tabs slider js

    const tabsChild = document.querySelectorAll('.spz-1003-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header > .child')
    
    // check if screen size is less than 768px
    function isMobileScreen() {
      return window.innerWidth < 768
    }
    
    // check if has scroll bar
    function hasScrollBar() {
      if (!isMobileScreen()) {
        return false
      }
      if (document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').clientWidth < document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper .tabs-custom-header').scrollWidth) {
        return true
      }
      return false
    }

    // for set child height so it will looks nice
    function getQuoteCurrentHeight() {
      return document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper .tabs-custom-content .child.active').offsetHeight;
    }

    // setting the parent and child of the content
    function setQuoteMinHeight() {
      for (let i = 0; i < tabsChild.length; i++) {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].removeAttribute("style")
      }
      for (let i = 0; i < tabsChild.length; i++) {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelectorAll('.tabs-custom-content .child')[i].style.height = '' + getQuoteCurrentHeight() + 'px';
      }
      document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content').style.height = '' + getQuoteCurrentHeight() + 'px';
    }

    // function to centering the title
    function moveTheTitle(index) {
      if (isMobileScreen() && hasScrollBar()) {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollTo({
          left: document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child[data-index="' + index + '"]').getBoundingClientRect().left + document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft - parseInt(window.getComputedStyle(document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header'), null).getPropertyValue('padding-left'), 10),
          behavior: 'smooth'
        });
      }
    }

    function headerScrollBarCalculation() {
      if (!isMobileScreen()) {
        // Remove all scroll-related classes when not on mobile
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove('show-gradient')
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-listener-added")
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-not-at-start")
        return
      }
      
      // check if has scrollbar
      if (hasScrollBar()) {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("show-gradient")
      } else {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove('show-gradient')
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-listener-added")
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
      }

      // check reach end or no to show/hide gradient
      if (!document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.contains("scroll-listener-added")) {
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-listener-added")
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').addEventListener("scroll", () => {
          // check if reach end
          if (document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollWidth - document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').scrollLeft === document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').clientWidth) {
            document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-reach-end")
          } else {
            document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-reach-end")
          }
          // check if not at the beginning
          if (document.querySelector('.tabs-custom-wrapper').querySelector('.tabs-custom-header').scrollLeft > 0) {
            document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.add("scroll-not-at-start")
          }
          else {
            document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-wrapper .tabs-custom-header').classList.remove("scroll-not-at-start")
          }
        })
      }
    }

    // event listener  
    document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header').addEventListener("click", (event) => {
      if (event.target.closest('.child')) {

        // set header current active
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header .child.active').classList.remove("active")
        event.target.closest('.child').classList.add("active")

        moveTheTitle(event.target.closest('.child').getAttribute("data-index"))

        // set content current active
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child.active').classList.remove('active')
        let index = event.target.closest('.child').getAttribute("data-index");
        document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-content .child[data-index="' + index + '"]').classList.add("active")

        sessionStorage.setItem('spz_1003_v2_accordion_index', event.target.closest('.child').getAttribute('data-index'));

        setQuoteMinHeight()
      }
    })

    // dragging functionality using normal mouse (only on mobile)
    const scrollableDiv = document.querySelector('.spz-1003-tabs-custom-container .tabs-custom-wrapper').querySelector('.tabs-custom-header');
    let startMouseX = 0;
    let startScrollX = 0;
    let isDragging = false;

    // Mouse events for drag detection
    scrollableDiv.addEventListener('mousedown', (event) => {
      if (!isMobileScreen()) {
        return
      }
      // Track where the mouse started
      startMouseX = event.pageX;
      startScrollX = scrollableDiv.scrollLeft;
      isDragging = true;
      // Prevent text selection and other default behaviors while dragging
      event.preventDefault();
    });

    scrollableDiv.addEventListener('mousemove', (event) => {
      if (!isMobileScreen() || !isDragging) {
        return
      }
      // Calculate the change in mouse position
      const deltaX = event.pageX - startMouseX;
      // Adjust scroll position based on mouse movement
      scrollableDiv.scrollLeft = startScrollX - deltaX;
    });

    scrollableDiv.addEventListener('mouseup', () => {
      isDragging = false;
    });

    scrollableDiv.addEventListener('mouseleave', () => {
      isDragging = false;
    });


    // needed delay
    let i = 0;
    const pageLoadInterval = setInterval(() => {
      headerScrollBarCalculation()
      setQuoteMinHeight()
      if (i >= 50) {
        clearInterval(pageLoadInterval)
      }
      i++;
    }, 500)
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout)
      headerScrollBarCalculation()
      setQuoteMinHeight()
      resizeTimeout = setTimeout(function () {
        headerScrollBarCalculation()
        setQuoteMinHeight()
      }, 500)
    })

    // Handle browser back button - restore accordion state
    // Use a flag to prevent multiple listeners
    // if (!window.__spz_1003_v2_popstate_listener) {
    //   console.log('>>> 0')
    //   window.__spz_1003_v2_popstate_listener = true;
    //   window.addEventListener('popstate', () => {
    //     console.log('>>> 1')
    //     // Wait a bit for DOM to be ready
    //     setTimeout(() => {
    //       const savedIndex = sessionStorage.getItem('spz_1003_v2_accordion_index');
    //       console.log(savedIndex, '>>> 2')
    //       if (savedIndex !== null) {
    //         const accordionWrapperCheck = document.querySelector('.spz-1003-tabs-custom-container');
    //         const contentsCheck = document.querySelector('.tabs-custom-header');
    //         if (accordionWrapperCheck && contentsCheck) {
    //           const itemsCheck = Array.from(contentsCheck.children);
    //           const index = parseInt(savedIndex, 10) - 1;
    //           if (index >= 0 && index < itemsCheck.length) {
    //             // Find the current active index
    //             let currentActive = 0;
    //             itemsCheck.forEach((item, i) => {
    //               if (item.classList.contains('active')) {
    //                 currentActive = i;
    //               }
    //             });
                
    //             if (index !== currentActive) {
    //               // Trigger click on the item to switch
    //               itemsCheck[index].click();
    //               // Scroll to accordion section
    //               setTimeout(() => {
    //                 accordionWrapperCheck.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //               }, 100);
    //             }
    //           }
    //         }
    //       }
    //     }, 100);
    //   });
    // }

}



function restoreAccordionState(fromBack = false) {
  const savedIndex = sessionStorage.getItem('spz_1003_v2_accordion_index')
  if (!savedIndex) return

  const wrapper = document.querySelector('.spz-1003-tabs-custom-container')
  if (!wrapper) return

  const header = wrapper.querySelector('.tabs-custom-header')
  const content = wrapper.querySelector('.tabs-custom-content')

  header.querySelector('.active')?.classList.remove('active')
  content.querySelector('.active')?.classList.remove('active')

  header.querySelector(`[data-index="${savedIndex}"]`)?.classList.add('active')
  content.querySelector(`[data-index="${savedIndex}"]`)?.classList.add('active')

  window.moveTheTitle?.(savedIndex)
  window.setQuoteMinHeight?.()

  setTimeout(() => {
    window.scrollTo({
      top: wrapper.getBoundingClientRect().top + window.pageYOffset,
      behavior: 'smooth'
    })
  }, fromBack ? 300 : 100)
}

function restoreAccordionWhenReady(fromBack = false) {
  const check = () => {
    if (!document.querySelector('.spz-1003-tabs-custom-container')) {
      requestAnimationFrame(check)
      return
    }
    restoreAccordionState(fromBack)
  }
  check()
}

window.addEventListener('pageshow', e => {
  if (e.persisted) {
    restoreAccordionWhenReady(true)
  }
})

function isPageRefresh() {
  if (performance.getEntriesByType) {
    const nav = performance.getEntriesByType('navigation')[0];
    return nav && nav.type === 'reload';
  }
  return performance.navigation.type === 1;
}
if (isPageRefresh()) {
  sessionStorage.removeItem('spz_1003_v2_accordion_index');
}


if (!window.__spz_1003_v2_restored) {
  window.__spz_1003_v2_restored = true;
  restoreAccordionState();
}


function waitForElement(cssSelector, callback) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector)
        if (stop) return
        if (elementCached) {
          callback(elementCached)
          clearTimeout(timeout)
        } else {
          window.requestAnimationFrame(check)
        }
      } catch (err) {
        console.log(err)
      }
    }
  window.requestAnimationFrame(check)
  timeout = setTimeout(function () {
    stop = true
  }, 5000)
}


waitForElement('.main-grid #features-checkbox-section', () => {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (document.querySelector('.main-grid #features-checkbox-section') && !document.querySelector('.spz-1003-tabs-custom-container')) {
        console.log('Adding accordion section');
        addAccordion();
        restoreAccordionState();
      }
    }
  })
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true
  };
  observer.observe(document.body, config)
})



const formLoaded = setInterval(() => {
  if (document.querySelector('.main-grid #main') && !document.querySelector('.spz-1003-tabs-custom-container')) {
    clearInterval(formLoaded);
    addAccordion();
    restoreAccordionState();
  }
});
