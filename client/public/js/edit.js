$(function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            //event.stopImmediatePropagation();
        }
        form.classList.add('was-validated');

    }, false);



})











