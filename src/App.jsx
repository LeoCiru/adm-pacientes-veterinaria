import { useState } from "react";
import Header from "./componentes/Header";
import FormularioPacientes from "./componentes/FormularioPacientes";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

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
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </main>
    </>
  )
}

export default App
