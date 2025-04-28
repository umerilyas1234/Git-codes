var style = document.createElement('style');
style.innerHTML = `
  .spz_417 .sticky-aside > div > div .table-container {
    padding: 12px;
    border-radius: 8px;
    background: #F5F6F8;
    margin-bottom: 16px;
  }
  @media (min-width: 768px) and (max-width: 832px) {
    .spz_417 .sticky-aside > div > div .table-container {
      padding: 12.5px 12px 4px;
    }
  }
  @media (max-width: 767px) {
    .spz_417 .sticky-aside > div > div .table-container {
      padding: 12px 13px;
    }
  }
  .spz_417 .sticky-aside > div > div .table-container > br,
  .spz_417 .sticky-aside > div > div .table-container > .cart-border {
    display: none;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table {
    flex-wrap: wrap;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .cart-product-img {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .cart-product-title {
    display: none;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .cart-product-title + div {
    color: #1A1A1A;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .table-group-two {
    width: calc(100% - 76px);
    display: flex;
    justify-content: space-between;
    flex-grow: unset;
    align-items: center;
    margin-left: auto;
    margin-top: -27px;
  }
  @media (min-width: 768px) and (max-width: 832px) {
    .spz_417 .sticky-aside > div > div .table-container .flex-table .table-group-two {
      margin-top: -57px;
    }
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .table-group-two .cart-product-price {
    justify-content: flex-start;
    font-family: proxima-nova;
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .table-group-two .candy-rack-btn {
    border-radius: 8px;
    border: 1px solid #1A1A1A;
    background: rgba(255, 255, 255, 0);
    display: flex;
    width: 98px;
    height: 28px;
    padding: 7.875px 8px 8.125px 8px;
    justify-content: center;
    align-items: center;
    color: var(--Text-Colors-Text-Darkest, #1A1A1A);
    font-family: proxima-nova;
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
  }
  .spz_417 .sticky-aside > div > div .table-container .flex-table .table-group-two .candy-rack-btn:hover {
    background-color: #c5c5c5;
  }
`;
document.head.appendChild(style);

function loadTestCode417() {
  if (!document.querySelector("body").classList.contains("spz_417")) {
    document.querySelector("body").classList.add("spz_417");

    function updateOffer() {
      console.log("updateOffer");
      var findText = document.querySelectorAll('.cart-details .cart-product-title');
      findText.forEach(function (text) {
        if (text.textContent == "Camtasia® Create" ||
          text.textContent == "Camtasia Create"
        ) {
          var offers = document.querySelectorAll('.cart-offers .table-container .cart-product-title');
          offers.forEach((offer) => {
            if (offer.textContent.includes("Camtasia Pro") || offer.textContent.includes("Camtasia® Pro")) {
              document.querySelector(".sticky-aside > div > div > section:first-child").insertAdjacentElement('afterend', offer.closest('.table-container'));
              document.querySelector('.spz_417 .sticky-aside > div > div .table-container .flex-table .cart-product-title + div').textContent = "Upgrade to Camtasia Pro for advanced features and unlock additional content.";
              document.querySelector('.sticky-aside > div > div .table-container .flex-table .table-group-two .cart-product-price').textContent = "+$250";
            }
          });
        }
      })
    }

    //obeserv the form error class 
    const targetNode = document.querySelector('.cart-offers-wrapper');
    if (targetNode) {
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver((mutationList, observer) => {
        observer.disconnect(); 
        updateOffer();
        observer.observe(targetNode, config);
      });

      observer.observe(targetNode, config);
    } else {
      console.error("Target node not found!");
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode417();
  }
}, 100);
