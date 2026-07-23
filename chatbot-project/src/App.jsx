import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { SelectCharacter } from './components/SelectCharacter';
import ChatMessages from './components/ChatMessages';
import { Chatbot} from 'supersimpledev';
import './App.css'

export const botResponses = 
{
  // Greetings & Identity
  "hello": "Hello! How can I help you today?",
  "hi": "Hi there! What would you like assistance with?",
  "who are you": "I'm your Study Buddy assistant. I can help with studying, productivity, and simple tasks.",

  // Well-being
  "i am sick": "I'm sorry you're not feeling well. Make sure to rest, stay hydrated, and consider speaking with a healthcare professional if needed.",
  "i am tired": "It sounds like you need a break. Try resting for a while, drinking some water, or taking a short walk.",
  "help me study": "I'd be happy to help. What subject or topic would you like to study?",

  // Food
  "are you hungry": "I don't eat, but I'd be happy to help you find a recipe or meal idea.",
  "what is your favorite food": "I don't have personal preferences, but pizza is a popular choice among many people.",

  // General Conversation
  "how are you": "I'm doing well and ready to help.",
  "thank you": "You're welcome! Let me know if you need anything else.",
  "thanks": "Happy to help!",

  // Productivity
  "start timer": "Timer feature coming soon. How many minutes would you like to focus?",
  "show tasks": "Your task list is currently empty.",
  "motivate me": "Progress comes from consistent effort. Focus on the next small step.",

  // Sign-offs
  "bye": "Goodbye! Have a productive day.",
  "goodnight": "Goodnight! Get some rest and see you next time."
}


function App(){
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  const [selectedCharacter, setSelectedCharacter] = useState("choco")
  useEffect(() =>{
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, chatMessages);
  useEffect(() =>{
    Chatbot.addResponses(botResponses);
  },[])
  return(
    <div className='app-container'>
      {
        chatMessages.length === 0 &&
        <p className="welcomeMsg">Welcome to chatbot project! Send a message using text below.</p>
      }
      <SelectCharacter selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />
      <ChatMessages 
        chatMessages={chatMessages}
        selectedCharacter={selectedCharacter}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
