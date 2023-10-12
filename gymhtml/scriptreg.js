document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;

        const namePattern = /^[a-zA-Z]+$/; 

        if (!namePattern.test(firstname)) {
            alert("Please enter a valid first name with letters only");
            return;
        }

        if (!namePattern.test(lastname)) {
            alert("Please enter a valid last name with letters only");
            return;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        
        alert("Registration successful!");
        form.reset();
    });
});


const stateSelect = document.getElementById("inputState");
const districtSelect = document.getElementById("inputDistrict");

const districtData = {
    "Karnataka": ["Kodagu", "Bengalurru", "Udupi"],
    "Kerala": ["Kottayam", "Thiruvananthapuram", "Ernakulam"],
    "Madhya Pradesh": ["Bhopal", "Sehore", "Vidisha"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Theni"]
};


function updateDistrictOptions() {
    const selectedState = stateSelect.value;
    
    districtSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "-- Select one --";
    districtSelect.appendChild(defaultOption);

    
    if (selectedState in districtData) {
        districtData[selectedState].forEach((district) => {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    }
}


stateSelect.addEventListener("change", updateDistrictOptions);


updateDistrictOptions();
