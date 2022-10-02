import React from 'react'

function Formulario() {
  return (
    <>
        <form>
            <label htmlFor="nombre">NOMBRE MASCOTA
                <input type="text" id="nombre" placeholder='Nombre de la Mascota' />
            </label>

            <label htmlFor="propietario">NOMBRE PROPIETARIO
                <input type="text" id="propietario" placeholder='Nombre del Propietario' />
            </label>

            <label htmlFor="email">EMAIL
                <input type="email" id="email" placeholder='Email Contacto Propietario' />
            </label>

            <label htmlFor="alta">ALTA
                <input type="date" id="alta"/>
            </label>

            <label htmlFor="sintomas">SÍNTOMAS
                <textarea id="sintomas"></textarea>
            </label>

            <input type="submit" value="AGREGAR PACIENTE"/>
        </form>
    </>
  )
}

export default Formulario