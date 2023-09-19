// ------------------The var is hoisted to the top of the global scope
console.log(x);

var x = 20;

console.log(x);

// ------------------//Function declaratio  is hoisted to the top of the global scope

hello('Melina')

function hello(name: string){
    console.log(`Hello ${name}`)
}

// ------------------//