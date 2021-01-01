# BinaryDataMaker


### What it does:
You can create any binary dataset following any logic rule. 
<br/><br/><br/>
## Node Install
```js
npm i binary_data_maker
```


# Getting Started
require the function this way:
```js
const { makeData } = require('binary_data_maker');
```

Create a dataset this way, specify the number of bits your binary numbers are going to have:
```js
let data = makeData(4);
console.log(data);
```
this outputs:
```js
[
  { input: [ 0, 0, 0, 0 ], target: [ 0, 0, 0, 1 ] },
  { input: [ 0, 0, 0, 1 ], target: [ 0, 0, 1, 0 ] },
  { input: [ 0, 0, 1, 0 ], target: [ 0, 0, 1, 1 ] },
  { input: [ 0, 0, 1, 1 ], target: [ 0, 1, 0, 0 ] },
  { input: [ 0, 1, 0, 0 ], target: [ 0, 1, 0, 1 ] },
  { input: [ 0, 1, 0, 1 ], target: [ 0, 1, 1, 0 ] },
  { input: [ 0, 1, 1, 0 ], target: [ 0, 1, 1, 1 ] },
  { input: [ 0, 1, 1, 1 ], target: [ 1, 0, 0, 0 ] },
  { input: [ 1, 0, 0, 0 ], target: [ 1, 0, 0, 1 ] },
  { input: [ 1, 0, 0, 1 ], target: [ 1, 0, 1, 0 ] },
  { input: [ 1, 0, 1, 0 ], target: [ 1, 0, 1, 1 ] },
  { input: [ 1, 0, 1, 1 ], target: [ 1, 1, 0, 0 ] },
  { input: [ 1, 1, 0, 0 ], target: [ 1, 1, 0, 1 ] },
  { input: [ 1, 1, 0, 1 ], target: [ 1, 1, 1, 0 ] },
  { input: [ 1, 1, 1, 0 ], target: [ 1, 1, 1, 1 ] }
]
```
<br/><br/>

# Specify a logic rule
You an also create any dataset with other math transformations. Just define it in a function:

```js
let data = makeData(4,function(x) {
    return 2*x;
});
console.log(data);
```

this outputs: 
```js
[
  { input: [ 0, 0, 0, 0 ], target: [ 0, 0, 0, 0 ] },
  { input: [ 0, 0, 0, 1 ], target: [ 0, 0, 1, 0 ] },
  { input: [ 0, 0, 1, 0 ], target: [ 0, 1, 0, 0 ] },
  { input: [ 0, 0, 1, 1 ], target: [ 0, 1, 1, 0 ] },
  { input: [ 0, 1, 0, 0 ], target: [ 1, 0, 0, 0 ] },
  { input: [ 0, 1, 0, 1 ], target: [ 1, 0, 1, 0 ] },
  { input: [ 0, 1, 1, 0 ], target: [ 1, 1, 0, 0 ] },
  { input: [ 0, 1, 1, 1 ], target: [ 1, 1, 1, 0 ] }
]
```
Since at the end target numbers are going to need more than 4-bit of space, the array stops at the biggest possible number in 4-bit space.
