"use client"

import React from 'react'
import "./stockPrediction.css";
import { useContext } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'

export default function StockPrediction() {
    const { handleTickerParam } = useContext(ToggleContext)
    return (
        <div className='stock-prediction-drop'>
            <div className='sp-select-tickers'>
                <div onClick={() => handleTickerParam("AAPL")} className='sp-ticker'>
                    Apple Inc.
                </div>
                <div onClick={() => handleTickerParam("GOOGL")} className='sp-ticker'>
                    Alphabet Inc.
                </div>
                <div onClick={() => handleTickerParam("TSLA")} className='sp-ticker'>
                    Tesla Motors
                </div>
                <div onClick={() => handleTickerParam("IBM")} className='sp-ticker'>
                    IBM Common Stock
                </div>
                <div onClick={() => handleTickerParam("MSFT")} className='sp-ticker'>
                    Microsoft Corporation
                </div>
                <div onClick={() => handleTickerParam("AMZN")} className='sp-ticker'>
                    Amazon.com, Inc.
                </div>
                <div onClick={() => handleTickerParam("META")} className='sp-ticker'>
                    Meta Platforms Inc
                </div>
                <div onClick={() => handleTickerParam("NVDA")} className='sp-ticker'>
                    NVIDIA Corp
                </div>
                <div onClick={() => handleTickerParam("COMP")} className='sp-ticker'>
                    The NASDAQ Composite Index
                </div>
                <div onClick={() => handleTickerParam("BKH")} className='sp-ticker'>
                    Black Hills
                </div>
                <div onClick={() => handleTickerParam("CSCO")} className='sp-ticker'>
                    Cisco Systems
                </div>
                <div onClick={() => handleTickerParam("RR")} className='sp-ticker'>
                    Rolls-Royce Holdings PLC
                </div>
            </div>
        </div>
    )
}
