import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import planeta from '../img/planeta.png';
import cohete from '../img/cohete.png';
import logosolo from '../img/logosin.png';



const Hero = () => {
    return (
        <section id="inicio" className="grid grid-cols-1 md:grid-cols-8 md:h-auto md:w-full h-[94vh] 2xl:mt-20 2xl:mb-20  pt-28 ">
            <div className="h-[75%] flex order-2 items-start md:order-1 col-span-4 md:mt-0 ">
                <div className=" flex flex-col text-center  pl-4 pr-4 md:pl-10 md:pt-24 md:pb-24 md:text-center lg:text-center  2xl:text-center">
                    <h1 className="pb-2 text-4xl md:text-5xl md:text-nowrap lg:text-6xl xl:text-6xl 2xl:text-7xl 2xl:mb-2 font-bold text-header">
                        Conecta y <span>Crece</span>
                    </h1>
                    <p className=" text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl 2xl:text-wrap text-descripcionHero leading-relaxed">
                        En MissionGo, impulsamos el crecimiento económico en Latinoamérica.<br />
                        Conectando Pymes con personas como tú para resolver sus necesidades a través de misiones de corta duración.<br />
                        <span>¡Únete y sé parte del cambio!</span>
                    </p>
                    <div  className=" md:block pt-4">
                        <a href="#mc_embed_shell">
                        <button   className=" text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:mt-6 bg-primary text-white font-semibold py-2 px-8 rounded-full">
                            Unirse Ahora
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div  className=" relative   w-auto h-auto max-h-[171.44px] flex items-center justify-center order-1 md:order-2 md:mb-0 md:mt-[50%] lg:mt-[35%] xl:mt-[30%] 2xl:mt-[20%]  col-span-4 mb-10 mt-10 ">
                    
                    
                    <img className="absolute  w-2/3 md:w-4/5 h-auto md:h-auto z-[20] 2xl:w-3/5" src={logosolo} alt="logo" />
                    <img className="animate-cohete left-[70%] absolute  w-[11%] h-auto  md:w-16 md:h-auto md:left-[72%] lg:left-[72%] lg:w-20 z-[21] xl:w-20 xl:h-auto xl:left-[74%] 2xl:left-[68%] 2xl:w-24 " src={cohete} alt="cohete" />
                    <img className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-1/2 h-auto md:w-4/5 md:h-auto md: object-cover 2xl:w-7/12  " src={planeta} alt="planeta" />
                
            </div>
        </section>
    );
};

export default Hero;
