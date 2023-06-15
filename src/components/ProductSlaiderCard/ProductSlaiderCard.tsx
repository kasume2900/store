import React from 'react'
import s from './ProductSlaiderCard.module.scss'


export default function ProductSlaiderCard() {
  return (
    <div className={s.wrap}>
      <div className={s.image}></div>
      <div className={s.info}>
        <div className={s.title}>Lorem, ipsum dolor.</div>
        <div className={s.body}>
          <div className={s.oldPrice}>80$</div>
          <div className={s.price}>65$</div>
        </div>
      </div>
    </div>
  )
}
