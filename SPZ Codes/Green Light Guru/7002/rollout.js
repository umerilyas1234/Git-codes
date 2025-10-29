/**
 * HubSpot Form Cookie Storage System (jQuery Version)
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

// Store form values in cookies
function storeFormValuesInCookies() {
    let formData = {};
    let fieldsFound = 0;

    // Find the HubSpot form using jQuery
    const $hubspotForm = $('form[id^="hsForm_"], .hs-form');
    if ($hubspotForm.length === 0) {
        return;
    }

    // Collect ALL input and select fields from the form using jQuery
    const $allFields = $hubspotForm.find('input, select, textarea');
    
    $allFields.each(function(index) {
        const field = $(this);
        const fieldValue = field.val();
        
        // Skip hidden fields, submit buttons, and empty values
        if (field.attr('type') === 'hidden' || 
            field.attr('type') === 'submit' || 
            field.attr('type') === 'button' ||
            !fieldValue || 
            !fieldValue.trim()) {
            return;
        }

        // Get field identifier (name, id, or class)
        let fieldKey = field.attr('name') || field.attr('id') || field.attr('class');
        
        // Clean up the field key
        if (fieldKey) {
            // Remove common prefixes and clean up
            fieldKey = fieldKey.replace(/^hs_/, '').replace(/[^a-zA-Z0-9_]/g, '_');
            
            // Use the field key as-is, or generate one if none exists
            if (!fieldKey) {
                fieldKey = `field_${fieldsFound}`;
            }
            
            formData[fieldKey] = fieldValue.trim();
            fieldsFound++;
        }
    });

    // Store all form data as JSON in cookie
    if (fieldsFound > 0) {
        CookieManager.setCookie('hubspot_form_data', JSON.stringify(formData), 7);
    }
}

// Auto-initialize when DOM is loaded
$(document).ready(function() {
    // Set up field change monitoring FIRST - this captures data as user types
    setTimeout(function() {
        const $hubspotForm = $('form[id^="hsForm_"], .hs-form');
        if ($hubspotForm.length > 0) {
            const $allFields = $hubspotForm.find('input, select, textarea');
            
            $allFields.on('input', function() {
                storeFormValuesInCookies();
            });
            
            $allFields.on('change', function() {
                storeFormValuesInCookies();
            });
            
            $allFields.on('blur', function() {
                storeFormValuesInCookies();
            });
        }
    }, 1000);

    // Set up submit button click listener - capture BEFORE form submits
    $(document).on('click', 'input[type="submit"], button[type="submit"]', function() {
        const $form = $(this).closest('form');
        if ($form.length > 0 && ($form.attr('id') && $form.attr('id').startsWith('hsForm_') || $form.hasClass('hs-form'))) {
            // Store data immediately when submit button is clicked
            storeFormValuesInCookies();
        }
    });

    // Set up form submission listener as backup
    $(document).on('submit', 'form', function(event) {
        const $form = $(event.target);
        if ($form.attr('id') && $form.attr('id').startsWith('hsForm_') || $form.hasClass('hs-form')) {
            // Store data immediately when form submits
            storeFormValuesInCookies();
        }
    });
});

// Export functions for manual use if needed
window.HubSpotFormCookies = {
    store: storeFormValuesInCookies
};