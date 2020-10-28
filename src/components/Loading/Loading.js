// import useContext (or we could write React.useContext)
import React from 'react';
import { BeatLoader } from 'react-spinners';

const styles = {};

export const Loading = () => {
  return (
    <div>
      <BeatLoader css={styles} sizeUnit={'px'} size={10} color={'rgba(0,0,0,0.2)'} />
    </div>
  );
};
