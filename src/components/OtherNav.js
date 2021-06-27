import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const OtherNav = () => {

  return (
    <section className='nav-section'>
        <div>
            <img className='logo' src='./images/logo-symbol-vit-liten.png' alt='Logo of the website, reads AT, which stands for Alex Thelander' />
        </div>
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <NavLink to='/Application' activeClassName="active">Application</NavLink>  
            <NavLink to='/About' activeClassName="active">About me</NavLink>
            <NavLink to='/Contact' activeClassName="active">Contact</NavLink>
        </nav>
    </section>
  );
};

export default OtherNav;