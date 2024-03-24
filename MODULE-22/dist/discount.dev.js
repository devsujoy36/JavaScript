"use strict";

// first100Rate = 100;
// Second100Rate = 90;
// restRate = 70;
function ticketPrice(ticketQuantity) {
  var first100Rate = 100;
  var second100Rate = 90;
  var restticketRate = 70;

  if (ticketQuantity <= 100) {
    var _price = ticketQuantity * first100Rate;

    return _price;
  } else if (ticketQuantity <= 200) {
    var first100Price = 100 * first100Rate;
    var restticketQuantity = ticketQuantity - 100;
    var restticketprice = restticketQuantity * second100Rate;

    var _price2 = first100Price + restticketprice;

    return _price2;
  } else {
    var _first100Price = 100 * first100Rate;

    var second100Price = 100 * second100Rate;

    var _restticketQuantity = ticketQuantity - 200;

    var _restticketprice = _restticketQuantity * restticketRate;

    var _price3 = _first100Price + second100Price + _restticketprice;

    return _price3;
  }
}

var ticketQuantity = 200;
var price = ticketPrice(ticketQuantity);
console.log('Your Total Ticket Price is: ', price);