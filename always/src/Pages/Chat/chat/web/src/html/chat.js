import React from 'react';

const Nav = function() {
      return <header id="header">
      <img id="logo" src={require('./assets/Logo.jpeg')}/>
      <nav id="nav">
         <button id="menuMobile">
            <span id="botaoMenu"></span>
         </button>
         <ul id="menu">
            <li><a href="/">Cardápio</a></li>
            <li><a href="/">Voltar para pedidos</a></li>
         </ul>
      </nav>
   </header>
   }

   export {Nav}

class Chat extends React.Component {
    render() {
       return <div className="zero">
   <div className= "one" >
      <div>
         <div className="circulo">
            <img src={require('./assets/bugui.png')}/>
         </div>
         <h2 className="one"> Atendimento ALways</h2>
      </div>
      <div className="two" >
         <div className="three">
            <div>
               <form>
                <label>
                  <input className="one" type="text" id="text" name="text" placeholder="Digite aqui" />
                </label>
                  <input className="two" type="image" src={require('./assets/enviar.png')} alt="submit" id="ok" name="ok"/>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
    }
}

export default Chat;