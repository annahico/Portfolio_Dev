document.addEventListener("DOMContentLoaded", function () {
    let menuVisible = false;

    // Function to show or hide the menu
    function mostrarOcultarMenu() {
        const nav = document.getElementById("nav");
        if (menuVisible) {
            nav.classList.remove("responsive");
        } else {
            nav.classList.add("responsive");
        }
        menuVisible = !menuVisible;
    }

    // Function to hide the menu after selecting an option
    function seleccionar() {
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    }

    // Function to apply skill animations
    function efectoHabilidades() {
        const skills = document.getElementById("skills");
        const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distanciaSkills >= 300) {
            const habilidades = document.getElementsByClassName("progreso");
            habilidades[0].style.width = habilidades[0].dataset.percent + "%";
            habilidades[0].classList.add("javascript");
            habilidades[1].style.width = habilidades[1].dataset.percent + "%";
            habilidades[1].classList.add("htmlcss");
            habilidades[2].style.width = habilidades[2].dataset.percent + "%";
            habilidades[2].classList.add("sql");
            habilidades[3].style.width = habilidades[3].dataset.percent + "%";
            habilidades[3].classList.add("node");
            habilidades[4].style.width = habilidades[4].dataset.percent + "%";
            habilidades[4].classList.add("react");
            habilidades[5].style.width = habilidades[5].dataset.percent + "%";
            habilidades[5].classList.add("typescript");
            habilidades[6].style.width = habilidades[6].dataset.percent + "%";
            habilidades[6].classList.add("comunication");
            habilidades[7].style.width = habilidades[7].dataset.percent + "%";
            habilidades[7].classList.add("work");
            habilidades[8].style.width = habilidades[8].dataset.percent + "%";
            habilidades[8].classList.add("creativity");
            habilidades[9].style.width = habilidades[9].dataset.percent + "%";
            habilidades[9].classList.add("dedication");
            habilidades[10].style.width = habilidades[10].dataset.percent + "%";
            habilidades[10].classList.add("proyect");
            habilidades[11].style.width = habilidades[11].dataset.percent + "%";
            habilidades[11].classList.add("proyect");
            habilidades[12].style.width = habilidades[12].dataset.percent + "%";
            habilidades[12].classList.add("proyect");
        }
    }

    // Detect scrolling to apply the skill bar animation
    window.onscroll = function () {
        efectoHabilidades();
    };
});
