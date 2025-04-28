const loadJS = (url, implementationCode, location) => {
  var scriptTag = document.createElement('script');
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
const gb_load_css = (path) => {
  let css = document.createElement('link');
  css.rel = 'stylesheet';
  css.media = 'all';
  css.href = path;

  document.getElementsByTagName('head')[0].appendChild(css);
}
gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
function trigger(el, eventType) {
  if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
    el[eventType]();
  } else {
    const event =
      typeof eventType === 'string'
        ? new Event(eventType, { bubbles: true })
        : eventType;
    el.dispatchEvent(event);
  }
}

//DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.


document.querySelector('.new-hero-section .left .form .custom_cta').addEventListener("click", function () {
  document.querySelector('.popup-wrapper').classList.add("show")
  document.querySelector('html').classList.add("scroll-hidden")
  document.querySelector('.spz-input-wrapper.email input').value = document.querySelector('.new-hero-section .left .form input').value;
  trigger(document.querySelector('.spz-input-wrapper.email input'), 'change')
})
document.querySelector('.new-hero-section .left .form input').addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.querySelector('.new-hero-section .left .form .custom_cta').click()
  }
});

loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
  var splide4002 = new Splide('.slider-wrapper-4002 .splide4002', {
    type: 'loop',
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
    direction: 'rtl',
  });
  setTimeout(function () {
    splide4002.mount();
    window.dispatchEvent(new Event('resize'));
  }, 200)
  window.dispatchEvent(new Event('resize'));
  window.addEventListener('resize', function () {
    splide4002.refresh()
    splide4002.destroy()
    splide4002.mount();
  })
}, document.body);

//form code
const formLoaded = setInterval(() => {
  if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
    //form modification
    //adding wrapper
    for (let i = 0; i < document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select').length; i++) {
      let target = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i];
      let wrapper = document.createElement('div');
      wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].getAttribute("id"));
      target.parentNode.insertBefore(wrapper, target);
      wrapper.appendChild(target);
    }
    //adding label
    for (let i = 0; i < document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select').length; i++) {
      let label = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].getAttribute("placeholder")
      if (!label && document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].querySelector('option')) {
        label = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].querySelector('option').textContent;
      }
      document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].insertAdjacentHTML("afterend", `
            <label for="${document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),form select')[i].getAttribute("id")}">${label}</label> 
         `)
    }
    // change position
    document.querySelector('.spz-input-wrapper.firstName').insertAdjacentElement('beforebegin', document.querySelector('.spz-input-wrapper.email'))
    document.querySelector('.spz-input-wrapper.email').insertAdjacentElement('afterend', document.querySelector('.spz-input-wrapper.name'))
    //  document.querySelector('.popup-wrapper ').insertAdjacentElement("beforeend",document.querySelector('.g-recaptcha'))

    //select condition checking
    const checkSelectCondition = () => {
      for (let i = 0; i < document.querySelectorAll('.spz-input-wrapper').length; i++) {
        if (document.querySelectorAll('.spz-input-wrapper')[i].querySelector('.hide')) {
          document.querySelectorAll('.spz-input-wrapper')[i].classList.add('hide')
        } else {
          document.querySelectorAll('.spz-input-wrapper')[i].classList.remove('hide')
        }

      }
    }
    checkSelectCondition()
    //select arrow
    for (let x = 0; x < document.querySelectorAll('form select').length; x++) {
      document.querySelectorAll('form select')[x].parentNode.insertAdjacentHTML("beforeend", `
            <div class="arrow"></div>  
            `)
    }
    //submit button 
    document.querySelector('#se-form-button').value = "Submit";
    document.querySelector('#se-form-button').classList.add("spz-submitcta-6002")
    // adding Business Type
    document.querySelector('.spz-input-wrapper.numberOfEmployees').insertAdjacentHTML("afterend", `
          <div class="spz-input-wrapper business-type">
            <select class="business-type" id="businessType" required>
              <option value="" selected disabled>Select Type</option>
            </select>
            <label for="businessType">Business Type</label> 
            <div class="arrow"></div>
          </div>
        `);

    // Populate the options
    const signupOptions = document.querySelectorAll('#signupType .form-option-field span');
    for (let i = 0; i < signupOptions.length; i++) {
      const optionText = signupOptions[i].textContent;
      document.querySelector('#businessType').insertAdjacentHTML("beforeend", `
            <option value="${optionText}">${optionText}</option>
          `);
    }

    // Add change event listener
    document.querySelector('#businessType').addEventListener("change", function () {
      const selectedIndex = this.selectedIndex - 1;
      if (selectedIndex >= 0) { // Check if a valid option is selected
        document.querySelectorAll('#signupType .form-option-field')[selectedIndex].querySelector('input').click();
      }
    });

    //input even listerer
    const allInput = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), form select');
    function labelChange(e) {
      if (e.value == '' || e.value == null) {
        e.closest(".spz-input-wrapper").classList.remove("hasValue");
      } else if (e.value != '' || e.value != null) {
        e.closest(".spz-input-wrapper").classList.add("hasValue");
      }
    }
    allInput.forEach(function (e) {
      e.addEventListener('blur', () => {
        labelChange(e);
      }, true);
      e.addEventListener('change', () => {
        labelChange(e);
      }, true);
      labelChange(e);
    })
    document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
      // Replace any non-digit character with an empty string
      this.value = this.value.replace(/\D/g, '');
    });
    //remove unecessary select
    for (let x = 0; x < document.querySelectorAll('#accountingSoftwareContainer select').length; x++) {
      document.querySelectorAll('#accountingSoftwareContainer select')[x].querySelector('option').disabled = true;
    }
    //browser detection
    let userAgent = navigator.userAgent;
    let browser;
    if (userAgent.match(/edg/i)) {
      browser = "edge";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browser = "firefox";
    } else if (userAgent.match(/opr\//i)) {
      browser = "opera";
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
      browser = "chrome";
    } else if (userAgent.match(/safari/i)) {
      browser = "safari";
    } else {
      //alert("Other browser");
    }
    document.querySelector('body').classList.add(browser);

    document.querySelector('.spz-form-wrap .close-button').addEventListener("click", function () {
      document.querySelector('.popup-wrapper').classList.remove("show")
      document.querySelector('html').classList.remove("scroll-hidden")
    })
  }
})


