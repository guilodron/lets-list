import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ItemPage from '../pages/item-page'
import MainPage from '../pages/main-page'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/new' element={<ItemPage />} />
    </Routes>
  )
}

export default AppRoutes