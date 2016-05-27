var bio = {
  "name" : "Jessica Fortino",
  "role" : "Web Developer",
  "contacts": {
    "mobile" : "412-555-5555",
    "email" : "jess.fortino@gmail.com",
    "github" : "jess-fortino",
    "twitter" : "@jess4tno",
    "blog" : "bytesizeoflife.com",
    "location" : "Pittsburgh, PA"
  },
  "biopic" : "images/fry.jpg",
  "WelcomeMessage" : "This is the welcome message.",
  "skills" : [
    "HTML", "CSS", "JavaScript", "jQuery", "JSON", "Adobe Suite"
  ]
};

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#topContacts").append(formattedBlog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

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
}
displayBio();

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
      "location": "Pittsburgh, PA",
      "Major": "Web Development",
      "Dates" : "2016 - Present",
      "Degree" : "Nanodegree, Web Development"
    },
    {
      "Name" : "Clarion University",
      "location": "Clarion, PA",
      "Major": "History",
      "Dates" : "2009 - 2011",
      "Degree" : " "
    }
  ],
  "onlineClasses":[
    {
      "Title" : "Udacity",
      "School" : "Udacity",
      "Dates" : "03/16 - Present",
      "Major" : "Web Development",
      "Url" : "www.udcaity.com"
    },
    {
      "Title" : "Code Academy",
      "School" : "Code Academy",
      "Dates" : "02/16 - Present",
      "Major" : "Web Development",
      "Url" : "www.codeacademy.com"
    },
    {
      "Title" : "edX",
      "School" : "edX",
      "Dates" : "6/14 - 6/15",
      "Major" : "Web Development",
      "Url" : "www.edx.org"
    }
  ]
}

education.display = function(){
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].Name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation  = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].Dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].Major)
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
    $(".education-entry:last").append(formattedSchoolDegree);
  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLonlineStart);

  for (onlineCourse in education.onlineClasses){

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineCourse].Title);
    $(".online-entry").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineCourse].School);
    $(".online-entry").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineCourse].Dates);
    $(".online-entry").append(formattedOnlineDates);

    // var formattedOnlineURL = HTMLonlineURL.replace("%data%". education.onlineClasses[onlineCourse].Url);
    // $(".education-entry:last").append(formattedOnlineURL);
  };
}
education.display();





var projects={
  "projects":[
    {
      "title": "Online Resume",
      "dates": "2016",
      "description": "Who stole the cookie from the cookie jar? Who me? Yes you! Couldn't be! Then who?",
      "images": ["images/fry.jpg", "images/fry.jpg"]
    },
    {
      "title": "Design Projects",
      "dates": "2020",
      "description": "Who can see into the future?",
      "images": ["images/fry.jpg", "images/fry.jpg"]
    }
  ]
}

projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#mapDiv").append(googleMap);

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
