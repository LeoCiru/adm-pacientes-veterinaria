import Formulario from "./Formulario"

function FormularioPacientes() {
  return (
    <section className="formulario-pacientes">
        <h2>Seguimiento Pacientes</h2>
        <p>Añade Pacientes y {''}
            <span>Adminístralos</span>
        </p>

        <Formulario/>
    </section>
  )
}

export default FormularioPacientes