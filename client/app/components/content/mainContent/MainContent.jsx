"use client"

import './mainContent.css'
import React, { useEffect, useContext, useState } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'
import { parseResponseToJSON } from '../../../utils/ParseToJson'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { getNextDates, getPreviousDates } from '../../../utils/getNextDates'
import { toast } from 'react-toastify';

export default function MainContent() {
  const [dates, setDates] = useState([])
  const [stockFetchedData, setStockFetchedData] = useState([])

  const [stockDisplayData, setStockDisplayData] = useState({
    labels: [],
    datasets: []
  })

  const {
    tickerParam, tickerParamForCurrMartState, martStateOrPrediction, tickerHeading,
    handleTickerParam, handleTickerParamForCurrMartState,
  } = useContext(ToggleContext)

  useEffect(() => {
    try {
      async function handleFetch() {
        try {
          if (tickerParam) {
            const response = await fetch(`https://financial-crytal-ball.azurewebsites.net/getPredictions/${tickerParam}`)

            const data = await response.json()

            const jsonData = parseResponseToJSON(data)
            const flattenedData = jsonData.flat();
            setStockFetchedData(flattenedData)
            setDates(getNextDates())
            await handleTickerParam(null)
          }
        } catch (error) {
          toast.error('Error making predictions. Please try again later.');
        }
      }

      handleFetch();
    } catch (error) {
      toast.error("Error processing your request")
    }
  }, [tickerParam])

  useEffect(() => {
    try {
      async function handleFetch() {
        try {
          if (tickerParamForCurrMartState) {
            const response = await fetch(`https://financial-crytal-ball.azurewebsites.net/currentMartState/${tickerParamForCurrMartState}`)

            const data = await response.json()

            setStockFetchedData(data.res)
            setDates(getPreviousDates())
            await handleTickerParamForCurrMartState(null)
          }
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
        labels: dates,
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
          },
          {
            label: "Vwap",
            data: stockFetchedData.map((data) => data.vwap),
            backgroundColor: "purple",
            borderColor: "purple",
          }
        ]
      }))
    } catch (error) {
      toast.error("Error displaying data")
    }
  }, [stockFetchedData])


  return (
    <div className='main-content'>
      {
        martStateOrPrediction && tickerHeading &&
        <div className='div'>
          <p className='p'>{martStateOrPrediction}</p>
          <p>{tickerHeading}</p>
        </div>
      }
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
