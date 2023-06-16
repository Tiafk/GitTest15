import React from 'react'
import './btn.css';
import g from './Good.module.css';

function Good() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <div className={g.dots}></div>
        <div className={g.dots}></div>
      </div>
      <button className={g.btn}>Хорошо</button>
    </div>
  )
}

export default Good;