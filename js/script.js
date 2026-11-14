import peliculas from './peliculas.js'

// script.js

// 1. Definimos los géneros asociando su ID de TMDB con el ID de su contenedor HTML
const generos = [
    { id: 28, selector: '#genero-28' },
    { id: 53, selector: '#genero-53' },
    { id: 12, selector: '#genero-12' }
];

// 2. URL base para las imágenes de la API de TMDB
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// 3. Recorremos cada género para filtrar y renderizar sus películas
generos.forEach(genero => {
    // Filtramos las películas cuyo array 'genre_ids' incluya el ID actual
    const peliculasFiltradas = peliculas.filter(pelicula => 
        pelicula.genre_ids.includes(genero.id)
    );

    // Seleccionamos el contenedor correspondiente en el DOM
    const contenedor = document.querySelector(genero.selector);

    // Verificamos que el contenedor exista
    if (contenedor) {
        // Limpiamos el contenedor por seguridad
        contenedor.innerHTML = '';

        // Iteramos sobre las películas filtradas para crear su estructura HTML
        peliculasFiltradas.forEach(pelicula => {
            // Creamos un elemento para la tarjeta de película
            const tarjetaPelicula = document.createElement('div');
            tarjetaPelicula.classList.add('pelicula-card');

            // Construimos la ruta de la imagen
            const imagenUrl = `${IMG_BASE_URL}${pelicula.poster_path}`;

            // Inyectamos la imagen y el título
            tarjetaPelicula.innerHTML = `
                <img src="${imagenUrl}" alt="${pelicula.title || 'Película'}">
                <h3>${pelicula.title || 'Título no disponible'}</h3>
            `;

            // Añadimos la tarjeta al contenedor de la sección
            contenedor.appendChild(tarjetaPelicula);
        });
    }
});