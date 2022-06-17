import { nanoid } from "nanoid";

const DATA = [
  {
    id: "todo-" + nanoid(),
    name: "Eat something",
    completed: true,
    dueDate: "2022-05-15",
  },
  {
    id: "todo-" + nanoid(),
    name: "Drink water!!!",
    completed: false,
    dueDate: "2022-05-19",
  },
  {
    id: "todo-" + nanoid(),
    name: "Do some walk!!!",
    completed: false,
    dueDate: "2022-05-16",
  },
  {
    id: "todo-" + nanoid(),
    name: "Go to magazine and buy some stuffs",
    completed: false,
    dueDate: "2022-05-18",
  },
];

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
  Overdue: (todo) =>
    !todo.completed &&
    new Date(new Date().setHours(0, 0, 0, 0)).getTime() >
      new Date(new Date(todo.dueDate).setHours(0, 0, 0, 0)).getTime(),
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export { DATA, FILTER_MAP, FILTER_NAMES };
