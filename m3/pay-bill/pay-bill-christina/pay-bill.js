$(document).ready(function() {
    $('.frame-3').click(function() {
        sessionStorage.setItem('christina_paid', "true");
        window.location.replace('./payment-confirmed.html');
    });
});
