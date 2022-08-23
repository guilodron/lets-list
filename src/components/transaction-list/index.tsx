import { Container } from './styles'
import Transaction from './transaction'

const TransactionList = () => {
  return (
    <Container>
        <Transaction category='Comida' title='McDonaids' value={10}/>
        <Transaction category='Comida' title='McDonaids' value={10}/>
        <Transaction category='Comida' title='McDonaids' value={10}/>
    </Container>
  )
}

export default TransactionList