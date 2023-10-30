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
        className={`w-full h-64 absolute transition-opacity duration-300 ease-linear sm:h-80 lg:h-[500px] xl:h-[550px] ${opacityImages.imageCarrousel01}`}
        src={imageCarrousel01Defatul}
        alt="proyecto01"
      />
      <Image
        className={`w-full h-64 absolute transition-opacity duration-300 ease-linear sm:h-80 lg:h-[500px] xl:h-[550px] ${opacityImages.imageCarrousel02}`}
        src={imageCarrousel02Defatul}
        alt="proyecto02"
      />
      <Image
        className={`w-full h-64 absolute transition-opacity duration-300 ease-linear sm:h-80 lg:h-[500px] xl:h-[550px] ${opacityImages.imageCarrousel03}`}
        src={imageCarrousel03Defatul}
        alt="proyecto03"
      />
      <div className="absolute w-full h-64 flex justify-end items-end sm:h-80 lg:h-[500px]">
        <div className="bg-[rgba(0,0,0)] rounded-md m-5 p-2">
          <p>Proyectos de Lucas.Pexel - 01.01.2023</p>
        </div>
      </div>
    </section>
  );
}

export default Carrousel;