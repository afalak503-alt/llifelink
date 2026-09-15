const emergencyForm =
    document.getElementById("emergencyForm");


emergencyForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const emergencyRequest = {

        patient:
            document.getElementById("emergencyPatient").value,

        bloodGroup:
            document.getElementById("emergencyBloodGroup").value,

        units:
            document.getElementById("emergencyUnits").value,

        hospital:
            document.getElementById("emergencyHospital").value,

        location:
            document.getElementById("emergencyLocation").value,

        contact:
            document.getElementById("emergencyContact").value,

        message:
            document.getElementById("emergencyMessage").value,

        status: "Emergency",

        date:
            new Date().toLocaleString()

    };


    // Save emergency request temporarily

    localStorage.setItem(
        "lifeLinkEmergencyRequest",
        JSON.stringify(emergencyRequest)
    );


    alert(
        "🚨 Emergency request submitted successfully!"
    );


    // Return to Home

    window.location.href = "home.html";

});


// Logout

function logout() {

    localStorage.removeItem("lifeLinkUser");

    window.location.href = "index.html";

}
