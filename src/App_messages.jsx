import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    
    
    /**
     * https://scrimba.com/learn/learnreact/conditional-rendering-practice-co7a3413c9530c3e2804c4916
     * Challenge #1:
     * - Only display the <h1> below if there are unread messages
     */
    // return (
    //     <div>
    //         {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
    //     </div>
    // )

    /**
     * Challenge #2:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
        return (
            <div>
                {
                    messages.length === 0 ? 
                    <h1>You're all caught up!</h1> : 
                    <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message" }</h1>

//myVariant         <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>  
                    
                }
            </div>
        )

}
