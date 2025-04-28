const bodyInterval2001 = setInterval(function(){
  if(document.querySelector('body') && !document.querySelector('.spz-2001')){
    clearInterval(bodyInterval2001)

    const findByText =(type,text)=>{
      for(let i=0;i<document.querySelectorAll(type).length;i++){
        if(document.querySelectorAll(type)[i].textContent==text){
          return document.querySelectorAll(type)[i];
        }
      }
      return;
    }
    const indexInParent=(node)=> {
      var children = node.parentNode.childNodes;
      var num = 0;
      for (var i=0; i<children.length; i++) {
           if (children[i]==node) return num;
           if (children[i].nodeType==1) num++;
      }
      return -1;
    }
  
    document.querySelector('body').classList.add("spz-2001");  
    document.querySelector('.spz-2001 header').insertAdjacentHTML('beforebegin',`
      <div class="spz-2001-section">
        <div class="wrapper">
          <div class="header">
            <a class="logo" href="//www.netwrix.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/logo__white_1.svg" width="178" height="40" alt="Netwrix Logo"></a>
            <div class="language-button">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/language_2.svg" alt="World Icon" width="32" height="32">
              <ul>
              </ul>
            </div>
          </div>
          <div class="form-section">
            <div class="left">
              <div class="review">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/gartner_svg_1.svg" alt="Gratner Logo" width="68" height="18" >
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489366/netwrix/2001/stars_1.svg" alt="Stars Icon" width="89" height="16" >
                <span>4.4</span>
                <span>(177 reviews)</span>
              </div>
              <div class="title">
                Secure data, identity, and infrastructure.
              </div>
              <div class="list">
                <div><strong>Access.</strong> Monitor and control access to sensitive data, systems, and applications. Orchestrate and manage privileged access rights. Eradicate weak passwords. Secure endpoint access and configuration.</div>
                <div><strong>Threats.</strong> Identify and remediate vulnerabilities and misconfigurations. Detect, prevent, and automatically respond to sophisticated attacks and attempts to exfiltrate data.</div>
                <div><strong>Compliance.</strong> Automate compliance reporting and adherence to regulations and frameworks from around the world, including NIST, GDPR, HIPAA, PCI-DSS, and more.</div>
              </div>
            </div> 
            <div class="right">
              <div class="form-wrapper"></div>
            </div>
          </div>
          <div class="trusted">
            <div class="title">Trusted by 13,500+ organizations</div>
            <div class="logo-section">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489370/netwrix/2001/frame_1171276164.svg" alt="Airbus Logo" width="128" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489372/netwrix/2001/frame_1171276165.svg" alt="Virgin Logo" width="88" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489368/netwrix/2001/frame_1171276163.svg" alt="Denso Logo" width="128" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726489367/netwrix/2001/frame_1171276162.svg" alt="Allianz Logo" width="167" height="72" >
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/2001/frame_1171276161.webp" alt="Geneva Foundation Logo" width="167" height="72" >
            </div>
          </div>
          <div class="new-footer">
            <div class="copyright">&copy; 2024 Netwrix Corporation</div>
            <div class="links">
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/privacy_eu.html">EU Privacy Policy</a>
              <a href="/eula.html">EULA</a>
              <a href="https://www.netwrix.com/download/documents/Modern_Slavery_Policy.pdf" target="_blank" rel="noopener">Modern Slavery Statement</a>
            <div>
          </div>
        </div>
      </div>
    `)

    // copy nav list item
    document.querySelector('.spz-2001 .spz-2001-section .header .language-button ul').innerHTML=document.querySelector('.spz-2001 .navbar-language .navbar-dropdown').innerHTML;
    //move form & modification
    const wrapperIndex= indexInParent(findByText("div",'Netwrix Auditor').closest('.item-lifted'));
    document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper').insertAdjacentElement("afterbegin",document.querySelectorAll('.spz-2001 .v-modal-mask')[wrapperIndex].querySelector('.form-wrapper-2'))
    //change html
    const addingClass =()=>{
      const inputParent=document.querySelectorAll('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 form > div:not(.modelFormError)')
      for(let i=0;i<inputParent.length;i++){
        if(!inputParent[i].classList.contains("width50")){
          inputParent[i].classList.add("width50");
        }
      }
    }

    document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .form-title').innerHTML="Get a demo"
    const inputParent=document.querySelectorAll('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 form > div:not(.modelFormError)')
    for(let i=0;i<inputParent.length;i++){
      addingClass()
      //add label
      if(inputParent[i].querySelector('input')){
        inputParent[i].querySelector('input').insertAdjacentHTML("afterend",`<label for="${inputParent[i].querySelector('input').getAttribute("id")}">${inputParent[i].querySelector('input').getAttribute("placeholder")}</label>`)
      }
      if(inputParent[i].querySelector('select')){
        inputParent[i].querySelector('select').insertAdjacentHTML("afterend",`<label for="${inputParent[i].querySelector('select').getAttribute("id")}">${inputParent[i].querySelector('option:first-child').innerHTML}</label>`)
      }
    }
    //adding arrow
    for(let i=0;i<document.querySelectorAll('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .width50 select').length;i++){
      document.querySelectorAll('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .width50 select')[i].parentNode.insertAdjacentHTML('beforeend','<div class="arrow"></div>')
    }
    //button 
    document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .btn').value="Submit";
    document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .btn').classList.add('spz2001-cta-submit')
    //event listener
    //input even listerer
    const allInput = document.querySelectorAll('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .width50 input,.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .width50 select');
    function labelChange(e) {
      if (e.value == '' || e.value == null) {
          e.closest(".width50").classList.remove("hasValue");
      } else if (e.value != '' || e.value != null) {
          e.closest(".width50").classList.add("hasValue");
      }
    }
    allInput.forEach(function (e) {
      e.addEventListener('blur', () => {
        labelChange(e);
      }, true);
      e.addEventListener('change', () => {
          labelChange(e);
      }, true);
      labelChange(e);
    })
    //button click check label
    document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .btn').addEventListener("click",function(){
      let i =0;
      const labelInterval = setInterval(function(){
          allInput.forEach(function (e) {
            e.addEventListener('blur', () => {
              labelChange(e);
            }, true);
            e.addEventListener('change', () => {
                labelChange(e);
            }, true);
            labelChange(e);
          })
        i++;
        if(i>80){
          clearInterval(labelInterval)
        }
      },10)
      
    })
    //obeserv the form error class 
    const targetNode = document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 form');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      addingClass();
      //button
      if(document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .btn').value=="Schedule Demo"){
        document.querySelector('.spz-2001 .spz-2001-section .form-section .right .form-wrapper .form-wrapper-2 .btn').value="Submit"
      }
      if(document.querySelector('html').classList.contains('is-clipped')){
        document.querySelector('html').classList.remove('is-clipped')
      }
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  
  }
},10)













if (e.target.classList.contains('answer-item')) {
  removeCheckedClass();
  e.target.classList.contains('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked');
} else {
  removeCheckedClass();
  e.target.parentElement.classList.contains('checked') ? e.target.parentElement.classList.remove('checked') : e.target.parentElement.classList.add('checked')
}