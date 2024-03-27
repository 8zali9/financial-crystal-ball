"use client"

import './devContactContent.css'
import React, { useContext } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'
import { FaGithub, FaArrowAltCircleRight } from "react-icons/fa";

import Link from 'next/link';

export default function DevContactContent() {
    const { devContentToggle } = useContext(ToggleContext)

    return (
        <div className={`dev-content ${devContentToggle ? "dev-content-active" : "dev-content-inactive"}`}>
            <div className='dev-content-main'>
                <div className='dev-content-about'>
                    <u><b>About this project</b></u>
                    <p>Gemini-powered webapp, which is designed to help users identify the trends, and know in advnace the prices of stocks.</p>
                    <dl>
                        <dt><FaArrowAltCircleRight color='rgba(47, 79, 79, 0.651)' /> How the stocks prices are predicted?</dt>
                        <dd>Gemini analyzes & identifies the relation of the current and past market trends, along with it's own past predictions to make current/future predictions less error prone.</dd>
                        <dt><FaArrowAltCircleRight color='rgba(47, 79, 79, 0.651)' /> Journey of data to refined prediction.</dt>
                        <dd>Upon request, we procure high-quality data from Polygon.io for the previous 70 days relative to the present date. This data is streamed to Gemini, leveraging its historical predictions to reduce errors and thoroughly analyze the incoming stream. Once completed, our backend retrieves the analyzed response and forwards it to you.</dd>
                    </dl>
                </div>

                <div className='dev-content-main-link'>
                    <p>&copy; 2024 Financial Crystal Ball</p>
                    <div className='dev-contact-link-div'>
                        <Link className='dev-contact-link' href="https://github.com/Qambar-12"><FaGithub className='icon' />Qambar</Link>
                        <Link className='dev-contact-link' href="https://github.com/8zali9"><FaGithub className='icon' />Zulfiqar</Link>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
