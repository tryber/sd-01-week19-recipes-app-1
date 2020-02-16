import React from 'react';
import YouTube from 'react-youtube';
import '../styles/DetailsVideo.css';

function DetailsVideo() {
  let data = JSON.parse(localStorage.foodData);
  if (data.meals) {
    data = data.meals[0] || data;
  } else {
    data = data.drinks[0] || data;
  }
  if (data.strYoutube) {
    const id = data.strYoutube.split('=')[1];
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
