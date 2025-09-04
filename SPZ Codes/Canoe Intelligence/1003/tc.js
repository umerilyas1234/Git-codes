let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);
function spz1002() {
    if (!document.querySelector('body').classList.contains('spz_1002')) {
        document.querySelector('body').classList.add('spz_1002','small-form');

        document.querySelector('.form_bg').parentElement.classList.add('form_wrapper');
        document.querySelector('.form_bg').insertAdjacentHTML('afterbegin', `<h3>Get a demo</h3>`);


        // Form visual changes code
        function formModification() {
            // Add Label dynamically
            document.querySelectorAll('.form_wrapper .gfield.gfield_visibility_visible:not(.gform_hidden)').forEach(function (el) {
                const label = el.querySelector('label');
                const inputElement = el.querySelector('input, select, textarea');
        
                if (inputElement && label) {
                    if (label && label.innerText.includes('Company Type*')) {
                        label.innerText = 'Company type*';
                    }
                    if (label && label.innerText.toLowerCase().includes('country / region')) {
                        label.innerText = 'Country*';
                    }
                    if (inputElement.tagName === 'TEXTAREA') {
                        label.innerText = 'Message (optional)';
                    }
                    inputElement.setAttribute('placeholder', label.innerText);
                    inputElement.setAttribute('autocomplete', 'no-fill');
                }
            });
        
            // Reorder fields
            const field16 = document.querySelector('.form_wrapper #field_3_16');
            const field2 = document.querySelector('.form_wrapper #field_3_2');
            const field9 = document.querySelector('.form_wrapper #field_3_9');
            const footer = document.querySelector('.form_wrapper .gform_footer');
        
            if (field16 && field2) field16.after(field2);
            if (footer && field9) footer.after(field9);

            // remove small-form class if first four inputs has at least one value.
            const input1 = document.querySelector('#input_3_15');
            const input2 = document.querySelector('#input_3_16');
            const input3 = document.querySelector('#input_3_2');
            const input4 = document.querySelector('#input_3_4');
            const firstFourInputs = [input1, input2, input3, input4];

            function checkInputs() {
                const allInputsFilled = firstFourInputs.every(input => input && input.value.trim() !== '');
                if (allInputsFilled) {
                    if(document.querySelector('body').classList.contains('small-form')) {
                        document.querySelector('#validation_message_3_5')?.remove();
                        document.querySelector('#validation_message_3_23')?.remove();
                    }
                    document.querySelector('body').classList.remove('small-form');
                }
            }

            // Initial check on page load
            checkInputs();

            // Add event listener to each input
            firstFourInputs.forEach(input => {
                if (input) {
                    input.addEventListener('keyup', checkInputs);
                }
            });
        
            // Input/Select/Textarea focus/blur/change logic
            const allInputs = document.querySelectorAll('.form_wrapper .gform_fields .gfield.gfield_visibility_visible input, .form_wrapper .gform_fields .gfield.gfield_visibility_visible select, .form_wrapper .gform_fields .gfield.gfield_visibility_visible textarea');
        
            function labelChange(el) {
                const field = el.closest('.gfield');
                if (!field) return;
        
                if (el.tagName === 'SELECT') {
                    const label = field.querySelector('label');
                    const selectValue = el.value;
        
                    if (label && selectValue === '') {
                        const firstOption = el.querySelector('option');
                        if (firstOption) {
                            firstOption.innerText = label.innerText;
                        }
                    }
                }
        
                if (!el.value) {
                    field.classList.remove('active', 'focused');
                } else {
                    field.classList.add('active');
                    field.classList.remove('focused');
                }
            }
        
            allInputs.forEach(function (el) {
                el.addEventListener('focus', () => {
                    el.closest('.gfield')?.classList.add('active', 'focused');
                });
        
                el.addEventListener('blur', () => {
                    labelChange(el);
                });
        
                el.addEventListener('change', () => {
                    labelChange(el);
        
                    // Reset state field class if hidden
                    const stateField = document.querySelector('#field_3_18');
                    if (stateField?.style.display === 'none') {
                        stateField.classList.remove('active');
                    }
                });
        
                // Initial check
                labelChange(el);
            });

            let Time2 = new Date().getTime()/1000;
            console.log('Time 2 > ' + Time2);

            let timeDifference = Time2 - Time1;
            console.log('Time difference > ' + timeDifference + ' seconds');
        }
        

        formModification();
        document.querySelector('body').style.visibility = 'visible';

        // Call the function to modify the form on gform_post_render event
        jQuery(document).on('gform_post_render', function(event, formId){
            // Only select the form inside .form_wrapper
            const $heroForm = jQuery('.form_wrapper form#gform_3');

            if ($heroForm.length && !$heroForm.data('modified')) {
                $heroForm.data('modified', true);
                document.querySelector('body').classList.add('removeAnimation');
                formModification();
                // Remove the animation class after a short delay       
                setTimeout(() => {
                    document.querySelector('body').classList.remove('removeAnimation');
                }, 2000);    

                const validationMessage = document.querySelector('.form_wrapper .gfield--input-type-email .validation_message');
                if (validationMessage) {
                    validationMessage.innerHTML = validationMessage.innerHTML.replace(
                        'The email address entered is invalid, please check the formatting (e.g. email@domain.com).',
                        'Invalid email format.'
                    );
                }
            }
        });
    }
}

spz1002();

setTimeout(() => {
    document.querySelector('body').style.visibility = 'visible';
}, 3000);

(function() {

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    const expName = '1003'; //experiment name should be #1001, #1002, #1003 etc.
    const variantName = `#` + expName + `_spz_TC`; //variantName should be _V1, _V2, _TC etc.
    const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com

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
            document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        var ExistingExperimentName = getCookie('ExperimentName');
        var ExistingExperimentValue = getCookie('ExperimentValue');
        var ExistingExperimentNameList = ExistingExperimentName?ExistingExperimentName.split(',') : [];

        if (!ExistingExperimentName) {

            setCookie('ExperimentName', currentExperimentName, 1);
            setCookie('ExperimentValue', currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {

            setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
            setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

        } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {

            var existingNames = ExistingExperimentName.split(',');
            var existingValues = ExistingExperimentValue.split(',');

            var index = existingNames.indexOf(currentExperimentName);
            existingValues[index] = currentExperimentValue;

            setCookie('ExperimentName', existingNames.join(','), 1);
            setCookie('ExperimentValue', existingValues.join(','), 1);
        }
    }
}());
