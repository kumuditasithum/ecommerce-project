import RobotProfileImage from '../assets/robot.png';
import ChocoProfileImage from '../assets/choco.webp';
import UserProfileImage from '../assets/user.png';
import './chatMessage.css';

const characters = {
  robot: RobotProfileImage,
  choco: ChocoProfileImage,
};

export function ChatMessage({message, sender, time, selectedCharacter}){
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
 const profileImage = characters[selectedCharacter];
  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'chatbot' && (
        <img src={profileImage} className="chat-message-profile" />
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