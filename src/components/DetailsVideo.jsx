import React from 'react';
import YouTube from 'react-youtube';
import '../styles/DetailsVideo.css';

function DetailsVideo() {
  const youtubeId = JSON.parse(localStorage.foodData);
  if (youtubeId.strYoutube) {
    const id = youtubeId.strYoutube.split('=')[1];
    return (
      <div>
        <p className="instructions-title">Video</p>
        <YouTube className="video-details" videoId={id} />
      </div>
    );
  }
  return <div>No video</div>;
}

export default DetailsVideo;
