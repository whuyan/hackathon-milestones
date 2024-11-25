// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement = document.getElementById ('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// handle form submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    //collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeData= {
      name,
      email,
      phone,
      education,
      experience,
      skills
    };
    localStorage.setItem(username,JSON.stringify(resumeData));

    //generate the dynamic content
     const resmeHTML = `
     <h2><b>Editable Resume<b></h2>
     <h3>Personal Information </h3>
     <p><b>Name:</b><span conteneditable="true">${name}</span></p>
     <p><b>Email:</b><span conteneditable="true">${email}</span></p>
     <p><b>Phone:</b><span conteneditable="true">${phone}</span></p>

     <h3>Education</h3>
     <p conteneditable="true">${education}</P>

     <h3>Experience</h3>
     <p conteneditable="true">${experience}</P>

     <h3>Skills</h3>
     <p conteneditable="true">${skills}</P>
     `;

     //Display the generated resume
   
        resumedisplayelement.innerHTML = resmeHTML;
        const shareableURL= `${window.location.origin}?username=${encodeURIComponent(username)}`;
        shareableLinkContainer.style.display='block';
        shareableLinkElement.href=shareableURL;
        shareableLinkElement.textContent=shareableURL;
   });

   //handle pdf download
   downloadPdfButton.addEventListener('click', ()=>{
      window.print();
   })

   //refill the form based on thr username in the URL
   window.addEventListener('DOMContentLoaded', () =>{
      const urlParams = new URLSearchParams(window.location.search);
      const username= urlParams.get('username');
      if(username)
      {
         const saveResumeData = localStorage.getItem(username);
         if (saveResumeData){
            const resumeData = JSON.parse(saveResumeData);
            (document.getElementById('username') as HTMLInputElement).value=username;
            (document.getElementById('name') as HTMLInputElement).value=resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value=resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value=resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value=resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value=resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value=resumeData.skills;


         }
      }
   })
