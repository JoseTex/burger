$(function() {
    $(".set-devour").on("click", function(event) {
      var id = $(this).data("id");
      var justAte = $(this).data("justate");
  
      var burgerAte = {
        devoured: justAte
      };
  
      // Send the PUT request.
      $.ajax("/burger/update/" + id, {
        type: "PUT",
        data: burgerAte
      }).then(
        function() {
          console.log("you just devoured" + justAte);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newSammich = {
        name: $("#ba").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/burger/create", {
        type: "POST",
        data: newSammich
      }).then(
        function() {
          console.log("added a new sammich");
          // Reload the page to get the updated list
          location.reload();
        }
      );
     });
});   