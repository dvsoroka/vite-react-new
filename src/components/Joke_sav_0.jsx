import React from "react";
import '../../style.css'

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup:  {props.setup} </h3>}  
            <p>Punchline:  {props.punchline}</p>
            <hr />
        </div>
    )  
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