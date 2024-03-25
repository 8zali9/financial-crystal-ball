"use client"

import './mainContent.css'
import React, { useEffect, useContext, useState } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'
import { parseResponseToJSON } from '../../../utils/ParseToJson'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { getNextDates } from '../../../utils/getNextDates'
import { toast } from 'react-toastify';

export default function MainContent() {
  const dates = getNextDates()
  const [stockFetchedData, setStockFetchedData] = useState([])

  const [stockDisplayData, setStockDisplayData] = useState({
    labels: dates,
    datasets: []
  })

  const {
    tickerParam, tickerParamForCurrMartState,
    handleTickerParam, handleTickerParamForCurrMartState
  } = useContext(ToggleContext)

  useEffect(() => {
    try {
      if (tickerParam) {
        setStockDisplayData(pre => ({
          ...pre,
          datasets: []
        }))
        setStockFetchedData([])
      }

      async function handleFetch() {
        try {
          if (!tickerParam) {
            return
          }

          const response = await fetch(`http://localhost:5000//getPredictions/${tickerParam}`)

          const data = await response.json()

          const jsonData = parseResponseToJSON(data)
          const flattenedData = jsonData.flat();
          setStockFetchedData(flattenedData)
          await handleTickerParam(null)
        } catch (error) {
          console.error('Error fetching predictions:', error);
          toast.error('Error fetching predictions. Please try again later.');
        }
      }

      handleFetch();
    } catch (error) {
      toast.error("Error processing your request")
    }
  }, [tickerParam])

  useEffect(() => {
    try {
      if (tickerParamForCurrMartState) {
        setStockDisplayData(pre => ({
          ...pre,
          datasets: []
        }))
        setStockFetchedData([])
      }

      async function handleFetch() {
        try {
          if (!tickerParamForCurrMartState) {
            return
          }

          const response = await fetch(`http://localhost:5000//currentMartState/${tickerParamForCurrMartState}`)

          const data = await response.json()

          setStockFetchedData(data.res)
          console.log(tickerParamForCurrMartState)
          await handleTickerParamForCurrMartState(null)
        } catch (error) {
          console.error('Error fetching current market state:', error);
          toast.error('Error fetching current market state. Please try again later.');
        }
      }

      handleFetch();
    } catch (error) {
      toast.error("Error processing your request")
    }
  }, [tickerParamForCurrMartState])

  useEffect(() => {
    try {
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
    } catch (error) {
      toast.error("Error displaying data")
    }
  }, [stockFetchedData])


  return (
    <div className='main-content'>
      {/* <p className='p'>WALL STREET {tickerParam && "Predictions"} {tickerParamForCurrMartState && <p>Current Market State</p>}</p>
      <div className='div'>
        <p>CURRENT TREND - {tickerParam || tickerParamForCurrMartState}</p>
      </div> */}
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
