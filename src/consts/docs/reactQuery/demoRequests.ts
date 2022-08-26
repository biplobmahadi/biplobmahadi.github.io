export const providerAdd = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools position='bottom-right' initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);`;

export const apiHookGet = `import { useReactQuery } from "../libs/reactQuery";
import { ITodo } from "../interfaces/todo";

export const useGetTodos = () => {
  const { data } = useReactQuery<ITodo[]>(
    [
      {
        queryPath: "https://jsonplaceholder.typicode.com/todos",
        isPrivate: false,
      },
    ],
    { onSuccess: () => console.log("Success") }
  );
  return { todos: data };
};`;

export const apiHookPost = `import { usePostMutation } from "../libs/reactQuery";
import { ITodo } from "../interfaces/todo";

export const usePostTodo = () => {
  const { mutate } = usePostMutation<ITodo, Omit<ITodo, "id">>(
    {
      path: "https://jsonplaceholder.typicode.com/todos",
      isPrivate: false,
    },
    { onSuccess: () => console.log("Success") }
  );
  return { mutatePostTodo: mutate };
};`;

export const apiHookPut = `import { useReactQuery } from "../libs/reactQuery";
import { ITodo } from "../interfaces/todo";

export const usePutTodo = () => {
  const { mutate } = usePutMutation<ITodo, ITodo>(
    {
      pathFn: (id) => ${`https://jsonplaceholder.typicode.com/todos/{id}`},
      isPrivate: false,
    },
    { onSuccess: () => console.log("Success") }
  );
  return { mutatePutTodo: mutate };
};`;

export const apiHookDelete = `import { useDeleteMutation } from "../libs/reactQuery";
import { ITodo } from "../interfaces/todo";

export const useDeleteTodo = () => {
  const { mutate } = useDeleteMutation(
    {
      pathFn: (id) => ${`https://jsonplaceholder.typicode.com/todos/{id}`},
      isPrivate: false,
    },
    { onSuccess: () => console.log("Success") }
  );
  return { mutateDeleteTodo: mutate };
};`;

export const exportHooks = `export * from "./useGetTodos";
export * from "./usePostTodo";
export * from "./usePutTodo";
export * from "./useDeleteTodo";`;

export const todoInterface = `export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}`;

export const demoRequests = `import { FC } from "react";
import {
  useGetTodos,
  usePostTodo,
  usePutTodo,
  useDeleteTodo,
} from "../api/todo";

const DemoComponent: FC = () => {
  const { todos } = useGetTodos();
  const { mutatePostTodo } = usePostTodo();
  const { mutatePutTodo } = usePutTodo();
  const { mutateDeleteTodo } = useDeleteTodo();

  const handlePost = () => {
    mutatePostTodo({ userId: 3, title: "Good", completed: true });
  };

  const handlePut = () => {
    mutatePutTodo({ id: 1, userId: 3, title: "Best", completed: true });
  };

  const handleDelete = () => {
    mutateDeleteTodo({ id: 201 });
  };

  console.log(todos);

  return (
    <Fragment>
      <button onClick={handlePost}>Post</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handleDelete}>Delete</button>
    </Fragment>
  );
};

export default DemoComponent;`;
