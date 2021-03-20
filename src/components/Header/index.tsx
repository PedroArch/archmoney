import React from 'react'
import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export function Header({openNewTransactionModal}: HeaderProps) {

  return (
    <Container >
      <Content>
        <img src={logoImg} alt="arch.money" />
        <button onClick={openNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}


