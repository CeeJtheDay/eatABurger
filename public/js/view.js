$(function(){
  $(".createForm").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
        title: $("#newBurger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
          console.log("There's a new burger on the menu!");
          location.reload();
        }
      );
    });



  $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      var devoured = $(this).data("devour");
      console.log(devoured);
      var newDevBurg = {
          eaten: !devoured
      };
      $.ajax("/api/burgers/"+id,{
          type: "PUT",
          data: newDevBurg
      }).then(() => {
          console.log("Burger id: " + id + "has been devoured... yum!");
          location.reload();
      });
  });





});