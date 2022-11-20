$(document).ready(function() {
    
    $(".upload-file-button").click(function () {
        var fileDialog = $('<input type="file" accept="image/png, image/jpeg">');
        fileDialog.click();
        fileDialog.on("change",onFileSelected);
        return false;
      });
    
      var onFileSelected = function(e) {
        if ($(this)[0].files[0].size > 2000000) {
            alert("File too big!");
            return false;
        }
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            console.log(reader.result)
            sessionStorage.setItem("uploaded-image", reader.result);
        });
        reader.readAsDataURL($(this)[0].files[0]);
        $(this).val('');
        delay(500).then(() => window.location.replace('./create-bill-3.html'));
    };

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
});
  