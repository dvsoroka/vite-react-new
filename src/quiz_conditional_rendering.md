1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort

(Conditional rendering is a way to describe wether to display an element on a web page or not 
depending on the value of certain variable or state)


2. When would you use &&?
When you want to either display something or NOT display it

(I would use && if there is a dependance on one one certain condition)


3. When would you use a ternary?
When you need to decide which thing among 2 options to display

(When there exists two options)


4. What if you need to decide between > 2 options on
   what to display?
   
(I will use multiple "if"-statemants or a "switch - case" statement)

Use an `if...else if... else` conditional or a `switch` statement


function App() {
    return (
        <div>{____ && <SomeJSXElement />}</div>
    )
}

function App() {
    return (
        <div>{____ ? <SomeJSXElement /> : <SomeOtherElement>}</div>
    )
}

But if we use "if"-statement, I can't do my "if" inside the JSX directly like 

// WRONG!:
//  function App() {
//    return (
//        <div>{if()}</div>
//    )
//  }

instead, I have to go up above and set a variable and then use my "if"... and set some variable to
some JSX  and then return this variable: 

function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        ...
    } else {
        ...
    }
    return (
        <div>{someVar}</div>
    )
}
