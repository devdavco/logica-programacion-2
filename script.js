var prompt = require('prompt-sync')();


function convertirGradosFK(gradosC){

    let gradosF = (gradosC * 1.8) + 32;
    
    let gradosK = gradosC + 273.15;

    console.log(`Grados Kelvin: ${gradosK}`);
    console.log(`Grados Fahrenheit: ${gradosF}`);
}


let grados = Number(prompt("ingrese el los grados: "))

convertirGradosFK(grados);
