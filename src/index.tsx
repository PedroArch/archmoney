import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace= "api"
    
    this.get('/transactions', () => {
      return [
        {
          title: "Desenvolvimento de Software",
          amount: 1400,
          type: "deposit",
          category: "development",
          date: new Date(),
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


