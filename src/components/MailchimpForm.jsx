import React, { useState } from 'react';
import './MailchimpForm.css';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [otherInterests, setOtherInterests] = useState('');
  const [groups, setGroups] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('FNAME', otherInterests);

    Object.keys(groups).forEach((groupKey) => {
      formData.append(groupKey, groups[groupKey]);
    });

    try {
      const response = await fetch(
        'https://gmail.us13.list-manage.com/subscribe/post?u=1a4ed882bdb0a063bacf32244&id=7279cf73de&f_id=00abd8e0f0',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // Importante para evitar problemas de CORS
        }
      );

      // Aquí no puedes verificar si la respuesta fue exitosa, porque 'no-cors' no devuelve detalles
      setIsFormVisible(false);
    } catch (error) {
      alert('Hubo un error al enviar el registro. Por favor, inténtalo de nuevo.');
    }
  };

  const handleGroupChange = (e) => {
    setGroups({
      ...groups,
      [e.target.name]: e.target.checked ? '1' : '',
    });
  };

  return (
    <div id="mc_embed_shell" className="md:flex md:justify-center grid pl-4 pr-4 pt-14 h-auto w-auto">
      {isFormVisible ? (
        <div id="mc_embed_signup" className="md:w-[70%] xl:w-[50%] 2xl:w-[35%]  md:justify-center  grid flex-col items-center bg-white rounded pl-4 pr-4">
          <h1 className='flex text-center pt-4 pb-4 text-header text-4xl font-bold'>Formulario de Inscripción</h1>
          <form
            onSubmit={handleSubmit}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="mb-1 validate flex flex-col w-full h-auto"
          >
            <div id="mc_embed_signup_scroll" className="flex flex-col items-end w-full">
              <div className="text-white indicates-required mb-4">
                <span className="asterisk">*</span> indica que es obligatorio
              </div>
              <div className="mc-field-group mb-4 w-full">
                <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-white">
                  Dirección de correo electrónico <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email mt-1 p-2 border border-gray-300 rounded w-full"
                  id="mce-EMAIL"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-white mc-field-group input-group mb-4 w-full">
                <strong>Grupos de Interés:</strong>
                <ul className="mt-2">
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][64]"
                      id="mce-group[20483]-20483-0"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-0">Logística y mantenimiento</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][128]"
                      id="mce-group[20483]-20483-1"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-1">Marketing y Ventas</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][256]"
                      id="mce-group[20483]-20483-2"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-2">Administración y Eventos</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][512]"
                      id="mce-group[20483]-20483-3"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-3">Educación y Formación</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][1024]"
                      id="mce-group[20483]-20483-4"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-4">Atención al Cliente</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="group[20483][2048]"
                      id="mce-group[20483]-20483-5"
                      onChange={handleGroupChange}
                    />
                    <label className='ml-2' htmlFor="mce-group[20483]-20483-5">Mascotas</label>
                  </li>
                </ul>
              </div>
              <div className="mc-field-group mb-4 w-full">
                <label htmlFor="mce-FNAME" className="block text-sm font-medium text-white">
                  Otros Intereses:
                </label>
                <input
                  type="text"
                  name="FNAME"
                  className="text mt-1 p-2 border border-gray-300 rounded w-full"
                  id="mce-FNAME"
                  value={otherInterests}
                  onChange={(e) => setOtherInterests(e.target.value)}
                />
              </div>
              <div id="mce-responses" className="clear foot w-full">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  type="text"
                  name="b_1a4ed882bdb0a063bacf32244_7279cf73de"
                  tabIndex="-1"
                  value=""
                  
                />
              </div>
              <div className="optionalParent w-full">
                <div className="clear foot flex justify-center items-center w-full">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="h-10 w-48 mb-4 rounded-full button bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                    value="Enviar Registro"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div id='mensajeAgradecimiento' className="grid flex-col items-center  rounded-2xl pl-4 pr-4 pt-14 pb-14">
          <h1 className='flex text-center pt-4 pb-4 text-white text-4xl font-bold'>Muchas gracias, por registrarte</h1>
        </div>
      )}
    </div>
  );
};

export default MailchimpForm;
