import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Contact = () => {

  const nameContext = useContext(Context);

  return (
    <div>
      <h1>Pagina de contacto</h1>
      <p className='text-primary'>Nombre:{nameContext.user.name}</p>
      <p className='text-primary'>Ciudad:{nameContext.user.phone}</p>
      <p className='text-primary'>Telefono:{}</p>
    </div>
  )
}


