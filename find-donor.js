// ===============================
// LIFELINK FIND DONOR
// ===============================

function searchDonors() {

    const bloodGroup =
        document.getElementById("searchBloodGroup").value;

    const locationInput =
        document.getElementById("searchLocation").value
        .trim()
        .toLowerCase();

    const resultBox =
        document.getElementById("donorResults");


    // Check fields
    if (bloodGroup === "" || locationInput === "") {

        resultBox.innerHTML = `
            <div class="no-results">
                ⚠️ Please select blood group
                and enter your location.
            </div>
        `;

        return;
    }


    // Get registered donors
    const registeredDonors = JSON.parse(
        localStorage.getItem("lifeLinkDonors") || "[]"
    );


    // Sample donors
    const sampleDonors = [
        {
            name: "Rahul Sharma",
            bloodGroup: "O+",
            location: "Mumbai",
            phone: "9876543210"
        },
        {
            name: "Priya Patel",
            bloodGroup: "A+",
            location: "Mumbai",
            phone: "9876543211"
        },
        {
            name: "Aman Verma",
            bloodGroup: "B+",
            location: "Delhi",
            phone: "9876543212"
        },
        {
            name: "Sneha Singh",
            bloodGroup: "O-",
            location: "Mumbai",
            phone: "9876543213"
        },
        {
            name: "Arjun Mehta",
            bloodGroup: "AB+",
            location: "Pune",
            phone: "9876543214"
        }
    ];


    // Combine registered + sample donors
    const allDonors = [
        ...sampleDonors,
        ...registeredDonors
    ];


    // Search
    const matchingDonors = allDonors.filter(function(donor) {

        return (
            donor.bloodGroup.toLowerCase() ===
            bloodGroup.toLowerCase() &&

            donor.location.toLowerCase().includes(
                locationInput
            )
        );

    });


    // No donor
    if (matchingDonors.length === 0) {

        resultBox.innerHTML = `
            <div class="no-results">
                😔 No matching donor found.
                <br><br>
                Try another location or blood group.
            </div>
        `;

        return;
    }


    // Show donors
    resultBox.innerHTML = "";


    matchingDonors.forEach(function(donor) {

        const donorCard =
            document.createElement("div");

        donorCard.className = "donor-card";


        donorCard.innerHTML = `

            <div class="donor-avatar">
                👤
            </div>

            <div class="donor-info">

                <h3>${donor.name}</h3>

                <p>
                    🩸 Blood Group:
                    <strong>${donor.bloodGroup}</strong>
                </p>

                <p>
                    📍 ${donor.location}
                </p>

                <p>
                    📱 ${donor.phone}</p>

            </div>

            <button
                class="contact-btn"
                onclick="contactDonor('${donor.phone}')"
            >
                📞 Contact
            </button>
        `;


        resultBox.appendChild(donorCard);

    });

}


// ===============================
// CONTACT DONOR
// ===============================

function contactDonor(phone) {

    if (!phone) {
        alert("Phone number not available.");
        return;
    }

    alert(
        "You can contact the donor at: " + phone
    );
}