import { useState } from "react";
import Header from "./componentes/Header";
import FormularioPacientes from "./componentes/FormularioPacientes";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  function eliminarPaciente(id) {
    const sinPacienteSeleccionado = pacientes.filter(pacienteS => pacienteS.id != id);
    setPacientes(sinPacienteSeleccionado);
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
