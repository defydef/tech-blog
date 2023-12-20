function Navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <a href="#">Evolugi</a>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            Open
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
