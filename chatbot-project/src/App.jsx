import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot} from 'supersimpledev';
import './App.css'

export const botResponses = {
  // --- Greetings & Identity ---
  "hello": "Good evening, my cute student! Choco-sensei is here. Have you been behaving yourself today? ♥",
  "hi": "Oh, hello there! Did you come all the way to the health room just to see me? ♥",
  "who are you": "I'm Yuzuki Choco, Hololive's resident academy nurse! But to you, I'm just your favorite sensei. Now, tell me what's bothering you~",
  
  // --- School / Nurse Theme ---
  "i am sick": "Oh no! Let sensei take your temperature. Rest your head right here... don't worry, you're safe in my health room. ♥",
  "i am tired": "Aw, you've been working so hard, haven't you? Good job! How about a nice, relaxing late-night stream to help you unwind?",
  "help me study": "Of course! Let's do some 'Giri Giri' lessons. But if you get distracted looking at me, you'll have to stay after class~",

  // --- Cooking & Food (Her specialty) ---
  "are you hungry": "Ara? I'm always ready to cook something delicious for my students! What are you craving tonight? I make an amazing omelette rice!",
  "what is your favorite food": "I absolutely love meat, especially a good, juicy steak! Cooking for people makes me so happy.",

  // --- Flirty / Playful Responses ---
  "i love you": "Ara ara~ That's a very bold confession! I love all of my cute students, but you might just be getting a little extra special treatment today. ♥",
  "marry me": "Fufu, aren't you a bit too young to be proposing to your teacher? Let's start with you finishing your homework first, okay?",
  
  // --- Sign-offs ---
  "bye": "Leaving already? Don't stay up too late, okay? See you in next class, my cute student! Va-bye~ ♥",
  "goodnight": "Goodnight~ Sweet dreams. Don't forget to dream about sensei, okay? Va-bye! ♥",
  'Who is Deeshan' : "Deeshan kiyanne amu modayek"
};
function App(){
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
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
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
