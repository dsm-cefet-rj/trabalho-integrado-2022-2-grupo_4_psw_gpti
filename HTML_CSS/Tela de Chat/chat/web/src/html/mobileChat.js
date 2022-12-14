
const nav = document.getElementById("nav");
const menuMobile = document.getElementById("menuMobile");
var menu = document.getElementById("menu");
var ok = document.getElementById("ok");
var text = document.getElementById("text");


function toggleMenu (event){
    if (event.type === "touchstart") event.preventDefault();
const nav = document.getElementById("nav");
   nav.classList.toggle("active");
}
if(ok){
    var newText = document.createElement("li");
    newText.innerHTML = text.value;
    text.appendChild(newText);
    text.value="";
}

else{
    let newText= "";
    ok.addEventListener("click");
}
    

menuMobile.addEventListener("click", toggleMenu);
menuMobile.addEventListener('touchstart', toggleMenu); 

