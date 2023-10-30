import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareXTwitter,
  faInstagram,
  faPinterest,
  faFacebook,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaSection = () => {
  return (
    <section className="mt-72 mx-10 grid grid-cols-1 gap-y-3 sm:mt-[350px] sm:mx-28 md:grid-cols-2 md:mx-10 lg:mt-[530px] lg:mx-3 xl:mt-[560px] xl:mx-32">
      <div>
        <div className="flex justify-evenly items-center md:block">
          <a rel="noopener noreferrer" href="mailton:lucas.pexel@example.com"><span className="text-gray-200 text-lg tracking-widest font-light mx-1 transition-colors duration-300 ease-in-out hover:text-pink-600"><FontAwesomeIcon className="mr-2" icon={faEnvelope} /> lucas.pexel@example.com</span></a>
        </div>
        <div className="flex justify-evenly items-center md:block">
          <a rel="noopener noreferrer" href="tel:+123456789"><span className="text-gray-200 text-lg tracking-widest font-light mx-1 transition-colors duration-300 ease-in-out hover:text-pink-600"><FontAwesomeIcon className="mr-2" icon={faPhone} />+123 456 78 90</span></a>
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-3">
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faLinkedin} /></a>
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faSquareXTwitter} /></a>
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faInstagram} /></a>
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faPinterest} /></a>
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faFacebook} /></a>
        <a href="#" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-gray-200 transition-colors duration-300 ease-in-out hover:text-pink-600" icon={faBehance} /></a>
      </div>
    </section>
  );
}

export default SocialMediaSection;