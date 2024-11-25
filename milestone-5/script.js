// get references to the form and display area
var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //generate the dynamic content
    var resmeHTML = "\n     <h2><b>Editable Resume<b></h2>\n     <h3>Personal Information </h3>\n     <p><b>Name:</b><span conteneditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span conteneditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone:</b><span conteneditable=\"true\">").concat(phone, "</span></p>\n\n     <h3>Education</h3>\n     <p conteneditable=\"true\">").concat(education, "</P>\n\n     <h3>Experience</h3>\n     <p conteneditable=\"true\">").concat(experience, "</P>\n\n     <h3>Skills</h3>\n     <p conteneditable=\"true\">").concat(skills, "</P>\n     ");
    //Display the generated resume
    resumedisplayelement.innerHTML = resmeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//handle pdf download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
//refill the form based on thr username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var saveResumeData = localStorage.getItem(username);
        if (saveResumeData) {
            var resumeData = JSON.parse(saveResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
