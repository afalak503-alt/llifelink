// ===============================
// LIFELINK - REQUEST BLOOD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bloodRequestForm");

    // Agar form page par nahi mila
    if (!form) {
        console.log("Blood request form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const patientName =
            document.getElementById("patientName").value.trim();

        const bloodGroup =
            document.getElementById("requiredBloodGroup").value;

        const units =
            document.getElementById("units").value;

        const hospital =
            document.getElementById("hospital").value.trim();

        const hospitalLocation =
            document.getElementById("hospitalLocation").value.trim();

        const requiredDate =
            document.getElementById("requiredDate").value;

        const contact =
            document.getElementById("contactNumber").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Validation
        if (
            patientName === "" ||
            bloodGroup === "" ||
            units === "" ||
            hospital === "" ||
            hospitalLocation === "" ||
            requiredDate === "" ||
            contact === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }


        // Create request
        const request = {

            patientName: patientName,

            bloodGroup: bloodGroup,

            units: units,

            hospital: hospital,

            hospitalLocation: hospitalLocation,

            requiredDate: requiredDate,

            contact: contact,

            message: message,

            status: "Pending"

        };


        // Save request
        localStorage.setItem(
            "lifeLinkBloodRequest",
            JSON.stringify(request)
        );


        // Check that it was actually saved
        const savedRequest =
            localStorage.getItem("lifeLinkBloodRequest");

        if (!savedRequest) {
            alert("Unable to save request.");
            return;
        }


        // Success
        alert("Blood request submitted successfully! 🩸");


        // Go to My Requests
        window.location.href = "requests.html";

    });

});


// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("lifeLinkLoggedIn");

    window.location.href = "index.html";

}