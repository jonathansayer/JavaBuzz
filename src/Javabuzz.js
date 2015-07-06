
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

  Javabuzz.prototype.says = function(number) {
     if (this.isDivisibleByFifteen(number)) {
      return "JavaBuzz";
    }
    else if (this.isDivisibleByThree(number)) {
      return "Java";
    }
    else if (this.isDivisibleByFive(number)) {
      return "Buzz";
    } else {
    return number;
  }
  };

  // Javabuzz.prototype.says = function(number) {
  //   if (this.isDivisibleByFifteen(number)) {
  //     return "JavaBuzz"
  //   }
  // }


};



