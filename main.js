/////humberher menu//////
const hum = document.querySelector(".humberger");
const dropdown = document.querySelector(".dropdown");


hum.addEventListener("click",function(){
    this.classList.toggle('humberger-clicked')
    dropdown.classList.toggle('dropdown-clicked')
});
