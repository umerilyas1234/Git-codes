const bodyInterval1010 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_t1010')) {
		clearInterval(bodyInterval1010);
		document.querySelector('body').classList.add("spz_t1010");

		if (document.querySelector('input#SPZ_Test')) {
			document.querySelectorAll('input#SPZ_Test').forEach((input) => {
				input.value = 'variant_1010';
			});
		}

		setTimeout(() => {
			const accordionVideos = [
				'https://res.cloudinary.com/spiralyze/video/upload/v1746099428/netwrix/1010/Vid/risk_management.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/2.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/3.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/4.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036605/netwrix/1010/Vid/5.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/6.mp4',
				'https://res.cloudinary.com/spiralyze/video/upload/v1744036604/netwrix/1010/Vid/7.mp4'
			];

			const containers1 = document.querySelectorAll('.accordion_images .image-container');
			const containers2 = document.querySelectorAll('.content-part .accordion .img-wrap');

			accordionVideos.forEach((videoSrc, index) => {
				if (videoSrc) {
					[containers1[index], containers2[index]].forEach(container => {
						if (container) {
							const video = document.createElement('video');
							video.src = videoSrc;
							video.autoplay = true;
							video.loop = true;
							video.muted = true;
							video.playsInline = true;
							container.appendChild(video);
						}
					});
				}
			});
		}, 200);


		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
		//exptName should be #1001, #1002, #1003 etc.
		const expName = '1010';
		//variantName should be _V1, _V2, _TC etc.
		const variantName = `variant_` + expName;

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

	}
}, 10);