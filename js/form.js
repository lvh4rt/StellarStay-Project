$(document).ready(function(){
    // Attach click event to the button with ID 'addPerson'
    $("#addPerson").click(function(){
        // Get the HTML content of the element with ID 'formAll'
        var formContent = $("#formAll").html();
        
        // Ensure the form content exists and is not empty
        if (formContent.trim() !== "") {
            // Append a new div with the form content before the element with ID 'form3'
            $("<div class='duplicated-form'>" + formContent + "</div>").insertBefore("#form3");
        } else {
            console.warn("The form section #formAll is empty.");
        }
    });
});