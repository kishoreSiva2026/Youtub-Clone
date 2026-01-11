import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../data/videos';
import VideoGrid from './VideoGrid';
import './VideoPage.css';

const VideoPage = () => {
  const { id } = useParams();
  const video = videos.find(v => v.id === parseInt(id));

  if (!video) {
    return <div>Video not found</div>;
  }

  const relatedVideos = videos.filter(v => v.id !== video.id).slice(0, 8);

  return (
    <div className="video-page">
      <div className="video-player-section">
        <div className="video-player">
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <div className="play-overlay">
            <div className="play-button">▶</div>
          </div>
        </div>
        <div className="video-details">
          <h1 className="video-title">{video.title}</h1>
          <div className="video-meta">
            <span>{video.views} • {video.time}</span>
          </div>
          <div className="channel-info">
            <img src={video.channelImage} alt={video.channel} className="channel-avatar" />
            <div className="channel-details">
              <h3 className="channel-name">{video.channel}</h3>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
          <div className="video-description">
            <p>{video.description}</p>
          </div>
        </div>
      </div>
      <div className="related-videos">
        <h2>Related Videos</h2>
        <VideoGrid videos={relatedVideos} />
      </div>
    </div>
  );
};

export default VideoPage;