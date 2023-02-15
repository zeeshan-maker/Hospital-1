// navbar 
let navbar=document.querySelectorAll(".nav-link");
let collapse=document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click" ,()=>{
        collapse.classList.remove("show");
    })
})