import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Model, Server} from 'miragejs'

new Server({

  models: {
    task: Model,
  },



  routes(){

    this.namespace = 'api'
    this.urlPrefix = 'http://api.Grupo4ALways.com.br'

    this.get('/tasks', async (schema) =>{
      return{
        tasks: (await schema.tasks.all()).models,
      }
    })

    this.post('/tasks', async (schema, request) =>{
      const data= JSON.parse(request.requestBody)
      return {
      task: await schema.tasks.create({name: data.tasks}),
    }
    })

  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
