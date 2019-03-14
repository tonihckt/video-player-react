import React from 'react';
import './regular-error.css';

function RegularError (props){
    return (
       <div className="RegularError">
       <h1 style={{color:'white'}}>Oh, oh ...<br/>Algo no salió bien.</h1>
       <p>Espera algunos segundos.. Es posible que no haya conexión con el servidor o algún proceso ha dejado de funcionar.</p>
       <a href="#">vuelve a intentarlo.</a>
        </div>        
    )
}

export default RegularError;

