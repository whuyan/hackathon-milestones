// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement = document.getElementById ('resume-display') as HTMLDivElement;

// handle form submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //generate the dynamic content
     const resmeHTML = `
     <h2><b>Resume<b></h2>
     <h3>Personal Information </h3>
     <p><b>Name:</b>${name}</p>
     <p><b>Email:</b>${email}</p>
     <p><b>Phone:</b>${phone}</p>

     <h3>Education</h3>
     <p>${education}</P>

     <h3>Experience</h3>
     <p>${experience}</P>

     <h3>Skills</h3>
     <p>${skills}</P>
     `;

     //Display the generated resume
     if(resumedisplayelement){
        resumedisplayelement.innerHTML = resmeHTML;
     } else{
        console.error('The resume display element is missing')
     }
});