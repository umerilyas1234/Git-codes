(() => {
  "use strict";
  function i(i, t) {
    var n =
      ("undefined" != typeof Symbol && i[Symbol.iterator]) || i["@@iterator"];
    if (!n) {
      if (
        Array.isArray(i) ||
        (n = (function (i, t) {
          if (!i) return;
          if ("string" == typeof i) return e(i, t);
          var n = Object.prototype.toString.call(i).slice(8, -1);
          "Object" === n && i.constructor && (n = i.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(i);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return e(i, t);
        })(i)) ||
        (t && i && "number" == typeof i.length)
      ) {
        n && (i = n);
        var a = 0,
          s = function () {};
        return {
          s,
          n: function () {
            return a >= i.length ? { done: !0 } : { done: !1, value: i[a++] };
          },
          e: function (i) {
            throw i;
          },
          f: s,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var p,
      o = !0,
      l = !1;
    return {
      s: function () {
        n = n.call(i);
      },
      n: function () {
        var i = n.next();
        return (o = i.done), i;
      },
      e: function (i) {
        (l = !0), (p = i);
      },
      f: function () {
        try {
          o || null == n.return || n.return();
        } finally {
          if (l) throw p;
        }
      },
    };
  }
  function e(i, e) {
    (null == e || e > i.length) && (e = i.length);
    for (var t = 0, n = new Array(e); t < e; t++) n[t] = i[t];
    return n;
  }
  var t,
    n,
    a = document.createElement("style");
  function s() {
    if (!document.querySelector("body").classList.contains("spz_5001")) {
      var i = function () {
          var i = document.querySelector(
            "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:nth-child(2) ~ .addons_paragraph"
          );
          document
            .querySelectorAll(
              "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:last-child"
            )
            .forEach(function (e) {
              i ||
                (e.insertAdjacentHTML(
                  "afterend",
                  "<div class='addons_paragraph'><p></p></div>"
                ),
                console.log("activeFeatures added"));
            });
        },
        e = function () {
          if (
            document.querySelector(
              "#pricing-page-plan-enhancements>div>div>div>div>div>div:first-child"
            )
          ) {
            var e = function (i, e) {
              var t = document.querySelector(i);
              t && (t.innerHTML = e);
            };
            document.querySelector(
              "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide > div > div:nth-child(2) ~ .addons_paragraph"
            );
            console.log("activeFeatures"),
              i(),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:first-child .addons_paragraph p",
                "Accept online credit card and ACH payments. Send clients secure payment links. Reduce billing time."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(2) .addons_paragraph p",
                "Send and receive text messages directly through the Neos platform. Organize and store conversations."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3) .addons_paragraph p",
                "Track costs for printing, scanning, phone usage document management, and more."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(4) .addons_paragraph p",
                "Make phone calls, send messages, host video meetings, and manage contacts, all on one dashboard."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(5) .addons_paragraph p",
                "Sync your Neos contacts and mailing list with Mailchimp. Send automated bulk campaigns to leads and clients."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(6) .addons_paragraph p",
                "Bulk import case documents into Neos and auto-assign to the right cases."
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(7) .addons_paragraph p",
                "Sync Neos contacts, expenses, billable hours, invoices, and more with QuickBooks. "
              ),
              e(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(8) .addons_paragraph p",
                "Get dedicated support through every phase of cloud transition. Onboard in just a few days."
              ),
              (function (i, e, t) {
                var n = document.querySelector(i);
                if (n) {
                  var a = n.innerHTML;
                  (a = a.replace(e, t)), (n.innerHTML = a);
                }
              })(
                "#pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3) > div > div:first-child > div",
                "Cost Recovery -",
                '<span class="bold">Cost Recovery - </span>'
              );
          }
        };
      if (
        (document.querySelector("body").classList.add("spz_5001"),
        console.log("111111"),
        (document.querySelector(
          "#pricing-page-product-details .banner-simple h1"
        ).innerHTML = "Pricing"),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>p + div"
        ).innerHTML = "Best for solo practitioners and small law firms"),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>p + div"
        ).innerHTML = "Best for medium-sized law firms"),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>p + div"
        ).innerHTML = "Best for large law firms"),
        document
          .querySelector(
            "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>div:first-child"
          )
          .remove(),
        document
          .querySelectorAll(
            "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3) div p:last-child"
          )
          .forEach(function (i) {
            i.innerHTML = "(billed annually)";
          }),
        document
          .querySelectorAll(
            ".spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button>span:first-child"
          )
          .forEach(function (i) {
            i.innerHTML = "Get a Demo";
          }),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:first-child>div:last-child>span>div"
        ).innerHTML =
          '\n        <ul class="css-ykvzw5 efpjilz7 pricing_terms">\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Basic customizable intake forms\n              </span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0">Auto-populate documents with case info</span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Batch document generation</span\n              >\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0">Document editing and storage</span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Task checklists</span\n              >\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div><span class="css-throse efpjilz0">Custom case types, workflows, and calendaring</span></div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Communication and eSignature integrations</span\n              >\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Basic reporting</span\n              >\n            </div>\n          </li>\n        </ul>\n    '),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:nth-child(2)>div:last-child>span>div"
        ).innerHTML =
          '\n        <title>Everything in Neos Essentials plus:</title>\n        <ul class="css-ykvzw5 efpjilz7 pricing_terms">\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Turn scanned images into editable documents\n              </span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0">PDF editing, highlighting, redacting, and more</span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Bates stamping</span\n              >\n            </div>\n          </li>\n        </ul>\n    '),
        (document.querySelector(
          "#pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>span>div"
        ).innerHTML =
          '\n        <title>Everything in Neos Premium plus:</title>\n        <ul class="css-ykvzw5 efpjilz7 pricing_terms">\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Fully customizable, responsive intake forms\n              </span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0">Automated workflows</span>\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >Marketing campaigns and leads tracking</span\n              >\n            </div>\n          </li>\n          <li class="css-wm8ru efpjilz5">\n            <div>\n              <span class="css-throse efpjilz0"\n                >In-depth reporting including lead ROI and revenue tracking</span\n              >\n            </div>\n          </li>\n        </ul>\n    '),
        document
          .querySelector("#pricing-page-product-details>div>div:nth-child(2)")
          .insertAdjacentHTML(
            "afterend",
            '<div class="feature_btnOuter"> <a class="feature_btn" id="feature_btn" href="javascript:void(0);">Compare All Features <svg xmlns="http://www.w3.org/2000/svg" width="18" height="7" viewBox="0 0 18 7" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.925 1.17037e-06L13.5 1.575L8.25 6.75L3 1.575L4.575 2.06536e-07L8.25 3.6L11.925 1.17037e-06Z" fill="#1A1A1A"/> </svg> </a> </div> <div class="custom_modal" id="feature_modal"> <div class="modal_inner"> <div class="modal_main"> <div class="modal_top"> <a href="javascript:void(0);" class="close_modal"><img id="close_modal" src="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/close_icon.svg" alt="Close"/></a> <strong>Pricing <b> Plans</b></strong> <span><b>Neos </b> Essentials</span> <span><b>Neos </b> Premium</span> <span><b>Neos </b> Pro</span> <div class="pricing_nav"> <ul> <li> <a id="essential" class="active" href="javascript:void(0);"></a> </li> <li> <a id="premium" href="javascript:void(0);"></a> </li> <li> <a id="pro" href="javascript:void(0);"></a> </li> </ul> </div> </div> <div class="modal_bottom"> <div class="accordion"> <div class="accordion-item"> <div class="accordion-item-header"> <h3>Practice Management</h3> </div> <div class="accordion-item-body"> <div class="accordion-item-body-content"> <div class="pricing_checklistTable"> <ul> <li> <div class="checklist_data"> <strong>Access from anywhere</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Customer relationship database</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Document assembly & management</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Reports, dashboards & analytics</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Automated checklists</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Dynamic intake questionnaire</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Customizable intake forms</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Expense tracking</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Invoice generation, editing, and approvals</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Workflows & process automation</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> </ul> </div> </div> </div> </div> <div class="accordion-item"> <div class="accordion-item-header"> <h3>Document Management</h3> </div> <div class="accordion-item-body"> <div class="accordion-item-body-content"> <div class="pricing_checklistTable"> <ul> <li> <div class="checklist_data"> <strong>Multi-document generation</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Secure document sharing and storage</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Optical Character Recognition (OCR)</strong> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>PDF Editing, highlighting, redacting, <br/> and more</strong> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Bates stamping</strong> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Create, preview, and edit documents in <br/> real time </strong> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Combine, reorder, and insert documents</strong> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Automated document creation</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> </ul> </div> </div> </div> </div> <div class="accordion-item"> <div class="accordion-item-header"> <h3>Communication</h3> </div> <div class="accordion-item-body"> <div class="accordion-item-body-content"> <div class="pricing_checklistTable"> <ul> <li> <div class="checklist_data"> <strong>Messaging</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Phone</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>SMS and email automation</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Communicate with clients directly from <br/> case file</strong> <span> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Internal communication with in-product <br/> alerts</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Integrated Dialer and Call Tracking <br/> (RingCentral) <span class="tooltipstyles__TooltipStyled-sc-out8hf-0 hGHym tooltip" tabindex="0"><svg width="24" height="24" role="img" accessibilitySvg="[object Object]" class="question-mark-icon"> <title id="2_5_tooltip"> Premium features through RingCentral </title> <path d="M6.3 11.2H7.7V9.8H6.3V11.2ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 2.8C5.453 2.8 4.2 4.053 4.2 5.6H5.6C5.6 4.83 6.23 4.2 7 4.2C7.77 4.2 8.4 4.83 8.4 5.6C8.4 7 6.3 6.825 6.3 9.1H7.7C7.7 7.525 9.8 7.35 9.8 5.6C9.8 4.053 8.547 2.8 7 2.8Z" fill="#A4A4A4"></path> </svg> <span role="tooltip" id="2_5_tooltip_desc" class="tooltipstyles__TooltipContainerStyled-sc-out8hf-1 borXVz">Premium features through RingCentral</span></span> </strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Communication Center <span class="tooltipstyles__TooltipStyled-sc-out8hf-0 hGHym tooltip" tabindex="0"><svg width="24" height="24" role="img" accessibilitySvg="[object Object]" class="question-mark-icon"> <title id="2_6_tooltip"> Track all incoming and outgoing calls </title> <path d="M6.3 11.2H7.7V9.8H6.3V11.2ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 2.8C5.453 2.8 4.2 4.053 4.2 5.6H5.6C5.6 4.83 6.23 4.2 7 4.2C7.77 4.2 8.4 4.83 8.4 5.6C8.4 7 6.3 6.825 6.3 9.1H7.7C7.7 7.525 9.8 7.35 9.8 5.6C9.8 4.053 8.547 2.8 7 2.8Z" fill="#A4A4A4"></path> </svg> <span role="tooltip" id="2_6_tooltip_desc" class="tooltipstyles__TooltipContainerStyled-sc-out8hf-1 borXVz">Track all incoming and outgoing calls</span></span> </strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> </ul> </div> </div> </div> </div> <div class="accordion-item"> <div class="accordion-item-header"> <h3>Intake</h3> </div> <div class="accordion-item-body"> <div class="accordion-item-body-content"> <div class="pricing_checklistTable"> <ul> <li> <div class="checklist_data"> <strong>Intake forms</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Intake CRM</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Automated lead emails & texts</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Lead tracking</strong> <span> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Lead ROI and revenue tracking dashboards</strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Customizable Intake Forms </strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Dynamic Intake Forms with Required <br/> Questions </strong> <span> </span> <span> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> </ul> </div> </div> </div> </div> <div class="accordion-item"> <div class="accordion-item-header"> <h3>Support</h3> </div> <div class="accordion-item-body"> <div class="accordion-item-body-content"> <div class="pricing_checklistTable"> <ul> <li> <div class="checklist_data"> <strong>US-based weekday phone support <br/> (8:30AM ET to 5:30PM ET)</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Email support</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>Self-serve portal (Knowledge base)</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> <li> <div class="checklist_data"> <strong>On-demand training videos</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M3.33325 12L6.33325 9L10.3333 13L19.3333 4L22.3333 7L10.3333 19L3.33325 12Z" fill="#2BC1E9"/> </svg> </span> </div> </li> </ul> </div> </div> </div> </div> </div> </div> </div> </div> </div> '
          ),
        (document.querySelector(
          "div[data-testid='contact__container'] h4"
        ).innerHTML = "Looking for enterprise pricing?"),
        (document.querySelector(
          "div[data-testid='contact__container']  p span:nth-of-type(2)"
        ).innerHTML = " or (410) 873-9512"),
        document.addEventListener("click", function (i) {
          "close_modal" === i.target.id &&
            ((document.querySelector("#feature_modal").style.display = "none"),
            (document.querySelector("body").style.overflow = "visible"));
        }),
        document.addEventListener("click", function (i) {
          for (
            var e,
              t = i.target,
              n = function () {
                if ("feature_btn" === t.id) {
                  if (
                    ((document.querySelector("#feature_modal").style.display =
                      "block"),
                    (document.querySelector("body").style.overflow = "hidden"),
                    document.querySelectorAll("#feature_modal").length > 0)
                  ) {
                    var i = document.querySelectorAll(".accordion-item-header"),
                      e = document.querySelector(
                        ".accordion-item-header.active"
                      );
                    e &&
                      e !== i &&
                      ((a = e).classList.remove("active"),
                      (a.nextElementSibling.style.maxHeight = 0)),
                      (n = i[0]) &&
                        (function (i) {
                          i.classList.add("active");
                          var e = i.nextElementSibling;
                          e.style.maxHeight = e.scrollHeight + "px";
                        })(n);
                  }
                  return { v: void 0 };
                }
                var n, a;
                t = t.parentElement;
              };
            t;

          )
            if ((e = n())) return e.v;
        }),
        document.querySelectorAll("#feature_modal").length > 0)
      ) {
        var a = function (i) {
            i.classList.add("active");
            var e = i.nextElementSibling;
            e.style.maxHeight = e.scrollHeight + "px";
          },
          s = document.querySelectorAll(".accordion-item-header");
        s.forEach(function (i, e) {
          i.addEventListener("click", function (e) {
            var t = document.querySelector(".accordion-item-header.active");
            t &&
              t !== i &&
              (function (i) {
                i.classList.remove("active"),
                  (i.nextElementSibling.style.maxHeight = 0);
              })(t),
              i.classList.toggle("active");
            var n = i.nextElementSibling;
            i.classList.contains("active")
              ? (n.style.maxHeight = n.scrollHeight + "px")
              : (n.style.maxHeight = 0);
          }),
            0 === e && a(i);
        }),
          (o = s[0]) && a(o);
      }
      (document.querySelector(
        "#pricing-page-plan-enhancements>div>div:first-child>div:first-child"
      ).innerHTML = "Plan Addons"),
        e(),
        document
          .querySelector(
            "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:first-child"
          )
          .addEventListener("click", function () {
            document
              .querySelectorAll(
                "#pricing-page-plan-enhancements .swiper-wrapper"
              )
              .forEach(function (i) {
                i.classList.remove("hide");
              }),
              e(),
              i(),
              console.log("Button clicked 1");
          }),
        document
          .querySelector(
            "#pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child>div>div:last-child"
          )
          .addEventListener("click", function () {
            document
              .querySelectorAll(
                "#pricing-page-plan-enhancements .swiper-wrapper"
              )
              .forEach(function (i) {
                i.classList.add("hide");
              }),
              e(),
              i(),
              console.log("Button clicked 2");
          }),
        document.querySelector(
          ".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
        ) &&
          ((document.querySelector(
            ".spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
          ).src =
            "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp"),
          (document.querySelector(
            "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img"
          ).srcset =
            "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp"),
          (document.querySelector(
            "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture source"
          ).srcset =
            "//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/5001/faq_img_1445.webp")),
        (document.querySelector(
          "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:first-child h4"
        ).innerHTML = "How will you help me cut costs?"),
        setInterval(function () {
          [
            {
              selector: "#panel_0",
              content:
                '\n            <div class="accordion_content">\n              <title>\n                Assembly Neos helps reduce costs and increase billable hours in many ways:\n              </title>\n              <ul>\n                <li>\n                  <p>\n                    <strong>Automation.</strong> Automated document generation and population,\n                    lead intake, invoicing, and other workflows reduces time spent on other\n                    manual tasks.\n                  </p>\n                </li>\n                <li>\n                  <p>\n                    <strong>Organization.</strong> Complete platform search including PDF and\n                    Word document text, image info, and more, reduces time spent searching for\n                    information.\n                  </p>\n                </li>\n                <li>\n                  <p>\n                    <strong>Storage & Maintenance.</strong> Assembly Neos is 100% cloud-based,\n                    removing the need for physical storage, paper usage, expensive on-site\n                    servers, and dedicated IT staff.\n                  </p>\n                </li>\n              </ul>\n            </div>\n          ',
            },
            {
              selector: "#panel_1",
              content:
                "<p>We accept payments through ACH transfer, credit and debit cards, Zelle, PayPal, and Venmo.</p>",
            },
            {
              selector: "#panel_2",
              content:
                "<p>Our dedicated migration and onboarding team can help you get set up and running in as little as 1 week. </p>",
            },
          ].forEach(function (i, e) {
            var t = i.selector,
              n = i.content;
            document.querySelector(
              "".concat(t, " ~ .MuiCollapse-root .MuiAccordion-region")
            ) &&
              (console.log("accordion ".concat(e + 1, " working")),
              (document.querySelector(
                "".concat(t, " div[data-testid=rich-text__container]")
              ).innerHTML = n));
          });
        }),
        (document.querySelector(
          "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(2) h4"
        ).innerHTML = "What payment methods do you accept?"),
        (document.querySelector(
          "#pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(3) h4"
        ).innerHTML = "How quickly can I get Neos set up and running?"),
        window.innerWidth < 767 &&
          (document
            .querySelector("#feature_modal")
            .classList.add("first_active"),
          document.addEventListener("click", function (i) {
            if ("essential" === i.target.id) {
              var e = document.querySelectorAll(".pricing_nav ul li a");
              e.length > 0 &&
                e.forEach(function (i) {
                  i.classList.remove("active");
                }),
                i.target.classList.add("active"),
                console.log("click 1"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("second_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("third_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.add("first_active");
            } else if ("premium" === i.target.id) {
              var t = document.querySelectorAll(".pricing_nav ul li a");
              t.length > 0 &&
                t.forEach(function (i) {
                  i.classList.remove("active");
                }),
                i.target.classList.add("active"),
                console.log("click 2"),
                document
                  .querySelector(".custom_modal")
                  .classList.add("second_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("third_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("first_active");
            } else if ("pro" === i.target.id) {
              var n = document.querySelectorAll(".pricing_nav ul li a");
              n.length > 0 &&
                n.forEach(function (i) {
                  i.classList.remove("active");
                }),
                console.log("click 2"),
                i.target.classList.add("active"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("second_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.remove("first_active"),
                document
                  .querySelector(".custom_modal")
                  .classList.add("third_active");
            }
          }));
      var p = setInterval(function () {
        if (document.querySelector("body")) {
          clearInterval(p);
          var i = function (i, e, t) {
            var n = document.createElement("script");
            (n.src = i),
              (n.onload = e),
              (n.onreadystatechange = e),
              t.appendChild(n);
          };
          i(
            "https://res.cloudinary.com/spiralyze/raw/upload/v1710416831/assembly/script/smooth-scroll.min.js",
            function () {},
            document.body
          ),
            (a =
              "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"),
            ((s = document.createElement("link")).rel = "stylesheet"),
            (s.media = "all"),
            (s.href = a),
            document.getElementsByTagName("head")[0].appendChild(s),
            document
              .querySelector(".spz_5001 #pricing-page-product-details")
              .insertAdjacentHTML(
                "afterend",
                '\n            <div class="section2_5001">\n              <div class="auto_container">\n                <div class="section2_inner">\n                  <div class="wrapper">\n                    <div class="title">Features</div>\n                    <div class="accordion-wrapper">\n                      <div class="text">\n                        <div class="child active" data-index="1">\n                          <div class="bar"><div class="line"></div></div>\n                          <div class="title">\n                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286904/assembly/3001/frame_13.svg" alt="Case Management Icon" width="30" height="30" /><span>Case Management</span></div>\n                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                          </div>\n                          <div class="content">\n                            <div class="text">View case info from anywhere via the cloud platform. Case overviews, client information, legal documents, calendars, billing, and more.</div>\n                            <a href="https://assemblysoftware.com/case-management" class="cta">\n                              <span>Learn more</span>\n                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                              </svg>\n                            </a>\n                            <picture>\n                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-mobile.png">\n                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-Management-tablet.png" alt="Case Management" width="688" height="404">\n                            </picture>\n                          </div>\n                        </div>\n                        <div class="child" data-index="2">\n                          <div class="bar"><div class="line"></div></div>\n                          <div class="title">\n                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286886/assembly/3001/icons_2.svg" alt="Task Management Icon" width="30" height="30" /><span>Task Management</span></div>\n                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                          </div>\n                          <div class="content">\n                            <div class="text">Checklists, calendars, case statuses, deadlines, and more are available at your fingertips. Neos keeps you organized and on task.</div>\n                            <a href="https://assemblysoftware.com/increased-efficiency" class="cta">\n                              <span>Learn more</span>\n                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                              </svg>\n                            </a>\n                            <picture>\n                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-mobile.png">\n                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Task-Management-tablet.png" alt="Task Management" width="688" height="404">\n                            </picture>\n                          </div>\n                        </div>\n                        <div class="child" data-index="3">\n                          <div class="bar"><div class="line"></div></div>\n                          <div class="title">\n                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286888/assembly/3001/frame_10.svg" alt="Client Intake Icon" width="30" height="30" /><span>Client Intake</span></div>\n                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                          </div>\n                          <div class="content">\n                            <div class="text">Automatically capture leads 24/7 from forms and chatbots. Leverage dynamic forms to capture required info in less time.</div>\n                            <a href="https://assemblysoftware.com/neos/intake" class="cta">\n                              <span>Learn more</span>\n                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                              </svg>\n                            </a>\n                            <picture>\n                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-mobile.png">\n                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Case-intake-tablet.png" alt="Client Intake" width="688" height="404">\n                            </picture>\n                          </div>\n                        </div>\n                        <div class="child" data-index="4">\n                          <div class="bar"><div class="line"></div></div>\n                          <div class="title">\n                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286891/assembly/3001/frame_12.svg" alt="Document Management Icon" width="30" height="30" /><span>Document Management</span></div>\n                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                          </div>\n                          <div class="content">\n                            <div class="text">Mass-generate and file documents (even for multiple cases), edit PDFs. Enjoy case-specific document tagging, Bates stamping, and bulk-import files.</div>\n                            <a href="https://assemblysoftware.com/document-management" class="cta">\n                              <span>Learn more</span>\n                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                              </svg>\n                            </a>\n                            <picture>\n                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-mobile.png">\n                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/Document-Management-tablet.png" alt="Document Management" width="688" height="404">\n                            </picture>\n                          </div>\n                        </div>\n                        <div class="child" data-index="5">\n                          <div class="bar"><div class="line"></div></div>\n                          <div class="title">\n                            <div class="text"><img src="//res.cloudinary.com/spiralyze/image/upload/v1709286889/assembly/3001/frame_11.svg" alt="AI Data Analysis Icon" width="30" height="30" /><span>AI Data Analysis</span></div>\n                            <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333H16.5H15.5H14.6667H8V14.6667H14.6667H15.5L16.5 14.6666L17.3333 14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">\n                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 14.6667H24V17.3333H17.3333V24H14.6667V17.3333H8V14.6667H14.6667V8H17.3333V14.6667Z" fill="#25C9EF"/>\n                            </svg>\n                          </div>\n                          <div class="content">\n                            <div class="text">Embedded AI: Elevate efficiency with document generation, intelligent extraction, and advanced summarization capabilities.</div>\n                            <a href="https://assemblysoftware.com/neos-ai" class="cta">\n                              <span>Learn more</span>\n                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                                <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                              </svg>\n                            </a>\n                            <picture>\n                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-mobile.png">\n                              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/AI-data-analysis-tablet.png" alt="AI Data Analysis" width="688" height="404">\n                            </picture>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="image">\n                        <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">\n                        <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_management.webp" alt="Case Management" width="632" height="464">\n                        <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__task_management.webp" alt="Task Management" width="632" height="464">\n                        <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__case_intake.webp" alt="Client Intake" width="632" height="464">\n                        <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__document_management.webp" alt="Document Management" width="632" height="464">\n                        <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_accordion_images__ai_data_analysis.webp" alt="AI Data Analysis" width="632" height="464">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        '
              ),
            document
              .querySelector(
                ".spz_5001 .section2_5001 .accordion-wrapper > .text"
              )
              .addEventListener("click", function (i) {
                if (
                  i.target.closest(".title") &&
                  !i.target.closest(".child").classList.contains("active") &&
                  !document.querySelector(
                    ".spz_5001 .section2_5001 .accordion-wrapper .animate"
                  )
                ) {
                  var e = document.querySelector(
                      ".spz_5001 .section2_5001 .accordion-wrapper .text .child.active"
                    ),
                    t = e.offsetHeight;
                  e.classList.remove("active");
                  var n = e.offsetHeight;
                  e.classList.add("active"),
                    (e.style.height = t + "px"),
                    e.classList.remove("active"),
                    setTimeout(function () {
                      (e.style.height = n + "px"), e.classList.add("animate");
                    }, 1),
                    setTimeout(function () {
                      e.removeAttribute("style"), e.classList.remove("animate");
                    }, 301),
                    document.querySelector(
                      ".spz_5001 .section2_5001 .accordion-wrapper .child.no-border"
                    ) &&
                      document
                        .querySelector(
                          ".spz_5001 .section2_5001 .accordion-wrapper .child.no-border"
                        )
                        .classList.remove("no-border"),
                    "1" !=
                      i.target.closest(".child").getAttribute("data-index") &&
                      document
                        .querySelector(
                          '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
                            (parseInt(
                              i.target
                                .closest(".child")
                                .getAttribute("data-index")
                            ) -
                              1) +
                            '"]'
                        )
                        .classList.add("no-border");
                  var a = i.target.closest(".child"),
                    s = a.offsetHeight;
                  a.classList.add("active");
                  var p = a.offsetHeight;
                  a.classList.remove("active"),
                    (a.style.height = s + "px"),
                    a.classList.add("active"),
                    setTimeout(function () {
                      (a.style.height = p + "px"), a.classList.add("animate");
                    }, 1),
                    setTimeout(function () {
                      a.removeAttribute("style"), a.classList.remove("animate");
                    }, 301),
                    document
                      .querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper .image .hero.active"
                      )
                      .classList.remove("active"),
                    document
                      .querySelector(
                        '.spz_5001 .section2_5001 .accordion-wrapper .image .hero[data-index="' +
                          i.target
                            .closest(".child")
                            .getAttribute("data-index") +
                          '"]'
                      )
                      .classList.add("active"),
                    window.matchMedia("(max-width: 1079.98px)").matches &&
                      document.querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper.stop"
                      ) &&
                      setTimeout(function () {
                        new SmoothScroll().animateScroll(
                          document
                            .querySelector(
                              ".spz_5001 .section2_5001 .accordion-wrapper .child.active"
                            )
                            .getBoundingClientRect().y + scrollY,
                          null,
                          { easing: "easeOutQuad" }
                        );
                      }, 302);
                }
              });
          var e = 0;
          (t = setInterval(function () {
            if (
              (document
                .querySelector(
                  ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
                )
                .removeAttribute("style"),
              (document.querySelector(
                ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
              ).style.width = (e / 3e3) * 100 + "%"),
              e > 3e3)
            ) {
              document
                .querySelector(
                  ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
                )
                .removeAttribute("style");
              var i = parseInt(
                document
                  .querySelector(
                    ".spz_5001 .section2_5001 .accordion-wrapper .child.active"
                  )
                  .getAttribute("data-index")
              );
              5 != i ? (i += 1) : (i = 1),
                document
                  .querySelector(
                    '.spz_5001 .section2_5001 .accordion-wrapper .child[data-index="' +
                      i +
                      '"] .title'
                  )
                  .click(),
                (e = 0);
            }
            e += 200;
          }, 200)),
            document
              .querySelector(
                ".spz_5001 .section2_5001 .accordion-wrapper .image"
              )
              .addEventListener("mouseenter", function () {
                clearInterval(t),
                  document
                    .querySelector(
                      ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
                    )
                    .removeAttribute("style"),
                  document.querySelector(
                    ".spz_5001 .section2_5001 .accordion-wrapper.stop"
                  ) ||
                    document
                      .querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper"
                      )
                      .classList.add("stop");
              }),
            document
              .querySelector(
                ".spz_5001 .section2_5001 .accordion-wrapper > .text"
              )
              .addEventListener("mouseenter", function () {
                clearInterval(t),
                  document
                    .querySelector(
                      ".spz_5001 .section2_5001 .accordion-wrapper .child.active .bar .line"
                    )
                    .removeAttribute("style"),
                  document.querySelector(
                    ".spz_5001 .section2_5001 .accordion-wrapper.stop"
                  ) ||
                    document
                      .querySelector(
                        ".spz_5001 .section2_5001 .accordion-wrapper"
                      )
                      .classList.add("stop");
              }),
            (function () {
              for (
                var i = document.querySelectorAll(
                    ".spz_5001 .section2_5001 .accordion-wrapper .child .title > .text span"
                  ),
                  e = 0;
                e < i.length;
                e++
              )
                i[e].classList.contains("two-line") &&
                  i[e].classList.remove("two-line"),
                  i[e].offsetHeight > 30 && i[e].classList.add("two-line");
            })(),
            document
              .querySelector(".spz_5001 .section2_5001")
              .insertAdjacentHTML(
                "afterend",
                '\n          <div class="section3_5001">\n            <div class="auto_container">\n              <div class="section3_inner">\n                <div class="title">Integrations</div>\n                <picture class="logo">\n                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_12.svg">\n                  <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_11.svg">\n                  <img src="//res.cloudinary.com/spiralyze/image/upload/assembly/5001/desktop__logos_9.svg" alt="Company Logo" width="1240" height="171">\n                </picture>\n                <a href="https://assemblysoftware.com/get-a-demo" class="cta">\n                  <span>Get Started</span>\n                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                    <path d="M11.352 6.68953C11.2988 6.65 11.2431 6.61429 11.1853 6.58261L4.98555 2.61491L4.96274 2.59832L4.92238 2.57436C4.80799 2.51213 4.67822 2.4881 4.55047 2.50552C4.42271 2.52292 4.30308 2.58094 4.20761 2.67177C4.11213 2.76261 4.04539 2.88193 4.01632 3.01373C3.98725 3.14554 3.99725 3.28352 4.04497 3.40918L5.40145 7.9998L4.04497 12.5885C3.9958 12.7181 3.98669 12.8607 4.01893 12.9961C4.05115 13.1315 4.1231 13.2528 4.22458 13.3429C4.32606 13.4329 4.45194 13.4872 4.58441 13.498C4.71687 13.5088 4.84923 13.4756 4.96274 13.4031L5.20139 13.2575L6.0595 12.7047L8.03367 11.4459L11.1923 9.4188C11.2466 9.38726 11.2993 9.3528 11.3503 9.3156C11.5508 9.16913 11.7147 8.97386 11.8278 8.74653C11.9409 8.5192 12 8.26647 12 8.00993C12 7.7534 11.9409 7.50066 11.8278 7.27333C11.7147 7.04593 11.5508 6.85073 11.3503 6.70427L11.352 6.68953Z" fill="#1A1A1A"/>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        '
              ),
            document
              .querySelector(".spz_5001 .section3_5001")
              .insertAdjacentHTML(
                "afterend",
                '\n        <div class="section4_5001">\n          <div class="section4_inner">\n            <div class="title">Why our customers love us</div>\n            <div class="slider1-wrapper">\n              <section class="splide splide1">\n                <div class="splide__track">\n                  <ul class="splide__list">\n                    <li class="splide__slide">\n                      <div class="child child1">\n                        <div class="picture">\n                          <picture>\n                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__derrick_l_williams_1.webp">\n                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__derrick_l_williams.webp">\n                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__derrick_l_williams.webp" alt="Derrick L. Williams" width="196" height="196"/>\n                          </picture>\n                        </div>\n                        <div class="text">\n                          <div class="quote">“Neos is just easy to understand, even if you’re not tech savvy. If you know how to use the internet and access websites, I think you can use Neos.”</div>\n                          <div class="user-info">\n                            <div class="info">\n                              <div class="name">Derrick L. Williams</div><div class="border"></div>\n                              <div class="title">Williams & Roche</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class="splide__slide">\n                      <div class="child child2">\n                        <div class="picture">\n                          <picture>\n                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__scott_marshall_1.webp">\n                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__scott_marshall.webp">\n                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__scott_marshall.webp" alt="Scott Marshall" width="196" height="196"/>\n                          </picture>\n                        </div>\n                        <div class="text">\n                          <div class="quote">“Neos can run circles around our previous practice management platform because it took five times longer to do anything with the old platform. With Neos, the way it’s set up, the actual interface, is fantastic.”</div>\n                          <div class="user-info">\n                            <div class="info">\n                              <div class="name">Scott Marshall</div><div class="border"></div>\n                              <div class="title">Scott Marshall Injury Attorneys</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class="splide__slide">\n                      <div class="child child3">\n                        <div class="picture">\n                          <picture>\n                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__jessica_l_voto_1.webp">\n                            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet_-_testimonials__jessica_l_voto.webp">\n                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop_-_testimonials__jessica_l_voto.webp" alt="Jessica L. Voto" width="196" height="196"/>\n                          </picture>\n                        </div>\n                        <div class="text">\n                          <div class="quote">Being able to conduct intake directly in the platform and have it save to a case has cut file set-up time in half.</div>\n                          <div class="user-info">\n                            <div class="info">\n                              <div class="name">Jessica L. Voto</div><div class="border"></div>\n                              <div class="title">Voto & Cavalli Attorneys at Law, PC</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n        '
              ),
            i(
              "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
              function () {
                (n = new Splide(".spz_5001 .section4_5001 .splide1", {
                  type: "loop",
                  autoplay: !1,
                  arrows: !0,
                  autoHeight: !0,
                  pagination: !0,
                  focus: "center",
                  autoWidth: !0,
                  breakpoints: {
                    1079.98: { perPage: 1, focus: "center", autoWidth: !0 },
                  },
                })),
                  setTimeout(function () {
                    n.mount(),
                      n.on("move", function (i) {
                        document
                          .querySelector(
                            ".spz_5001 .section4_5001 .slider1-wrapper"
                          )
                          .classList.remove("active1", "active2", "active3"),
                          document
                            .querySelector(
                              ".spz_5001 .section4_5001 .slider1-wrapper"
                            )
                            .classList.add("active" + (parseInt(n.index) + 1));
                      }),
                      window.addEventListener("resize", function () {
                        n.refresh();
                      }),
                      document
                        .querySelector(
                          ".spz_5001 .section4_5001 .slider1-wrapper"
                        )
                        .classList.add("active1");
                  }, 200);
              },
              document.body
            );
        }
        var a, s;
      }, 10);
    }
    var o;
  }
  (a.id = "spz-styles"),
    (a.innerHTML =
      "@font-face{font-family:Causten-SemiBold;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/v1707891408/assembly/causten/Causten-SemiBold.woff) format(\"woff\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-SemiBold.woff2) format(\"woff2\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-SemiBold.eot) format(\"eot\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-SemiBold.ttf) format(\"ttf\")}@font-face{font-family:Causten-Regular;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-Regular.eot) format(\"eot\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891405/assembly/causten/Causten-Regular.ttf) format(\"ttf\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-Regular.woff2) format(\"woff2\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1707891404/assembly/causten/Causten-Regular.woff) format(\"woff\")}@font-face{font-family:causten-lightregular;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/assembly/causten/causten-light-webfont.woff2) format(\"woff2\"),url(//res.cloudinary.com/spiralyze/raw/upload/assembly/causten/causten-light-webfont.woff) format(\"woff\")}@font-face{font-family:causten-boldregular;font-style:normal;font-weight:400;src:url(//res.cloudinary.com/spiralyze/raw/upload/v1711648847/assembly/causten/causten-bold-webfont.woff2) format(\"woff2\"),url(//res.cloudinary.com/spiralyze/raw/upload/v1711648846/assembly/causten/causten-bold-webfont.woff) format(\"woff\")}.spz_5001 div.section2_5001{display:block}.spz_5001 .section2_5001>div{background-color:#fff!important;height:894px;padding-bottom:120px!important;padding-top:83px!important}.spz_5001 .section2_5001 .wrapper>.title{color:#1a1a1a;font-family:Causten-SemiBold;font-size:40px;font-weight:400;line-height:48px;text-align:center}.spz_5001 .section2_5001 .accordion-wrapper{align-items:flex-start;display:flex;justify-content:space-between;margin-top:66px}.spz_5001 .section2_5001 .accordion-wrapper>.text{flex-shrink:0;width:500px}.spz_5001 .section2_5001 .accordion-wrapper .child{overflow:hidden;padding:25px 24px 23px;position:relative;transition:height .3s cubic-bezier(.22,1,.36,1)}.spz_5001 .section2_5001 .accordion-wrapper .child:before{background:#e8ebf2;content:\"\";height:1px;left:0;position:absolute;top:0;width:100%}.spz_5001 .section2_5001 .accordion-wrapper .child.active{padding-bottom:24px;padding-top:28px}.spz_5001 .section2_5001 .accordion-wrapper .child .bar{background:#1a1a1a;display:none;height:3px;left:0;pointer-events:none;position:absolute;top:0;width:100%}.spz_5001 .section2_5001 .accordion-wrapper .child.active .bar{display:block}.spz_5001 .section2_5001 .accordion-wrapper .child .bar .line{background:#25c9ef;height:100%;left:0;position:absolute;top:0;transition:width .2s linear;width:0}.spz_5001 .section2_5001 .accordion-wrapper.stop .child .bar .line{display:none}.spz_5001 .section2_5001 .accordion-wrapper.stop .child .bar{background:#25c9ef}.spz_5001 .section2_5001 .accordion-wrapper .child .title{-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;cursor:pointer;display:flex;justify-content:space-between;padding:0;position:relative}.spz_5001 .section2_5001 .accordion-wrapper .child .title>.text{align-items:center;display:flex}.spz_5001 .section2_5001 .accordion-wrapper .child .title>.text img{transform:translateY(-1px)}.spz_5001 .section2_5001 .accordion-wrapper .child .title>.text span{color:#1a1a1a;font-family:Causten-SemiBold;font-size:20px;font-weight:400;letter-spacing:0;line-height:30px;margin-left:12px}.spz_5001 .section2_5001 .accordion-wrapper .child.active .title{cursor:default}.spz_5001 .section2_5001 .accordion-wrapper .child .title .minus{display:none;margin-left:8px;transform:translateY(-1px)}.spz_5001 .section2_5001 .accordion-wrapper .child .title .plus{display:block;margin-left:8px;transform:translateY(-1px)}.spz_5001 .section2_5001 .accordion-wrapper .child.active .title .minus{display:block}.spz_5001 .section2_5001 .accordion-wrapper .child .content,.spz_5001 .section2_5001 .accordion-wrapper .child.active .title .plus{display:none}.spz_5001 .section2_5001 .accordion-wrapper .child.active .content{display:block}.spz_5001 .section2_5001 .accordion-wrapper .child .content .text{color:#444d5e;font-family:Causten-Regular;font-size:18px;font-weight:400;letter-spacing:0;line-height:27px;margin-top:14.5px}.spz_5001 .section2_5001 .accordion-wrapper .child .content picture img{display:none;height:auto;max-width:100%}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta{align-items:center;background:#25c9ef;border-radius:4px;display:flex;height:44px;justify-content:center;margin-top:33.5px;outline:none;text-decoration:none;width:150px}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta:hover{background:#3acdef}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta:active,.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta:focus{background:#2299b5}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta span{color:#1a1a1a;font-family:Causten-SemiBold;font-size:16px;font-weight:400;letter-spacing:0;line-height:16px;margin-right:10px;transform:translateY(1px)}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta svg{outline:none;text-decoration:none}.spz_5001 .section2_5001 .accordion-wrapper .image{position:relative;width:calc(100% - 608px)}.spz_5001 .section2_5001 .accordion-wrapper .image .reference{height:auto;opacity:0;width:100%}.spz_5001 .section2_5001 .accordion-wrapper .image .hero{filter:drop-shadow(16px 16px 20px rgba(53,62,91,.25));height:auto;left:0;opacity:0;position:absolute;top:0;transition:opacity .3s cubic-bezier(.22,1,.36,1);width:100%;will-change:filter;z-index:0}.spz_5001 .section2_5001 .accordion-wrapper .image .hero.active{opacity:1;z-index:1}.spz_5001 .section2_5001 .accordion-wrapper .image img{display:block;height:auto;width:100%}.spz_5001 div.section3_5001{display:block}.spz_5001 .section3_5001{background-color:transparent!important;background-image:url(//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/desktop__-_bg__integrations_1.webp);background-position:50%;background-size:cover;flex-wrap:wrap!important;padding-bottom:80px!important;padding-top:78px!important}.spz_5001 .section3_5001 .title{color:#fff;font-family:Causten-SemiBold;font-size:40px;font-weight:400;letter-spacing:0;line-height:48px;margin-bottom:66px;text-align:center;width:100%}.spz_5001 .section3_5001 .logo img{height:auto;max-width:100%}.spz_5001 .section3_5001 .cta{align-items:center;background:#25c9ef;border-radius:4px;display:flex;height:44px;justify-content:center;margin:56.5px auto 0;outline:none;text-decoration:none;width:151px}.spz_5001 .section3_5001 .cta:hover{background:#3acdef}.spz_5001 .section3_5001 .cta:active,.spz_5001 .section3_5001 .cta:focus{background:#2299b5}.spz_5001 .section3_5001 .cta span{color:#1a1a1a;font-family:Causten-SemiBold;font-size:16px;font-weight:400;letter-spacing:0;line-height:16px;margin-right:10px;transform:translateY(1px)}.spz_5001 .section3_5001 .cta svg{outline:none;text-decoration:none}.spz_5001 div.section4_5001{display:block}.spz_5001 .section4_5001>div{background-color:#fff!important;flex-wrap:wrap!important;padding:78px 0!important;position:relative}.spz_5001 .section4_5001>div:before{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0));left:0}.spz_5001 .section4_5001>div:after,.spz_5001 .section4_5001>div:before{content:\"\";height:100%;pointer-events:none;position:absolute;top:0;width:112px;z-index:10}.spz_5001 .section4_5001>div:after{background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0));right:0}.spz_5001 .section4_5001>div>.title{color:#1a1a1a;font-family:Causten-SemiBold;font-size:40px;font-weight:400;letter-spacing:0;line-height:48px;margin-bottom:25px;text-align:center;width:100%}.spz_5001 .section4_5001 .slider1-wrapper{margin-left:auto;margin-right:auto;max-width:2510px;width:100%}.spz_5001 .section4_5001 .splide1 .splide__slide{padding:40px 0}.spz_5001 .section4_5001 .splide1 .child{background:#fff;border-radius:80px 6px;box-shadow:0 4px 29px 0 rgba(0,0,0,.08);display:flex;margin:0 32px;padding:49px 48px 46px;position:relative;width:776px}.spz_5001 .section4_5001 .splide1 .child .picture{width:196px}.spz_5001 .section4_5001 .splide1 .child .picture img{height:auto;width:100%}.spz_5001 .section4_5001 .splide1 .child .text{margin-left:48px;position:relative;width:436px}.spz_5001 .section4_5001 .splide1 .child .text:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='55' fill='none'%3E%3Cg opacity='.2' clip-path='url(%23a)' fill='%2325C9EF'%3E%3Cpath d='M46.263 36.437a18.886 18.886 0 0 0 4.026 11.274C53.763 52.15 59.17 55 65.243 55c2.157 0 4.228-.36 6.16-1.022 7.461-2.558 12.825-9.635 12.825-17.963 0-10.485-8.5-18.984-18.985-18.984-1.566 0-3.089.19-4.544.546 4.21-5.106 10.582-8.366 17.7-8.366V0C60.986 0 46.763 13.919 46.272 31.215h-.014v5.222h.005ZM.452 36.437A18.886 18.886 0 0 0 4.48 47.711C7.953 52.15 13.359 55 19.432 55c2.157 0 4.228-.36 6.16-1.022 7.461-2.558 12.825-9.635 12.825-17.963 0-10.485-8.5-18.984-18.985-18.984a19.1 19.1 0 0 0-4.544.546c4.211-5.106 10.582-8.366 17.7-8.366V0C15.175 0 .953 13.919.461 31.215H.448v5.222h.004Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' transform='rotate(180 42 27.5)' d='M0 0h84v55H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");background-repeat:no-repeat;content:\"\";height:55px;left:-9px;position:absolute;top:-21px;width:84px}.spz_5001 .section4_5001 .splide1 .child .text .quote{color:#1a1a1a;font-family:Noto Sans,sans-serif;font-size:20px;font-weight:300;height:151px;letter-spacing:-.36px;line-height:30px;margin-bottom:24px;padding-top:.5px}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info{align-items:center;display:flex}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .name{color:#25c9ef;font-family:Causten-SemiBold;font-size:20px;font-weight:400;letter-spacing:0;line-height:24px}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .border{background:#c4c7cd;border:none!important;height:20px;margin:0 11px 0 12px;width:1px}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .title{color:#757575;font-family:Noto Sans,sans-serif;font-size:16px;font-weight:400;line-height:24px;transform:translateY(-1px)}.spz_5001 .section4_5001 .splide__pagination{margin-top:21px;position:static}.spz_5001 .section4_5001 .splide1 .splide__pagination li{line-height:1!important}.spz_5001 .section4_5001 .splide1 .splide__pagination{bottom:26px}.spz_5001 .section4_5001 .splide1 .splide__pagination__page{background:#c4c7cd;height:10px;margin:3px 8px;opacity:1;outline:none;position:relative;width:10px}.spz_5001 .section4_5001 .splide1 .splide__pagination__page:hover{background:#25c9ef;border:none;opacity:1}.spz_5001 .section4_5001 .splide1 .splide__pagination__page:focus{border:none;color:transparent}.spz_5001 .section4_5001 .splide1 .splide__pagination__page.is-active{background:#25c9ef;height:14px;opacity:1;transform:none;width:14px}.spz_5001 .section4_5001 .splide1 .splide__arrow--next svg,.spz_5001 .section4_5001 .splide1 .splide__arrow--prev svg{display:none}.spz_5001 .section4_5001 .splide1 .splide__arrow--prev{background:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath d='M4.648 9.31c.053.04.109.076.167.107l6.2 3.968.022.017.04.024a.605.605 0 0 0 .715-.098.67.67 0 0 0 .192-.342.696.696 0 0 0-.029-.395L10.599 8l1.356-4.59a.697.697 0 0 0 .026-.407.671.671 0 0 0-.206-.347.61.61 0 0 0-.738-.06l-.238.146-.858.552-1.975 1.26L4.808 6.58a1.57 1.57 0 0 0-.635.672 1.655 1.655 0 0 0 0 1.474c.112.227.276.422.477.569l-.002.014Z' fill='%231A1A1A'/%3E%3C/svg%3E\");background-repeat:no-repeat;height:16px;left:50%;opacity:1;outline:0;top:95.7%;transform:translateX(-113px);width:16px}.spz_5001 .section4_5001 .splide1 .splide__arrow--next{background:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath d='M11.352 6.69a1.44 1.44 0 0 0-.167-.107l-6.2-3.968-.022-.017-.04-.024a.606.606 0 0 0-.715.098.671.671 0 0 0-.192.342c-.029.132-.019.27.029.395L5.401 8l-1.356 4.59a.697.697 0 0 0-.026.407.67.67 0 0 0 .206.347.61.61 0 0 0 .738.06l.238-.145.859-.553 1.974-1.26 3.158-2.026a1.569 1.569 0 0 0 .636-.672 1.655 1.655 0 0 0 0-1.474 1.568 1.568 0 0 0-.478-.569l.002-.014Z' fill='%231A1A1A'/%3E%3C/svg%3E\");background-repeat:no-repeat;height:16px;opacity:1;outline:0;right:50%;top:95.7%;transform:translateX(113px);width:16px}.spz_5001 .section4_5001 .splide1 .splide__arrow--prev:hover{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath d='M4.648 9.31c.053.04.109.076.167.107l6.2 3.968.022.017.04.024a.605.605 0 0 0 .715-.098.67.67 0 0 0 .192-.342.696.696 0 0 0-.029-.395L10.599 8l1.356-4.59a.697.697 0 0 0 .026-.407.671.671 0 0 0-.206-.347.61.61 0 0 0-.738-.06l-.238.146-.858.552-1.975 1.26L4.808 6.58a1.57 1.57 0 0 0-.635.672 1.655 1.655 0 0 0 0 1.474c.112.227.276.422.477.569l-.002.014Z' fill='%2325C9EF'/%3E%3C/svg%3E\")}.spz_5001 .section4_5001 .splide1 .splide__arrow--next:hover{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath d='M11.352 6.69a1.44 1.44 0 0 0-.167-.107l-6.2-3.968-.022-.017-.04-.024a.606.606 0 0 0-.715.098.671.671 0 0 0-.192.342c-.029.132-.019.27.029.395L5.401 8l-1.356 4.59a.697.697 0 0 0-.026.407.67.67 0 0 0 .206.347.61.61 0 0 0 .738.06l.238-.145.859-.553 1.974-1.26 3.158-2.026a1.569 1.569 0 0 0 .636-.672 1.655 1.655 0 0 0 0-1.474 1.568 1.568 0 0 0-.478-.569l.002-.014Z' fill='%2325C9EF'/%3E%3C/svg%3E\")}@media only screen and (min-width:2510px){.spz_5001 .section4_5001 .splide1{pointer-events:none}.spz_5001 .section4_5001 .splide1 .splide__arrows,.spz_5001 .section4_5001 .splide1 .splide__pagination{display:none}}@media(max-width:1199.98px){.spz_5001 .section2_5001 .accordion-wrapper .image{width:calc(100% - 554px)}}@media(max-width:1024.98px){.spz_5001 .section2_5001 .wrapper{margin-left:auto;margin-right:auto}.spz_5001 .section2_5001>div{flex-direction:column;height:auto;padding:72px 0 59.5px!important}.spz_5001 .section2_5001 .accordion-wrapper{flex-direction:column;margin-top:48px}.spz_5001 .section2_5001 .accordion-wrapper .image{display:none}.spz_5001 .section2_5001 .accordion-wrapper>.text{width:100%}.spz_5001 .section2_5001 .accordion-wrapper .child{padding:25px 44px 27px}.spz_5001 .section2_5001 .accordion-wrapper .child:before{left:0;margin-left:auto;margin-right:auto;right:0;width:calc(100% - 40px)}.spz_5001 .section2_5001 .accordion-wrapper .child.active{padding-top:32px}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta{margin-top:32.5px}.spz_5001 .section2_5001 .accordion-wrapper .child .content picture img{display:block;filter:drop-shadow(16px 16px 20px rgba(53,62,91,.25));margin-bottom:60px;margin-top:40px;max-width:100%;width:100%;will-change:filter}.spz_5001 .section2_5001 .accordion-wrapper .child .title>.text span.two-line{height:43px;transform:translateY(-20%)}.spz_5001 .section2_5001 .accordion-wrapper .child .bar{left:0;margin-left:auto;margin-right:auto;right:0;width:calc(100% - 40px)}.spz_5001 .section3_5001{background-image:url(//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/tablet__-_bg__integrations.webp);padding:64px 0!important}.spz_5001 .section3_5001 .cta{margin-top:56px}.spz_5001 .section4_5001>div{padding-bottom:62px!important;padding-top:64px!important}.spz_5001 .section4_5001 .splide1 .child{height:450px;margin:0 24px;padding-bottom:42px;width:496px}.spz_5001 .section4_5001 .splide1 .child .picture{width:184px}.spz_5001 .section4_5001 .splide1 .child .text{display:flex;flex-direction:column;margin-left:32px;width:184px}.spz_5001 .section4_5001 .splide1 .child .text .quote{font-size:18px;height:auto;line-height:27px;margin-bottom:0}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info{align-items:flex-start;flex-direction:column}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .border{display:none}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .name{font-size:18px;line-height:21.6px;margin-bottom:6px}.spz_5001 .section4_5001 .splide1 .child .text .user-info .info .title{font-size:14px;letter-spacing:.25px;line-height:21px}.spz_5001 .section4_5001 .splide1 .child .text .user-info{margin-top:auto;transform:translateY(-1px)}.spz_5001 .section4_5001>div:after,.spz_5001 .section4_5001>div:before{bottom:0;height:644px;top:auto;width:88px}.spz_5001 .section4_5001 .splide1 .splide__arrow--next,.spz_5001 .section4_5001 .splide1 .splide__arrow--prev{top:96.8%}}@media(max-width:767.98px){.spz_5001 .section2_5001 .wrapper>.title{font-size:32px;line-height:38.4px}.spz_5001 .section2_5001 .accordion-wrapper>.text{width:100%}.spz_5001 .section2_5001>div{padding-bottom:51px!important;padding-top:109px!important}.spz_5001 .section2_5001 .accordion-wrapper{margin-top:50px}.spz_5001 .section2_5001 .accordion-wrapper .child .content .cta{width:100%}.spz_5001 .section2_5001 .accordion-wrapper .child .content picture img{filter:drop-shadow(7px 7px 9px rgba(53,62,91,.25));margin-bottom:28px;margin-top:32px}.spz_5001 .section3_5001{background-image:url(//res.cloudinary.com/spiralyze/image/upload/f_auto/assembly/3001/mobile_-_bg__integrations.webp);padding-bottom:56px!important;padding-top:54px!important}.spz_5001 .section3_5001 .title{font-size:32px;line-height:38.4px;margin-bottom:50.5px}.spz_5001 .section3_5001 .cta{margin-top:40px}.spz_5001 .section3_5001 .logo{margin-left:auto;margin-right:auto}.spz_5001 .section3_5001 .logo img{width:350px}.spz_5001 .section4_5001>div:after,.spz_5001 .section4_5001>div:before{display:none}.spz_5001 .section4_5001>div>.title{font-size:32px;line-height:38.4px;margin-bottom:9px;padding:0 20px}.spz_5001 .section4_5001 .splide1 .child{flex-direction:column;height:647px;padding:40.5px 40px 40px;width:320px}.spz_5001 .section4_5001 .splide1 .child .picture{width:100%}.spz_5001 .section4_5001 .splide1 .child .text{margin-left:0;margin-top:47px;width:100%}.spz_5001 .section4_5001>div{padding-bottom:54px!important;padding-top:53.5px!important}.spz_5001 .section4_5001 .splide1 .child .text .quote{margin-bottom:21px}.spz_5001 .section4_5001 .splide__pagination{margin-top:8.5px}.spz_5001 .section4_5001 .splide1 .splide__arrow--next,.spz_5001 .section4_5001 .splide1 .splide__arrow--prev{top:97.6%}}@media(max-width:359.98px){.spz_5001 .section4_5001 .splide1 .child{height:662px;width:300px}}.spz_5001 #pricing-page-features,.spz_5001 #pricing-page-plan-details,.spz_5001 #pricing-page-product-details>.eu1r3rj0>.e19mrc5y0{display:none}.spz_5001 .auto_container{margin:auto;max-width:1280px;padding:0 20px}.spz_5001 #pricing-page-product-details .banner-simple{padding-bottom:32px;padding-top:28px}.spz_5001 #pricing-page-product-details .banner-simple>div:last-child{display:none}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-product-details .banner-simple{padding-bottom:33px;padding-top:35px}.spz_5001 #pricing-page-product-details .banner-simple h1{font-size:50px;font-weight:400;line-height:50px}}@media(max-width:767px){.spz_5001 #pricing-page-product-details .banner-simple{padding-top:38px}}.spz_5001 #pricing-page-product-details>div>div:nth-child(2){margin:0 -7px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div{width:100%}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div{padding-bottom:1px;padding-left:10px;padding-right:10px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination{-ms-flex-pack:center;align-items:center;bottom:14px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center;left:50%;max-width:194px;transform:translateX(-46%)}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination span{background:#c4c7cd;height:10px;line-height:1;margin:3px 8px;opacity:1;outline:none;position:relative;width:10px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination span.swiper-pagination-bullet-active{background:#25c9ef;height:14px;opacity:1;transform:none;width:14px}}@media(max-width:767px){.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div{padding-bottom:84px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination{-ms-flex-pack:center;align-items:center;bottom:14px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center;left:50%;max-width:194px;transform:translateX(-46%)}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination span{background:#c4c7cd;height:10px;line-height:1;margin:3px 8px;opacity:1;outline:none;position:relative;width:10px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2)>div .swiper-pagination span.swiper-pagination-bullet-active{background:#25c9ef;height:14px;opacity:1;transform:none;width:14px}.spz_5001 #pricing-page-product-details>div>div:nth-child(2){margin:0 -19px;padding-left:7px}}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child{align-items:flex-start;box-sizing:border-box;margin:10px 8px 0;min-height:651px;padding:53px 31px 44px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>div:first-child .bold{font-family:causten-boldregular;font-weight:400}@media(min-width:1024px)and (max-width:1199px){.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child{height:calc(100% - 10px)}}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child{height:calc(100% - 9px);margin:10px 8.5px 0;padding:37px 23px 28px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>div:first-child{text-align:left}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>div:first-child .bold{display:block}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>p+div{margin-top:17px;max-width:165px;min-height:57px}}@media(max-width:767px){.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child{height:calc(100% + 10px);margin:10px 8px 0;padding:38px 23px 9px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>div:first-child{text-align:left}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>div:first-child .bold{display:block}}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>p{display:none}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>p+div{color:#1a1a1a;font-family:Causten-SemiBold;font-weight:400;margin-top:16px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3){margin:24px 0 10px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3)>p{color:#1a1a1a;font-family:Causten-SemiBold;font-weight:400}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3)>div{padding-left:1px;padding-top:1px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(3)>div p{color:#1a1a1a}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4){margin-bottom:41px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button{padding:8px 21px;text-align:center;width:150px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button span{font-family:Causten-SemiBold;font-weight:400;margin-right:7px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button:active,.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button:focus{background-color:#2299b5}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4),.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button{width:100%}}@media(max-width:767px){.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4),.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child div:nth-of-type(4) button{width:100%}}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide>div:last-child>span>div title{color:#1a1a1a;display:block;font-family:Causten-SemiBold;font-size:16px;font-weight:400;line-height:24px;margin-top:-2px;padding-bottom:12px}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child .pricing_terms li{padding-left:0}.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child .pricing_terms li>div>span,.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child div:nth-of-type(3)>div p,.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child div:nth-of-type(3)>p,.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>p+div,.spz_5001 #pricing-page-product-details .swiper .swiper-wrapper .swiper-slide:last-child>div:last-child>span>div title{color:#fff}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-product-details .swiper{pointer-events:none}.spz_5001 #pricing-page-product-details .swiper .swiper-slide{width:33.33%!important}.spz_5001 #pricing-page-product-details .swiper .swiper-pagination{display:none!important}}@media(max-width:767px){.spz_5001 #pricing-page-product-details .swiper .swiper-slide{width:calc(100% - 95px)!important}.spz_5001 #pricing-page-product-details .swiper .swiper-slide:first-child.swiper-slide-prev,.spz_5001 #pricing-page-product-details .swiper .swiper-slide:first-child:not(.swiper-slide-active){width:100%!important}.spz_5001 #pricing-page-product-details .swiper .swiper-slide:nth-child(2).swiper-slide-prev{width:calc(100% + 95px)!important}}.spz_5001 #pricing-page-product-details .pricing_terms{padding-left:23px}.spz_5001 #pricing-page-product-details .pricing_terms li{padding-left:0}.spz_5001 #pricing-page-product-details .pricing_terms li:not(:last-child){margin-bottom:12px}.spz_5001 #pricing-page-product-details .pricing_terms li>div{padding-left:1px;transform:translateY(-2px)}.spz_5001 #pricing-page-product-details .pricing_terms li>div span{color:#1a1a1a}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e{justify-content:space-between;margin:43px auto 2px;max-width:900px}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e h4{font-family:Causten-SemiBold;font-weight:400;margin-bottom:0;transform:translateX(8px)}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e p{font-family:Noto Sans;letter-spacing:-.25px;margin-bottom:0;padding-left:0;transform:translateX(-7px)}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e p a{color:#1a1a1a}@media(min-width:768px)and (max-width:1023px){.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e{margin-top:61px}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e h4{font-size:28px;font-weight:400;line-height:32px;padding-bottom:17px;transform:translateX(0)}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e p{font-size:15px;letter-spacing:.15px;line-height:23px}}@media(max-width:767px){.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e{margin-top:62px}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e h4{font-size:24px;letter-spacing:-.24px;line-height:32px;padding-bottom:17px}.spz_5001 #e0e8910de5b44fd992d6d57245dd6b5e p{font-size:15px;letter-spacing:.15px;line-height:23px;margin:auto;max-width:235px}}.spz_5001 .feature_btnOuter{padding-top:38px;text-align:center;width:100%}@media(max-width:767px){.spz_5001 .feature_btnOuter{padding-top:37px}}.spz_5001 .feature_btn{border:2px solid #1a1a1a;border-radius:6px;box-sizing:border-box;color:#1a1a1a;display:inline-block;font-family:Causten-SemiBold;font-size:16px;font-weight:400;line-height:24px;padding:5px 10px;text-decoration:none;transition:all .4s ease;width:204px}.spz_5001 .feature_btn svg{display:inline-block;height:6px;margin-left:7px;transform:translateY(-1px);transition:all .4s ease;width:18px}.spz_5001 .feature_btn:hover{background-color:#3acdef;border-color:#3acdef}.spz_5001 .feature_btn:active,.spz_5001 .feature_btn:focus{background-color:#2299b5;border-color:#2299b5}.spz_5001 .feature_btn:active svg,.spz_5001 .feature_btn:focus svg{transform:rotate(-180deg)}.spz_5001 .custom_modal{backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);background:rgba(111,132,137,.41);box-sizing:border-box;display:none;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:99999}.spz_5001 .custom_modal::-webkit-scrollbar{display:none}.spz_5001 .custom_modal *{box-sizing:border-box}.spz_5001 .custom_modal.first_active .checklist_data>span:first-of-type,.spz_5001 .custom_modal.first_active .modal_top span:first-of-type,.spz_5001 .custom_modal.second_active .checklist_data>span:nth-of-type(2),.spz_5001 .custom_modal.second_active .modal_top span:nth-of-type(2),.spz_5001 .custom_modal.third_active .checklist_data>span:nth-of-type(3),.spz_5001 .custom_modal.third_active .modal_top span:nth-of-type(3){display:block}.spz_5001 .modal_inner{align-items:flex-start;display:flex;justify-content:center;padding:82px 20px;width:100%}@media(min-width:768px)and (max-width:1023px){.spz_5001 .modal_inner{padding:55px 32px}}@media(max-width:767px){.spz_5001 .modal_inner{padding:25px 20px}}.spz_5001 .modal_main{background:#fff;border:1px solid #b3b3b5;border-radius:16px;box-shadow:0 20px 60px -16px rgba(20,34,37,.4);max-width:1240px;overflow:hidden;width:100%}.spz_5001 .modal_top{align-items:center;background:rgba(37,201,239,.2);border-bottom:1px solid var(--Accents-A-1-Main,#25c9ef);display:flex;justify-content:space-between;padding:23px 40px 27px;position:relative;width:100%}.spz_5001 .modal_top strong{color:#1a1a1a;display:block;font-family:Causten-Regular;font-size:40px;font-weight:400;line-height:48px;width:25%}.spz_5001 .modal_top strong b{display:inline-block;font-family:Causten-SemiBold}.spz_5001 .modal_top span{color:rgba(0,0,0,.87);display:block;font-family:causten-lightregular;font-size:28px;font-weight:400;line-height:36px;text-align:center;width:25%}.spz_5001 .modal_top span b{display:inline-block;font-family:causten-boldregular}@media(min-width:768px)and (max-width:1023px){.spz_5001 .modal_top{padding:32px 40px 34px}.spz_5001 .modal_top strong{font-size:32px;font-weight:400;line-height:38.4px;width:50%}.spz_5001 .modal_top span{font-size:24px;font-weight:400;line-height:24px}.spz_5001 .modal_top span b{display:block}}@media(max-width:767px){.spz_5001 .modal_top{padding:42px 20px 49px}.spz_5001 .modal_top strong{font-size:24px;line-height:36px;transform:translateY(12px);width:60%}.spz_5001 .modal_top span{display:none;font-size:20px;line-height:20px;width:45%}.spz_5001 .modal_top span b{display:block;padding-bottom:5px}}.spz_5001 .close_modal{display:block;height:24px;position:absolute;right:19px;top:18px;width:24px}.spz_5001 .close_modal img{display:block;height:100%;width:100%}@media(max-width:767px){.spz_5001 .close_modal{right:15px;top:15px}}.spz_5001 .accordion{width:100%}.spz_5001 .accordion-item{background-color:#fff}.spz_5001 .accordion-item:not(:last-child){margin-bottom:8px}.spz_5001 .accordion-item-header{align-items:center;background:#f9f9f9;cursor:pointer;display:flex;justify-content:space-between;padding:10px 40px;position:relative}.spz_5001 .accordion-item-header h3{color:#1a1a1a;font-family:Causten-Regular;font-size:28px;font-weight:400;line-height:36px}@media(min-width:768px)and (max-width:1023px){.spz_5001 .accordion-item-header h3{font-size:24px;line-height:32px}}@media(max-width:767px){.spz_5001 .accordion-item-header h3{font-size:18px;line-height:26px;max-width:60%}}.spz_5001 .accordion-item-header:after{background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\"><path d=\"M16.8 14.9L12 10.1L7.20005 14.9\" stroke=\"%231A1A1A\" stroke-width=\"2\" stroke-linecap=\"square\"/></svg>');background-repeat:no-repeat;background-size:auto;content:\"\";height:24px;position:absolute;right:40px;top:16px;transform:rotate(180deg);width:24px}.spz_5001 .accordion-item-header.active:after{transform:rotate(0)}.spz_5001 .accordion-item-header.active~.accordion-item-body{max-height:max-content!important}@media(max-width:767px){.spz_5001 .accordion-item-header{padding:10px 19px}.spz_5001 .accordion-item-header:after{background-position:50%;height:100%;right:19px;top:0}.spz_5001 .accordion-item-header.active:after{right:19px;top:0}}.spz_5001 .accordion-item-body{max-height:0;overflow:hidden;transition:all .4s ease-out}.spz_5001 .accordion-item-body-content{padding:32px 40px 21px}@media(max-width:767px){.spz_5001 .accordion-item-body-content{padding:24px 20px 21px}}.spz_5001 .pricing_checklistTable{width:100%}.spz_5001 .pricing_checklistTable ul{list-style:none;margin:0;padding-left:0}.spz_5001 .pricing_checklistTable ul li{border-top:1px solid hsla(220,8%,79%,.6)}.spz_5001 .pricing_checklistTable ul li:last-child{border-bottom:1px solid hsla(220,8%,79%,.6)}.spz_5001 .checklist_data{align-items:center;display:flex;padding:8px 0}.spz_5001 .checklist_data strong{color:#444d5e;display:block;font-family:Noto Sans;font-size:15px;font-style:normal;font-weight:400;letter-spacing:-.5px;line-height:23px;width:25%}.spz_5001 .checklist_data strong svg{display:inline-block;height:14px;width:14px}.spz_5001 .checklist_data>span{display:block;line-height:1;text-align:center;width:25%}.spz_5001 .checklist_data>span svg{height:24px;margin:auto;transform:translateY(1px) translateX(0);width:24px}@media(min-width:768px)and (max-width:1023px){.spz_5001 .checklist_data strong{font-size:13px;font-weight:400;line-height:21px;width:50%}}@media(max-width:767px){.spz_5001 .checklist_data{padding:9px 0}.spz_5001 .checklist_data strong{font-size:13px;line-height:21px;width:60%}.spz_5001 .checklist_data>span{display:none;width:37%}.spz_5001 .checklist_data>span svg{transform:translateY(0) translateX(1px)}}.spz_5001 .MuiButton-root:active,.spz_5001 .MuiButton-root:focus{background-color:#2299b5}.spz_5001 #pricing-page-plan-enhancements{margin-top:0}.spz_5001 #pricing-page-plan-enhancements>div{padding:94px 0 96px}.spz_5001 #pricing-page-plan-enhancements>div>div:first-child>div:last-child{padding-top:2px}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements>div>div:first-child>div:first-child{font-family:Causten-Regular;font-size:40px;font-weight:400;line-height:48px}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements>div>div:first-child>div:first-child{font-size:40px;font-weight:400;line-height:48px}}.spz_5001 #pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child{padding-bottom:30px;padding-left:0}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child{padding-top:60px}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements>div>div:nth-child(2)>div>div:first-child{padding-top:58px}}@media(min-width:1024px)and (max-width:1199px){.spz_5001 #pricing-page-plan-enhancements>div{padding-left:20px;padding-right:20px}}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements>div{padding:67px 0 96px}.spz_5001 #pricing-page-plan-enhancements>div .bNmPAQ{display:flex;justify-content:space-between;min-width:79px;right:32px;top:-63px}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements>div{padding:63px 20px 64px}.spz_5001 #pricing-page-plan-enhancements>div .bNmPAQ{display:flex;right:0;top:-63px}.spz_5001 #pricing-page-plan-enhancements>div .plan-enhancementsstyles__ButtonContainerStyled-sc-5425dr-10{margin-top:40px}.spz_5001 #pricing-page-plan-enhancements>div .MuiButton-disableElevation{width:100%}}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper.hide .addons_paragraph{display:none}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(3)>div>div:first-child>div:first-line,.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper.hide .swiper-slide>div>div:first-child>div:first-line{font-family:Causten-SemiBold}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div{display:block;height:auto;padding:29px 32px 30px}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div>div:first-child{display:block;line-height:1;padding-bottom:18px}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div>div:first-child>div{color:#1a1a1a;font-family:causten-lightregular;font-size:28px;font-weight:400;line-height:36px;margin:0 auto;max-width:250px}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div>div:first-child>div .bold{font-family:Causten-SemiBold;pointer-events:none}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div>div:nth-child(2){margin-top:1px}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide>div>div:nth-child(2)>div{color:#207285;font-size:20px;font-weight:400;letter-spacing:-1.1px;line-height:24px;text-align:center}.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(4)>div>div:first-child>div,.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(5)>div>div:first-child>div,.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(6)>div>div:first-child>div,.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(7)>div>div:first-child>div,.spz_5001 #pricing-page-plan-enhancements .swiper-wrapper .swiper-slide:nth-child(8)>div>div:first-child>div{font-family:Causten-SemiBold}.spz_5001 #pricing-page-plan-enhancements .addons_paragraph{padding-top:30px;width:100%}.spz_5001 #pricing-page-plan-enhancements .addons_paragraph p{color:#1a1a1a;font-family:Causten-Regular;font-size:16px;font-weight:400;line-height:24px}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div{padding:80px 0 81px}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div{padding:64px 12px 35px}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div{padding:64px 12px 36px}}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child{display:block;overflow:hidden;padding-right:55px;width:50%}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child{padding-bottom:64px;padding-right:0;width:100%}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child{padding-bottom:63px;padding-right:0;width:100%}}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child .gatsby-image-wrapper{height:100%;width:100%}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child img{display:none!important;position:relative}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture{display:block;height:100%;overflow:hidden}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img{display:block!important;height:100%;height:627px;object-fit:cover;width:100%}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img{height:540px}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:first-child picture img{height:340px}}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child{padding-left:45px;width:50%}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child{padding-left:0;width:100%}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child{padding-left:0;width:100%}}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child>div{margin-bottom:28px}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiAccordionDetails-root>div{padding-right:49px}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiAccordionSummary-content{margin:18px 0}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiAccordionSummary-content h4{color:#1a1a1a;font-family:Causten-SemiBold;font-size:18px;font-weight:400;line-height:26px}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child label{display:block;max-width:430px}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child label{color:#1a1a1a;font-family:Causten-Regular;font-size:36px;font-weight:400;line-height:40px;max-width:100%}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child label{font-size:36px;font-weight:400;line-height:40px}}.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(4),.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(4)~.css-1dtxxx3,.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(5),.spz_5001 #pricing-page-plan-enhancements~section[data-testid=component-wrapper__container]>div>div>div>div:last-child .MuiPaper-root:nth-child(5)~.css-1dtxxx3{display:none}@media(min-width:768px)and (max-width:1023px){.spz_5001 #pricing-page-plan-enhancements{padding-left:32px}.spz_5001 #pricing-page-plan-enhancements .swiper-pagination{display:none}.spz_5001 #pricing-page-plan-enhancements .swiper-slide{margin-right:24px!important}}@media(max-width:767px){.spz_5001 #pricing-page-plan-enhancements .swiper-pagination{display:none}.spz_5001 #pricing-page-plan-enhancements .swiper-slide{margin-right:16px!important;width:280px!important}}.spz_5001 .accordion_content title{display:block;margin-top:-3px;padding-bottom:8px}.spz_5001 .accordion_content title,.spz_5001 .accordion_content ul{color:#1a1a1a;font-family:Causten-Regular;font-size:16px;font-weight:400;line-height:24px}.spz_5001 .accordion_content ul{margin:0;padding-left:24px}.spz_5001 .accordion_content ul strong{font-family:Causten-SemiBold;font-weight:400}.spz_5001 .pricing_nav{bottom:23px;display:none;position:absolute;right:56px;width:auto}.spz_5001 .pricing_nav ul{align-items:center;display:flex;list-style:none;margin:0 -5px;padding-left:0}.spz_5001 .pricing_nav ul li{padding:0 5px}.spz_5001 .pricing_nav ul li a{background-color:#25c9ef;border-radius:50%;display:block;height:8px;opacity:.4;width:8px}.spz_5001 .pricing_nav ul li a.active{background-color:#25c9ef;height:10px;opacity:1;width:10px}@media(max-width:767px){.spz_5001 .pricing_nav{display:block}}.spz_5001 .borXVz{background:#f9f9f9;border-radius:.25rem;bottom:2rem;box-shadow:0 0 1.25rem rgba(0,0,0,.25);color:#1a1a1a;display:none;font-size:.8125rem;font-style:normal;font-weight:400;height:fit-content;line-height:1rem;padding:.75rem;position:absolute;right:-3rem;text-align:left;width:10.375rem}.spz_5001 .tooltip{cursor:pointer;display:inline-block;height:.5rem;height:1.5rem;position:relative;transform:translateY(2px);width:1.5rem}.spz_5001 .tooltip:hover .borXVz{display:block}"),
    document.body.appendChild(a);
  var p = setInterval(function () {
    if (document.querySelectorAll("body").length > 0) {
      clearInterval(p);
      var e = document.querySelector("body");
      new MutationObserver(function (e, n) {
        var a,
          p = i(e);
        try {
          for (p.s(); !(a = p.n()).done; ) {
            a.value;
            ((!document.querySelector(".spz_5001") &&
              document.querySelector("#pricing-page-product-details")) ||
              (document.querySelector(".spz_5001") &&
                !document.querySelector(".spz_5001 .section2_5001"))) &&
              (console.log("Interval Working"), s()),
              document.querySelector("#pricing-page-product-details") ||
                (console.log("not same"),
                document.querySelector(".spz_5001 .section2_5001") &&
                  (console.log("not same 1"),
                  document.querySelector(".spz_5001 .section2_5001").remove()),
                document.querySelector(".spz_5001 .section3_5001") &&
                  (console.log("not same 2"),
                  clearInterval(t),
                  document.querySelector(".spz_5001 .section3_5001").remove()),
                document.querySelector(".spz_5001 .section4_5001") &&
                  (console.log("not same 3"),
                  document.querySelector(".spz_5001 .section4_5001").remove()),
                document.querySelector(".spz_5001") &&
                  document.querySelector("body").classList.remove("spz_5001"));
          }
        } catch (i) {
          p.e(i);
        } finally {
          p.f();
        }
      }).observe(e, { attributes: !0, childList: !0, subtree: !0 });
    }
  }, 1e3);
})();
