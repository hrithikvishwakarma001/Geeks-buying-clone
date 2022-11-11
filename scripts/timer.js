// Set the date we're counting down to
let displayTime=document.querySelector(".timer")
let timer = document.createElement('p')
let countDownDate = new Date("Jan 5, 2024 00:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(days<10){
        days="0"+days
    }
    if(hours<10){
        hours="0"+hours
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds
    }
  // Output the result in an element with id="demo"
  timer.innerHTML=`Ends in 00:${hours}:${minutes}:${seconds}`;
  displayTime.appendChild(timer)
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


displayTime.style.display="flex"
displayTime.style.alignItems="center"
timer.style.fontSize="15px"
timer.style.color="red"   
timer.style.position="relative"
timer.style.left="10px"
timer.style.top="3px"                 