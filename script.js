const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
//line 1 to 3 get the names from the html file//

/*Line 6 is called to update the clock hands every second*/
function clockTick() {
    const date = new Date(); /*This gets the current date*/
    /*Lines 9 to 11 calculates the rotations of each hand*/
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12; 

    /*Lines 15 to 17 rotates the hands based on the calculates*/
    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours)
}


function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

/*Calls clockTick every 1 second*/
setInterval(clockTick,1000);
