import React, { useEffect, useState } from 'react';
import {AreaCadastro} from './Styled';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Helmet from 'react-helmet';
import axios from 'redaxios';


const http = axios.create({
	baseURL: 'http://api.Grupo4ALways.com.br',

})

function Page(){
	const[tasks, updateTasks] = useState([])
	const [task, updateTask] = useState('')

useEffect(() => {
	http.get('/api/tasks')
	.then(Response=>{
		updateTask(Response.data.tasks)
	})
},[])

const handleAddTask = event => {
	event.preventDefault()
	if(task.trim()) {
		http.post('/api/tasks', {task})
		.then(Response=>{
			updateTask('')
			updateTasks(oldTasks => [...oldTasks, Response.data.task])
		})
	}
}


    return(
        <AreaCadastro>
        <Helmet>
            <title>Cadastre-se</title>
        </Helmet> 
            <div className="container">
		        <div className="row">
			        <div className="col nine">
			        	<div>
				            <form className="two" onSubmit={handleAddTask}>
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
 					                <input className = "two" type="text" onChange={event => updateTask(event.target.value)} value={task} name="con-senha" />
 					            </label>
								 <button>Enviar</button>
								{tasks.map(t => <a className='hid' key={t.id}> {t.name}</a>)}
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

        </AreaCadastro>
    );

}

export default Page;


