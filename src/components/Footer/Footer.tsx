import React from 'react'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={s.wrap}>
      <div className={s.row}>
        <div className={s.col}>
          <div className={s.title}>О компании</div>
          <div className={s.title}>Поставщикам</div>
          <div className={s.title}>Оптовые продажи</div>
          <div className={s.title}>Условия продажи товаров</div>
          <div className={s.title}>Контакты</div>
        </div>
        <div className={s.col}>
          <div className={s.title}>Бонусы</div>
          <div className={s.title}>Оплата</div>
          <div className={s.title}>Доставка</div>
          <div className={s.title}>Возврат</div>
          <div className={s.title}>Новости</div>
        </div>
        <div className={s.col}>
          <div className={s.title}>Отзывы с фото</div>
          <div className={s.title}>Подарки</div>
          <div className={s.title}>Тематические подборки товаров</div>
          <div className={s.title}>Вопросы и ответы</div>
        </div>
        <div className={s.col}></div>
      </div>
      <div className={s.footer}>
        <div className={s.body}>
          <div className={s.logo}>lamastore</div>
          <div className={s.copy}>Lorem ipsum dolor sit.</div>
        </div>
        <div className={s.image}>
          <img src="./payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
