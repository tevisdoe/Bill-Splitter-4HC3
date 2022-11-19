$(document).ready(function() {
    
  if (sessionStorage.getItem("christina_paid") === null) {
    var christina = true;
  } else {
    var christina = false;
  }
  if (sessionStorage.getItem("jimmy_paid") === null) {
    var jimmy = true;
  } else {
    var jimmy = false;
  }
  if (sessionStorage.getItem("sam_paid") === null) {
    var sam = true;
  } else {
    var sam = false;
  }

  $("#Christina").toggle(christina);
  $("#Sam").toggle(sam);
  $("#Jimmy").toggle(jimmy);

  if (!christina && !sam && !jimmy) {
    $("<div class='all-done'>All bills paid off!</div>").insertBefore('.group-87')
  }

});
