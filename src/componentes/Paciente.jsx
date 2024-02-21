function Paciente({paciente, setPaciente, eliminarPaciente}) {
  const {nombre, propietario, email, alta, sintomas, id} = paciente
  function handleEliminar() {
    const confirmacion = confirm(`¿Seguro que deseas eliminar la cita de ${nombre}?`);

    if (confirmacion) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="card-paciente">
        <h3>Nombre: <span>{nombre}</span></h3>
        <h3>Propietario: <span>{propietario}</span></h3> 
        <h3>Email: <span>{email}</span></h3>
        <h3>Alta: <span>{alta}</span></h3>
        <h3>Síntomas: <span>{sintomas}</span></h3>

        <div className="botones">
            <button
              className="editar"
              onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button
              className="eliminar"
              onClick={handleEliminar}
              >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente