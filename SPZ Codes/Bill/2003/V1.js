function loadTestCode() {
    if (!document.querySelector('body').classList.contains('spz_t2003')) {
        document.querySelector('body').classList.add('spz_t2003');
        localStorage.setItem('bdcAbTest9', '2003-v1');


        // Insert the new hero section
        document.querySelector('.hero-full-width-wrapper').insertAdjacentHTML('beforebegin', `<div class="hero_spz">
        <div class="container-large">
            <div class="eyebrow-hero">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1728047346/bill/2001/logo-g2.svg" alt="G2 Logo">
                <img src="//res.cloudinary.com/spiralyze/image/upload/bill/2001/rating-stars.svg" alt="Review Star">
                <span><strong>4.4</strong> (2,700+ reviews)</span>
            </div>
            <h1 class="header-hero">Meet BILL. Your financial operations platform.</h1>
            <p class="subheader-hero">Create and pay bills, send invoices, manage expenses, control budgets, and access the credit your business needs to grow.</p>
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
              <div class="tab-content" id="tab2">
                <div class="pictureWrapper">
                    <picture>
                        <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2001/spend_expense-tablet_and_mobile.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2001/spend_expense_1.webp" alt="BILL.COM Spend &amp; Expense Dashboard">
                    </picture>
                </div>
             </div>
              <div class="tab-content" id="tab3">
                <div class="pictureWrapper">
                    <picture>
                        <source media="(max-width: 991px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2003/accountant_console-tablet_and_mobile.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2003/accountant_console.webp" alt="BILL.COM Spend &amp; Expense Dashboard">
                    </picture>
                </div>
             </div>
          </div>
      </div>`);

        let cardInterval;

        document.addEventListener("click", function (e) {
            const card = e.target.closest('.card');
            const cardText1 = ["Accounts Receivable", "Accounts Payable"];
            const cardText2 = ["Spend & Expense", "Business Credit", "Corporate Cards"];
            const cardText3 = ["Accountant Console"];
            if (card) {
                const cardText = card.querySelector('span').innerText;
                card.classList.toggle('active');

                let cardText1Active = false;
                let cardText2Active = false;
                let cardText3Active = false;

                // Check for active cards from both groups
                document.querySelectorAll('.card.active').forEach(activeCard => {
                    const cardTextActive = activeCard.querySelector('span').innerText;

                    if (cardText1.includes(cardTextActive)) {
                        cardText1Active = true;
                    }

                    if (cardText2.includes(cardTextActive)) {
                        cardText2Active = true;
                    }

                    if (cardText3.includes(cardTextActive)) {
                        cardText3Active = true;
                    }
                });

                // If both card groups are active, switch cards
                if (cardText1Active && cardText2Active && !cardText3Active) {
                    switchCards1();
                } else if (cardText2Active && cardText3Active && !cardText1Active) {
                    switchCards2();
                } else if (cardText1Active && cardText3Active && !cardText2Active) {
                    switchCards3();
                } else if (cardText1Active && cardText2Active && cardText3Active) {
                    switchCardsAll();
                } else {
                    clearInterval(cardInterval);
                    updateActiveTab(cardText1Active, cardText2Active, cardText3Active);
                }

                if (card.classList.contains('active')) {
                    addActiveCard(cardText);
                }
            }

            function addActiveCard(cardText) {
                if (cardText1.includes(cardText)) {
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.add('active');
                }
                if (cardText2.includes(cardText)) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.add('active');
                }
                if (cardText3.includes(cardText)) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.add('active');
                }
            }

            function updateActiveTab(cardText1Active, cardText2Active, cardText3Active) {
                if (cardText1Active && !cardText2Active && !cardText3Active) {
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.add('active');
                } else if (cardText2Active && !cardText1Active && !cardText3Active) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.add('active');
                } else if (cardText3Active && !cardText1Active && !cardText2Active) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.add('active');
                } else {
                    document.querySelector('.tab-content#tab1').classList.add('active');
                }
            }
        });

        function switchCards1() {
            let currentTab = 1;
            clearInterval(cardInterval);

            cardInterval = setInterval(() => {
                if (currentTab === 1) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.add('active');
                    currentTab = 2; // Switch to tab 2
                } else if (currentTab === 2) {
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.add('active');
                    currentTab = 1; // Switch to tab 2
                } 
            }, 3000);
        } 
        
        function switchCards2() {
            let currentTab = 1;
            clearInterval(cardInterval);

            cardInterval = setInterval(() => {
                if (currentTab === 1) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.add('active');
                    currentTab = 2; // Switch to tab 2
                } else if (currentTab === 2) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.add('active');
                    currentTab = 1; // Switch to tab 2
                }
            }, 3000);
        } 
        
        function switchCards3() {
            let currentTab = 1;
            clearInterval(cardInterval);

            cardInterval = setInterval(() => {
                if (currentTab === 1) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.add('active');
                    currentTab = 2; // Switch to tab 2
                } else if (currentTab === 2) {
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.add('active');
                    currentTab = 1; // Switch to tab 2
                }
            }, 3000);
        } 
        
        function switchCardsAll() {
            console.log('switchCardsAll');
            let currentTab = 1;
            clearInterval(cardInterval);

            cardInterval = setInterval(() => {
                if (currentTab === 1) {
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.add('active');
                    currentTab = 2; // Switch to tab 2
                } else if (currentTab === 2) {
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.remove('active');
                    document.querySelector('.tab-content#tab3').classList.add('active');
                    currentTab = 3; // Switch to tab 2
                } else if (currentTab === 3) {
                    document.querySelector('.tab-content#tab3').classList.remove('active');
                    document.querySelector('.tab-content#tab2').classList.remove('active');
                    document.querySelector('.tab-content#tab1').classList.add('active');
                    currentTab = 1; // Switch to tab 1
                }
            }, 3000);
        }

        // Reposition the email form
        document.querySelector('.tabWrapper').before(document.querySelector('.hero-full-width .form-email').parentNode);
        document.querySelector('#email-form .button.is-single-field').classList.add('spz_2003_v1');

        if (document.querySelector('.hero_spz .button-disclaimer')) {
            document.querySelector('.hero_spz .button-disclaimer').innerHTML = "By continuing, you agree to BILL's  <a href='https://www.bill.com/legal/terms-of-service'>Terms of Service</a> and <a href='https://www.bill.com/privacy'>Privacy Notice.</a>";
            document.querySelector('.hero_spz .button-disclaimer').insertAdjacentHTML('afterend', `
                <div class="custom_ctaOuter">
                    <a href="https://www.bill.com/demo-request" class="custom_cta">Get a Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="#1B0EB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            `);
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
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);










































