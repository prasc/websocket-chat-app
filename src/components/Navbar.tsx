import React from 'react';
import { User } from '../types/Types';
import '../assets/navbar.css';

type NavbarProps = {
  users: User[];
};

const Navbar = ({ users }: NavbarProps) => {
  return (
    <nav className="navbar">
      {users.map((user) => {
        return <button key={user.name}>{user.name}</button>;
      })}
    </nav>
  );
};

export default Navbar;
