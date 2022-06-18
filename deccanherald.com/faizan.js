let dropdown=document.querySelector(".dropdown");
let seminavbody=document.querySelector(".seminavbody");

dropdown.addEventListener("click",()=>{
    document.querySelector("#top").classList.toggle('active');
    seminavbody.classList.toggle('active');
    dropdown.classList.toggle('active');
})
seminavbody.addEventListener("click",()=>{
    document.querySelector("#top").classList.toggle('active');
    seminavbody.classList.toggle('active');
    dropdown.classList.toggle('active');    
})

// navbar js
var navbar=document.querySelector(".mynav");
var menu=document.querySelector(".menu");
var insidelogo=document.querySelector(".insidelogo");
var toggle=document.querySelector(".toggle");
window.onresize= function(){
    if(window.innerWidth<1200){
            insidelogo.src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg"
            document.querySelector(".toplogo").innerHTML="";
            navbar.style.height="70px";
        }
        window.location.reload();
}
window.onload= function(){
    if(window.innerWidth<1200){
            insidelogo.src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg"
            document.querySelector(".toplogo").innerHTML="";
            navbar.style.height="70px";
        }
        else{
            toggle.style.left="200px"
        }
    
}
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
        toggle.style.left="10px"
       insidelogo.src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg"
       if(window.innerWidth>1200){
       insidelogo.style.width="70%"
         }
       }
    else{
        navbar.classList.remove("sticky");
        insidelogo.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
        insidelogo.style.width="1%";
        toggle.style.left="200px"
    }
}