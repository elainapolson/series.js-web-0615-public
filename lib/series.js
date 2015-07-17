'use strict';

var Series = function(digits){
  this.digits = digits.toString().split("").map(function(t){return parseInt(t)});

  Series.prototype.slices = function(number) {
    var array = [];
    var digits = this.digits;
    if (this.digits.length < number) {
      throw new Error('Slice size is too big.')
    } else {
      digits.forEach(function(digit, i) {
        array.push(digits.slice(i, (i + number)))
      })
      array.forEach(function(smaller_array) {
        if (smaller_array.length < number) {
          var index = array.indexOf(smaller_array);
          array.splice(index);
        }
      })
      return array; 
    }
  }
};