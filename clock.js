function functionName() {

var today = new Date ();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var am = "am";
var greeting = "good morning";

 if (hours > 12){
   am ="pm";
 }

 if (minutes <10){
    minutes = "0" + minutes;
  }
  else {
    minutes = minutes;
  }

  if (seconds <10){
    seconds = "0" + seconds;
  }
  else {
    seconds = seconds;
  }

  if (hours < 12) {
  greeting = greeting;
  }
  else if (hours > 12 && hours < 18) {
     greeting = "good afternoon";
   }
  else if (hours > 18) {
     gretting = "good evening";
   }


if (hours < 12) {
  document.getElementById('banana').style.backgroundColor =  "black"
  }
  else if (hours > 12 && hours < 18) {
     document.getElementById('banana').style.backgroundColor =  "blue"
   }
  else if (hours > 18) {
     document.getElementById('banana').style.backgroundColor =  "yellow"
   }


document.getElementById('digital_clock').innerHTML= (hours +":"+ minutes +":"+ seconds + am + "  " + greeting);
}
setInterval("functionName()", 1000);
