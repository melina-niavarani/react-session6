// 1.  function declaration

function hello(name){
    return "salam " + name;
}

const b = hello;
const output = b("manya")
console.log(output);


// 2. function expression (do not have a hoisting)

const hi = function(name){
    return `Hi ${name}`;
}

const output2 = hi("melina")
console.log(output2);


// 3. Arrow function expresion (or anynomus function)

const greeting = (name) => {
    return 'hello ' + name ;    // no need to use curly braces here, it will automatically add them for us
}

const output3 = greeting("nariman")
console.log(output3)


// 4. function constructor

