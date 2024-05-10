import { useState } from "react";
import { isCallChain } from "typescript";


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

  const handleCheckedChange = (itemId: number) => {
    setTodos((todos: Todo[]) => {
      return todos.map((todo: Todo) => {
        return todo.id === itemId ? {...todo, isChecked: !todo.isChecked} : todo
      });
    });
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
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
      </div>
    </div>
  )
}

export default TodoList;