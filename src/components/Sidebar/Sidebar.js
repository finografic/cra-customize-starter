/** @jsx jsx */
import { jsx } from '@emotion/core';
import { config, routes } from '_config';
import { Nav } from 'components/Nav';
import { layout } from 'styles';
import { styles } from './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar" css={styles}>
      <header>
        {config.logoURL && (
          <img src={config.logoURL} alt={config.appName} width={layout.sidebar.width} className="logo" />
        )}
      </header>
      <div className="sidebar-content-wrapper">
        <Nav routes={routes} />
      </div>
    </aside>
  );
};

export default Sidebar;
