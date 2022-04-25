// var fs = require('fs');
// var filename = 'data.txt';
// var str = fs.readFileSync(filename).toString();
// var pattern = /man/gim;
// var myarray = str.match(pattern);
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);


// var fs = require('fs')
// var filename = 'data.txt'
// var str = fs.readFileSync(filename)
// console.log(str.toString())


// hex validation
// var str = 'FFFKLL'
// var pattern = /^[a-fA-F0-9]+$/g;
// var res = str.match(pattern);
// if (res) {
//     console.log("Valid Hexadecimal number");
// } else {
//     console.log("Not a valid Hexadecimal number");
// }


// Writing Regular expression
// var reg = new RegExp('ab*') or var reg = /ab*/ for finding a,ab,abbb,abbbb etc



// var str = '23A3B2'
// var pattern = /^[a-fA-F0-9]+$/g;
// var res = str.match(pattern)
// if (res) {
//     console.log('Hex')
// } else {
//     console.log('Not Hex');
// }



// email validation
// var str = 'rjbit$emo@gmail.com'
// console.log();
// var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// var res = str.match(pattern);
// if (res) {
//     console.log("Valid email address");
// } else {
//     console.log("Please enter a valid email address");
// }

// Password validation 
// var str = 'akfn'
// var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// var res = str.match(pattern)
// if (res) {
//     console.log('Password OK');
// } else {
//     console.log('Reenter password acc to rules');
// }

//using ' ' to print
console.log('1 : hello world !');
//using " " to print
console.log("2 : this will also work");

var str = 'nodejsera';

var val = 25;
//printing a string
console.log(str);   //3
//printing a variable and replacing the 
//value of variable in place of %d
console.log('4: Value of val is : %d', val);
//replacing a string in place of %s
console.log('5: %s', 'this will be printed after 5');
//concatinating in console		
console.log("6 : str = " + str);