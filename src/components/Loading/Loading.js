/** @jsx jsx */
import { BeatLoader } from 'react-spinners';
import { jsx } from '@emotion/core';
import { styles } from './Loading.css';

export const Loading = () => {
  return (
    <div css={styles}>
      <BeatLoader sizeUnit={'px'} size={10} color={'rgba(0,0,0,0.2)'} />
    </div>
  );
};
