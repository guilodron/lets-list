import React from 'react'
import { Container } from './styles'
import { TransactionDTO } from './dto';

const Transaction: React.FC<TransactionDTO> = ({category, title, value}) => {
  return (
    <Container>
      <strong>{title}</strong>
      <span className='value'>R${value.toFixed(2)}</span>
      <span className='category'>{category}</span>

    </Container>
  )
}

export default Transaction;