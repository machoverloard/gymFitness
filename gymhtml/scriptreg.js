document.addEventListener("DOMContentLoaded", function () {             
    const form = document.getElementById("registration-form");

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/; // Matches exactly 10 digits

    const firstnameInput = document.getElementById("firstname");        
    firstnameInput.addEventListener("blur", function (e) {
        if (!namePattern.test(firstnameInput.value)) {              //firstname validation to be alphabets only
            e.preventDefault(); // Prevent form submission
            errorMessage.textContent = "Please enter a valid 'First name' with letters only..!";
        } else {
            errorMessage.textContent = " ";
        }
    });

    const lastnameInput = document.getElementById("lastname");
    lastnameInput.addEventListener("blur", function (e) {
        if (!namePattern.test(lastnameInput.value)) {                   //lastname validation to be alphabets only
            e.preventDefault(); 
            errorMessage.textContent = "Please enter a valid 'Last name' with letters only!";
        } else {
            errorMessage.textContent = "";
        }
    });

    const emailInput = document.getElementById("email");
    emailInput.addEventListener("blur", function (e) {
        if (!emailPattern.test(emailInput.value)) {                     //email validation according to email pattern
            e.preventDefault(); 
            errorMessage.textContent = "Please enter a valid email address";
        } else {
            errorMessage.textContent = "";
        }
    });

    const phoneInput = document.getElementById("phone");         
    phoneInput.addEventListener("blur", function (e) {
        if (!phonePattern.test(phoneInput.value)) {                     //email validation according to email pattern
            e.preventDefault(); 
            errorMessage.textContent = "Please enter a valid phone number";
        } else {
            errorMessage.textContent = "";
        }
    });

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    passwordInput.addEventListener("blur", checkPasswordMatch);
    confirmPasswordInput.addEventListener("blur", checkPasswordMatch);

    function checkPasswordMatch(e) {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {                         //checking entered passwords are same or not
            e.preventDefault(); 
            errorMessage.textContent = "Passwords do not match";
        } else {
            errorMessage.textContent = "";
        }
    }

    form.addEventListener("submit", function (e) {
        const username = document.getElementById("username").value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const firstname = firstnameInput.value;
        const lastname = lastnameInput.value;
        //to catch any other invalidities on submition
        if (!namePattern.test(firstname) || !namePattern.test(lastname) || !emailPattern.test(email) || password !== confirmPassword) {
            e.preventDefault(); 
            errorMessage.textContent = "Please fix the errors before submitting.";
        } else {
            errorMessage.textContent = ""; 
        }

        successMessage.textContent = "---Registration successful..!";
        alert("Registration successful!");
        form.reset();

    });
});



const stateSelect = document.getElementById("inputState");              //State and District Selection 
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

    
    if (selectedState in districtData) {                        //District shown according to selected state
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



var todayDate = new Date();                         //Date validation 
var month = todayDate.getMonth()+1;
var year = todayDate.getUTCFullYear();
var tdate = todayDate.getDate();
if(month < 10){
    month = "0" + month;
}
if(tdate < 10){
    tdate = "0" + tdate;
}
var maxDate = (year-18) + "-" + month + "-" + tdate;            //Age should be above 18
document.getElementById("dob").setAttribute("max",maxDate);
console.log(maxDate);
