import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import { FormEvent, useState, useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { api } from "../../service/api";

import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()
   
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleOnSubmit(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      type,
      amount,
      category,
    })

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');

    onRequestClose()
  }
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleOnSubmit}>
        <h2>Cadastrar transação</h2>
        
        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'} 
            activeColor='red' 
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria" 
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar" />
          </button>
      </Container>
    </Modal>

  )
}