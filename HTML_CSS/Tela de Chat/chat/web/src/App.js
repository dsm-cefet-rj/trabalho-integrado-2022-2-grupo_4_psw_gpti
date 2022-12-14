import Chat from './html/chat';
//CSS//
import './html/Chat.css';
//HTML//
import { Nav } from './html/chat';
//nav do html//
import './html/mobileChat';


function App() {
  render()
  return (
   
   <div> 
      <Nav/>
      <Chat/>
    </div>
  ); 
}

export default App;


//const chatButon=document.querySelector("chat_button");
//const chatContent= document.querySelector(".chat_one");
//const chat=newText("chatButton,chatContent");
//chat.display();
//chat.toggle(false,chatButton);
