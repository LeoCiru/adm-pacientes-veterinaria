import { useState } from "react"
import Advertencia from "./Advertencia"

function Formulario() {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true);
        } else {
            setError(false);
        }
    }
  return (
    <>
        <form>
        {error && <Advertencia/>}
            <label htmlFor="nombre">NOMBRE MASCOTA</label>
            <input 
                type="text"
                id="nombre"
                placeholder='Nombre de la Mascota'
                autoComplete='off'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />

            <label htmlFor="propietario">NOMBRE PROPIETARIO</label>
            <input
                type="text"
                id="propietario"
                placeholder='Nombre del Propietario'
                autoComplete='off'
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
            />

            <label htmlFor="email">EMAIL</label>
            <input
                type="email"
                id="email"
                placeholder='Email Contacto Propietario'
                autoComplete='off'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="alta">ALTA</label>
            <input
                type="date"
                id="alta"
                autoComplete='off'
                value={alta}
                onChange={e => setAlta(e.target.value)}
            />

            <label htmlFor="sintomas">SÍNTOMAS</label>
            <textarea
                id="sintomas"
                placeholder='Describe los Síntomas'
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
            />
            <input
                type="submit"
                value="AGREGAR PACIENTE"
                onClick={handleSubmit}
            />
        </form>
    </>
  )
}

export default Formulario