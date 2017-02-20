// $(document).ready(function() {
//   var flavors = ["chocolate", "vanilla", "rocky road", "coconut", "cherry", "plain"];
//   flavors.forEach(function(flavor){
//     $("#unList").prepend("<li>" + flavor + "</li>");
//   });
// });

$(document).ready(function(){
  $("#grossForm").submit(function(event){
    var groceryArray =[$('input#grocery1').val(), $('input#grocery2').val(), $('#grocery3').val(), $('#grocery4').val()]

    $("#grossForm").hide();

    console.log("testtesttest");

    groceryArray = groceryArray.sort();
    var orderedList = groceryArray.map(function(item) {
      return item.toUpperCase();
    });
    $("p#display").text(orderedList.join(", "));






    event.preventDefault();
  })
});
