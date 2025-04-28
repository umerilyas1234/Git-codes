
function loadTestCode1010() {
  if (!document.querySelector("body").classList.contains("spz_t1010")) {
        document.querySelector("body").classList.add("spz_t1010");
        document.querySelector(".hero_sec > .container > .flex > p:first-child img").src = "//res.cloudinary.com/spiralyze/image/upload/v1719492384/rbbrands/1010/ping-icon.svg";
        var secondParagraph = document.querySelector(".spz_t1010 .hero_sec h1 + p");
        if (secondParagraph) {
            let innerHTML = secondParagraph.innerHTML;
            const searchText = 'and the';
            const replaceText = `<span>${searchText}</span>`;
            innerHTML = innerHTML.replace(new RegExp(searchText, 'g'), replaceText);
            secondParagraph.innerHTML = innerHTML;
        }

        secondParagraph.insertAdjacentHTML('afterend', `
        <div class="cards_list">
            <ul>
                <li>
                    <div class="card_listData">
                        <a href="javascript:vodi(0);" class="open_modal">
                            <figure>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1719389211/rbbrands/1010/icon_4.svg" alt="Cooking Appliances">
                            </figure>
                            <small>
                                <p>
                                    Cooking <br> Appliances
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                        <path d="M1.5 14.1172L6.5 9.11719L1.5 4.11719" stroke="#01417B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </small>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card_listData">
                        <a href="javascript:vodi(0);" class="open_modal">
                            <figure>
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1719389221/rbbrands/1010/icon_9.svg" alt="Dishwashers">
                            </figure>
                            <small>
                                <p>
                                    Dishwashers
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                        <path d="M1.5 14.1172L6.5 9.11719L1.5 4.11719" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </small>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card_listData">
                        <a href="javascript:vodi(0);" class="open_modal">
                            <figure>
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1719389217/rbbrands/1010/icon_7.svg" alt="Refrigerators">
                            </figure>
                            <small>
                                <p>
                                    Refrigerators
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                        <path d="M1.5 14.1172L6.5 9.11719L1.5 4.11719" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </small>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card_listData">
                        <a href="javascript:vodi(0);" class="open_modal">
                            <figure>
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1719389219/rbbrands/1010/icon_8.svg" alt="Washing Machines & Dryers">
                            </figure>
                            <small>
                                <p>
                                    Washing Machines <br> & Dryers
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                        <path d="M1.5 14.1172L6.5 9.11719L1.5 4.11719" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </small>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="card_listData">
                        <a href="javascript:vodi(0);" class="open_modal">
                            <figure>
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1719389215/rbbrands/1010/icon_6.svg" alt="Other">
                            </figure>
                            <small>
                                <p> Other
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                    <path d="M1.5 14.1172L6.5 9.11719L1.5 4.11719" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </small>
                        </a>
                    </div>
                </li>
            </ul>
        </div>  
        `);

        var phoneNumber = document.querySelector('.hero_sec h2 a').textContent;

        document.querySelector('body').insertAdjacentHTML('beforeend', `
        <div class="custom_modal">
            <div class="modai_inner">
                <div class="modal_data">
                    <a href="javascript:" class="close_modal">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/x.svg" alt="close">
                    </a>
                    <h2>Call now for <br>
                        immediate assistance</h2>
                    <figure>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1719389353/rbbrands/1010/badge.svg" alt="Rating">
                    </figure>
                    <a href="tel:${phoneNumber}" aria-label="Get Help Now" class="ff_openSans text-white gap-[10px] mt-4 lg:mt-8 font-bold text-2xl leading-[27px] bg-primary rounded-lg py-[18px] px-[34px] flex items-center transition-all ease-in-out duration-200 hover:scale-95 group">
                    <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'>  Call 24/7
                    </a>
                    <h3>Zero obligation call.</h3>
                </div>
            </div>
        </div>
        `);

        document.querySelector('.cards_list + a').innerHTML = " <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'> Call " + phoneNumber + " ";
        document.querySelector('.modal_data > a.ff_openSans').innerHTML = " <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'> Call " + phoneNumber + " ";
        
        if(window.innerWidth < 768) {
            document.querySelector('.cards_list + a').innerHTML = " <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'> Call 24/7";
            document.querySelector('.modal_data > a.ff_openSans').innerHTML = " <img src='//res.cloudinary.com/spiralyze/image/upload/v1719389343/rbbrands/1010/tel-iconsvg.svg' alt='Phone'> Call 24/7";
        }


        document.addEventListener('click', function(e) {
            const anchor = e.target.closest('a.open_modal, a.close_modal');
            if (!anchor) return;
            e.preventDefault();
            if (anchor.classList.contains('open_modal')) {
                console.log('Opening modal');
                document.querySelector('.custom_modal').style.display = 'block';
                document.querySelector('body').style.overflow = 'hidden';
            }
            if (anchor.classList.contains('close_modal')) {
                console.log('Closing modal');
                document.querySelector('.custom_modal').style.display = 'none';
                document.querySelector('body').style.overflow = 'visible';
            }  
        }); 
        document.querySelector('.hero_sec').insertAdjacentHTML('afterend', `<div class="hero_secOuter"></div>`);
        var heroSection = document.querySelector('.hero_sec');
        document.querySelector('.hero_secOuter').insertAdjacentElement('beforeend', heroSection);
    }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode1010();
  }
}, 100);
