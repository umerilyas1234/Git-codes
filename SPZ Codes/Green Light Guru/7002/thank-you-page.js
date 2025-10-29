/**
 * HubSpot Thank You Page Form Prefilling System
 * 
 * This script handles prefilling thank you page forms with stored cookie values
 * Include this script ONLY on thank you pages
 */

// Cookie utility functions
const CookieManager = {
    // Get cookie value
    getCookie: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    },

    // Delete cookie
    deleteCookie: function(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
};

// Dynamic form field handling - no hardcoded field mapping needed

/**
 * Prefill thank you page form with stored cookie values
 */
function prefillThankYouPageForm() {
    console.log('Prefilling thank you page form...');
    
    // Wait for HubSpot form to be fully loaded
    const checkFormLoaded = setInterval(() => {
        const hubspotForm = document.querySelector('form[id^="hsForm_"], .hs-form');
        if (hubspotForm) {
            clearInterval(checkFormLoaded);
            applyStoredValues();
        }
    }, 100);

    // Timeout after 10 seconds
    setTimeout(() => {
        clearInterval(checkFormLoaded);
        console.warn('HubSpot form not found within timeout period');
    }, 10000);
}

function applyStoredValues() {
    const storedData = CookieManager.getCookie('hubspot_form_data');
    
    if (!storedData) {
        return;
    }

    try {
        const formData = JSON.parse(storedData);
        let fieldsPrefilled = 0;

        // Find the HubSpot form
        const hubspotForm = document.querySelector('form[id^="hsForm_"], .hs-form');
        if (!hubspotForm) return;

        // Get all form fields
        const allFields = hubspotForm.querySelectorAll('input, select, textarea');
        
        allFields.forEach(field => {
            // Skip hidden fields and submit buttons
            if (field.type === 'hidden' || 
                field.type === 'submit' || 
                field.type === 'button') {
                return;
            }

            // Get field identifier (name, id, or class)
            let fieldKey = field.name || field.id || field.className;
            
            // Clean up the field key to match stored data
            if (fieldKey) {
                fieldKey = fieldKey.replace(/^hs_/, '').replace(/[^a-zA-Z0-9_]/g, '_');
                
                // Look for matching stored value
                const storedValue = formData[fieldKey];
                
                if (storedValue) {
                    // Handle different input types
                    if (field.tagName === 'SELECT') {
                        // For select elements, find matching option
                        const options = field.querySelectorAll('option');
                        for (let option of options) {
                            if (option.value === storedValue || option.textContent.trim() === storedValue) {
                                field.value = option.value;
                                break;
                            }
                        }
                    } else {
                        // For input/textarea elements, set value directly
                        field.value = storedValue;
                    }
                    
                    // Trigger change event to ensure HubSpot recognizes the value
                    field.dispatchEvent(new Event('change', { bubbles: true }));
                    field.dispatchEvent(new Event('input', { bubbles: true }));
                    
                    fieldsPrefilled++;
                }
            }
        });

        // Optional: Clear cookies after successful prefill
        // CookieManager.deleteCookie('hubspot_form_data');
        
    } catch (error) {
        // Silent error handling
    }
}

/**
 * Clear stored form data from cookies
 */
function clearStoredFormData() {
    CookieManager.deleteCookie('hubspot_form_data');
}

/**
 * Debug function to check what's stored in cookies
 */
function debugStoredData() {
    const storedData = CookieManager.getCookie('hubspot_form_data');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return null;
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    prefillThankYouPageForm();
});

// Export functions for manual use if needed
window.ThankYouPageForm = {
    prefill: prefillThankYouPageForm,
    clear: clearStoredFormData,
    debug: debugStoredData
};
