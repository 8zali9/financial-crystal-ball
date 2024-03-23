"use client"

import StockPrediction from './dropDowns/StockPrediction'
import { useContext } from 'react'
import { ToggleContext } from '../../contextProviders/Toggles'
import './content.css'
import DevContactContent from './devContact/DevContactContent'
import MainContent from './mainContent/MainContent'

export default function Content() {
  const { stockPredictionToggle } = useContext(ToggleContext)

  return (
    <div className='content-div'>
      {
        stockPredictionToggle && <StockPrediction />
      }
      <MainContent />
      <DevContactContent />
    </div>
  )
}
