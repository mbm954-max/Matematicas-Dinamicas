function mostrarCampos() {
    const figura = document.getElementById("figura").value;
    let camposHtml = '';

    if (figura === 'cuadrado') {
        camposHtml = `
            <label for="lado">Lado:</label>
            <input type="number" id="lado" placeholder="Introduce el lado">
        `;
    } else if (figura === 'rectangulo') {
        camposHtml = `
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Introduce la base">
            <label for="altura">Altura:</label>
            <input type="number" id="altura" placeholder="Introduce la altura">
        `;
    } else if (figura === 'circulo') {
        camposHtml = `
            <label for="radio">Radio:</label>
            <input type="number" id="radio" placeholder="Introduce el radio">
        `;
    } else if (figura === 'triangulo') {
        camposHtml = `
            <label for="baseT">Base:</label>
            <input type="number" id="baseT" placeholder="Introduce la base">
            <label for="alturaT">Altura:</label>
            <input type="number" id="alturaT" placeholder="Introduce la altura">
        `;
    }

    document.getElementById("campos").innerHTML = camposHtml;
}

function calcular() {
    const figura = document.getElementById("figura").value;
    let area = 0, perimetro = 0;

    if (figura === 'cuadrado') {
        const lado = parseFloat(document.getElementById("lado").value);
        area = lado * lado;
        perimetro = 4 * lado;
    } else if (figura === 'rectangulo') {
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        area = base * altura;
        perimetro = 2 * (base + altura);
    } else if (figura === 'circulo') {
        const radio = parseFloat(document.getElementById("radio").value);
        area = Math.PI * radio * radio;
        perimetro = 2 * Math.PI * radio;
    } else if (figura === 'triangulo') {
        const baseT = parseFloat(document.getElementById("baseT").value);
        const alturaT = parseFloat(document.getElementById("alturaT").value);
        area = (baseT * alturaT) / 2;
        // Para el perímetro de un triángulo necesitamos los tres lados. 
        // Aquí, por simplificación, puedes agregar lógica si quieres ingresar los tres lados.
    }

    document.getElementById("area").innerText = "Área: " + area.toFixed(2);
    document.getElementById("perimetro").innerText = "Perímetro: " + perimetro.toFixed(2);
}