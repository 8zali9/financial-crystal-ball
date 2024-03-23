"use client"

// import { useState, useEffect } from "react"
import Content from "./components/content/Content";
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
    <div className="homePage">
      <Content />
    </div>
  )
}
