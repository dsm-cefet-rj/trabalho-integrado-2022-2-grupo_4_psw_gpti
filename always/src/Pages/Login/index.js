import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {AreaLogin} from './Styled';
import { Link} from 'react-router-dom';
import Helmet from 'react-helmet';


function Page(){

	const [state, setState] = useState({
		nome: '',
		senha: ''
	});



	
	function handleSubmit(e){
		e.preventDefault();
		console.log(state);
		
	}

	function handleChange(e){
		setState({...state, [e.target.name]: e.target.value})
	}




    return( 
        <AreaLogin>
		<Helmet>
            <title>Login</title>
        </Helmet> 
            <div className="container">
				<div className="row">
					<div className="col nine">
						<div>
							<form className="two" noValidate={true} onSubmit={handleSubmit} autoComplete="off">
								<label className=" onelog">
								Usu&aacute;rio:
								<input className = "two" name='nome' value={state.nome} onChange={handleChange}/>
								</label>
								<label className=" onelog">
								Senha:
								<input className = "two" name='senha' value={state.senha} onChange={handleChange}/> 
								</label>
								<button className='two'>Enviar</button>
							
							</form>									
						</div>
					</div>
				</div>
        		<div className="row">
					<div className="col">
					<Button className = "one"><Link to="/Cadastro">Cadastre-se</Link></Button>
					</div>
				</div>
			</div>
        </AreaLogin>
    
);
}

export default Page;