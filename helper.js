/**
 * an Arrow function example
 */
const sum =(a, b) =>{
    const sum = a+b;
    console.log(`the sum of ${a} and ${b} is: ${sum}`);
    return sum;   
}

const sub = (a,b) => a-b;

module.exports = {sum,sub};

// console.log("process", process)

/**the arrow functions dont have there own context,
 *  if you are using this keyword then this will point to enclosing context 
 * look into the use of this keyword, in such scenarios do we need to use the orignal js function keyword
 * to define a method?
 * */
