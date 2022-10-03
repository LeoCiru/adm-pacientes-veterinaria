import Paciente from "./Paciente"

function ListadoPacientes({pacientes}) {
  return (
    <section className="listado-pacientes">
        <h2>No hay pacientes</h2>
        <p>Comienza agregando pacientes y {''}
            <span>aparecerán en este lugar</span>
        </p>

        { pacientes.map( paciente => (
            <Paciente
            key={paciente.id}
              paciente={paciente}
            />
        ))}

    </section>
  )
}

export default ListadoPacientes