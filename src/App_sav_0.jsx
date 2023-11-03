import React from 'react'
import Joke from './components/Joke'
import jokesData from './components/jokesData'

export default function App() {
  //console.log(jokesData)        
    const jokeElements = jokesData.map(joke => {
      return <Joke setup = {joke.setup} punchline = {joke.punchline} />     
     }
   )
   return (
      <div>
          {jokeElements}
      </div>
   )
  }

// https://www.youtube.com/watch?v=bMknfKXIFA8 (4:02:20)

//Combining what we've learned with .map and with creating an array of JSX elements I can put those two conceps together 
// What I'm going to do is create a variable, let's call it "jokeElements = []" and this is going to be not an array that I'm defining right now,
// But instead, the array that gets returned when I call jokesData.map() and inside of my .map() I'm going to take a look at each one of my 
/* "joke" objects:
Array(5)
  0: {setup: 'I got my daughter a fridge for her birthday.', punchline: "I can't wait to see her face light up when she opens it."}
  1: {setup: 'How did the hacker escape the police?', punchline: 'He just ransomware!'}
  2: {setup: "Why don't pirates travel on mountain roads?", punchline: 'Scurvy.'}
  3: {setup: 'Why do bees stay in the hive in the winter?', punchline: 'Swarm.'}
  4: {setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!"}
length: 5
[[Prototype]]: Array(0)

// and what I can return a Joke component: 
 
const jokeElements = jokesData.map(joke => {
  return <Joke />                     \
})                                     \ 
                                        \
// However, I can pass this individual "joke" object to my <Joke /> component
/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/
/* Each of the "joke" objects that I am looking at inside of my .map() is each of these objects that we see in the jokesData.js file:
export default [
    {
        setup: "I got my daughter a fridge for her birthday.",   
        punchline: "I can't wait to see her face light up when she opens it."   
    },       
    . . .
  ]

// so they haave a "setup" property  and a "punchline" property which means over here in the <Joke />  I can say: my <Joke  /> has a "setup" prop
// and it has to be spelled exactly this way, because our Joke component (described in Joke.jsx file) is expecting props.setup 

const jokeElements = jokesData.map(joke => {
    return <Joke setup= />

// this "setup" prop will be equal to: and then I need  to use my curly braces {} beacuse I'm leaving jsx and going into JavaScript,  we'll say {joke.setup}

const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} />

// It just so happens that I am using the same name for the prop that I'am passing to my Joke.js component (props.setup) and the 
// object property that I chose in my actual data here in this file (setup:). However it's not always going to be the case that these are the same.
// If, for example, instead of "setup:" there will be "question:" then, over
// in App.js I will still say "setup=" because I'm the one that gets to choose what the prop name for my component is but then my actual data
// would need to change to "joke.question":      <Joke setup={joke.question} punchline = {joke.punchline}/> 
// and then I will need my punchline = {joke.punchline} again because the actual data has a "punchline" property in each of these "joke" objects

export default function App() {      
  const jokeElements = jokesData.map(joke => {
    return <Joke setup = {joke.setup} punchline = {joke.punchline} />    
  })
  return (
    <div>

    </div>
  )
// now I'm not quite done, I can hit save nothing going to show up on the screen and that's because I'm still returning an empty <div> in my App component
// the last thing I need is jaust to render my joke elements:

return (
    <div>
      {jokeElements}
    </div>
//
*/







//import './App.css'

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

/*
export default function App() {

  return (
    <div>
      <Joke
        comments = {["comment_1", "comment_2"]}
        isPun = {false}
      />
      <Joke
        punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally." 
        upvotes = {3 + 7}
        downvotes = {12 + 4}  
        comments = {["comment_1", "comment_2"]}
        isPun = {true}

      />
      <Joke 
        setup = "I got my daughter a fridge for her birthday."
        punchline = "I can't wait to see her face light up when she opens it." 
        upvotes = {2 + 5}
        downvotes = {11 + 6}
        comments = {["comment_3", "comment_4"]}
        isPun = {false}
      />
      <Joke 
        setup = "How did the hacker escape the police?" 
        punchline = "He just ransomware!"
        upvotes = {13 + 7}
        downvotes = {32 + 4}
        comments = {["comment_7", "comment_6"]}
        isPun = {true}
      />
      <Joke
        setup = "Why don't pirates travel on mountain roads?"
        punchline = "Scurvy"
        upvotes = {1 + 7}
        downvotes = {3 + 4}
        comments = {["comment_8", "comment_9", "comment_10"]}
        isPun = {true}
      />
      <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
                isPun={true}
      />
      <Joke
        setup = "What's the best thing about Switzerland?"
        punchline = "I don't know, but the flag is a big plus!"
        upvotes = {2 + 7}
        downvotes = {2 + 4}
        comments = {["comment_8", "comment_9", "comment_10"]}
        isPun = {false}
      />
    </div>
  )
}

*/


{/*       comments = {[{author: "Me", body: "comment_11", title: ""}]}  

          comments={[{author: "Dima", body: "What a comment!", title: "Bravo"}]}

          comments = {[{author: "Me", body: "comment_01", title: "New"}, {author: "Other", body: "comment_02", title: "Awesome"}]}  
*/}




{/*
Challenge: turn the strings in the array into <h3> elements instead
*/


/*
export default function App() {
//  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

  const colors = 
      [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>, 
        <h3>Green</h3>, 
        <h3>Blue</h3>, 
        <h3>Indigo</h3>, 
        <h3>Violet</h3>
      ]                       //      Warning: Each child in a list should have a unique "key" prop.
  return (
      <div>
          {colors}
                  /* It's kind of React took the elements of the array and just copied and pasted them to the sreen, of course without coomas:
            <h3>Red</h3>,
            <h3>Orange</h3> 
            <h3>Yellow</h3>
            <h3>Green</h3>
            <h3>Blue</h3>
            <h3>Indigo</h3>
            <h3>Violet</h3>              
                  
        React can render the array of JSX elements. So that allow us to instead of hardcoding 
      our data directly into our components like we're did above, instead we can get data from outside of our little system,
      map over it and render a new component for every peace of data. In the next example we'll see how jokes.js file which has essentially
      the same thing as jokes.md but in the  JavaScript array of objects. Then we'll get all those in and map over them,
      create an array of JSX elements and then render those to the screen.
                  
      </div>
  )
}

*/}


// React renders arrays
/*
export default function App() {
  console.log(jokesData) //   [{setup: "I got my daughter a fridge for her birthday.", punchline: "I can't wait to see her face light up when she opens it."}, {setup: "How did the hacker escape the police?", punchline: "He just ransomware!"}, {setup: "Why don't pirates travel on mountain roads?", punchline: "Scurvy."}, {setup: "Why do bees stay in the hive in the winter?", punchline: "Swarm."}, {setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!"}]
  return (
      <div>
          
      </div>
  )
}
*/
// Now combining what we've just learned with .map and with creating the array of JSX elements, I can put those two consepts together:
// What I'm going to do is create a variable, let's call it "jokeElements" an this is going to be not an array that I'm defining right now, 
// but instead the array, tht's returned when I call jokes.map() :
// const jokeElements = jokesData.map(joke => {return <Joke />})
// inside of my .map() I'm going to look at each one of my "joke" objects and I'm going to return <Joke /> component.
// However, I can pass the data  from this individual joke object to my Joke component 
/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again


export default function App() {
  const jokeElements = jokesData.map(joke => {
    return  <Joke setup={joke.question} punchline = {joke.punchline}/>     
    }
  )
  return (
    <div>
        {jokeElements}
    </div>
  )
}


*/