import Paciente from "./Paciente"

function ListadoPacientes({pacientes}) {
  return (
    <>
      {
        pacientes.length === 0 ? (
          <section className="listado-pacientes">
            <h2>No hay pacientes</h2>
            <p>Comienza agregando pacientes y {''}
                <span>aparecerán en este lugar</span>
            </p>
          </section>
        ) : (
          <section className="listado-pacientes">
              <h2>Listado Pacientes</h2>
              <p>Administra tus {''}
                  <span>Pacientes y Citas</span>
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
    </>


  )
}

export default ListadoPacientes