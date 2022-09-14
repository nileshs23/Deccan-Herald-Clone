let ddown=document.querySelectorAll(".ddown");
let hflex=document.querySelectorAll(".hflex");
let drop=document.querySelectorAll(".drop");

for(let i=0;i<ddown.length;i++){
    ddown[i].addEventListener("click",()=>{
        hflex[i].classList.toggle('active');
        ddown[i].classList.toggle('active');
        if( drop[i].innerText=="-"){
            drop[i].innerText="+"
        }else{
            drop[i].innerText="-";
        }
    })

    // hflex[i].addEventListener("click",()=>{
    //     hflex[i].classList.toggle('active');
    //     dropdown[i].classList.toggle('active'); 
    //     drop[i].innerText="+";   
    // })
    
}
