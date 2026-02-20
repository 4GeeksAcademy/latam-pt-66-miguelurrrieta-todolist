import React, { useState } from 'react';
import '../../styles/index.css';

// Usamos "function Home" para que coincida con lo que busca tu index/main
function Home() {
  const [tarea, setTarea] = useState('');
  const [lista, setLista] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() === '') return;
   
    // Agregamos el objeto a la lista
    setLista([...lista, { id: Date.now(), texto: tarea }]);
    setTarea('');
  };

  const eliminarTarea = (id) => {
    setLista(lista.filter(item => item.id !== id));
  };

  // Importante: Todo el HTML debe estar dentro del return
  return (
    <div className="todo-container">
      <h2>TodoList</h2>
     
      <form onSubmit={agregarTarea} className="input-group">
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder=""
        />
        <button type="submit" className="add-btn">Añadir</button>
      </form>

      <ul>
        {lista.map((item) => (
          <li key={item.id} className="todo-item">
            <span>{item.texto}</span>
            <button
              onClick={() => eliminarTarea(item.id)}
              className="delete-btn"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
     
      {lista.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}></p>
      )}
    </div>
  );
}

export default Home;