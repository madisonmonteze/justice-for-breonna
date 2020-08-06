// counter
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Mar 13, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
        distance = now - countDown;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)

// rotate on scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let twirl = document.getElementById("twirl");
  twirl.style.transform = "rotate(" + window.pageYOffset/2.5 + "deg)";
}