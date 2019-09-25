import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const HandleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={HandleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="input text"
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return <div key={index}>{todo.text}</div>;
        })}
      </section>
    </>
  );
};
