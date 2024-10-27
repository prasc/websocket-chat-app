import { useState } from 'react';
import Navbar from './components/Navbar';
import { User } from './types/Types';
import './assets/app.css';
import Chat from './components/Chat';

const users: User[] = [
  { userId: 1, name: 'Pras' },
  { userId: 2, name: 'Travis' },
];

function App() {
  return (
    <div>
      <Navbar users={users} />
      <Chat />
    </div>
  );
}

export default App;
