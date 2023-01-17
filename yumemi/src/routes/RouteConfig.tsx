import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from '../components/pages/Top'
import Contents from '../components/pages/Contents'

export const RouteConfig = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="contents" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  )
