let flipCard = document.getElementsByClassName('flip-card');
let flipCardInner = document.getElementsByClassName('flip-card-inner');
let staffBtn = document.getElementsByClassName('staff-button');
let backBtn = document.getElementsByClassName('back-button');
let staffCard = document.getElementsByClassName('staff-card');

let arrBtn = [...staffBtn];
let arrBack = [...backBtn];
let arrFlip = [...flipCardInner];
let arrCard = [...staffCard];

function currentDay() {
    var d = new Date().getDay();
    if (d < 1 || d > 5) {
        document.getElementById("day-" + d).classList.add('closed');
        document.getElementById("day-" + d).classList.remove('line');
    } else {
        document.getElementById("day-" + d).classList.add('open');
        document.getElementById("day-" + d).classList.remove('line');
    }
}

currentDay();

for (let i = 0; i < arrBtn.length; i++) {
    arrBtn[i].addEventListener('click', e => {
        arrFlip[i].style.transform = 'rotateY(180deg)';
        arrBack[i].style.zIndex = '1';
        arrBtn[i].style.zIndex = '-1';
    });
    arrBack[i].addEventListener('click', e => {
        arrFlip[i].style.transform = 'rotateY(0deg)';
        arrBack[i].style.zIndex = '-1';
        arrBtn[i].style.zIndex = '1';
    })
}

