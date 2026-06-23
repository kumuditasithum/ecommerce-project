import RobotProfieImage from '../assets/choco.webp';
import UserProfileImage from '../assets/user.png';
import './chatMessage.css';
export function ChatMessage({message, sender, time}){
  //const message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;

  /*if(sender === "chatbot"){
    return(
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }*/
  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'chatbot' && (
        <img src={RobotProfieImage} className="chat-message-profile" />
      )}
      <div
        className="chat-message-text">
        {message}
        <div className='time'>{time}</div>
        
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
      
    </div>
  );
}