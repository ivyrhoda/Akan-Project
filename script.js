console.log("Hello world")
var submit = function () {
    var daysOfTheWeek = [
      "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];
    var maleNames = [
      "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
    ];
    var femaleNames = [
      "Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
    ];
    var month = document.getElementById("year").value   
    var year = document.getElementById("month").value
    var day = document.getElementById("dob").value
    var dateOfBirth = new Date(year + "/" + month + "/" + day);
    var find = dateOfBirth.getdob();       
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (month =="" && year == "" && day == "" ) {
      alert("fill all the required inputs !");
    }
    if (month <= 0 > 31) {
      alert("please enter a valid month");
      }
      else if (year <= 0) {
      alert( "please enter a valid year");
    };
     if((day < 1) || (day > 31)) {
      alert("enter a valid day between 1 to 31");
    }
    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      alert ("you were born on " +daysOfTheWeek[find] + " your akan name is " +maleNames[find]);
    };
    if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      alert( "you were born on " +daysOfTheWeek[find] + " your akan name is " + femaleNames[find]);
    }
  };





// var curday = function(sp){
//     today = new Date ();
//     var dob =today.getDate();
//     var mm = today.getmonth()+1; //this is because january is 1.
//     var year = today.getFullYear();

//     if(dob<10) dob='0'+dd;
//     if(month<10) month='0'+mm;
//     return (month+sp+dob+sp+year)
// };

// console.log(curday('/'));
// console.log(curday('-'));

//   //for year
//   window.onload = function () {
//       //Reference the DropDownlist.
//       var year = document.getElementById("year");
      
//       //Determine the Current Year.
//       var currentYear = (new Date()).getFullYear();

//       //Loop and the Year values to DropDownlistList
//       for (var i =1900; i <= currentYear; i++) {
//           var option = document.createElement("OPTION")
//           option.innerHTML = i;
//           option.value = i;
//           year.appendChild(option);
//         }
//   }

//   function generatename(){
//       var yearbirth = document.getElementById("year");
//       var monthbirth = document.getElementById("month");
//       var daybirth = document.getElementById("dob");
//       var gender = document.getElementById("gender");

//       // adding to DOM property
//       document.getElementById("but").onclick =generatename

//       //attaching function to the event listener
//       var week = ["Sunday", "Momday", "Tuesday" ,"Wenesday", "Thursday","Friday","Sartuday"];
//       var day = week[new Date(year.val()+'/'+month.val()+'/'+dob.val()).getDay()];
//       var name;

//       //the condition statement

//       //for Female gender
//       if (gender.val() === "Female"){

//         if(day === "Sunday"){
//             name = "Akosua"
//         }
//         else if(day === "Monday"){
//             name = "Adwoa"
//         }
//         else if(day === "Tusday"){
//             name = "Abenaa"
//         }
//         else if(day === "Wenesday"){
//             name = "Akuna"
//         }
//         else if(day === "Thursday"){
//             name = "Yaa"
//         }
//         else if(day === "Friday"){
//             name = "Afua"
//         }
//         else if(day === "Sartuday"){
//             name = "Ama"
//         }
//     }
//   }

//   //for male gender
//   if (gender.val() === "Male"){

//     if(day === "Sunday"){
//         name = "Kwasi"
//     }
//     else if(day === "Monday"){
//         name = "Kwadwo"
//     }
//     else if(day === "Tuesday"){
//         name = "Kwabena"
//     }
//     else if(day === "Wenesday"){
//         name = "Kwaku"
//     }
//     else if(day === "Thursday"){
//         name = "Yaw"
//     }
//     else if(day === "Friday"){
//         name = "Kwadwo"
//     }
//     else if(day === "Saturday"){
//         name = "Kwame"
//     }
//   }

//   //validating data
//   if(year.val() === ''){
//       $('#year-err').html("Please select your year of birth");
//   }
//   else if (month.val() === ''){
//       $('month-err').html("Please select your year of birth");
//   }
//   else if (day.val() === ''){
//       $('#dob-err').html("Please select your day of birth");
//   }