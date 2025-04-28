console.log("425 running")
const bodyInterval425 = setInterval(function(){
	if(document.querySelector('body') && !document.querySelector('.spz-425') &&  document.querySelector('.cart-section .cart-offers-wrapper h3')){
		clearInterval(bodyInterval425)
    document.querySelector('body').classList.add("spz-425");
    const style = document.createElement('style');
    style.innerHTML =`
.spz-425 .crate-parent .cart-product-price[role="cell"]{
  color:  #333;
  font-family:proxima-nova;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px; 
  letter-spacing: 0px;
  padding-right: 6px;
  transform: translateY(1px);
}

.spz-425 .crate-parent .new-content{
  border-radius: 8px;
  background: #F5F6F8;
  margin: 18px 61px 11px;
  padding: 12px 20px 1px;
}

.spz-425 .crate-parent .new-content > .title{
  color: #333;
  font-family:proxima-nova;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
}

.spz-425 .crate-parent .new-content > .desc{
  color: #333;
  font-family:proxima-nova;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px; 
  margin: 12px 0;
  letter-spacing: 0.04px;
}

.spz-425 .crate-parent .new-content > .desc strong{
  font-weight: 700;
}

.spz-425 .crate-parent .new-content ul {
  list-style: none;
  margin: 0;
}

.spz-425 .crate-parent .new-content ul li {
  display: flex;
  padding-bottom: 12.5px;
  border-bottom: 1px solid #CCC;
}
.spz-425 .crate-parent .new-content ul li:last-child{
  border: 0;
  margin-top: 12.5px;
}
.spz-425 .crate-parent .new-content ul li img {
  margin-right: 12px;
}

.spz-425 .crate-parent .new-content ul li .text .title{
  color: #333;
  font-family:proxima-nova;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
}

.spz-425 .crate-parent .new-content ul li .text .desc{
  color: #333;
  font-family:proxima-nova;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  margin-top: 1px; 
}

@media (max-width: 987.98px) {
  .spz-425 .crate-parent .new-content{
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 832.98px) {
  .spz-425 .crate-parent .cart-product-price[role="cell"]{
    padding-right: 13.5px;
    transform: none;
  }
  .spz-425 .crate-parent .new-content{
    margin: 11.5px 22px -12px 68px;
    padding-bottom: 12px;
  }
  .spz-425 .crate-parent .new-content > .desc{
    margin: 12.5px 0 12px;
  }

  .spz-425 .crate-parent .new-content ul li{
    padding-bottom: 13px;
  }

  .spz-425 .crate-parent .new-content ul li:last-child{
    padding-bottom: 1.5px;
  }
}
@media (max-width: 640.98px) {
  .spz-425 .crate-parent .cart-product-price[role="cell"]{
    padding-right: 11.5px;
  }
  .spz-425 .crate-parent .new-content{
    margin: 19px -3px -6px -3px;
  }
  .spz-425 .crate-parent .new-content > .desc{
    margin-bottom: 11.5px;
  }
  .spz-425 .crate-parent .new-content ul li{
    padding-bottom: 13.5px;
  }
}
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
    function findText() {
     for(let i =0;i<document.querySelectorAll('.cart-details .cart-product-title').length;i++){
      if(document.querySelectorAll('.cart-details .cart-product-title')[i].textContent=="Camtasia® Essentials" ||
        document.querySelectorAll('.cart-details .cart-product-title')[i].textContent=="Camtasia Essentials"
        ){
        return true
      }
     }
    }
    const run425Test = ()=>{
      document.querySelector('.spz-425 .cart-offers-wrapper [data-fsc-item-path-value="camtasia-create-yearly"]').closest('.table-container').classList.add("crate-parent")
      // adding content
      document.querySelector('.spz-425 .cart-offers-wrapper [data-fsc-item-path-value="camtasia-create-yearly"]').closest('.flex-table').querySelector('.cart-product-price').textContent="+$69.12"
      document.querySelector('.crate-parent .flex-table').insertAdjacentHTML("afterend",`
        <div class="new-content">
          <div class="title">Camtasia® Create includes:</div>
          <div class="desc">Everything in <strong>Camtasia</strong>® <strong>Essential</strong>, and...</div>
          <ul>
            <li>
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1739347509/spiralmetricspatterns/425/audiate_iconsvg.svg" alt="AI Generation Logo" width="32" height="32" >
              <div class="text">
                <div class="title">AI Generation</div>
                <div class="desc">Generate video titles, descriptions, and chapter names. Use prompts to generate images.</div>
              </div>
            </li>
            <li>
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1739347509/spiralmetricspatterns/425/camtasia_iconsvg.svg" alt="Caption Translation Logo" width="32" height="32" >
              <div class="text">
                <div class="title">Caption Translation</div>
                <div class="desc">Translate scripts, audio, and captions into 7 languages.</div>
              </div>
            </li>
          </ul>
        </div>  
      `)
    }
    if(findText() && 
      document.querySelector('.spz-425 .cart-offers-wrapper [data-fsc-item-path-value="camtasia-create-yearly"]')){
        run425Test()
    }

    const targetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      if(findText() && 
      document.querySelector('.spz-425 .cart-offers-wrapper [data-fsc-item-path-value="camtasia-create-yearly"]') && window.getComputedStyle(document.querySelector('#cart-waiting')).display=="none" && !document.querySelector('.crate-parent')){
        run425Test()
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  
  }
},10)
setTimeout(function(){
  clearInterval(bodyInterval425)
},10000)