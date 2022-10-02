import Paciente from "./Paciente"

function ListadoPacientes() {
  return (
    <section className="listado-pacientes">
        <h2>No hay pacientes</h2>
        <p>Comienza agregando pacientes y {''}
            <span>aparecerán en este lugar</span>
        </p>

        <Paciente/>
    </section>
  )
}

export default ListadoPacientes