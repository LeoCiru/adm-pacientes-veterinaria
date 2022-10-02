import Header from "./componentes/Header";
import FormularioPacientes from "./componentes/FormularioPacientes";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
  
      <main>
        <FormularioPacientes/>
        <ListadoPacientes/>
      </main>
    </>
  )
}

export default App
