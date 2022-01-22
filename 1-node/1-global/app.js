const fs = require('fs'); // module js

console.log(global);
global.hello = () => {
  global.console.log('hello');
};

global.hello();
hello();
