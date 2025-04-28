var link = document.createElement('link'); 
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'https://res.cloudinary.com/spiralyze/raw/upload/v1716285021/techsmithcamtasia/10002/code/style.css';

if(!document.querySelector('link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1716285021/techsmithcamtasia/10002/code/style.css"]')) {
document.getElementsByTagName('head')[0].appendChild(link);
}
function stickyFooterTest() {
    if (!document.querySelector('body').classList.contains('spz_t10002')) {
        document.querySelector('body').classList.add('spz_t10002');

        document.querySelector('body').insertAdjacentHTML('beforeend',`<div class="sticky_footer">
        <a href="javascript:;" id="close_icon" class="close_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id="close_svg">
                <path d="M5.99976 18L17.9998 5.99998M5.99976 5.99998L17.9998 18" stroke="#DDDDDD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <div class="footer_content">
            <div class="footer_contentInner">
                <div class="user_reviews">
                    <div class="reviews_col frame1">
                        <a href="https://www.g2.com/products/camtasia/reviews" class="g2_logo" target="_blank">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1715331980/techsmithcamtasia/10002/logo-g2.svg" alt="g2 logo">
                        </a>                         
                        <div class="star_review">
                            <a href="https://www.g2.com/products/camtasia/reviews" target="_blank">
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/10002/rating-4_5.svg">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1715942778/techsmithcamtasia/10002/rating-4_12.svg" alt="star reviews"> 
                                </picture>
                            </a>      
                            <p>4.5/5.0 </p> 
                            <span> (1,267 reviews)</span>
                            <div class="vector_line">
                                <div class="svg_container">
                                    <svg class="vector_svg" xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none">
                                        <path d="M0.75 0V32" stroke="#DDDDDD" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reviews_col frame2">
                        <a href="https://www.capterra.com/reviews/203013/camtasia" class="capterra_logo" target="_blank">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1715331980/techsmithcamtasia/10002/capterra-inc-logo.svg" alt="capterra logo" class="logowithtext">
                        </a>                            
                        <div class="star_review"> 
                            <a href="https://www.capterra.com/reviews/203013/camtasia" target="_blank">
                                <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/techsmithcamtasia/10002/rating-4_6.svg">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1715942780/techsmithcamtasia/10002/rating-4_13.svg" alt="star reviews">
                                </picture>
                            </a>     
                            <p>4.5/5.0 </p>
                            <span> (418 reviews)</span>
                            <div class="vector_line">
                                <div class="svg_container">
                                    <svg class="vector_svg" xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none"> <path d="M0.75 0V32" stroke="#DDDDDD" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cta_wrapper">
                    <a href="https://www.techsmith.com/download/camtasia/" class="cta_button btn-camtasia">Try Camtasia</a>
                </div>
            </div>
        </div>
        </div>`);

        // Scroll events
        var scrollPosition = window.innerHeight
        function hideShowStickyBar() {
            if (window.scrollY > scrollPosition) {
                document.querySelector('body').classList.add('goUp');
            } else {
                document.querySelector('body').classList.remove('goUp');
            }
        }

        window.addEventListener('scroll', function() {
            hideShowStickyBar();
        }, true);
        window.dispatchEvent(new Event('scroll'));


        // Close event
        document.addEventListener("click", function (e) {
            if (e.target.id == "close_icon") {
                e.preventDefault();
                document.querySelector('body').classList.remove('spz_t10002');
                document.querySelector(".sticky_footer").remove();
            }
        });

        // toggle events
        function toggleDivs() {
            if(window.innerWidth < 768) {

                const frame1 = document.querySelector('.reviews_col.frame1');
                const frame2 = document.querySelector('.reviews_col.frame2');
            
                if (frame1.style.display === 'none') {
                    frame1.style.display = 'flex';
                    frame2.style.display = 'none';
                } else {
                    frame1.style.display = 'none';
                    frame2.style.display = 'flex';
                }

                setTimeout(toggleDivs, 5000); 
            }      
        }
        
        document.querySelector('.reviews_col.frame1').style.display = 'flex';
        setTimeout(toggleDivs, 5000);  
    }
}

var stickyFooterInterval = setInterval(() => {
    if(document.querySelectorAll('body').length > 0) {   
        clearInterval(stickyFooterInterval);
        stickyFooterTest(); 
    }
}, 100);
