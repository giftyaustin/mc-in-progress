import React from 'react'
import './threeverticallines.css'

const ThreeVerticalLines = () => {
  return (
    <div className='threeLinesLoading'>
      <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enableBackground="new 0 0 0 0" space="preserve">
    <rect x="20" y="50" width="4" height="10" fill="black">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="30" y="50" width="4" height="10" fill="black">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="40" y="50" width="4" height="10" fill="black">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
    </rect>
</svg>
    </div>
  )
}

export default ThreeVerticalLines
