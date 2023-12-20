function Navbar() {
  return (
    <header>
      <nav className="sm:px-10 bg-[var(--dark-gray)]">
        <ul className="nav-bar">
          <li className="logo">
            <a href="#">
              <div className="flex justify-center items-center gap-x-5">
                <img
                  src="images/evolugitech-logo.png"
                  alt="Evolugi Tech Logo"
                />
                <span className="font-bold text-xl hidden sm:block">
                  Evolugi Tech
                </span>
              </div>
            </a>
          </li>
          <input type="checkbox" id="check" />
          <div className="menu">
            <li>
              <a href="">Tech Reviews</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <label htmlFor="check" className="close-menu">
              X
            </label>
          </div>
          <label htmlFor="check" className="open-menu">
            Open
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
