import React, { useState } from "react";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import GitHubCorner from "./components/GithubCorner";


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
      <GitHubCorner />
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


