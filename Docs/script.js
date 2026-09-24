const btnIngresar = document.getElementById('btn-ingresar');
const pantallaInicio = document.getElementById('pantalla-inicio');
const contenidoPrincipal = document.getElementById('contenido-principal');
const btnRegresarInicio = document.getElementById('btn-regresar-inicio');

// Botón INGRESAR
btnIngresar.addEventListener('click', () => {
    pantallaInicio.style.display = 'none'; 
    contenidoPrincipal.style.display = 'flex';
    
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
    document.getElementById('presentacion').classList.add('activa');
    
    window.scrollTo(0, 0); 
});

// Botón Regresar al Inicio
btnRegresarInicio.addEventListener('click', () => {
    contenidoPrincipal.style.display = 'none'; 
    pantallaInicio.style.display = 'flex'; 
    menuLateral.classList.remove('activo'); 
    window.scrollTo(0, 0);
});

// Lógica del menú hamburguesa
const btnMenu = document.getElementById('menu-btn');
const menuLateral = document.getElementById('menu-lateral');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('activo'); 
});

// Lógica de cambio de secciones
const enlacesNavegacion = document.querySelectorAll('.link-menu');
const vistas = document.querySelectorAll('.vista');

enlacesNavegacion.forEach(enlace => {
    enlace.addEventListener('click', () => {
        const idDestino = enlace.getAttribute('data-destino');
        
        vistas.forEach(vista => {
            vista.classList.remove('activa');
        });

        document.getElementById(idDestino).classList.add('activa');
        menuLateral.classList.remove('activo');
        window.scrollTo(0, 0);
    });
});
