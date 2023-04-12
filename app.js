let flipCard = document.getElementsByClassName('flip-card');
let flipCardInner = document.getElementsByClassName('flip-card-inner');
let staffBtn = document.getElementsByClassName('staff-button');

let arr = [...flipCard];
let arrFlip = [...flipCardInner];

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

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', e => {
        arrFlip[i].style.transform = 'rotateY(180deg)';
        staffBtn[i].style.display = 'none';
    })
}

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('mouseleave', e => {
        arrFlip[i].style.transform = 'rotateY(0deg)';
        staffBtn[i].style.display = 'block';
    })
}