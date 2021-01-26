import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Input, Menu } from 'semantic-ui-react'
import './Nav.css';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);



  return (
    <div className="Nav">
      <Menu className="Navbar Desktop-Nav" secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='transcation'
          active={activeItem === 'transcation'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='cashier'
          active={activeItem === 'cashier'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='setting'
            active={activeItem === 'setting'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <div className="Mobile-Nav">
        <i className="align justify icon breadcrumb" onClick={handleNavCollapse} />
        <div clas></div>
        <div className={`${isNavCollapsed ? 'collapse' : ''} nav-container`}>
          <div className="nav-list">
            <div className="active-Nav">home</div>
            <div >transcation</div>
            <div >cashier</div>
            <div >setting</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
