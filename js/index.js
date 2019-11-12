const courseName = `Tools and Workflow`;
const courseCode = `WDDM-115`;
const courseInstructor = `Kadeem Best`;
const courseStart = `Fall 2019`;
const courseWeeks = 15; // 1 class per week (assumed)
const courseBreaks = true; // Boolean
const courseDuration = 160; // Minutes per class


const allCourses =[
  {
      name: `Tools and Workflow`,
      code: `WDDM-115`,
      instructor: `Kadeem Best`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      duration: 160
  },{
      name: `Planning & Prototyping`,
      code: `WDDM-117`,
      instructor: `Cory Coletta`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      duration: 160

  }
] 

document.getElementById(`name`).innerHTML = allCourses[0].name;
document.getElementById(`code`).innerHTML = allCourses[0].code;
document.getElementById(`instructor`).innerHTML = allCourses[0].instructor;
document.getElementById(`start`).innerHTML +=  `Hi! ${allCourses[0].start.term} ${allCourses[0].start.year}`;
document.getElementById(`weeks`).innerHTML = allCourses[0].weeks;
document.getElementById(`duration`).innerHTML = getDurationFromMinutes(160);  // 2 hr, 40 min

// LAB: ARRAYS, PART 1
  // 1. Create a 2nd course Object
  // 2. Store both course Objects in an array whose reference is stored as: allCourses
  //      allCourses is an [] (reference) that hold two identically structured Objects
  // 3. Modify the lines above (11-16) to put the values from the first course into the document
  // 4. (Later) Move the HTML for course into a Javascript function that returns a formatted HTML string
  


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
  
