import React from 'react'
import { Home, RoutePage, About, Feedback } from './pages'
import { Sidebar, Header } from './components'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Sidebar />
      <main className={`md:pl-24 pl-4 md:pt-[5.3rem] pt-20 md:p-6 p-4 ${pathname === '/' ? 'h-screen' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/routes' element={<RoutePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </main>
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper