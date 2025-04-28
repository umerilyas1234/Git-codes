var cssContent = `
body.spz_t6002 #section--2 .block__awards-content > div > p > a {
  color: inherit;
  font-size: inherit;
  text-decoration: inherit;
  pointer-events: none;
}
`;

var styleElement = document.createElement('style');
styleElement.type = 'text/css';

if (styleElement.styleSheet) {
  styleElement.styleSheet.cssText = cssContent;
} else {
  styleElement.appendChild(document.createTextNode(cssContent)); 
}

document.head.appendChild(styleElement);

function loadTestCode6002() {
    if (!document.querySelector("body").classList.contains("spz_t6002")) {
        document.querySelector("body").classList.add("spz_t6002");
        // hidden values
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

        hiddenValue('#6002', '6002_Control');

        function getCookieForHiddenValue(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        // Variation Hidden Field Name
        var spzHiddenFieldName = setInterval(() => {
            if (document.querySelectorAll('input[name="Spiralyze_Form_Field__c"]').length > 0) {
                clearInterval(spzHiddenFieldName);
                setTimeout(() => {
                    document.querySelectorAll('input[name="Spiralyze_Form_Field__c"]')[0].value = getCookieForHiddenValue('ExperimentValue');
                }, 1000);
            }
        }, 100);
        // Variation Hidden Field Name over

    }
}


var bodyInterval = setInterval(() => {
    if (document.querySelectorAll("body").length > 0) {
        clearInterval(bodyInterval);
        loadTestCode6002();
    }
}, 100);
