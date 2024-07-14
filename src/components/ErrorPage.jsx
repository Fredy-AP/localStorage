import React from 'react';
import './../styles/error-pages.css';


export const ErrorPage = () => {
  return (
    <div className='custom-body-class'>
      <section id="not-found">
        <div id="title">Error 404</div>
        <div className="circles">
          <p>404<br />
            <small><strong>Ocurrió un error, página no encontrada</strong></small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  );
}
