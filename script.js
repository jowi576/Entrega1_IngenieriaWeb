const inventario = [
    { nombre: "EcoTruck", precio: 45000 },
    { nombre: "Volt Sedan", precio: 32000 },
    { nombre: "Cyber Van", precio: 38000 }
];

function avisarBienvenida() {
    alert("¡Bienvenido a EcoDrive! Consulta nuestros modelos industriales.");
}

function mostrarInventario() {
    console.log("--- Lista de Vehículos Disponibles ---");

    for (let i = 0; i < inventario.length; i++) {
        console.log("Vehículo: " + inventario[i].nombre + " - Precio: " + inventario[i].precio + "€");
    }
}

function calcularPresupuesto() {
    let dinero = prompt("¿De cuánto presupuesto dispones para tu coche eléctrico?");
    
    if (dinero >= 32000) {
        alert("¡Buenas noticias! Tienes presupuesto suficiente para nuestro modelo más económico.");
    } else {
        alert("Lo sentimos, de momento no tenemos modelos por debajo de 32.000€.");
    }
}

avisarBienvenida();
mostrarInventario();