const { makeData } = require('./index.js');

let data = makeData(3);
console.log(data);

let data2 = makeData(4,function(x) {
    return x+3;
});
console.log(data2);

let data3 = makeData(4,function(x) {
    return 2*x;
});
console.log(data3);
