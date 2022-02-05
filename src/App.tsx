import React from 'react';
import axios from 'axios';
import { atom, selector, useRecoilValue } from 'recoil';
import Calendar from './components/Calendar';

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

  return <Calendar />;
}

export default App;
