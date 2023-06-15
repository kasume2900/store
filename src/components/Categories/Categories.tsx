
import React from 'react'
import s from './Categories.module.scss'
import Image from 'next/image'
//  import {sale} from '../../../public/categories/sale.jpg'


export default function Categories() {
  return (
    <div className={s.wrap}>
      <div className={s.col}>
        <div className={s.row}>
          <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>Sale</div>
            <img src="./categories/sale.jpg" alt="" />
          </div>
        </div>
        <div className={s.row}>
        <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>Women</div>
            <img src="./categories/women.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={s.col}>
        <div className={s.row}>
        <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>New Season</div>
            <img src="./categories/newSeason.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={`${s.col} ${s.colL}`}>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.row}>
            <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>Men</div>
            <img src="./categories/men.jpg" alt="" />
          </div>
            </div>
          </div>
          <div className={s.col}>
            <div className={s.row}>
            <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>Аксэсуары</div>
            <img src="./categories/aces.jpeg" alt="" />
          </div>
            </div>
          </div>
        </div>
        <div className={s.row}>
        <div className={s.item}>
            <div className={s.bg}></div>
            <div className={s.title}>Shoes</div>
            <img src="./categories/shoes.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
