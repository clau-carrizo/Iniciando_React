
import './App.css';
import freeCodeCampLogo from './assents/imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className='Aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo' 
          />
      </div>
    </div>
  );
}

export default App;
