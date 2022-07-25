console.warn('punto  #5 actividad')

let huevo = prompt('Que tipo de huevo desea llevar? 1 para "a" o 2 para "aa"')
let cantHuevo = parseInt(prompt('cantidad de huevos que desea llevar'))

if (huevo = 1 && cantHuevo < 101){
    alert(`El total a pagar es ${(220 * cantHuevo)}`)
}else if (huevo = 1 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es ${(220 * cantHuevo) / 0.05}`)
}else if (huevo = 1 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es ${(220 *cantHuevo) / 0.08}`)
}else if(huevo = 1 && cantHuevo >= 301){
    alert(`El total a pagar es ${(220 *cantHuevo) / 0.10}`)
}else if(huevo = 2 && cantHuevo < 101){
    alert(`El total a pagar es ${(250 * cantHuevo)}`)
}else if(huevo = 2 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es ${(250* cantHuevo)/ 0.05}`)
}else if(huevo = 2 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es ${(250 *cantHuevo)/ 0.08}`)
}else if(huevo = 2 && cantHuevo >= 301){
    alert(`El total a pagar es ${(250 * cantHuevo)/ 0.10}`)
}