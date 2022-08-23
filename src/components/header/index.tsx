import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'
import { Container } from './styles'

const Header = () => {
  return (
    <Container>
        <div>
            <h1>let's save</h1>
            <Link to='/new'>
                <Button>Adicionar Transação</Button>
            </Link>
        </div>
    </Container>
  )
}

export default Header