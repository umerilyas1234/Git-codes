const startTime = Date.now();
function timeAlive1021() {
  let timeAlive = 0;
  const currentTime = Date.now();
  timeAlive = currentTime - startTime;
  return timeAlive;
}

function injectVariant1021() {
  if (document.body.classList.contains('spz_1021_v1')) return;
  document.body.classList.add('spz_1021_v1');

  const heroSection = document.querySelector("body > main > section.c--hero-a");

  if (heroSection) {
    heroSection.classList.add('spz__hero');

    const contentWrapper = heroSection.querySelector(".c--hero-a__ft-items__content");

    if (contentWrapper) {
      contentWrapper.classList.add('spz__hero__content-wrapper');

      const copyColumn = contentWrapper.children[0];

      if (copyColumn) {
        copyColumn.classList.add('spz__hero__copy-column');

        const title = copyColumn.querySelector("h1");

        if (title) {
          title.innerHTML = 'Data security that starts with identity™';
        }

        const description = copyColumn.querySelector("p");

        if (description) {
          description.innerHTML = 'You can&apos;t protect data without first securing the identities that access it. Netwrix puts identity at the core of your data security strategy.';
        }

        const ctaSection = copyColumn.querySelector(".c--hero-a__ft-items__content__wrapper");

        if (ctaSection) {
          ctaSection.classList.add('spz__hero__cta-section');

          ctaSection.children[0].classList.add('spz__hero__cta-button', 'primary');
          ctaSection.children[1].classList.add('spz__hero__cta-button', 'secondary');

          ctaSection.children[0].innerHTML = 'Get a demo';
          ctaSection.children[1].innerHTML = 'Contact us';

          ctaSection.children[0].href = 'https://net-demo-client.netlify.app/en/demo/';
          ctaSection.children[1].href = 'https://net-demo-client.netlify.app/en/contact/';
        }
      }

      const imageColumn = contentWrapper.children[1];

      if (imageColumn) {
        imageColumn.classList.add('spz__hero__image-column');
      }

      const image = document.createElement('img');
      image.src = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1021/main_image.webp';
      image.alt = 'Netwrix Hero Image';
      image.classList.add('spz__hero__image');
      imageColumn.insertAdjacentElement('afterbegin', image);

      imageColumn.classList.remove('f--col-4', 'f--col-tabletm-12', 'f--offset-2', 'f--offset-tabletl-0');
      imageColumn.classList.add('f--col-6', 'f--col-tabletm-12', 'f--offset-0');

      imageColumn.querySelector('div.c--hero-a__ft-items__content__item.js--stacked-cards').classList.add('f--col-8', 'f--col-tabletl-12', 'f--col-tabletm-12', 'f--offset-4', 'f--offset-tabletl-0', 'spz__cards-wrapper');
    }

  }

  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  //exptName should be #3001, #1002, #1003 etc.
  const expName = '1021';
  //variantName should be _V1, _V2, _TC etc.
  const variantName = `variant_` + expName;

  hiddenValue(expName, variantName);

  /***********************************
   ************************************
   DO NOT TOUCH
   BEYOND THIS LINE
   ******************************
   ************************/
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {

      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');

      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;

      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }


  // Add your variant logic here
  console.log(`SPZ 1021: Variant injected in ${timeAlive1021() / 1000}s`);
}

const bodyInterval1021 = setInterval(function () {
  if (document.querySelectorAll("body > main > section.c--hero-a").length > 0) {
    clearInterval(bodyInterval1021);
    injectVariant1021();
  }
}, 10);
