const form = document.getElementById("productForm");

const inputField = document.getElementById("formGroupExampleInput");
const errorMessage = document.getElementById("errorMessage");

inputField.addEventListener("input", function() {
    if (inputField.value.length > 10) {
        errorMessage.textContent = "Last name must not exceed 10 characters";
    } else if (/[#@{}]/.test(inputField.value)) {
        errorMessage.textContent = "Name must not contain symbols";
    } else {
        errorMessage.textContent = "";
    }
});

form.addEventListener("submit", function(event) {
    if (inputField.value.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "Product name cannot be empty";
    } else {
        errorMessage.textContent = "";
    }
});