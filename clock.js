const showTime = () =>{
	let currentDate = new Date();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let hours =currentDate.getHours();
	let period= "AM";

	if(hours == 0){

		hours = 12;
	}
	if(hours > 12){

		hours =hours - 12;
		period ="PM"
	}

  	hours = (hours < 10) ? "0" + hours : hours;
  	minutes = (minutes< 10) ? "0" +minutes: minutes;
  	seconds = (seconds< 10) ? "0" + seconds:seconds;

	let clock = `${hours} : ${minutes} : ${seconds} ${period} `

 	document.getElementById("MyClockDisplay").innerText = clock;
 	document.getElementById("MyClockDisplay").innerContent = clock;

  	setTimeout(showTime, 1000);

}



showTime()