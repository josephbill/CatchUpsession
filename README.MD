# Context in JavaScript (this)
the context generally refers to the value of the this keyword in a function.
The value of the this keyword is determined by how a function is called.
In functional/asynchronous programming context can refer to the state or environment in which the operation is executed. i.e. where variables are defined -> scoping (global/local scope)

..global scope (not bounded within any code block)

let y  = "" 
function nameExample(){
   ....scope
   ....local scope
   let x = ""
   
}

nameExample()


## Asynchronous Programming 
Benefits : 
1. Non-blocking execution
2. Responsive User Interfaces
3. Efficient Resource Utilization.
4. Concurrency. : multiple tasks are executed over overlapping time periods 
5. Improved performance. 
6. Real time applications.

Features
1. Promises : then().catch()
2. Async/Await syntax 
3. Callback functions. 

READABLE / MAINTAINABLE WAY (MODULAR AS POSSIBLE(REUSABLE))