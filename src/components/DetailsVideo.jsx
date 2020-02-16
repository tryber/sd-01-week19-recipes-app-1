import React from 'react';
import YouTube from 'react-youtube';
import '../styles/DetailsVideo.css';

function identifyData(data) {
  if (data.meals || data.idMeal) {
    return data.meals ? data.meals[0] : data;
  }
  return data.drinks ? data.drinks[0] : data;
}

function DetailsVideo() {
  const firstData = JSON.parse(localStorage.foodData);
  const data = identifyData(firstData);
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
