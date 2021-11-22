import React from 'react';
import Timer from './Timer';
import Characters from './Characters';
import Alert from './Alert';

const Header = function () {
  const hidelist = () => {
    document.querySelector('.list').style.display = 'none';
  };
  return (
    <>
    <Alert />
    <nav className="header" onClick={() => hidelist()}>
     
      <h1 style={{ margin: '0' }}>Find Characters</h1>
      <Characters />
      <Timer />
      
    </nav>
    </>
  );
};

export default Header;
