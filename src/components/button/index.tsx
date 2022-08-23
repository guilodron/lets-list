import React from 'react'
import { ButtonDTO } from './dto'
import { Container } from './syles'

const Button: React.FC<ButtonDTO> = ({children}) => {
  return (
    <Container onClick={() => console.log('oiasdofiasdofi')}>
        {children}
    </Container>
  )
}

export default Button