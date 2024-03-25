"use client"

import React from 'react'
import "./currentMartState.css";
import { useContext } from 'react'
import { ToggleContext } from '../../../../contextProviders/Toggles'

export default function StockPrediction() {
    const { handleTickerParamForCurrMartState } = useContext(ToggleContext)
    return (
        <div className='stock-prediction-drop'>
            <div className='sp-select-tickers'>
                <div onClick={() => handleTickerParamForCurrMartState("AAPL")} className='sp-ticker'>
                    Apple Inc.
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("GOOGL")} className='sp-ticker'>
                    Alphabet Inc.
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("TSLA")} className='sp-ticker'>
                    Tesla Motors
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("IBM")} className='sp-ticker'>
                    IBM Common Stock
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("MSFT")} className='sp-ticker'>
                    Microsoft Corporation
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("AMZN")} className='sp-ticker'>
                    Amazon.com, Inc.
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("META")} className='sp-ticker'>
                    Meta Platforms Inc
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("NVDA")} className='sp-ticker'>
                    NVIDIA Corp
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("COMP")} className='sp-ticker'>
                    The NASDAQ Composite Index
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("BKH")} className='sp-ticker'>
                    Black Hills
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("CSCO")} className='sp-ticker'>
                    Cisco Systems
                </div>
                <div onClick={() => handleTickerParamForCurrMartState("RR")} className='sp-ticker'>
                    Rolls-Royce Holdings PLC
                </div>
            </div>
        </div>
    )
}
