function spz5002Test() {
  if (!document.querySelector('body').classList.contains('spz_5002')) {
    document.querySelector('body').classList.add('spz_5002');
  }
}

function isZipExcludedFilled() {
  const zipInput = document.querySelector('.icon-text__selected-zip-code-label');
  if (!zipInput) return false;

  const zip = parseInt(zipInput.textContent.trim(), 10);

  return 20101 <= zip && zip <= 24658;
}

function removeTest() {
  document.querySelector('body').classList.remove('spz_5002');
}

var pageList = [
  "https://oncourse-portal-qa.ohscloud.net/plans/all-plans",
  "https://oncourse-portal-qa.ohscloud.net/plans/water-sewer",
  "https://oncourse-portal-qa.ohscloud.net/plans/heating-cooling",
  "https://oncourse-portal-qa.ohscloud.net/plans/electrical-gas",
  "https://oncourse-portal-qa.ohscloud.net/plans/appliances",
  "https://oncourse-portal-qa.ohscloud.net/plans/whole-home"
];


let previousUrl = location.href;
// Run on initial load if URL matches


if (pageList.includes(window.location.href.split("?")[0].split("#")[0]) && !isZipExcludedFilled()) {
    spz5002Test();
}

var running = false;
const observer = new MutationObserver(() => {
    var currentPage = window.location.href.split("?")[0].split("#")[0];
    if (pageList.includes(currentPage) && !isZipExcludedFilled()) {
        if (running) return; // Prevent multiple executions
        
        running = true;
        console.log("Mutation detected: Run 5002 test");
        spz5002Test();
        // running = false;
        setTimeout(function(){running = false;}, 50);
    } else {
        removeTest();
    }
});

const config = { subtree: true, childList: true };
observer.observe(document.body, config);
