/////humberher menu//////
const hum = document.querySelector(".humberger");
const dropdown = document.querySelector(".dropdown");


hum.addEventListener("click", function () {
    this.classList.toggle('humberger-clicked')
    dropdown.classList.toggle('dropdown-clicked')
});


/////////background change/////////

const topBackground = Array.from(document.querySelectorAll(".header-img-wraper img"));

function changeBackground(background) {
    let i = 0;
    //set all the image transition
    for (let j = 0; j < background.length; j++) {
        background[j].style.cssText = "transition: transform 7s ease-in-out, opacity 0.5s";
    }
    background[0].style.opacity = "1";
    // set time for img
    setInterval(function () {
        if (i == background.length - 1) {
            background[i].style.opacity = "0";
            background[i].style.transform = "scale(1.2)";
            i = 0;
            background[i].style.opacity = "1";
            background[i].style.transform = "scale(1)";
        } else {
            background[i].style.transform = "scale(1.2)";
            background[i].style.opacity = "0";
            background[i + 1].style.opacity = "1";
            background[i + 1].style.transform = "scale(1)";
            i++;
        }
    }, 7000)
}
changeBackground(topBackground);

////////////////SKILL RANGE//////////////////

const abilities = [85, 85, 70, 60];
const indexOfAbility = Array.from(document.querySelectorAll(".index-of-ability"))
const abilityRange = Array.from(document.querySelectorAll(".ability-range-counter"))
const skillContainer = document.querySelector(".skill-section");

// build a function to count and show result of each ability
function countAbilities(value, abilityIndex) {
    var i = 0;
};
for (let i = 0; i < abilities.length; i++) {
    abilityRange[i].style.width = '0';
}
var showSkill = function () {
    for (let i = 0; i < abilities.length; i++) {
        abilityRange[i].style.width = `${abilities[i]}%`; //set range of ability
        let j = 0;
        var show = setInterval(() => {
            if (j == abilities[i] + 1) {
                clearInterval(show);
            } else {
                indexOfAbility[i].textContent = j + '%';
                j++;
            }
        }, 1600 / abilities[i]);
    }
}
//run function when scroll top the element
window.addEventListener('scroll', function runSkillBar() {
    if (window.pageYOffset > skillContainer.offsetTop - window.outerHeight + 300) {
        showSkill();
        this.removeEventListener('scroll', runSkillBar);
    }
});




////////////detail work///////////////
const works = Array.from(document.querySelectorAll(".work-box"));
var activeBox = function () {
    works.forEach(elem => elem.classList.remove('work-box-active')); //restart box to default
    this.classList.add('work-box-active');
};

for (let i = 0; i < works.length; i++) {
    works[i].addEventListener('click', activeBox)
};


// works.forEach(element => {
//     element.addEventListener('click',activeBox(this));
// });