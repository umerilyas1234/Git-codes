
var style = document.createElement('style');
style.innerHTML = `
  .spz_419 .cart-offers-wrapper .cart-offers .padding-bottom-32 h3.h1 {
    font-size: 0;
  }
  .spz_419 .cart-offers-wrapper .cart-offers .padding-bottom-32 h3.h1::before {
    font-size: 2rem;
    content: "You Might Also Like";
  }
  @media screen and (min-width: 26.875rem) and (max-width: 60rem){
    .spz_419 .cart-offers-wrapper .cart-offers .padding-bottom-32 h3.h1::before {
      font-size: 1.875rem;
    }
  }
  @media screen and (max-width: 26.875rem){
    .spz_419 .cart-offers-wrapper .cart-offers .padding-bottom-32 h3.h1::before {
      font-size: 1.75rem;
    }
  }
`;
document.head.appendChild(style);

function loadTestCode419() {
  if (!document.querySelector("body").classList.contains("spz_419")) {
    document.querySelector("body").classList.add("spz_419");

  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode419();
  }
}, 100);
