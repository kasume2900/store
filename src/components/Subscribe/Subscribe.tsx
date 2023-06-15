import React from 'react'
import s from './Subscribe.module.scss'

export default function Subscribe() {


  return (
    <div className={s.wrap}>
      <div className={s.icon}>
        <img src="./email.svg" alt="" />
      </div>
      <div className={s.desc}>Lorem ipsum dolor sit amet.</div>
      <div className={s.form}>
        <input placeholder='Enter your Email... ' type="text" />
        <button>join us</button>
      </div>
    </div>
  )
}
