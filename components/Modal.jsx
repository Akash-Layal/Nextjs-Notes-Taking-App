import { useEffect, useState } from "react";
import Toastsucess from "./Toastsucess";

const Modal = ({ open, singleTodo, onClose }) => {
  const [todo, setTodo] = useState({ title: "", message: "" });


  const updateTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);

      if (todosJson.filter((value) => value.title != todo.title)) {
        let index = todosJson.findIndex((value) => {
          return value.title == singleTodo[0].title;
        });
        todosJson[index].title = todo.title;
        todosJson[index].message = todo.message;
        localStorage.setItem("todos", JSON.stringify(todosJson));
        onClose();
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };

  useEffect(() => {
    if (singleTodo) {
      if (singleTodo.length > 0) {
        setTodo(singleTodo[0]);
      }
    }
  }, [open, setTodo]);
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  if (!open) return null;
  return (
    <>
      <div className="bg-black h-screen w-screen fixed top-0 left-0 bg-opacity-70" />
      {/* // <!-- Main modal --> */}

      <div className="fixed top-[50%] left-[50%] bgre z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
        <div className="relative w-full max-w-[90vw] max-h-full ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Update Your Todo List
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div className="relative mb-4">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-400"
                >
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
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  onChange={onChange}
                  value={todo.message}
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => updateTodo(() => onClose())}
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Todo
              </button>
              <button
                onClick={() => onClose(() => setToast(false))}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
