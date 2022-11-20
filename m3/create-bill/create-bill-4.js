$(document).ready(function() {
    sessionStorage.setItem("selected-category", 'Groceries');

    $('.upload-file-button').click(function () {
        var category = prompt("New category name: (Max 20 chars)");
        category = category.substring(0, 20);
        $(".categories").append("<div class='category inter-bold-black-12px' onclick='selectCategory(\"" + category + "\")'>" + category + "</div>");
    });
    
});
  