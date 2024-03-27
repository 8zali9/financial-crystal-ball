"use client"

import React from 'react'
import "./dropDown.css";
import { useContext } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'

export default function StockPrediction() {
    const { handleTickerParam, handleTickerHeading } = useContext(ToggleContext)

    const handleClick = (tickerParam, tickerHead) => {
        handleTickerParam(tickerParam)
        handleTickerHeading(tickerHead)
    }

    return (
        <div className='stock-prediction-drop'>
            <div className='sp-select-tickers'>
                <div onClick={() => handleClick("AAPL", "Apple (AAPL)")} className='sp-ticker'>
                    Apple Inc.
                </div>

                <div onClick={() => handleClick("GOOGL", "Alphabet Inc. (GOOGL)")} className='sp-ticker'>
                    Alphabet Inc.
                </div>

                <div onClick={() => handleClick("TSLA", "Tesla Motors (TSLA)")} className='sp-ticker'>
                    Tesla Motors
                </div>

                <div onClick={() => handleClick("IBM", "IBM Common Stock (IBM)")} className='sp-ticker'>
                    IBM Common Stock
                </div>

                <div onClick={() => handleClick("MSFT", "Microsoft Corporation (MSFT)")} className='sp-ticker'>
                    Microsoft Corporation
                </div>

                <div onClick={() => handleClick("AMZN", "Amazon.com, Inc. (AMZN)")} className='sp-ticker'>
                    Amazon.com, Inc.
                </div>

                <div onClick={() => handleClick("META", "Meta Platforms Inc (META)")} className='sp-ticker'>
                    Meta Platforms Inc
                </div>

                <div onClick={() => handleClick("NVDA", "NVIDIA Corp (NVDA)")} className='sp-ticker'>
                    NVIDIA Corp
                </div>

                <div onClick={() => handleClick("COMP", "The NASDAQ Composite Index (COMP)")} className='sp-ticker'>
                    The NASDAQ Composite Index
                </div>

                <div onClick={() => handleClick("BKH", "Black Hills (BKH)")} className='sp-ticker'>
                    Black Hills
                </div>

                <div onClick={() => handleClick("CSCO", "Cisco Systems (CSCO)")} className='sp-ticker'>
                    Cisco Systems
                </div>

                <div onClick={() => handleClick("RR", "Rolls-Royce Holdings PLC (RR)")} className='sp-ticker'>
                    Rolls-Royce Holdings PLC
                </div>

            </div>
        </div>
    )
}
