function loadTestCode2005() {
  if (!document.querySelector('body').classList.contains('spz_t2005')) {
    document.querySelector('body').classList.add('spz_t2005', "v1");
    localStorage.setItem('bdcAbTest9', '2005-v1');
    document.querySelector('#logos-up .eyebrow').textContent = 'Integrations to easily connect with the tools you use every day';
    document.querySelector('#logos-up .scroll-wrapper-blur').insertAdjacentHTML('afterend', `
      <div class="logos_list">
        <ul>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-xero.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg" alt="xero logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-microsoft.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg"
                  alt="microsoft logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-quickbooks.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg"
                  alt="quickbooks logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-sage.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg" alt="sage logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-oracle_netsuite.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg"
                  alt="oracle netsuite logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-slack.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg" alt="slack logo">
              </picture>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-xero.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg" alt="xero logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-microsoft.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg"
                  alt="microsoft logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-quickbooks.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg"
                  alt="quickbooks logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-sage.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg" alt="sage logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-oracle_netsuite.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg"
                  alt="oracle netsuite logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-slack.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg" alt="slack logo">
              </picture>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-xero.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-xero.svg" alt="xero logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-microsoft.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-microsoft.svg"
                  alt="microsoft logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711572/bill/2005/mobile-logo-quickbooks.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-quickbooks.svg"
                  alt="quickbooks logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-sage.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-sage.svg" alt="sage logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-oracle_netsuite.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-oracle_netsuite.svg"
                  alt="oracle netsuite logo">
              </picture>
            </div>
          </li>
          <li>
            <div class="logo_data">
              <picture>
                <source media="(max-width: 767px)"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/mobile-logo-slack.svg">
                <source media="{max-width: 1023px}"
                  srcset="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1732711573/bill/2005/logo-slack.svg" alt="slack logo">
              </picture>
            </div>
          </li>
        </ul>
      </div>
    `);
  }
}

// Check condition to load test code
var checkCondition = setInterval(function () {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(checkCondition);
    loadTestCode2005();
  }
}, 100);