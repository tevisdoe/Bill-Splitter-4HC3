$(document).ready(function() {
    
    $('.filter-button').click(function() {
        sessionStorage.setItem('date_filter', $('#date-input').html());
        sessionStorage.setItem('category_filter', $('#category-input').html());
        sessionStorage.setItem('payee_filter', $('#payee-input').html());
        window.location.replace('./view-bills.html');
    });

});
  