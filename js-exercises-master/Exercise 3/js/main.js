// ---------------------------------------
// Exersize 3: Create an object with your firstName and lastName
// append them to the html using jQuery
//
// syntax for an object:
// var obj = {};


var info = {first: 'Ashley', last: 'Sodomire'};

$('.first-name').append(info.first);
$('.last-name').append(info.last);