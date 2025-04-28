function loadTestCode1070() {
  if (!document.querySelector("body").classList.contains("spz_t1070")) {
    document.querySelector("body").classList.add("spz_t1070");
    setTimeout(() => {
      document.querySelector('.form-pagination').insertAdjacentHTML('afterend', `<h3>Get a Demo</h3>`);
      document.querySelector('.modalQuestionsinner').insertAdjacentHTML('afterend', `<div class="modalQuestionsouter"></div>`);
      document.querySelector('.modalQuestionsouter').appendChild(document.querySelector('.modalQuestionsinner'));
      if(document.querySelector('.modal_form_wrapper .modal-get-form .hs-form .hs_submit .hs-button')){
        document.querySelector('.modal_form_wrapper .modal-get-form .hs-form .hs_submit .hs-button').classList.add('spz_1070_v1');
      }
      if(document.querySelector('.modal_form_wrapper .demo_form form.hs-form .hs_submit .hs-button')){
        document.querySelector('.modal_form_wrapper .demo_form form.hs-form .hs_submit .hs-button').classList.add('spz_1070_v1');
      }
      document.querySelector('.modalQuestionswrapper').insertAdjacentHTML('afterend', `
        <div class="modal_image">
          <picture>
            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1070/jupiterone-interface_10.webp" type="JupiterOne Demo">
            <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1070/jupiterone-interface_6.webp" type="JupiterOne Demo">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1070/jupiterone-interface_6.webp" alt="JupiterOne Demo" />
          </picture>
        </div>  
      `);
      document.querySelector('.form_footer').insertAdjacentHTML('afterend', `
        <div class="splide logo_slider" id="logo_slider">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <div class="logo_sliderData">
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658838/jupiterone/1070/logo_1.svg" alt="Bilt">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_2.svg" alt="DOMO">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_3.svg" alt="Kong">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_4.svg" alt="Landmark Information Group">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_2.svg" alt="DOMO">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_3.svg" alt="Kong">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_4.svg" alt="Landmark Information Group">
                  </figure>
                </div>
              </li>
              <li class="splide__slide">
                <div class="logo_sliderData">
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658838/jupiterone/1070/logo_1.svg" alt="Bilt">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_2.svg" alt="DOMO">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_3.svg" alt="Kong">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_4.svg" alt="Landmark Information Group">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_2.svg" alt="DOMO">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_3.svg" alt="Kong">
                  </figure>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1740658930/jupiterone/1070/logo_4.svg" alt="Landmark Information Group">
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>  
      `);
      getScript('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
        var logo_slider = new Splide('.logo_slider', {
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
        });
        logo_slider.mount();
      });
      function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
      }
    }, 1400);

  }
}
