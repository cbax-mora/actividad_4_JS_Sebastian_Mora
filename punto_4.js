console.warn ('actividad 4 punto# 4')


let val1=prompt("Ingrese un valor")
val1= parseInt(val1)
let valor2=prompt("Ingrese otro valor")
val2= parseInt(val2)

let suma= val1+val2
let resta= val1-val2
let multiplicar= val1*val2
let dividir = val1/val2

let proceso=parseInt(prompt(" ¿Que desea realizar? 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"))
if(proceso === 1){
    alert(`la suma es ${suma}`)
} else if(proceso === 2){
    alert(`la resta es ${resta}`)
} else if(proceso === 3){
    alert(`la multiplicacion es ${multiplicar}`)
} else if(proceso === 4){
    alert(`la division es  ${dividir}`)
}else {
    console.error('proceso no existente')
}