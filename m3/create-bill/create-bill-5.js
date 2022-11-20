$(document).ready(function() {

    $(".search-id-here").on('input', function() {
        $('.friend-search-list').children().hide();
        var input = $(".search-id-here").html();

        if (!input) {
            $('.friend-search-list').children().show();
        }

        $('.friend-search-list').find('.text').children().filter(function (index) {
            return $(this).html().includes(input);
        }).parent().parent().show();
    });
  });
  
  function selectFriend(friend) {
    document
      .querySelector(".selected-friend")
      .classList.remove("selected-friend");
    document.querySelectorAll("#friend").forEach((catNode) => {
      if (catNode.innerHTML.includes(friend)) {
        catNode.classList.add("selected-friend");
        sessionStorage.setItem("selected-friend", friend)
      }
    });
  }
