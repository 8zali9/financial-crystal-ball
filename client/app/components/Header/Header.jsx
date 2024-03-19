"use client"

import "./header.css";
import React, { useContext } from 'react'
import { TbCrystalBall } from "react-icons/tb";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle  } from "react-icons/io";
import { ToggleContext } from '../../contextProviders/Toggles'

export default function Header() {
  const { devContentToggle, handleDevContentToggle } = useContext(ToggleContext)

  return (
    <div className='header'>
        <div className="heading">
          <p className="heading-p1">FINANCIAL</p>
          <p className="heading-p2">CRYSTAL BALL</p>
        </div>
        <div className="control-panel">
          <div className="control-panel-btns">
            <div className="cp view-trends">View trends</div>
            <div className="cp stock-selection">Stock selection</div>
            <div className="cp stock-selection">Price evaluation</div>
          </div>
          <FaMagnifyingGlassChart className="cp cp-btn" />
        </div>
        <div onClick={handleDevContentToggle} className="contact-devs">
          <p>Contact Developers</p>
          {
            devContentToggle ?  <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
          }
        </div>
    </div>
  )
}
