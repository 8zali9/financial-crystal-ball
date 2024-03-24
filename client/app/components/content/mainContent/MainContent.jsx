"use client"

import './mainContent.css'
import React, { useEffect, useContext, useState } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'

export default function MainContent() {
  const [stockData, setStockData] = useState([])
  const { tickerParam, handleTickerParam } = useContext(ToggleContext)

  useEffect(() => {
    async function handleFetch() {
      if (!tickerParam) {
        console.log("no ticker")
        return
      }
      console.log(tickerParam)
      const response = await fetch(`http://localhost:5000//getPredictions/${tickerParam}`)

      const data = await response.json()

      setStockData(data)
      console.log(data)
      handleTickerParam(null)
    }

    handleFetch()
  }, [tickerParam])

  return (
    <div className='main-content'>
      <p className='p'>WALL STREET CURRENT MARKET STATE</p>
      <div className='div'>
        <p>CURRENT TREND - IBM STOCKS</p>
      </div>
    </div>
  )
}
