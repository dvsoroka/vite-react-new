import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    
    
    /**
     * https://scrimba.com/learn/learnreact/conditional-rendering-practice-co7a3413c9530c3e2804c4916
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
        </div>
    )
}
