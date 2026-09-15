// ===============================
// LIFELINK - MY PROFILE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Get saved user
    const user = JSON.parse(
        localStorage.getItem("lifeLinkUser") || "null"
    );


    // ===============================
    // CHECK USER
    // ===============================

    if (!user) {

        alert("Please login first.");

        window.location.href = "index.html";

        return;
    }


    // ===============================
    // DISPLAY USER DETAILS
    // ===============================

    document.getElementById("profileName").textContent =
        user.name || "-";

    document.getElementById("profileEmail").textContent =
        user.email || "-";

    document.getElementById("profileMobile").textContent =
        user.mobile || "-";

    document.getElementById("profileBloodGroup").textContent =
        user.bloodGroup || "-";

    document.getElementById("profileLocation").textContent =
        user.location || "-";

    document.getElementById("profileUserType").textContent =
        user.userType || "-";


    document.getElementById("profileType").textContent =
        user.userType === "Donor"
            ? "🩸 Blood Donor"
            : "❤️ Blood Seeker";

});


// ===============================
// EDIT PROFILE
// ===============================

function editProfile() {

    const user = JSON.parse(
        localStorage.getItem("lifeLinkUser") || "null"
    );

    if (!user) {

        alert("Please login first.");

        window.location.href = "index.html";

        return;
    }


    const newName =
        prompt("Enter your name:", user.name);

    if (newName === null) {
        return;
    }


    const newMobile =
        prompt("Enter your mobile number:", user.mobile);

    if (newMobile === null) {
        return;
    }


    const newLocation =
        prompt("Enter your location:", user.location);

    if (newLocation === null) {
        return;
    }


    // Update user
    user.name = newName.trim();
    user.mobile = newMobile.trim();
    user.location = newLocation.trim();


    // Save updated user
    localStorage.setItem(
        "lifeLinkUser",
        JSON.stringify(user)
    );


    alert("Profile updated successfully! ✅");


    // Reload profile
    window.location.reload();

}


// ===============================
// DELETE ACCOUNT
// ===============================

function deleteAccount() {

    const confirmDelete = confirm(
        "Are you sure you want to delete your LifeLink account?"
    );


    if (!confirmDelete) {
        return;
    }


    // Remove account
    localStorage.removeItem("lifeLinkUser");

    localStorage.removeItem("lifeLinkLoggedIn");

    localStorage.removeItem("lifeLinkDonors");


    alert("Your account has been deleted successfully.");


    window.location.href = "index.html";

}


// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("lifeLinkLoggedIn");

    window.location.href = "index.html";

}