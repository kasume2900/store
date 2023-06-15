import React from 'react'
import s from './Nav.module.scss'
import Link from 'next/link'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
export default function Nav() {

  const nav = [
    {
      title : 'home',
      href : '/'
    },
    {
      title : 'about',
      href : '/about'
    },
    {
      title : 'contact',
      href : '/contact'
    },
  ]



  return (
    <div className={s.nav}>
      <div className={s.logo}>Lamastore</div>
      <div className={s.row}>
      <div className={s.links}>
        {nav.map(el => <Link href={el.href} key={el.title}>{el.title}</Link>)}
      </div>
      <div className={s.icons}>
        <AiOutlineSearch />
        <AiFillHeart />
        <CgProfile />
        <AiOutlineShoppingCart />
      </div>
      </div>
    </div>
  )
}
