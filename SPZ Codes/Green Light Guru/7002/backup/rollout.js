/**
 * HubSpot Form Cookie Storage System
 * 
 * This script handles storing form field values in cookies when HubSpot forms are submitted
 * Include this script ONLY on form pages (not thank you pages)
 */

// Cookie utility functions
const CookieManager = {
  // Set cookie with expiration (default 7 days)
  setCookie: function(name, value, days = 7) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
  }
};

// Form field mapping for HubSpot forms
const FORM_FIELDS = {
  'hs_firstname': 'firstname',
  'hs_lastname': 'lastname', 
  'hs_company': 'company',
  'hs_jobtitle': 'jobtitle',
  'hs_what_describes_your_organization_best_': 'organization_type',
  'hs_email': 'email',
  'hs_number_of_products_to_market': 'products_count',
  'hs_would_you_like_demo_': 'demo_preference',
  'hs_dropdown_country': 'country',
  'hs_demo_product_dropdown': 'demo_product'
};

/**
* Store form values in cookies
* Call this function when HubSpot form is submitted
*/
function storeFormValuesInCookies() {
  // Wait for HubSpot form to be fully loaded
  const checkFormLoaded = setInterval(() => {
      const hubspotForm = document.querySelector('form[id^="hsForm_"], .hs-form');
      if (hubspotForm) {
          clearInterval(checkFormLoaded);
          collectAndStoreValues();
      }
  }, 100);

  // Timeout after 10 seconds
  setTimeout(() => {
      clearInterval(checkFormLoaded);
  }, 10000);
}

function collectAndStoreValues() {
  let formData = {};
  let fieldsFound = 0;

  // Collect values from all available form fields
  Object.keys(FORM_FIELDS).forEach(selector => {
      const element = document.querySelector(`.${selector} input, .${selector} select`);
      
      if (element) {
          const value = element.value ? element.value.trim() : '';
          if (value) {
              formData[FORM_FIELDS[selector]] = value;
              fieldsFound++;
          }
      }
  });

  // Store all form data as JSON in cookie
  if (fieldsFound > 0) {
      CookieManager.setCookie('hubspot_form_data', JSON.stringify(formData), 7);
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupFormSubmissionListener();
});

/**
* Setup listener for HubSpot form submission
*/
function setupFormSubmissionListener() {
  // Listen for HubSpot form submission events
  document.addEventListener('submit', function(event) {
      const form = event.target;
      // Check for HubSpot form by ID pattern or class
      if (form.id && form.id.startsWith('hsForm_') || form.classList.contains('hs-form')) {
          // Small delay to ensure form data is captured
          setTimeout(storeFormValuesInCookies, 100);
      }
  });

  // Listen for HubSpot's custom events
  window.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'hsFormCallback') {
          setTimeout(storeFormValuesInCookies, 100);
      }
  });

  // Additional listener for HubSpot's iframe communication
  document.addEventListener('click', function(event) {
      const submitButton = event.target.closest('input[type="submit"], button[type="submit"]');
      if (submitButton) {
          const form = submitButton.closest('form');
          if (form && (form.id && form.id.startsWith('hsForm_') || form.classList.contains('hs-form'))) {
              setTimeout(storeFormValuesInCookies, 200);
          }
      }
  });
}

// Export functions for manual use if needed
window.HubSpotFormCookies = {
  store: storeFormValuesInCookies
};
