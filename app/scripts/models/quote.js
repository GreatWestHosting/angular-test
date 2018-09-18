'use strict';

function Quote () {
  this.rate = 19.50;
  this.GST = function () {return this.rate * this.hours * this.days * 0.05; }; 
  this.total = function() {
    var total = this.rate * this.hours * this.days + this.GST();
    return total;
  };
}
