import React from 'react';

const PreviewPhoto = ({ previews }) => {
  return (
    <div>
      {previews.map(preview =>
        <img className="me-2" src={preview} width='100px' key={preview}></img>
      )}
    </div>
  );
}

export default PreviewPhoto;
