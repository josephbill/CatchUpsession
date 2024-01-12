// 1. Context in regular 
let name ="Joseph"
function greet(){
    return console.log("Hello " + this.name)
}
console.log(greet())

// const person = {
//     name: "Alice",
//     sayHello: greet
// }
// person.sayHello(); 

// context in arrow functions 
const obj = {
    value: 42,
    getValue: function () {
        return () => this.value;
    }
}

const getval = obj.getValue()
console.log(getval())

// Context in Event Listeners 
// const button = document.getElementById('clickMe');
// button.addEventListener('click',function(){
//     console.log("Button clicked by " + this.id)
// })
//this refers to the element that triggered the event


// mouse click, hover, keyup, keydown, submit(forms)

function nameof(a,b,c){
    console.log(a,b,c)
}

nameof(5,6)

function outerfunction(){
    let outerVariable = "I am an outer variable"

    function innerFunction(){
        let innerVariable = "I am an inner variable"
        console.log(outerVariable)
        // console.log(innerVariable)
    }
    console.log(innerVariable)
    innerFunction()
}

outerfunction()
//  1. execution context is created for outerfunction 
// 2. execution context is created for the innerfunction as well