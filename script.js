// Selecciona el elemento con el ID 'menu-icon' y lo asigna a la variable menuIcon
let menuIcon = document.querySelector('#menu-icon');

// Selecciona el primer elemento con la clase 'navbar' y lo asigna a la variable navbar
let navbar = document.querySelector('.navbar');

// Selecciona el elemento con la clase 'logo' y lo asigna a la variable logo
let logo = document.querySelector('.logo');

// Selecciona todos los elementos 'section' y los asigna a la variable sections como una NodeList
let sections = document.querySelectorAll('section');

// Selecciona todos los enlaces dentro del elemento 'nav' en el encabezado y los asigna a la variable navlinks como una NodeList
let navlinks = document.querySelectorAll('header nav a');

// Cuando se produce un evento de desplazamiento en la ventana
window.onscroll = () => {
    // Para cada sección en el documento
    sections.forEach(sec => {
        // Obtiene la posición actual de desplazamiento vertical de la ventana
        let top = window.scrollY;
        
        // Obtiene la posición superior de la sección actual en relación con el borde superior del documento,
        // y se ajusta por 150 píxeles (offset) para personalizar la activación del enlace de navegación
        let offset = sec.offsetTop - 150;
        
        // Obtiene la altura de la sección actual
        let height = sec.offsetHeight;
        
        // Obtiene el ID de la sección actual
        let id = sec.getAttribute('id');

        // Verifica si el desplazamiento actual está dentro de los límites de la sección actual
        if (top >= offset && top < offset + height) {
            // Para cada enlace de navegación en el encabezado
            navlinks.forEach(link => {
                // Quita la clase 'active' de todos los enlaces de navegación
                link.classList.remove('active');
                
                // Agrega la clase 'active' al enlace de navegación correspondiente a la sección actual
                // mediante la búsqueda de un enlace que tenga un atributo href que contenga el ID de la sección actual
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Manejador de eventos para el icono del menú
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


