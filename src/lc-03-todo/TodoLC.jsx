import React, { useReducer, useState } from "react";
import { ButtonBack } from "../components/ButtonBack";

const initialTodo = [
  { id: 1, title: "Todo #1" },
  { id: 2, title: "Todo #2" },
];

const Types = {
  add: "add",
  delete: "delete",
  edit: "edit",
  update: "update",
};

// [{}] xq el initialTodo es un arreglo de objetos
const reducer = (state = initialTodo, action = [{}]) => {
  // console.log(action) // Object { type: "delete", payload: 2 }
  // console.log(state) // Array [ {…}, {…} ]

  // console.log(...state) // digamos que ... quita los []
  // Object { id: 1, title: "Todo #1" } Object { id: 2, title: "Todo #2" }

  switch (action.type) {
    case Types.delete:
      return state.filter((s) => s.id != action.payload);
    //case Types.add: return [...state , { id: 5 , title: action.payload}]
    // el reducer debe mantenerce como una funcion pura por lo que no podemos usar acá el mathrandom para generar el id nuevo, este dato viene generalmente de la base de datos
    case Types.add:
      return [...state, action.payload];
    case Types.edit:
      return action.payload;
    // devolvemos la tarea actualizada o la original
    case Types.update:
      return state.map((stat) =>
        stat.id === action.payload.id ? action.payload : stat
      );
    default:
      return state;
  }
};

export const TodoLC = () => {
  //Va reducer() xq estamos ejecutando la función y devuelve el "initialTodo" por state xq ya tenemos valore por defecto en reducer
  const [state, dispatch] = useReducer(reducer, reducer());
  const [inputText, setinputText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todoEdit, setTodoEdit] = useState({});

  // onClick Add
  const handleClick = () => {
    if (isEdit) {
      const filtrado = state.filter((s) => s.id !== todoEdit.id);
      const newTodo = [...filtrado, { id: todoEdit.id, title: inputText }];
      dispatch({
        type: Types.edit,
        payload: newTodo,
      });
    } else {
      const newTodo = {
        id: Math.random().toString(36).substring(2),
        title: inputText,
      };
      dispatch({
        type: Types.add,
        payload: newTodo,
      });
    }
    setinputText(""); // Limpiamos input
    setIsEdit(false);
  };

  const handleEdit = (todo) => {
    // { id: 1, title: "Todo #1" }
    setinputText(todo.title);
    setTodoEdit(todo);
    setIsEdit(true);
  };

  return (
    <>
      <ButtonBack nombre="Luis Cabrera" />
      <h1>Todo App</h1>

      <div className="d-flex">
        <ul className="col-md-8">
          {state.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                className="btn btn-dark bg-transparent bi bi-trash"
                // por convención para cualquier dato que se utilice para la actualización va por la palbra 'payload' en lugar de poner Ej: id, de esta manera estaremos llamando al id en action.payload del reducer
                onClick={() =>
                  dispatch({
                    type: Types.delete,
                    payload: todo.id,
                  })
                }
              ></button>
              {/* Mi edit */}
              <button
                className="btn btn-dark bg-transparent bi bi-pencil"
                onClick={() => handleEdit(todo)}
              ></button>
              <button
                className="btn btn-dark bg-transparent bi bi-pencil-square"
                onClick={() =>
                  // escribimos el texto y después pulsamos el edit
                  dispatch({
                    type: Types.update,
                    // realizamos copia de todo y reemplazamos title
                    payload: { ...todo, title: inputText },
                  })
                }
              ></button>
            </li>
          ))}
        </ul>
        <div className="col-md-4">
          <input
            type="text"
            value={inputText}
            onChange={(ev) => setinputText(ev.target.value)}
            placeholder="Tarea"
            className="form-control"
            maxLength={25}
          />
          <button className="btn btn-primary mt-2" onClick={handleClick}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
