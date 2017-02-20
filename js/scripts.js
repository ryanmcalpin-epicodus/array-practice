// ICE CREAM
// // $(document).ready(function() {
// //   var flavors = ["chocolate", "vanilla", "rocky road", "coconut", "cherry", "plain"];
// //   flavors.forEach(function(flavor){
// //     $("#unList").prepend("<li>" + flavor + "</li>");
// //   });
// // });


 // GROCERY
// $(document).ready(function(){
//   $("#grossForm").submit(function(event){
//     var groceryArray =[$('input#grocery1').val(), $('input#grocery2').val(), $('#grocery3').val(), $('#grocery4').val()]
//
//     $("#grossForm").hide();
//
//     console.log("testtesttest");
//
//     groceryArray = groceryArray.sort();
//     var orderedList = groceryArray.map(function(item) {
//       return item.toUpperCase();
//     });
//     $("p#display").text(orderedList.join(", "));
//
//     event.preventDefault();
//   })
// });

// SENTENCE ENTER CAVE OF MYSTERY
$(document).ready(function(){
  $("#formy").submit(function(event){
    var arrayOfStrings = [];
    function splitString(stringToSplit, separator) {
      arrayOfStrings = stringToSplit.split(separator);
      // console.log('The original string is: "' + stringToSplit + '"');
      // console.log('The separator is: "' + separator + '"');
      // console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
      return arrayOfStrings;
    }

    var sentenceInput = $("#sentence").val();
    var space = ' ';

    console.log(splitString(sentenceInput, space));
    
    var newArray = arrayOfStrings.map(function(word){
      console.log("derp test");
      if (word.length >= 3){
        return word;
      }
      // console.log(newArray);
    });


    console.log(arrayOfStrings);
    console.log(newArray);

    event.preventDefault();
  });
});
