var link = document.createElement('link'); 
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'https://res.cloudinary.com/spiralyze/raw/upload/v1716286020/techsmithsnagit/902/code/style.css';

if(!document.querySelector('link[href="https://res.cloudinary.com/spiralyze/raw/upload/v1716286020/techsmithsnagit/902/code/style.css"]')) {
document.getElementsByTagName('head')[0].appendChild(link);
}
function stickyFooterTest() {
    if (!document.querySelector('body').classList.contains('spz_t902')) {
        document.querySelector('body').classList.add('spz_t902');

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
                            <a href="https://www.g2.com/products/snagit/reviews" class="g2_logo" target="_blank">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1715331155/techsmithsnagit/902/logo-g2.svg" alt="g2 logo">
                            </a>                         
                            <div class="star_review">
                                <a href="https://www.g2.com/products/snagit/reviews" target="_blank">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1715940250/techsmithsnagit/902/rating-4_20.svg" alt="star reviews"> 
                                </a> 
                                <p>4.5/5.0 (4,767 reviews)</p>
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
                            <a href="https://www.capterra.com/p/209649/Snagit/reviews/" class="capterra_logo" target="_blank">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1715331156/techsmithsnagit/902/capterra-inc-logo.svg" alt="capterra logo" class="logowithtext">
                            </a>                            
                            <div class="star_review">
                                <a href="https://www.capterra.com/p/209649/Snagit/reviews/" target="_blank">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1715940245/techsmithsnagit/902/rating-4_17.svg" alt="star reviews">
                                </a> 
                                <p>4.7/5.0 (462 reviews)</p>
                                <div class="vector_line">
                                    <div class="svg_container">
                                        <svg class="vector_svg" xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none"> <path d="M0.75 0V32" stroke="#DDDDDD" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cta_wrapper">
                        <a href="https://www.techsmith.com/download/snagit/" class="cta_button btn-snagit">Try Snagit</a>
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
                document.querySelector('body').classList.remove('spz_t902');
                document.querySelector(".sticky_footer").remove();
            }
        });

    }
}

var stickyFooterInterval = setInterval(() => {
    if(document.querySelectorAll('body').length > 0) {   
        clearInterval(stickyFooterInterval);
        stickyFooterTest(); 
    }
}, 100);