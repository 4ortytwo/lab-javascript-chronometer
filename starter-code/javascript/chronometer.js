// Constructor

class Chronometer {
    constructor() {
        this.intervalId = 0
        this.currentTime = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.status = false;
    }
    startClick() {
        console.log('start clicked')
        this.intervalId = setInterval(() => {
            this.setSeconds();
            this.setMinutes();
            this.setTime();
            console.log(this.currentTime);
            var secDigits = this.twoDigitsNumber(this.seconds);
            var minDigits = this.twoDigitsNumber(this.minutes);
            $("#secDec").text(secDigits.first);
            $("#secUni").text(secDigits.second);
            $('#minDec').text(minDigits.first);
            $('#minUni').text(minDigits.second);
        }, 1000);
    }
    setSeconds() {
        this.currentTime++;
        this.seconds = this.currentTime % 60;
    }
    setMinutes() {
        this.minutes = Math.floor(this.currentTime / 60);

        //method1
        // if (this.currentTime != 0 && this.currentTime % 60 == 0) {
        //     this.minutes += 1;
        // }
        //method2
        // if (this.currentTime == 60) {
        //     this.minutes += 1;
        //     this.currentTime = 0;
        // }
    }
    twoDigitsNumber(val) {
        // valOne = val / 10;
        // valTwo = val % 10;
        var Values = {
            first: Math.floor(val / 10),
            second: val % 10
        }
        return Values;
    }
    setTime() {
        var getSeconds = this.twoDigitsNumber(this.currentTime);
        var getMinutes = this.twoDigitsNumber(this.minutes);
        console.log(getSeconds)
        console.log(getMinutes)

    }
    stopClick() {
        clearInterval(this.intervalId);
        console.log('stop clicked')
    }
    resetClick() {
        this.currentTime = 0;
        console.log('reset clicked')
    }
}


let newChronometer = new Chronometer()

//newChronometer.startClick()
console.log(newChronometer.currentTime)

// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {

// };

// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };



//jQuery
//TODO: CHANGE active for STATUS
var active = false;

$(document).ready(function () {
    $('#btnLeft').click(() => {
        if (!active) {
            newChronometer.startClick();
            active = true;
            //if (active && $('#btnRight').hasClass('reset')) {
            $('#btnLeft').attr('class', 'btn stop');
            $('#btnLeft').text('STOP');
            $('#btnRight').attr('class', 'btn split');
            $('#btnRight').text('SPLIT');

            //}

        } else {
            newChronometer.stopClick();
            $('#btnLeft').attr('class', 'btn start');
            $('#btnLeft').text('START');
            $('#btnRight').attr('class', 'btn reset');
            $('#btnRight').text('RESET');
            active = false;
        }
    })



    $('#btnRight').click(() => {
        if (active) {
            var newLi = $(document.createElement('li'));
            var secDigits = newChronometer.twoDigitsNumber(newChronometer.seconds);
            var minDigits = newChronometer.twoDigitsNumber(newChronometer.minutes);
            $(newLi).text(`${minDigits.first}${minDigits.second}:${secDigits.first}${secDigits.second}`);
            $(newLi).appendTo('#splits');
            console.log('splits clicked');

        } else {
            newChronometer.resetClick();
            $("#secDec").html('0');
            $("#secUni").html('0');
            $('#minDec').html('0');
            $('#minUni').html('0');

        }

    })

});