let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);

function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}
let boton2 = document.getElementById('restar');

boton2.addEventListener('click', hacerresta);

function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1-n2;
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;

}
let boton3 = document.getElementById('multiplicar');

boton3.addEventListener('click', hacermultiplicacion);

function hacermultiplicacion(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicación es: ${n3}`;
}
let boton4 = document.getElementById('dividir');

boton4.addEventListener('click', hacerdivision);

function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3= n1/n2;
    respuesta.innerHTML=`El resultado de la divición es: ${n3}`;
}