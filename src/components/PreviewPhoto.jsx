import React from 'react';

const PreviewPhoto = ({ previews }) => {
  return (
    <div>
      {previews.map(preview =>
        <img src={preview} width='100px' key={preview}></img>
      )}
    </div>
  );
}

export default PreviewPhoto;
