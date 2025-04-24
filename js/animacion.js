// Le decimos a JavaScript que se ejecute una vez que el documento o DOM se haya cargado completamente
$(document).ready(function () {

    // --- Animaciones de entrada (se ejecutan una vez al cargar la página) ---

    // Recorre todos los enlaces o los elementos que se encuentran en la clase menu
    $('.menu a').each(function (index, elemento) {

        $(this).css({
            'top': '-200px'
        });

        // Implementamos una función para que cada uno de los elementos del menú aparezca con un efecto de desplazamiento
        $(this).animate({
            top: '0' // Anima la posición vertical de regreso a 0
        }, 3000 + (index * 500)); // Tiempo de animación con retraso secuencial
    });

    // Condición para aplicar animaciones al texto de bienvenida solo si el ancho de la pantalla es mayor a 800px
    if ($(window).width() > 800) {
        // Establecemos estilos iniciales del texto dentro del header
        // - Opacidad 0 (invisible)
        // - Margen superior en 0 (posición inicial antes de la animación)
        $('header .bienvenida-texto').css({
            opacity: 0,
            marginTop: 0
        });

        // Aplicamos una animación para que el texto aparezca con un efecto de desplazamiento
        $('header .bienvenida-texto').animate({
            opacity: 1, // Se hace visible
            marginTop: '-29px' // Se desplaza hacia arriba (ajusta este valor si es necesario)
        }, 4300); // Tiempo de animación
    }

    // --- Lógica de Scroll (se ejecuta una vez al cargar la página para configurar los eventos) ---

    var inicioPos = $('#inicio').length ? $('#inicio').offset().top : 0; // Verifica si el elemento existe
    var nosotrosPos = $('#nosotros').length ? $('#nosotros').offset().top : 0;
    var citaPos = $('#cita').length ? $('#cita').offset().top : 0;
    var serviciosPos = $('#servicios').length ? $('#servicios').offset().top : 0;
    var contactanosPos = $('#contactanos').length ? $('#contactanos').offset().top : 0;

    // Agregamos los manejadores de evento click para cada enlace del menú.
    // Esto se hace una sola vez.
    $('#btn-inicio').on('click', function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace (ir a #)
        $('html, body').animate({
            scrollTop: inicioPos - 100 // Desplaza a la posición de inicio (ajusta -100 si es necesario)
        }, 500); // El tiempo que tarda en el desplazamiento (en milisegundos)
    });

    $('#btn-nosotros').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotrosPos - 100 // Desplaza a la posición de nosotros
        }, 500);
    });

    $('#btn-agenda').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: citaPos - 100 // Desplaza a la posición de cita
        }, 500);
    });

    $('#btn-servicios').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: serviciosPos - 100 // Desplaza a la posición de servicios
        }, 500);
    });

    $('#btn-contactanos').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactanosPos - 100 // Desplaza a la posición de contáctanos
        }, 500);
    });

}); // Cierre de $(document).ready