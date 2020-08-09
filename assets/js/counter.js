// loading
setTimeout(function () {
  document.querySelector("div.loading").classList.add("hidden")
}, 1500)

// counter
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

Number.prototype.pad = function(size) {
  var s = String(this);
  if (s.length < (size || 2)) {
    s = "0" + s;
    return s;
  }
  else {
    return s;
  }
}


let countDown = new Date('Mar 13, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      var now = new Date().getTime();
      var distance = now - countDown;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = (Math.floor((distance % (day)) / (hour))).pad(2),
        document.getElementById('minutes').innerText = (Math.floor((distance % (hour)) / (minute))).pad(2),
        document.getElementById('seconds').innerText = (Math.floor((distance % (minute)) / second)).pad(2);

    }, second)



// rotate on scroll
// window.onscroll = function () {
//   scrollRotate();
// };

// function scrollRotate() {
//   let twirl = document.querySelector(".twirl");
//   twirl.style.transform = "rotate(" + window.pageYOffset/2.5 + "deg)";
// }