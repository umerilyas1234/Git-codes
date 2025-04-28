if (window.location.href.includes("product/credit")) {
  const bodyInterval7002 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7002')) {
      clearInterval(bodyInterval7002)
      document.querySelector('body').classList.add("spz_7002")

      localStorage.setItem('bdcAbTest15', '7002-V1');
      //DEVELOPER - STEP 1 of 2 - Put your asana task URL here
      const asana_URL = ``
      //DEVELOPER - STEP 2 of 2 - Fill the content for the sticky footer
      const stickyFooterContent = {
        heading: "Corporate cards with up to $5M credit. Cash back. Annual fees.  ",
        CTAs: [
          {
            ctaText: "Get a demo",
            ctaURL: "javascript:void(0);",
          }
        ]
      };

      if (!localStorage.getItem("footerHidden")) {
        addStickyFooter(stickyFooterContent);
      }

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      // This is the code to generate the sticky footer section do not edit it
      var targetElement = document.querySelector('.spz_7002 > section:nth-of-type(3)');
      var footerElement = document.querySelector('.footer-full');
      var scrollPosition = targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 100 : 0;

      var isGoUpAdded = false;
      var footerInView = false;

      // IntersectionObserver to detect if the footer is in view
      var footerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          footerInView = entry.isIntersecting;
          updateStickyBar(); // Update sticky bar based on footer visibility
        });
      });

      if (footerElement) {
        footerObserver.observe(footerElement);
      }

      // Function to update the sticky bar based on scroll position and footer visibility
      function updateStickyBar() {
        if (!localStorage.getItem("footerHidden")) {
          if (window.scrollY > scrollPosition && !footerInView && !isGoUpAdded) {
            document.querySelector("body").classList.add("goUp");
            isGoUpAdded = true; // Set flag to true when class is added
          } else if ((window.scrollY <= scrollPosition || footerInView) && isGoUpAdded) {
            document.querySelector("body").classList.remove("goUp");
            isGoUpAdded = false; // Set flag to false when class is removed
          }
        }
      }

      // Add a scroll event listener to trigger the sticky bar update
      window.addEventListener('scroll', updateStickyBar);

      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("sticky_close") ||
          e.target.classList.contains("footerBtn")
        ) {
          console.log('clicked');
          document.querySelector(".spz-sticky-footer").remove();
          localStorage.setItem("footerHidden", "true");
        }
        if (e.target.classList.contains("spz-primary")) {
          e.preventDefault();
          var heroForm = document.querySelector('#wf-form-Spend-Expense');
          if (heroForm) {
            heroForm.classList.add('pulse', 'stickFooter_triggered');
            var offset = 200;
            var targetPosition = heroForm.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            setTimeout(function () {
              heroForm.classList.remove('pulse');
            }, 6000);
          }
        }
      });

      function addStickyFooter(footerData) {
        const formTemplate = `
        <div class="spz-sticky-footer">
          <div class="spz-footer-container">
            <div class="spz-trust-logos-wrap">
              <div class="ratings">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1725006263/bill/7002/g2-logo.svg" alt="G2 Logo">
                <small><img src="//res.cloudinary.com/spiralyze/image/upload/v1727257569/bill/7002/rating-stars_1.svg" alt="Rating Stars"><span><b>4.4 </b> (2,700 reviews)</span></small>
              </div>
              <div class="spz-copy-wrap">
                <div class="spz-copy-heading">${stickyFooterContent.heading}</div>
              </div>
            </div>
            <div class="spz-ctas-wrap">
              ${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz_7002_V1 spz-primary">${item.ctaText}</a>`).join("")}
            </div>
          </div>
          <div class="close_wrapper">
            <a href="javascript:;" class="sticky_close"></a>
          </div>
        </div>
      `;
        document.body.insertAdjacentHTML("beforeend", formTemplate);
      }

      var form = $('#wf-form-Spend-Expense');

      // Add a submit event handler
      form.submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If the form is valid, submit it asynchronously using AJAX
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (response) {
            if (form.hasClass('stickFooter_triggered')) {
              window.VWO = window.VWO || [];
              VWO.event = VWO.event || function () { VWO.push(["event"].concat([].slice.call(arguments))) };
              VWO.event("7002StickyFooterAttribution");
            }
            console.log('Form submitted successfully:', response);
          },
          error: function (error) {
            // Handle errors
            console.error('Form submission failed:', error);
          }
        });
      });

    }
  }, 10);
}

if (window.location.href.includes("product/spend-and-expense")) {
  const bodyInterval7002 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7002')) {
      clearInterval(bodyInterval7002)
      document.querySelector('body').classList.add("spz_7002")

      localStorage.setItem('bdcAbTest15', '7002-V1');
      //DEVELOPER - STEP 1 of 2 - Put your asana task URL here
      const asana_URL = ``
      //DEVELOPER - STEP 2 of 2 - Fill the content for the sticky footer
      const stickyFooterContent = {
        heading: "Auto-capture expenses. Set spend limits. Real-time notifications.",
        CTAs: [
          {
            ctaText: "Get a demo",
            ctaURL: "javascript:void(0);",
          }
        ]
      };

      if (!localStorage.getItem("footerHidden")) {
        addStickyFooter(stickyFooterContent);
      }

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      // This is the code to generate the sticky footer section do not edit it
      var targetElement = document.querySelector('.spz_7002 > section:nth-of-type(3)');
      var footerElement = document.querySelector('.footer-full');
      var scrollPosition = targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 100 : 0;

      var isGoUpAdded = false; // Flag to track the state of 'goUp' class
      var footerInView = false; // Flag to track footer visibility

      // IntersectionObserver to detect if the footer is in view
      var footerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          footerInView = entry.isIntersecting;
          updateStickyBar(); // Update sticky bar based on footer visibility
        });
      });

      if (footerElement) {
        footerObserver.observe(footerElement);
      }

      // Function to update the sticky bar based on scroll position and footer visibility
      function updateStickyBar() {
        if (!localStorage.getItem("footerHidden")) {
          if (window.scrollY > scrollPosition && !footerInView && !isGoUpAdded) {
            document.querySelector("body").classList.add("goUp");
            isGoUpAdded = true; // Set flag to true when class is added
          } else if ((window.scrollY <= scrollPosition || footerInView) && isGoUpAdded) {
            document.querySelector("body").classList.remove("goUp");
            isGoUpAdded = false; // Set flag to false when class is removed
          }
        }
      }

      // Add a scroll event listener to trigger the sticky bar update
      window.addEventListener('scroll', updateStickyBar);

      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("sticky_close") ||
          e.target.classList.contains("footerBtn")
        ) {
          document.querySelector(".spz-sticky-footer").remove();
          localStorage.setItem("footerHidden", "true");
        }
        if (e.target.classList.contains("spz-primary")) {
          e.preventDefault();
          var heroForm = document.querySelector('#wf-form-Spend-Expense');
          if (heroForm) {
            heroForm.classList.add('pulse', 'stickFooter_triggered');
            var offset = 200;
            var targetPosition = heroForm.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            setTimeout(function () {
              heroForm.classList.remove('pulse');
            }, 6000);
          }
        }
      });

      function addStickyFooter(footerData) {
        const formTemplate = `
        <div class="spz-sticky-footer">
          <div class="spz-footer-container">
            <div class="spz-trust-logos-wrap v1_2">
              <div class="ratings">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1725006263/bill/7002/g2-logo.svg" alt="G2 Logo">
                <small><img src="//res.cloudinary.com/spiralyze/image/upload/v1727257569/bill/7002/rating-stars_1.svg" alt="Rating Stars"><span><b>4.4 </b> (2,700 reviews)</span></small>
              </div>
              <div class="spz-copy-wrap">
                <div class="spz-copy-heading">${stickyFooterContent.heading}</div>
              </div>
            </div>
            <div class="spz-ctas-wrap">
              ${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz_7002_V1 spz-primary">${item.ctaText}</a>`).join("")}
            </div>
          </div>
          <div class="close_wrapper">
            <a href="javascript:;" class="sticky_close"></a>
          </div>
        </div>
      `;
        document.body.insertAdjacentHTML("beforeend", formTemplate);
      }

      var form = $('#wf-form-Spend-Expense');

      // Add a submit event handler
      form.submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If the form is valid, submit it asynchronously using AJAX
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (response) {
            if (form.hasClass('stickFooter_triggered')) {
              window.VWO = window.VWO || [];
              VWO.event = VWO.event || function () { VWO.push(["event"].concat([].slice.call(arguments))) };
              VWO.event("7002StickyFooterAttribution");
            }
            console.log('Form submitted successfully:', response);
          },
          error: function (error) {
            // Handle errors
            console.error('Form submission failed:', error);
          }
        });
      });

    }
  }, 10);

}

if (window.location.href.includes("product/virtual-cards")) {
  const bodyInterval7002 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7002')) {
      clearInterval(bodyInterval7002)
      document.querySelector('body').classList.add("spz_7002")

      localStorage.setItem('bdcAbTest15', '7002-V1');
      //DEVELOPER - STEP 1 of 2 - Put your asana task URL here
      const asana_URL = ``
      //DEVELOPER - STEP 2 of 2 - Fill the content for the sticky footer
      const stickyFooterContent = {
        heading: "Make digital payments. Set spend limits. Track purchases in real time.",
        CTAs: [
          {
            ctaText: "Get a demo",
            ctaURL: "javascript:void(0);",
          }
        ]
      };

      if (!localStorage.getItem("footerHidden")) {
        addStickyFooter(stickyFooterContent);
      }

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      // This is the code to generate the sticky footer section do not edit it
      var targetElement = document.querySelector('.spz_7002 #formjumplink');
      var footerElement = document.querySelector('.footer-full');
      var scrollPosition = targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 100 : 0;

      var isGoUpAdded = false; // Flag to track the state of 'goUp' class
      var footerInView = false; // Flag to track footer visibility

      // IntersectionObserver to detect if the footer is in view
      var footerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          footerInView = entry.isIntersecting;
          updateStickyBar(); // Update sticky bar based on footer visibility
        });
      });

      if (footerElement) {
        footerObserver.observe(footerElement);
      }

      // Function to update the sticky bar based on scroll position and footer visibility
      function updateStickyBar() {
        if (!localStorage.getItem("footerHidden")) {
          if (window.scrollY > scrollPosition && !footerInView && !isGoUpAdded) {
            document.querySelector("body").classList.add("goUp");
            isGoUpAdded = true; // Set flag to true when class is added
          } else if ((window.scrollY <= scrollPosition || footerInView) && isGoUpAdded) {
            document.querySelector("body").classList.remove("goUp");
            isGoUpAdded = false; // Set flag to false when class is removed
          }
        }
      }

      // Add a scroll event listener to trigger the sticky bar update
      window.addEventListener('scroll', updateStickyBar);

      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("sticky_close") ||
          e.target.classList.contains("footerBtn")
        ) {
          document.querySelector(".spz-sticky-footer").remove();
          localStorage.setItem("footerHidden", "true");
        }
        if (e.target.classList.contains("spz-primary")) {
          e.preventDefault();
          var heroForm = document.querySelector('#wf-form-Spend-Expense');
          if (heroForm) {
            heroForm.classList.add('pulse', 'stickFooter_triggered');
            var offset = 200;
            var targetPosition = heroForm.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            setTimeout(function () {
              heroForm.classList.remove('pulse');
            }, 6000);
          }
        }
      });

      function addStickyFooter(footerData) {
        const formTemplate = `
        <div class="spz-sticky-footer">
          <div class="spz-footer-container">
            <div class="spz-trust-logos-wrap v1_3">
              <div class="ratings">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1725006263/bill/7002/g2-logo.svg" alt="G2 Logo">
                <small><img src="//res.cloudinary.com/spiralyze/image/upload/v1727257569/bill/7002/rating-stars_1.svg" alt="Rating Stars"><span><b>4.4 </b> (2,700 reviews)</span></small>
              </div>
              <div class="spz-copy-wrap">
                <div class="spz-copy-heading">${stickyFooterContent.heading}</div>
              </div>
            </div>
            <div class="spz-ctas-wrap">
              ${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz_7002_V1 spz-primary">${item.ctaText}</a>`).join("")}
            </div>
          </div>
          <div class="close_wrapper">
            <a href="javascript:;" class="sticky_close"></a>
          </div>
        </div>
      `;
        document.body.insertAdjacentHTML("beforeend", formTemplate);
      }


      var form = $('#wf-form-Spend-Expense');

      // Add a submit event handler
      form.submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If the form is valid, submit it asynchronously using AJAX
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (response) {
            if (form.hasClass('stickFooter_triggered')) {
              window.VWO = window.VWO || [];
              VWO.event = VWO.event || function () { VWO.push(["event"].concat([].slice.call(arguments))) };
              VWO.event("7002StickyFooterAttribution");
            }
            console.log('Form submitted successfully:', response);
          },
          error: function (error) {
            // Handle errors
            console.error('Form submission failed:', error);
          }
        });
      });

    }
  }, 10);

}
if (window.location.href.includes("product/accounts-payable")) {
  const bodyInterval7002 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_7002')) {
      clearInterval(bodyInterval7002)
      document.querySelector('body').classList.add("spz_7002")

      localStorage.setItem('bdcAbTest15', '7002-V1');
      //DEVELOPER - STEP 1 of 2 - Put your asana task URL here
      const asana_URL = ``
      //DEVELOPER - STEP 2 of 2 - Fill the content for the sticky footer
      const stickyFooterContent = {
        heading: "Auto-pay vendors. Track payments. Two-way sync with your accounting software.",
        CTAs: [
          {
            ctaText: "Get a demo",
            ctaURL: "javascript:void(0);",
          }
        ]
      };

      if (!localStorage.getItem("footerHidden")) {
        addStickyFooter(stickyFooterContent);
      }

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
      // This is the code to generate the sticky footer section do not edit it
      var targetElement = document.querySelector('.spz_7002 #formjumplink');
      var footerElement = document.querySelector('.footer-full');
      var scrollPosition = targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 100 : 0;

      var isGoUpAdded = false; // Flag to track the state of 'goUp' class
      var footerInView = false; // Flag to track footer visibility

      // IntersectionObserver to detect if the footer is in view
      var footerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          footerInView = entry.isIntersecting;
          updateStickyBar(); // Update sticky bar based on footer visibility
        });
      });

      if (footerElement) {
        footerObserver.observe(footerElement);
      }

      // Function to update the sticky bar based on scroll position and footer visibility
      function updateStickyBar() {
        if (!localStorage.getItem("footerHidden")) {
          if (window.scrollY > scrollPosition && !footerInView && !isGoUpAdded) {
            document.querySelector("body").classList.add("goUp");
            isGoUpAdded = true; // Set flag to true when class is added
          } else if ((window.scrollY <= scrollPosition || footerInView) && isGoUpAdded) {
            document.querySelector("body").classList.remove("goUp");
            isGoUpAdded = false; // Set flag to false when class is removed
          }
        }
      }

      // Add a scroll event listener to trigger the sticky bar update
      window.addEventListener('scroll', updateStickyBar);

      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("sticky_close") ||
          e.target.classList.contains("footerBtn")
        ) {
          document.querySelector(".spz-sticky-footer").remove();
          localStorage.setItem("footerHidden", "true");
        }
        if (e.target.classList.contains("spz-primary")) {
          e.preventDefault();
          var heroForm = document.querySelector('#directSignup');
          if (heroForm) {
            heroForm.classList.add('pulse', 'stickFooter_triggered');
            var offset = 200;
            var targetPosition = heroForm.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            setTimeout(function () {
              heroForm.classList.remove('pulse');
            }, 6000);
          }
        }
      });

      function addStickyFooter(footerData) {
        const formTemplate = `
        <div class="spz-sticky-footer">
          <div class="spz-footer-container">
            <div class="spz-trust-logos-wrap v1_4">
              <div class="ratings">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1725006263/bill/7002/g2-logo.svg" alt="G2 Logo">
                <small><img src="//res.cloudinary.com/spiralyze/image/upload/v1727257569/bill/7002/rating-stars_1.svg" alt="Rating Stars"><span><b>4.4 </b> (2,700 reviews)</span></small>
              </div>
              <div class="spz-copy-wrap">
                <div class="spz-copy-heading">${stickyFooterContent.heading}</div>
              </div>
            </div>
            <div class="spz-ctas-wrap">
              ${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class="spz_7002_V1 spz-primary">${item.ctaText}</a>`).join("")}
            </div>
          </div>
          <div class="close_wrapper">
            <a href="javascript:;" class="sticky_close"></a>
          </div>
        </div>
      `;
        document.body.insertAdjacentHTML("beforeend", formTemplate);
      }

      var form = $('#wf-form-Spend-Expense');

      // Add a submit event handler
      form.submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If the form is valid, submit it asynchronously using AJAX
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize(),
          success: function (response) {
            if (form.hasClass('stickFooter_triggered')) {
              window.VWO = window.VWO || [];
              VWO.event = VWO.event || function () { VWO.push(["event"].concat([].slice.call(arguments))) };
              VWO.event("7002StickyFooterAttribution");
            }
            console.log('Form submitted successfully:', response);
          },
          error: function (error) {
            // Handle errors
            console.error('Form submission failed:', error);
          }
        });
      });

    }
  }, 10);
}
