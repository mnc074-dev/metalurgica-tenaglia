/* ==========================================================================
   VARIABLE GLOBAL DE ESTADO
   ========================================================================== */
// Usamos un valor booleano (true/false) para recordar en qué tema estamos.
// Inicia en 'false' porque la página carga por defecto en modo claro.
// Declaración de variable para el control del tema visual
var modoOscuro = false; 

/* ==========================================================================
   FUNCIÓN PRINCIPAL 
   ========================================================================== */
// Esta función se ejecuta cada vez que el usuario hace clic en el botón "Día/Noche".
// Definición de la función de cambio de tema
function cambiarTema() {
    
    // CAPTURA DE ELEMENTOS DEL DOM
    // Buscamos todas las cajas de nuestra página web utilizando sus IDs.
    // Asignación del contenedor principal, el banner y el pie de la página
    var cuerpo = document.getElementById("inicio");
    var cabecera = document.getElementById("cabecera-principal");
    var banner = document.getElementById("banner-principal");
    var pie = document.getElementById("pie-principal");
    
    // Tarjetas de la sección "Por qué elegirnos"
    // Asignación de la tarjetas de la sección
    var pilar1 = document.getElementById("pilar-1");
    var pilar2 = document.getElementById("pilar-2");
    var pilar3 = document.getElementById("pilar-3");
    
    // Tarjetas de la sección "Sectores de Especialización"
    var sector1 = document.getElementById("sector-1");
    var sector2 = document.getElementById("sector-2");
    var sector3 = document.getElementById("sector-3");
    
    
    // Aplicación del modo oscuro
    // Si el modo oscuro está apagado, procedemos a encenderlo.
    // Evaluación del estado actual del tema
    if (modoOscuro == false) {
        
        // Usamos (elemento != null) como barrera de seguridad. Si el usuario está
        // en la página "Contacto" (donde no hay tarjetas), la variable valdrá null.
        // Al preguntar esto, evitamos que el script "se rompa" intentando no pintar nada.
        
        // Verificación de existencia del contenedor principal
        if (cuerpo != null) {
            // Aplicación de color de fondo oscuro
            cuerpo.style.backgroundColor = "#1A1A1A"; 
            cuerpo.style.color = "#FFFFFF"; // Todo el texto por defecto se vuelve blanco
        }
        
        // Oscurecemos las franjas principales
        // Verificación y oscurecimiento de la cabecera, el banner y el pie de página
        if (cabecera != null) { cabecera.style.backgroundColor = "#000000"; }
        if (banner != null) { banner.style.backgroundColor = "#000000"; }
        if (pie != null) { pie.style.backgroundColor = "#000000"; }
        
        // Pintamos las tarjetas de gris oscuro y resaltamos su borde superior de verde
        // Modificación de los estilos de las tarjeta 
        if (pilar1 != null) { pilar1.style.backgroundColor = "#2A2A2A"; pilar1.style.borderTopColor = "#7FFF00"; }
        if (pilar2 != null) { pilar2.style.backgroundColor = "#2A2A2A"; pilar2.style.borderTopColor = "#7FFF00"; }
        if (pilar3 != null) { pilar3.style.backgroundColor = "#2A2A2A"; pilar3.style.borderTopColor = "#7FFF00"; }
        
        // Pintamos los sectores de gris oscuro y atenuamos sus bordes completos
        // Modificación de estilos de la tarjeta del primer, segundo y tercer sector
        if (sector1 != null) { sector1.style.backgroundColor = "#2A2A2A"; sector1.style.borderColor = "#555555"; }
        if (sector2 != null) { sector2.style.backgroundColor = "#2A2A2A"; sector2.style.borderColor = "#555555"; }
        if (sector3 != null) { sector3.style.backgroundColor = "#2A2A2A"; sector3.style.borderColor = "#555555"; }
        
        // Actualizamos
        // Le avisamos a la variable global que la página ya está oscura.
        // Actualización de la variable global a modo oscuro
        modoOscuro = true; 
        
    } else {
        
        // Aplicación del modo claro
        // Si el modo oscuro ya estaba encendido, el código entra por este 'else' 
        // para devolver cada elemento a sus colores originales.
        
        // Verificación y restauración del contenedor principal
        if (cuerpo != null) {
            // Restauración del color de fondo claro
            cuerpo.style.backgroundColor = "#FFFFFF"; 
            // Restauración del color de texto oscuro
            cuerpo.style.color = "#1A1A1A";
        }
        
        // Restauración de color claro de la cabecera, el banner y el pié de página
        if (cabecera != null) { cabecera.style.backgroundColor = "#3A3A3A"; }
        if (banner != null) { banner.style.backgroundColor = "#3A3A3A"; }
        if (pie != null) { pie.style.backgroundColor = "#3A3A3A"; }
        
        // Restauración de estilos originales 
        if (pilar1 != null) { pilar1.style.backgroundColor = "#F4F4F4"; pilar1.style.borderTopColor = "#3A3A3A"; }
        if (pilar2 != null) { pilar2.style.backgroundColor = "#F4F4F4"; pilar2.style.borderTopColor = "#3A3A3A"; }
        if (pilar3 != null) { pilar3.style.backgroundColor = "#F4F4F4"; pilar3.style.borderTopColor = "#3A3A3A"; }
    
        if (sector1 != null) { sector1.style.backgroundColor = "#F4F4F4"; sector1.style.borderColor = "#CCCCCC"; }
        if (sector2 != null) { sector2.style.backgroundColor = "#F4F4F4"; sector2.style.borderColor = "#CCCCCC"; }
        if (sector3 != null) { sector3.style.backgroundColor = "#F4F4F4"; sector3.style.borderColor = "#CCCCCC"; }
        
        // Actualización de estado
        // Le avisamos a la variable global que volvimos a apagar el modo oscuro.
        // Actualización de la variable global a modo claro
        modoOscuro = false; 
    }
}