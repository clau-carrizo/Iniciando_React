import React from 'react';
import '../assents/css/contador.css'

function Contador({ numClics }){
    return(
      <div className='contador'>
        {numClics}
      </div>

    );
}

export default Contador;