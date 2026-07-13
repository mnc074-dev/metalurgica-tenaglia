/* ==========================================================================
   LÓGICA NATIVA DE LA VENTANA MODAL
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Captura de elementos del DOM
    const btnAbrir = document.getElementById('btn-abrir-presupuesto');
    const btnCerrar = document.getElementById('btn-cerrar-presupuesto');
    const modal = document.getElementById('modal-presupuesto');
    const opcionEmail = document.getElementById('opcion-email');

    // Funciones de control de estado
    const mostrarModal = () => modal.classList.add('activo');
    const ocultarModal = () => modal.classList.remove('activo');

    // Eventos para abrir y cerrar con clics directos
    btnAbrir.addEventListener('click', mostrarModal);
    btnCerrar.addEventListener('click', ocultarModal);

    // UX: Si el usuario hace clic afuera de la tarjeta (en el fondo oscuro), se cierra
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            ocultarModal();
        }
    });

    // UX: Si elige correo, la página se desplaza al formulario, entonces cerramos la modal
    opcionEmail.addEventListener('click', ocultarModal);
});