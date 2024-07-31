import React from "react";

const Comofunciona = () => {
    return (
        <div className="grid grid-cols-1 ">
            <div className="pl-2 pr-2 flex flex-col items-center text-center justify-center mt-14">
            <h1 className="pb-2 text-header text-4xl font-bold">Como Funciona</h1>
            <p  className="md:pl-6 md:pr-6 md:text-xl lg:text-xl  2xl:text-2xl text-lg leading-relaxed text-descripcionHero">En MissionGo, las Pymes publican misiones, que son tareas específicas.<br /> Los usuarios revisan estas misiones y se postulan a las que coinciden con sus habilidades.<br /> La Pyme selecciona al candidato ideal, quien realiza la tarea.<br /> Al finalizar, el candidato recibe su pago y ambos pueden dejar comentarios y valoraciones,<br /> promoviendo la colaboración y el crecimiento mutuo. </p>
            </div>
        </div>
    );
};

export default Comofunciona;