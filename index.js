const añoUser = document.getElementById('añoUser');
const mesUser = document.getElementById('mesUser');
const diaUser = document.getElementById('diaUser');
const dateNow = document.getElementById('dateNow');
let resultado = document.getElementById('resultadoFinal');
const btnCalcular = document.getElementById('calcular');
const sectionInputs = document.getElementById('inputs');
const btnOtra = document.getElementById('recargar');

btnOtra.style.display = 'none';

sectionInputs.style.display = 'block';
btnCalcular.style.display = 'block';

// fecha actual la escribo en pantalla con textContent
function replace() {
    const currentDate = new Date();
    dateNow.textContent = currentDate.toDateString();
}
replace();

resultado.style.display = 'none';
btnCalcular.addEventListener('click', obtenerEdad);

function obtenerEdad() {
    const añoValue = añoUser.value.trim();
    const mesValue = mesUser.value.trim();
    const diaValue = diaUser.value.trim();

    if (añoValue === '' || mesValue === '' || diaValue === '') {
        alert("Por favor completa los datos");
        return;
    } 
    if (añoValue.length !== 4) {
        alert("Año inválido");
        return;
    }
    const añoActual = new Date().getFullYear();

    if(añoValue > añoActual){
        alert("año invalido")
        return;
    }

    let mensaje = "";

    if (añoValue >= 2000) {
        mensaje += " y perteneces a la generación milenial, y te quedan maximo 50 años de vida.";
    } else if (añoValue >= 1981) {
        mensaje += " y perteneces a la generación X  y te quedan maximo 30 años de vida.";
    } else if (añoValue >= 1965) {
        mensaje += " y perteneces a la generación baby boomer  y te quedan maximo 10 años de vida.";
    } else {
        mensaje += " y perteneces a la generación anterior a los baby boomers y queda menos de 1 mes de vida.";
    } 

    if(mesValue > 12){
        alert("mes invalido")
        return;
    } if (diaValue > 31 || diaValue <= 0) {
        alert("dia invalido")
        return;
    }

    sectionInputs.style.display = 'none';
    btnCalcular.style.display = "none";
    btnOtra.style.display = 'block';
    let fechaUser = añoUser.value + '-' + mesUser.value + '-' + diaUser.value;
    const fechaNacimiento = new Date(fechaUser);
    const currentDate = new Date();
    const edadResta = currentDate - fechaNacimiento;
    const edad = Math.floor(edadResta / (365.25 * 24 * 60 * 60 * 1000));
    resultado.textContent = `Tienes: ${edad} años de edad ${mensaje}`;
    resultado.style.display = 'block';
}

btnOtra.addEventListener('click', function () {
    location.reload();
});
