// =========================
// LIFELINK REGISTRATION
// =========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get form values
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const mobile =
            document.getElementById("mobile").value.trim();

        const bloodGroup =
            document.getElementById("bloodGroup").value;

        const location =
            document.getElementById("location").value.trim();

        const userType =
            document.getElementById("userType").value;

        const password =
            document.getElementById("registerPassword").value;


        // =========================
        // PASSWORD VALIDATION
        // =========================

        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }


        // =========================
        // USER DATA
        // =========================

        const user = {

            name: name,
            email: email,
            mobile: mobile,
            bloodGroup: bloodGroup,
            location: location,
            userType: userType,
            password: password

        };


        // =========================
        // SAVE LOGIN USER
        // =========================

        localStorage.setItem(
            "lifeLinkUser",
            JSON.stringify(user)
        );


        // =========================
        // SAVE DONOR
        // =========================

        if (userType === "Donor") {

            // Get existing donors
            const donors =
                JSON.parse(
                    localStorage.getItem("lifeLinkDonors")
                ) || [];


            // Add new donor
            donors.push({

                name: name,
                email: email,
                phone: mobile,
                bloodGroup: bloodGroup,
                location: location

            });


            // Save donors
            localStorage.setItem(
                "lifeLinkDonors",
                JSON.stringify(donors)
            );

        }


        alert("Account created successfully! ❤️");


        // Go to Login
        window.location.href = "index.html";

    });

}


// =========================
// SHOW / HIDE PASSWORD
// =========================

const registerToggle =
    document.getElementById("registerToggle");

const registerPassword =
    document.getElementById("registerPassword");


if (registerToggle && registerPassword) {

    registerToggle.addEventListener("click", function() {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";

            registerToggle.textContent = "🙈";

        } else {

            registerPassword.type = "password";

            registerToggle.textContent = "👁";

        }

    });

}
