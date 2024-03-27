"use client"

import "./header.css";
import React, { useContext } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { ToggleContext } from '../../contextProviders/Toggles'

export default function Header() {
  const {
    devContentToggle, currentMarketStateToggle, stockPredictionToggle,
    handleDevContentToggle, handleCurrentMarketStateToggle, handleStockPredictionToggle
  } = useContext(ToggleContext)

  return (
    <div className='header'>
      <div className="heading">
        <p className="heading-p1">FINANCIAL</p>
        <p className="heading-p2">CRYSTAL BALL</p>
      </div>

      <div className="control-panel">
        <div className="control-panel-btns">
          <div
            onClick={handleCurrentMarketStateToggle}
            className={`cp current-mart-state ${currentMarketStateToggle ? "cp-active" : ""}`}
          >
            Current Market state
            {
              currentMarketStateToggle ? <RiArrowDropUpLine fontSize='20px' /> : <RiArrowDropDownLine fontSize='20px' />
            }
          </div>

          <div
            onClick={handleStockPredictionToggle}
            className={`cp stock-selection ${stockPredictionToggle ? "cp-active" : ""}`}
          >
            Stock prediction
            {
              stockPredictionToggle ? <RiArrowDropUpLine fontSize='20px' /> : <RiArrowDropDownLine fontSize='20px' />
            }
          </div>

          <div
            onClick={handleDevContentToggle}
            className={`cp ${devContentToggle ? "cp-active" : ""}`}
          >
            Contact Developers
            {
              devContentToggle ? <RiArrowDropUpLine fontSize='20px' /> : <RiArrowDropDownLine fontSize='20px' />
            }
          </div>

        </div>
      </div>

      <div className="contact-devs">
        <p>Requests / min : 5</p>
      </div>
    </div>
  )
}
