import { useState, useEffect } from 'react';
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes';
import Formulario from './components/Formulario';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (paciente) => {
    const pacientesNuevos = pacientes.filter( pacienteTotal => pacienteTotal.id !== paciente.id );
    setPacientes(pacientesNuevos);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>

    </div>
  )
}

export default App
