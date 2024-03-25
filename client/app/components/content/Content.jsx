"use client"

import StockPrediction from './dropDowns/stockPrediction/StockPrediction'
import CurrentMartStateToggle from './dropDowns/currentMartState/CurrentMartState'
import { useContext } from 'react'
import { ToggleContext } from '../../contextProviders/Toggles'
import './content.css'
import DevContactContent from './devContact/DevContactContent'
import MainContent from './mainContent/MainContent'

export default function Content() {
  const { currentMarketStateToggle, stockPredictionToggle } = useContext(ToggleContext)

  return (
    <div className='content-div'>
      {
        currentMarketStateToggle && <CurrentMartStateToggle />
      }
      {
        stockPredictionToggle && <StockPrediction />
      }
      <MainContent />
      <DevContactContent />
    </div>
  )
}
