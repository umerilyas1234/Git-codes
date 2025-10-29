function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadCSS(url, callback) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = callback;
    document.head.appendChild(link);
}

function modifyControlPage() {
    const mainWrapper = document.querySelector('.spz_2021_v1 main.main-wrapper');
    if (mainWrapper) {
        const children = mainWrapper.children;
        // Add spz_hidden class to all children except the first one
        for (let i = 1; i < children.length; i++) {
            children[i].classList.add('spz_hidden');
        }

        const heading = mainWrapper.querySelector('.section_homehero .homehero_text-wrap h1');
        if (heading) {
            heading.innerHTML = '<span class="span-orange">Meet BILL.</span> Your AI&#8209;powered financial operations platform.';
        }

        const subHeading = mainWrapper.querySelector('.section_homehero .homehero_text-wrap p');
        if (subHeading) {
            subHeading.textContent = 'The intelligent way to create and pay bills, send invoices, manage expenses, control budgets, and access the credit your business needs to grow—all on one platform.';
        }

        const demoCTA = mainWrapper.querySelector('.section_homehero a[data-segment-click="nav__lead_cta__fired"]');
        if (demoCTA) {
            demoCTA.innerHTML = `<span>Get a Demo with a Sales Expert</span> <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.872 8.952L8.432 6.168H0.16V4.248H8.432L5.872 1.464L7.232 0.136L11.824 5.208L7.232 10.28L5.872 8.952Z" fill="#2D2725"/>
                                        </svg>`;
            demoCTA.classList.add('spz__homehero__demo_cta');
        }

        const imgWrapper = mainWrapper.querySelector('.section_homehero .homehero_img-wrap');
        if (imgWrapper) {
            imgWrapper.children[0].src = '//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/grid-cell-3.webp';
            imgWrapper.children[1].src = '//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/grid-cell-2_1.webp';
            imgWrapper.children[2].src = '//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/grid-cell-1.webp';
            imgWrapper.children[0].srcset = '';
            imgWrapper.children[1].srcset = '';
            imgWrapper.children[2].srcset = '';
        }
    }
}

function injectClientLogoSlider() {
    const sliderMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.section_homehero');
    const sliderData = [
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186573/bill/2021/logo-calendly.svg', alt: 'Calendly' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186573/bill/2021/logo-kiwico.svg', alt: 'Kiwico' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/logo-wag_webp.webp', alt: 'Wag' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/logo-qualtrics.svg', alt: 'Qualtrics' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-bakertily.svg', alt: 'Bakertilly' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-noom.svg', alt: 'Noom' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-utah_jass.svg', alt: 'Utah Jazz' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-bare_bones.svg', alt: 'Bare Bones' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-chatbooks.svg', alt: 'Chatbooks' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-cuts.svg', alt: 'Cuts' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-marine_layer.svg', alt: 'Marine Layer' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-quicken.svg', alt: 'Quicken' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/v1758186574/bill/2021/logo-cla.svg', alt: 'CLA' },
    ];

    if (!sliderMountPoint) return;

    sliderMountPoint.insertAdjacentHTML('afterend', `
        <section class="spz__client_logos__section">
            <div class="container-large">
                <div class="spz__client_logos__wrapper">
                    <h2 class="spz__client_logos__title">Trusted by millions of businesses across the BILL network</h2>
                    <div class="spz__client_logos__slider splide">
                        <div class="spz__client_logos__slider__track splide__track">
                            <div class="spz__client_logos__slider__list splide__list">
                                ${sliderData.map(data => `
                                    <div class="spz__client_logos__slider__slide splide__slide">
                                        <img src="${data.src}" alt="${data.alt}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);

    // load splide scripts
    loadCSS('https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css', function () {
        loadScript('https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js', function () {
            loadScript('https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@latest/dist/js/splide-extension-auto-scroll.min.js', function () {
                const slider = new Splide('.spz__client_logos__slider.splide', {
                    type: 'loop',
                    autoWidth: true,
                    gap: '96px',
                    pagination: false,
                    arrows: false,
                    autoScroll: {
                        speed: 0.4,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    },
                    breakpoints: {
                        1200: {
                            gap: '96px',
                        },
                        767: {
                            gap: '32px',
                        }
                    }
                });
                slider.mount(window.splide.Extensions);
            });
        });
    });
}

function injectAnimatedFeatures() {
    const animatedFeaturesMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.spz__client_logos__section');
    if (!animatedFeaturesMountPoint) return;

    loadScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', function () {
        animatedFeaturesMountPoint.insertAdjacentHTML('afterend', `
            <section class="spz__animated_features__section">
                <div class="container-large">
                    <div class="spz__animated_features__wrapper">
                        <div class="spz__animated_feature">
                            <div class="spz__animated_feature__copy-section">
                                <div class="spz__animated_feature__copy">
                                    <h6>BILL Accounts Payable</h6>
                                    <h2>Save time on payments with AI-enhanced AP automation</h2>
                                    <p>Streamline your entire AP process, from bill creation to approvals and payments—with AI working behind the scenes to reduce errors and manual work. Easily sync with your accounting software.</p>
                                </div>
                                <div class="spz__animated_feature__cta">
                                    <a href="https://www.bill.com/product/accounts-payable">
                                        <span>Explore AP Automation</span>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.872 8.952L8.432 6.168H0.16V4.248H8.432L5.872 1.464L7.232 0.136L11.824 5.208L7.232 10.28L5.872 8.952Z" fill="#2D2725"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="spz__animated_feature__image-section">
                                <lottie-player src="https://res.cloudinary.com/spiralyze/raw/upload/f_auto/bill/2021/home-ai_ap.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </div>
                        </div>
                        <div class="spz__animated_feature reversed">
                            <div class="spz__animated_feature__copy-section">
                                <div class="spz__animated_feature__copy">
                                    <h6>BILL Spend & Expense</h6>
                                    <h2>Optimize cash flow with credit, controls, and AI-powered accuracy</h2>
                                    <p>Access credit lines from $1000-$5M¹. Easily request funds, set budgets, and track spend using free intelligent software combined with The BILL Divvy Card² powered by Visa.</p>
                                    <div class="spz__animated_feature__disclaimer-section hide-desktop">
                                        <p>¹ Credit lines are not guaranteed and will be determined upon application approval.</p>
                                        <p>² The BILL Divvy Card may be issued by one of Divvy Pay, LLC's bank partners. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement.</p>
                                    </div>
                                </div>
                                <div class="spz__animated_feature__cta">
                                    <a href="https://www.bill.com/product/spend-and-expense">
                                        <span>Explore BILL Spend & Expense</span>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.872 8.952L8.432 6.168H0.16V4.248H8.432L5.872 1.464L7.232 0.136L11.824 5.208L7.232 10.28L5.872 8.952Z" fill="#2D2725"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="spz__animated_feature__disclaimer-section show-desktop">
                                    <p>¹ Credit lines are not guaranteed and will be determined upon application approval.</p>
                                    <p>² The BILL Divvy Card may be issued by one of Divvy Pay, LLC's bank partners. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement.</p>
                                </div>
                            </div>
                            <div class="spz__animated_feature__image-section">
                                <lottie-player src="https://res.cloudinary.com/spiralyze/raw/upload/v1758645831/bill/2021/home-spend_and_expense.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `);
        console.info('SPZ 2021: lottie-player.js loaded');
    });




}

function injectStaticFeatures() {
    const mountPointInterval = setInterval(function () {
        const staticFeaturesMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.spz__animated_features__section');
        if (staticFeaturesMountPoint) {
            clearInterval(mountPointInterval);
            staticFeaturesMountPoint.insertAdjacentHTML('afterend', `
                <section class="spz__static_features__section">
                    <div class="container-large">
                        <div class="spz__static_features__wrapper">
                            <div class="spz__static_feature">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/image-financial-operations-platform.webp" alt="Bill Financial Operations Platform" />
                                <div class="spz__static_feature__copy">
                                    <h6>BILL Financial Operations Platform</h6>
                                    <h2>Unify AP, AR, spend, and expense on one platform</h2>
                                    <p>Confidently automate your financial ops with AI-powered automation and a simple integration into your tech stack. One login, an aggregated cash flow task list, and automatic sync with leading accounting software.</p>
                                    <a href="https://www.bill.com/product">
                                        <span>Explore BILL Financial Operations Platform</span>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.872 8.952L8.432 6.168H0.16V4.248H8.432L5.872 1.464L7.232 0.136L11.824 5.208L7.232 10.28L5.872 8.952Z" fill="#2D2725"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="spz__static_feature">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/image-accountant-partner-program.webp" alt="Bill Accountant Partner Program" />
                                <div class="spz__static_feature__copy">
                                    <h6>BILL Accountant Partner Program</h6>
                                    <h2>Streamline your clients' financial operations and grow your firm</h2>
                                    <p>Automate bookkeeping tasks, enable client bill pay, and expand opportunities for your firm by offering spend and expense management services enhanced by AI.</p>
                                    <a href="https://www.bill.com/for-accountants">
                                        <span>Explore BILL Accountant Partner Program</span>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.872 8.952L8.432 6.168H0.16V4.248H8.432L5.872 1.464L7.232 0.136L11.824 5.208L7.232 10.28L5.872 8.952Z" fill="#2D2725"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `);
        }
    }, 100);
}

function injectTestimonialSlider() {

    const testimonialSliderData = [
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-clif-family-winery.webp',
            name: 'Linzi Gay, President',
            quote: '“Overall, I would estimate that BILL has increased efficiency in our office by 20%, and personally saved me a significant amount of time.”',
            company: 'Clif Family Winery',
            caseStudy: 'https://www.bill.com/case-study/customer-case-study-clif-family',
            videoURL: 'https://fast.wistia.net/embed/iframe/qsi0yzwcu7',
            videoCaption: 'Clif Family Winery achieved <span>20% efficiency increase</span> with BILL',
        },
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-bear-robotics.webp',
            name: 'Juan Higueros, Chief Operating Officer',
            quote: '“Being able to see the detail behind each invoice and have the proper approvals in place has been a savior for us, for sure.”',
            company: 'Bear Robotics',
            caseStudy: 'https://www.bill.com/case-study/customer-success-story-bear-robotics',
            videoURL: 'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fjwvge9s02n&display_name=Wistia%2C%2BInc.&url=https%3A%2F%2Ffast.wistia.com%2Fembed%2Fmedias%2Fjwvge9s02n%2Fswatch&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F8c1d8537a46e34b95ba2e6e060d184519ab8dcc7.jpg%3Fimage_crop_resized%3D640x360&type=text%2Fhtml&schema=wistia&wvideo=jwvge9s02n',
            videoCaption: 'Bear Robotics achieved <span>67% faster close</span> with BILL',
        },
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-generation-teach.webp',
            name: 'Bee Nance, Chief Operating Officer',
            quote: '“Generation Teach combines my skills in accounting with my love of community. For me it\'s not just a job to make money but a way to bring people together to learn, grow, and develop.”',
            company: 'Generation Teach',
            caseStudy: 'https://www.bill.com/case-study/customer-success-story-generation-teach',
            videoURL: 'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F1s8hkqa693&display_name=Wistia%2C%2BInc.&url=https%3A%2F%2Ffast.wistia.com%2Fembed%2Fmedias%2F1s8hkqa693%2Fswatch&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2Fd16dfb3f68d424fb7e1b86147091817d42fcd626.jpg%3Fimage_crop_resized%3D960x540&type=text%2Fhtml&schema=wistia&wvideo=1s8hkqa693',
            videoCaption: 'Generation Teach achieved <span>90% faster payment processing</span> with BILL',
        },
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-bare-bones.webp',
            name: 'Ryan Harvey, Co-founder',
            quote: '“Payables went from being my whole job, probably 30 hours a week just managing stacks of paper, to maybe 5 hours a week.”',
            company: 'Bare Bones',
            caseStudy: 'https://www.bill.com/case-study/customer-success-story-bare-bones-broth',
            videoURL: 'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F3lt7m3bjs1&display_name=Wistia%2C%2BInc.&url=https%3A%2F%2Ffast.wistia.com%2Fembed%2Fmedias%2F3lt7m3bjs1%2Fswatch&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2Feef6794833bd32891a0a1f2c036e9b8ff5d81cd9.jpg%3Fimage_crop_resized%3D960x540&type=text%2Fhtml&schema=wistia&wvideo=3lt7m3bjs1',
            videoCaption: 'Bare Bones achieved <span>significant time savings</span> with BILL',
        },
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-golden-ratio.webp',
            name: 'Clark Nowlin, Founder',
            quote: '“My favorite part of BILL is its seamless integration of QuickBooks. Being a remote business, BILL is essential. It\'s the hub for our whole company.”',
            company: 'Golden Ratio',
            caseStudy: 'https://www.bill.com/case-study/customer-case-study-golden-ratio',
            videoURL: 'https://fast.wistia.net/embed/iframe/ktnw1ol7mz',
            videoCaption: 'Golden Ratio achieved <span>80% faster payables</span> with BILL',
        },
        {
            image: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/bg-wag.webp',
            name: 'Alec Davidian, Chief Financial Officer',
            quote: '“BILL is a great tool. Taking advantage of all its features became a key part of transforming the company.”',
            company: 'Wag',
            caseStudy: 'https://www.bill.com/case-study/customer-success-story-wag',
            videoURL: 'https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fhvvbvpx8lo&display_name=Wistia%2C%2BInc.&url=https%3A%2F%2Ffast.wistia.com%2Fembed%2Fmedias%2Fhvvbvpx8lo%2Fswatch&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F23574dbc2669530a00f1a4e6aa2783d9dce8fdb6.jpg%3Fimage_crop_resized%3D960x540&type=text%2Fhtml&schema=wistia&wvideo=hvvbvpx8lo',
            videoCaption: 'Wag achieved <span>80% faster close</span> with BILL',
        },
    ];

    const mountPointInterval = setInterval(function () {
        const testimonialSliderMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.spz__static_features__section');
        if (testimonialSliderMountPoint && !!window.splide) {
            clearInterval(mountPointInterval);
            testimonialSliderMountPoint.insertAdjacentHTML('afterend', `
                <section class="spz__testimonial_slider__section">
                    <div class="spz__testimonial_slider__wrapper">
                            <h2 class="spz__testimonial_slider__title">Customers succeed with BILL</h2>
                            <div class="spz__testimonial_slider splide">
                                <div class="spz__testimonial_slider__track splide__track">
                                    <div class="spz__testimonial_slider__list splide__list">
                                        ${testimonialSliderData.map(data => `
                                            <div class="spz__testimonial_slider__slide splide__slide">
                                                <img class="spz__testimonial_slider__slide__bg-image" src="${data.image}" alt="${data.name}" />
                                                <h6>CUSTOMER STORY</h6>
                                                <p>${data.quote}</p>
                                                <div class="spz__testimonial_slider__slide__author">
                                                    <h6>${data.name}</h6>
                                                    <p>${data.company}</p>
                                                </div>
                                                <div class="spz__testimonial_slider__slide__ctas">
                                                    <a href="${data.caseStudy}">
                                                        Read Story
                                                    </a>
                                                    <button data-video-url="${data.videoURL}" data-video-caption="${data.videoCaption}" class="spz__testimonial_slider__slide__cta__video">
                                                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z" fill="white"/>
                                                        </svg>
                                                        Watch Video
                                                    </button>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            `);

            const videoCTAs = document.querySelectorAll('.spz_2021_v1 main.main-wrapper section.spz__testimonial_slider__section .spz__testimonial_slider__slide__cta__video');
            videoCTAs.forEach(videoCTA => {
                videoCTA.addEventListener('click', function () {
                    const videoURL = this.dataset.videoUrl;
                    const videoCaption = this.dataset.videoCaption;
                    window.openSPZ2021VideoModal(videoURL, videoCaption);
                });
            });

            const slider = new Splide('.spz__testimonial_slider.splide', {
                type: 'loop',
                autoplay: {
                    delay: 8000,
                    pauseOnHover: false,
                    pauseOnFocus: true,
                },
                padding: '351px',
                height: '476px',
                gap: '24px',
                perPage: 1,
                perMove: 1,
                pagination: false,
                arrows: true,
                autoWidth: true,
                autoHeight: true,
                autoScroll: false,
                // arrowPath: 'M9.96968 3.69092L2.93935 10.7212L9.96968 17.7516L11.0303 16.6909L5.81072 11.4713L17 11.4713V9.9713L5.81061 9.9713L11.0303 4.75158L9.96968 3.69092Z',
                breakpoints: {
                    1920: {
                        padding: '351px',
                        height: '476px',
                    },
                    1440: {
                        padding: '175px',
                        height: '476px',
                    },
                    1200: {
                        padding: '64px',
                        height: '510px',
                    },
                    767: {
                        padding: '0',
                        gap: '16px',
                        height: '509px',
                    },
                }
            });
            slider.mount(window.splide.Extensions);

            // Add click handler to stop autoplay when user clicks
            const sliderElement = document.querySelector('.spz__testimonial_slider.splide');
            if (sliderElement) {
                sliderElement.addEventListener('click', function () {
                    // Stop autoplay when user clicks
                    slider.Components?.Autoplay?.pause();
                });
            }
        }
    }, 100);
}

function injectStaticSection() {
    const mountPointInterval = setInterval(function () {
        const staticSectionMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.spz__testimonial_slider__section');
        if (staticSectionMountPoint) {
            clearInterval(mountPointInterval);
            staticSectionMountPoint.insertAdjacentHTML('afterend', `
                <section class="spz__stats_section">
                    <div class="container-large">
                        <div class="spz__stats_section__wrapper">
                            <div class="spz__stats_section__copy">
                                <h2>Join the nearly half a million businesses transforming their financial operations with BILL</h2>
                                <div class="spz__stats_section__disclaimer show-desktop">
                                    <span>* As of June 30, 2025.</span>
                                    <span>** Based on a survey of 127 BILL Spend and Expense users conducted by UserEvidence in March 2022.</span>
                                </div>
                            </div>
                            <div class="spz__stats_section__stats">
                                <div class="spz__stats_section__stat">
                                    <h6>8.3M</h6>
                                    <p>network members pay or get <br> paid with BILL.* </p>
                                </div>
                                <div class="spz__stats_section__stat">
                                    <h6>$10K+</h6>
                                    <p>average monthly savings by <br> surveyed users.**</p>
                                </div>
                                <div class="spz__stats_section__stat">
                                    <h6>12 hrs</h6>
                                    <p>saved monthly on average by <br> surveyed users.**</p>
                                </div>
                                <div class="spz__stats_section__stat">
                                    <h6>$345B</h6>
                                    <p>in total payment volume (~1% of US GDP) on an annual basis.*</p>
                                </div>
                            </div>
                            <div class="spz__stats_section__disclaimer hide-desktop">
                                <span>* As of June 30, 2025.</span>
                                <span>** Based on a survey of 127 BILL Spend and Expense users conducted by UserEvidence in March 2022.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="spz__get-started_section">
                    <div class="container-large">
                        <div class="spz__get-started_section__wrapper">
                            <div class="spz__get-started_section__image">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2021/image-call-to-action.webp" alt="Call to Action" />
                            </div>
                            <div class="spz__get-started_section__copy">
                                <h2>See where AI-powered <span>financial automation</span> can take your business</h2>
                                <div class="spz__get-started_section__cta">
                                    <a href="https://www.bill.com/signup">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `);
            document.querySelector('.footer-full .footer_content > .is-mobile .fs-footer-linklist-column .footer_link-list .footer_link-2 .uui-badge-small-success-2').textContent = "We’re Hiring"
        }
    }, 100);
}

function injectVideoModal() {
    const mountPointInterval = setInterval(function () {
        const videoModalMountPoint = document.querySelector('.spz_2021_v1 main.main-wrapper section.spz__get-started_section');
        if (videoModalMountPoint) {
            clearInterval(mountPointInterval);
            videoModalMountPoint.insertAdjacentHTML('afterend', `
                <div class="spz__video_modal" id="spz__video_modal">
                    <div class="spz__video_modal__overlay"></div>
                    <div class="spz__video_modal__wrapper">
                        <div class="spz__video_modal__content">
                            <button class="spz__video_modal__close" id="spz__video_modal__close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.5">
                                        <path d="M9.99908 11.0607L4.02941 17.0304L2.96875 15.9697L8.93842 10.0001L2.96876 4.03039L4.02942 2.96973L9.99908 8.93939L15.9688 2.96973L17.0294 4.03039L11.0597 10.0001L17.0294 15.9697L15.9688 17.0304L9.99908 11.0607Z" fill="#2D2725"/>
                                    </g>
                                </svg>
                            </button>
                            <div class="spz__video_modal__content__video">
                                <iframe id="spz__video_modal__content__video__iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="spz__video_modal__content__video__caption">
                                <p id="spz__video_modal__content__video__caption__text"></p>
                                <a href="https://www.bill.com/signup" id="spz__video_modal__content__video__caption__link">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            // Add modal functionality
            const modal = document.getElementById('spz__video_modal');
            const closeButton = document.getElementById('spz__video_modal__close');
            const videoIframe = modal.querySelector('#spz__video_modal__content__video__iframe');
            const videoCaption = modal.querySelector('#spz__video_modal__content__video__caption__text');

            // Function to open modal
            window.openSPZ2021VideoModal = function (videoURL, caption) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                document.body.style.touchAction = 'none';
                videoIframe.src = videoURL;
                videoCaption.innerHTML = caption;
            };

            // Function to close modal
            function closeSPZ2021VideoModal() {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }

            // Close modal event listeners
            closeButton.addEventListener('click', closeSPZ2021VideoModal);

            // Prevent modal content clicks from closing modal
            modal.querySelector('.spz__video_modal__content').addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    }, 100);
}

function injectVariant2021() {
    if (document.body.classList.contains("spz_2021_v1")) return;
    document.body.classList.add("spz_2021_v1");

    localStorage.setItem('bdcAbTest9','2021-v1');

    // modify control page
    modifyControlPage();

    // setup client logo slider
    injectClientLogoSlider();

    // setup animated features
    injectAnimatedFeatures();

    // setup static features
    injectStaticFeatures();

    // setup testimonial slider
    injectTestimonialSlider();

    // setup static section
    injectStaticSection();

    // setup video modal
    injectVideoModal();

    console.info('SPZ 2021: Variant injected');
}

const bodyInterval2021 = setInterval(function () {
    if (document.querySelectorAll("body > div.page-wrapper").length > 0) {
        clearInterval(bodyInterval2021);
        injectVariant2021();
    }
}, 100);