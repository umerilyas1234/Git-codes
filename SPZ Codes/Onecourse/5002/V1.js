console.log('Time 1 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));

function spz1002Test() {
  if (!document.querySelector('body').classList.contains('spz_5002')) {
    document.querySelector('body').classList.add('spz_5002');
    // Put your test code here
    console.log('Time 2 > ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()].map((v, i) => v.toString().padStart(i === 3 ? 3 : 2, '0')).join(':'));
  }
}

function isZipExcluded() {
  const zipInput = document.querySelector('#zip-code');
  if (!zipInput) return false;

  const zip = parseInt(zipInput.value.trim(), 10);

  return zip >= 20101 && zip <= 24658;
}

function removeTest() {
  document.querySelector('body').classList.remove('spz_5002');
}

var pageList = [
  "https://www.awrusa.com/plans/all-plans",
  "https://www.awrusa.com/plans/water-sewer",
  "https://www.awrusa.com/plans/heating-cooling",
  "https://www.awrusa.com/plans/electrical-gas",
  "https://www.awrusa.com/plans/appliances",
  "https://www.awrusa.com/plans/whole-home"
];

function observerForLoadingBlock() {
  var target = document.body;
  if (!target) return;

  const config = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
  };

  let running = false;

  const callback = function (mutationsList, observer) {
    const currentPage = window.location.href.split("?")[0].split("#")[0];

    if (running) return;

    if (pageList.includes(currentPage) && !isZipExcluded()) {
      running = true;
      console.log("Mutation detected: Run spz1002Test()");
      spz1002Test();
      setTimeout(() => {
        running = false;
      }, 100);
    } else {
      if (document.querySelector('body').classList.contains('spz_5002') ) {
        console.log("URL not in list, running removeTest()");
        removeTest();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(target, config);
}

observerForLoadingBlock();
