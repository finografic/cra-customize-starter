/** @jsx jsx */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { config, routes } from '_config';
import { Col, Row } from 'react-styled-flexboxgrid';
import { jsx } from '@emotion/core';
import dayjs from 'dayjs';
import { styles } from './Header.css';

const Header = () => {
  const [title, setTitle] = useState(config.appName);
  const location = useLocation();

  useEffect(() => {
    console.log('LOCATION: ', location);
    const [currentRoute] = routes.filter((route) => route.path === location.pathname);
    currentRoute?.title && setTitle(currentRoute?.title);
  }, [location]);

  return (
    <header className="header" css={styles}>
      <Row middle="xs">
        <Col xs={12} sm={10} className="header-left">
          <h1>{title}</h1>
        </Col>
        <Col xs={12} sm={2} className="header-right">
          <code>{dayjs().format('HH:mm:ss')}</code>
          {/* some content */}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
