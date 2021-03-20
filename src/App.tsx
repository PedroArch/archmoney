import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";

import { api } from "./service/api";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen () {
    setIsNewTransactionModalOpen(true)
  }

  function handleNewTransactionModalClose () {
    setIsNewTransactionModalOpen(false)
  }

  useEffect(()=>{
    api.get('/transactions')
    .then(response => console.log(response.data));
  }, [])

  
  return (
    <div className="App">
      <Header openNewTransactionModal={handleNewTransactionModalOpen}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />

      <GlobalStyle />
    </div>
  );
}


