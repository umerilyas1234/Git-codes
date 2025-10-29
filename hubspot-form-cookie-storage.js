/**
 * HubSpot Form Cookie Storage and Retrieval
 * 
 * This script handles storing form field values in cookies when forms are submitted
 * and retrieving them to prefill forms on thank you pages.
 */

// Configuration
const COOKIE_NAME = 'hubspot_form_data';
const COOKIE_EXPIRY_DAYS = 7; // Cookie expires in 7 days

// List of possible HubSpot form fields
const POSSIBLE_FIELDS = [
    '.hs_firstname input',
    '.hs_lastname input', 
    '.hs_company input',
    '.hs_jobtitle input',
    '.hs_what_describes_your_organization_best_ select',
    '.hs_email input',
    '.hs_number_of_products_to_market select',
    '.hs_would_you_like_demo_ select',
    '.hs_dropdown_country select',
    '.hs_demo_product_dropdown select'
];

/**
 * Cookie utility functions
 */
const CookieUtils = {
    /**
     * Set a cookie with the given name, value, and expiry
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} days - Days until expiry
     */
    setCookie(name, value, days) {
        try {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
            console.log(`Cookie set: ${name}`);
        } catch (error) {
            console.error('Error setting cookie:', error);
        }
    },

    /**
     * Get a cookie value by name
     * @param {string} name - Cookie name
     * @returns {string|null} - Cookie value or null if not found
     */
    getCookie(name) {
        try {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
            }
            return null;
        } catch (error) {
            console.error('Error getting cookie:', error);
            return null;
        }
    },

    /**
     * Delete a cookie by name
     * @param {string} name - Cookie name
     */
    deleteCookie(name) {
        try {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
            console.log(`Cookie deleted: ${name}`);
        } catch (error) {
            console.error('Error deleting cookie:', error);
        }
    }
};

/**
 * Form data collection and storage
 */
const FormDataStorage = {
    /**
     * Collect form field values and store them in a cookie
     */
    storeFormData() {
        try {
            const formData = {};
            let hasData = false;

            // Check each possible field and collect its value if it exists
            POSSIBLE_FIELDS.forEach(fieldSelector => {
                const field = document.querySelector(fieldSelector);
                if (field && field.value && field.value.trim() !== '') {
                    // Extract field name from selector (e.g., '.hs_firstname input' -> 'hs_firstname')
                    const fieldName = fieldSelector.split(' ')[0].substring(1); // Remove the dot
                    formData[fieldName] = field.value.trim();
                    hasData = true;
                    console.log(`Collected field: ${fieldName} = ${field.value}`);
                }
            });

            // Only store data if we found at least one field with a value
            if (hasData) {
                const jsonData = JSON.stringify(formData);
                CookieUtils.setCookie(COOKIE_NAME, jsonData, COOKIE_EXPIRY_DAYS);
                console.log('Form data stored in cookie:', formData);
            } else {
                console.log('No form data found to store');
            }

            return formData;
        } catch (error) {
            console.error('Error storing form data:', error);
            return {};
        }
    },

    /**
     * Retrieve form data from cookie and prefill form fields
     */
    prefillFormFromCookie() {
        try {
            const cookieData = CookieUtils.getCookie(COOKIE_NAME);
            if (!cookieData) {
                console.log('No form data found in cookie');
                return false;
            }

            const formData = JSON.parse(cookieData);
            let prefilledCount = 0;

            // Prefill each field that exists in the cookie data
            Object.keys(formData).forEach(fieldName => {
                const fieldSelector = `.${fieldName} input, .${fieldName} select`;
                const field = document.querySelector(fieldSelector);
                
                if (field && formData[fieldName]) {
                    field.value = formData[fieldName];
                    prefilledCount++;
                    console.log(`Prefilled field: ${fieldName} = ${formData[fieldName]}`);
                    
                    // Trigger change event to ensure any listeners are notified
                    field.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });

            console.log(`Prefilled ${prefilledCount} form fields from cookie`);
            return prefilledCount > 0;
        } catch (error) {
            console.error('Error prefilling form from cookie:', error);
            return false;
        }
    },

    /**
     * Clear stored form data from cookie
     */
    clearStoredData() {
        CookieUtils.deleteCookie(COOKIE_NAME);
        console.log('Stored form data cleared');
    }
};

/**
 * HubSpot form integration
 */
const HubSpotIntegration = {
    /**
     * Initialize form monitoring for submission events
     */
    initFormMonitoring() {
        try {
            // Monitor for HubSpot form submissions
            document.addEventListener('submit', function(event) {
                // Check if this is a HubSpot form
                const form = event.target;
                if (form.classList.contains('hs-form') || form.querySelector('.hs-form')) {
                    console.log('HubSpot form submission detected');
                    
                    // Small delay to ensure form data is processed
                    setTimeout(() => {
                        FormDataStorage.storeFormData();
                    }, 100);
                }
            });

            // Alternative: Monitor for HubSpot's custom events
            window.addEventListener('message', function(event) {
                if (event.data && event.data.type === 'hsFormCallback') {
                    console.log('HubSpot form callback received');
                    setTimeout(() => {
                        FormDataStorage.storeFormData();
                    }, 100);
                }
            });

            console.log('HubSpot form monitoring initialized');
        } catch (error) {
            console.error('Error initializing form monitoring:', error);
        }
    },

    /**
     * Initialize form prefilling for thank you pages
     */
    initFormPrefilling() {
        try {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.prefillForm();
                });
            } else {
                this.prefillForm();
            }
        } catch (error) {
            console.error('Error initializing form prefilling:', error);
        }
    },

    /**
     * Prefill form with a retry mechanism
     */
    prefillForm() {
        let attempts = 0;
        const maxAttempts = 10;
        const retryDelay = 500;

        const tryPrefill = () => {
            attempts++;
            
            if (FormDataStorage.prefillFormFromCookie()) {
                console.log('Form successfully prefilled');
                return;
            }

            if (attempts < maxAttempts) {
                console.log(`Prefill attempt ${attempts} failed, retrying in ${retryDelay}ms...`);
                setTimeout(tryPrefill, retryDelay);
            } else {
                console.log('Max prefilling attempts reached');
            }
        };

        tryPrefill();
    }
};

/**
 * Main initialization function
 */
function initHubSpotFormCookieSystem() {
    try {
        console.log('Initializing HubSpot Form Cookie System...');
        
        // Check if we're on a thank you page (you can customize this condition)
        const isThankYouPage = window.location.pathname.includes('thank-you') || 
                              window.location.pathname.includes('thankyou') ||
                              document.querySelector('body').classList.contains('thank-you-page');
        
        if (isThankYouPage) {
            console.log('Thank you page detected - initializing form prefilling');
            HubSpotIntegration.initFormPrefilling();
        } else {
            console.log('Form page detected - initializing form monitoring');
            HubSpotIntegration.initFormMonitoring();
        }
        
        console.log('HubSpot Form Cookie System initialized successfully');
    } catch (error) {
        console.error('Error initializing HubSpot Form Cookie System:', error);
    }
}

// Auto-initialize when script loads
initHubSpotFormCookieSystem();

// Export functions for manual use if needed
window.HubSpotFormCookie = {
    storeFormData: FormDataStorage.storeFormData,
    prefillFormFromCookie: FormDataStorage.prefillFormFromCookie,
    clearStoredData: FormDataStorage.clearStoredData,
    initFormMonitoring: HubSpotIntegration.initFormMonitoring,
    initFormPrefilling: HubSpotIntegration.initFormPrefilling
};
