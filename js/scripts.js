// ICE CREAM
// $(document).ready(function() {
//   var flavors = ["chocolate", "vanilla", "rocky road", "coconut", "cherry", "plain"];
//   flavors.forEach(function(flavor){
//     $("#unList").prepend("<li>" + flavor + "</li>");
//   });
// });


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

// SENTENCE ENTER
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

// DECK OF CARDS
// $(document).ready(function(){
//   var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
//   var suits = ["diamonds", "clubs", "spades", "hearts",]
//
//   suits.forEach(function(suit){
//     ranks.forEach(function(rank) {
//       $("ul").append("<li>" + rank + " of " + suit + "</li>");
//     });
//   });
// });

// New Word Order - AKA Bilderword group
$(document).ready(function(){
  $("form").submit(function(event){

    // var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
    // var arr = ["test1", "test1", "test2", "test2", "test2", "test3"];
    var arrayOfStrings = $("#textInput").val().split(" ");

    function foo(arr) {
      var a = [], b = [], prev;

      arr.sort();
      for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
        } else {
          b[b.length-1]++;
        }
        prev = arr[i];
      }

      return [a, b];
    }
    var result = foo(arrayOfStrings);

    var names = result[0];
    var numbers = result[1];

    // document.write('[' + result[0] + ']<br>[' + result[1] + ']');
    // document.write(result[0]);
    var i = 0;
    names.forEach(function(word){

      $("ul").append("<li>" + word + " " + numbers[i] + "</li>");
      i++;
    })

    console.log(names);
    event.preventDefault();
  });
});
