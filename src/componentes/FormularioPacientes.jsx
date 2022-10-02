import Formulario from "./Formulario"

function FormularioPacientes({pacientes, setPacientes}) {
  return (
    <section className="formulario-pacientes">
        <h2>Seguimiento Pacientes</h2>
        <p>Añade Pacientes y {''}
            <span>Adminístralos</span>
        </p>

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
    </section>
  )
}

export default FormularioPacientes