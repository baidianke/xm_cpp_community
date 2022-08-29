import ActiveLink from './ActiveLink';

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: ' (current page)';
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/a">
          <a className="nav-link">Page A</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/b">
          <a className="nav-link">PageB</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/list/1">
          <a className="nav-link">list/1</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/list/2" as="/dynamic-route">
          <a className="nav-link">/dynamic-route</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
