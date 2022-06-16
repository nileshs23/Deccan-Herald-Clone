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