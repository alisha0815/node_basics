// node app.js ==> run console in terminal
// 
console.log('logging');
console.clear();

// log level
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

// assert - print when not true
console.assert(2 === 3, 'not same!'); //Assertion failed: not same!
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time  성능 확인
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}

console.timeEnd('for loop');

//  counting 함수 호출된 횟수
function a() {
  console.count('a function');
}
a();
console.countReset('a function'); // count 초기화
a();

//  trace (useful for debugging)
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}

f1();
