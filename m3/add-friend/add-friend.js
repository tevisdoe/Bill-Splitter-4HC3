$(document).ready(function() {

    $(".friend-request-sent-box").toggle();

    $(".search-id-here").on('input', function() {
        $('.friend-search-list').children().hide();
        var input = $(".search-id-here").html();

        if (!input) {
            $('.friend-search-list').children().show();
        }

        $('.friend-search-list').find('.valign-text-middle').filter(function (index) {
            return $(this).html().includes(input);
        }).parent().show();
    });

    $('#add-stranger').one('click',function(){
        $('#add-stranger').off('click');
        $(this).attr('src', "../icons/bxs-user-check-1.svg");
        $(this).attr('id', "used");
        $(this).attr('class', "bxs-user-check-1");
        $(".friend-request-sent-box").show();
        delay(2000).then(() => $(".friend-request-sent-box").hide());
      });
    
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
});

  
