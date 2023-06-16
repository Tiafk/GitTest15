import React from 'react'
import v from './veryGood.module.css';
import './btn.css';

function VeryGood() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <div className={v.dots}></div>
        <div className={v.dots}></div>
        <div className={v.dots}></div>
      </div>
      <button className={v.btn}>Отлично</button>
    </div>
  )
}

export default VeryGood;