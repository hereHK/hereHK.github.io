document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const panel = document.getElementById('panel');

    //Mostrar ocultar panel
    if(window.matchMedia('(min-width: 768px)')){
        let isPanelVisible = false; // Estado del panel

        toggleButton.addEventListener('click', function() {
            if (isPanelVisible) {
                panel.style.display = 'none';
                toggleButton.textContent = 'Menu de navegación';
            } else {
                panel.style.display = 'flex';
                toggleButton.textContent = 'Cerrar menu';
            }
            isPanelVisible = !isPanelVisible; // Alterna el estado
        });
    }else {
        panel.style.display = 'flex'
        toggleButton.style.display = 'none'

    }
    

    ResaltarNav()

});

//Resalta la parte del panel en la que te encuentras
function ResaltarNav(){

    const currentPage = window.location.pathname;

    console.log(currentPage)
    //NAVS A RESALTAR
    const proyectos = document.getElementById('proyectos')
    const herramientas = document.getElementById('herramientas')
    const historias = document.getElementById('historias')
    const main = document.getElementById('main')

    switch (currentPage) {
        case '/index.html':
            main.style.backgroundColor = '#084512';
            main.style.borderRadius = '5%';
            main.style.boxShadow = '0.5px 2px 18px red';
            break;  // Evita que el código continúe al siguiente caso
        case '/herramientas.html':
            herramientas.style.backgroundColor = '#084512';
            herramientas.style.borderRadius = '5%';
            herramientas.style.boxShadow = '0.5px 2px 18px red';
            break;  // Evita que el código continúe al siguiente caso
        case '/proyectos.html':
            proyectos.style.backgroundColor = '#084512';
            proyectos.style.borderRadius = '5%';
            proyectos.style.boxShadow = '0.5px 2px 18px red';
            break;  // Evita que el código continúe al siguiente caso
        case '/historiasyrese%C3%B1as.html':
            historias.style.backgroundColor = '#084512';
            historias.style.borderRadius = '5%';
            historias.style.boxShadow = '0.5px 2px 18px red';
            break;  // Evita que el código continúe al siguiente caso
        default:
            // Opcional: Establece un estilo por defecto si es necesario
            break;
    }
}

function copyClick(elementId){
     const elemento = document.getElementById(elementId);
     const texto = elemento.textContent || elemento.innerText;
     navigator.clipboard.writeText(texto).then(function() {
        // Mostrar un mensaje de éxito
        alert('Texto copiado al portapapeles');
    }).catch(function(err) {
        // Manejar errores
        console.error('Error al copiar el texto: ', err);
    });
}

