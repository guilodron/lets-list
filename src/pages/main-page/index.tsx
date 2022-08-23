import React from 'react'
import GeneralInfo from '../../components/general-info'
import Header from '../../components/header'
import TransactionList from '../../components/transaction-list'

const MainPage = () => {
  return (
    <>
        <Header />
        <GeneralInfo />
        <TransactionList />
    </>
  )
}

export default MainPage