import React from 'react'
import './btn.css';
import b from './Bad.module.css';

function Bad() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <div className={b.dots}></div>
      </div>
      <button className={b.btn}>Плохо</button>
    </div>
  )
}

export default Bad;