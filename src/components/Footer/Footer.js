/** @jsx jsx */
import { Row, Col } from 'react-styled-flexboxgrid';
import { jsx } from '@emotion/core';
import { styles } from './Footer.css';

const Footer = () => (
  <footer className="footer" css={styles}>
    <Row>
      <Col xs={12} md={12}>
        &copy; Copyright {new Date().getFullYear()} Finografic
      </Col>
    </Row>
  </footer>
);
export default Footer;
