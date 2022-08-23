import React from 'react'
import InfoCard from '../info-card'
import { Container } from './styles'

const GeneralInfo = () => {
  return (
    <Container>
        <InfoCard type='Entradas' value={100} />
        <InfoCard type='Saidas' value={100} />
        <InfoCard color='green' type='Total' value={100} />
    </Container>
  )
}

export default GeneralInfo