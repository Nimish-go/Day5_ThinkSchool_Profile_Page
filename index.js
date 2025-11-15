// MUST BE FIRST
emailjs.init("ECy1zbRdY7ceNSVvo");  // <-- Correct public key

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactMeForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const params = {
            from_name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_a82cr6t", "template_vo4l0gg", params)
            .then((res) => {
                alert("Email Sent Successfully!");
                console.log(res.status);
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Oops, an error occurred. Check console.");
            });
    });
});
