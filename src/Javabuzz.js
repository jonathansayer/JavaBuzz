
 var Javabuzz = function (){

  Javabuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisbleBy(number,3);
  };

  Javabuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisbleBy(number,5);
  };

  Javabuzz.prototype.isDivisibleByFifteen = function(number) {
    return this._isDivisbleBy(number,15);
  };


  Javabuzz.prototype._isDivisbleBy = function(number,divisor){
    return (number % divisor === 0);
  };


};



