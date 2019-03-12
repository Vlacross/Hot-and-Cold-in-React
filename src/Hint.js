import React from 'react';
import './Hint.css'

export default function showHint(props) {

  let hint;
  switch(props.hint) {

    case 'intro':
    hint = <span className="default">Let's do this!</span>;
    break;
    case 'colder':
    hint = <span className="colder">Colder!</span>;
    break;
    case 'warmer':
    hint = <span className="warmer">Warmer!</span>;
    break;
    default:
    hint = <span className="default">Let's do this!</span>;
    break;
  }

  return(
    <div className="hint">
      {hint}
    </div>
  )
}