import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from '../components/pages/Top'
import { Contents } from '../components/pages/Contents'

export const RouteConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Top />}></Route>
          <Route path="contents" element={<Contents />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
