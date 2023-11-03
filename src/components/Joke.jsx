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
            {props.setup && <h3>Setup:  {props.setup} </h3>} 
            {isShown && <p>{props.punchline}</p>} 

            {/* <p style={styles}>Punchline:  {props.punchline}</p> */}

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