import React from 'react';
import useClipboard from 'react-use-clipboard';

import 'remixicon/fonts/remixicon.css';

export default function ShareRecipe() {
  const [setCopied] = useClipboard(window.location.href);

  return (
    <i className="ri-share-line ri-xl" onClick={setCopied} />
  );
}
