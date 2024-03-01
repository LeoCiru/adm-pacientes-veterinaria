import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import FormularioPacientes from "./componentes/FormularioPacientes";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState(
    localStorage.getItem('pacientes') ? JSON.parse(localStorage.getItem('pacientes')) : []
  );
  const [paciente, setPaciente] = useState({});

    
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  

  function eliminarPaciente(id) {
    const pacientesActivos = pacientes.filter(pacienteActivo => pacienteActivo.id != id);
    setPacientes(pacientesActivos);
  }

  return (
    <>
      <header>
        <Header/>
      </header>
  
      <main>
        <FormularioPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </main>
    </>
  )
}

export default App
