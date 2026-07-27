/* ==========================================================================
   VARIABLE GLOBAL Y MEMORIA (LOCALSTORAGE)
   ========================================================================== */
var modoOscuro = false; 

// Al cargar cualquier página, revisamos la memoria del navegador.
// Si el usuario ya había elegido el modo oscuro antes, lo activamos de entrada.
if (localStorage.getItem("tema") === "oscuro") {
    modoOscuro = true;
    aplicarColores(); // Llamamos a la función para que pinte todo de oscuro inmediatamente
}

/* ==========================================================================
   FUNCIÓN PRINCIPAL (La que se activa al hacer clic en el botón)
   ========================================================================== */
function cambiarTema() {
    
    // Cambiamos el estado y lo guardamos en la memoria del navegador
    if (modoOscuro == false) {
        modoOscuro = true;
        localStorage.setItem("tema", "oscuro"); 
    } else {
        modoOscuro = false;
        localStorage.setItem("tema", "claro"); 
    }
    
    // Una vez guardado en la memoria, mandamos a pintar la página
    aplicarColores();
}

/* ==========================================================================
   FUNCIÓN QUE PINTA LOS COLORES
   ========================================================================== */
// Separamos esta parte para poder usarla tanto al hacer clic como al cargar páginas nuevas
function aplicarColores() {
    
    // Capturamos los elementos de DOM
    var cuerpo = document.body; 
    var pie = document.getElementById("pie-principal");
    
    var pilar1 = document.getElementById("pilar-1");
    var pilar2 = document.getElementById("pilar-2");
    var pilar3 = document.getElementById("pilar-3");
    
    var sector1 = document.getElementById("sector-1");
    var sector2 = document.getElementById("sector-2");
    var sector3 = document.getElementById("sector-3");
    
    // Aplicación de estilos según modo
    if (modoOscuro == true) {
        
        // --- Modo oscuro ---
        document.body.classList.add('modo-oscuro');
        
        cuerpo.style.backgroundColor = "#1A1A1A"; 
        cuerpo.style.color = "#FFFFFF"; 
        
        if (pie != null) { pie.style.backgroundColor = "#000000"; }
        
        if (pilar1 != null) { pilar1.style.backgroundColor = "#2A2A2A"; pilar1.style.borderTopColor = "#7FFF00"; }
        if (pilar2 != null) { pilar2.style.backgroundColor = "#2A2A2A"; pilar2.style.borderTopColor = "#7FFF00"; }
        if (pilar3 != null) { pilar3.style.backgroundColor = "#2A2A2A"; pilar3.style.borderTopColor = "#7FFF00"; }
        
        if (sector1 != null) { sector1.style.backgroundColor = "#2A2A2A"; sector1.style.borderColor = "#555555"; }
        if (sector2 != null) { sector2.style.backgroundColor = "#2A2A2A"; sector2.style.borderColor = "#555555"; }
        if (sector3 != null) { sector3.style.backgroundColor = "#2A2A2A"; sector3.style.borderColor = "#555555"; }
        
    } else {
        
        // --- Modo claro ---
        document.body.classList.remove('modo-oscuro');
        
        cuerpo.style.backgroundColor = "#FFFFFF"; 
        cuerpo.style.color = "#1A1A1A";
        
        if (pie != null) { pie.style.backgroundColor = "#3A3A3A"; }
        
        if (pilar1 != null) { pilar1.style.backgroundColor = "#F4F4F4"; pilar1.style.borderTopColor = "#3A3A3A"; }
        if (pilar2 != null) { pilar2.style.backgroundColor = "#F4F4F4"; pilar2.style.borderTopColor = "#3A3A3A"; }
        if (pilar3 != null) { pilar3.style.backgroundColor = "#F4F4F4"; pilar3.style.borderTopColor = "#3A3A3A"; }
    
        if (sector1 != null) { sector1.style.backgroundColor = "#F4F4F4"; sector1.style.borderColor = "#CCCCCC"; }
        if (sector2 != null) { sector2.style.backgroundColor = "#F4F4F4"; sector2.style.borderColor = "#CCCCCC"; }
        if (sector3 != null) { sector3.style.backgroundColor = "#F4F4F4"; sector3.style.borderColor = "#CCCCCC"; }
    }
}


/* ==========================================================================
   LÓGICA PARA FORMULARIO A WHATSAPP (CONTACTO TÉCNICO)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const formWhatsApp = document.getElementById('formulario-whatsapp');

    if (formWhatsApp) {
        formWhatsApp.addEventListener('submit', (evento) => {
            // Prevenimos el comportamiento por defecto de recargar la página
            evento.preventDefault();

            // Capturamos los valores
            const nombre = document.getElementById('wa-nombre').value.trim();
            const empresa = document.getElementById('wa-empresa').value.trim();
            const interes = document.getElementById('wa-interes').value;
            const mensaje = document.getElementById('wa-mensaje').value.trim();

            // Número destino (Modificar por el número oficial de Tenaglia)
            const numeroDestino = "2983415875";

            // Estructuración del mensaje
            let textoWA = `¡Hola! Solicito cotización técnica.%0A%0A`;
            textoWA += `*Nombre:* ${nombre}%0A`;
            
            if (empresa !== "") {
                textoWA += `*Empresa:* ${empresa}%0A`;
            }
            
            textoWA += `*Equipo:* ${interes}%0A`;
            textoWA += `*Detalle:* ${mensaje}`;

            // Apertura de WhatsApp en una pestaña nueva
            const enlaceWa = `https://wa.me/${numeroDestino}?text=${textoWA}`;
            window.open(enlaceWa, '_blank');
        });
    }
});