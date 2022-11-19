$(document).ready(function() {
    $('.frame-3').click(function() {
        sessionStorage.setItem('jimmy_paid', "true");
        window.location.replace('./payment-confirmed.html');
    });
});
