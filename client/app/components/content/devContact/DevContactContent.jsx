"use client"

import './devContactContent.css'
import React, { useContext } from 'react'
import { ToggleContext } from '../../../contextProviders/Toggles'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function DevContactContent() {
  const { devContentToggle } = useContext(ToggleContext)

  return (
    <div className={`dev-content ${devContentToggle ? "dev-content-active" : "dev-content-inactive"}`}>
        <i>Meet FCB-Engineers</i>
        <div className='dev-content-main'>

            <div className='dev-content-main1'>
                <p>Qambar</p>
                <div className='dev-contact-link-div'>
                    <Link className='dev-contact-link' href="https://github.com/Qambar-12"><FaGithub className='icon' />Github</Link>
                    <Link className='dev-contact-link' href="https://github.com/Qambar-12"><FaLinkedin className='icon' />LinkedIn</Link>
                </div>
            </div>
            <br />
            <div className='dev-content-main2'>
                <p>Zulfiqar</p>
                <div className='dev-contact-link-div'>
                    <Link className='dev-contact-link' href="https://github.com/8zali9"><FaGithub className='icon' />Github</Link>
                    <Link className='dev-contact-link' href="https://www.linkedin.com/in/zulfiqar-ali-3bb08024b/"><FaLinkedin className='icon' />LinkedIn</Link>
                </div>
            </div>

        </div>
    </div>
  )
}
