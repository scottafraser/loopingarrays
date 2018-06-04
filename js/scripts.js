
$(function() {
  $("#groceryList").show();


  // var thisThing = ['h1', 'label', 'button', 'input'];
  //
  // thisThing.forEach(function(thing) {
  //   $(thing).click(function() {
  //     alert("this is a " + thing + " element");
  //   })
  // });


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

  deck.forEach(function(list) {
    $('#cardDeck').append('<li>' + list + '</li>');

  });

  $("#wordCount").submit(function(event) {
    event.preventDefault();

    var comment = [];

    comment = ($("#comment").val()).split(" ");

    let count = comment.reduce((hash, word) => {
      hash [word] = hash [word] || 0;
      hash [word] ++;
      return hash;
    }, {}) ;

    var objects = (Object.keys(count));
    var values = (Object.values(count));

    for(var i = 0; i < Object.keys(count).length; i++) {

      $('#listCount').append('<li>' + objects[i] + " shows up " + values[i] + " times." + '</li>');

    //https:stackoverflow.com/questions/42334084/counting-occurrences-of-a-word-in-a-string-with-javascript-using-match/42334131#42334131

    };
  });

});
