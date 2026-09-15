// =========================
// LIFELINK LOGIN
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter email and password.");
            return;
        }

        const registeredUser = JSON.parse(
            localStorage.getItem("lifeLinkUser") || "null"
        );

        if (!registeredUser) {
            alert("Please create an account first.");
            return;
        }

        if (
            email.toLowerCase() === registeredUser.email.toLowerCase() &&
            password === registeredUser.password
        ) {
            localStorage.setItem("lifeLinkLoggedIn", "true");

            alert("Login successful! ❤️");

            window.location.href = "home.html";
        } else {
            alert("Incorrect email or password.");
        }
    });
}


// =========================
// PASSWORD SHOW / HIDE
// =========================

const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {
    togglePassword.addEventListener("click", function () {

        const password =
            document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
            togglePassword.textContent = "🙈";
        } else {
            password.type = "password";
            togglePassword.textContent = "👁";
        }

    });
}


// =========================
// LOGOUT
// =========================

function logout() {
    localStorage.removeItem("lifeLinkLoggedIn");
    window.location.href = "index.html";
}


// =========================
// HOME PAGE CHECK
// =========================

if (window.location.pathname.toLowerCase().endsWith("home.html")) {

    const loggedIn =
        localStorage.getItem("lifeLinkLoggedIn");

    if (loggedIn !== "true") {
        window.location.href = "index.html";
    }
}


// =========================
// FIND DONOR
// =========================

function searchDonors() {

    const bloodGroup =
        document.getElementById("searchBloodGroup").value.trim();

    const locationInput =
        document.getElementById("searchLocation").value.trim();

    const donorResults =
        document.getElementById("donorResults");

    if (!donorResults) {
        return;
    }

    if (bloodGroup === "" || locationInput === "") {
        donorResults.innerHTML =
            "<p>Please select blood group and enter location.</p>";
        return;
    }

    // Get registered donors
    const donors = JSON.parse(
        localStorage.getItem("lifeLinkDonors") || "[]"
    );

    // Search matching donors
    const matchingDonors = donors.filter(function (donor) {

        const donorBlood =
            (donor.bloodGroup || "").toLowerCase();

        const donorLocation =
            (donor.location || "").toLowerCase();

        return (
            donorBlood === bloodGroup.toLowerCase() &&
            donorLocation.includes(locationInput.toLowerCase())
        );

    });

    // No donor found
    if (matchingDonors.length === 0) {

        donorResults.innerHTML = `
            <div class="donor-card">
                <h3>❌ No Donors Found</h3>
                <p>No ${bloodGroup} donor found in ${locationInput}.</p>
            </div>
        `;

        return;
    }

    // Show donors
    donorResults.innerHTML = matchingDonors.map(function (donor) {

        return `
            <div class="donor-card">
                <h3>🩸 ${donor.name}</h3>
                <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
                <p><strong>Location:</strong> ${donor.location}</p>
                <p><strong>Mobile:</strong> ${donor.phone}</p>

                <button onclick="contactDonor('${donor.phone}')">
                    📞 Contact Donor
                </button>
            </div>
        `;

    }).join("");

}


// =========================
// CONTACT DONOR
// =========================

function contactDonor(phone) {

    if (!phone) {
        alert("Donor phone number not available.");
        return;
    }

    window.location.href = "tel:" + phone;
}