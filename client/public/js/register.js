
// validation for password
$(function () {
    var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password");
    password.addEventListener("input", (event) => {
        confirm_password.pattern = password.value;
    })

    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function (form) {
        // loop over elements and prevent submission 
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})










