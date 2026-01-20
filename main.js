document.addEventListener("DOMContentLoaded", function () {
    let menuVisible = false;

    // Function to show or hide the menu - HACERLA GLOBAL
    window.mostrarOcultarMenu = function() {
        const nav = document.getElementById("nav");
        if (menuVisible) {
            nav.classList.remove("responsive");
        } else {
            nav.classList.add("responsive");
        }
        menuVisible = !menuVisible;
    }

    // Function to hide the menu after selecting an option - HACERLA GLOBAL
    window.seleccionar = function() {
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    }

    // Function to download CV - HACERLA GLOBAL
    window.descargarCV = function() {
        console.log("Descargando CV...");
        // El enlace ya tiene el atributo download, así que no necesitamos hacer nada más
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.getElementById("nav");
        const navResponsive = document.querySelector('.nav-responsive');
        
        if (menuVisible && 
            !nav.contains(event.target) && 
            !navResponsive.contains(event.target)) {
            nav.classList.remove('responsive');
            menuVisible = false;
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menuVisible) {
            document.getElementById("nav").classList.remove('responsive');
            menuVisible = false;
        }
    });

    // Function to apply skill animations - SOLO SI EXISTEN LOS ELEMENTOS
    function efectoHabilidades() {
        const skills = document.getElementById("skills");
        if (!skills) return; // Si no existe la sección, salir
        
        const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
        
        // Solo ejecutar si los elementos existen
        if (distanciaSkills >= 300) {
            const habilidades = document.getElementsByClassName("progreso");
            
            // Verificar que existan elementos antes de acceder a ellos
            if (habilidades.length > 0) {
                for (let i = 0; i < habilidades.length; i++) {
                    if (habilidades[i].dataset && habilidades[i].dataset.percent) {
                        habilidades[i].style.width = habilidades[i].dataset.percent + "%";
                    }
                }
            }
        }
    }

    // Detect scrolling to apply the skill bar animation
    window.onscroll = function () {
        efectoHabilidades();
    };

    // Initialize on load
    efectoHabilidades();
});