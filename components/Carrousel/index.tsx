'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

import imageCarrousel01Defatul from '@/public/images/carrousel/jpg/carrousel01.jpg'
import imageCarrousel02Defatul from '@/public/images/carrousel/jpg/carrousel02.jpg'
import imageCarrousel03Defatul from '@/public/images/carrousel/jpg/carrousel03.jpg'

const Carrousel = () => {
  const [opacityImages, setOpacityImages] = useState({
    imageCarrousel01: 'opacity-100',
    imageCarrousel02: 'opacity-0',
    imageCarrousel03: 'opacity-0'
  })

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (opacityImages.imageCarrousel01 === 'opacity-100') {
        setOpacityImages({
          imageCarrousel01: 'opacity-0',
          imageCarrousel02: 'opacity-100',
          imageCarrousel03: 'opacity-0'
        })
      } else if (opacityImages.imageCarrousel02 === 'opacity-100') {
        setOpacityImages({
          imageCarrousel01: 'opacity-0',
          imageCarrousel02: 'opacity-0',
          imageCarrousel03: 'opacity-100'
        })
      } else if (opacityImages.imageCarrousel03 === 'opacity-100') {
        setOpacityImages({
          imageCarrousel01: 'opacity-100',
          imageCarrousel02: 'opacity-0',
          imageCarrousel03: 'opacity-0'
        })
      }
    }, 3000)
    return () => clearInterval(imageInterval)
  })

  return (
    <section>
      <Image
        className={`w-full h-48 absolute transition-opacity duration-300 ease-linear ${opacityImages.imageCarrousel01}`}
        src={imageCarrousel01Defatul}
        alt="proyecto01"
      />
      <Image
        className={`w-full h-48 absolute transition-opacity duration-300 ease-linear ${opacityImages.imageCarrousel02}`}
        src={imageCarrousel02Defatul}
        alt="proyecto02"
      />
      <Image
        className={`w-full h-48 absolute transition-opacity duration-300 ease-linear ${opacityImages.imageCarrousel03}`}
        src={imageCarrousel03Defatul}
        alt="proyecto03"
      />
    </section>
  );
}

export default Carrousel;