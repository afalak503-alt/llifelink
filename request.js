// ===============================
// LIFELINK - MY REQUESTS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const normalRequest =
        JSON.parse(localStorage.getItem("lifeLinkBloodRequest") || "null");

    const emergencyRequest =
        JSON.parse(localStorage.getItem("lifeLinkEmergencyRequest") || "null");


    // ===============================
    // NORMAL REQUEST
    // ===============================

    const normalCard =
        document.querySelector(".request-card:not(.emergency-request)");

    if (normalRequest && normalCard) {

        normalCard.style.display = "block";

        document.getElementById("patientName").textContent =
            normalRequest.patientName || "-";

        document.getElementById("bloodGroup").textContent =
            normalRequest.bloodGroup || "-";

        document.getElementById("units").textContent =
            normalRequest.units || "-";

        document.getElementById("hospital").textContent =
            normalRequest.hospital || "-";

        document.getElementById("hospitalLocation").textContent =
            normalRequest.hospitalLocation || "-";

        document.getElementById("requiredDate").textContent =
            normalRequest.requiredDate || "-";

    } else if (normalCard) {

        normalCard.style.display = "none";

    }


    // ===============================
    // EMERGENCY REQUEST
    // ===============================

    const emergencyCard =
        document.querySelector(".emergency-request");

    if (emergencyRequest && emergencyCard) {

        emergencyCard.style.display = "block";

        document.getElementById("emergencyPatient").textContent =
            emergencyRequest.patient || "-";

        document.getElementById("emergencyBloodGroup").textContent =
            emergencyRequest.bloodGroup || "-";

        document.getElementById("emergencyUnits").textContent =
            emergencyRequest.units || "-";

        document.getElementById("emergencyHospital").textContent =
            emergencyRequest.hospital || "-";

        document.getElementById("emergencyLocation").textContent =
            emergencyRequest.location || "-";

    } else if (emergencyCard) {

        emergencyCard.style.display = "none";

    }


    // ===============================
    // NO REQUESTS
    // ===============================

    const noRequests =
        document.getElementById("noRequests");

    if (noRequests) {

        if (normalRequest || emergencyRequest) {

            noRequests.style.display = "none";

        } else {

            noRequests.style.display = "block";

        }

    }

});


// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("lifeLinkLoggedIn");

    window.location.href = "index.html";

}