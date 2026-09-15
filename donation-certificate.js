// ===============================
// LIFELINK - DONATION CERTIFICATE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Get logged-in user
    const user = JSON.parse(
        localStorage.getItem("lifeLinkUser") || "null"
    );


    // Check user
    if (!user) {

        alert("Please login first.");

        window.location.href = "index.html";

        return;
    }


    // Only donors can generate certificate
    if (user.userType !== "Donor") {

        alert("Donation certificate is available for blood donors only.");

        window.location.href = "profile.html";

        return;
    }


    // ===============================
    // DISPLAY DONOR DETAILS
    // ===============================

    document.getElementById("donorName").textContent =
        user.name || "Donor Name";

    document.getElementById("bloodGroup").textContent =
        user.bloodGroup || "-";

    document.getElementById("location").textContent =
        user.location || "-";


    // Current date
    const today = new Date();

    const formattedDate =
        today.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });


    document.getElementById("donationDate").textContent =
        formattedDate;

});