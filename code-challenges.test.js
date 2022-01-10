// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

// describe("areYouHungry", () => {
//     it("returns eat food or keep working based on input", () => {
//       expect(areYouHungry("yes")).toEqual("eat food")
//       expect(areYouHungry("no")).toEqual("keep working")
//     })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('colorArray', ()=> {
    colors1 = ["purple", "blue", "green", "yellow", "pink"]
    output1 = ["yellow", "blue", "pink", "green"]
    colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    output2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it ('takes in an array, removes the first item from the array and shuffles the remaining content', ()=> {
        expect(colorArray(colors1)).toEqual(expect.arrayContaining(output1))
        expect(colorArray(colors2)).toEqual(expect.arrayContaining(output2))
    })
})
// // my test needs a expect.any, .toContain , expect.arrayContaining(array)
// // my function needs to take in an array of strings
//     //colorArray()=>
//     // function needs to remove first item from array.... unshift or shift to remove firs item array.
//     // after first item is removed the strings in the array need to be shuffled
//     // once shuffled I need to revist my test to see if it passed
    
const colorArray = (array) =>{
    let scrambledArray = array.slice(1).sort(() => Math.random()-0.5)
    //I looked up the Math.random()-0.5), I still don't knwo why the -.05 works.
    return scrambledArray
}


// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.


















// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("miniMax", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    var output1= [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    var output2= [5, 109]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
      expect(miniMax(nums1)).toEqual(output1)
      expect(miniMax(nums2)).toEqual(output2)
    })
})

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
// We are going to need a test
//the function const miniMax (array) =>{}
    //takes in array of numbers and sorts them.
    //it will then return a NEW array of the smallest and largest number
    // maybe a .push into new array first array 
    //I will need to git find a method that will get the last value in the array.
    // look into Math.min()/Max

/// below is my refactored function using Math.min()/Max
// b) Create the function that makes the test pass.
const miniMax = (array) =>{
    let newArray = []
    newArray.push(Math.min(...array))
    newArray.push(Math.max(...array))
    return newArray
}














// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
//STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDouble", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    let output3 =  [3, 7, 10, 5, 4, 8, 2, 1]
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
      expect(noDouble(testArray1, testArray2)).toEqual(output3)
    })
})
// let noDouble = (array1, array2) =>{
//     let newArray = [...array1,...array2].sort((a,b)=> a-b)
//     console.log(newArray);
//     emptyArray = []
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i] > newArray[i-1]){
//             emptyArray.push(newArray[i])
//         }
//     }return emptyArray
// }
// b) Create the function that makes the test pass.
let noDouble = (array1, array2) =>{
    let set = new Set([...array1,...array2])
    let newArray = [...set]
    return newArray
}
