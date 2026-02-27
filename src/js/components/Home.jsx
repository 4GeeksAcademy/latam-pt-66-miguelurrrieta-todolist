import React, { useState } from 'react';

function Home() {
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [lista, setLista] = useState(["Hacer la compra", "Estudiar React"]);

    const manejarAñadir = () => {
        if (nuevaTarea.trim() !== "") {
            setLista([...lista, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    const eliminarTarea = (indice) => {
        setLista(lista.filter((_, i) => i !== indice));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className='form-control'
                    placeholder="Escribe una tarea..."
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button className="btn-btn-primary"
                onClick={manejarAñadir}
            >Añadir</button>
            </div>

            <ul className="list-group">
                {lista.map((tarea, indice) => (
                    <li key={indice} className="tarea-item d-flex justify-content-between">
                        {tarea}
                        <button className="btn-eliminar" onClick={() => eliminarTarea(indice)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home; 
