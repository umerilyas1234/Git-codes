// Variant Code start
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1721989056/JupiterOne/1065/code/style.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1721989056/JupiterOne/1065/code/style.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);


  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
  document.head.appendChild(link);
}
function loadTestCode1065() {
  var runCode = setInterval(() => {

    // Get a reference to the HTML element
    var element = document.querySelector(".modal-form-wrapper");
    element.classList.remove("modal-form-wrapper");
    element.classList.add("modal_form_wrapper");

    if (document.querySelectorAll('.modalQuestionswrapper').length == 0 && document.querySelectorAll('.modal_form_wrapper').length > 0 && document.querySelectorAll('body').length > 0) {
      clearInterval(runCode);
      document.querySelector('body').classList.add('spz_t1065')
      document.querySelector('.modal-form-container').insertAdjacentHTML('beforebegin', `<div class="modalQuestionswrapper">
                <div class="modalQuestionsinner">
                    <div class="modalQuestions">
                        <div class="modal-container steps1">
                            <div class="form-pagination">
                                <div class="multistepbullet"></div>
                                <div class="multistepbullet"></div>
                                <div class="multistepbullet"></div>
                            </div>
                            <div class="modal-form has_loader">
                                <div class="modal-get-form hide"></div>
                                <div class="demo_form hide"></div>
                            </div>
                        </div>
                        <div class="integrationWrapper">
                            <div class="splide slide_integration">
                                <div class="integrationItem splide__track">
                                    <div class="integrationItem_inner splide__list">
                                        <div class="item splide__slide">
                                            <div class="itemContent">
                                                <span>6M+</span>
                                                <p>Assets Centralized and Normalized</p>
                                            </div>
                                            <div class="imgWrapper">
                                                <picture>
                                                    <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1716377610/jupiterone/1038/indeed_logosvg_1.svg">
                                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1716465446/jupiterone/1038/indeed_logosvg_2.svg">
                                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716465446/jupiterone/1038/indeed_logosvg_2.svg" alt="Indeed logo">
                                                </picture>		
                                            </div>
                                        </div>
                                        <div class="item splide__slide">
                                            <div class="itemContent">
                                                <span>100%</span>
                                                <p>AWS Asset Visibility</p>
                                            </div>
                                            <div class="imgWrapper">
                                                <picture>
                                                    <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1716377610/jupiterone/1038/frame_1171275567.svg">
                                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1716465445/jupiterone/1038/frame_1171275568.svg">
                                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716465445/jupiterone/1038/frame_1171275568.svg" alt="Mercury logo">
                                                </picture>	
                                            </div>
                                        </div>
                                        <div class="item splide__slide">
                                            <div class="itemContent">
                                                <span>+50%</span>
                                                <p>Automated Asset Evidence&nbsp;Collection</p>
                                            </div>
                                            <div class="imgWrapper">
                                                <picture>
                                                    <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1716377611/jupiterone/1038/frame_1171275564.svg">
                                                    <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1716465445/jupiterone/1038/frame_1171275569.svg">
                                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1716465445/jupiterone/1038/frame_1171275569.svg" alt="Codoxo logo">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

      // Infinte logo slider cloned code
      // Select all elements with the class .splide__slide
      const slidesToClone = document.querySelectorAll('.socialProofSlider .splide__slide');

      // Iterate over each slide and clone it
      slidesToClone.forEach((slideToClone) => {
        const clonedSlide = slideToClone.cloneNode(true);
        slideToClone.after(clonedSlide);
      });


      getScript('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
        var slide_integration = new Splide('.slide_integration', {
          type: 'loop',
          padding: '1.5rem',
          autoWidth: true,
          autoplay: true,
          gap: 16,
          arrows: false,
          pagination: false,
          focus: 'center',
          breakpoints: {
            767: {
              perPage: 1,
              padding: '0',
            }
          },
        });
        slide_integration.mount();
      });


      // For Load From
      function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
      }
      getScript("//js.hsforms.net/forms/embed/v2.js", function (event) {
        hbspt.forms.create({
          region: "na1",
          portalId: "8047501",
          formId: "485bd381-ac3b-4015-8927-b23a6eee8d81",
          target: '.modal-get-form'
        });;

        hbspt.forms.create({
          region: "na1",
          portalId: "8047501",
          formId: "4c483b9f-5214-402b-8a76-6f433b83b2ce",
          target: '.demo_form'
        });

        var getClassInterval = setInterval(function () {
          if (document.querySelectorAll('.spz_t1065 .modal-get-form .hs_submit .hs-button').length > 0) {
            clearInterval(getClassInterval);
            document.querySelector('.spz_t1065 .modal-form .modal-get-form .hs_submit .hs-button').insertAdjacentHTML('beforebegin', '<span class="form_black d-none">Back</span>');
            setTimeout(() => {
              document.querySelector('.spz_t1065 .modal-form .modal-get-form').classList.remove('hide');
              document.querySelector('.spz_t1065 .modal-form').classList.remove('has_loader');
            }, 500);
          }
        }, 500);
      });

      document.addEventListener('click', function (e) {

        const target = e.target;
        if (target && target.matches('.spz_t1065 .modal-get-form .hs_submit .hs-button') && document.querySelector('.modal-container').classList.contains('steps1')) {

          // Hack to prevent an issue
          // If someone back from second step after selecting any option in second steps then while click on next button from first steps, form is submitted directly instead of going to second steps.
          document.querySelectorAll('.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input[type="radio"]').forEach(function (radio) {
            if (radio.checked) {
              e.preventDefault();
            }
          });

          setTimeout(() => {
            if (document.querySelectorAll('.spz_t1065 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-radio .hs-error-msg').length == 0) {
              document.querySelector('.spz_t1065 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-checkbox .hs-error-msgs')?.classList.add('hide')
              document.querySelector('.modal-container').classList.add('steps2');
              document.querySelector('.modal-container').classList.remove('steps1');
            }
          }, 100);
        }

        // Second Steps error Show while click on next button.
        if (target && target.matches('.spz_t1065 .modal-get-form .hs_submit .hs-button') && document.querySelector('.modal-container').classList.contains('steps2') && document.querySelector('.spz_t1065 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-checkbox .hs-error-msgs')?.classList.contains('hide')) {
          console.log('click working');
          document.querySelector('.spz_t1065 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-checkbox .hs-error-msgs')?.classList.remove('hide')
        }

        if (target && target.matches('.form_black')) {
          document.querySelector('.modal-container').classList.remove('steps2');
          document.querySelector('.modal-container').classList.add('steps1');
        }
      });

      window.addEventListener("message", function (event) {
        if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
          document.querySelector('.modal-get-form').remove();
          document.querySelector('.modal-open .hide').style.display = "block";
          document.querySelector('.modal-container').classList.add('steps3');
          document.querySelector('.modal-container').classList.remove('steps2');

          function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
          }

          if (document.querySelector('.demo_form .hs_email input[type="email"]')) {

            var storedEmailSPZ = getCookie("AutoFillEmailSPZ");
            if (storedEmailSPZ) {
              document.querySelector('.demo_form .hs_email input[type="email"]').value = storedEmailSPZ;

              document.querySelector('.demo_form .hs_email input[type="email"]').focus();
              document.querySelector('.demo_form  input[name="firstname"]').focus();
            }
          }
        }
      });

      // load main Form
      var testFormInt = setInterval(() => {
        if (document.querySelector('.demo_form .hs-input')) {
          clearInterval(testFormInt);

          document.querySelector('.demo_form .hs-richtext').parentElement.classList.add('form_title_row');
          document.querySelector('.demo_form .hs-richtext h2').innerHTML = "Sounds like JupiterOne is a perfect fit for your asset management!";
          document.querySelector('.demo_form .hs-richtext p').innerHTML = `See how teams are getting complete visibility into their environment.
                        View&nbsp;assets connections. Prioritize risks.`;
          document.querySelector('.demo_form .hs_phone').classList.add('hide');
          document.querySelector('.demo_form .hs-how_did_you_hear_about_us_').classList.add('hide');

          document.querySelectorAll('.demo_form .hs-form-field').forEach(function (e) {
            if (e.querySelector('.input input')) {
              if (e.querySelector('.input input').value != '') {
                e.classList.add('is-filled');
              }
              else {
                e.classList.remove('is-filled');
              }
              e.querySelector('.input input').addEventListener('focus', function (elem) {
                if (elem.target.classList.contains('hs-input')) {
                  elem.target.closest('.hs-form-field').classList.add('is-focused');
                }
                fieldStates(elem.target);
              });
              e.querySelector('.input input').addEventListener('blur', function (elem) {
                elem.target.closest('.hs-form-field').classList.remove('is-focused');
                if (elem.target.value != '') {
                  elem.target.closest('.hs-form-field').classList.add('is-filled');
                }
                else {
                  elem.target.closest('.hs-form-field').classList.remove('is-filled');
                }
                fieldStates(elem.target);
              });

              e.querySelector('.input input').addEventListener('keyup', function (elem) {
                if (document.querySelector('.hs_firstname input').value != '' && document.querySelector('.hs_lastname input').value != '' && document.querySelector('.hs_email input').value != '' && document.querySelector('.hs_company input').value != '') {
                  if (document.querySelector('.hs_phone').classList.contains('hide') && document.querySelector('.hs-how_did_you_hear_about_us_').classList.contains('hide')) {
                    document.querySelector('.hs_phone').classList.remove('hide');
                    document.querySelector('.hs-how_did_you_hear_about_us_').classList.remove('hide');
                  }
                }
                fieldStates(elem.target);
                var findError = setInterval(() => {
                  if (elem.target.closest('.hs-form-field').querySelector('.hs-error-msg')) {
                    clearInterval(findError);
                    elem.target.closest('.hs-form-field').classList.add('is-error');
                    elem.target.closest('.hs-form-field').querySelector('.hs-error-msg').classList.remove('hide');
                  }
                  setTimeout(() => {
                    clearInterval(findError);
                  }, 5000);
                }, 100);
              });

              document.querySelector('.demo_form .hs_submit .hs-button').setAttribute('value', 'Get a Demo');
            }
          });
          document.querySelector('.demo_form .hs_submit .hs-button').addEventListener('click', function () {
            document.querySelectorAll('.demo_form .hs-form-field input').forEach(function (e) {
              fieldStates(e);
            });
          });

          function fieldStates(elem) {
            var findErrorInt = setInterval(() => {
              if (elem.classList.contains('error')) {
                clearInterval(findErrorInt);
                elem.closest('.demo_form .hs-form-field').classList.add('is-error');
              }
              else {
                elem.closest('.demo_form .hs-form-field').classList.remove('is-error');
              }
              setTimeout(() => {
                clearInterval(findErrorInt);
              }, 5000);
            }, 10);
          }
        }
      }, 10);
    }
  }, 500);
}



var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1725621495/JupiterOne/1064/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1725621495/JupiterOne/1064/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode1064() {
  if (!document.querySelector("body").classList.contains("spz_1064")) {
    document.querySelector("body").classList.add("spz_1064");

    setTimeout(() => {
      document.querySelector('.integrationWrapper').insertAdjacentHTML('afterend', `
        <div class="form_footer">
          <ul>
            <li>
              <div class="form_footerData">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1724399004/jupiterone/1064/eye.svg" alt="Complete asset visibility">
                <b>Complete Asset Visibility</b>
              </div>
            </li>
            <li>
              <div class="form_footerData">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1724399004/jupiterone/1064/target.svg" alt="Security control monitoring">
                <b>Security control monitoring</b>
              </div>
            </li>
            <li>
              <div class="form_footerData">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1724399004/jupiterone/1064/lightninga.svg" alt="Up-to-date asset inventory">
                <b>Up-to-date asset inventory</b>
              </div>
            </li>
          </ul>
        </div>
        `);
    }, 1000);

    window.addEventListener('click', function (e) {
      if (e.target.matches('.modal-container.steps1 .modal-get-form .hs_submit .actions .hs-button')) {
        console.log('clicked');
        document.querySelector('.demo_form form .form_title_row h2').innerHTML = `Thanks! Sounds like JupiterOne would be a good fit for your 
        <span class="sub_text"></span>`;
        document.querySelector('.demo_form form .form_title_row p').innerHTML = `Streamline <span class="subHead_text"></span>. View asset connections. Prioritize risks.`;
        let checkboxes = document.querySelectorAll('.hs_demo___type_of_environment .input .hs-input');
        let subTextElement = document.querySelector('.sub_text');

        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            if (checkbox.value == 'On-prem') {
              subTextElement.textContent = 'on-prem environment.';
            } else if (checkbox.value == 'Cloud') {
              subTextElement.textContent = 'cloud environment.';
            } else if (checkbox.value == 'Hybrid') {
              subTextElement.textContent = 'hybrid environment.';
            }
          }
        });
      }
      if (e.target.matches('.modal-container.steps2 .modal-get-form .hs_submit .actions .hs-button')) {
        console.log('clicked');

        let checkboxes = document.querySelectorAll('.hs_demo___use_cases_of_interest .input .hs-input');
        let subHeadTextElement = document.querySelector('.subHead_text');

        let selectedTexts = [];
        let hasOther = false;

        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            if (checkbox.value == 'Cyber asset management') {
              selectedTexts.push(' asset management');
            } else if (checkbox.value == 'Exposure management') {
              selectedTexts.push('exposure management');
            } else if (checkbox.value == 'Security posture management') {
              selectedTexts.push('continuous controls monitoring');
            } else if (checkbox.value == 'External attack surface management') {
              selectedTexts.push('vulnerability management');
            } else if (checkbox.value == 'Incident response') {
              selectedTexts.push('incident response');
            } else if (checkbox.value == 'Other') {
              let paragraph = document.querySelector('.demo_form form .form_title_row p');
              if (paragraph) {
                paragraph.childNodes.forEach(function (node) {
                  if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = node.textContent.replace('Streamline', '');
                  }
                });
              }
              hasOther = true;
              selectedTexts.push('Monitor devices, users, apps, providers, code repos, and more');
            }
          }
        });

        if (selectedTexts.length > 0) {
          let combinedText = '';

          if (hasOther && selectedTexts.length > 1) {
            combinedText = 'Monitor devices, users, apps, providers, code repos, and more';
          } else {
            if (selectedTexts.length === 1) {
              combinedText = selectedTexts[0];
            } else if (selectedTexts.length === 2) {
              combinedText = selectedTexts.join(' and ');
            } else {
              combinedText = selectedTexts.slice(0, -1).join(', ') + ', and ' + selectedTexts[selectedTexts.length - 1];
            }
          }

          subHeadTextElement.textContent = combinedText;
        }
      }
    });

  }
}



var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/v1736862326/JupiterOne/1068/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/v1736862326/JupiterOne/1068/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}
function loadTestCode1068() {
  if (!document.querySelector("body").classList.contains("spz_1068")) {
    document.querySelector("body").classList.add("spz_1068");
    setTimeout(() => {
      document.querySelector('.modalQuestions').insertAdjacentHTML('afterbegin', `
        <div class="modal_logo"><a href="https://www.jupiterone.com/" target="_blank"><img src="//res.cloudinary.com/spiralyze/image/upload/v1736772138/JupiterOne/1068/logo.svg" alt="Logo"></a></div>
      `);
      document.querySelector(".form-pagination").insertAdjacentHTML("afterend", `<h4>Answer 2 quick questions to personalize your experience</h4>`);
    }, 1000);

    window.addEventListener('click', function (e) {
      if (e.target.matches('.steps1 .hs-submit .actions input')) {
        updateStep2();
      }
    });
    function updateStep2() {
      function setUseCase(index, value) {
        const input = document.querySelector(`.modal-get-form .hs_demo___use_cases_of_interest .input ul li:nth-child(${index}) input`);
        const span = input.nextElementSibling;
        input.value = value;
        span.textContent = value;
      }

      setUseCase(1, 'Asset management');
      setUseCase(3, 'Continuous controls monitoring');
      setUseCase(4, 'Vulnerability management');
    }
  }
}

var bodyInterval1064 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval1064);
    loadTestCode1065();
    loadTestCode1064();
    loadTestCode1068();

    // Variation Hidden Field Name
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll('.demo_form input[name="spiralyze_testing_hidden_field"]').length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll('.demo_form input[name="spiralyze_testing_hidden_field"]').forEach(function (e) {
            e.value = 'variant_#1068'
          });
        }, 1000);
      }
    }, 100);
    // Variation Hidden Field Name over

  }
}, 100);
