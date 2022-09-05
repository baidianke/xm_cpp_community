import ActiveLink from '../ActiveLink';
import styles from './index.module.less';

const Nav = () => (
  <nav>
    <ul className={styles.nav}>
      <li>
        <ActiveLink activeClassName={styles.active} href="/problemset">
          <a className={styles.navLink}>题库</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.active} href="/a">
          <a className={styles.navLink}>a</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.active} href="/b">
          <a className={styles.navLink}>b</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName={styles.active} href="/person/123">
          <a className={styles.navLink}>个人中心</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
