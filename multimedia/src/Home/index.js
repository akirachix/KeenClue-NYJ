import React, { useState } from 'react';
import './style.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src='/Images/logo.png' alt='our logo'/>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item"><em><a href="#">Home</a></em></li>
          <li className="nav-item"><a href="#">Videos</a></li>
          <li className="nav-item"><a href="#">Blogs</a></li>
          <li className="nav-item"><a href="#">Podcast</a></li>
          <li className="nav-item"><a href="#">Portfolio</a></li>
          <li className="close-menu-item" onClick={closeMenu}>
            <span className="close-button">&times;</span>
          </li>
        </ul>
        <button
          className={`hamburger-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
        {/* <img src="Images/workimage.png" alt="work Image" className="workimage" /> */}
          <div>
            <p className="intro">Skills Of the future</p>
            <p className="skills">Technical expertise is just the opening act.<br/>
            The real stars are the skills that'll take you to the next level:
          </p> 
            <button className="learn-more" onClick={openModal}>
              Discover More
            </button>
          </div>
          <img src="/Images/workimage.png" alt="work Image" className="workimage" />
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Skill: Digital Fluency</h2>
            <p>
            In our increasingly digital world, the ability to effectively leverage technology, data, and digital tools will be essential. This includes skills like data analysis, digital communication, and the ability to quickly adapt to new technologies.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;





 