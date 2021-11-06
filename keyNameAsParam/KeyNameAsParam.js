// makes an object with obj[key] = 'value' prior to es6
function makeOldObj(name) {
  const key = name;
  const obj = {};
  obj[key] = 'myName';
  return obj;
}
const sammy = makeOldObj('sam');
console.log(sammy);

// makes an object with return { [key] : 'value' }
function makeES6Obj(name) {
  return {
    [name]: 'lol',
  };
}
const mike = makeES6Obj('mikey');
console.log(mike);

// source: https://www.codegrepper.com/code-examples/javascript/key+name+as+parameter+js
