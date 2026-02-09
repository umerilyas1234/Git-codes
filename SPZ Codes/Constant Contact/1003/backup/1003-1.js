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
hiddenValue('#1003 | Constant Contact | Home | Features Accordion', 'SPZ_1003_V1')

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to animate labels for inputs

// This is the code to generate the form over UI section do no edit it
function addAccordion() {

  document.body.classList.add('spz_1003_v1');


  //DEV 1/5. Put your asana task URL here
  const asana_URL = `https://app.asana.com/1/77217210692853/project/1206002187116436/task/1211457713388012?focus=true`

  //DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
  const template_sectionSelector = `#integrations-image`;

  //DEV 3/5. Choose where your accordion should appear
  const template_position = "afterend" //"beforebegin", "beforeend", "afterend"

  //DEV 4/5. Headline & accordion section
  const template_sectionContent = {
    sectionHeading: "Features",
    sectionSubHeading: "",
    accordionItems: [
      {
        title: 'Email marketing',
        content: '<p>Create professional emails in minutes. Select from hundreds of templates and customize or create your own. Generate content with AI. Pre-schedule sending.</p><p> Send emails to customers who abandon their cart or add items to their wish list. Suggest upsells after purchases. Auto-resend emails to non-openers. Boost sales & engagement.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-email-marketing_1.webp",
        imageAlt: "CTCT Email Marketing"
      },
      {
        title: 'Email templates',
        content: '<p>Choose from 200+ high-converting, professionally-designed templates. Newsletters, sales & fundraising, welcome emails, events, seasonal, real estate, nonprofit, and more.</p> <p>Edit with drag & drop. Add brand colors, logos, & images. Automatically adjust layouts for mobile devices.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-email-templates_4.webp",
        imageAlt: "CTCT Email Templates"
      },
      {
        title: 'Social media management',
        content: '<p>Generate all your social media posts at once with AI. Just enter a few keywords. Or turn emails into posts. See which days & times to post.</p> <p>Post to Instagram, Facebook, LinkedIn, and TikTok all at once. Add hashtags, images, and videos. Reply to comments & mentions.</p><p>Easily launch social ads & reach ready-to-buy customers. Increase online visibility & capture more sales.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-social-media-management_3.webp",
        imageAlt: "CTCT Social Media"
      },
      {
        title: 'Events & ticketing',
        content: '<p>Send texts & emails promoting your event, or share on social media. Free, paid, online, and in-person events. Create registration or RSVP pages. Accept online payments.</p><p>Create & send scannable tickets. See who\'s registering, how many tickets you\'ve sold, and more.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-evants-ticketing_1.webp",
        imageAlt: "CTCT Events Ticketing"
      },
      {
        title: 'Text marketing',
        content: '<p>Send texts that customers are excited to open & buy from. Let new customers join your text list with Text-to-Join, or invite email subscribers to join.</p><p>Generate content with AI. Preview messages before sending. Get a dedicated local number to send texts from.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-text-marketing_1.webp",
        imageAlt: "CTCT Text Marketing"
      },
      {
        title: 'Multi-account management',
        content: '<p>Manage marketing across all your departments, teams, or locations.</p><p>Set permission levels so only approved team members can create or edit marketing materials. Create brand templates with colors, images, & styling that auto-apply in new campaigns. Report on all your accounts & platforms at once.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-multi-account-management_1.webp",
        imageAlt: "CTCT Multi Account Management"
      },
      {
        title: 'Integrations',
        content: '<p>Sync with Google, Canva, Shopify, Square, Wix, Stripe, Xero, and 300+ more.</p><p>Auto-send messages to your website visitors based on pages they\'re visiting, purchases, etc. Capture new email contacts & customers via website forms. Sync customer contact info across platforms.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-integrations_2.webp",
        imageAlt: "CTCT Integrations"
      },
      {
        title: 'Reporting',
        content: '<p>Get detailed, easy-to-read reports on who\'s opening your emails, posts, and texts. See which content drives the most sales & revenue. Repeat what\'s successful & grow sales even more.</p>',
        imageUrl: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/ui-reporting_1.webp",
        imageAlt: "CTCT Reporting"
      },
    ],
    ctaText: "Start trial",
    ctaUrl: "https://www.constantcontact.com/signup"
  };

  const logos = [
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-the-ups-store_webp.webp", alt: "The UPS Store", width: "185px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-cornell-engineering_webp.webp", alt: "Cornell Engineering", width: "108px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-plam-beach-county_webp.webp", alt: "Palm Beach County", width: "56px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-mathnasium_webp.webp", alt: "Mathnasium", width: "148px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-techsoup_webp.webp", alt: "TechSoup", width: "113px" },
    { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/constantcontact/1003/logo-dream-vacations_webp.webp", alt: "Dream Vacations", width: "119px" }
  ];

  /***********************************
  DO NOT TOUCH BEYOND THIS LINE
  ************************/

  function addHorizontalAccordion(content, whereToPut, selector) {
    const { sectionHeading, sectionSubHeading, accordionItems, ctaText, ctaUrl } = content;

    const logosHTML = logos.map(logo =>
      `<div class="spz-logo-item" style="width: ${logo.width}">
      <img src="${logo.url}" alt="${logo.alt}" loading="lazy" />
    </div>`
    ).join('');

    const accordionHTML = accordionItems.map(item =>
      `<div class="content">
      <div class="spz-features-accordion__item">
        <span>${item.title}</span>
        <div class="progress_bar"><i></i></div>
      </div>
      <div class="solution__content">
        ${item.content}
        <div class="spz-ctas-wrap">
          <a href="${ctaUrl}" class="spz-primary spz1003_v1">${ctaText}</a>
        </div>
      </div>
      <div class="solution__image">
        <img src="${item.imageUrl}" alt="${item.imageAlt}" loading="lazy" />
      </div>
    </div>`
    ).join('');

    const imagesHTML = accordionItems.map((item, index) =>
      `<div class="solution__image-item ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${item.imageUrl}" alt="${item.imageAlt}" loading="lazy" />
    </div>`
    ).join('');

    const template = `
  	<div class="spz-social-proof">
      <div class="spz-logos-wrapper">${logosHTML}</div>
    </div>
    <div class="spz-bg-wrap">
      ${sectionHeading ? `<div class="features-heading">${sectionHeading}</div>` : ''}
      ${sectionSubHeading ? `<div class="features-subheading">${sectionSubHeading}</div>` : ''}
      <div class="spz-features-accordion__wrapper">
        <div class="spz-features-accordion__row">
          <div class="spz-features-accordion">
            <div class="spz-features-accordion__contents">${accordionHTML}</div>
          </div>
          <div class="spz-features-accordion__images">${imagesHTML}</div>
        </div>
      </div>
    </div>`;

    waitForElement(selector, (element) => {
      element.insertAdjacentHTML(whereToPut, template);
      initAccordion(accordionItems.length);
    });
  }

  function initAccordion(totalItems) {
    const DURATION = 8000;
    const INTERVAL = 200;
    const contents = document.querySelector('.spz-features-accordion__contents');
    const items = Array.from(contents.children);
    const imageContainer = document.querySelector('.spz-features-accordion__images');
    const imageItems = imageContainer ? Array.from(imageContainer.children) : [];
    const accordionWrapper = document.querySelector('.spz-bg-wrap');

    let activeIndex = 0;
    let progress = 0;
    let autoPlay = true;
    let stopped = false;
    let intervalId = null;
    let hasStarted = false;

    items[0].classList.add('active');

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        stopped = true;
        document.querySelectorAll('.progress_bar i').forEach(bar => bar.style.display = 'none');
        if (activeIndex !== index) switchItem(index);
      });

      item.addEventListener('mouseenter', () => {
        if (activeIndex === index && !stopped) autoPlay = false;
      });

      item.addEventListener('mouseleave', () => {
        if (activeIndex === index && !stopped) autoPlay = true;
      });
    });

    function startAccordion() {
      if (hasStarted) return;
      hasStarted = true;

      intervalId = setInterval(() => {
        if (!autoPlay || stopped) return;

        if (progress >= 100) {
          activeIndex = (activeIndex + 1) % totalItems;
          switchItem(activeIndex);
        } else {
          progress += (100 * INTERVAL) / DURATION;
          if (!stopped) {
            items[activeIndex].querySelector('.progress_bar i').style.width = `${progress}%`;
          }
        }
      }, INTERVAL);
    }

    function switchItem(index) {
      progress = 0;
      activeIndex = index;

      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        if (!stopped) item.querySelector('.progress_bar i').style.width = '0';
      });

      // Desktop images
      if (imageItems.length) {
        imageItems.forEach((img, i) => img.classList.toggle('active', i === index));
        fadeImage(imageItems[index]);
      }

      // Mobile/tablet images
      fadeImage(items[index].querySelector('.solution__image'));
    }

    function fadeImage(element) {
      if (element) {
        element.style.opacity = '0';
        setTimeout(() => element.style.opacity = '1', 250);
      }
    }

    // Intersection Observer to start accordion when in view
    if (accordionWrapper) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAccordion();
          }
        });
      }, {
        threshold: 0.1
      });

      observer.observe(accordionWrapper);
    } else {
      // Fallback: start immediately if wrapper not found
      startAccordion();
    }
  }

  addHorizontalAccordion(template_sectionContent, template_position, template_sectionSelector);


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
      if (document.querySelector('.main-grid #features-checkbox-section') && !document.querySelector('.spz-bg-wrap')) {
        console.log('Adding accordion section');
        addAccordion();
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
  if (document.querySelector('.main-grid #main') && !document.querySelector('.spz-bg-wrap')) {
    clearInterval(formLoaded);
    addAccordion();
  }
});
