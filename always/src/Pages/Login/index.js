import React from 'react';
import {Button} from 'reactstrap';
import {AreaLogin} from './Styled';
import {BrowserRouter, Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const validPost = yup.object().shape(
    {
        nome: yup.string().required().max(30),
        cpf: yup.number().required(11),
        telefone: yup.number().required().max(11),
        endereco: yup.string().required().max(40),
        senha: yup.string().required().max(10),
        email: yup.string().required().max(50),


    }
)

function Page(){

	const addPost = data => console.log(data)
	
	const {register, handleSubmit, formState: {}} = useForm({
		resolver: yupResolver(validPost)
	})


    return( 
        <AreaLogin>
		<Helmet>
            <title>Login</title>
        </Helmet> 
            <div className="container">
				<div className="row">
					<div className="col nine">
						<div>
							<form className="two" onSubmit={handleSubmit(addPost)} >
								<label className=" onelog">
								Usu&aacute;rio:
								<input className = "two" name='nome' {...register('nome')}  />
								</label>
								<label className=" onelog" >
								Senha:
								<input className = "two" name='senha' {...register('senha')}  /> 
								</label>
								<button type='submit'>Enviar</button>
							
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