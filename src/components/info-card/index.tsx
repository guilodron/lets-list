import React from 'react'
import { InfoCardDTO } from './dto'
import { Container } from './styles'

const InfoCard: React.FC<InfoCardDTO> = ({type, value, color='white'}) => {
  console.log(color);
  return (
    <Container color={`var(--${color})`} >
        <div>
            <span>{type}</span>
        </div>
        <strong>R${value.toFixed(2)}</strong>
    </Container>
  )
}

export default InfoCard