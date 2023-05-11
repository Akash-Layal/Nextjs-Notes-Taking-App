"use client";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", message: "" });

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (
        todosJson.filter((e) => {
          return e.title == todo.title;
        }).length > 0
      ) {
        alert("Todo With This Title Already Exist ");
      } else todosJson.push(todo);
      localStorage.setItem("todos", JSON.stringify(todosJson));
      setTodo({ title: "", message: "" })
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
      setTodo({ title: "", message: "" })
    }
  };
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo);
  };

  return (
    <div className="container px-5 py-10 mx-auto flex">
      <div className="lg:w-full md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
        <h2 className="text-white text-2xl mb-1 font-medium title-font">
          Add a Todo
        </h2>
        <div className="relative mb-4">
          <label htmlFor="title" className="leading-7 text-sm text-gray-400">
            Title
          </label>
          <input
            onChange={onChange}
            value={todo.title}
            type="title"
            id="title"
            name="title"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            value={todo.message}
            onChange={onChange}
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          onClick={addTodo}
          className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
