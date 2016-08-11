'use strict'

/*

Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage:

binaryToDecimal("010") => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.

*/

module.exports = function(str) {

  // var arr = str.split('').reverse();

  return str.split('').reverse().reduce(function(prev, cur, idx){
    return prev + (cur * Math.pow(2, idx));
  }, 0);
}
