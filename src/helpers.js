//obtiener la diferencia de año
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//calcula el incremento dependiendo de las marcas
export function calMarca(marca, resultado) {
    let incremento;

    switch(marca) {
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        default:
            break;
    }

    return incremento;
}

//calculo del incremento de acuerdo al tipo de plan
export function calPlan(plan) {
    return (plan === 'basico' ? 1.20 : 1.50);
}

//colocar la primera palabra en mayuscula en el resumen
export function primerMayus(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}