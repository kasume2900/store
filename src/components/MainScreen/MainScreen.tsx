'use client'

import React, { useState } from 'react'
import s from './MainScreen.module.scss'
import Nav from '../Nav/Nav'
import Rain from '../Rain'

export default function MainScreen() {

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const handleMove = (e : React.MouseEvent<HTMLDivElement>) => {

    setX((e.clientX - window.innerWidth / 2) * -0.004)
    setY((e.clientY - window.innerHeight / 2) * -0.004)
  }


  return (
    <>
    {/* <div className={s.logo}>lamastore</div> */}
    <Nav />
    <div onMouseMove={handleMove} className={s.layers}>
      <div style={{transform :`rotateX(${y}deg) rotateY(${x}deg)`}} className={s.layers__conteiner}>
        <div className={`${s.layers__item} ${s.layer1}`}></div>
        <div className={`${s.layers__item} ${s.layer2}`}></div>
        <div className={`${s.layers__item} ${s.layer3}`}>
          <div className={s.heroContent}>
            <h1>E comersstore</h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className={`${s.layers__item} ${s.layer4}`}>
          <Rain />
        </div>
        <div className={`${s.layers__item} ${s.layer5}`}></div>
        <div className={`${s.layers__item} ${s.layer6}`}></div>
      </div>
    </div>
  </>
  )
}
