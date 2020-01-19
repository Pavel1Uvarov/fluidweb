var countDownDate = new Date("Feb 30, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance / 1000) % 60);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = ('0' + seconds).slice(-2);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);

    }
}, 1000);

var imgSlider = simpleslider.getSlider({
    container: document.getElementById('myslider'),
    prop: 'opacity',
    unit: '',
    init: 0,
    show: 1,
    end: 0
});