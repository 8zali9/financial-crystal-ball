import React from 'react'
import "./stockPrediction.css";

export default function StockPrediction() {
    return (
        <div className='stock-prediction-drop'>
            <div className='sp-select-tickers'>
                <div className='sp-ticker'>
                    Apple
                </div>
                <div className='sp-ticker'>
                    IBM
                </div>
                <div className='sp-ticker'>
                    Tesla
                </div>
            </div>
        </div>
    )
}
