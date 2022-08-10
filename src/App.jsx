import React, { useState } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState()

  function nuevaTarea() {
    setListaTareas([...listaTareas,tarea]);

  }

  function eliminaTarea(index) {
    setListaTareas(listaTareas.slice(0, index))
    // o con un filter
  }

  return (
    <div>
      <Row>
        <Col>
          <span>Tarea</span>
          <input
            type="text"
            value={ tarea }
            onChange={(e) => setTarea(e.target.value)}
          />
          <button onClick={nuevaTarea}>Enviar</button>
          
        </Col>
        <Col>
          <span>Tareas</span>
          <div>{listaTareas.map((elemento,index) => <div key={index} >{elemento}</div>)}</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
