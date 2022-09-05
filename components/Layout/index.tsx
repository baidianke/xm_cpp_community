import { ReactNode } from 'react';
import styles from './index.module.less';
import Nav from '../Nav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
