"use client"

// import { useState, useEffect } from "react"
import { TbCrystalBall } from "react-icons/tb";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
export default function Home() {
  // const [res, setRes] = useState("hello from client")

  // useEffect(() => {
  //   async function run() {
  //     const response = await fetch('http://localhost:5000/api/', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     const data = await response.json()
  //     setRes(data.msg);
  //     }
  //     run()
  // }, [])

  return (
  <form className="HomePage">
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
  </form>
  )
}
