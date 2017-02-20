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

// // SENTENCE ENTER CAVE OF MYSTERY
// $(document).ready(function(){
//   $("#formy").submit(function(event){
//     var arrayOfStrings = [];
//     function splitString(stringToSplit, separator) {
//       arrayOfStrings = stringToSplit.split(separator);
//       return arrayOfStrings;
//     }
//     var sentenceInput = $("#sentence").val();
//     // var space = ' ';
//     console.log(splitString(sentenceInput, " "));
//
//     var newArray = arrayOfStrings.filter(function(word){
//       return word.length >= 3;
//     });
//     console.log(arrayOfStrings);
//     console.log(arrayOfStrings[1]);
//     console.log(newArray.reverse().join("-"));
//     event.preventDefault();
//   });
// });

// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").

$(document).ready(function(){
  var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suits = ["diamonds", "clubs", "spades", "hearts",]

  suits.forEach(function(suit){
    ranks.forEach(function(rank) {
      $("ul").append("<li>" + rank + " of " + suit + "</li>");
    });
    // $("ul").append("<li>" + rank + "</li>");
    // ranks.forEach(function(suits){
    //   $("ul").append(suits);
    // });
  });
});
