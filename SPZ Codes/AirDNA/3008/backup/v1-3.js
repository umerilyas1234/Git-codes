//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz5002Test() {
  if (!document.querySelector('body').classList.contains('spz_3008')) {
    document.querySelector('body').classList.add('spz_3008');

    // Put your test code here
    if (document.querySelector('.spz_3008 main > section:first-child')) {
      document.querySelector('.spz_3008 main > section:first-child').classList.add('original_hero');
      document.querySelector('.spz_3008 main > section:first-child').insertAdjacentHTML('afterend', `<section class="hero_section">
              <div class="auto_container">
                <div class="hero_inner">
                  <div class="hero_detail"><h1>Grow faster with better <br> short-term rental data</h1></div>
                  <div class="top-slider">
                    <div class="splide splidetop">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="child first-child">
                              <span class="sliderNav desktopOnly">
                                <strong>
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M21.5308 20.4696L16.8368 15.7765C18.1973 14.1431 18.8757 12.048 18.7309 9.92715C18.5861 7.80629 17.6293 5.82289 16.0593 4.38956C14.4894 2.95623 12.4274 2.18333 10.3021 2.23163C8.17687 2.27993 6.15205 3.14571 4.64888 4.64888C3.14571 6.15205 2.27993 8.17687 2.23163 10.3021C2.18333 12.4274 2.95623 14.4894 4.38956 16.0593C5.82289 17.6293 7.80629 18.5861 9.92715 18.7309C12.048 18.8757 14.1431 18.1973 15.7765 16.8368L20.4696 21.5308C20.5393 21.6005 20.622 21.6558 20.713 21.6935C20.8041 21.7312 20.9017 21.7506 21.0002 21.7506C21.0988 21.7506 21.1963 21.7312 21.2874 21.6935C21.3784 21.6558 21.4612 21.6005 21.5308 21.5308C21.6005 21.4612 21.6558 21.3784 21.6935 21.2874C21.7312 21.1963 21.7506 21.0988 21.7506 21.0002C21.7506 20.9017 21.7312 20.8041 21.6935 20.713C21.6558 20.622 21.6005 20.5393 21.5308 20.4696ZM3.75021 10.5002C3.75021 9.16519 4.14609 7.86015 4.88779 6.75011C5.62949 5.64008 6.6837 4.77492 7.9171 4.26403C9.1505 3.75314 10.5077 3.61946 11.8171 3.87991C13.1264 4.14036 14.3292 4.78324 15.2732 5.72724C16.2172 6.67125 16.8601 7.87398 17.1205 9.18335C17.381 10.4927 17.2473 11.8499 16.7364 13.0833C16.2255 14.3167 15.3603 15.3709 14.2503 16.1126C13.1403 16.8543 11.8352 17.2502 10.5002 17.2502C8.71061 17.2482 6.99488 16.5364 5.72944 15.271C4.464 14.0056 3.7522 12.2898 3.75021 10.5002Z" fill="#666666"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                      <path d="M16.4165 10.4998C16.4165 11.5381 16.1086 12.5532 15.5317 13.4165C14.9549 14.2799 14.1349 14.9528 13.1756 15.3501C12.2163 15.7475 11.1607 15.8515 10.1423 15.6489C9.12391 15.4463 8.18845 14.9463 7.45422 14.2121C6.72 13.4779 6.21998 12.5424 6.01741 11.524C5.81484 10.5056 5.91881 9.45 6.31617 8.49068C6.71353 7.53137 7.38643 6.71143 8.24979 6.13456C9.11315 5.55768 10.1282 5.24977 11.1665 5.24977C12.5589 5.24977 13.8943 5.8029 14.8788 6.78746C15.8634 7.77203 16.4165 9.10739 16.4165 10.4998ZM22.1972 21.5304C22.1275 21.6001 22.0448 21.6554 21.9537 21.6932C21.8627 21.7309 21.7651 21.7504 21.6665 21.7504C21.568 21.7504 21.4704 21.7309 21.3793 21.6932C21.2883 21.6554 21.2056 21.6001 21.1359 21.5304L16.4428 16.8363C14.8107 18.1941 12.718 18.8705 10.6 18.7247C8.48194 18.5789 6.50164 17.6222 5.07099 16.0536C3.64034 14.485 2.86947 12.4252 2.91873 10.3027C2.96798 8.18027 3.83358 6.15849 5.33545 4.65793C6.83733 3.15738 8.85988 2.29358 10.9824 2.2462C13.1049 2.19882 15.164 2.97151 16.7313 4.40354C18.2987 5.83558 19.2536 7.81672 19.3975 9.93488C19.5414 12.053 18.8633 14.1451 17.504 15.776L22.1972 20.4691C22.2669 20.5388 22.3222 20.6215 22.36 20.7126C22.3977 20.8036 22.4171 20.9012 22.4171 20.9998C22.4171 21.0983 22.3977 21.1959 22.36 21.287C22.3222 21.378 22.2669 21.4607 22.1972 21.5304ZM11.1665 17.2498C12.5016 17.2498 13.8066 16.8539 14.9166 16.1122C16.0267 15.3705 16.8918 14.3163 17.4027 13.0829C17.9136 11.8495 18.0473 10.4923 17.7868 9.18291C17.5264 7.87354 16.8835 6.67081 15.9395 5.7268C14.9955 4.7828 13.7928 4.13992 12.4834 3.87947C11.174 3.61902 9.81682 3.75269 8.58342 4.26359C7.35002 4.77448 6.29581 5.63964 5.55411 6.74967C4.81241 7.8597 4.41653 9.16475 4.41653 10.4998C4.41852 12.2894 5.13031 14.0051 6.39575 15.2706C7.66119 16.536 9.37693 17.2478 11.1665 17.2498Z" fill="#3D53B6"></path>
                                    </svg>
                                  </i>
                                  Research an address
                                </strong>
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                <strong>
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M17.25 8.39719V7.875C17.25 5.52375 13.7034 3.75 9 3.75C4.29656 3.75 0.75 5.52375 0.75 7.875V11.625C0.75 13.5834 3.21094 15.1397 6.75 15.6056V16.125C6.75 18.4762 10.2966 20.25 15 20.25C19.7034 20.25 23.25 18.4762 23.25 16.125V12.375C23.25 10.4344 20.8669 8.87625 17.25 8.39719ZM21.75 12.375C21.75 13.6144 18.8634 15 15 15C14.6503 15 14.3034 14.9878 13.9613 14.9653C15.9834 14.2284 17.25 13.0312 17.25 11.625V9.91313C20.0503 10.3303 21.75 11.4628 21.75 12.375ZM6.75 14.0859V11.8556C7.49604 11.9528 8.24765 12.0011 9 12C9.75235 12.0011 10.504 11.9528 11.25 11.8556V14.0859C10.5051 14.196 9.75302 14.2508 9 14.25C8.24698 14.2508 7.49493 14.196 6.75 14.0859ZM15.75 10.3059V11.625C15.75 12.4116 14.5866 13.2562 12.75 13.7691V11.5781C13.9603 11.2847 14.985 10.8478 15.75 10.3059ZM9 5.25C12.8634 5.25 15.75 6.63562 15.75 7.875C15.75 9.11438 12.8634 10.5 9 10.5C5.13656 10.5 2.25 9.11438 2.25 7.875C2.25 6.63562 5.13656 5.25 9 5.25ZM2.25 11.625V10.3059C3.015 10.8478 4.03969 11.2847 5.25 11.5781V13.7691C3.41344 13.2562 2.25 12.4116 2.25 11.625ZM8.25 16.125V15.7341C8.49656 15.7434 8.74594 15.75 9 15.75C9.36375 15.75 9.71906 15.7378 10.0678 15.7172C10.4552 15.8559 10.8499 15.9736 11.25 16.0697V18.2691C9.41344 17.7562 8.25 16.9116 8.25 16.125ZM12.75 18.5859V16.35C13.4958 16.4503 14.2475 16.5004 15 16.5C15.7523 16.5011 16.504 16.4528 17.25 16.3556V18.5859C15.758 18.8047 14.242 18.8047 12.75 18.5859ZM18.75 18.2691V16.0781C19.9603 15.7847 20.985 15.3478 21.75 14.8059V16.125C21.75 16.9116 20.5866 17.7562 18.75 18.2691Z" fill="#666666"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M17.25 8.39719V7.875C17.25 5.52375 13.7034 3.75 9 3.75C4.29656 3.75 0.75 5.52375 0.75 7.875V11.625C0.75 13.5834 3.21094 15.1397 6.75 15.6056V16.125C6.75 18.4762 10.2966 20.25 15 20.25C19.7034 20.25 23.25 18.4762 23.25 16.125V12.375C23.25 10.4344 20.8669 8.87625 17.25 8.39719ZM5.25 13.7691C3.41344 13.2562 2.25 12.4116 2.25 11.625V10.3059C3.015 10.8478 4.03969 11.2847 5.25 11.5781V13.7691ZM12.75 11.5781C13.9603 11.2847 14.985 10.8478 15.75 10.3059V11.625C15.75 12.4116 14.5866 13.2562 12.75 13.7691V11.5781ZM11.25 18.2691C9.41344 17.7562 8.25 16.9116 8.25 16.125V15.7341C8.49656 15.7434 8.74594 15.75 9 15.75C9.36375 15.75 9.71906 15.7378 10.0678 15.7172C10.4552 15.8559 10.8499 15.9736 11.25 16.0697V18.2691ZM11.25 14.0859C10.5051 14.196 9.75302 14.2508 9 14.25C8.24698 14.2508 7.49493 14.196 6.75 14.0859V11.8556C7.49604 11.9528 8.24765 12.0011 9 12C9.75235 12.0011 10.504 11.9528 11.25 11.8556V14.0859ZM17.25 18.5859C15.758 18.8047 14.242 18.8047 12.75 18.5859V16.35C13.4958 16.4503 14.2475 16.5004 15 16.5C15.7523 16.5011 16.504 16.4528 17.25 16.3556V18.5859ZM21.75 16.125C21.75 16.9116 20.5866 17.7562 18.75 18.2691V16.0781C19.9603 15.7847 20.985 15.3478 21.75 14.8059V16.125Z" fill="#3D53B6"></path>
                                    </svg>
                                  </i>
                                  Get market insights
                                </strong>
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                <strong>
                                  <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M21.75 19.5C21.75 19.6989 21.671 19.8897 21.5303 20.0303C21.3897 20.171 21.1989 20.25 21 20.25H3C2.80109 20.25 2.61032 20.171 2.46967 20.0303C2.32902 19.8897 2.25 19.6989 2.25 19.5V4.5C2.25 4.30109 2.32902 4.11032 2.46967 3.96967C2.61032 3.82902 2.80109 3.75 3 3.75C3.19891 3.75 3.38968 3.82902 3.53033 3.96967C3.67098 4.11032 3.75 4.30109 3.75 4.5V14.6897L8.46937 9.96937C8.53903 9.89964 8.62175 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19616 9.76884 9.28721 9.80658C9.37825 9.84432 9.46097 9.89964 9.53063 9.96937L12 12.4397L16.9397 7.5H15C14.8011 7.5 14.6103 7.42098 14.4697 7.28033C14.329 7.13968 14.25 6.94891 14.25 6.75C14.25 6.55109 14.329 6.36032 14.4697 6.21967C14.6103 6.07902 14.8011 6 15 6H18.75C18.9489 6 19.1397 6.07902 19.2803 6.21967C19.421 6.36032 19.5 6.55109 19.5 6.75V10.5C19.5 10.6989 19.421 10.8897 19.2803 11.0303C19.1397 11.171 18.9489 11.25 18.75 11.25C18.5511 11.25 18.3603 11.171 18.2197 11.0303C18.079 10.8897 18 10.6989 18 10.5V8.56031L12.5306 14.0306C12.461 14.1004 12.3783 14.1557 12.2872 14.1934C12.1962 14.2312 12.0986 14.2506 12 14.2506C11.9014 14.2506 11.8038 14.2312 11.7128 14.1934C11.6217 14.1557 11.539 14.1004 11.4694 14.0306L9 11.5603L3.75 16.8103V18.75H21C21.1989 18.75 21.3897 18.829 21.5303 18.9697C21.671 19.1103 21.75 19.3011 21.75 19.5Z" fill="#666666"></path>
                                    </svg>
                                  </i>
                                Benchmark your property</strong>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="bottom-slider">
                    <div class="splide splidebottom">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="product_list" id="tab1">
                              <div class="products_data">
                                <div class="hero_from">
                                </div>
                                <div class="product_middle">
                                  <a href="https://app.airdna.co/data/us?tab=active-str-listings">
                                    Or, explore all STR listings
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                      <path d="M18.0383 10.6633L12.4133 16.2883C12.2372 16.4644 11.9983 16.5634 11.7492 16.5634C11.5001 16.5634 11.2613 16.4644 11.0852 16.2883C10.909 16.1122 10.8101 15.8733 10.8101 15.6242C10.8101 15.3752 10.909 15.1363 11.0852 14.9602L15.1094 10.9375H3.625C3.37636 10.9375 3.1379 10.8387 2.96209 10.6629C2.78627 10.4871 2.6875 10.2487 2.6875 10C2.6875 9.75137 2.78627 9.51292 2.96209 9.3371C3.1379 9.16129 3.37636 9.06252 3.625 9.06252H15.1094L11.0867 5.03751C10.9106 4.86139 10.8117 4.62252 10.8117 4.37345C10.8117 4.12438 10.9106 3.88551 11.0867 3.70939C11.2628 3.53327 11.5017 3.43433 11.7508 3.43433C11.9999 3.43433 12.2387 3.53327 12.4148 3.70939L18.0398 9.33439C18.1273 9.4216 18.1966 9.52523 18.2438 9.63931C18.2911 9.75339 18.3153 9.87569 18.3152 9.99917C18.315 10.1226 18.2905 10.2449 18.243 10.3589C18.1955 10.4728 18.1259 10.5763 18.0383 10.6633Z" fill="black"></path>
                                    </svg>
                                  </a>
                                </div>
                                <div class="product_bottom">
                                  <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-360-step1_1.webp">
                                    <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-768-step1.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-1440-step1.webp" alt="Research an address">                                  
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="product_list" id="tab2">
                              <div class="products_data">
                                <div class="hero_from">
                                </div>
                                <div class="product_middle">
                                  <a href="https://app.airdna.co/data/us?tab=markets">
                                    Or, explore the best places to invest
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                      <path d="M18.0383 10.6633L12.4133 16.2883C12.2372 16.4644 11.9983 16.5634 11.7492 16.5634C11.5001 16.5634 11.2613 16.4644 11.0852 16.2883C10.909 16.1122 10.8101 15.8733 10.8101 15.6242C10.8101 15.3752 10.909 15.1363 11.0852 14.9602L15.1094 10.9375H3.625C3.37636 10.9375 3.1379 10.8387 2.96209 10.6629C2.78627 10.4871 2.6875 10.2487 2.6875 10C2.6875 9.75137 2.78627 9.51292 2.96209 9.3371C3.1379 9.16129 3.37636 9.06252 3.625 9.06252H15.1094L11.0867 5.03751C10.9106 4.86139 10.8117 4.62252 10.8117 4.37345C10.8117 4.12438 10.9106 3.88551 11.0867 3.70939C11.2628 3.53327 11.5017 3.43433 11.7508 3.43433C11.9999 3.43433 12.2387 3.53327 12.4148 3.70939L18.0398 9.33439C18.1273 9.4216 18.1966 9.52523 18.2438 9.63931C18.2911 9.75339 18.3153 9.87569 18.3152 9.99917C18.315 10.1226 18.2905 10.2449 18.243 10.3589C18.1955 10.4728 18.1259 10.5763 18.0383 10.6633Z" fill="black"></path>
                                    </svg>
                                  </a>
                                </div>
                                <div class="product_bottom">
                                  <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-360-step2_1.webp">
                                    <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-768-step2.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-1440-step2.webp" alt="Get market insights">                                  
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="product_list" id="tab3">
                              <div class="products_data">
                                <div class="hero_top">
                                  <a href="https://app.airdna.co/data/my-listing/dashboard" class="my_btn">Connect for free <span><i></i></span></a>
                                </div>
                                <div class="product_bottom">
                                  <picture>
                                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-360-step3_1.webp">
                                    <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-768-step3.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3008/ui-1440-step3.webp" alt="Benchmark your property">                                  
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </d>
                  </div>
                </div>
              </div>
            </section>
            <section class="logo_section">
              <div class="auto_container">
                <div class="logo_inner">
                  <div class="trusted-by">
                    <h2>Data trusted by</h2>
                    <div class="trusted-by-logos">
                        <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-mobile.webp" type="image/webp" media="(max-width: 719px)">
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-tablet.webp" type="image/webp" media="(max-width: 1119px)">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/3007/client-logo-desktop.webp" alt="Trusted by logos">
                        </picture>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            `);

      console.log('Time 2 > ' + new Date().getTime() / 1000);
      document.querySelector('.spz_3008 main')?.insertAdjacentHTML('afterbegin', `<section class="section_outer"></section>`);
      document.querySelector('.spz_3008 main .section_outer')?.insertAdjacentElement('beforeend', document.querySelector('.spz_3008 main >section.hero_section'));
      document.querySelector('.spz_3008 main .section_outer')?.insertAdjacentElement('beforeend', document.querySelector('.spz_3008 main >section.logo_section'));

      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
      document.head.appendChild(link);

      const loadJS = (url, implementationCode, location) => {
        var scriptTag = document.createElement('script');
        scriptTag.src = url;
        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;
        location.appendChild(scriptTag);
      };
      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
        var splidetop = new Splide('.splidetop', {
          rewind: false,
          isNavigation: true,
          focus: 'center',
          autoplay: false,
          speed: 5,
          interval: 1000,
          pagination: false,
          perPage: 3,
          arrows: false,
          pauseOnHover: false,
          pauseOnFocus: false,

        });
        var splidebottom = new Splide('.splidebottom', {
          perPage: 1,
          autoplay: false,
          speed: 500,
          interval: 1000,
          arrows: false,
          pagination: false,
          autoHeight: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          gap: '55px',
          focus: 'center',
        });


        splidebottom.on('moved', function (newIndex) {
          let activeSlide = splidetop.Components.Elements.slides[newIndex];
          console.log('Moved to slide #' + newIndex);
          if (activeSlide && activeSlide.id === 'splide01-slide01') {
            if (document.querySelector('.original_hero').classList.contains('v2')) {
              slideOne();
            }
          } else if (activeSlide && activeSlide.id === 'splide01-slide02') {
            slideTwo();
          }
        });

        // Pause auto slide on click

        setTimeout(function () {
          splidetop.mount();
          splidebottom.mount();
          splidebottom.sync(splidetop);
        }, 500);
        window.dispatchEvent(new Event('resize'));
      }, document.body);

      if (document.querySelector('.original_hero')) {
        document.querySelector('.hero_from').insertAdjacentElement('afterbegin', document.querySelector('.original_hero'));
        document.querySelector('.spz_3008 .original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root input').insertAdjacentHTML('afterend', '<label>Search any address </label>');
      }

      function slideOne() {
        document.querySelector("#splide02-slide01 .hero_from").insertAdjacentElement('afterbegin', document.querySelector('.original_hero'));
        document.querySelector('.spz_3008 .original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root label').textContent = 'Search any address';
        document.querySelector('.original_hero').classList.remove('v2');
      }

      function slideTwo() {
        document.querySelector("#splide02-slide02 .hero_from").insertAdjacentElement('afterbegin', document.querySelector('.original_hero'));
        document.querySelector('.spz_3008 .original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root label').textContent = 'Search any market, city, or neighborhood';
        document.querySelector('.original_hero').classList.add('v2');
      }

      window.addEventListener('click', function (e) {
        if (e.target.id === 'splide01-slide01' || e.target.closest('#splide01-slide01')) {
          if (document.querySelector('.original_hero').classList.contains('v2')) {
            slideOne();
          }
        } else if (e.target.id === 'splide01-slide02' || e.target.closest('#splide01-slide02')) {
          slideTwo();
        }
        if (e.target.matches('.original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root a button')) {
          if (document.querySelector('.spz_3008 .original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root input').value === '') {
            window.location.href = 'https://app.airdna.co/data';
            this.preventDefault();
          }
        }
      });



      // need to check condition on page scroll.
      let headerTimeout ;
      window.addEventListener('scroll', function () {
        this.clearTimeout(headerTimeout)
        headerTimeout = setTimeout(() => {
          if (document.querySelector('.spz_3008 a[aria-label="Go to homepage"] img')) {
            console.log('header changed');
            document.querySelector('.spz_3008 #header').classList.add('normalHeader');

            if (document.querySelectorAll('.header-logo-color').length === 0) {
              document.querySelector('.spz_3008 a[aria-label="Go to homepage"] img').insertAdjacentHTML('beforebegin', '<img class="header-logo-color" src="https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg?fit=max&w=384" alt="site logo">');
            }
          } else {
            document.querySelector('.spz_3008 #header')?.classList.remove('normalHeader');
            console.log('header not changed');
          }
        }, 100);
      });
      window.dispatchEvent(new Event('scroll'));

      // Button click animation
      document.querySelector('.my_btn').addEventListener('mousedown', function (e) {
        // Click ripple animation - must be a unique selector
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();

        // Calculate the position and size of the ripple
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Add the ripple to the anchor
        this.appendChild(ripple);

        // Remove the ripple after animation ends
        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      });
    }
  }
}

function removeTest() {
  document.querySelector('body').classList.remove('spz_3008');
  document.querySelector('.header-logo-color')?.remove();
  document.querySelector('main')?.insertAdjacentElement('afterbegin', document.querySelector('.original_hero'));
  document.querySelector('.original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root label')?.remove();
  document.querySelector('.original_hero')?.classList.remove('original_hero');
  document.querySelector('.hero_section')?.remove();
  document.querySelector('.logo_section')?.remove();
  document.querySelector('.section_outer')?.remove();
}

const selector5002 = 'main > section:first-child h1';
function waitForElement(selector5002, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector5002);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector5002);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector5002}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector5002)
    .then((element) => {
      if (element) {
        spz5002Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout ;
const targetUrl = "https://www.airdna.co/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      executeTimeout = setTimeout(function(){
        executeTest();
      },800)
    } else {
      removeTest();
    }
    if(document.querySelector('[role="tablist"] > button:nth-child(2)').classList.contains("Mui-selected")){
      location.reload();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
