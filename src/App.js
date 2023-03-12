import React, { useRef } from "react";
import {
  ADD_TODO_INDEX,
  CHANGE_BTN_UPD,
  GET_TODO_BTNUPD,
  GET_TODO_INDEX,
  SET_TODO_BTNADD,
  TODO_ADD,
  TODO_DELETE,
  TODO_INPUT,
  useStore,
} from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput, buttonUpdate } = state;
  const inputRef = useRef();

  const handleInputTodo = (e) => {
    return {
      type: TODO_INPUT,
      payload: e.target.value,
    };
  };

  const handleAddTodo = () => {
    return {
      type: TODO_ADD,
      payload: todoInput,
    };
  };

  const handleDeleteTodo = (id) => {
    return {
      type: TODO_DELETE,
      payload: id,
    };
  };

  const handleButtonChange = () => {
    return {
      type: SET_TODO_BTNADD,
      payload: true,
    };
  };

  const handleGetData = (index) => {
    return {
      type: GET_TODO_BTNUPD,
      payload: index,
    };
  };

  const handleGetTodoIndex = (index) => {
    return {
      type: GET_TODO_INDEX,
      payload: index,
    };
  };

  const handleAddDisFunc = (index) => {
    // console.log(index);
    dispatch(handleButtonChange());
    dispatch(handleGetData(index));
    dispatch(handleGetTodoIndex(index));
  };

  const handleInputed = () => {
    return {
      type: ADD_TODO_INDEX,
      payload: todoInput,
    };
  };

  const handleChangeButton = () => {
    return {
      type: CHANGE_BTN_UPD,
      payload: false,
    };
  };

  const handleUpdateBtn = () => {
    dispatch(handleInputed());
    dispatch(handleChangeButton());
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>May quá chạy rồi</h1>
      <input
        ref={inputRef}
        placeholder="Todo?"
        onChange={(e) => dispatch(handleInputTodo(e))}
        value={todoInput}
      />
      {buttonUpdate ? (
        <button onClick={handleUpdateBtn}>Update</button>
      ) : (
        <button onClick={() => dispatch(handleAddTodo())}>Add Job</button>
      )}

      <ul style={{ margin: "20px" }}>
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <p>
              <button onClick={() => handleAddDisFunc(index)}>Change</button>
              <button onClick={(index) => dispatch(handleDeleteTodo(index))}>
                Delete
              </button>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
