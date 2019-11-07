const courseName = `Tools and Workflow`;
const courseCode = `WDDM-115`;
const courseInstructor = `Kadeem Best`;
const courseStart = `Fall 2019`;
const courseWeeks = 15; // 1 class per week (assumed)
const courseBreaks = true; // Boolean
const courseDuration = 160; // Minutes per class


const course = {
  name: `Tools and Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};

document.getElementById(`name`).innerHTML = course.name;
document.getElementById(`code`).innerHTML = course.code;
document.getElementById(`instructor`).innerHTML = course.instructor;
document.getElementById(`start`).innerHTML +=  `Hi! ${course.start.term} ${course.start.year}`;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`duration`).innerHTML = getDurationFromMinutes(160);  // 2 hr, 40 min
/*
LAB:
1. Fix the output of the start term by turning the Object's properties into a String
      Ex: { term: `Fall`, year: 2019 }  >>  `Fall 2019`
2. Write a function that will take a Number of minutes and will return a human-readable String
      Ex: 160  >>  `2 hr, 40 min`
      Hints:
        - Division: /
        - Remainder: %
        - Rounding:
            - Standard rules:     Math.round(4.5)
            - Always round up:    Math.ceil(1.001)
            - Always round down:  Math.floor(1.999)
*/


const start = { term: `Fall`, year: 2019 };

// 1. Write the string to be created from the above 


function getDurationFromMinutes(minutes) {
var num = minutes;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}


  // 2. Write code to format a Number to a String
  
