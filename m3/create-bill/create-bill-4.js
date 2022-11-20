function selectCategory(category) {
  document
    .querySelector(".selected-category")
    .classList.remove("selected-category");
  document.querySelectorAll("div.category").forEach((catNode) => {
    if (catNode.innerHTML.includes(category)) {
      catNode.classList.add("selected-category");
      sessionStorage.setItem("selected-category", category);
    }
  });
  sessionStorage.setItem("selected_category", category);
}

$(document).ready(function () {
  $(".upload-file-button").click(function () {
    var category = prompt("New category name: (Max 20 chars)");
    category = category.substring(0, 20);
    $(".categories").append(
      "<div class='category inter-bold-black-12px' onclick='selectCategory(\"" +
        category +
        "\")'>" +
        category +
        "</div>"
    );
  });
});
