function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_t2003')) {
      document.querySelector('body').classList.add('spz_t2003');
      localStorage.setItem('bdcAbTest9','2003-V1');

      
      // Insert the new hero section
      document.querySelector('.hero-full-width-wrapper').insertAdjacentHTML('beforebegin', `<div class="hero_spz">
      <div class="container-large">
          <div class="eyebrow-hero">
              <img src="//res.cloudinary.com/spiralyze/image/upload/bill/2001/rating-stars.svg" alt="Review Star">
              <span><strong>4.4</strong> (2,521 reviews)</span>
          </div>
          <h1 class="header-hero">Streamline AP, AR, and spend management</h1>
              <div class="card-container">
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775665/bill/2003/icon-accounts_receivable_6.svg" alt="Accounts Receivable">
                          <span>Accounts Receivable</span>
                      </div>
                      <span></span>
                  </div>
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775665/bill/2003/icon-accounts_payables_5.svg" alt="Accounts Payable">
                          <span>Accounts Payable</span>
                      </div>
                      <span></span>
                  </div>
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775664/bill/2003/icon-spend_expense_5.svg" alt="Spend & Expense">
                          <span>Spend & Expense</span>
                      </div>
                      <span></span>
                  </div>
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775665/bill/2003/icon-credit_7.svg" alt="Business Credit">
                          <span>Business Credit</span>
                      </div>
                      <span></span>
                  </div>
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775664/bill/2003/icon-virtual_cards_5.svg" alt="Corporate Cards">
                          <span>Corporate Cards</span>
                      </div>
                      <span></span>
                  </div>
                  <div class="card">
                      <div class="cardInner">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1727775664/bill/2003/icon-accountant_console_4.svg" alt="Accountant Console">
                          <span>Accountant Console</span>
                      </div>
                      <span></span>
                  </div>
              </div>
          <div class="tabWrapper">
              <div class="tab-content active" id="tab1">
                  <div class="pictureWrapper">
                      <picture>
                          <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2001/payable_and_receivable-tablet_and_mobile.webp">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2001/payable_and_receivable_1.webp" alt="BILL UI HOME">
                      </picture>
                  </div>
              </div>
          </div>
      </div>`);

      document.addEventListener("click", function (e) {
          const card = e.target.closest('.card');
          if (card) {
              card.classList.toggle('active');
          }
      });

      // Reposition the email form
      document.querySelector('.tabWrapper').before(document.querySelector('.hero-full-width .form-email').parentNode);
      document.querySelector('#email-form .button.is-single-field').classList.add('spz_2003_v1');

      if (document.querySelector('.hero_spz .button-disclaimer')) {
          document.querySelector('.hero_spz .button-disclaimer').innerHTML = "No credit card required.";
      }
      document.querySelector('.spz_t2003 #email-form #email').removeAttribute('required');
      var elements = document.querySelectorAll('#email-form #email');
  elements.forEach(function (element) {
    element.addEventListener('focus', function () {
      var parentWrap = element.closest('#email');
      if (parentWrap) {
        parentWrap.classList.add('active', 'typing');
      }
    });

    element.addEventListener('blur', function () {
      var parentWrap = element.closest('#email');
      if (parentWrap) {
        if (element.value.length === 0) {
          parentWrap.classList.remove('active');
        }
        parentWrap.classList.remove('typing');
      }
    });
  });
  }
}

// Check condition to load test code
var checkCondition = setInterval(function() {
  if (document.querySelectorAll('body').length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
  }
}, 100);
