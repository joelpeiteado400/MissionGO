import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div className="grid grid-cols-2 mt-10 w-full h-auto border-t-2  border-primary">
            <div className="flex justify-center items-center   ">
                <a href="#inicio" className="inline-block">
                <img  className="md:w-72  inline-block w-44 h-auto" src="src/img/missiongo.png"></img>
                </a>
                
            </div>
            <div className=" text-center flex flex-col text-white">
                <h1 className="md:text-2xl pt-6 pb-1 font-semibold text-lg">Contactanos</h1>
                <p className="md:text-xl text-sm pb-4 pt-4">missiongo@gmail.com</p>
                <div >
                  <a href="https://www.tiktok.com/@mission.go" target="_blank" rel="noopener noreferrer" className="md:text-3xl  pr-4 pl-4  text-xl"><FontAwesomeIcon icon={faTiktok} /></a>
                  <a href="https://www.instagram.com/missiongo.latam/" target="_blank" rel="noopener noreferrer" className="md:text-3xl pr-4 pl-4 text-xl "><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61562082034657" target="_blank" rel="noopener noreferrer" className="md:text-3xl pr-4 pl-4 text-xl"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
                <p className="md:text-xl text-sm pt-4 pb-4">CABA,Argentina.</p>
            </div>
            <p className="text-white col-span-2 text-center pt-4 pb-2">&copy; 2024 MissionGo. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer;