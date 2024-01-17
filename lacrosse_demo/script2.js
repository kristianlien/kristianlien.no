console.log("e-post: tale.solfjeld@osloskolen.no")
console.log("passord: Tale123")

function validateForm() {
    event.preventDefault();
    var username = document.forms["loginEmail"]["username"].value;
    var password = document.forms["loginEmail"]["password"].value;


    if (username === "tale.solfjeld@osloskolen.no" && password === "Tale123") {
        // Use the full URL with the protocol
        window.location.href = 'treningstider.html';
    } else {
        alert("Feil E-post / Passord");
    }
}