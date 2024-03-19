"use client"

import React, { useState, createContext } from 'react'

export const ToggleContext = createContext()

export default function Toggles({ children }) {
  const [devContentToggle, setDevContentToggle] = useState(false)

  function handleDevContentToggle() {
    setDevContentToggle(!devContentToggle)
  }

  return (
    <ToggleContext.Provider 
      value={{ devContentToggle, handleDevContentToggle }}>
        { children }
    </ToggleContext.Provider>
  )
}
