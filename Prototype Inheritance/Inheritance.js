var X = function(j) {
  this.i = 0;
  this.j = j;

  //Should take out this method outside as it will print on all copy of the object
  //   this.getJ = function() {
  //     return this.j;
  //   };
};

X.prototype.getJ = function() {
  return this.j;
};

var x1 = new X(1);

var x2 = new X(2);

console.log(x2.getJ());
