function Paciente({paciente}) {
  const {nombre, propietario, email, alta, sintomas} = paciente
  return (
    <div className="card-paciente">
        <h3>Nombre: <span>{nombre}</span></h3>
        <h3>Propietario: <span>{propietario}</span></h3> 
        <h3>Email: <span>{email}</span></h3>
        <h3>Alta: <span>{alta}</span></h3>
        <h3>Síntomas: <span>{sintomas}</span></h3>

        <div className="botones">
            <button className="editar">Editar</button>
            <button className="eliminar">Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente