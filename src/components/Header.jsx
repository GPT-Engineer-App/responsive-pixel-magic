import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Their Side</h1>
        <Button variant="outline">Login / Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;