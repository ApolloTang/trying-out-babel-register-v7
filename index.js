require('@babel/register')({
  presets: [
    [
       "@babel/env",
       {
         module: false,
         targets: { "node": process.versions.node },
         useBuiltIns: "usage"
       }
    ]
  ]
});

const f = () =>{ console.log('arrow function work')}
f()

const a = {'a': 'a'};

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


