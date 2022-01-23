function hello() {
  console.log(this);
  console.log(this === global); //true
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('------clas------');
    console.log(this);
    console.log(this === global); // this = class
  }
}

const a = new A(3);
a.memberFunction();

console.log('--------global scope----------');
console.log(this); //{}
console.log(this === module.exports); //true
