import someScript2 from './script-2.js';
console.log('import works :', someScript2)

const f = () =>{ console.log('arrow function work')}
f()

const a = {'a': 'a'};

// works here !!!!
const b = {
  'b':'b',
  ...a
};
console.log(b)

class A {
  constructor() {
    console.log('hello class')
  }
}
const k = new A()

export default 'exports from script-1.js'

