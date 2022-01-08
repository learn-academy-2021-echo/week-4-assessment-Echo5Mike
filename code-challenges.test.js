// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('colorArray', ()=> {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    output1 = ["yellow", "blue", "pink", "green"]

    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    output2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    it ('takes in an array, removes the first item from the array and shuffles the remaining content', ()=> {
        expect(colorArray(colors1)).toEqual(expect.arrayContaining(output1))
        expect(colorArray(colors2)).toEqual(expect.arrayContaining(output2))
    })
})
// my test needs a expect.any, .toContain , expect.arrayContaining(array)
// my function needs to take in an array of strings
    //colorArray()=>
    // function needs to remove first item from array.... unshift or shift to remove firs item array.
    // after first item is removed the strings in the array need to be shuffled
    // once shuffled I need to revist my test to see if it passed
    
const colorArray = (array) =>{
    let scrambledArray = array.slice(1).sort(() => Math.random()-0.5)
    //I looked up the Math.random()-0.5), 
    return scrambledArray
}


// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
