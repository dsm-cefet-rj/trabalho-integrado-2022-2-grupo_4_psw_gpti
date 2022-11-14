import React from 'react';
import {AreaCadastro} from './Styled';
import Helmet from 'react-helmet';

const Page = () => {

    return(
        <AreaCadastro>
        <Helmet>
            <title>Cadastre-se</title>
        </Helmet> 
            <div className="container">
		        <div className="row">
			        <div className="col nine">
			        	<div>
				            <form className="two">
					            <label className=" onelog" for="nome">
					                Nome:
 					                    <input className = "two" type="text" name="nome" />
 					            </label>
                                 <label className=" onelog" for="cpf">
					                CPF:
 					                    <input className = "two" type="text" name="cpf" />
 					            </label>
                                 <label className=" onelog" for="tel">
					                Telefone:
 					                    <input className = "two" type="text" name="tel" />
 					            </label>
                                 <label className=" onelog" for="email">
					                E-mail:
 					                    <input className = "two" type="text" name="email" />
 					            </label>
                                 <label className=" onelog" for="end">
					                Endereço:
 					                    <input className = "two" type="text" name="end" />
 					            </label>
					            <label className=" onelog" for="senha">
					                Senha:
 					                    <input className = "two" type="text" name="senha" />
 					            </label>
                                 <label className=" onelog" for="con-senha">
					                Confirmar Senha:
 					                    <input className = "two" type="text" name="con-senha" />
 					            </label>
					        <input className = "onelog" type="submit" value="Enviar" />
					        </form>
				        </div>
			        </div>
                </div>
            </div>

        </AreaCadastro>
    );

}

export default Page;