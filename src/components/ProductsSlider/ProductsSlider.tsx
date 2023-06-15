
'use client'

import React from 'react'
import s from './ProductsSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Autoplay } from 'swiper';
import ProductSlaiderCard from '../ProductSlaiderCard/ProductSlaiderCard'

interface IProductsSliderProps {
  type: string
}

export default function ProductsSlider({ type }: IProductsSliderProps) {
  return (
    <div className={s.productsSlider}>
      <div className={s.typeProducts}>
        <div className={s.type}>{type} Products</div>
        <div className={s.typeDescr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quaerat?</div>
      </div>
      <Swiper
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        spaceBetween={10}
        autoplay={{ delay: 1350 }}
        slidesPerView={4}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        navigation
        speed={800}
        effect='coverflow'
      >
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
        <SwiperSlide>
         <ProductSlaiderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
