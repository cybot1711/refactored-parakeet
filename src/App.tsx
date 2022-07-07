import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, StyledLayout } from './bundles/Home'

/**
 * Renders the Application layout in this application
 */
const App = () => {
  return (
    <StyledLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/repo-{slug}' element={<h1>repo</h1>} />
        </Routes>
      </BrowserRouter>
    </StyledLayout>
  )
}

export default App
