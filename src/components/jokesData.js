export default [
    {
 //     setup: "I got my daughter a fridge for her birthday.",  // It just so happens that I am using the same name for the prop that I'am passing to my Joke.js component (props.setup) and the 
        setup: "I got my daughter a fridge for her birthday.",      // object property that I chose in ny actual data here in this file (setup:). However it's not always going to be the case that these are the same.
        punchline: "I can't wait to see her face light up when she opens it."   // If, for example, instead of "setup:" there will be "question:" then, over
    },              // in App.js I will still say "setup=" because I'm the one that gets to choose what the prop name for my component is but then my actual data
                    // would need to change to "joke.question":      <Joke setup={joke.question} punchline = {joke.punchline}/> 
                    // https://www.youtube.com/watch?v=bMknfKXIFA8 (4:02:20)
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]