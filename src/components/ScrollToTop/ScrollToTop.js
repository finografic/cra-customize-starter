import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = (props) => {
  useEffect(() => {
    if (props.history.action === 'POP') {
      return;
    }
    let hash = props.location.hash;
    if (hash) {
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  });

  return <div />;
};

ScrollToTop.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(ScrollToTop);
