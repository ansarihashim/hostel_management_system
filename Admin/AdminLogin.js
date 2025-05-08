// Get references to the password input and show password icon
const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPassword');

// Add click event listener to the show password icon
showPasswordIcon.addEventListener('click', () => {
    // Toggle the password field between text and password type
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.innerHTML = '&#128064;'; // Change to a crossed eye icon
    } else {
        passwordInput.type = 'password';
        showPasswordIcon.innerHTML = '&#128065;'; // Change to an open eye icon
    }
});
