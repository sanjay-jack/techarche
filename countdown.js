// Set the date we're counting down to
const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {

    // Get the current date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the element with the corresponding IDs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".content h1").innerHTML = "We are live!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);
