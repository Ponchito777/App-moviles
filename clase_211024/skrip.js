const lista = document.getElementById('ListaTareas');
const boton = document.querySelector('button');
const entrada = document.querySelector('input');

let tareas = [];

boton.addEventListener('click', () => {
    const valorTarea = entrada.value;

    if (valorTarea.trim() !== '') {
        tareas.push(valorTarea);
        entrada.value = '';
        renderizarTareas();
    }
});

const renderizarTareas = () => {
    lista.innerHTML = '';
    tareas.forEach((tarea, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => {
            tareas.splice(indice, 1);
            renderizarTareas();
        };

        itemLista.appendChild(botonEliminar);
        lista.appendChild(itemLista);
    });
};
