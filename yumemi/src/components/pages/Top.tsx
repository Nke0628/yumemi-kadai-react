import React from 'react'
import { Link } from 'react-router-dom'

export const Top: React.FC = () => {
  return (
    <>
      <div>Top</div>
      <div>
        <Link to="contents">Contents</Link>
      </div>
    </>
  )
}
