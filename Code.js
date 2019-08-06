function RUT() {
  //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var number = getRandomInt(1000000, 100000000);
  var digit = RUTDIGIT(number);
  
  return number.toString() + "-" + digit;
}

function RUTDIGIT(number) {
  //https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function/7260572
  function zip() {
    var args = [].slice.call(arguments);
    var shortest = args.length==0 ? [] : args.reduce(function(a,b){
        return a.length<b.length ? a : b
    });

    return shortest.map(function(_,i){
        return args.map(function(array){return array[i]})
    });
  }
  
  var digits = number.toString().split('').map(Number).reverse();
  var series = Array(digits.length + 1).join().split('').map(function(x, i) { return (i % 6) + 2; }); //[2,3,4,5,6,7,2,3...]
  
  var digit = (11 - (zip(digits, series).map(function(pair) { return pair[0] * pair[1]; }).reduce(function(a,b) { return a + b; }, 0) % 11)).toString();
  if(digit === '11') digit = '0';
  if(digit === '10') digit = 'K';
  
  return digit;
}

//Spanish alias of RUTDIGIT
function DIGITORUT(number) {
  return RUTDIGIT(number);
}

function VERIFYRUT(rut, digit) {
  return RUTDIGIT(rut) === digit.toString();
}

//Spanish alias of VERIFYRUT
function VERIFICARUT(rut, digit) {
  return VERIFYRUT(rut, digit);
}