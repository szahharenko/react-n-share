import React, { useState } from 'react';
import BurgerToggle from '../molecule-burger-toggle/molecule-burger-toggle';
import Logo from '../molecule-logo/molecule-logo';
import './organism-header.scss';
import { MenuItem } from '../../models/models';

interface Props {
  menuItems: MenuItem[];
}

const Header: React.FC<Props> = ({ menuItems }) => {

  const [menuActive, toggleMenu] = useState(false);

  return (
    <div className='main-header'>
      <div className='wrapper'>
        <div data-testid='header' className={`header ${menuActive ? 'header--active' : 'header--closed'}`} >
          <a className='header__logo' href='#home'>
            <Logo/>
            <span>React and Share</span>
          </a>
          <ul data-testid='menu-ul' className={`header__menu ${menuItems.length === 0 ? 'header__menu--hidden' : ''}`}>
            { menuItems.map( (item, index) => {
              return <li key={index}><a href={item.link}>{item.title}</a></li>
            })}
          </ul>
          <BurgerToggle onToggle={ () => toggleMenu(!menuActive)}></BurgerToggle>
        </div>
      </div>
    </div>
  );
}

export default Header;