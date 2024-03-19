"use client"

import './content.css'
import DevContactContent from './devContact/devContactContent'
import MainContent from './mainContent/MainContent'

export default function Content() {

  return (
    <div className='content-div'>
        <MainContent />
        <DevContactContent />
    </div>
  )
}
