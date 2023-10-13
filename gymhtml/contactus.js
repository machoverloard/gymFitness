 const form = document.getElementById("login-form");
        const errorMessage = document.getElementById("error-message");
        const successMessage = document.getElementById("success-message");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!emailPattern.test(email)) {
                errorMessage.textContent = "Invalid email address";
                successMessage.textContent = "";
            } else {
                errorMessage.textContent = "";
                successMessage.textContent = "Message Sent Successfully";
            }
        });