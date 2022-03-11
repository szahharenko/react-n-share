import React, { useState } from 'react';
import './molecule-burger-toggle.scss';

interface Props {
  onToggle: Function;
}

const BurgerToggle: React.FC<Props> = ({ onToggle }) => {
  const [menuActive, toggleMenu] = useState(false);

  const toggleClick = () => {
    toggleMenu(!menuActive);
    onToggle();
  }
  return (
    <button
      data-testid='burger-toggle'
      onClick={ toggleClick  }
      className={`burger-toggle ${menuActive ? 'burger-toggle--active' : 'burger-toggle--inactive'}`}>
      <span>Menu</span>
    </button>
  );
}

export default BurgerToggle;