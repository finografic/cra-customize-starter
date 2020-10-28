/** @jsx jsx */
import { ButtonLink } from 'components/Button';
import { Col, Row } from 'react-styled-flexboxgrid';
import { jsx } from '@emotion/core';
import { styles } from './NotFound.css';

const NotFound = () => (
  <section css={styles}>
    <Row middle="xs" center="xs" style={{ height: '100%' }}>
      <Col>
        <section>
          <h3>404 -Not Found</h3>
          <p>¯\_(ツ)_/¯</p>
          <ButtonLink to="/" label="Back Home" />
        </section>
      </Col>
    </Row>
  </section>
);

export default NotFound;
