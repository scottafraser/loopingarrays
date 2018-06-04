$(function() {

  $("#favFood").submit(function(event) {
    var favFood = [];
    favFood.push($("#food1").val());
    favFood.push($("#food2").val());
    favFood.push($("#food3").val());
    var listFood = [];
    listFood.push(favFood.pop());
    listFood.push(favFood.shift());
    listFood.push(favFood.pop());

    $('#list').append("<li>" + listFood[0] + "</li>");
    $('#list').append("<li>" + listFood[1] + "</li>");
    $('#list').append("<li>" + listFood[2] + "</li>");

    var iceCreams = ['vanilla', 'chocolate', 'strawberry'];
    iceCreams.forEach(function(iceCream) {
      $('#list').append("<li>" + iceCream + "</li>");
    });

    event.preventDefault();

  });
});
