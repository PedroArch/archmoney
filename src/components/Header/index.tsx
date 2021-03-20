import React from 'react'
import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'


export function Header() {
  return (
    <Container >
      <Content>
        <img src={logoImg} alt="arch.money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}


