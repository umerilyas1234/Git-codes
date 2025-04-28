const bodyInterval4006 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_10002')) {
		clearInterval(bodyInterval4006)
		document.querySelector('body').classList.add("spz_10002")
		const formInterval = setInterval(function () {
			if (document.querySelector('#LblPhone')) {
				clearInterval(formInterval)
				//   document.querySelector('.spz-11002-popup-wrapper .popup-content .form .form-col-container > p:first-child strong').textContent="Get a Demo";
				document.querySelector('#LblEmail').closest('.mktoFormRow').classList.add('width50', 'email-parent')
				document.querySelector('#LblEmail').textContent = "Business Email*";
				document.querySelector('#LblFirstName').closest('.mktoFormRow').classList.add('fname-parent')
				document.querySelector('#LblLastName').closest('.mktoFormRow').classList.add('lname-parent')
				document.querySelector('#LblPhone').closest('.mktoFormRow').classList.add('phone-parent')
				document.querySelector('#LblTitle').closest('.mktoFormRow').classList.add('job-parent', 'width50')
				document.querySelector('#LblCompany').closest('.mktoFormRow').classList.add('company-parent', 'width50')
				document.querySelector('#LblCountry').closest('.mktoFormRow').classList.add('country-parent', 'width50')
				document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.add('employee_c-parent')
				document.querySelector('.mktoPlaceholderDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
				document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
				document.querySelector('button.mktoButton').textContent = "Get Free Demo";
				document.querySelector('button.mktoButton').classList.add('spz_10002_v1');
				document.querySelector('button.mktoButton').insertAdjacentHTML('afterend', `<span class="mktoButton next_btn spz_10002_v1">Next</span>`);
				document.querySelector('[name="FirstName"]').tabIndex = 1;
				document.querySelector('[name="LastName"]').tabIndex = 2;
				document.querySelector('[name="Email"]').tabIndex = 3;
				document.querySelector('[name="Title"]').tabIndex = 4;
				document.querySelector('[name="Company"]').tabIndex = 5;
				document.querySelector('[name="Phone"]').tabIndex = 6;
				document.querySelector('[name="Employees_Text__c"]').tabIndex = 7;
				document.querySelector('[name="Country"]').tabIndex = 8;

				document.querySelector('.form-col-container p:nth-of-type(2)').textContent = "Complete the form below for a free demo";
				document.querySelector('.form-col-container').insertAdjacentHTML('afterbegin', `<div class="stepper"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/10002/Stepper_2.png" alt="stepper"></div>`);
				function hideOnload() {
					const fieldsToHide = ['#LblCompany', '#LblEmployees_Text__c', '#LblPhone', "#LblCountry", ".bhrForm__partnerDisclaimer"];
					fieldsToHide.forEach(selector => {
						document.querySelector(selector).closest('.mktoFormRow').classList.add('hide');
					});
				}
				hideOnload();

				window.addEventListener('click', function (e) {
					if (e.target.matches('.next_btn')) {
						const fields = [
							document.querySelector('#LblFirstName + input'),
							document.querySelector('#LblLastName + input'),
							document.querySelector('#LblEmail + input'),
							document.querySelector('#LblTitle + input')
						];


						if (fields.some(field => !field || field.value.trim() === '')) {
							document.querySelector('#mktoForm_1240 button.mktoButton').click();
						}

						showStepTwo();
					}
				});

				function showStepTwo() {
					const fields = [
						document.querySelector('#LblFirstName + input'),
						document.querySelector('#LblLastName + input'),
						document.querySelector('#LblEmail + input'),
						document.querySelector('#LblTitle + input')
					];

					let isValid = true;
					const emailField = fields[2]; // Email field is always the third in the array
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
					const emailValid = emailPattern.test(emailField.value.trim());

					fields.forEach(field => {
						const label = field?.previousElementSibling;

						if (!field || field.value.trim() === '' || field.classList.contains('mktoInvalid')) {
							field?.classList.add('mktoInvalid');
							label?.classList.add('error');
							isValid = false;
						} else {
							field.classList.remove('mktoInvalid');
							label?.classList.remove('error');
						}
					});

					// Email verification
					if (!emailValid && emailField.value.trim() !== '') {
						emailField.classList.add('mktoInvalid');
						emailField.previousElementSibling?.classList.add('error');
						isValid = false;
					} else if (emailValid) {
						emailField.classList.remove('mktoInvalid');
						emailField.previousElementSibling?.classList.remove('error');
					}

					if (isValid) {
						['#LblCompany', '#LblEmployees_Text__c', '#LblPhone', '#LblCountry', '.bhrForm__partnerDisclaimer'].forEach(selector => {
							const fieldWrap = document.querySelector(selector)?.closest('.mktoFormRow');
							if (fieldWrap?.classList.contains('hide')) {
								document.querySelector('button.mktoButton').textContent = "Get Free Demo";
								fieldWrap.classList.remove('hide');
								document.querySelector('.stepper img').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/10002/Stepper_3.png";
								setTimeout(() => {
									fieldWrap.querySelector('.mktoError')?.remove();
									fieldWrap.closest('.mktoForm').querySelector('.form-msg').remove();
								}, 200);
								fieldWrap.querySelector('.mktoField')?.classList.remove('mktoInvalid');
								hideFields();
								document.querySelector('.form-wrapper')?.classList.add('step_2');
							}
						});
					}
				}

				function hideFields() {
					const fieldsToHide = ['#LblFirstName', '#LblLastName', '#LblEmail', "#LblTitle"];
					fieldsToHide.forEach(selector => {
						document.querySelector(selector).closest('.mktoFormRow').classList.add('hide');
					});
				}

				const waitForHiddenInput = setInterval(function () {
					if (document.querySelector('input[name="LPV1__c"]')) {
						clearInterval(waitForHiddenInput);
						document.querySelector('input[name="LPV1__c"]').value = "#10002_Variant";
					}
				});

				// For safari - Browser Back
				MktoForms2.whenReady(function (form) {
					window.onpageshow = function (event) {
						if (event.persisted) {
							var selector = document.querySelector('main .form .mktoForm .mktoButton');
							selector.textContent = "Get Free Demo";
							selector.removeAttribute("disabled");
							const fieldsToHide = ['#LblFirstName', '#LblLastName', '#LblEmail', "#LblTitle"];
							fieldsToHide.forEach(selector => {
								document.querySelector(selector).closest('.mktoFormRow').classList.remove('hide');
							});
							document.querySelector('.form-wrapper')?.classList.remove('step_2');
							document.querySelector('.stepper img').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/10002/Stepper_2.png";
							hideOnload();
						}
					};

				});

			}
		}, 20)

	}

}, 10)



