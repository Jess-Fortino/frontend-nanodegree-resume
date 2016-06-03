var bio = {
    "name": "Jessica Fortino",
    "role": "Web Developer",
    "contacts": {
        "mobile": "412-555-5555",
        "email": "jess.fortino@gmail.com",
        "github": "jess-fortino",
        "twitter": "@jess4tno",
        "blog": "bytesizeoflife.com",
        "location": "Pittsburgh, PA"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "This is the welcome message. This is still the welcome message.",
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery", "JSON", "Adobe Suite"
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts, #footerContacts").append(formattedBlog);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; bio.skills.length > i; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};
bio.display();

var work = {
    "jobs": [{
        "employer": "PA Leadership Charter School",
        "title": "Marketing Assistant",
        "dates": "November 2014 - Present",
        "location": "Pittsburgh, PA",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dictum augue, in pellentesque odio. Aenean quis bibendum urna, sed vestibulum ante. Pellentesque blandit luctus nunc, at tincidunt sem iaculis rutrum. Nulla eu volutpat urna. Nunc cursus velit erat, non tincidunt ipsum semper quis. Praesent euismod nibh vitae quam auctor, eu venenatis odio commodo. Quisque orci massa, eleifend in ante non, blandit aliquet dui. Nulla feugiat magna sit amet bibendum ullamcorper. Fusce finibus massa eu vestibulum luctus. Duis rutrum, odio nec suscipit tristique, metus est pellentesque nibh, vel pulvinar velit turpis et urna."
    }, {
        "employer": "PA Leadership Charter School",
        "title": "Guidance Assistant",
        "dates": "April 2013 - November 2014",
        "location": "Pittsburgh, PA",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dictum augue, in pellentesque odio. Aenean quis bibendum urna, sed vestibulum ante. Pellentesque blandit luctus nunc, at tincidunt sem iaculis rutrum. Nulla eu volutpat urna. Nunc cursus velit erat, non tincidunt ipsum semper quis. Praesent euismod nibh vitae quam auctor, eu venenatis odio commodo. Quisque orci massa, eleifend in ante non, blandit aliquet dui. Nulla feugiat magna sit amet bibendum ullamcorper. Fusce finibus massa eu vestibulum luctus. Duis rutrum, odio nec suscipit tristique, metus est pellentesque nibh, vel pulvinar velit turpis et urna."
    }, {
        "employer": "PA Leadership Charter School",
        "title": "Receptionist",
        "dates": "August 2011 - April 2013",
        "location": "Pittsburgh, PA",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dictum augue, in pellentesque odio. Aenean quis bibendum urna, sed vestibulum ante. Pellentesque blandit luctus nunc, at tincidunt sem iaculis rutrum. Nulla eu volutpat urna. Nunc cursus velit erat, non tincidunt ipsum semper quis. Praesent euismod nibh vitae quam auctor, eu venenatis odio commodo. Quisque orci massa, eleifend in ante non, blandit aliquet dui. Nulla feugiat magna sit amet bibendum ullamcorper. Fusce finibus massa eu vestibulum luctus. Duis rutrum, odio nec suscipit tristique, metus est pellentesque nibh, vel pulvinar velit turpis et urna."
    }]
};
work.display = function() {
    for (var job in work.jobs) {
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
};
work.display();

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Pittsburgh, PA",
        "majors": "Web Development",
        "dates": "2016 - Present",
        "degree": "Nanodegree, Web Development",
        "url" : "https://www.udacity.com"
    }, {
        "name": "Clarion University",
        "location": "Clarion, PA",
        "majors": "History",
        "dates": "2009 - 2011",
        "degree": " ",
        "url" : "https://www.clarion.edu"
    }],
    "onlineCourses": [{
        "title": "Udacity",
        "school": "Udacity",
        "date": "03/16 - Present",
        "major": "Web Development",
        "url": "https://www.udacity.com"
    }, {
        "title": "Code Academy",
        "school": "Code Academy",
        "date": "02/16 - Present",
        "major": "Web Development",
        "url": "https://www.codeacademy.com"
    }, {
        "title": "edX",
        "school": "edX",
        "date": "6/14 - 6/15",
        "major": "Web Development",
        "url": "https://www.edx.org"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineStart);

    for (var onlineCourse in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

        var formattedOnline = formattedOnlineTitle + formattedOnlineSchool;

        $(".online-entry").append(formattedOnline);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".online-entry").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".online-entry").append(formattedOnlineURL);
    }
};
education.display();




var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "2016",
        "description": "Who stole the cookie from the cookie jar? Who me? Yes you! Couldn't be! Then who?",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "title": "Design Projects",
        "dates": "2020",
        "description": "Who can see into the future?",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

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

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
