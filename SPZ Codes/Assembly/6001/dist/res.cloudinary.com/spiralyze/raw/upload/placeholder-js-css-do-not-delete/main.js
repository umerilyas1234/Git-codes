(() => {
  "use strict";
  var e = document.createElement("style");
  if (
    ((e.id = "spz-styles"),
    (e.innerHTML =
      '@font-face{font-family:Causten-SemiBold;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/v1707891408/assembly/causten/Causten-SemiBold.woff) format("woff"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-SemiBold.woff2) format("woff2"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-SemiBold.eot) format("eot"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-SemiBold.ttf) format("ttf")}@font-face{font-family:Causten-Regular;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-Regular.eot) format("eot"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-Regular.ttf) format("ttf"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-Regular.woff2) format("woff2"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-Regular.woff) format("woff")}.spz_6001{overflow:hidden}.spz_6001 .modal-exit-cover{backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);background:rgba(26,26,26,.5);height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;padding:40px 20px;position:fixed;top:0;width:100%;z-index:999999999}.spz_6001 .modal-exit-inner-cover{align-items:center;display:flex;min-height:calc(100% - 1rem);position:relative}.spz_6001 .modal-exit-inner-wrapper{background:#fff;border-radius:12px;box-shadow:0 20px 40px 0 rgba(0,0,0,.08);-webkit-box-shadow:0 20px 40px 0 rgba(0,0,0,.08);-o-box-shadow:0 20px 40px 0 rgba(0,0,0,.08);-moz-box-shadow:0 20px 40px 0 rgba(0,0,0,.08);margin:0 auto;max-width:536px;padding:48px 36px;position:relative;width:100%}.spz_6001 .modal-exit-content{width:100%}.spz_6001 .close-modal{position:absolute;right:16px;top:16px}.spz_6001 .close-modal path{transition:all .4s ease}.spz_6001 .close-modal:hover path{fill:#757575}.spz_6001 .modal_head{padding-bottom:24px;text-align:center}.spz_6001 .modal_head h2{color:#1a1a1a;font-family:Causten-SemiBold;font-size:40px;font-weight:400;line-height:48px;padding-bottom:24px;transform:translateY(-2px)}.spz_6001 .modal_head p{color:#444d5e;font-family:Causten-Regular;font-size:20px;font-weight:400;line-height:30px}.spz_6001 .cta_outer{padding-bottom:24px;text-align:center}.spz_6001 .custom_cta{align-items:center;background:#25c9ef;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#1a1a1a;display:inline-flex;font-family:Causten-SemiBold;font-size:18px;font-weight:400;justify-content:center;line-height:18px;min-width:201px;padding:19px 40px;text-align:center;text-decoration:none;transition:all .4s ease}.spz_6001 .custom_cta img{display:inline-block;height:18px;margin-left:10px;transform:translateX(1px);width:18px}.spz_6001 .custom_cta:hover{background:#3acdef}.spz_6001 .custom_cta:active,.spz_6001 .custom_cta:focus{background:#2299b5}.spz_6001 .modal_review{align-items:center;display:flex;justify-content:center;text-align:center}.spz_6001 .modal_review span{display:inline-block;height:24px;width:24px}.spz_6001 .modal_review span img{display:block}.spz_6001 .modal_review strong{display:inline-block;height:20px;margin-left:8px;width:108px}.spz_6001 .modal_review strong img{display:block;width:100%}.spz_6001 .modal_review b{color:#444d5e;display:inline-block;font-family:Causten-SemiBold;font-size:16px;font-weight:400;line-height:24px;margin-left:8px}@media only screen and (max-width:1023px){.spz_6001 .modal-exit-cover{display:none}}'),
    document.body.appendChild(e),
    console.log("11111111"),
    !sessionStorage.getItem("modalShownInSession"))
  ) {
    var o = parseInt(localStorage.getItem("modalCount")) || 0;
    if (o < 3 && window.matchMedia("(min-width: 1024px)").matches) {
      var t = 0,
        a = 0,
        s = window.outerHeight - 50,
        i = window.outerWidth - 50;
      console.log("aa"),
        window.addEventListener(
          "mouseout",
          function (e) {
            (t = e.clientY),
              (a = e.clientX),
              (t < 50 || t > s || a < 50 || a > i) &&
                (sessionStorage.getItem("ExistingUser") ||
                  (sessionStorage.setItem("ExistingUser", "true"),
                  console.log("bb"),
                  (function () {
                    var e = document.querySelector("body");
                    if (!e.classList.contains("spz_6001")) {
                      e.classList.add("spz_6001"),
                        document
                          .querySelector(".spz_6001")
                          .insertAdjacentHTML(
                            "beforeend",
                            '<div class="modal-exit-cover"> <div class="modal-exit-inner-cover"> <div class="modal-exit-inner-wrapper"> <a class="close-modal" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.178 11.1421L14.7872 15.7513C14.9408 15.8997 15.1466 15.9818 15.3603 15.9799C15.5739 15.9781 15.7783 15.8924 15.9293 15.7413C16.0804 15.5903 16.1661 15.3859 16.1679 15.1723C16.1698 14.9586 16.0877 14.7528 15.9392 14.5992L11.3301 9.98999L15.9392 5.38081C16.0877 5.22714 16.1698 5.02133 16.1679 4.80769C16.1661 4.59406 16.0804 4.38971 15.9293 4.23864C15.7783 4.08758 15.5739 4.00189 15.3603 4.00003C15.1466 3.99817 14.9408 4.0803 14.7872 4.22872L10.178 8.8379L5.5688 4.22872C5.41444 4.08397 5.20982 4.00495 4.99824 4.00839C4.78666 4.01182 4.58471 4.09744 4.43513 4.24713C4.28555 4.39681 4.20008 4.59882 4.19679 4.8104C4.19351 5.02199 4.27267 5.22655 4.41752 5.38081L9.02589 9.98999L4.41671 14.5992C4.33889 14.6743 4.27682 14.7642 4.23412 14.8636C4.19142 14.963 4.16894 15.07 4.168 15.1781C4.16706 15.2863 4.18767 15.3936 4.22864 15.4938C4.26961 15.5939 4.33011 15.6849 4.40661 15.7614C4.48311 15.8379 4.57408 15.8984 4.67422 15.9393C4.77435 15.9803 4.88164 16.0009 4.98982 16C5.09801 15.999 5.20492 15.9766 5.30433 15.9339C5.40373 15.8911 5.49364 15.8291 5.5688 15.7513L10.178 11.1421Z" fill="#C4C7CD"/> </svg> </a> <div class="modal-exit-content"> <div class="modal_head"> <h2>Streamline case management</h2> <p> Enhance your firm\'s productivity with configurable workflows, embedded AI automation, seamless integrations, and robust BI-enabled analytics. </p> </div> <div class="cta_outer"> <a href="https://assemblysoftware.com/get-a-demo?utm_source=website&utm_medium=exit+intent&utm_campaign=sp_test_0324" class="custom_cta">Get a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/6001/arrow_2.svg" alt="Get a Demo"/></a> </div> <div class="modal_review"> <span><img src="//res.cloudinary.com/spiralyze/image/upload/assembly/6001/logo-g2.svg" alt="G2"/></span> <strong><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/6001/stars-g2_1_webp.webp" alt="Rating Stars"/></strong> <b>4.6</b> </div> </div> </div> </div> </div> '
                          );
                      var o = document.querySelector(".close-modal"),
                        t = document.querySelector(".custom_cta"),
                        a = document.querySelector(".modal-exit-cover");
                      o.addEventListener("click", function () {
                        document.body.classList.remove("spz_6001"), a.remove();
                      }),
                        t.addEventListener("click", function () {
                          document.body.classList.remove("spz_6001"),
                            a.remove();
                        }),
                        document
                          .querySelector(".modal-exit-inner-wrapper")
                          .addEventListener("click", function (e) {
                            e.stopPropagation();
                          }),
                        (a.style.display = "block"),
                        document
                          .querySelector(".modal-exit-cover .close-modal")
                          .addEventListener("click", function () {
                            var e;
                            null !==
                              (e =
                                document.querySelector(".modal-exit-cover")) &&
                              void 0 !== e &&
                              e.classList.contains("open") &&
                              (document
                                .querySelector(".modal-exit-cover")
                                .classList.remove("open"),
                              (document.querySelector("html").style.overflow =
                                "auto"),
                              document
                                .querySelector("body")
                                .classList.remove("page_exit_modal"));
                          });
                    }
                  })(),
                  localStorage.setItem("modalCount", o + 1)));
          },
          !1
        );
    }
    sessionStorage.setItem("modalShownInSession", "true");
  }
})();
