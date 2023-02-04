function currentDay() {
    var d = new Date().getDay();
    if ( d < 1 || d > 5) {
    document.getElementById("day-"+d).classList.add('closed');
    document.getElementById("day-"+d).classList.remove('line');
    } else {
        document.getElementById("day-"+d).classList.add('open');
        document.getElementById("day-"+d).classList.remove('line');
    }
}

currentDay();