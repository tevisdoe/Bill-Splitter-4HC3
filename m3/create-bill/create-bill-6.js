$(document).ready(function() {
    
    var date = new Date();

    var selected = 'today';

    $(".radio").click(function() {
        $(".radio").children().remove();
        $(this).append('<div class="ellipse-9"></div>');

        selected = $(this).parent().attr('id');
    });

    $(".frame-4").click(function() {
        if (selected == 'today') {

            sessionStorage.setItem('date_selected', date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());

        } else if (selected == 'recently-used') {

            sessionStorage.setItem('date_selected', '07/8/2022');

        } else {
            if ($(".date").html()) sessionStorage.setItem('date_selected', $(".date").html());
            else sessionStorage.setItem('date_selected', '05/9/2022');
        }
    });
});