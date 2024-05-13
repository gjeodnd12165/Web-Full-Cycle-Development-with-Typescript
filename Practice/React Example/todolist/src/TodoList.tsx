import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./TodoList.css";
import Clock from "./Clock";
import Timer from "./Timer";


type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '공부하기', isChecked: false },
    { id: 2, text: '잠자기', isChecked: false },
    { id: 3, text: '회의하기', isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (itemId: number) => {
    setTodos((todos: Todo[]) => {
      return todos.map((todo: Todo) => {
        return todo.id === itemId ? {...todo, isChecked: !todo.isChecked} : todo
      });
    });
  }

  const handleAddTodo = () => {
    if(newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <Form className="new-todo-form">
          <Form.Control 
            className="new-todo-input"
            size="sm"
            type="text" 
            placeholder="할 일 입력"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button 
            className="new-todo-button"
            variant="primary"
            onClick={handleAddTodo}
          >추가</Button>
        </Form>
        <div className="board">
          <ul>
            {
                todos.map((todo: Todo) => (
                  <li key={todo.id}>
                    <input type="checkbox"
                    onChange={() => {
                      handleCheckedChange(todo.id);
                    }}/>
                    <span>
                      {
                        todo.isChecked ?
                        <del>{todo.text}</del> :
                        todo.text
                      }
                    </span>
                  </li>
              ))
            }
          </ul>
        </div>
        <Clock></Clock>
        <Timer></Timer>
      </div>
    </div>
  )
}

export default TodoList;