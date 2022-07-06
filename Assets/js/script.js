var currentTime = moment();
$("#currentDay").text(currentTime.format("MMM Do, YYYY"));

var currentTime = new Date();
// Operating System Clock Hours for 24h clock
var currentHours = currentTime.getHours();
// Operating System Clock Minutes
var currentMinutes = currentTime.getMinutes();
// Operating System Clock Seconds
var currentSeconds = currentTime.getSeconds();
// Adding 0 if Minutes & Seconds is More or Less than 10
currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
// Picking "AM" or "PM" 12h clock if time is more or less than 12
var timeOfDay = currentHours < 12 ? "AM" : "PM";
// transform clock to 12h version if needed
currentHoursAP = currentHours > 12 ? currentHours - 12 : currentHours;
// transform clock to 12h version after mid night
currentHoursAP = currentHoursAP == 0 ? 12 : currentHoursAP;
// display first 24h clock and after line break 12h version
var currentTimeString =
  "24h kello: " +
  currentHours +
  ":" +
  currentMinutes +
  ":" +
  currentSeconds +
  "";
// print clock js in div #clock.
console.log(currentTimeString);
function init()
{
  
//as per the current hour,the calender background will change
if (currentHours > 12) {
  for (var i = 1; i < 6; i++) {
    let myhour = currentHours - 12;
    if (myhour > 5) {
        $(".textarea" + i).removeClass("past present future");
      $(".textarea" + i).addClass("past");
    }
    if (myhour === i) {
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("present");
    } else if (myhour > i) {
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("past");
    } else {
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("future");
    }

    for (var j = 9; j < 13; j++) {
      
        $(".textarea" + j).addClass("past");
    }
  }
} else if (currentHours <= 12) {
  for (var i = 9; i < 13; i++) {
    let myhour = currentHours;

    if (myhour < 9) {

        $(".textarea" + i).removeClass("past present future");
        $(".textarea" + i).addClass("future");
    }
    else
    if (myhour === i) {
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("present");
    } else if (myhour > i) {
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("past");
    }
    else if(myhour <i){
        $(".textarea" + i).removeClass("past present future");

        $(".textarea" + i).addClass("future");
    }

    for (var j = 0; j < 6; j++) {
     

        $(".textarea" + j).addClass("future");
    }
  }
}



  
        for(let i=0;i<9;i++)
        {
            if((localStorage.getItem("list"+i))!=null)
            {
              $("#textarea"+i).text(localStorage.getItem("list"+i));

              $(".button" + i)
                .children()
                .removeClass("bi-calendar-check");
              $(".button" + i)
                .children()
                .addClass("bi-calendar-date-fill");
              console.log(localStorage.getItem("list"+i))
            }

           
        }
    
}



//click event
let flag=false;
for (let i = 0; i < 9; i++) {
  $(".button" + i).on("click", function (event) {
    
        if(jQuery.inArray($(".button" + i)
        .children().attr("class")),"bi-calendar-check"){
            console.log("wohooo");
            saveCalender(this, i);

    
    }
    else{
        unsaveCalender(this,i);
    }
    
  
    
  });
}



function saveCalender(event, i) {


    var data=$("#textarea"+i).val();
    console.log(data);
    if(data!=" "){
        var savedData= localStorage.setItem("list"+i,data);
    }
    $(".button" + i)
    .children()
    .removeClass("bi-calendar-check");
  $(".button" + i)
    .children()
    .addClass("bi-calendar-date-fill");
  $(".textarea" + i);

    
 
  

}


/*  if(jQuery.inArray($(".button" + i)
    .children().attr("class")),"bi-calendar-date-fill")
    {
        unsaveCalender(this,i);
    }*/
function unsaveCalender(event, i) {
    var data=$("#textarea"+i).val();
    console.log(data);
    if(data!=""){
        var savedData= localStorage.setItem("list"+i," ");
    }
    $(".button" + i)
    .children()
    .removeClass("bi-calendar-date-fill");
  $(".button" + i)
    .children()
    .addClass("bi-calendar-check");
  $(".textarea" + i);
}
init();