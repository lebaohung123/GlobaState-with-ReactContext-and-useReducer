import {
  ADD_TODO_INDEX,
  CHANGE_BTN_UPD,
  GET_TODO_BTNUPD,
  GET_TODO_INDEX,
  SET_TODO_BTNADD,
  SET_TODO_BTNUPD,
  TODO_ADD,
  TODO_DELETE,
  TODO_INPUT,
} from "./constants";

const initialState = {
  todos: ["Thức dậy", "Rửa mặt", "Ăn sáng"],
  todoInput: "",
  buttonUpdate: false,
  getTodoIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todoInput: "",
      };
    case TODO_DELETE:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case SET_TODO_BTNADD:
      return {
        ...state,
        buttonUpdate: action.payload,
      };
    case SET_TODO_BTNUPD:
      return {
        ...state,
        buttonUpdate: action.payload,
      };
    case GET_TODO_BTNUPD:
      const newArr = [...state.todos];
      const valArr = newArr.splice(action.payload, 1);
      return {
        ...state,
        todoInput: valArr,
      };
    case GET_TODO_INDEX:
      return {
        ...state,
        getTodoIndex: action.payload,
      };
    case ADD_TODO_INDEX:
      const oldArr = [...state.todos];
      const value = state.getTodoIndex;
      oldArr[value] = action.payload;
      return {
        ...state,
        todos: oldArr,
      };
    case CHANGE_BTN_UPD:
      return {
        ...state,
        buttonUpdate: action.payload,
      };
    default:
      throw new Error("Invalid action type: " + action.type);
  }
}

export { initialState };
export default reducer;
