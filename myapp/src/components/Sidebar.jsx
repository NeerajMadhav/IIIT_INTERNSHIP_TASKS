//comfimport React, { useRef, useEffect } from 'react';
import '../styles/Sidebar.css';
import { TiHome } from 'react-icons/ti';
import { PiCardsBold } from 'react-icons/pi';
import { PiTableBold } from 'react-icons/pi';
import { GrPieChart } from 'react-icons/gr';
import { FaWpforms } from 'react-icons/fa6';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Clicked outside the sidebar, close it
        closeSidebar();
      }
    };

    if (isOpen) {
      // Add the event listener when the sidebar is open
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Remove the event listener when the component is unmounted or the sidebar is closed
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeSidebar]);

  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div ref={sidebarRef} className={sidebarClass}>
      <button className="close-btn" onClick={closeSidebar}>
        &times;
      </button>
      <ul>
        <li>
          <a href="#home">
            <TiHome />
            <b>  Home</b>
          </a>
        </li>
        <li>
          <a href="#Cards">
            <PiCardsBold />
            <b>  Cards</b>
          </a>
        </li>
        <li>
          <a href="#Table">
            <PiTableBold />
            <b>  Table</b>
          </a>
        </li>
        <li>
          <a href="#Piecharts">
            <GrPieChart />
            <b>  Piecharts</b>
          </a>
        </li>
        <li>
          <a href="#Form">
            <FaWpforms />
            <b>  Form</b>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;