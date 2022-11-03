export const MARCAS = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'},
]

//Generar un array con los ultimos 20 años

//guardo en const año actual
 const YEARMAX = new Date().getFullYear()  

 //Genero array con 20 años
 //En caso de necesitar mas años modificar new Array(20)
 export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index)


 export const PLANES = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'},
]