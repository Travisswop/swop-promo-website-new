'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'; // Ensure this contains minimal, necessary styles

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image';

const slidesData = [
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to Activate SWOP',
  },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to SWOP connect an Android',
  },
  { src: '/assets/faq/faq-video.jpg', alt: 'Swop QR Code', title: 'SWOP Pro' },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to Activate SWOP',
  },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to SWOP connect an Android',
  },
];

const FaqSlider = () => {
  return (
    <Swiper
      slidesPerView={1} // Default for mobile
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className='mySwiper'
    >
      {slidesData?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center w-[1700px] h-auto'>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={200}
              layout='responsive'
              objectFit='cover'
            />
            <h2 className='text-stone-950 font-normal text-lg md:text-2xl text-center mt-4 mb-12'>
              {slide.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FaqSlider;
