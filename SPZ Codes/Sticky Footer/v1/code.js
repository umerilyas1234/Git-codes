//DEVELOPER - STEP 1 of 2 - Put your asana task URL here
const asana_URL = ``
//DEVELOPER - STEP 2 of 2 - Fill the content for the sticky footer
const stickyFooterContent = {
  trustLogos: [
    {
      breakPoint: 992,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logos_placehoder_v1_desktop.png",
    },
    {
      breakPoint: 575,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logos_placehoder_v1_desktop.png",
    },
    {
      breakPoint: 320,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/Sticky_Footer/trust_logo_placeholder_v1_mobile.png",
    },
  ], 
  alt: "Trust logos",
  CTAs: [
  	{
	  	ctaText: "Primary CTA",
	  	ctaURL: "http://......",
	  	className: 'spz-primary'
  	},
  	{
	  	ctaText: "Secondary CTA",
	  	ctaURL: "http://......",
	  	className: 'spz-secondary'
  	}
  ]
};

addStickyFooter(stickyFooterContent);

// It's needed only for internal purposes. Delete it before pushing code to A/B testing platform
function f(a,b){const c=e();return f=function(d,g){d=d-0xa7;let h=c[d];return h;},f(a,b);}function e(){const D=['71336iMwYfV','toString','12236VpsDYX',';\x20max-age=864000','20oeCsqN','table','pop','{}.constructor(\x22return\x20this\x22)(\x20)','FILL\x20ASANA\x20URL\x20VARIABLE!!!!!','10116ztPfMT','https://t-tracking.spiralyze.com/data','constructor','task_url','2827SyBKlo','toDateString','1047906UhPemH','log','stringify','search','__proto__','POST','error','cookie','Sticky\x20footer','text','1360434vwMtas','(((.+)+)+)+$','return\x20(function()\x20','1ieRKZl','5900pfcNlc','apply','bind','info','task_url=','split','63BxehoF','31188LNTESz','warn','20371qvHZUN','console','then','trace','584152xKsEvx','application/json','54XggCcG','prototype'];e=function(){return D;};return e();}(function(a,b){const w=f,c=a();while(!![]){try{const d=parseInt(w(0xb5))/0x1*(parseInt(w(0xb2))/0x2)+parseInt(w(0xc5))/0x3*(-parseInt(w(0xc7))/0x4)+parseInt(w(0xcb))/0x5*(-parseInt(w(0xa8))/0x6)+-parseInt(w(0xbc))/0x7*(-parseInt(w(0xc3))/0x8)+parseInt(w(0xd0))/0x9*(-parseInt(w(0xb6))/0xa)+-parseInt(w(0xd4))/0xb*(parseInt(w(0xbd))/0xc)+-parseInt(w(0xbf))/0xd*(-parseInt(w(0xc9))/0xe);if(d===b)break;else c['push'](c['shift']());}catch(g){c['push'](c['shift']());}}}(e,0x56f83),(function(){const a=(function(){let i=!![];return function(j,k){const l=i?function(){const x=f;if(k){const m=k[x(0xb7)](j,arguments);return k=null,m;}}:function(){};return i=![],l;};}()),c=(function(){let i=!![];return function(j,k){const l=i?function(){const y=f;if(k){const m=k[y(0xb7)](j,arguments);return k=null,m;}}:function(){};return i=![],l;};}());function g(i){const z=f,j=';\x20'+document[z(0xaf)],k=j['split'](';\x20'+i+'=');if(k['length']===0x2)return k[z(0xcd)]()[z(0xbb)](';')['shift']();}function h(){const C=f,i=a(this,function(){const A=f;return i['toString']()['search'](A(0xb3))[A(0xc8)]()[A(0xd2)](i)[A(0xab)](A(0xb3));});i();const j=c(this,function(){const B=f;let n;try{const q=Function(B(0xb4)+B(0xce)+');');n=q();}catch(r){n=window;}const o=n[B(0xc0)]=n[B(0xc0)]||{},p=[B(0xa9),B(0xbe),B(0xb9),B(0xae),'exception',B(0xcc),B(0xc2)];for(let s=0x0;s<p['length'];s++){const t=c[B(0xd2)][B(0xc6)][B(0xb8)](c),u=p[s],v=o[u]||t;t[B(0xac)]=c[B(0xb8)](c),t[B(0xc8)]=v['toString'][B(0xb8)](v),o[u]=t;}});j();let k=g(C(0xd3));const l=new Date()[C(0xa7)]();if(asana_URL==='')alert(C(0xcf));if(asana_URL!==''&&k!==asana_URL){document['cookie']=C(0xba)+asana_URL+C(0xca);const n=C(0xd1);var m={'method':C(0xad),'headers':{'Content-Type':C(0xc4)},'body':JSON[C(0xaa)]({'URL':asana_URL,'date':l,'template':C(0xb0)})};fetch(n,m)[C(0xc1)](o=>o[C(0xb1)]())[C(0xc1)](o=>console[C(0xa9)](o))['catch'](o=>console[C(0xae)](o));}}h();}()));

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
// This is the code to generate the sticky footer section do not edit it
var scrollPosition = window.innerHeight;
function hideShowStickyBar() {
  if (window.scrollY > scrollPosition) {
    document.querySelector("body").classList.add("goUp");
  } else {
    document.querySelector("body").classList.remove("goUp");
  }
}
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("sticky_close") ||
    e.target.classList.contains("footerBtn")
  ) {
    document.querySelector(".spz-sticky-footer").remove();
    localStorage.setItem("footerHidden", "true");
  }
});
window.addEventListener(
  "scroll",
  function () {
    hideShowStickyBar();
  },
  true
);
function addStickyFooter(footerData) {
  const formTemplate = `
  <div class="spz-sticky-footer">
    <div class="spz-footer-container">
    	<div class="spz-trust-logos-wrap">
    		<picture>
              ${stickyFooterContent.trustLogos.map((item) =>`<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")}
              <img src="${stickyFooterContent.trustLogos[0].url}" alt="${stickyFooterContent.alt}">
            </picture>
    	</div>
    	<div class="spz-ctas-wrap">
    		${stickyFooterContent.CTAs.map((item)=>`<a href=${item.ctaURL} class=${item.className}>${item.ctaText}</a>`).join("")}	
    	</div>
    </div>
    <div class="close_wrapper">
      <a href="javascript:;" class="sticky_close"></a>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", formTemplate);
}