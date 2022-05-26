var elButton = document.querySelector(".burger-button");
var elContent = document.querySelector(".nav");

elButton.addEventListener("click", function(){
    elContent.classList.toggle("nav--open");
})