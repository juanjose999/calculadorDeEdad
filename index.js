const añoUser = document.getElementById('añoUser');
const mesUser = document.getElementById('mesUser');
const diaUser = document.getElementById('diaUser');
const dateNow = document.getElementById('dateNow');
let resultado = document.getElementById('resultadoFinal');
const btnCalcular = document.getElementById('calcular');
const sectionInputs = document.getElementById('inputs');
const btnOtra = document.getElementById('recargar');

btnOtra.style.display = 'none'

sectionInputs.style.display = 'block'
btnCalcular.style.display = 'block'

// fecha actula la escribo en pantalla con textContent
function replace(){
    const currentDate = new Date();
    dateNow.textContent = currentDate.toDateString();
}
replace();

resultado.style.display = 'none'
btnCalcular.addEventListener('click', obtenerEdad);


function obtenerEdad(){
    const añoValue = añoUser.value.trim();
    const mesValue = añoUser.value.trim();
    const diaValue = diaUser.value.trim();

    if(añoValue === '' || mesValue === '' || diaValue === ''){
        alert("por favor completa los datos");
        return;
    } if (añoValue.length !== 4) {
        alert("año invalido");
        return;
    }
    sectionInputs.style.display = 'none';
    btnCalcular.style.display = "none"
    btnOtra.style.display = 'block'
    let fechaUser = añoUser.value+'-'+mesUser.value+'-'+diaUser.value;
    const fechaNacimiento = new Date(fechaUser);
    const currentDate = new Date();
    const edadResta = currentDate - fechaNacimiento;
    const edad = Math.floor(edadResta / (365.25 * 24 * 60 * 60 * 1000));
    resultado.textContent = `Tienes: ${edad} años de edad`;
    resultado.style.display = 'block';   
}

btnOtra.addEventListener('click', function(){
    location.reload();
})


