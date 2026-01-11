import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="video-card-link">
      <div className="video-card">
        <div className="thumbnail-container">
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <div className="duration">{video.duration}</div>
        </div>
        <div className="video-info">
          <img src={video.channelImage} alt={video.channel} className="channel-avatar" />
          <div className="video-details">
            <h3 className="video-title">{video.title}</h3>
            <p className="channel-name">{video.channel}</p>
            <p className="video-stats">{video.views} • {video.time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;