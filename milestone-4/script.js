// get references to the form and display area
var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the dynamic content
    var resmeHTML = "\n     <h2><b>Editable Resume<b></h2>\n     <h3>Personal Information </h3>\n     <p><b>Name:</b><span conteneditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span conteneditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone:</b><span conteneditable=\"true\">").concat(phone, "</span></p>\n\n     <h3>Education</h3>\n     <p conteneditable=\"true\">").concat(education, "</P>\n\n     <h3>Experience</h3>\n     <p conteneditable=\"true\">").concat(experience, "</P>\n\n     <h3>Skills</h3>\n     <p conteneditable=\"true\">").concat(skills, "</P>\n     ");
    //Display the generated resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resmeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
