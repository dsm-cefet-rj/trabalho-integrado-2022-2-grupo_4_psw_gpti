import React, { useEffect, useState } from 'react';
import {AreaCadastro} from './Styled';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
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
	
	const {register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(validPost)
	})

	

	   return(
        <AreaCadastro>
        <Helmet>
            <title>Cadastre-se</title>
        </Helmet> 
		<main>
            <div className="container">
		        <div className="row">
			        <div className="col nine">
			        	<div>
				            <form className="two" onSubmit={handleSubmit(addPost)}>
					            <label className=" onelog">
					                Nome:</label>
 					                <input className = "two" type="text" name="nome" {...register('nome')} />
									 <p>{errors.nome?.message}</p>
								
                                <label className=" onelog">
					                CPF:</label>
 					                <input className = "two" type="text" name="cpf" {...register('cpf')} />
									 <p>{errors.cpf?.message}</p>
								
                                <label className=" onelog">
					                Telefone:</label>
 					                <input className = "two" type="text" name="tel" {...register('tel')}/>
									 <p>{errors.tel?.message}</p>
								
                                 <label className=" onelog" >
					                E-mail:</label>
 					                <input className = "two" type="text" name="email" {...register('email')}/>
									 <p>{errors.email?.message}</p>
								
                                 <label className=" onelog" >
					                Endereço:</label>
 					                <input className = "two" type="text" name="end" {...register('end')}/>
									 <p>{errors.end?.message}</p>
							    
					            <label className=" onelog">
					                Senha:</label>
 					                <input className = "two" type="text" name="senha" {...register('senha')}/>
									<p>{errors.senha?.message}</p>
 					            
								 <Button type="submit">Enviar</Button>
					        </form>
				        </div>
			        </div>
					<div className="row">
						<div className="col">
						<Button className = "one"><Link to="/*">Entrar</Link></Button>
						</div>
					</div>

				</div>
            </div>
			</main>

        </AreaCadastro>
    );

	   
	   }

export default Page;


