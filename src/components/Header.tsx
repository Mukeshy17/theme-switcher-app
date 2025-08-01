import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Header component.
 * Displays the app title and theme switcher.
 */
const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-gray-800 text-white z-10">
      <div className="text-lg font-bold">🌈 Multi Theme App</div>
      <select
        className="text-white bg-black p-2 rounded"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;