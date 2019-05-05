/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>

const PI = 2.99;

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3));
console.log(PI);

// Bundle all necessary files with this command:
// `tsc --outFile notes/5-namespaces.js notes/circleMath.ts notes/rectangleMath.ts notes/5-namespaces.ts`

// By using reference tag, this command needs to be used:
// `tsc notes/5-namespaces.ts --outFile notes/5-namespaces.js` 