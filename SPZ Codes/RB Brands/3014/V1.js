function loadTestCode3014() {
    if (!document.querySelector("body").classList.contains("spz_t3014")) {
        document.querySelector("body").classList.add("spz_t3014");
        const linkElement = document.querySelector('.home > div:nth-of-type(1) > div > div:nth-of-type(2) > div > a');
        linkElement.innerHTML = `<span>Phone Consultation</span> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4216 9.44237C16.8215 9.06148 17.4545 9.07692 17.8354 9.47685L23.391 15.3102C23.7588 15.6964 23.7588 16.3033 23.391 16.6895L17.8354 22.5228C17.4545 22.9228 16.8215 22.9382 16.4216 22.5573C16.0217 22.1764 16.0063 21.5434 16.3871 21.1435L20.3335 16.9998L9.3335 16.9998C8.78121 16.9998 8.3335 16.5521 8.3335 15.9998C8.3335 15.4476 8.78121 14.9998 9.3335 14.9998L20.3335 14.9998L16.3871 10.8562C16.0063 10.4562 16.0217 9.82325 16.4216 9.44237Z" fill="#FEFEFE"/>
        </svg>`;
    }
}

var bodyInterval = setInterval(() => {
    if (document.querySelectorAll("body").length > 0) {
        clearInterval(bodyInterval);
        loadTestCode3014();
    }
}, 100);
