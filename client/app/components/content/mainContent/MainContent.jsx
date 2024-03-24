"use client"

import './mainContent.css'
import React, { useEffect, useContext, useState } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'
import { parseResponseToJSON } from '../../../utils/ParseToJson'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { getNextDates } from '../../../utils/getNextDates'

export default function MainContent() {
  const dates = getNextDates()
  const [stockFetchedData, setStockFetchedData] = useState([])

  const [stockDisplayData, setStockDisplayData] = useState({
    labels: dates,
    datasets: []
  })

  const { tickerParam, handleTickerParam } = useContext(ToggleContext)

  useEffect(() => {
    async function handleFetch() {
      await setStockDisplayData(pre => ({
        ...pre,
        datasets: []
      }))

      if (!tickerParam) {
        console.log("no ticker")
        return
      }
      console.log(tickerParam)
      const response = await fetch(`http://localhost:5000//getPredictions/${tickerParam}`)

      const data = await response.json()

      const jsonData = parseResponseToJSON(data)
      const flattenedData = jsonData.flat();
      setStockFetchedData(flattenedData)
      await handleTickerParam(null)
    }

    handleFetch()
  }, [tickerParam])

  useEffect(() => {
    setStockDisplayData(prevState => ({
      ...prevState,
      datasets: [
        {
          label: "Open",
          data: stockFetchedData.map((data) => data.open),
          backgroundColor: "lightblue",
          borderColor: "lightblue",
        },
        {
          label: "Close",
          data: stockFetchedData.map((data) => data.close),
          backgroundColor: "gray",
          borderColor: "gray",
        },
        {
          label: "High",
          data: stockFetchedData.map((data) => data.high),
          backgroundColor: "orange",
          borderColor: "orange",
        },
        {
          label: "Low",
          data: stockFetchedData.map((data) => data.low),
          backgroundColor: "red",
          borderColor: "red",
        }
      ]
    }))
  }, [stockFetchedData])

  return (
    <div className='main-content'>
      <p className='p'>WALL STREET CURRENT MARKET STATE</p>
      <div className='div'>
        <p>CURRENT TREND - IBM STOCKS</p>
      </div>
      {
        stockFetchedData && stockFetchedData.length > 0 &&
        <div className='charts-div'>
          <Line data={stockDisplayData} />
          <Bar data={stockDisplayData} />
        </div>
      }
    </div>
  )
}
