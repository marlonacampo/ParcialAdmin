//datosShow2
let enviar2 = document.getElementById('enviar2');
let mostrar2= document.getElementById('mostrar2');

enviar2.addEventListener('click', ()=>{
    if (mostrar2.value != '') {        
        showing3();
    }else{                
        alert('el campo es obligatorio');
    }
});
function showing3() {
    document.getElementById('mostrando').classList.toggle('polv');
}

//datosShow
let intento= document.getElementById('Submit');
let show= document.getElementById('show');

intento.addEventListener('click', ()=>{
    if (show.value != '') {        
        showing();
    }else{                
        alert('el campo es obligatorio');
    }
});
function showing() {
    document.getElementById('polv').classList.toggle('polv');
}

//datosShow2
let enviar = document.getElementById('enviar');
let mostrar= document.getElementById('mostrar');

enviar.addEventListener('click', ()=>{
    if (mostrar.value != '') {        
        showing2();
    }else{                
        alert('el campo es obligatorio');
    }
});
function showing2() {
    document.getElementById('polvv').classList.toggle('polv');
}

//estrato
let estrato = document.getElementById('estrato');
let beneficio = document.getElementById('beneficio');
let estrato2 = document.getElementById('estrato2');
let beneficio2 = document.getElementById('beneficio2');

estrato2.addEventListener('keyup', (e)=>{
    var num = e.path[0].value;
    if (num <= 2 && num != '') {
        beneficio2.innerHTML = 'beneficiario matricula 0'
    }else {
        beneficio2.innerHTML = ''
    }
});
estrato.addEventListener('keyup', (e)=>{
    var num = e.path[0].value;
    if (num <= 2 && num != '') {
        beneficio.innerHTML = 'beneficiario matricula 0'
    }else {
        beneficio.innerHTML = ''
    }
});

//departamentos
let $departamento = document.getElementById('departamento');
let $ciudad = document.getElementById('ciudad');
let $departamento2 = document.getElementById('departamento2');
let $ciudad2 = document.getElementById('ciudad2');

let departamentos = [
    'Amazonas',
    'Antioquia',
    'Arauca',
    'Atlántico',
    'Bolivar',
    'Boyacá',
    'Caldas',
    'Caqueta',
    'Cesar',
    'Cundinamarca',
    'Huila',
    'La Guajira',
    'Magdalena',
    'Meta',
    'Norte de Santander',
    'Risaralda',
    'San Andrés y Providencia',
    'Santander',
    'Sucre',
    'Tolima',
    'Valle del Cauca'
]

let ciudades = [
    'Leticia',
    'Medellín',
    'Arauca',
    'Barranquilla',
    'Bogotá',
    'Cartagena de Indias',
    'Tunja',
    'Manizales',
    'Florencia',
    'Valledupar',
    'Aguachica',
    'Rio de oro',    
    'Neiva',
    'Riohacha',
    'Santa Marta',
    'Villavicencio',
    'San José de Cúcuta',
    'ocaña',
    'Pereira',
    'San Andrés',
    'Bucaramanga',
    'Sincelejo',
    'Ibagué',
    'Cali'
]

function showDEP(arreglo, lugar) {
    let elemento = '<option selected disable></option>'
    for (let i = 0; i < arreglo.length; i++) {
        elemento += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
    }
    lugar.innerHTML = elemento;
}
showDEP(departamentos, $departamento);
showDEP(departamentos, $departamento2);

$departamento2.addEventListener('change', () => {
    let valor2 = $departamento2.value;

    switch (valor2) {
        case 'Amazonas':
            let cortar1 = ciudades.slice(0, 1);
            showDEP(cortar1, $ciudad2);
            break;
        case 'Antioquia':
            let cortar2 = ciudades.slice(1, 2);
            showDEP(cortar2, $ciudad2);
            break;
        case 'Arauca':
            let cortar3 = ciudades.slice(2, 3);
            showDEP(cortar2, $ciudad2);
            break;
        case 'Atlantico':
            let cortar = ciudades.slice(3, 4);
            showDEP(cortar, $ciudad2);
            break;
        case 'Cundinamarca':
            let cortar4 = ciudades.slice(4, 5);
            showDEP(cortar4, $ciudad2);
            break;
        case 'Bolivar':
            let cortar5 = ciudades.slice(5, 6);
            showDEP(cortar5, $ciudad2);
            break;
        case 'Boyaca':
            let cortar6 = ciudades.slice(6, 7);
            showDEP(cortar6, $ciudad2);
            break;
        case 'Caldas':
            let cortar7 = ciudades.slice(7, 8);
            showDEP(cortar7, $ciudad2);
            break;
        case 'Caqueta':
            let cortar8 = ciudades.slice(8, 9);
            showDEP(cortar8, $ciudad2);
            break;
        case 'Cesar':
            let cortar9 = ciudades.slice(9, 12);
            showDEP(cortar9, $ciudad2);
            break;
        case 'Huila':
            let cortar10 = ciudades.slice(12, 13);
            showDEP(cortar10, $ciudad2);
            break;
        case 'La Guajira':
            let cortar11 = ciudades.slice(13,14);
            showDEP(cortar11, $ciudad2);
            break;
        case 'Magdalena':
            let cortar12 = ciudades.slice(14, 15);
            showDEP(cortar12, $ciudad2);
            break;
        case 'Meta':
            let cortar13 = ciudades.slice(15, 16);
            showDEP(cortar13, $ciudad2);
            break;
        case 'Norte de Santander':
            let cortar15 = ciudades.slice(16, 18);
            showDEP(cortar15, $ciudad2);
            break;
        case 'Risaralda':
            let cortar16 = ciudades.slice(18, 19);
            showDEP(cortar16, $ciudad2);
            break;
        case 'San Andrés y Providencia':
            let cortar17 = ciudades.slice(19, 20);
            showDEP(cortar17, $ciudad2);
            break;
        case 'Santander':
            let cortar18 = ciudades.slice(20, 21);
            showDEP(cortar18, $ciudad2);
            break;
        case 'Sucre':
            let cortar19 = ciudades.slice(21, 22);
            showDEP(cortar19, $ciudad2);
            break;
        case 'Tolima':
            let cortar20 = ciudades.slice(22, 23);
            showDEP(cortar20, $ciudad2);
            break;
        case 'Valle del Cauca':
            let cortar21 = ciudades.slice(23, 24);
            showDEP(cortar21, $ciudad2);
            break;

        default:
            break;
    }
});

$departamento.addEventListener('change', () => {
    let valor = $departamento.value;

    switch (valor) {
        case 'Amazonas':
            let cortar1 = ciudades.slice(0, 1);
            showDEP(cortar1, $ciudad);
            break;
        case 'Antioquia':
            let cortar2 = ciudades.slice(1, 2);
            showDEP(cortar2, $ciudad);
            break;
        case 'Arauca':
            let cortar3 = ciudades.slice(2, 3);
            showDEP(cortar2, $ciudad);
            break;
        case 'Atlantico':
            let cortar = ciudades.slice(3, 4);
            showDEP(cortar, $ciudad);
            break;
        case 'Cundinamarca':
            let cortar4 = ciudades.slice(4, 5);
            showDEP(cortar4, $ciudad);
            break;
        case 'Bolivar':
            let cortar5 = ciudades.slice(5, 6);
            showDEP(cortar5, $ciudad);
            break;
        case 'Boyaca':
            let cortar6 = ciudades.slice(6, 7);
            showDEP(cortar6, $ciudad);
            break;
        case 'Caldas':
            let cortar7 = ciudades.slice(7, 8);
            showDEP(cortar7, $ciudad);
            break;
        case 'Caqueta':
            let cortar8 = ciudades.slice(8, 9);
            showDEP(cortar8, $ciudad);
            break;
        case 'Cesar':
            let cortar9 = ciudades.slice(9, 12);
            showDEP(cortar9, $ciudad);
            break;
        case 'Huila':
            let cortar10 = ciudades.slice(12, 13);
            showDEP(cortar10, $ciudad);
            break;
        case 'La Guajira':
            let cortar11 = ciudades.slice(13,14);
            showDEP(cortar11, $ciudad);
            break;
        case 'Magdalena':
            let cortar12 = ciudades.slice(14, 15);
            showDEP(cortar12, $ciudad);
            break;
        case 'Meta':
            let cortar13 = ciudades.slice(15, 16);
            showDEP(cortar13, $ciudad);
            break;
        case 'Norte de Santander':
            let cortar15 = ciudades.slice(16, 18);
            showDEP(cortar15, $ciudad);
            break;
        case 'Risaralda':
            let cortar16 = ciudades.slice(18, 19);
            showDEP(cortar16, $ciudad);
            break;
        case 'San Andrés y Providencia':
            let cortar17 = ciudades.slice(19, 20);
            showDEP(cortar17, $ciudad);
            break;
        case 'Santander':
            let cortar18 = ciudades.slice(20, 21);
            showDEP(cortar18, $ciudad);
            break;
        case 'Sucre':
            let cortar19 = ciudades.slice(21, 22);
            showDEP(cortar19, $ciudad);
            break;
        case 'Tolima':
            let cortar20 = ciudades.slice(22, 23);
            showDEP(cortar20, $ciudad);
            break;
        case 'Valle del Cauca':
            let cortar21 = ciudades.slice(23, 24);
            showDEP(cortar21, $ciudad);
            break;

        default:
            break;
    }
});

//new input
let indefinido = document.getElementById('indefinido');
let Estado = document.getElementById('Estado');
let Bool = document.getElementById('bool');
let Trabajando = document.getElementById('Trabajando');

indefinido.onclick = function (e) {
    if (e.target.value === 'Indefinido') {
        Definir();
    }
}
Estado.onclick = function (e) {
    if (e.target.value === 'Casado') {
        Definir2();
    }
}
Bool.onclick = function (e) {
    if (e.target.value === 'Si') {
        Definir3();
    }
}
Trabajando.onclick = function (e) {
    if (e.target.value === 'Si') {
        Definir4();
    }
}


function Definir() {
    document.getElementById('contenedor').classList.toggle('contenedor');
}
function Definir2() {
    document.getElementById('contenedorEstado').classList.toggle('contenedorEstado');
}
function Definir3() {
    document.getElementById('contenedorBool').classList.toggle('contenedorBool');
}
function Definir4() {
    document.getElementById('contenedorWork').classList.toggle('contenedorWork');
}


//input2
let indefinidoo = document.getElementById('indefinidoo');
let Estado2 = document.getElementById('Estado2');
let hijos = document.getElementById('hijos');
let work2 = document.getElementById('Trabajando2');

work2.onclick = (e)=>{
    if(e.target.value === 'Si'){
        datos4();
    }
}
hijos.onclick = (e) =>{
    if (e.target.value === 'Si') {
        datos3();
    }
}
Estado2.onclick = (e)=>{
    if (e.target.value === 'Casado') {
        datos2();
    }
}
indefinidoo.onclick = (e)=>{
    if (e.target.value === 'Indefinido') {
        datos1();
    }
}

function datos4(){
    document.getElementById('contenedorWork2').classList.toggle('contenedor');
}
function datos3(){
    document.getElementById('contenedorBool2').classList.toggle('contenedor');
}
function datos2() {
    document.getElementById('contenedorEstadoo').classList.toggle('contenedor');
}
function datos1() {
    document.getElementById('contenedorr').classList.toggle('contenedor');
}





//Validacion de boostrap
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()