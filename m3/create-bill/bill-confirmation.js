$(document).ready(function() {
    $('#category').html(sessionStorage.getItem('selected_category'));
    $('#price').html('$' + sessionStorage.getItem('price_selected'));
    $('#date').html(sessionStorage.getItem('date_selected'));
    $('#payer').html(sessionStorage.getItem('selected-friend'));
});