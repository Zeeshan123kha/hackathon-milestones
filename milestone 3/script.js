var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload 
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    // Function to generate resume
    var resumeHTML = "\n<h2><b>Resume<b></h2>\n<h3>Personal Information</h3\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n<h3>Work Experience</h3>\n<p>").concat(workExperience, "</p>\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    // Display resume on the page
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Error: Resume display element not found.");
    }
    ;
});
