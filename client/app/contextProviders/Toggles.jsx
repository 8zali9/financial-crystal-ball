"use client"

import React, { useState, createContext } from 'react'

export const ToggleContext = createContext()

export default function Toggles({ children }) {
  const [devContentToggle, setDevContentToggle] = useState(false)
  const [currentMarketStateToggle, setCurrentMarketStateToggle] = useState(false)
  const [stockPredictionToggle, setStockPredictionToggle] = useState(false)

  function handleDevContentToggle() {
    setDevContentToggle(!devContentToggle)
  }

  function handleCurrentMarketStateToggle() {
    setStockPredictionToggle(false)
    setCurrentMarketStateToggle(!currentMarketStateToggle)
  }

  function handleStockPredictionToggle() {
    setCurrentMarketStateToggle(false)
    setStockPredictionToggle(!stockPredictionToggle)
  }

  return (
    <ToggleContext.Provider
      value={{
        devContentToggle, currentMarketStateToggle, stockPredictionToggle,
        handleDevContentToggle, handleCurrentMarketStateToggle, handleStockPredictionToggle
      }}>
      {children}
    </ToggleContext.Provider>
  )
}
