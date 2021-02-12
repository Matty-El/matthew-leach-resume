function sendMail(contactForm) {
    emailjs.send("service_9jk0xid", "Project query", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            location.reload();
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;
}