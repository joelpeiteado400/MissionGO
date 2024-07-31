import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from "react";
import { PillTabs } from "./AnimacionHeaderButton";
import backgroundImg from '../img/fondomissiongo.png';
import logo from '../img/logomissiongo.png';
import coheteescudo from '../img/coheteescudo.png';



const Headerprincipal = () => {
    const [showMenu, setShowMenu] = useState(false);
    
     useEffect(() => {
        const bodyContent = document.querySelector('.body-content');
        if (showMenu) {
            document.body.classList.add('overflow-hidden');
            bodyContent.classList.add('blur-content');
        } else {
            document.body.classList.remove('overflow-hidden');
            bodyContent.classList.remove('blur-content');
        }

        // Limpieza: se asegura de quitar la clase al desmontar el componente
        return () => {
            document.body.classList.remove('overflow-hidden');
            bodyContent.classList.remove('blur-content');
        };
    }, [showMenu]);

    return( 
        <header  className={`z-30 top-0 fixed flex w-full items-center justify-between md:justify-start   text-white font-bold h-[10vh]  border-primary  left-0 right-0 
            ${showMenu ? 'bg-cover bg-center border-b-2 ' : 'border-b-2 '}`}style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover',backgroundPosition:'center',backgroundAttachment:'fixed' }}>
          
            
                <a href="#inicio" className="xl:pl-20 pl-10 md:pl-10 font-bold relative inline-block justify-center items-center">
                    <img src={coheteescudo} className="w-14 movil1:w-10 flex items-center justify-center"></img> 
                </a>
                

           
            <nav className={` fixed md:static w-[72%] xl:text-nowrap md:w-full h-[100%] ${showMenu ? "left-0": "-left-full "} 
                      top-0  flex-1 flex flex-col  items-center justify-center  w-100% border-primary transition-all md:flex-row md:ml-auto duration-458 
                       ${showMenu ? ' bg-cover bg-center ' : ' bg-transparent'} `}style={{ backgroundImage: showMenu ? `url(${backgroundImg})` : 'none' }}>
                       {showMenu && (
                        <div className=" pb-4">
                        <img src={logo} className="w-[300px]" alt="Logo MissionGo" />
                         </div>
                        )}
                      
                      <PillTabs setShowMenu={setShowMenu} />    
                 </nav>
            
           
           

          <button onClick={() => setShowMenu(!showMenu)} className="flex  justify-end   md:hidden  text-4xl mr-10 " >
            {showMenu ? <FontAwesomeIcon icon={faCircleXmark}/> : <FontAwesomeIcon icon={faBarsStaggered} className="text-4xl"/> }
          
          </button>
        </header>
        
    )
}


export default Headerprincipal;