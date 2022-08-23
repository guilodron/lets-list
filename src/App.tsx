import { BrowserRouter } from 'react-router-dom'
import TransactionProvider from './hooks/useTransactions'
import AppRoutes from './routes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </TransactionProvider>
  )
}

export default App
