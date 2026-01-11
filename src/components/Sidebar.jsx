import React from 'react';
import { FaHome, FaCompass, FaPlay, FaClock, FaThumbsUp, FaDownload, FaHistory, FaList, FaCog, FaFlag, FaQuestion, FaComment } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const mainItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaCompass />, label: 'Explore' },
    { icon: <FaPlay />, label: 'Subscriptions' }
  ];

  const libraryItems = [
    { icon: <FaList />, label: 'Library' },
    { icon: <FaHistory />, label: 'History' },
    { icon: <FaPlay />, label: 'Your videos' },
    { icon: <FaClock />, label: 'Watch later' },
    { icon: <FaThumbsUp />, label: 'Liked videos' },
    { icon: <FaDownload />, label: 'Downloads' }
  ];

  const moreItems = [
    { icon: <FaCog />, label: 'Settings' },
    { icon: <FaFlag />, label: 'Report history' },
    { icon: <FaQuestion />, label: 'Help' },
    { icon: <FaComment />, label: 'Send feedback' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          {mainItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>Library</h3>
          {libraryItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>More from YouTube</h3>
          {moreItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;