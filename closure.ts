function counter(){
    let number = 0;
    function add(){
        number ++ ;
        return number;
    }
    return add;
}

let a = counter();
// let b = a() ;

console.log(a)
// console.log(b)

//  ya be ravesh dige mitonim 2 bar call konim:
let c = counter()()
console.log(c)

let increament = counter()
increament()
increament()
const result = increament()
console.log(result)
