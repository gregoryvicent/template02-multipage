'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [opacityClass, setOpacityClass] = useState('bg-[rgba(0,0,0,0.0)]')
  const [translateClass, setTrasnlateClass] = useState('translate-x-full')

  const handleClickMenu = () => {
    if(translateClass === '') {
      setTrasnlateClass('translate-x-full')
      setOpacityClass('bg-[rgba(0,0,0,0.0)]')
    } else {
      setTrasnlateClass('')
      setOpacityClass('bg-[rgba(0,0,0,0.6)]')
    }
  }

  return (
    <>
      <div className={`flex justify-end text-black transition-all duration-500 ease-in-out w-screen h-screen absolute z-50 ${translateClass} ${opacityClass}`}>
        <div className="bg-white h-screen w-3/4 absolute">
          <div className="flex justify-end">
            <FontAwesomeIcon className="m-5 text-2xl hover:cursor-pointer" icon={faXmark} style={{color: "#000000",}} onClick={handleClickMenu}/>
          </div>
          <ul className=" ml-5 mt-5 text-2xl">
            <li className="mt-5"><a className="font-medium decoration-2 underline-offset-8 hover:underline" href="#">SOBRE MI</a></li>
            <li className="mt-10"><a className="font-medium decoration-2 underline-offset-8 hover:underline" href="#">PRECIOS</a></li>
            <li className="mt-10"><a className="font-medium decoration-2 underline-offset-8 hover:underline" href="#">EQUIPO</a></li>
            <li className="mt-10"><a className="font-medium decoration-2 underline-offset-8 hover:underline" href="#">CONTACTO</a></li>
          </ul>
        </div>
      </div>
      <header className="flex justify-between items-center bg-[url('/images/header/header_bg.png')] bg-cover bg-right">
        <h1 className="bg-[rgb(10,10,10)] text-center text-3xl font-extralight p-3 border w-48 mx-5 my-10">Lucas.Pixel</h1>
        <div className="flex justify-center items-center mr-5 bg-gray-300 rounded-lg w-10 h-10 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-white" onClick={handleClickMenu}>
          <FontAwesomeIcon className="text-gl" icon={faBars} style={{ color: "#000000", }} />
        </div>
      </header>
    </>
  );
}

export default Header;