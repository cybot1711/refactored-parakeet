import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, StyledLayout } from './bundles/Home'
import { Repo } from './bundles/Repo'

/**
 * Renders the Application layout in this application
 */
const App = () => {
  return (
    <StyledLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/repo' element={<Home />} />
          <Route path='/repo/:slug' element={<Repo />} />
        </Routes>
      </BrowserRouter>
    </StyledLayout>
  )
}

export default App
