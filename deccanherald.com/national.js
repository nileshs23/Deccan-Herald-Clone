var dropdown=document.querySelector(".dropdown");
var seminavbody=document.querySelector(".seminavbody");

dropdown.addEventListener("click",()=>{
    document.querySelector("#politics").classList.toggle('active');
    seminavbody.classList.toggle('active');
    dropdown.classList.toggle('active');
})
seminavbody.addEventListener("click",()=>{
    document.querySelector("#politics").classList.toggle('active');
    seminavbody.classList.toggle('active');
    dropdown.classList.toggle('active');    
})