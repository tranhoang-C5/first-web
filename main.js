/////humberher menu//////
const hum = document.querySelector(".humberger");
const dropdown = document.querySelector(".dropdown");


hum.addEventListener("click",function(){
    this.classList.toggle('humberger-clicked')
    dropdown.classList.toggle('dropdown-clicked')
});


/////////background change/////////

const topBackground = Array.from(document.querySelectorAll(".header-img-wraper img"));

function changeBackground(background){
    let i = 0;
    //set all the image transition
    for (let j = 0; j < background.length; j++){
        background[j].style.cssText = "transition: transform 7s ease-in-out, opacity 0.5s";
    }
    background[0].style.opacity = "1";
    // set time for img
    setInterval(function(){
        if (i == background.length -1 ){
            background[i].style.opacity = "0";
            background[i].style.transform = "scale(1.2)";
            i = 0;
            background[i].style.opacity = "1";
            background[i].style.transform = "scale(1)";
        }
        else{
            background[i].style.transform = "scale(1.2)";
            background[i].style.opacity = "0";
            background[i+1].style.opacity = "1";
            background[i+1].style.transform = "scale(1)";
            i++;
        }
    },7000)
}
changeBackground(topBackground)

////////////////


abc abc