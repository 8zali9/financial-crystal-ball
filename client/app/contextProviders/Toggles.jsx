"use client"

import React, { useState, createContext } from 'react'

export const ToggleContext = createContext()

export default function Toggles({ children }) {
  const [devContentToggle, setDevContentToggle] = useState(false)
  const [currentMarketStateToggle, setCurrentMarketStateToggle] = useState(false)
  const [stockPredictionToggle, setStockPredictionToggle] = useState(false)

  const [tickerParam, setTickerParam] = useState(null)

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

  function handleTickerParam(ticker) {
    setTickerParam(ticker)
  }

  return (
    <ToggleContext.Provider
      value={{
        devContentToggle, currentMarketStateToggle, stockPredictionToggle, tickerParam,
        handleDevContentToggle, handleCurrentMarketStateToggle, handleStockPredictionToggle, handleTickerParam
      }}>
      {children}
    </ToggleContext.Provider>
  )
}
