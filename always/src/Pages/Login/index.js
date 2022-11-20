import React from 'react';
import {Button} from 'reactstrap';
import {AreaLogin} from './Styled';
import {BrowserRouter, Link} from 'react-router-dom';
import Helmet from 'react-helmet';


function Page(){

    return( 
		<BrowserRouter>
        <AreaLogin>
		<Helmet>
            <title>Login</title>
        </Helmet> 
            <div className="container">
				<div className="row">
					<div className="col nine">
						<div>
							<form className="two"  >
								<label className=" onelog">
								Usu&aacute;rio:
								<input className = "two"  />
								</label>
								<label className=" onelog">
								Senha:
								<input className = "two"  /> 
								</label>
								<button>Enviar</button>
							
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
    
	</BrowserRouter>
);
}

export default Page;