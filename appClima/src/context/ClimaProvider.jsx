import {useState, createContext} from 'react'

const ClimaContext = createContext()

function ClimaProvider({children}) {
    const [busqueda, setBusqueda] = useState ({
        ciudad: '',
        pais: ''
})
const datosBusqueda = e =>{
    setBusqueda({

        ... busqueda,
        [e.target.name]: e.target.value
        
    })}
    
  return (
    <ClimaContext.Provider
    value={{
        busqueda,
        datosBusqueda
    }}>
        {children}
    </ClimaContext.Provider>

  )
}

export {
    ClimaProvider
} 
export default ClimaContext
    