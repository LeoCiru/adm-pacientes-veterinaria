import { useState } from "react";
import Header from "./componentes/Header";
import FormularioPacientes from "./componentes/FormularioPacientes";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <header>
        <Header/>
      </header>
  
      <main>
        <FormularioPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes/>
      </main>
    </>
  )
}

export default App
