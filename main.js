// var fs = require('fs');
// var filename = 'data.txt';
// var str = fs.readFileSync(filename).toString();
// var pattern = /man/gim;
// var myarray = str.match(pattern);
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);
// var str = 'FFFKLL'
// var pattern = /^[a-fA-F0-9]+$/g;

// var res = str.match(pattern);
// if (res) {
//     console.log("Valid Hexadecimal number");
// } else {
//     console.log("Not a valid Hexadecimal number");
// }

var reg = new RegExp('ab*')

var str = '23A3B2'
var pattern = /^[a-fA-F0-9]+$/g;
var res = str.match(pattern)
if (res) {
    console.log('Hex')
} else {
    console.log('Not Hex');
}