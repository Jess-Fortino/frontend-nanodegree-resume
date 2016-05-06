/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Jessica Fortino");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name" : "Jessica Fortino",
  "role" : "Web Developer",
  "contacts": {
    "mobile" : "412-555-5555",
    "email" : "jess.fortino@gmail.com",
    "github" : "jess-fortino",
    "twitter" : "@jess4tno",
    "location" : "Pittsburgh, PA"
  },
  "bio pic" : "images/fry.jpg",
  "Welcome Message" : "This is the welcome message.",
  "skills" : [
    "HTML", "CSS", "JavaScript", "jQuery", "JSON", "Adobe Suite"
  ]
};

// function displayBio(){
//   for(lists in bio.contacts){
//     $("#header").append(HTMLcontactGeneric)
//     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[lists].mobile);
//     $("#header").append(formattedMobile);
//     var formattedEmail = HTMLemail.replace("%data%", bio.contacts[lists].email);
//     $("#header").append(HTMLemail);
//     var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[lists].github);
//     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[lists].twitter);
//     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[lists].location);
//   }
// }
// displayBio();

var work = {
  "jobs": [
    {
      "employer": "PA Leadership Charter School",
      "title": "Marketing Assistant",
      "dates": "November 2014 - Present",
      "location" : "Pittsburgh, PA",
      "description": " You were only supposed to blow the bloody doors off. you're only supposed to blow the bloody doors off! at this point, i'd set you up with a chimpanzee if it'd brought you back to the world! jasper: your baby is the miracle the whole world has been waiting for. my lord! you're a tripod. yes, i used a machine gun. you are as precious to me as you were to your own mother and father. i swore to them that i would protect you, and i haven't. you know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... yeah, don't be shy, let's have a look. it's not the size mate, it's how you use it. when i get back, remind to tell you about the time i took 100 nuns to nairobi! pull my finger!"
    },
    {
      "employer": "PA Leadership Charter School",
      "title": "Guidance Assistant",
      "dates": "April 2013 - November 2014",
      "location": "Pittsburgh, PA",
      "description": " You were only supposed to blow the bloody doors off. you're only supposed to blow the bloody doors off! at this point, i'd set you up with a chimpanzee if it'd brought you back to the world! jasper: your baby is the miracle the whole world has been waiting for. my lord! you're a tripod. yes, i used a machine gun. you are as precious to me as you were to your own mother and father. i swore to them that i would protect you, and i haven't. you know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... yeah, don't be shy, let's have a look. it's not the size mate, it's how you use it. when i get back, remind to tell you about the time i took 100 nuns to nairobi! pull my finger!"
    },
    {
      "employer": "PA Leadership Charter School",
      "title": "Receptionist",
      "dates": "August 2011 - April 2013",
      "location": "Pittsburgh, PA",
      "description": " You were only supposed to blow the bloody doors off. you're only supposed to blow the bloody doors off! at this point, i'd set you up with a chimpanzee if it'd brought you back to the world! jasper: your baby is the miracle the whole world has been waiting for. my lord! you're a tripod. yes, i used a machine gun. you are as precious to me as you were to your own mother and father. i swore to them that i would protect you, and i haven't. you know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... yeah, don't be shy, let's have a look. it's not the size mate, it's how you use it. when i get back, remind to tell you about the time i took 100 nuns to nairobi! pull my finger!"
    }
  ]
}
function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}
displayWork();

var education={
  "schools":[
    {
      "Name" : "Udacity",
      "Location": "Pittsburgh, PA or Online",
      "Major": "Web Development",
      "Graduation" : "2016, Nanodegree"
    },
    {
      "Name" : "Clarion University",
      "Location": "Clarion, PA, US",
      "Major": "Web Development"
    }
  ]
}

var projects={
  "projects":[
    {
      "title": "Online Resume",
      "dates": "2016",
      "description": "Who stole the cookie from the cookie jar? Who me? Yes you! Couldn't be! Then who?",
      "images": "#"
    },
    {
      "title": "Design Projects",
      "dates": "2020",
      "description": "Who can see into the future?",
      "images": "#"
    }
  ]
}

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


// function locationizer(work_obj){
//   var locationArray = [];
//
//   for (job in work_obj.jobs){
//     var newLocation = work_obj.jobs[job].location;
//     locationArray.push(newLocation);
//   }
//   return locationArray;
// }

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// var cameron ={};
// cameron.job = "course dev";
//
// var makeCourse = function(){
//   //make course
//   console.log("Made a course!");
// }
// var courses = 0;
// while(cameron.job === "course dev"){
//   makeCourse();
//   courses = courses + 1;
//   if(courses === 10){
//     cameron.job = "learning specialist";
//   }
// }
//
// console.log(cameron.job);
