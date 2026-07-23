import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';



function useAutoScroll(dependencies){
    const containerRef = useRef(null);
        useEffect(() => {
        const containerElement = containerRef.current;
        if(containerElement){
        containerElement.scrollTop = containerElement.scrollHeight;
        }
    },dependencies); 
    return containerRef;
}
function ChatMessages({chatMessages, selectedCharacter}){
  const chatMessagesRef = useAutoScroll([chatMessages]);
  useAutoScroll().dependencies;
  return(
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (<ChatMessage 
                  message = {chatMessage.message}
                  sender = {chatMessage.sender}
                  key = {chatMessage.id}
                  time = {chatMessage.time}
                  selectedCharacter={selectedCharacter}
                />);
      })}
    </div>
  );
}

export default ChatMessages;