
//Funcion que retorna la diferencia con el año actual
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

//Calcular marca
export function calcularMarca(marca) {
    let incremento

    switch (marca) {
        case '1':
            incremento = 1.3
            break;
        case '2':
            incremento = 1.15
            break;
        case '3':
            incremento = 1.05
            break;
        default:
            break;
    }

    return incremento
}

//Calcular plan 
export function calcularPlan(plan) {
    return plan === '1' ? 1.2 : 1.5
}

//Formatear resultado con dos decimales y a moneda local
export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
    })
}