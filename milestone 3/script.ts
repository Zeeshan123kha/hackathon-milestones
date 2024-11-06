const form = document.getElementById(`resume-form`)as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`)as HTMLDivElement;

// Handle form submission
form.addEventListener(`submit`, (event:Event) => {
    event.preventDefault(); // prevent page reload 

// Collect input values
const name =  (document.getElementById('name') as HTMLInputElement).value;

const email = (document.getElementById('email') as HTMLInputElement).value;

const phone = (document.getElementById('phone') as HTMLInputElement).value;

const education  = (document.getElementById('education') as HTMLInputElement).value;

const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;

const skills = (document.getElementById('skills') as HTMLInputElement).value;



// Function to generate resume
const resumeHTML = `
<h2><b>Resume<b></h2>
<h3>Personal Information</h3
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>
<h3>Work Experience</h3>
<p>${workExperience}</p>
<h3>Skills</h3>
<p>${skills}</p>
`;

// Display resume on the page

if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
    } else {
    console.error("Error: Resume display element not found.");
    }
    

});

