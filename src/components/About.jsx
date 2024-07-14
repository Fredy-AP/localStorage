import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const About = () => {

  const objectContext = useContext(Context);

  return (
    <div>
      <h1>pagina acerca de nosotros </h1>
      <p>datos del Cliente</p>
      <pre>{JSON.stringify(objectContext)} </pre>
    </div>
  )
}


