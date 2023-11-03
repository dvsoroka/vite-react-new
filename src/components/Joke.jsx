import React from "react";
import '../../style.css'

export default function Joke(props) {
    /**
     * Challenge (https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e):
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     * - Only display the punchline paragraph if `isShown` is true
     */
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }


    const styles = {
        display: isShown ? "block" : "none"
    }
 /*  https://stackoverflow.com/questions/1992114/how-do-you-create-a-hidden-div-that-doesnt-create-a-line-break-or-horizontal-sp
 To hide element:

 <div id="divCheckbox" style="display: none;">
visibility: hidden hides the element, but it still takes up space in the layout.

display: none removes the element completely from the document, it doesn't take up any space.
 
*/


    return (
        <div>
            {props.setup && <h3>{props.setup} </h3>} 
{/*  Using local state "isShown" we can decide wether the DOM element will be displayed or not :
    first: we surround everything in curly braces and that allows us to put a JavaScript expression in here
            <p>{props.punchline}</p>
    in our case we are going to say: "if isShown is true AND this paragraph":
*/}
            {isShown && <p>{props.punchline}</p>}   
{/* in React anytime we have an element on the screen that we want to display if something is true or completely hide 
or not even render to the page if that thing is "false"; in the line above here with the "props.setup" we realized that 
some jokes were just one-liners they didn't have a "setup" and a "punchline" they just were the "punchline" and in our case 
we looked at our incoming  props.setup and said "if that's faulsey, then don't display this <h3> at all". 
Similarly wit our local state of "isShown" we can say: "I only want to display or render this paragraph if isShown is true".
By doing that we can have a toggle button that when it's clicked will change "isShown" of this individual <Joke /> component
to "true" and therefore it will display our paragraph. More specifically when I click this button React will re-render this 
component because its state has changed and therefore, when it's running the "return (<div> ...)" value again and determining 
what should actually be placed on the screen "isShown" is now "true" and therefore this expression {isShown && <p>{props.punchline}</p>} 
gets run and put onto the page for us. 
    So as recap:
    In React when you have an element that you either  want to display or not display at all, using the 'AND' logical operator "&&"
is a really concise and great way to do that.

https://www.youtube.com/watch?v=bMknfKXIFA8 (7:35:20)
*/}


            {/* <p style={styles}>{props.punchline}</p> */}

            {/* <button 
                onClick={() => {
                    console.log(`Joke # ${props.id} isShown: ${isShown}`)
                    setIsShown(prevState => !prevState)}}
            
            >{isShown ? "TRUE" : "FALSE"} */}
            <button onClick={toggleShown}>
                Show Punchline
            </button>
            <hr />
        </div>
    )  
}


const cond1 = true
const cond2 = false

if (cond1 && cond2) {
    // this code will NOT run
}

if (cond1 && console.log("Hello there")) {
     // this code will run while cond1 === true
}

// In JokesData.js we initially had lines like:
//     setup: "I got my daughter a fridge for her birthday.",  // It just so happens that I am using the same name for the prop that I'am passing to my Joke.js component (props.setup) and the 
// But if there would be "question:" as follows
//  question: "I got my daughter a fridge for her birthday.",  // object property that I chose in my actual data here in this file (setup:). However it's not always going to be the case that these are the same.
// If, for example, instead of "setup:" there will be "question:" then, over
// in App.js I will still say "setup=" because I'm the one that gets to choose what the prop name for my component is but then my actual data
// would need to change to "joke.question":      <Joke setup={joke.question} punchline = {joke.punchline}/> 
// https://www.youtube.com/watch?v=bMknfKXIFA8 (4:02:20)


/*

export default function Joke(props) {
    console.log(props.comments) 
 //  console.log(props.comments[1].author)    
    return (
        <div>
//           {props.setup && <h3>Setup: - {props.setup} </h3>}  //* if props.setup is a truthy value, then render thing on the rigth side of my "AND" ("&&") operator; if it's a faulsy value, it wouldn't render anything at all 
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
            <p>Punchline: - {props.punchline} </p>
            <span className="up">upvotes: {props.upvotes}</span> ||| <span className="down">downvotes: {props.downvotes}</span>
            <div className="comments">{props.comments}</div>    
    //          <div>{props.comments[0].title}</div>   
            <span> { (props.isPun === true) && <h4>Joke is pun </h4> }</span>
            <hr />
        </div>
    )
    
}

*/