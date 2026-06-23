import { useState } from 'react'
import { Chatbot} from 'supersimpledev';
import './ChatInput.css';
import dayjs from 'dayjs';

const time = dayjs().valueOf();


export function ChatInput({chatMessages, setChatMessages}) {
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  function enterEvent(){
    event.key === 'Enter' && sendMessage();
    event.key === 'Escape' && setInputText('');
  }
  function saveInputText(event){
    setInputText(event.target.value);
  }
  function clear(){
    localStorage.setItem("messages", JSON.stringify([]));
  }
  async function sendMessage(){
    if(isLoading || inputText === ''){
      return;
    }
    setIsLoading(true);
    const newChatMessages = [
        ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma')
      }
    ];
    setInputText('');
    setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src="loading-spinner.gif" className="loadingGif"></img>,
        sender: 'chatbot',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma')
      } 
    ])

    const response = await Chatbot.getResponseAsync(inputText);
  
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'chatbot',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma')
      } 
    ]);

    setInputText('');
    setIsLoading(false);
  }
  return(
    <div className='chat-input-container'>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={enterEvent}
        className='chat-input'
      />
      <button
        onClick={sendMessage}
        className = 'send-button'
      >Send</button>
      <button onClick={clear}
      className='clear-button'>
        Clear
      </button>
    </div>
  );
}