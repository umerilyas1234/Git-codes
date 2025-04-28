(function () {
  //DEV 1/8. Put asana task URL here
const asana_URL = `https://app.asana.com/0/1206002187116436/1209090991523465/f`
//DEV 2/8. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const heroSelector = `.homepage_main_top`;
//DEV 3/8. Choose where redesigned hero section should appear
const position = "beforebegin" //"beforebegin","afterbegin", "beforeend", "afterend"
//DEV 4/8. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const formSelector = ``;
//DEV 5/8. Fill hero content values. See comments below
const heroContent = {
  //[1] Hero form heading
   customHTMLBefore:'',
  //[2] Hero form prozac
  customHTMLAfter: ``,
  //[3] Content eyebrow
  contentSuperHeading: "Netwrix Endpoint Protector",
  //[4] Content trustBadge
  trustBadge:'',
  //[6] Hero pills
  contentPills:'',
  //[7] Hero subheading
  contentSubHeading:"",
  //[8] Arrow image between the form and content
  //Alt value for arrow
  middleArrowAlt: "arrow",
  //[9] Hero bullets
  features: [
    {
      checkmarkImage:
        "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
      featureItemContent:
        "<strong>Device Control.</strong> Comprehensive USB & peripheral port control to lock down, monitor, and manage devices.",
    },
    {
      checkmarkImage:
        "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
      featureItemContent:
        "<strong>Content-Aware Protection.</strong> Detailed monitoring, control, and blocking of file transfers through content and context inspection.",
    },
    {
      checkmarkImage:
        "//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/check.svg",
      featureItemContent:
        "<strong>Enforce USB Encryption.</strong> Efficient encryption, management, and security of USB storage devices, safeguarding data in transit.",
    },
  ],
};
const additionalSection ='';

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/

//Helper function to animate labels for inputs
function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
  const formTemplate = `
		<div class="spz5003-bg-wrap product_top second_type">
	        <div class="spz-form-wrap">
			  <div class="content-section">
	            ${
	              formData.contentSuperHeading.replace(/\s/g, "").length !== 0
	                ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
	                : ""
	            }
	            ${formData.trustBadge.length !== 0
	            ? `<div class="trust-badge">
	            	<picture>
		              ${formData.trustBadge.map(
		                  (item) =>
		                    `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
		                )
		                .join("")
		              }
		              <img src="${formData.trustBadge[0].url}" alt="trust badge" />
		            </picture>
	            </div>`
	            : ""
	            }
	            ${
	              formData.contentPills.length !== 0
	                ? `<div class="pills-wrap">
		              ${formData.contentPills.map(
		                  (item) =>
		                    `<div class="pill-item">${item}</div>`
		                )
		                .join("")}
	            	</div>`
	                : ""
	            }
	            ${
	              formData.contentSubHeading.replace(/\s/g, "").length !== 0
	                ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
	                : ""
	            }
              <div class="button-wrapper">
                <a class="button-request-demo spz-5003-requst-demo-cta" href="#">REQUEST DEMO</a>
                <div class="free-trial-wrapper">
                  <a class="button-free-trial spz-5003-free-trial-cta" href="#">FREE TRIAL</a>
                  <div class="desc">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/windows.svg" alt="Microsoft Windows Icon" width="32" height="32">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/apple.svg" alt="Apple Icon" width="32" height="32">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/linux.svg" alt="Linux Icon" width="32" height="32">
                  </div>
                </div>
              </div>
	          </div>
	          <div class="hero-image">
                <picture>
                 <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5003/image.webp">
                 <source media="(max-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5002/tablet-hero2.png">
                 <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5002/image_4.webp" alt="endpoint_protector_ui_image" width="1522" 
                height="1038" >
                </picture>
	          </div>
	        </div>
          <div class="logo-section">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514174/netwrix/5002/svg_3.svg" alt="Samsung Electronics Icon" width="173 height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514168/netwrix/5002/svg.svg" alt="ING Icon" width="124" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514170/netwrix/5002/svg_1.svg" alt="Allianz SE Icon" width="162" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514172/netwrix/5002/svg_2.svg" alt="Western Union Icon" width="132" height="70">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1729514177/netwrix/5002/svg_4.svg" alt="eBay Icon" width="133 " height="70">
           </div>
	    </div>`;

  let bodyLoaded = setInterval(()=>{
  	if(document.querySelector('body') && !document.querySelector('.spz-5003') &&  document.querySelector(heroSelector)){
  		clearInterval(bodyLoaded)
      document.querySelector('body').classList.add("spz-5003")

      document
      .querySelector(heroSelector)
      .insertAdjacentHTML(whereToPut, formTemplate)
      var heroDetail = document.querySelector('.product_top_box');
      document.querySelector('.content-superheading').insertAdjacentElement('afterend', heroDetail);
      //hidden value
      // Variation Hidden Field Name
      var spzHiddenFieldName = setInterval(() => {
        if (document.querySelectorAll('input[name="SPZ_Test"]').length > 0) {
          clearInterval(spzHiddenFieldName);
          setTimeout(() => {
            document.querySelectorAll('input[name="SPZ_Test"]')[0].value = 'variant_5003';
          }, 1000);
        }
      }, 100);
      // Variation Hidden Field Name over

      document.querySelector('.spz-form-wrap .button-wrapper').addEventListener("click",function(e){
        if(e.target.closest('a')==document.querySelector('.spz-form-wrap .button-wrapper .button-request-demo')){
          e.preventDefault();
          document.querySelector('.request_demo_button').click();
        }
        if( e.target.closest('a')==document.querySelector('.spz-form-wrap .button-wrapper .free-trial-wrapper .button-free-trial')){
          e.preventDefault();
          document.querySelector('.free_trial_button').click()
        }
      })

    }
  })
  
}
addBaseline(
  heroContent, //object with the data
  position, //any value you pass using insertAdjacentHTML
  formSelector, // control form selector
  heroSelector,
  additionalSection
);
})();
