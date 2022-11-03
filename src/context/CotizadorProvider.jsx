import { useState, createContext } from 'react' //IMportamos el createcontext
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from '../helpers'

const CotizadorContext = createContext()

//Provider sirve para definir la fuente de los datos
const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    //creamos un spinner que simula la carga
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos, //Hacer copia de los datos previos en el state para no perder la info previa
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000

        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        //Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100

        //Eropeo 30% - Americano 15% - Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        console.log(resultado)

        //Basico +20% - Competo +50%
        resultado *= calcularPlan(datos.plan)

        //Formatear resultado a dos decimales y moneda local
        resultado = formatearDinero(resultado)
        console.log(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }
 
    return (
        <CotizadorContext.Provider 
            //Los value se pasan como objetos
            //lleva doble llave una indica que es javascript y la otra que es un objeto
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext