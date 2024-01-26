import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="text-slate-200 px-10 pt-2 z-50 font-title-family sticky top-0">
      <nav className="flex items-start justify-between">
        <h1 className="text-4xl pt-3 font-bold uppercase">GTL</h1>
        <div className={classNames({ 'transform -translate-y-[65px]': !isHeaderVisible })} style={{ transition: 'transform 0.5s' }} onMouseEnter={() => setIsHeaderVisible(true)}
          onMouseLeave={() => setIsHeaderVisible(false)}>
          <div className='backdrop-blur-sm bg-blue-metal/50 shadow-md shadow-blue-white/10 flex items-center px-16 py-4 rounded-full overflow-hidden sticky'>
            <ul className='flex space-x-16 font-normal text-lg font-subtitle-family uppercase items-center text-slate-200'>
              <li>
                <a href="/#aboutme" className="text-white hover:font-semibold">
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="/#skills" className="text-white hover:font-semibold">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-white hover:font-semibold">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white hover:font-semibold">
                  Contacto
                </a>
              </li>
            </ul>

          </div>
          <div className={classNames('flecha relative cursor-pointer flex justify-center', {
            'opacity-65 transition-opacity duration-1000 ease-out': !isHeaderVisible,
            'opacity-0 transition-opacity duration-1000 ease-out': isHeaderVisible
          })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" fill="currentColor" class="bi flex bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>


        </div>

        <div
          className={classNames('icon-hamburguer', {
            'hovered': isHovered,
          })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={classNames('bi', 'bi-list', 'cursor-pointer', { 'hidden': isHovered })} viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={classNames('bi', 'bi-list-nested', 'cursor-pointer', { 'hidden': !isHovered })} viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
