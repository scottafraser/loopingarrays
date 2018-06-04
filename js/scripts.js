
$(function() {
  $("#groceryList").show();


  // grocery js
  $("#groceryList").submit(function(event) {
    event.preventDefault();
    var foods = ['food1', 'food2', 'food3'];

    var listItems = [];

    foods.forEach(function(food) {

      listItems.push($("#" + food).val());
    });

    listItems.sort();




    var alphaList = listItems.map(function(listItem) {
      return listItem.toUpperCase();

    });


    alphaList.forEach(function(x) {
      $("#list").append("<li>" + x + "</li>");
    })

    $("#groceryList").hide();
  });

  // word js
  $("#wordForm").submit(function(event) {
    event.preventDefault();

    var userSentence = [];
    userSentence = ($('#userSentence').val()).split(" ");

    var longWords = [];

    userSentence.forEach(function(word) {
      if (word.length >= 3) {
        longWords.push(word);
      }
    });

    longWords.reverse();

    var stupidSentance = longWords.join(" ");

    $('#sillySentance').text(stupidSentance);

  });

  //card

  var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  var values = ['ace', '2', '3', '4', '5', '6' , '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + " of " + suit);
    });
  });

  console.log(deck);


});
