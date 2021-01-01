const { makeData } = require('./index.js');

// Example 1: Creating a 3-bit +1 Counting dataset.
    let data = makeData(3);
    console.log(data);

// Example 2: Create a 5-bit 2x logic rule data.
    // let data = makeData(5,function(x) {
    //     return 2*x;
    // });
    // console.log(data);


// Example 3: Create a 6-bit x^2 logic rule data.
    // let data = makeData(6,function(x) {
    //     return x*x;
    // });
    // console.log(data);
