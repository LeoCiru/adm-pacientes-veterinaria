import React from 'react'

function Formulario() {
  return (
    <>
        <form>
            <label htmlFor="nombre">NOMBRE MASCOTA</label>
            <input 
                type="text"
                id="nombre"
                placeholder='Nombre de la Mascota'
                autoComplete='off'
            />

            <label htmlFor="propietario">NOMBRE PROPIETARIO</label>
            <input
                type="text"
                id="propietario"
                placeholder='Nombre del Propietario'
                autoComplete='off'
            />

            <label htmlFor="email">EMAIL</label>
            <input
                type="email"
                id="email"
                placeholder='Email Contacto Propietario'
                autoComplete='off'
            />

            <label htmlFor="alta">ALTA</label>
            <input
                type="date"
                id="alta"
                autoComplete='off'
            />

            <label htmlFor="sintomas">SÍNTOMAS</label>
            <textarea
                id="sintomas"
                placeholder='Describe los Síntomas'
            />
            <input
                type="submit"
                value="AGREGAR PACIENTE"
            />
        </form>
    </>
  )
}

export default Formulario