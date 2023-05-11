"use client";
import Image from "next/image";
import deleteIcon from "@/public/delete-icon.svg";
import { useState, useEffect } from "react";
import Notodofound from "@/components/Notodofound";
import Modal from "@/components/Modal";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState();
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, [isOpen]);

  const deleteTodo = (title) => {
    let newTodos = todos.filter((item) => {
      return item.title != title;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const editTodo = (title) => {
    let todoItem = todos.filter((item) => {
      if (item.title == title) return title;
    });
    setSingleTodo(todoItem);
  };

  return (
    <>
      {todos && todos.length > 0 ? (
        <div
          className={`container ${
            todos.length < 2 ? "my-32" : ""
          } relative mx-auto my-20 shadow-md overflow-x-auto  sm:rounded-lg `}
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Message
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr
                  key={todo.title}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className=" capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {todo.title}
                  </th>
                  <td className="px-6 py-4 first-letter:uppercase">
                    {todo.message}
                  </td>
                  <td className="flex px-6 py-4 items-center justify-end">
                    <button
                      onClick={() => {
                        editTodo(todo.title);
                        setisOpen(true);
                      }}
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-3 uppercase font-bold"
                    >
                      Edit
                    </button>
                    <Modal
                      open={isOpen}
                      singleTodo={singleTodo}
                      onClose={() => setisOpen(false)}
                    />

                    <button
                      type="button"
                      onClick={() => {
                        deleteTodo(todo.title);
                      }}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <Image
                        src={deleteIcon}
                        height={20}
                        alt="delete icon"
                        className="invert"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Notodofound />
      )}
    </>
  );
}
