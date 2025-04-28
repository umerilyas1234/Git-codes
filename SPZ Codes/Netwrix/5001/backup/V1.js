function loadTestCode5001() {
  if (!document.querySelector("body").classList.contains("spz_t5001")) {
    document.querySelector("body").classList.add("spz_t5001");
    document.querySelector('#bottom_header .logo_full').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/5001/epp-logo-netwrix-new_1_webp.webp";
    var checkIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#1EC3E0"></rect>
        <path d="M8.23601 14.3037L5.99951 12.0555L7.17601 10.879L8.70551 12.3925C9.54673 13.225 10.3489 13.906 10.4881 13.906C10.6273 13.906 12.1977 12.453 13.9779 10.6771L17.2146 7.44824L18.5714 8.72294L14.6634 12.6374C12.514 14.7904 10.6918 16.5519 10.614 16.5519C10.5362 16.5519 9.46611 15.5402 8.23601 14.3037Z" fill="white"></path>
      </svg>
    `;
    var currentCheckIcon = document.querySelectorAll('.call_to_action_products_text .cta_pt_icon');
    currentCheckIcon.forEach((icon) => {
      icon.innerHTML = checkIcon;
    });
    document.querySelector(".call_to_action_products").insertAdjacentHTML("afterend", `
     <div class="logos_list">
        <ul>
          <li>
            <div class="logo_main">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/svg_01.svg" alt="Samsung"></figure>
            </div>
          </li>
          <li>
            <div class="logo_main">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/svg_02.svg" alt="ING">
              </figure>
            </div>
          </li>
          <li>
            <div class="logo_main">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/svg_03.svg" alt="Allianz"></figure>
            </div>
          </li>
          <li>
            <div class="logo_main">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/svg_04.svg" alt="Western union"></figure>
            </div>
          </li>
          <li>
            <div class="logo_main">
              <figure><img src="//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/svg_05.svg" alt="ebay"></figure>
            </div>
          </li>
        </ul>
      </div> 
    `);

    //DEVELOPER - STEP 1 of 7 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/0/1206002187116436/1208247796185977/f`
    //DEVELOPER - STEP 2 of 7 Fill triageData array with appropriate data. 1 question equals to 1 object in array. See example below
    const triageData = [
      //Question 1 start
      {
        questionSuperHeading: "Get Pricing",
        questionHeading: "What operating system(s) do you use?",
        questionSubHeading: "Some subheading",
        answers: [
          {
            answerText: 'Windows',
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/windows.svg'
          },
          {
            answerText: 'MacOS',
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/apple.svg'
          },
          {
            answerText: 'Linux',
            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1726335109/netwrix/5001/linux.svg'
          }
        ]
      },
      //Question 1 end
      //Question 2 start
      {
        questionSuperHeading: "Get Pricing",
        questionHeading: "Number of computers to protect:",
        questionSubHeading: "Some subheading",
        answers: [
          {
            answerText: '1-150',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          },
          {
            answerText: '151-500',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          },
          {
            answerText: '501-2,000',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          },
          {
            answerText: '2,001-7,500',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          },
          {
            answerText: '7,501-25,000',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          }
          ,
          {
            answerText: '25,000+',
            answerImage: 'https://res.cloudinary.com/spiralyze/image/upload/v1718639048/finquery/3001/sbita-accounting.svg'
          }
        ]
      }
      //Question 2 end
    ]
    //DEVELOPER - STEP 3 of 7 Set unique selector of target section where you want triage to appear
    const sectionSelector = `.pricing-request-form-inner`
    //DEVELOPER STEP 4 of 7 - Choose where you triage section should appear accroding to control target section
    const position = "afterend" //"beforebegin", "beforeend", "afterend"
    //DEVELOPER - STEP 5 of 7 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const formUniqueSelector = "#pricing-form" //<--- form uqniue selector goes here. e.g.
    //DEVELOPER - STEP 6 of 7 Find the class or ID of the control inputs and place it below in
    const inputsSelectors = ["#pricing-form #firstname", "#pricing-form #lastname", "#pricing-form #email", "#pricing-form #phone"] //Examples of selectors: "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
    //DEVELOPER - STEP 7 of 7 Copy labels test from Figma and place it below in
    const labelValues = ["First Name", "Last Name", "Work Email", "Work Phone Number"] //Grab values from Figma design: "First Name", "Last Name", "Email" etc...

    addTriage(triageData, formUniqueSelector)


    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function addTriage(triageData, formSelector) {
      const triageTemplate = `
        <div class="spz-triage-wrap">
        	<div class="questions-progress">
        		${triageData.length !== 0
        &&
        triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')
        }
        		<div class="progress-item"></div>
        	</div>
        	<div class="questions-wrap">
	            ${triageData.length !== 0
        &&
        triageData.map((item, index) => {
          return `
                <div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''}">
                  <div class="question-superheading">${item.questionSuperHeading}</div>
                    <div class="question-heading">${item.questionHeading}</div>
                      <div class="answers-wrap">
                        ${item.answers.map((itemm, indexx) => {
            return `
                        <div class="answer-item">
                          ${itemm.answerImage.length !== 0 ?
                `<img src="${itemm.answerImage}" class="answer-image"/>` :
                ``
              }
                          <div class="answer-text">${itemm.answerText}</div>
                          <div class="answer-checkbox"></div>
                        </div>
                        `
          }).join('')
            }
                    </div>
                    <div class="next-question">Next</div>
                </div>
                `
        }).join('')
        }
            <div class="question-form spz-hidden spz-form-wrap">
              <div class="question-superheading">Get Pricing</div>
            </div>
          </div>
            
        </div>
        `;
      //Append triage section
      document.querySelector(sectionSelector).insertAdjacentHTML(
        position,
        triageTemplate,
      );
      document.querySelector('.question-1 .next-question').classList.add('step_one');
      document.querySelector('.question-2 .next-question').classList.add('step_two');
      var question_twoItem = document.querySelectorAll('.question-2 .answer-item');
      function removeCheckedClass() {
        question_twoItem.forEach(item => {
          item.classList.remove('checked');
        });
      }
      // Checking answers listener
      document.querySelectorAll('.answer-item').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('answer-item')) {
            removeCheckedClass();
            e.target.classList.contains('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked');
          } else {
            removeCheckedClass();
            console.log('checkedddddd 12321312312');
            e.target.parentElement.classList.contains('checked') ? e.target.parentElement.classList.remove('checked') : e.target.parentElement.classList.add('checked')
          }
          // Check the text inside .answer-text and check the corresponding checkbox
          let answerText = item.querySelector('.answer-text').textContent.trim();
          let isChecked = item.classList.contains('checked');
          if (answerText === "Windows") {
            document.querySelector('#pricing-form #windows').checked = isChecked;
          } else if (answerText === "MacOS") {
            document.querySelector('#pricing-form #macos').checked = isChecked;
          } else if (answerText === "Linux") {
            document.querySelector('#pricing-form #linux').checked = isChecked;
          } else if (answerText === "1-150") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "150" : "";
          } else if (answerText === "151-500") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "500" : "";
          } else if (answerText === "501-2,000") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "2000" : "";
          } else if (answerText === "2,001-7,500") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "7500" : "";
          } else if (answerText === "7,501-25,000") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "25000" : "";
          } else if (answerText === "25,000+") {
            document.querySelector('#pricing-form #number_of_computers').value = isChecked ? "25001" : "";
          }
        })
      });
      //Next question click listener
      document.querySelectorAll('.next-question').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          if(item.classList.contains('step_one')) {
            document.querySelector('body').classList.add('step_two');
            if (!document.querySelector('#pricing-form #windows').checked &&
            !document.querySelector('#pricing-form #macos').checked &&
            !document.querySelector('#pricing-form #linux').checked) {
              showError('Please select at least one option.', item);
              return;
            } 
            else {
              removeError(); 
            }
          } else if(item.classList.contains('step_two')) {
            document.querySelector('body').classList.remove('step_two');
            document.querySelector('body').classList.add('step_three');
            if (document.querySelector('#pricing-form #number_of_computers').value === "") { 
              showError('Please select at least one option.', item);
              return;
            } else {
              removeError();
            }
          }
          item.parentElement.classList.add('spz-hidden')
          item.parentElement.nextElementSibling.classList.remove('spz-hidden')
          document.querySelector('.progress-item.active').nextElementSibling.classList.add('active')
          document.querySelector('.progress-item.active').classList.add('completed')
          document.querySelector('.progress-item.active').classList.remove('active')
        })
      })

      if (!document.querySelector(formSelector)) {
        document
          .querySelector(".spz-form-wrap")
          .insertAdjacentHTML(
            "beforeend",
            "<div style='color:red;'>Add proper form selector in code to load form</div>"
          );
      } else {
        const formLoaded = setInterval(() => {
          if (
            document.querySelector(formSelector) &&
            document.querySelectorAll(`${formSelector} input`).length > 0
          ) {
            clearInterval(formLoaded);
            document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelector))
            animateLabels(inputsSelectors, labelValues)
          }
        });
      }
    }
    //Helper function to add input listeners like focus, blur and add class to parent div
    function addInputListener(input) {
      input.placeholder = "";
      input.addEventListener("focus", function () {
        input.closest(".spz-input-wrap").classList.remove("has-value");
        input.closest(".spz-input-wrap").classList.add("focused");
      });
      input.addEventListener("blur", function () {
        if (input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.remove("focused");
          input.closest(".spz-input-wrap").classList.add("has-value");
        } else {
          input.closest(".spz-input-wrap").classList.remove("focused");
        }
      });
    }
    //Helper function to animate labels for inputs
    function animateLabels(inputs, labelValues) {
      inputs.map((item, index) => {
        const parentDiv = findParent(inputs[index]);
        const label = document.createElement("label");
        const input = document.querySelector(inputs[index]);
        parentDiv.querySelector('label:not(.label-spz)').style.display = 'none'
        label.innerText = labelValues[index];
        label.classList.add(`label-spz`);
        label.classList.add(`label-spz-${item.replace("#pricing-form #", "")}`);
        label.style.width = "";
        parentDiv.classList.add("spz-input-wrap");
        label.addEventListener("click", function (e) {
          e.target.nextElementSibling.focus();
        });
        parentDiv.insertBefore(label, input);
        addInputListener(input);
        input.setAttribute('placeholder', '')
      });
    }
    //Helper function to find parent div of input or select element
    function findParent(elementSelector) {
      let element = document.querySelector(elementSelector);
      let wrapper = element.closest("div"); //define parent's tag name
      if (
        (wrapper.innerHTML.includes("<input") ||
          wrapper.innerHTML.includes("<select")) &&
        wrapper.innerHTML.includes("<label")
      ) {
        return wrapper;
      } else if (
        wrapper.parentElement.innerHTML.includes("<input") &&
        wrapper.parentElement.innerHTML.includes("<label")
      ) {
        return wrapper.parentElement;
      } else {
        console.log("something is wrong");
      }
    }
    setTimeout(() => {
      var privacyNote = document.querySelector('.privacy_notice');
      let content = privacyNote.innerHTML;

      let updatedContent = content.replace('* Your privacy is important to us.', '*Your privacy is important to us.<br>');
      privacyNote.innerHTML = updatedContent;

      document.querySelector("#pricing-form").insertAdjacentElement("afterend", privacyNote);
    }, 1000);

    function showError(message, item) {
      console.log(item);
      let errorMsg = document.querySelector('.error-message');
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11.8209 3.57789C11.893 3.6389 11.9696 3.72364 12.0499 3.82981L12.055 3.83998L12.062 3.85218L15.2116 9.35481L15.2117 9.35489L18.345 14.8268L18.348 14.8327L18.348 14.8327C18.4634 15.0635 18.5055 15.3018 18.4994 15.5229C18.4851 15.7618 18.4047 15.9874 18.2796 16.1718C18.1498 16.363 17.9764 16.5132 17.7871 16.6016L17.787 16.6014L17.7749 16.6075C17.6153 16.6873 17.4211 16.7284 17.2185 16.7217L17.2102 16.7214H17.2019H10.9952H4.75147H4.75088C4.54635 16.7137 4.35848 16.6611 4.18411 16.5779C3.97423 16.4721 3.79902 16.3084 3.68315 16.1088L3.68319 16.1088L3.6795 16.1026C3.56218 15.9071 3.49396 15.6681 3.50042 15.402C3.50724 15.206 3.55934 14.9978 3.6717 14.7648L3.67307 14.762L6.77858 9.34587L6.77886 9.34539L9.94444 3.81024L9.94474 3.80975C10.046 3.69957 10.1546 3.6047 10.2673 3.51954C10.533 3.34025 10.8122 3.26602 11.0727 3.27873C11.3471 3.29212 11.6083 3.39195 11.8146 3.57248L11.8146 3.57253L11.8209 3.57789Z" stroke="#E51B00"></path>
        <path d="M11.005 12.7124C11.1316 12.7124 11.2502 12.7361 11.3531 12.7836C11.4638 12.831 11.5587 12.8943 11.6457 12.9813C11.7327 13.0683 11.8039 13.1712 11.8434 13.2819C11.8909 13.3926 11.9146 13.5113 11.9146 13.6378C11.9146 13.7644 11.8909 13.883 11.8434 13.9858C11.796 14.0966 11.7327 14.1915 11.6457 14.2785C11.5587 14.3655 11.4559 14.4367 11.3531 14.4762C11.2423 14.5237 11.1237 14.5474 11.005 14.5474C10.8785 14.5474 10.7677 14.5237 10.657 14.4762C10.5463 14.4288 10.4514 14.3655 10.3564 14.2785C10.2694 14.1915 10.1983 14.0887 10.1587 13.9858C10.1113 13.8751 10.0875 13.7565 10.0875 13.6378C10.0875 13.5113 10.1113 13.4005 10.1587 13.2898C10.2062 13.1791 10.2694 13.0842 10.3564 12.9971C10.4435 12.9101 10.5463 12.839 10.657 12.7915C10.7677 12.744 10.8864 12.7203 11.0129 12.7203L11.005 12.7124Z" fill="#E51B00"></path>
        <path d="M11.1014 11.832H10.9115H10.7217L10.7138 11.6421C10.7059 11.476 10.6822 11.2941 10.6505 11.0885C10.6189 10.8828 10.5714 10.6614 10.524 10.4241L10.3025 9.43537C10.2392 9.13481 10.1839 8.8817 10.1522 8.66024C10.1206 8.43877 10.0969 8.25685 10.0969 8.11448C10.0969 7.98001 10.1206 7.85346 10.1601 7.73482C10.1997 7.61618 10.263 7.51335 10.35 7.41844C10.437 7.32352 10.5398 7.25234 10.6505 7.21279C10.7613 7.16533 10.8878 7.1416 11.0144 7.1416C11.1409 7.1416 11.2675 7.16533 11.3782 7.21279C11.4889 7.26024 11.5918 7.33143 11.6788 7.41844C11.7658 7.50544 11.8291 7.61618 11.8765 7.72691C11.9161 7.84555 11.9398 7.9642 11.9398 8.09866C11.9398 8.22521 11.924 8.39922 11.8844 8.62069C11.8449 8.83425 11.7974 9.10317 11.7183 9.42746L11.4889 10.4162C11.4494 10.5823 11.4178 10.7721 11.3861 10.9698C11.3545 11.1676 11.3308 11.389 11.3149 11.6342L11.2991 11.8241H11.1093L11.1014 11.832Z" fill="#E51B00"></path>
      </svg>`;

      const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;

      if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
        if (item.classList.contains('step_one')) {
          console.log('step one addeeeeee');
          document.querySelector('.step_one').insertAdjacentElement("beforebegin", errorMsg);
        } else if (item.classList.contains('step_two')) {
          console.log('step two addeeeddddd');
          document.querySelector('.step_two').insertAdjacentElement("beforebegin", errorMsg);
        }
      }
    }

    function removeError() {
      const errorMsg = document.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode5001();
  }
}, 100);
