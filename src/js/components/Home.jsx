import React, { useState } from "react";

const Home = () => {
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [lista, setLista] = useState([]);

    const manejarAñadir = () => {
        if (nuevaTarea.trim() !== "") {
            setLista([...lista, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    const eliminarTarea = (indice) => {
        const nuevaLista = lista.filter((_, i) => i !== indice);
        setLista(nuevaLista);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Todo List</h1>
        
            <div className="mb-2 text-secondary">
                Tareas pendientes: {lista.length}
            </div>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe una tarea..."
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            manejarAñadir();
                        }
                    }}
                />
                <button className="btn btn-primary" onClick={manejarAñadir}>
                    Añadir
                </button>
            </div>

            <ul className="list-group shadow-sm">
                {lista.length === 0 ? (
                    <li className="list-group-item text-center text-muted">
                        No hay tareas, agrega alguna...
                    </li>
                ) : (
                    lista.map((tarea, indice) => (
                        <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
                            {tarea}
                            <button
                                className="btn btn-outline-danger btn-sm border-0"
                                onClick={() => eliminarTarea(indice)}
                            >
                                x
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Home;
