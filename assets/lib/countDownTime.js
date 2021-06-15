  var countDownDate = new Date("Nov 5, 2020 00:00:01").getTime();

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
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d, " + hours + "h, " +
          minutes + "m, " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = `<a target="_blank" class="section-scroll btn btn-warning btn-lg mb-10" title="Pengumuman kelulusan cpns balangan ta 2019" href="https://drive.google.com/file/d/14dJnrWBTJ2rFXd55v0LTc2zp35JWeQFL/view?usp=sharing">
          <span class="fa fa-bullhorn" area-hidden="true"></span>
          (<span style="color:red;" class="blink">New!!!</span>) 
          <h5>Pengumuman kelulusan cpns balangan ta 2019 </h5></a>`;
      }
  }, 1000);