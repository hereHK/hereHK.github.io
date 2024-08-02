document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const panel = document.getElementById('panel');

    //Mostrar ocultar panel
    if(window.matchMedia('(min-width: 768px)')){
        let isPanelVisible = false; // Estado del panel

        toggleButton.addEventListener('click', function() {
            const button = this;
            button.classList.add('active');
            setTimeout(() => {
            button.classList.remove('active');
            }, 200); // El mismo tiempo que la duración de la transición en CSS

            if (isPanelVisible) {
                panel.style.display = 'none';
                panel.style.zIndex = '0';
            } else {
                panel.style.display = 'flex';
                panel.style.zIndex = '10';
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
            transicionPagina()
            main.style.backgroundColor = '#666666';
            main.style.borderRadius = '25px';
            break;  // Evita que el código continúe al siguiente caso
        case '/herramientas.html':
            transicionPagina()
            herramientas.style.backgroundColor = '#666666';
            herramientas.style.borderRadius = '25px';
            break;  // Evita que el código continúe al siguiente caso
        case '/proyectos.html':
            transicionPagina()
            proyectos.style.backgroundColor = '#666666';
            proyectos.style.borderRadius = '25px';
            PaginaVacia();
            break;  // Evita que el código continúe al siguiente caso
        case '/historiasyrese%C3%B1as.html':
            transicionPagina()
            historias.style.backgroundColor = '#666666';
            historias.style.borderRadius = '25px';
            PaginaVacia();

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

//Funcion para las paginas vacias
function PaginaVacia() {
    console.info('PAGINA SIN CONTENIDO');

    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'SinContenido-Container SinContenido'; // Aplicar estilos y animación

    // SVG de la señal de alerta
    let svgAlerta = `
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 21.6C17.292 21.6 21.6 17.292 21.6 12C21.6 6.70803 17.292 2.40003 12 2.40003C6.70803 2.40003 2.40003 6.70803 2.40003 12C2.40003 17.292 6.70803 21.6 12 21.6ZM13.2 15.6H10.8V18H13.2V15.6ZM13.2 6.00003H10.8V13.2H13.2V6.00003Z" fill="red"/>
        </svg>
    `;

    // Crear un contenedor para el SVG y añadirlo al nuevo div
    let contenedorSVG = document.createElement('div');
    contenedorSVG.innerHTML = svgAlerta;
    contenedorSVG.style.marginBottom = '20px';

    // Añadimos el contenedor del SVG al nuevo div
    nuevoDiv.appendChild(contenedorSVG);

    // Añadimos contenido al div
    let mensaje = document.createElement('p');
    mensaje.textContent = 'Esta es una página sin contenido.';
    mensaje.style.fontSize = '1.5em';
    mensaje.style.color = 'black';

    // Añadimos el mensaje al nuevo div
    nuevoDiv.appendChild(mensaje);

    // Añadimos el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
}

function transicionPagina() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");

    // Obtener el tamaño de la ventana del navegador
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Establecer el tamaño del SVG para que cubra toda la pantalla
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    // Agregar una clase al SVG para estilos
    svg.classList.add("transicion-svg");

    // Crear un rectángulo negro que cubra el SVG
    const rect = document.createElementNS(svgNamespace, "rect");
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", "black");

    // Agregar el rectángulo al SVG
    svg.appendChild(rect);

    // Agregar el SVG al cuerpo del documento
    document.body.appendChild(svg);

    // Esperar un momento antes de iniciar la animación para asegurar que el SVG esté visible
    setTimeout(() => {
        svg.classList.add("fade-out");
    }, 10); // Un pequeño retraso para asegurar que la transición se aplica

    // Eliminar el SVG del documento después de que la animación termine
    svg.addEventListener('transitionend', () => {
        document.body.removeChild(svg);
    });
}
    
