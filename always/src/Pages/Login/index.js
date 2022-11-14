import React from 'react';
import {Button} from 'reactstrap';
import {AreaLogin} from './Styled';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

const Page = () => {

    return(
        <AreaLogin>
		<Helmet>
            <title>Login</title>
        </Helmet> 
            <div className="container">
		<div className="row">
			<div className="col nine">
				<div>
					<form className="two">
					  <label className=" onelog" for="usu">
					    Usu&aacute;rio:
 					   <input className = "two" type="text" name="usuario" />
 					 </label>
					 <label className=" onelog" for="senha">
					    Senha:
 					   <input className = "two" type="text" name="senha" />
 					 </label>
					  <input className = "onelog" type="submit" value="Enviar" />
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