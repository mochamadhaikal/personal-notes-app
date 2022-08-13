import React from 'react'
import Search from './Search';

export default function Navbar({onSearch}) {
  return (
    <nav>
      <h2>Notes</h2>
      <Search onSearch={onSearch} />
    </nav>
  )
}
