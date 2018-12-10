require('@babel/register')({
  presets: [
    [
       "@babel/env",
       {
         // module: false,      // <--- typo, not module
         modules: "commonjs",   // <--- must transpile to commonjs module
         targets: { "node": process.versions.node },
         useBuiltIns: "usage"   // <--- not sure if this work
       }
    ]
  ]
});

const f = () =>{ console.log('arrow function work')}
f()

 /*
  * does not work here, but works in the
  * required file script-1.js
  *
  * const a = {'a': 'a'};
  *
  * const b = {
  *   'b':'b',
  *   ...a
  * };
  * console.log(b)
  */

class A {
  constructor() {
    console.log('hello class')
  }
}
const k = new A()

// import someScript from  './script-1.js'; // <-- import does not work here but will work in ./script-1.js
require( './script-1.js')

