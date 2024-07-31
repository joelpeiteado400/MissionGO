import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Redes = () => {
    return(
        <div id="comofunciona" className="p-1   border-t-2 border-b-2 border-primary gap-16 flex flex-row justify-center ">
            <a href="https://www.tiktok.com/@mission.go" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12  transition-transform duration-300   hover:scale-110 text-4xl text-white"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="https://www.instagram.com/missiongo.latam/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12  transition-transform duration-300  hover:scale-110 text-4xl text-white"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=61562082034657" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12  transition-transform duration-300  hover:scale-110 text-4xl text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
            
        </div>
    );
};

export default Redes;