(function() {

    var sourceEditor = "//cdn.ckeditor.com/4.5.0/standard/ckeditor.js";
    var new_script = document.createElement("script");
    new_script.type = "text/javascript";
    new_script.src = sourceEditor;
    document.getElementsByTagName("head")[0].appendChild(new_script);
    console.log("JavaScript has been injected");

    function relaceEditor(id) {

        var targetId = id;
        setTimeout(function() {
            console.log("Do --> Replacing: " + targetId);
            CKEDITOR.replace(targetId);
            console.log("OK --> Replacing: " + targetId);
        }, 3000);
    };

    var textAreaArray = document.getElementsByTagName("textarea");
    if (textAreaArray.length > 0) {

        for (var i = 0; i < textAreaArray.length; i++) {
            console.log("--> Ready to replace: " + textAreaArray[i].id);
            relaceEditor(textAreaArray[i].id)
        }
    }

    function showSource(textAreaId) {
        console.log(">> showSource");
        console.log("source: " + textAreaArray[i].id);
        CKEDITOR.instances[textAreaArray[i].id].execCommand("source");
    }

    var htmlOption = document.getElementById("edit-format-1-1");
    if (htmlOption != null) {
        htmlOption.checked = true;
    }

})();
