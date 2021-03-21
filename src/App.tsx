import React, { useState } from "react";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen () {
    setIsNewTransactionModalOpen(true)
  }

  function handleNewTransactionModalClose () {
    setIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header openNewTransactionModal={handleNewTransactionModalOpen}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


