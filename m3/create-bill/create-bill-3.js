$(document).ready(function() {
    
    var imageUrl = sessionStorage.getItem("uploaded-image");

    if (imageUrl) {
        $('#image-box').attr("src", imageUrl);
    }

    $(".price").keypress(function(e) {
        if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
    });

    $(".continue-button").click(function() {
        if ($('.price').html()) sessionStorage.setItem('price_selected', $(".price").html());
        else sessionStorage.setItem('price_selected', '89.99')
        window.location.replace('./create-bill-4.html');
    });
});
  