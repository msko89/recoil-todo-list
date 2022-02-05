import React from 'react';
import axios from 'axios';
import { atom, selector, useRecoilValue } from 'recoil';

interface Props {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoIdState = atom({
  key: 'todoIdState',
  default: 1,
});

const todoItemQuery = selector({
  key: 'todoItemQuery',
  get: async ({ get }) => {
    const id = get(todoIdState);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  },
});

function App() {
  const { userId, title } = useRecoilValue(todoItemQuery);

  return (
    <>
      <div>{userId}</div>
      <div>{title}</div>
    </>
  );
}

export default App;
