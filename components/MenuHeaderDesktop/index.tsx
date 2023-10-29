const MenuHeaderDesktop = () => {
  return (
    <nav className="hidden md:block w-3/5 lg:w-1/2 xl:w-1/3 xl:mr-24">
      <ul className="flex justify-evenly">
        <li className="">
          <a className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-pink-600" href="#">SOBRE MI</a></li>
        <li className="">
          <a className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-pink-600" href="#">PRECIOS</a></li>
        <li className="">
          <a className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-pink-600" href="#">EQUIPO</a></li>
        <li className="">
          <a className="text-lg font-semibold transition-colors duration-500 ease-in-out hover:text-pink-600" href="#">CONTACTO</a></li>
      </ul>
    </nav>
  );
}

export default MenuHeaderDesktop;