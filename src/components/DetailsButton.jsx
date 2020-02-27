import React, { useState } from 'react';
import '../styles/DetailsButton.css';

function DetailsButton() {
  const [text, setText] = useState('Iniciar Receita');
  return <button className="details-button">{text}</button>;
}

export default DetailsButton;
