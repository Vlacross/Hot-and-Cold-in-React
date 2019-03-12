import React from 'react';
import './HowTo.css'

export default function howTo(props) {


  return (
   <div className="howToMessage">
    <h1>Hot-Or-Cold!</h1>
    <p>Simple game of guess the number between 1 and 100! Keep an eye of the Hint that tells you if your last attempt was closer or farther</p>
    <button onClick={props.onClick} className="backButton">Back</button>
   </div>
  )
}