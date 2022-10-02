function Paciente() {
  return (
    <div className="card-paciente">
        <h3>Nombre: <span>Hook</span></h3>
        <h3>Propietario: <span>Juan</span></h3> 
        <h3>Email: <span>correo@correo.com</span></h3>
        <h3>Alta: <span>2022-10-10</span></h3>
        <h3>Síntomas: <span>Solo duerme</span></h3>

        <div className="botones">
            <button className="editar">Editar</button>
            <button className="eliminar">Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente