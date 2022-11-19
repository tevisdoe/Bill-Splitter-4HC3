$(document).ready(function() {

  var filter = {
    date: '',
    category: '',
    payee: ''
  };

  var isFiltered = false;

  if (sessionStorage.getItem("date_filter")) {
    filter.date = sessionStorage.getItem("date_filter");
    isFiltered = true;
  }
  if (sessionStorage.getItem("category_filter")) {
    filter.category = sessionStorage.getItem("category_filter");
    isFiltered = true;
  }
  if (sessionStorage.getItem("payee_filter")) {
    filter.payee = sessionStorage.getItem("payee_filter");
    isFiltered = true;
  }

  if (isFiltered) {
    $("#Christina").hide();
    $("#Sam").hide();
    $("#Jimmy").hide();
    $('.frame-13').filter(function (index) {
        return (filter.date ? $(this).find('.date').html() == filter.date : true)
          && (filter.category ? $(this).find('.category').html() == filter.category : true)
          && (filter.payee ? $(this).find('.name').html() == filter.payee : true);
    }).show();
  }
    
  if (sessionStorage.getItem("christina_paid") === null) {
    var christina = true;
  } else {
    var christina = false;
    $("#Christina").hide();
  }
  if (sessionStorage.getItem("jimmy_paid") === null) {
    var jimmy = true;
  } else {
    var jimmy = false;
    $("#Jimmy").hide();
  }
  if (sessionStorage.getItem("sam_paid") === null) {
    var sam = true;
  } else {
    var sam = false;
    $("#Sam").hide();
  }
 
  if (!christina && !sam && !jimmy) {
    $("<div class='all-done'>All bills paid off!</div>").insertBefore('.group-87')
  } else if ($('.frame-13').is(":visible").length == 3) {
    $("<div class='all-done'>No results found.</div>").insertBefore('.group-87')
  }

  sessionStorage.setItem('date_filter', '');
  sessionStorage.setItem('category_filter', '');
  sessionStorage.setItem('payee_filter', '');
  
});
