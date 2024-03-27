"use client"

import React, { useState, createContext } from 'react'

export const ToggleContext = createContext()

export default function Toggles({ children }) {
  const [devContentToggle, setDevContentToggle] = useState(false)
  const [currentMarketStateToggle, setCurrentMarketStateToggle] = useState(false)
  const [stockPredictionToggle, setStockPredictionToggle] = useState(false)

  const [tickerParam, setTickerParam] = useState(null)
  const [tickerParamForCurrMartState, setTickerParamForCurrMartState] = useState(null)
  const [tickerHeading, setTickerHeading] = useState(null)
  const [martStateOrPrediction, setMartStateOrPrediction] = useState(null)

  function handleDevContentToggle() {
    setStockPredictionToggle(false)
    setCurrentMarketStateToggle(false)
    setDevContentToggle(!devContentToggle)
  }

  function handleCurrentMarketStateToggle() {
    setStockPredictionToggle(false)
    setDevContentToggle(false)
    setCurrentMarketStateToggle(!currentMarketStateToggle)
  }

  function handleStockPredictionToggle() {
    setCurrentMarketStateToggle(false)
    setDevContentToggle(false)
    setStockPredictionToggle(!stockPredictionToggle)
  }

  function handleTickerHeading(ticker) {
    setTickerHeading(ticker)
  }

  function handleTickerParam(ticker) {
    setTickerParamForCurrMartState(null)
    setMartStateOrPrediction("Predictions - Next Week")
    setTickerParam(ticker)
  }

  function handleTickerParamForCurrMartState(tickerForCurrMartState) {
    setTickerParam(null)
    setMartStateOrPrediction("Current Market State")
    setTickerParamForCurrMartState(tickerForCurrMartState)
  }

  return (
    <ToggleContext.Provider
      value={{
        devContentToggle,
        tickerHeading,
        currentMarketStateToggle,
        stockPredictionToggle,
        tickerParam,
        tickerParamForCurrMartState,
        martStateOrPrediction,
        handleDevContentToggle,
        handleTickerHeading,
        handleCurrentMarketStateToggle,
        handleStockPredictionToggle,
        handleTickerParam,
        handleTickerParamForCurrMartState
      }}>
      {children}
    </ToggleContext.Provider>
  )
}
